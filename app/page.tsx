"use client";

import Head from "next/head";
import { useEffect, useState } from "react";
import { createPublicClient, http } from "viem";
import { base } from "viem/chains";
import { fanTokenAbi } from "@/public/abis/alfaAbi";

export default function Home() {
  const [totalFlowRate, setTotalFlowRate] = useState("");
  const [channelTotalInflowRate, setChannelTotalInflowRate] = useState("");
  const [flowBasedRewardsPercentage, setFlowBasedRewardsPercentage] =
    useState("2500");
  const [stakedBasedRewardsPercentage, setStakedBasedRewardsPercentage] =
    useState("7500");
  const [totalStaked, setTotalStaked] = useState("");
  const [multiplier, setMultiplier] = useState("30000");
  const [channelStakedBalance, setChannelStakedBalance] = useState("");
  const [channelRewards, setChannelRewards] = useState("");
  const [userRewards, setUserRewards] = useState("");
  const [subPrice, setSubPrice] = useState("500");
  const [channelSubscribers, setChannelSubscribers] = useState("");
  const [startTime, setStartTime] = useState("1713810305");
  const [rewardDuration, setRewardDuration] = useState("15552000");
  const [fetching, setFetching] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [timeOfRewardClaiming, setTimeOfRewardClaiming] = useState(
    (Date.now() / 1000).toFixed()
  );

  const monthlyDuration = 2628000; // 30.4... days, what Superfluid uses
  const monthlyishDuration = monthlyDuration / 60 / 60 / 24;

  const viemClient = createPublicClient({
    batch: {
      multicall: true,
    },
    chain: {
      ...base,
      rpcUrls: {
        default: {
          http: ["https://rpc-endpoints.superfluid.dev/base-mainnet"],
        },
      },
    },
    transport: http(),
  });

  const alfaAddress = "0x905Cf6aDF9510EE12C78dD9c6A5445320db24342";
  const ALFADecimals = 1e14;

  async function fetchContractData() {
    setFetching(true);

    const totalFlowRate = await viemClient.readContract({
      address: alfaAddress,
      abi: fanTokenAbi,
      functionName: "totalSubscriptionInflowRate",
    });
    const totalStaked = await viemClient.readContract({
      address: alfaAddress,
      abi: fanTokenAbi,
      functionName: "totalStaked",
    });
    const startTime = await viemClient.readContract({
      address: alfaAddress,
      abi: fanTokenAbi,
      functionName: "startTime",
    });
    const rewardDuration = await viemClient.readContract({
      address: alfaAddress,
      abi: fanTokenAbi,
      functionName: "rewardDuration",
    });
    const multiplier = await viemClient.readContract({
      address: alfaAddress,
      abi: fanTokenAbi,
      functionName: "multiplier",
    });
    const stakedBasedRewardsPercentage = await viemClient.readContract({
      address: alfaAddress,
      abi: fanTokenAbi,
      functionName: "stakedBasedRewardsPercentage",
    });
    const flowBasedRewardsPercentage = await viemClient.readContract({
      address: alfaAddress,
      abi: fanTokenAbi,
      functionName: "flowBasedRewardsPercentage",
    });

    setTotalFlowRate(
      ((totalFlowRate * BigInt(monthlyDuration)) / BigInt(1e18)).toString()
    );
    setTotalStaked((totalStaked / BigInt(ALFADecimals)).toString());
    setFlowBasedRewardsPercentage(flowBasedRewardsPercentage.toString());
    setStakedBasedRewardsPercentage(stakedBasedRewardsPercentage.toString());
    setMultiplier(multiplier.toString());
    setStartTime(startTime.toString());
    setRewardDuration(rewardDuration.toString());
    setFetching(false);
  }

  const calculateRewards = () => {
    const requiredFields = [
      { name: "totalFlowRate", label: "Total Flow Rate per month" },
      {
        name: "channelTotalInflowRate",
        label: "Channel Total Inflow Rate per month",
      },
      {
        name: "flowBasedRewardsPercentage",
        label: "Flow Based Rewards Percentage",
      },
      {
        name: "stakedBasedRewardsPercentage",
        label: "Staked Based Rewards Percentage",
      },
      { name: "multiplier", label: "Rewards multiplier" },
      { name: "totalStaked", label: "Total Staked" },
      { name: "channelStakedBalance", label: "Channel Staked Balance" },
      { name: "channelSubscribers", label: "Channel Subscribers" },
      { name: "rewardDuration", label: "Reward Duration" },
      { name: "timeOfRewardClaiming", label: "Time of Reward Claiming" },
    ];

    requiredFields.forEach((field) => {
      const errorElement = document.getElementById(`${field.name}-error`);
      if (errorElement) {
        errorElement.remove();
      }
    });

    const missingFields = requiredFields.filter((field) => !eval(field.name));

    if (missingFields.length > 0) {
      missingFields.forEach((field) => {
        const inputElement = document.getElementById(field.name);
        if (inputElement) {
          inputElement.insertAdjacentHTML(
            "afterend",
            `<span id="${field.name}-error" style="color: red;">Please fill in ${field.label}</span>`
          );
        }
      });

      return;
    }

    const totalFlowRateNum =
      (parseFloat(totalFlowRate) * 1e18) / monthlyDuration;
    const channelTotalInflowRateNum =
      (parseFloat(channelTotalInflowRate) * 1e18) / monthlyDuration;
    const flowBasedRewardsPercentageNum = parseFloat(
      flowBasedRewardsPercentage
    );
    const stakedBasedRewardsPercentageNum = parseFloat(
      stakedBasedRewardsPercentage
    );
    const totalStakedNum = parseFloat(totalStaked) * ALFADecimals;
    const channelStakedBalanceNum =
      parseFloat(channelStakedBalance) * ALFADecimals;

    const ONE_HUNDRED_PERCENT = 10000;
    const timeDelta = Number(timeOfRewardClaiming) - Number(startTime);
    const realtimeMultiplier =
      ((Number(rewardDuration) - timeDelta) * parseFloat(multiplier)) /
      Number(rewardDuration);
    const totalRewards =
      realtimeMultiplier === 0
        ? totalFlowRate
        : (realtimeMultiplier * totalFlowRateNum) / 10000;

    const totalFlowRateBasedRewards =
      (Number(totalRewards) * flowBasedRewardsPercentageNum) /
      ONE_HUNDRED_PERCENT;
    const totalStakedBasedRewards =
      (Number(totalRewards) * stakedBasedRewardsPercentageNum) /
      ONE_HUNDRED_PERCENT;

    const channelFlowBasedRewards =
      totalFlowRateNum === 0
        ? 0
        : (totalFlowRateBasedRewards * channelTotalInflowRateNum) /
          totalFlowRateNum;
    const channelStakedBasedRewards =
      totalStakedNum === 0
        ? 0
        : (totalStakedBasedRewards * channelStakedBalanceNum) / totalStakedNum;

    const channelRewardsNum =
      (channelFlowBasedRewards + channelStakedBasedRewards) *
      monthlyishDuration;
    const userRewardsNum =
      channelRewardsNum / (Number(channelTotalInflowRate) / Number(subPrice));

    setChannelRewards((channelRewardsNum / ALFADecimals).toFixed(2));
    setUserRewards((userRewardsNum / ALFADecimals).toFixed(2));
  };

  return (
    <div>
      <Head>
        <title>ALFA rewards calculator</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="container">
        <h1 style={{ fontSize: "28px", fontWeight: "bold" }}>
          ALFA rewards calculator
        </h1>
        <div>
          <div className="input-group">
            <label htmlFor="subPrice">Subscription price:</label>
            <select
              id="subPrice"
              value={subPrice}
              onChange={(e) => {
                setSubPrice(e.target.value);
                const newChannelTotalInflowRate =
                  parseInt(channelSubscribers) * parseInt(e.target.value);
                setChannelTotalInflowRate(newChannelTotalInflowRate.toString());
              }}
            >
              <option value="500">500</option>
              <option value="1000">1000</option>
              <option value="1500">1500</option>
            </select>
          </div>
          <div className="input-group">
            <label htmlFor="channelSubscribers">Channel subscribers:</label>
            <input
              type="string"
              id="channelSubscribers"
              value={channelSubscribers}
              onChange={(e) => {
                setChannelSubscribers(e.target.value);
                const newChannelTotalInflowRate =
                  parseInt(e.target.value) * parseInt(subPrice);
                setChannelTotalInflowRate(newChannelTotalInflowRate.toString());
              }}
            />
          </div>
          <div className="input-group">
            <label htmlFor="channelTotalInflowRate">
              Channel Total Inflow Rate per month:
            </label>
            <input
              type="string"
              id="channelTotalInflowRate"
              value={channelTotalInflowRate}
              onChange={(e) => setChannelTotalInflowRate(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="channelStakedBalance">
              Channel Staked Balance:
            </label>
            <input
              type="string"
              id="channelStakedBalance"
              value={channelStakedBalance}
              onChange={(e) => setChannelStakedBalance(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="totalStaked">Total Staked:</label>
            <input
              type="string"
              id="totalStaked"
              value={totalStaked}
              onChange={(e) => setTotalStaked(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="totalFlowRate">Total Flow Rate per month:</label>
            <input
              type="string"
              id="totalFlowRate"
              value={totalFlowRate}
              onChange={(e) => setTotalFlowRate(e.target.value)}
            />
          </div>
        </div>
        <div className="input-group">
          <div
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            style={{ fontSize: "20px" }}
          >
            {isDropdownOpen
              ? "Multipliers and Timestamps ▲"
              : "Multipliers and Timestamps ▼"}
          </div>
          {isDropdownOpen && (
            <>
              <div>
                <label htmlFor="multiplier">Rewards multiplier:</label>
                <input
                  type="string"
                  id="multiplier"
                  value={multiplier}
                  onChange={(e) => setMultiplier(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="flowBasedRewardsPercentage">
                  Flow Based Rewards Percentage (out of 10000):
                </label>
                <input
                  type="string"
                  id="flowBasedRewardsPercentage"
                  value={flowBasedRewardsPercentage}
                  onChange={(e) =>
                    setFlowBasedRewardsPercentage(e.target.value)
                  }
                />
              </div>

              <div>
                <label htmlFor="stakedBasedRewardsPercentage">
                  Staked Based Rewards Percentage (out of 10000):
                </label>
                <input
                  type="string"
                  id="stakedBasedRewardsPercentage"
                  value={stakedBasedRewardsPercentage}
                  onChange={(e) =>
                    setStakedBasedRewardsPercentage(e.target.value)
                  }
                />
              </div>
              <div>
                <label htmlFor="rewardDuration">Reward duration:</label>
                <input
                  type="string"
                  id="rewardDuration"
                  value={rewardDuration}
                  onChange={(e) => setRewardDuration(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="timeOfRewardClaiming">
                  Timestamp of reward claiming (set to current date by default):
                </label>
                <input
                  type="string"
                  id="timeOfRewardClaiming"
                  value={timeOfRewardClaiming}
                  onChange={(e) => setTimeOfRewardClaiming(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="startTime">
                  Start time of rewards distribution:
                </label>
                <input
                  type="string"
                  id="startTime"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                />
              </div>
            </>
          )}
        </div>
        <div
          className="input-group"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <button onClick={calculateRewards}>Calculate Monthly Rewards</button>
          <button onClick={fetchContractData}>
            {" "}
            {fetching ? "Fetching..." : "Fetch values from the contracts"}
          </button>
        </div>
        <div className="result">
          Monthly User ALFA Rewards: <span>{userRewards}</span>
        </div>
      </div>
    </div>
  );
}
