export const fanTokenAbi = [
  { inputs: [], stateMutability: "nonpayable", type: "constructor" },
  { inputs: [], name: "FAN_TOKEN_INSUFFICIENT_FAN_BALANCE", type: "error" },
  {
    inputs: [],
    name: "FAN_TOKEN_INSUFFICIENT_STAKED_FAN_BALANCE",
    type: "error",
  },
  { inputs: [], name: "FAN_TOKEN_INVALID_CREATOR_CHANNEL", type: "error" },
  { inputs: [], name: "FAN_TOKEN_INVALID_REWARDS_PERCENTAGE", type: "error" },
  { inputs: [], name: "FAN_TOKEN_ONLY_OWNER", type: "error" },
  { inputs: [], name: "FAN_TOKEN_TRANSFER_DISABLED", type: "error" },
  { inputs: [], name: "FAN_TOKEN_UNSTAKE_COOLDOWN_NOT_OVER", type: "error" },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "subscriber",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "channel",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "FanTokenClaimed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "subscriber",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "channel",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "FanTokenStaked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "subscriber",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "channel",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "FanTokenUnstaked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "uint8", name: "version", type: "uint8" },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "from", type: "address" },
      { indexed: true, internalType: "address", name: "to", type: "address" },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    inputs: [],
    name: "UNSTAKE_COOLDOWN_PERIOD",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "address", name: "spender", type: "address" },
    ],
    name: "allowance",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "approve",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "balanceOf",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "channelFactory",
    outputs: [
      { internalType: "contract IChannelFactory", name: "", type: "address" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "channel", type: "address" }],
    name: "channelStakedBalanceOf",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "channel", type: "address" }],
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address[]", name: "channels", type: "address[]" },
    ],
    name: "claimAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "channel", type: "address" }],
    name: "compound",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address[]", name: "channels", type: "address[]" },
    ],
    name: "compoundAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "subtractedValue", type: "uint256" },
    ],
    name: "decreaseAllowance",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "subscriber", type: "address" },
      { internalType: "address", name: "channel", type: "address" },
      { internalType: "int256", name: "totalFlowRate", type: "int256" },
      { internalType: "int96", name: "channelTotalInflowRate", type: "int96" },
      { internalType: "int96", name: "subscriptionFlowRate", type: "int96" },
    ],
    name: "estimateDailyMaxClaimableAmount",
    outputs: [
      { internalType: "uint256", name: "claimableAmount", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "flowBasedRewardsPercentage",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "channel", type: "address" }],
    name: "getChannelRewards",
    outputs: [
      { internalType: "uint256", name: "channelRewards", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "subscriber", type: "address" },
      { internalType: "address", name: "channel", type: "address" },
    ],
    name: "getClaimableAmount",
    outputs: [
      { internalType: "uint256", name: "claimableAmount", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "channel", type: "address" }],
    name: "getClaimableAmount",
    outputs: [
      { internalType: "uint256", name: "claimableAmount", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "subscriber", type: "address" },
      { internalType: "address", name: "channel", type: "address" },
    ],
    name: "getDailyMaxClaimableAmount",
    outputs: [
      { internalType: "uint256", name: "claimableAmount", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "subscriber", type: "address" },
      { internalType: "address", name: "channel", type: "address" },
    ],
    name: "getSubscriberCreatorChannelData",
    outputs: [
      {
        components: [
          { internalType: "uint256", name: "stakedBalance", type: "uint256" },
          { internalType: "uint256", name: "lastClaimedTime", type: "uint256" },
        ],
        internalType: "struct SubscriberCreatorChannelData",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "subscriber", type: "address" }],
    name: "getSubscriberData",
    outputs: [
      {
        components: [
          { internalType: "uint256", name: "balance", type: "uint256" },
          {
            internalType: "uint256",
            name: "lastUnstakedTime",
            type: "uint256",
          },
        ],
        internalType: "struct SubscriberData",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "subscriber", type: "address" },
      { internalType: "address[]", name: "channels", type: "address[]" },
    ],
    name: "getTotalClaimableAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "totalClaimableAmount",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "claimableChannels",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "subscriber", type: "address" },
      { internalType: "address[]", name: "channels", type: "address[]" },
    ],
    name: "getTotalDailyMaxClaimableAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "totalDailyMaxClaimableAmount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTotalRewardsDistribution",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "subscriber", type: "address" },
      { internalType: "int96", name: "flowRateDelta", type: "int96" },
    ],
    name: "handleSubscribe",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "addedValue", type: "uint256" },
    ],
    name: "increaseAllowance",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_owner", type: "address" },
      { internalType: "uint256", name: "_rewardDuration", type: "uint256" },
      { internalType: "uint256", name: "_multiplier", type: "uint256" },
      {
        internalType: "uint256",
        name: "_flowBasedRewardsPercentage",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_stakedBasedRewardsPercentage",
        type: "uint256",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "multiplier",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "account", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "ownerMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardDuration",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_channelFactory", type: "address" },
    ],
    name: "setChannelFactory",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_owner", type: "address" }],
    name: "setOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "channel", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "stake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "subscriber", type: "address" },
      { internalType: "address", name: "channel", type: "address" },
    ],
    name: "stakedBalanceOf",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "stakedBasedRewardsPercentage",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "startTime",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalStaked",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSubscriptionInflowRate",
    outputs: [{ internalType: "int256", name: "", type: "int256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "transfer",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "channel", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "unstake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "int96", name: "flowRateDelta", type: "int96" }],
    name: "updateTotalSubscriptionFlowRate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "newImplementation", type: "address" },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;
