export type Point = readonly [number, number];

export type PushTAgentId = "codex" | "claude" | "kimi";

export type PushTKeyframe = {
  t: number;
  agent: Point;
  block: Point;
  angle: number;
  coverage: number;
  action?: Point;
};

export type PushTRollout = {
  agentId: PushTAgentId;
  label: string;
  policy: string;
  color: string;
  steps: number;
  finalCoverage: number;
  frames: PushTKeyframe[];
};

export type PushTPreset = {
  id: string;
  label: string;
  seed: number;
  strategy: string;
  rollouts: Record<PushTAgentId, PushTRollout>;
};

export const pushTGoal = {
  position: [256, 256] as Point,
  angle: Math.PI / 4,
};

export const pushTAgents = [
  "codex",
  "claude",
  "kimi"
] as PushTAgentId[];

export const pushTPresets: PushTPreset[] = [
  {
    id: "seed-38",
    label: "Init 1",
    seed: 38,
    strategy: "Same initial state across Codex, Claude Code, and Kimi rollouts.",
    rollouts: {
      codex: {
        agentId: "codex",
        label: "Codex",
        policy: "beam_guarded",
        color: "#747fff",
        steps: 43,
        finalCoverage: 0.9959,
        frames: [
          {
            t: 0,
            agent: [
              149,
              244
            ],
            block: [
              240.223,
              210.674
            ],
            angle: 1.3847,
            coverage: 0
          },
          {
            t: 0.0233,
            agent: [
              155.185,
              243.948
            ],
            block: [
              240.061,
              209.701
            ],
            angle: 1.44258,
            coverage: 0.2162,
            action: [
              169.92,
              243.824
            ]
          },
          {
            t: 0.0465,
            agent: [
              161.885,
              243.891
            ],
            block: [
              239.971,
              208.943
            ],
            angle: 1.46871,
            coverage: 0.206,
            action: [
              169.92,
              243.824
            ]
          },
          {
            t: 0.0698,
            agent: [
              165.895,
              243.858
            ],
            block: [
              239.925,
              208.473
            ],
            angle: 1.47985,
            coverage: 0.2013,
            action: [
              169.92,
              243.824
            ]
          },
          {
            t: 0.093,
            agent: [
              167.974,
              243.84
            ],
            block: [
              239.903,
              208.229
            ],
            angle: 1.48459,
            coverage: 0.1992,
            action: [
              169.92,
              243.824
            ]
          },
          {
            t: 0.1163,
            agent: [
              168.994,
              243.832
            ],
            block: [
              239.893,
              208.113
            ],
            angle: 1.48661,
            coverage: 0.1982,
            action: [
              169.92,
              243.824
            ]
          },
          {
            t: 0.1395,
            agent: [
              179.6,
              249.953
            ],
            block: [
              239.893,
              208.105
            ],
            angle: 1.48674,
            coverage: 0.1982,
            action: [
              204.136,
              264.542
            ]
          },
          {
            t: 0.1628,
            agent: [
              190.789,
              256.586
            ],
            block: [
              239.893,
              208.105
            ],
            angle: 1.48674,
            coverage: 0.1982,
            action: [
              204.136,
              264.542
            ]
          },
          {
            t: 0.186,
            agent: [
              248.042,
              291.185
            ],
            block: [
              246.947,
              199.034
            ],
            angle: 1.32364,
            coverage: 0.1072,
            action: [
              375.219,
              368.131
            ]
          },
          {
            t: 0.2093,
            agent: [
              306.281,
              326.417
            ],
            block: [
              246.947,
              199.034
            ],
            angle: 1.32364,
            coverage: 0.1072,
            action: [
              375.219,
              368.131
            ]
          },
          {
            t: 0.2326,
            agent: [
              340.771,
              347.286
            ],
            block: [
              246.947,
              199.034
            ],
            angle: 1.32364,
            coverage: 0.1072,
            action: [
              375.219,
              368.131
            ]
          },
          {
            t: 0.2558,
            agent: [
              358.585,
              358.064
            ],
            block: [
              246.947,
              199.034
            ],
            angle: 1.32364,
            coverage: 0.1072,
            action: [
              375.219,
              368.131
            ]
          },
          {
            t: 0.2791,
            agent: [
              367.311,
              363.345
            ],
            block: [
              246.947,
              199.034
            ],
            angle: 1.32364,
            coverage: 0.1072,
            action: [
              375.219,
              368.131
            ]
          },
          {
            t: 0.3023,
            agent: [
              371.487,
              365.872
            ],
            block: [
              246.947,
              199.034
            ],
            angle: 1.32364,
            coverage: 0.1072,
            action: [
              375.219,
              368.131
            ]
          },
          {
            t: 0.3256,
            agent: [
              373.464,
              367.068
            ],
            block: [
              246.947,
              199.034
            ],
            angle: 1.32364,
            coverage: 0.1072,
            action: [
              375.219,
              368.131
            ]
          },
          {
            t: 0.3488,
            agent: [
              374.395,
              367.632
            ],
            block: [
              246.947,
              199.034
            ],
            angle: 1.32364,
            coverage: 0.1072,
            action: [
              375.219,
              368.131
            ]
          },
          {
            t: 0.3721,
            agent: [
              374.833,
              367.897
            ],
            block: [
              246.947,
              199.034
            ],
            angle: 1.32364,
            coverage: 0.1072,
            action: [
              375.219,
              368.131
            ]
          },
          {
            t: 0.3953,
            agent: [
              375.038,
              368.021
            ],
            block: [
              246.947,
              199.034
            ],
            angle: 1.32364,
            coverage: 0.1072,
            action: [
              375.219,
              368.131
            ]
          },
          {
            t: 0.4186,
            agent: [
              375.134,
              368.079
            ],
            block: [
              246.947,
              199.034
            ],
            angle: 1.32364,
            coverage: 0.1072,
            action: [
              375.219,
              368.131
            ]
          },
          {
            t: 0.4419,
            agent: [
              375.179,
              368.106
            ],
            block: [
              246.947,
              199.034
            ],
            angle: 1.32364,
            coverage: 0.1072,
            action: [
              375.219,
              368.131
            ]
          },
          {
            t: 0.4651,
            agent: [
              375.201,
              368.119
            ],
            block: [
              246.947,
              199.034
            ],
            angle: 1.32364,
            coverage: 0.1072,
            action: [
              375.219,
              368.131
            ]
          },
          {
            t: 0.4884,
            agent: [
              375.21,
              368.125
            ],
            block: [
              246.947,
              199.034
            ],
            angle: 1.32364,
            coverage: 0.1072,
            action: [
              375.219,
              368.131
            ]
          },
          {
            t: 0.5116,
            agent: [
              336.571,
              286.136
            ],
            block: [
              246.947,
              199.034
            ],
            angle: 1.32364,
            coverage: 0.1072,
            action: [
              244.519,
              90.824
            ]
          },
          {
            t: 0.5349,
            agent: [
              294.718,
              197.334
            ],
            block: [
              246.947,
              199.034
            ],
            angle: 1.32364,
            coverage: 0.1072,
            action: [
              244.519,
              90.824
            ]
          },
          {
            t: 0.5581,
            agent: [
              269.662,
              144.172
            ],
            block: [
              246.947,
              199.034
            ],
            angle: 1.32364,
            coverage: 0.1072,
            action: [
              244.519,
              90.824
            ]
          },
          {
            t: 0.5814,
            agent: [
              256.673,
              116.613
            ],
            block: [
              246.947,
              199.034
            ],
            angle: 1.32364,
            coverage: 0.1072,
            action: [
              244.519,
              90.824
            ]
          },
          {
            t: 0.6047,
            agent: [
              250.3,
              103.091
            ],
            block: [
              246.947,
              199.034
            ],
            angle: 1.32364,
            coverage: 0.1072,
            action: [
              244.519,
              90.824
            ]
          },
          {
            t: 0.6279,
            agent: [
              241.984,
              107.206
            ],
            block: [
              246.947,
              199.034
            ],
            angle: 1.32364,
            coverage: 0.1072,
            action: [
              226.716,
              126.644
            ]
          },
          {
            t: 0.6512,
            agent: [
              234.837,
              115.609
            ],
            block: [
              246.947,
              199.034
            ],
            angle: 1.32364,
            coverage: 0.1072,
            action: [
              226.716,
              126.644
            ]
          },
          {
            t: 0.6744,
            agent: [
              204.424,
              173.986
            ],
            block: [
              252.956,
              233.845
            ],
            angle: 1.56033,
            coverage: 0.3695,
            action: [
              137.7,
              305.743
            ]
          },
          {
            t: 0.6977,
            agent: [
              173.828,
              234.221
            ],
            block: [
              253.899,
              248.627
            ],
            angle: 1.37636,
            coverage: 0.3426,
            action: [
              137.7,
              305.743
            ]
          },
          {
            t: 0.7209,
            agent: [
              155.745,
              269.984
            ],
            block: [
              255.765,
              255.847
            ],
            angle: 1.13746,
            coverage: 0.4769,
            action: [
              137.7,
              305.743
            ]
          },
          {
            t: 0.7442,
            agent: [
              146.412,
              288.471
            ],
            block: [
              256.116,
              256.617
            ],
            angle: 1.02819,
            coverage: 0.619,
            action: [
              137.7,
              305.743
            ]
          },
          {
            t: 0.7674,
            agent: [
              141.842,
              297.53
            ],
            block: [
              256.079,
              256.571
            ],
            angle: 0.97728,
            coverage: 0.6971,
            action: [
              137.7,
              305.743
            ]
          },
          {
            t: 0.7907,
            agent: [
              139.655,
              301.867
            ],
            block: [
              256.038,
              256.496
            ],
            angle: 0.95794,
            coverage: 0.7259,
            action: [
              137.7,
              305.743
            ]
          },
          {
            t: 0.814,
            agent: [
              138.619,
              303.92
            ],
            block: [
              256.056,
              256.448
            ],
            angle: 0.95057,
            coverage: 0.737,
            action: [
              137.7,
              305.743
            ]
          },
          {
            t: 0.8372,
            agent: [
              138.132,
              304.887
            ],
            block: [
              256.072,
              256.428
            ],
            angle: 0.94809,
            coverage: 0.7409,
            action: [
              137.7,
              305.743
            ]
          },
          {
            t: 0.8605,
            agent: [
              137.903,
              305.341
            ],
            block: [
              256.08,
              256.419
            ],
            angle: 0.94715,
            coverage: 0.7423,
            action: [
              137.7,
              305.743
            ]
          },
          {
            t: 0.8837,
            agent: [
              137.795,
              305.554
            ],
            block: [
              256.084,
              256.415
            ],
            angle: 0.94676,
            coverage: 0.7429,
            action: [
              137.7,
              305.743
            ]
          },
          {
            t: 0.907,
            agent: [
              137.745,
              305.654
            ],
            block: [
              256.086,
              256.413
            ],
            angle: 0.94659,
            coverage: 0.7432,
            action: [
              137.7,
              305.743
            ]
          },
          {
            t: 0.9302,
            agent: [
              137.721,
              305.701
            ],
            block: [
              256.087,
              256.413
            ],
            angle: 0.94652,
            coverage: 0.7433,
            action: [
              137.7,
              305.743
            ]
          },
          {
            t: 0.9535,
            agent: [
              137.71,
              305.723
            ],
            block: [
              256.087,
              256.412
            ],
            angle: 0.94648,
            coverage: 0.7434,
            action: [
              137.7,
              305.743
            ]
          },
          {
            t: 0.9767,
            agent: [
              137.705,
              305.734
            ],
            block: [
              256.087,
              256.412
            ],
            angle: 0.94647,
            coverage: 0.7434,
            action: [
              137.7,
              305.743
            ]
          },
          {
            t: 1,
            agent: [
              158.362,
              313.58
            ],
            block: [
              256.096,
              255.88
            ],
            angle: 0.78617,
            coverage: 0.9959,
            action: [
              207.575,
              332.263
            ]
          }
        ]
      },
      claude: {
        agentId: "claude",
        label: "Claude Code",
        policy: "cem_lite",
        color: "#df785d",
        steps: 73,
        finalCoverage: 0.9659,
        frames: [
          {
            t: 0.0,
            agent: [
              149.0,
              244.0
            ],
            block: [
              240.223,
              210.674
            ],
            angle: 1.3847,
            coverage: 0.0,
            action: [
              82.203,
              270.569
            ]
          },
          {
            t: 0.0137,
            agent: [
              129.25,
              251.856
            ],
            block: [
              240.138,
              210.221
            ],
            angle: 1.43603,
            coverage: 0.2214,
            action: [
              94.91,
              100.945
            ]
          },
          {
            t: 0.0274,
            agent: [
              111.616,
              210.211
            ],
            block: [
              244.148,
              210.729
            ],
            angle: 1.676,
            coverage: 0.182,
            action: [
              91.958,
              219.93
            ]
          },
          {
            t: 0.0411,
            agent: [
              102.007,
              196.165
            ],
            block: [
              244.399,
              210.71
            ],
            angle: 1.675,
            coverage: 0.182,
            action: [
              218.986,
              151.953
            ]
          },
          {
            t: 0.0548,
            agent: [
              134.418,
              184.292
            ],
            block: [
              263.627,
              215.252
            ],
            angle: 1.72388,
            coverage: 0.1497,
            action: [
              137.509,
              92.47
            ]
          },
          {
            t: 0.0685,
            agent: [
              148.446,
              152.184
            ],
            block: [
              272.497,
              218.443
            ],
            angle: 1.76158,
            coverage: 0.127,
            action: [
              85.327,
              123.008
            ]
          },
          {
            t: 0.0822,
            agent: [
              130.044,
              133.307
            ],
            block: [
              272.497,
              218.443
            ],
            angle: 1.76158,
            coverage: 0.127,
            action: [
              284.091,
              246.83
            ]
          },
          {
            t: 0.0959,
            agent: [
              168.521,
              163.672
            ],
            block: [
              272.497,
              218.443
            ],
            angle: 1.76158,
            coverage: 0.127,
            action: [
              172.634,
              152.21
            ]
          },
          {
            t: 0.1096,
            agent: [
              187.035,
              173.018
            ],
            block: [
              272.441,
              218.711
            ],
            angle: 1.73331,
            coverage: 0.1329,
            action: [
              184.083,
              159.89
            ]
          },
          {
            t: 0.1233,
            agent: [
              186.51,
              167.769
            ],
            block: [
              272.441,
              218.711
            ],
            angle: 1.73331,
            coverage: 0.1329,
            action: [
              149.583,
              246.606
            ]
          },
          {
            t: 0.137,
            agent: [
              175.259,
              189.618
            ],
            block: [
              272.166,
              220.456
            ],
            angle: 1.59786,
            coverage: 0.179,
            action: [
              209.342,
              247.078
            ]
          },
          {
            t: 0.1507,
            agent: [
              181.203,
              215.446
            ],
            block: [
              272.451,
              224.549
            ],
            angle: 1.34366,
            coverage: 0.2563,
            action: [
              131.8,
              254.656
            ]
          },
          {
            t: 0.1644,
            agent: [
              170.44,
              233.416
            ],
            block: [
              273.193,
              227.34
            ],
            angle: 1.21965,
            coverage: 0.2407,
            action: [
              207.031,
              220.25
            ]
          },
          {
            t: 0.1781,
            agent: [
              175.701,
              233.873
            ],
            block: [
              273.284,
              227.586
            ],
            angle: 1.19462,
            coverage: 0.2346,
            action: [
              160.79,
              225.808
            ]
          },
          {
            t: 0.1918,
            agent: [
              175.426,
              229.985
            ],
            block: [
              273.284,
              227.586
            ],
            angle: 1.19462,
            coverage: 0.2346,
            action: [
              277.429,
              225.998
            ]
          },
          {
            t: 0.2055,
            agent: [
              203.889,
              227.913
            ],
            block: [
              274.004,
              229.368
            ],
            angle: 1.16681,
            coverage: 0.2328,
            action: [
              180.738,
              207.308
            ]
          },
          {
            t: 0.2192,
            agent: [
              208.478,
              221.38
            ],
            block: [
              274.719,
              231.025
            ],
            angle: 1.1529,
            coverage: 0.2361,
            action: [
              20.25,
              163.324
            ]
          },
          {
            t: 0.2329,
            agent: [
              150.157,
              201.91
            ],
            block: [
              274.719,
              231.025
            ],
            angle: 1.1529,
            coverage: 0.2361,
            action: [
              212.223,
              330.168
            ]
          },
          {
            t: 0.2466,
            agent: [
              147.446,
              233.346
            ],
            block: [
              274.719,
              231.025
            ],
            angle: 1.1529,
            coverage: 0.2361,
            action: [
              211.112,
              406.618
            ]
          },
          {
            t: 0.2603,
            agent: [
              173.359,
              298.983
            ],
            block: [
              273.789,
              230.536
            ],
            angle: 0.77502,
            coverage: 0.3833,
            action: [
              156.997,
              272.025
            ]
          },
          {
            t: 0.274,
            agent: [
              175.605,
              310.323
            ],
            block: [
              273.343,
              229.974
            ],
            angle: 0.62118,
            coverage: 0.3798,
            action: [
              112.215,
              277.001
            ]
          },
          {
            t: 0.2877,
            agent: [
              154.983,
              297.325
            ],
            block: [
              273.343,
              229.974
            ],
            angle: 0.62118,
            coverage: 0.3798,
            action: [
              242.355,
              192.764
            ]
          },
          {
            t: 0.3014,
            agent: [
              173.73,
              262.698
            ],
            block: [
              273.343,
              229.974
            ],
            angle: 0.62118,
            coverage: 0.3798,
            action: [
              264.306,
              153.888
            ]
          },
          {
            t: 0.3151,
            agent: [
              210.342,
              218.841
            ],
            block: [
              283.594,
              228.27
            ],
            angle: 0.77595,
            coverage: 0.3787,
            action: [
              246.884,
              236.269
            ]
          },
          {
            t: 0.3288,
            agent: [
              231.225,
              211.885
            ],
            block: [
              296.575,
              228.322
            ],
            angle: 0.96584,
            coverage: 0.2839,
            action: [
              216.676,
              110.461
            ]
          },
          {
            t: 0.3425,
            agent: [
              230.95,
              183.928
            ],
            block: [
              302.76,
              229.168
            ],
            angle: 1.0535,
            coverage: 0.2464,
            action: [
              200.463,
              309.998
            ]
          },
          {
            t: 0.3562,
            agent: [
              220.28,
              209.831
            ],
            block: [
              302.76,
              229.168
            ],
            angle: 1.0535,
            coverage: 0.2464,
            action: [
              228.983,
              409.285
            ]
          },
          {
            t: 0.3699,
            agent: [
              219.45,
              282.997
            ],
            block: [
              307.089,
              235.966
            ],
            angle: 0.77475,
            coverage: 0.187,
            action: [
              153.046,
              311.117
            ]
          },
          {
            t: 0.3836,
            agent: [
              200.813,
              313.555
            ],
            block: [
              307.754,
              236.703
            ],
            angle: 0.68427,
            coverage: 0.1436,
            action: [
              242.622,
              361.214
            ]
          },
          {
            t: 0.3973,
            agent: [
              205.732,
              330.65
            ],
            block: [
              307.754,
              236.703
            ],
            angle: 0.68427,
            coverage: 0.1436,
            action: [
              327.107,
              297.529
            ]
          },
          {
            t: 0.411,
            agent: [
              246.35,
              326.175
            ],
            block: [
              324.306,
              217.637
            ],
            angle: 0.69086,
            coverage: 0.1435,
            action: [
              457.502,
              238.746
            ]
          },
          {
            t: 0.4247,
            agent: [
              322.343,
              296.58
            ],
            block: [
              336.869,
              192.54
            ],
            angle: 0.62815,
            coverage: 0.0794,
            action: [
              282.67,
              217.206
            ]
          },
          {
            t: 0.4384,
            agent: [
              334.171,
              263.345
            ],
            block: [
              336.869,
              192.54
            ],
            angle: 0.62815,
            coverage: 0.0794,
            action: [
              398.905,
              416.148
            ]
          },
          {
            t: 0.4521,
            agent: [
              348.714,
              299.7
            ],
            block: [
              336.869,
              192.54
            ],
            angle: 0.62815,
            coverage: 0.0794,
            action: [
              512.0,
              200.322
            ]
          },
          {
            t: 0.4658,
            agent: [
              404.273,
              287.487
            ],
            block: [
              336.869,
              192.54
            ],
            angle: 0.62815,
            coverage: 0.0794,
            action: [
              436.412,
              291.383
            ]
          },
          {
            t: 0.4795,
            agent: [
              432.014,
              277.397
            ],
            block: [
              336.869,
              192.54
            ],
            angle: 0.62815,
            coverage: 0.0794,
            action: [
              333.812,
              175.193
            ]
          },
          {
            t: 0.4932,
            agent: [
              406.458,
              247.688
            ],
            block: [
              336.869,
              192.54
            ],
            angle: 0.62815,
            coverage: 0.0794,
            action: [
              443.872,
              107.901
            ]
          },
          {
            t: 0.5068,
            agent: [
              406.5,
              194.908
            ],
            block: [
              336.869,
              192.54
            ],
            angle: 0.62815,
            coverage: 0.0794,
            action: [
              447.854,
              121.942
            ]
          },
          {
            t: 0.5205,
            agent: [
              422.989,
              157.754
            ],
            block: [
              336.869,
              192.54
            ],
            angle: 0.62815,
            coverage: 0.0794,
            action: [
              358.168,
              201.929
            ]
          },
          {
            t: 0.5342,
            agent: [
              408.427,
              162.746
            ],
            block: [
              336.869,
              192.54
            ],
            angle: 0.62815,
            coverage: 0.0794,
            action: [
              290.622,
              163.365
            ]
          },
          {
            t: 0.5479,
            agent: [
              366.306,
              167.929
            ],
            block: [
              336.869,
              192.54
            ],
            angle: 0.62815,
            coverage: 0.0794,
            action: [
              453.182,
              276.319
            ]
          },
          {
            t: 0.5616,
            agent: [
              378.847,
              200.013
            ],
            block: [
              336.869,
              192.54
            ],
            angle: 0.62815,
            coverage: 0.0794,
            action: [
              430.645,
              221.074
            ]
          },
          {
            t: 0.5753,
            agent: [
              403.978,
              218.379
            ],
            block: [
              336.869,
              192.54
            ],
            angle: 0.62815,
            coverage: 0.0794,
            action: [
              339.771,
              93.7
            ]
          },
          {
            t: 0.589,
            agent: [
              390.73,
              183.794
            ],
            block: [
              336.869,
              192.54
            ],
            angle: 0.62815,
            coverage: 0.0794,
            action: [
              298.946,
              219.363
            ]
          },
          {
            t: 0.6027,
            agent: [
              356.364,
              180.333
            ],
            block: [
              336.869,
              192.54
            ],
            angle: 0.62815,
            coverage: 0.0794,
            action: [
              387.339,
              185.429
            ]
          },
          {
            t: 0.6164,
            agent: [
              355.291,
              185.914
            ],
            block: [
              336.666,
              192.887
            ],
            angle: 0.62904,
            coverage: 0.0813,
            action: [
              270.151,
              186.039
            ]
          },
          {
            t: 0.6301,
            agent: [
              333.653,
              186.495
            ],
            block: [
              330.764,
              201.287
            ],
            angle: 0.63421,
            coverage: 0.1304,
            action: [
              308.62,
              64.094
            ]
          },
          {
            t: 0.6438,
            agent: [
              316.694,
              150.315
            ],
            block: [
              329.005,
              203.215
            ],
            angle: 0.62806,
            coverage: 0.1407,
            action: [
              450.103,
              330.502
            ]
          },
          {
            t: 0.6575,
            agent: [
              353.398,
              189.884
            ],
            block: [
              329.005,
              203.215
            ],
            angle: 0.62806,
            coverage: 0.1407,
            action: [
              328.499,
              263.216
            ]
          },
          {
            t: 0.6712,
            agent: [
              360.995,
              231.835
            ],
            block: [
              325.933,
              217.309
            ],
            angle: 0.77421,
            coverage: 0.1569,
            action: [
              135.921,
              187.316
            ]
          },
          {
            t: 0.6849,
            agent: [
              291.56,
              226.752
            ],
            block: [
              293.833,
              249.602
            ],
            angle: 0.88841,
            coverage: 0.3064,
            action: [
              288.217,
              249.696
            ]
          },
          {
            t: 0.6986,
            agent: [
              265.385,
              228.497
            ],
            block: [
              275.045,
              257.409
            ],
            angle: 0.73425,
            coverage: 0.4974,
            action: [
              335.004,
              257.53
            ]
          },
          {
            t: 0.7123,
            agent: [
              285.76,
              239.684
            ],
            block: [
              274.503,
              257.676
            ],
            angle: 0.72929,
            coverage: 0.5038,
            action: [
              289.438,
              287.045
            ]
          },
          {
            t: 0.726,
            agent: [
              294.645,
              256.922
            ],
            block: [
              274.503,
              257.676
            ],
            angle: 0.72929,
            coverage: 0.5038,
            action: [
              302.929,
              281.538
            ]
          },
          {
            t: 0.7397,
            agent: [
              297.456,
              269.483
            ],
            block: [
              270.868,
              264.489
            ],
            angle: 0.77291,
            coverage: 0.6111,
            action: [
              315.651,
              283.96
            ]
          },
          {
            t: 0.7534,
            agent: [
              303.761,
              276.485
            ],
            block: [
              270.544,
              265.187
            ],
            angle: 0.77862,
            coverage: 0.6218,
            action: [
              329.186,
              350.832
            ]
          },
          {
            t: 0.7671,
            agent: [
              313.31,
              300.071
            ],
            block: [
              269.046,
              271.145
            ],
            angle: 0.85136,
            coverage: 0.667,
            action: [
              355.891,
              411.574
            ]
          },
          {
            t: 0.7808,
            agent: [
              328.734,
              341.355
            ],
            block: [
              268.335,
              274.742
            ],
            angle: 0.90344,
            coverage: 0.6548,
            action: [
              361.485,
              263.744
            ]
          },
          {
            t: 0.7945,
            agent: [
              343.168,
              330.84
            ],
            block: [
              268.335,
              274.742
            ],
            angle: 0.90344,
            coverage: 0.6548,
            action: [
              229.182,
              371.449
            ]
          },
          {
            t: 0.8082,
            agent: [
              313.102,
              334.074
            ],
            block: [
              268.335,
              274.742
            ],
            angle: 0.90344,
            coverage: 0.6548,
            action: [
              263.686,
              351.342
            ]
          },
          {
            t: 0.8219,
            agent: [
              285.702,
              343.785
            ],
            block: [
              260.786,
              265.883
            ],
            angle: 0.8271,
            coverage: 0.7928,
            action: [
              306.311,
              314.731
            ]
          },
          {
            t: 0.8356,
            agent: [
              286.345,
              337.098
            ],
            block: [
              258.048,
              260.721
            ],
            angle: 0.77787,
            coverage: 0.8672,
            action: [
              231.953,
              358.801
            ]
          },
          {
            t: 0.8493,
            agent: [
              272.607,
              340.249
            ],
            block: [
              256.795,
              258.748
            ],
            angle: 0.75972,
            coverage: 0.8983,
            action: [
              361.662,
              352.619
            ]
          },
          {
            t: 0.863,
            agent: [
              292.831,
              346.358
            ],
            block: [
              256.795,
              258.748
            ],
            angle: 0.75972,
            coverage: 0.8983,
            action: [
              153.528,
              274.194
            ]
          },
          {
            t: 0.8767,
            agent: [
              261.657,
              326.39
            ],
            block: [
              256.457,
              257.505
            ],
            angle: 0.74423,
            coverage: 0.9029,
            action: [
              335.748,
              436.744
            ]
          },
          {
            t: 0.8904,
            agent: [
              267.897,
              350.928
            ],
            block: [
              256.457,
              257.505
            ],
            angle: 0.74423,
            coverage: 0.9029,
            action: [
              269.042,
              412.34
            ]
          },
          {
            t: 0.9041,
            agent: [
              276.636,
              381.497
            ],
            block: [
              256.457,
              257.505
            ],
            angle: 0.74423,
            coverage: 0.9029,
            action: [
              208.63,
              275.93
            ]
          },
          {
            t: 0.9178,
            agent: [
              256.602,
              357.08
            ],
            block: [
              256.457,
              257.505
            ],
            angle: 0.74423,
            coverage: 0.9029,
            action: [
              242.38,
              484.865
            ]
          },
          {
            t: 0.9315,
            agent: [
              244.78,
              382.995
            ],
            block: [
              256.457,
              257.505
            ],
            angle: 0.74423,
            coverage: 0.9029,
            action: [
              148.45,
              401.543
            ]
          },
          {
            t: 0.9452,
            agent: [
              214.755,
              402.868
            ],
            block: [
              256.457,
              257.505
            ],
            angle: 0.74423,
            coverage: 0.9029,
            action: [
              202.091,
              322.933
            ]
          },
          {
            t: 0.9589,
            agent: [
              200.233,
              381.216
            ],
            block: [
              256.457,
              257.505
            ],
            angle: 0.74423,
            coverage: 0.9029,
            action: [
              210.173,
              337.929
            ]
          },
          {
            t: 0.9726,
            agent: [
              201.825,
              359.453
            ],
            block: [
              256.463,
              257.513
            ],
            angle: 0.75232,
            coverage: 0.9156,
            action: [
              311.23,
              295.821
            ]
          },
          {
            t: 0.9863,
            agent: [
              235.295,
              335.85
            ],
            block: [
              256.463,
              257.514
            ],
            angle: 0.75973,
            coverage: 0.9271,
            action: [
              188.196,
              310.425
            ]
          },
          {
            t: 1.0,
            agent: [
              233.614,
              321.237
            ],
            block: [
              255.489,
              256.592
            ],
            angle: 0.76944,
            coverage: 0.9659
          }
        ]
      },
      kimi: {
        agentId: "kimi",
        label: "Kimi Code",
        policy: "trajectory_lookup",
        color: "#111111",
        steps: 66,
        finalCoverage: 0.9616,
        frames: [
          {
            t: 0.0,
            agent: [
              149.0,
              244.0
            ],
            block: [
              240.223,
              210.674
            ],
            angle: 1.3847,
            coverage: 0.0,
            action: [
              225.673,
              251.116
            ]
          },
          {
            t: 0.0152,
            agent: [
              171.67,
              246.104
            ],
            block: [
              240.039,
              209.564
            ],
            angle: 1.43297,
            coverage: 0.2171,
            action: [
              225.673,
              251.116
            ]
          },
          {
            t: 0.0303,
            agent: [
              196.224,
              248.383
            ],
            block: [
              240.005,
              209.317
            ],
            angle: 1.43623,
            coverage: 0.2147,
            action: [
              225.673,
              251.116
            ]
          },
          {
            t: 0.0455,
            agent: [
              210.923,
              249.747
            ],
            block: [
              246.377,
              204.419
            ],
            angle: 1.35283,
            coverage: 0.1628,
            action: [
              225.673,
              251.116
            ]
          },
          {
            t: 0.0606,
            agent: [
              218.543,
              250.455
            ],
            block: [
              250.489,
              200.515
            ],
            angle: 1.29084,
            coverage: 0.1046,
            action: [
              225.673,
              251.116
            ]
          },
          {
            t: 0.0758,
            agent: [
              222.281,
              250.802
            ],
            block: [
              252.462,
              198.342
            ],
            angle: 1.25738,
            coverage: 0.0791,
            action: [
              339.2,
              227.993
            ]
          },
          {
            t: 0.0909,
            agent: [
              257.639,
              244.131
            ],
            block: [
              264.338,
              178.676
            ],
            angle: 0.97129,
            coverage: 0.0584,
            action: [
              339.2,
              227.993
            ]
          },
          {
            t: 0.1061,
            agent: [
              294.843,
              236.804
            ],
            block: [
              266.485,
              160.687
            ],
            angle: 0.71399,
            coverage: 0.1023,
            action: [
              339.2,
              227.993
            ]
          },
          {
            t: 0.1212,
            agent: [
              317.006,
              232.408
            ],
            block: [
              266.454,
              160.628
            ],
            angle: 0.71334,
            coverage: 0.1023,
            action: [
              339.2,
              227.993
            ]
          },
          {
            t: 0.1364,
            agent: [
              328.477,
              230.128
            ],
            block: [
              266.454,
              160.628
            ],
            angle: 0.71334,
            coverage: 0.1023,
            action: [
              339.2,
              227.993
            ]
          },
          {
            t: 0.1515,
            agent: [
              334.101,
              229.008
            ],
            block: [
              266.454,
              160.628
            ],
            angle: 0.71334,
            coverage: 0.1023,
            action: [
              376.896,
              264.362
            ]
          },
          {
            t: 0.1667,
            agent: [
              347.939,
              239.225
            ],
            block: [
              266.454,
              160.628
            ],
            angle: 0.71334,
            coverage: 0.1023,
            action: [
              376.896,
              264.362
            ]
          },
          {
            t: 0.1818,
            agent: [
              361.286,
              250.618
            ],
            block: [
              266.454,
              160.628
            ],
            angle: 0.71334,
            coverage: 0.1023,
            action: [
              376.896,
              264.362
            ]
          },
          {
            t: 0.197,
            agent: [
              369.113,
              257.471
            ],
            block: [
              266.454,
              160.628
            ],
            angle: 0.71334,
            coverage: 0.1023,
            action: [
              376.896,
              264.362
            ]
          },
          {
            t: 0.2121,
            agent: [
              373.141,
              261.029
            ],
            block: [
              266.454,
              160.628
            ],
            angle: 0.71334,
            coverage: 0.1023,
            action: [
              376.896,
              264.362
            ]
          },
          {
            t: 0.2273,
            agent: [
              375.112,
              262.777
            ],
            block: [
              266.454,
              160.628
            ],
            angle: 0.71334,
            coverage: 0.1023,
            action: [
              276.637,
              118.602
            ]
          },
          {
            t: 0.2424,
            agent: [
              346.41,
              220.517
            ],
            block: [
              266.454,
              160.628
            ],
            angle: 0.71334,
            coverage: 0.1023,
            action: [
              276.637,
              118.602
            ]
          },
          {
            t: 0.2576,
            agent: [
              314.749,
              174.235
            ],
            block: [
              266.454,
              160.628
            ],
            angle: 0.71334,
            coverage: 0.1023,
            action: [
              276.637,
              118.602
            ]
          },
          {
            t: 0.2727,
            agent: [
              295.739,
              146.479
            ],
            block: [
              266.454,
              160.628
            ],
            angle: 0.71334,
            coverage: 0.1023,
            action: [
              276.637,
              118.602
            ]
          },
          {
            t: 0.2879,
            agent: [
              285.874,
              132.08
            ],
            block: [
              266.454,
              160.628
            ],
            angle: 0.71334,
            coverage: 0.1023,
            action: [
              276.637,
              118.602
            ]
          },
          {
            t: 0.303,
            agent: [
              281.031,
              125.014
            ],
            block: [
              266.454,
              160.628
            ],
            angle: 0.71334,
            coverage: 0.1023,
            action: [
              179.445,
              206.5
            ]
          },
          {
            t: 0.3182,
            agent: [
              249.974,
              147.618
            ],
            block: [
              255.511,
              168.515
            ],
            angle: 0.63652,
            coverage: 0.1164,
            action: [
              179.445,
              206.5
            ]
          },
          {
            t: 0.3333,
            agent: [
              217.751,
              174.163
            ],
            block: [
              229.969,
              193.341
            ],
            angle: 0.44175,
            coverage: 0.1439,
            action: [
              179.445,
              206.5
            ]
          },
          {
            t: 0.3485,
            agent: [
              198.601,
              190.258
            ],
            block: [
              216.007,
              210.745
            ],
            angle: 0.29622,
            coverage: 0.2877,
            action: [
              179.445,
              206.5
            ]
          },
          {
            t: 0.3636,
            agent: [
              188.699,
              198.639
            ],
            block: [
              210.597,
              218.49
            ],
            angle: 0.2254,
            coverage: 0.3862,
            action: [
              179.445,
              206.5
            ]
          },
          {
            t: 0.3788,
            agent: [
              183.845,
              202.759
            ],
            block: [
              207.937,
              222.505
            ],
            angle: 0.18596,
            coverage: 0.4187,
            action: [
              8.705,
              221.581
            ]
          },
          {
            t: 0.3939,
            agent: [
              131.039,
              209.192
            ],
            block: [
              202.792,
              228.578
            ],
            angle: 0.09254,
            coverage: 0.4299,
            action: [
              8.705,
              221.581
            ]
          },
          {
            t: 0.4091,
            agent: [
              75.261,
              214.957
            ],
            block: [
              202.792,
              228.578
            ],
            angle: 0.09254,
            coverage: 0.4299,
            action: [
              8.705,
              221.581
            ]
          },
          {
            t: 0.4242,
            agent: [
              42.011,
              218.289
            ],
            block: [
              202.792,
              228.578
            ],
            angle: 0.09254,
            coverage: 0.4299,
            action: [
              8.705,
              221.581
            ]
          },
          {
            t: 0.4394,
            agent: [
              24.798,
              219.995
            ],
            block: [
              202.792,
              228.578
            ],
            angle: 0.09254,
            coverage: 0.4299,
            action: [
              8.705,
              221.581
            ]
          },
          {
            t: 0.4545,
            agent: [
              16.358,
              220.828
            ],
            block: [
              202.792,
              228.578
            ],
            angle: 0.09254,
            coverage: 0.4299,
            action: [
              185.94,
              218.401
            ]
          },
          {
            t: 0.4697,
            agent: [
              64.721,
              220.285
            ],
            block: [
              202.792,
              228.578
            ],
            angle: 0.09254,
            coverage: 0.4299,
            action: [
              185.94,
              218.401
            ]
          },
          {
            t: 0.4848,
            agent: [
              119.565,
              219.455
            ],
            block: [
              202.792,
              228.578
            ],
            angle: 0.09254,
            coverage: 0.4299,
            action: [
              185.94,
              218.401
            ]
          },
          {
            t: 0.5,
            agent: [
              152.641,
              218.934
            ],
            block: [
              225.621,
              233.693
            ],
            angle: 0.28446,
            coverage: 0.5567,
            action: [
              185.94,
              218.401
            ]
          },
          {
            t: 0.5152,
            agent: [
              169.831,
              218.66
            ],
            block: [
              241.707,
              239.522
            ],
            angle: 0.41938,
            coverage: 0.6428,
            action: [
              185.94,
              218.401
            ]
          },
          {
            t: 0.5303,
            agent: [
              178.275,
              218.524
            ],
            block: [
              249.85,
              243.468
            ],
            angle: 0.48751,
            coverage: 0.6665,
            action: [
              185.376,
              119.568
            ]
          },
          {
            t: 0.5455,
            agent: [
              182.155,
              189.237
            ],
            block: [
              250.353,
              243.736
            ],
            angle: 0.49174,
            coverage: 0.6669,
            action: [
              185.376,
              119.568
            ]
          },
          {
            t: 0.5606,
            agent: [
              183.891,
              157.556
            ],
            block: [
              250.353,
              243.736
            ],
            angle: 0.49174,
            coverage: 0.6669,
            action: [
              185.376,
              119.568
            ]
          },
          {
            t: 0.5758,
            agent: [
              184.686,
              138.594
            ],
            block: [
              250.353,
              243.736
            ],
            angle: 0.49174,
            coverage: 0.6669,
            action: [
              185.376,
              119.568
            ]
          },
          {
            t: 0.5909,
            agent: [
              185.054,
              128.765
            ],
            block: [
              250.353,
              243.736
            ],
            angle: 0.49174,
            coverage: 0.6669,
            action: [
              185.376,
              119.568
            ]
          },
          {
            t: 0.6061,
            agent: [
              185.225,
              123.943
            ],
            block: [
              250.353,
              243.736
            ],
            angle: 0.49174,
            coverage: 0.6669,
            action: [
              392.65,
              377.015
            ]
          },
          {
            t: 0.6212,
            agent: [
              246.591,
              197.753
            ],
            block: [
              250.353,
              243.736
            ],
            angle: 0.49174,
            coverage: 0.6669,
            action: [
              392.65,
              377.015
            ]
          },
          {
            t: 0.6364,
            agent: [
              313.006,
              279.104
            ],
            block: [
              250.995,
              253.351
            ],
            angle: 0.61232,
            coverage: 0.7918,
            action: [
              392.65,
              377.015
            ]
          },
          {
            t: 0.6515,
            agent: [
              352.759,
              327.943
            ],
            block: [
              250.995,
              253.351
            ],
            angle: 0.61232,
            coverage: 0.7918,
            action: [
              392.65,
              377.015
            ]
          },
          {
            t: 0.6667,
            agent: [
              373.367,
              353.287
            ],
            block: [
              250.995,
              253.351
            ],
            angle: 0.61232,
            coverage: 0.7918,
            action: [
              392.65,
              377.015
            ]
          },
          {
            t: 0.6818,
            agent: [
              383.478,
              365.727
            ],
            block: [
              250.995,
              253.351
            ],
            angle: 0.61232,
            coverage: 0.7918,
            action: [
              135.322,
              365.938
            ]
          },
          {
            t: 0.697,
            agent: [
              312.236,
              368.411
            ],
            block: [
              250.995,
              253.351
            ],
            angle: 0.61232,
            coverage: 0.7918,
            action: [
              135.322,
              365.938
            ]
          },
          {
            t: 0.7121,
            agent: [
              232.123,
              367.686
            ],
            block: [
              250.995,
              253.351
            ],
            angle: 0.61232,
            coverage: 0.7918,
            action: [
              135.322,
              365.938
            ]
          },
          {
            t: 0.7273,
            agent: [
              183.872,
              366.892
            ],
            block: [
              251.946,
              252.792
            ],
            angle: 0.73018,
            coverage: 0.9294,
            action: [
              135.322,
              365.938
            ]
          },
          {
            t: 0.7424,
            agent: [
              158.805,
              366.416
            ],
            block: [
              252.016,
              252.695
            ],
            angle: 0.73255,
            coverage: 0.93,
            action: [
              135.322,
              365.938
            ]
          },
          {
            t: 0.7576,
            agent: [
              146.495,
              366.169
            ],
            block: [
              252.016,
              252.695
            ],
            angle: 0.73255,
            coverage: 0.93,
            action: [
              267.652,
              376.391
            ]
          },
          {
            t: 0.7727,
            agent: [
              179.723,
              369.139
            ],
            block: [
              252.016,
              252.695
            ],
            angle: 0.73255,
            coverage: 0.93,
            action: [
              267.652,
              376.391
            ]
          },
          {
            t: 0.7879,
            agent: [
              219.307,
              372.428
            ],
            block: [
              252.016,
              252.695
            ],
            angle: 0.73255,
            coverage: 0.93,
            action: [
              267.652,
              376.391
            ]
          },
          {
            t: 0.803,
            agent: [
              243.359,
              374.405
            ],
            block: [
              252.016,
              252.695
            ],
            angle: 0.73255,
            coverage: 0.93,
            action: [
              267.652,
              376.391
            ]
          },
          {
            t: 0.8182,
            agent: [
              255.892,
              375.431
            ],
            block: [
              252.016,
              252.695
            ],
            angle: 0.73255,
            coverage: 0.93,
            action: [
              267.652,
              376.391
            ]
          },
          {
            t: 0.8333,
            agent: [
              262.055,
              375.934
            ],
            block: [
              252.016,
              252.695
            ],
            angle: 0.73255,
            coverage: 0.93,
            action: [
              21.201,
              339.69
            ]
          },
          {
            t: 0.8485,
            agent: [
              192.141,
              365.324
            ],
            block: [
              252.016,
              252.695
            ],
            angle: 0.73255,
            coverage: 0.93,
            action: [
              21.201,
              339.69
            ]
          },
          {
            t: 0.8636,
            agent: [
              114.617,
              353.685
            ],
            block: [
              252.506,
              252.013
            ],
            angle: 0.74777,
            coverage: 0.9219,
            action: [
              21.201,
              339.69
            ]
          },
          {
            t: 0.8788,
            agent: [
              68.03,
              346.703
            ],
            block: [
              252.506,
              252.013
            ],
            angle: 0.74777,
            coverage: 0.9219,
            action: [
              21.201,
              339.69
            ]
          },
          {
            t: 0.8939,
            agent: [
              43.847,
              343.081
            ],
            block: [
              252.506,
              252.013
            ],
            angle: 0.74777,
            coverage: 0.9219,
            action: [
              21.201,
              339.69
            ]
          },
          {
            t: 0.9091,
            agent: [
              31.974,
              341.303
            ],
            block: [
              252.506,
              252.013
            ],
            angle: 0.74777,
            coverage: 0.9219,
            action: [
              180.924,
              222.91
            ]
          },
          {
            t: 0.9242,
            agent: [
              73.512,
              305.923
            ],
            block: [
              252.506,
              252.013
            ],
            angle: 0.74777,
            coverage: 0.9219,
            action: [
              180.924,
              222.91
            ]
          },
          {
            t: 0.9394,
            agent: [
              121.968,
              268.122
            ],
            block: [
              252.506,
              252.013
            ],
            angle: 0.74777,
            coverage: 0.9219,
            action: [
              180.924,
              222.91
            ]
          },
          {
            t: 0.9545,
            agent: [
              151.319,
              245.544
            ],
            block: [
              252.506,
              252.013
            ],
            angle: 0.74777,
            coverage: 0.9219,
            action: [
              180.924,
              222.91
            ]
          },
          {
            t: 0.9697,
            agent: [
              166.597,
              233.849
            ],
            block: [
              252.506,
              252.013
            ],
            angle: 0.74777,
            coverage: 0.9219,
            action: [
              180.924,
              222.91
            ]
          },
          {
            t: 0.9848,
            agent: [
              174.106,
              228.112
            ],
            block: [
              252.506,
              252.013
            ],
            angle: 0.74777,
            coverage: 0.9219,
            action: [
              199.373,
              206.868
            ]
          },
          {
            t: 1.0,
            agent: [
              183.159,
              220.622
            ],
            block: [
              255.235,
              253.897
            ],
            angle: 0.76963,
            coverage: 0.9616
          }
        ]
      }
    }
  },
  {
    id: "seed-36",
    label: "Init 2",
    seed: 36,
    strategy: "Same initial state across Codex, Claude Code, and Kimi rollouts.",
    rollouts: {
      codex: {
        agentId: "codex",
        label: "Codex",
        policy: "beam_guarded",
        color: "#747fff",
        steps: 51,
        finalCoverage: 0.9892,
        frames: [
          {
            t: 0,
            agent: [
              203,
              122
            ],
            block: [
              254.841,
              299.354
            ],
            angle: 2.47452,
            coverage: 0
          },
          {
            t: 0.0196,
            agent: [
              185.45,
              160.539
            ],
            block: [
              254.841,
              299.354
            ],
            angle: 2.47452,
            coverage: 0.5451,
            action: [
              143.643,
              252.345
            ]
          },
          {
            t: 0.0392,
            agent: [
              166.441,
              202.281
            ],
            block: [
              257.327,
              302.128
            ],
            angle: 2.46933,
            coverage: 0.5255,
            action: [
              143.643,
              252.345
            ]
          },
          {
            t: 0.0588,
            agent: [
              155.062,
              227.269
            ],
            block: [
              261.217,
              305.548
            ],
            angle: 2.45316,
            coverage: 0.4939,
            action: [
              143.643,
              252.345
            ]
          },
          {
            t: 0.0784,
            agent: [
              149.163,
              240.224
            ],
            block: [
              261.217,
              305.548
            ],
            angle: 2.45316,
            coverage: 0.4939,
            action: [
              143.643,
              252.345
            ]
          },
          {
            t: 0.098,
            agent: [
              146.268,
              246.58
            ],
            block: [
              261.217,
              305.548
            ],
            angle: 2.45316,
            coverage: 0.4939,
            action: [
              143.643,
              252.345
            ]
          },
          {
            t: 0.1176,
            agent: [
              152.167,
              240.306
            ],
            block: [
              261.217,
              305.548
            ],
            angle: 2.45316,
            coverage: 0.4939,
            action: [
              168.28,
              220.833
            ]
          },
          {
            t: 0.1373,
            agent: [
              159.4,
              231.657
            ],
            block: [
              261.217,
              305.548
            ],
            angle: 2.45316,
            coverage: 0.4939,
            action: [
              168.28,
              220.833
            ]
          },
          {
            t: 0.1569,
            agent: [
              200.236,
              179.708
            ],
            block: [
              263.415,
              309.201
            ],
            angle: 2.65036,
            coverage: 0.5566,
            action: [
              291.465,
              63.273
            ]
          },
          {
            t: 0.1765,
            agent: [
              241.988,
              126.439
            ],
            block: [
              263.415,
              309.201
            ],
            angle: 2.65036,
            coverage: 0.5566,
            action: [
              291.465,
              63.273
            ]
          },
          {
            t: 0.1961,
            agent: [
              266.737,
              94.846
            ],
            block: [
              263.415,
              309.201
            ],
            angle: 2.65036,
            coverage: 0.5566,
            action: [
              291.465,
              63.273
            ]
          },
          {
            t: 0.2157,
            agent: [
              279.523,
              78.521
            ],
            block: [
              263.415,
              309.201
            ],
            angle: 2.65036,
            coverage: 0.5566,
            action: [
              291.465,
              63.273
            ]
          },
          {
            t: 0.2353,
            agent: [
              285.788,
              70.523
            ],
            block: [
              263.415,
              309.201
            ],
            angle: 2.65036,
            coverage: 0.5566,
            action: [
              291.465,
              63.273
            ]
          },
          {
            t: 0.2549,
            agent: [
              288.786,
              66.694
            ],
            block: [
              263.415,
              309.201
            ],
            angle: 2.65036,
            coverage: 0.5566,
            action: [
              291.465,
              63.273
            ]
          },
          {
            t: 0.2745,
            agent: [
              290.205,
              64.882
            ],
            block: [
              263.415,
              309.201
            ],
            angle: 2.65036,
            coverage: 0.5566,
            action: [
              291.465,
              63.273
            ]
          },
          {
            t: 0.2941,
            agent: [
              290.874,
              64.028
            ],
            block: [
              263.415,
              309.201
            ],
            angle: 2.65036,
            coverage: 0.5566,
            action: [
              291.465,
              63.273
            ]
          },
          {
            t: 0.3137,
            agent: [
              291.188,
              63.627
            ],
            block: [
              263.415,
              309.201
            ],
            angle: 2.65036,
            coverage: 0.5566,
            action: [
              291.465,
              63.273
            ]
          },
          {
            t: 0.3333,
            agent: [
              291.335,
              63.439
            ],
            block: [
              263.415,
              309.201
            ],
            angle: 2.65036,
            coverage: 0.5566,
            action: [
              291.465,
              63.273
            ]
          },
          {
            t: 0.3529,
            agent: [
              291.404,
              63.351
            ],
            block: [
              263.415,
              309.201
            ],
            angle: 2.65036,
            coverage: 0.5566,
            action: [
              291.465,
              63.273
            ]
          },
          {
            t: 0.3725,
            agent: [
              291.437,
              63.309
            ],
            block: [
              263.415,
              309.201
            ],
            angle: 2.65036,
            coverage: 0.5566,
            action: [
              291.465,
              63.273
            ]
          },
          {
            t: 0.3922,
            agent: [
              291.452,
              63.29
            ],
            block: [
              263.415,
              309.201
            ],
            angle: 2.65036,
            coverage: 0.5566,
            action: [
              291.465,
              63.273
            ]
          },
          {
            t: 0.4118,
            agent: [
              291.459,
              63.281
            ],
            block: [
              263.415,
              309.201
            ],
            angle: 2.65036,
            coverage: 0.5566,
            action: [
              291.465,
              63.273
            ]
          },
          {
            t: 0.4314,
            agent: [
              305.574,
              144.023
            ],
            block: [
              263.415,
              309.201
            ],
            angle: 2.65036,
            coverage: 0.5566,
            action: [
              339.192,
              336.368
            ]
          },
          {
            t: 0.451,
            agent: [
              320.859,
              231.477
            ],
            block: [
              263.415,
              309.201
            ],
            angle: 2.65036,
            coverage: 0.5566,
            action: [
              339.192,
              336.368
            ]
          },
          {
            t: 0.4706,
            agent: [
              330.01,
              283.83
            ],
            block: [
              260.903,
              310.5
            ],
            angle: 2.67493,
            coverage: 0.576,
            action: [
              339.192,
              336.368
            ]
          },
          {
            t: 0.4902,
            agent: [
              334.753,
              310.971
            ],
            block: [
              260.903,
              310.5
            ],
            angle: 2.67493,
            coverage: 0.576,
            action: [
              339.192,
              336.368
            ]
          },
          {
            t: 0.5098,
            agent: [
              337.081,
              324.288
            ],
            block: [
              260.903,
              310.5
            ],
            angle: 2.67493,
            coverage: 0.576,
            action: [
              339.192,
              336.368
            ]
          },
          {
            t: 0.5294,
            agent: [
              333.687,
              319.732
            ],
            block: [
              260.903,
              310.5
            ],
            angle: 2.67493,
            coverage: 0.576,
            action: [
              323.944,
              299.388
            ]
          },
          {
            t: 0.549,
            agent: [
              329.332,
              310.91
            ],
            block: [
              260.903,
              310.5
            ],
            angle: 2.67493,
            coverage: 0.576,
            action: [
              323.944,
              299.388
            ]
          },
          {
            t: 0.5686,
            agent: [
              304.115,
              250.574
            ],
            block: [
              261.467,
              282.1
            ],
            angle: 2.27275,
            coverage: 0.504,
            action: [
              247.704,
              114.49
            ]
          },
          {
            t: 0.5882,
            agent: [
              278.302,
              188.356
            ],
            block: [
              250.354,
              255.638
            ],
            angle: 1.87439,
            coverage: 0.413,
            action: [
              247.704,
              114.49
            ]
          },
          {
            t: 0.6078,
            agent: [
              262.997,
              151.42
            ],
            block: [
              250.321,
              255.676
            ],
            angle: 1.87456,
            coverage: 0.4129,
            action: [
              247.704,
              114.49
            ]
          },
          {
            t: 0.6275,
            agent: [
              255.09,
              132.327
            ],
            block: [
              250.321,
              255.676
            ],
            angle: 1.87456,
            coverage: 0.4129,
            action: [
              247.704,
              114.49
            ]
          },
          {
            t: 0.6471,
            agent: [
              251.215,
              122.971
            ],
            block: [
              250.321,
              255.676
            ],
            angle: 1.87456,
            coverage: 0.4129,
            action: [
              247.704,
              114.49
            ]
          },
          {
            t: 0.6667,
            agent: [
              249.361,
              118.493
            ],
            block: [
              250.321,
              255.676
            ],
            angle: 1.87456,
            coverage: 0.4129,
            action: [
              247.704,
              114.49
            ]
          },
          {
            t: 0.6863,
            agent: [
              248.483,
              116.372
            ],
            block: [
              250.321,
              255.676
            ],
            angle: 1.87456,
            coverage: 0.4129,
            action: [
              247.704,
              114.49
            ]
          },
          {
            t: 0.7059,
            agent: [
              248.07,
              115.373
            ],
            block: [
              250.321,
              255.676
            ],
            angle: 1.87456,
            coverage: 0.4129,
            action: [
              247.704,
              114.49
            ]
          },
          {
            t: 0.7255,
            agent: [
              247.875,
              114.904
            ],
            block: [
              250.321,
              255.676
            ],
            angle: 1.87456,
            coverage: 0.4129,
            action: [
              247.704,
              114.49
            ]
          },
          {
            t: 0.7451,
            agent: [
              247.784,
              114.684
            ],
            block: [
              250.321,
              255.676
            ],
            angle: 1.87456,
            coverage: 0.4129,
            action: [
              247.704,
              114.49
            ]
          },
          {
            t: 0.7647,
            agent: [
              247.741,
              114.581
            ],
            block: [
              250.321,
              255.676
            ],
            angle: 1.87456,
            coverage: 0.4129,
            action: [
              247.704,
              114.49
            ]
          },
          {
            t: 0.7843,
            agent: [
              247.721,
              114.533
            ],
            block: [
              250.321,
              255.676
            ],
            angle: 1.87456,
            coverage: 0.4129,
            action: [
              247.704,
              114.49
            ]
          },
          {
            t: 0.8039,
            agent: [
              247.712,
              114.51
            ],
            block: [
              250.321,
              255.676
            ],
            angle: 1.87456,
            coverage: 0.4129,
            action: [
              247.704,
              114.49
            ]
          },
          {
            t: 0.8235,
            agent: [
              247.708,
              114.499
            ],
            block: [
              250.321,
              255.676
            ],
            angle: 1.87456,
            coverage: 0.4129,
            action: [
              247.704,
              114.49
            ]
          },
          {
            t: 0.8431,
            agent: [
              212.813,
              127.978
            ],
            block: [
              250.321,
              255.676
            ],
            angle: 1.87456,
            coverage: 0.4129,
            action: [
              129.692,
              160.095
            ]
          },
          {
            t: 0.8627,
            agent: [
              175.02,
              142.581
            ],
            block: [
              250.321,
              255.676
            ],
            angle: 1.87456,
            coverage: 0.4129,
            action: [
              129.692,
              160.095
            ]
          },
          {
            t: 0.8824,
            agent: [
              152.396,
              151.322
            ],
            block: [
              250.321,
              255.676
            ],
            angle: 1.87456,
            coverage: 0.4129,
            action: [
              129.692,
              160.095
            ]
          },
          {
            t: 0.902,
            agent: [
              140.667,
              155.854
            ],
            block: [
              250.321,
              255.676
            ],
            angle: 1.87456,
            coverage: 0.4129,
            action: [
              129.692,
              160.095
            ]
          },
          {
            t: 0.9216,
            agent: [
              134.912,
              158.078
            ],
            block: [
              250.321,
              255.676
            ],
            angle: 1.87456,
            coverage: 0.4129,
            action: [
              129.692,
              160.095
            ]
          },
          {
            t: 0.9412,
            agent: [
              133.363,
              170.908
            ],
            block: [
              250.321,
              255.676
            ],
            angle: 1.87456,
            coverage: 0.4129,
            action: [
              133.774,
              199.886
            ]
          },
          {
            t: 0.9608,
            agent: [
              133.365,
              184.155
            ],
            block: [
              250.321,
              255.676
            ],
            angle: 1.87456,
            coverage: 0.4129,
            action: [
              133.774,
              199.886
            ]
          },
          {
            t: 0.9804,
            agent: [
              141.378,
              268.494
            ],
            block: [
              257.897,
              256.845
            ],
            angle: 1.24321,
            coverage: 0.4079,
            action: [
              160.309,
              458.529
            ]
          },
          {
            t: 1,
            agent: [
              149.993,
              355.388
            ],
            block: [
              256.474,
              256.209
            ],
            angle: 0.78708,
            coverage: 0.9892,
            action: [
              160.309,
              458.529
            ]
          }
        ]
      },
      claude: {
        agentId: "claude",
        label: "Claude Code",
        policy: "cem_lite",
        color: "#df785d",
        steps: 21,
        finalCoverage: 0.9714,
        frames: [
          {
            t: 0.0,
            agent: [
              203.0,
              122.0
            ],
            block: [
              254.841,
              299.354
            ],
            angle: 2.47452,
            coverage: 0.0,
            action: [
              224.653,
              204.92
            ]
          },
          {
            t: 0.0476,
            agent: [
              209.402,
              146.517
            ],
            block: [
              254.841,
              299.354
            ],
            angle: 2.47452,
            coverage: 0.5451,
            action: [
              316.757,
              219.313
            ]
          },
          {
            t: 0.0952,
            agent: [
              243.569,
              177.327
            ],
            block: [
              254.841,
              299.354
            ],
            angle: 2.47452,
            coverage: 0.5451,
            action: [
              125.439,
              212.148
            ]
          },
          {
            t: 0.1429,
            agent: [
              220.648,
              195.714
            ],
            block: [
              254.841,
              299.354
            ],
            angle: 2.47452,
            coverage: 0.5451,
            action: [
              197.667,
              233.006
            ]
          },
          {
            t: 0.1905,
            agent: [
              200.545,
              210.587
            ],
            block: [
              254.036,
              299.979
            ],
            angle: 2.3177,
            coverage: 0.4268,
            action: [
              74.078,
              391.437
            ]
          },
          {
            t: 0.2381,
            agent: [
              160.666,
              268.21
            ],
            block: [
              248.906,
              308.396
            ],
            angle: 1.73141,
            coverage: 0.3794,
            action: [
              157.005,
              365.513
            ]
          },
          {
            t: 0.2857,
            agent: [
              145.437,
              317.206
            ],
            block: [
              248.502,
              314.518
            ],
            angle: 1.28391,
            coverage: 0.3465,
            action: [
              176.628,
              376.917
            ]
          },
          {
            t: 0.3333,
            agent: [
              154.342,
              345.625
            ],
            block: [
              249.724,
              317.658
            ],
            angle: 0.99177,
            coverage: 0.1607,
            action: [
              135.038,
              389.852
            ]
          },
          {
            t: 0.381,
            agent: [
              152.129,
              365.318
            ],
            block: [
              250.671,
              319.043
            ],
            angle: 0.8578,
            coverage: 0.1432,
            action: [
              25.124,
              340.032
            ]
          },
          {
            t: 0.4286,
            agent: [
              112.393,
              362.751
            ],
            block: [
              250.694,
              319.072
            ],
            angle: 0.85061,
            coverage: 0.1432,
            action: [
              108.411,
              424.876
            ]
          },
          {
            t: 0.4762,
            agent: [
              97.007,
              378.256
            ],
            block: [
              250.694,
              319.072
            ],
            angle: 0.85061,
            coverage: 0.1432,
            action: [
              98.306,
              439.329
            ]
          },
          {
            t: 0.5238,
            agent: [
              97.038,
              403.289
            ],
            block: [
              250.694,
              319.072
            ],
            angle: 0.85061,
            coverage: 0.1432,
            action: [
              187.553,
              512.0
            ]
          },
          {
            t: 0.5714,
            agent: [
              123.949,
              442.226
            ],
            block: [
              250.694,
              319.072
            ],
            angle: 0.85061,
            coverage: 0.1432,
            action: [
              313.151,
              269.516
            ]
          },
          {
            t: 0.619,
            agent: [
              190.026,
              403.29
            ],
            block: [
              253.049,
              316.438
            ],
            angle: 0.90876,
            coverage: 0.144,
            action: [
              242.315,
              296.564
            ]
          },
          {
            t: 0.6667,
            agent: [
              226.609,
              352.313
            ],
            block: [
              248.0,
              303.066
            ],
            angle: 0.97726,
            coverage: 0.2606,
            action: [
              156.83,
              428.084
            ]
          },
          {
            t: 0.7143,
            agent: [
              211.694,
              362.892
            ],
            block: [
              246.672,
              297.368
            ],
            angle: 0.95596,
            coverage: 0.3071,
            action: [
              127.57,
              285.271
            ]
          },
          {
            t: 0.7619,
            agent: [
              178.969,
              348.504
            ],
            block: [
              242.077,
              289.891
            ],
            angle: 1.15443,
            coverage: 0.4282,
            action: [
              190.489,
              400.195
            ]
          },
          {
            t: 0.8095,
            agent: [
              173.006,
              355.039
            ],
            block: [
              241.229,
              287.997
            ],
            angle: 1.21056,
            coverage: 0.4088,
            action: [
              274.281,
              305.291
            ]
          },
          {
            t: 0.8571,
            agent: [
              204.302,
              346.176
            ],
            block: [
              241.229,
              287.997
            ],
            angle: 1.21056,
            coverage: 0.4088,
            action: [
              272.333,
              307.579
            ]
          },
          {
            t: 0.9048,
            agent: [
              235.749,
              329.154
            ],
            block: [
              251.691,
              272.052
            ],
            angle: 0.9935,
            coverage: 0.6556,
            action: [
              258.492,
              333.161
            ]
          },
          {
            t: 0.9524,
            agent: [
              250.018,
              326.053
            ],
            block: [
              255.598,
              262.566
            ],
            angle: 0.87377,
            coverage: 0.8646,
            action: [
              286.883,
              319.959
            ]
          },
          {
            t: 1.0,
            agent: [
              263.415,
              324.728
            ],
            block: [
              256.943,
              255.802
            ],
            angle: 0.78246,
            coverage: 0.9714
          }
        ]
      },
      kimi: {
        agentId: "kimi",
        label: "Kimi Code",
        policy: "trajectory_lookup",
        color: "#111111",
        steps: 120,
        finalCoverage: 0.6578,
        frames: [
          {
            t: 0.0,
            agent: [
              203.0,
              122.0
            ],
            block: [
              254.841,
              299.354
            ],
            angle: 2.47452,
            coverage: 0.0,
            action: [
              327.938,
              263.909
            ]
          },
          {
            t: 0.0083,
            agent: [
              239.941,
              163.959
            ],
            block: [
              254.841,
              299.354
            ],
            angle: 2.47452,
            coverage: 0.5451,
            action: [
              327.938,
              263.909
            ]
          },
          {
            t: 0.0167,
            agent: [
              279.951,
              209.403
            ],
            block: [
              254.841,
              299.354
            ],
            angle: 2.47452,
            coverage: 0.5451,
            action: [
              327.938,
              263.909
            ]
          },
          {
            t: 0.025,
            agent: [
              303.903,
              236.608
            ],
            block: [
              254.841,
              299.354
            ],
            angle: 2.47452,
            coverage: 0.5451,
            action: [
              327.938,
              263.909
            ]
          },
          {
            t: 0.0333,
            agent: [
              316.319,
              250.712
            ],
            block: [
              254.841,
              299.354
            ],
            angle: 2.47452,
            coverage: 0.5451,
            action: [
              327.938,
              263.909
            ]
          },
          {
            t: 0.0417,
            agent: [
              322.412,
              257.632
            ],
            block: [
              254.841,
              299.354
            ],
            angle: 2.47452,
            coverage: 0.5451,
            action: [
              191.08,
              75.377
            ]
          },
          {
            t: 0.05,
            agent: [
              284.864,
              205.202
            ],
            block: [
              254.841,
              299.354
            ],
            angle: 2.47452,
            coverage: 0.5451,
            action: [
              191.08,
              75.377
            ]
          },
          {
            t: 0.0583,
            agent: [
              242.419,
              146.396
            ],
            block: [
              254.841,
              299.354
            ],
            angle: 2.47452,
            coverage: 0.5451,
            action: [
              191.08,
              75.377
            ]
          },
          {
            t: 0.0667,
            agent: [
              216.833,
              110.993
            ],
            block: [
              254.841,
              299.354
            ],
            angle: 2.47452,
            coverage: 0.5451,
            action: [
              191.08,
              75.377
            ]
          },
          {
            t: 0.075,
            agent: [
              203.537,
              92.603
            ],
            block: [
              254.841,
              299.354
            ],
            angle: 2.47452,
            coverage: 0.5451,
            action: [
              191.08,
              75.377
            ]
          },
          {
            t: 0.0833,
            agent: [
              197.007,
              83.572
            ],
            block: [
              254.841,
              299.354
            ],
            angle: 2.47452,
            coverage: 0.5451,
            action: [
              281.789,
              256.95
            ]
          },
          {
            t: 0.0917,
            agent: [
              220.698,
              132.932
            ],
            block: [
              254.841,
              299.354
            ],
            angle: 2.47452,
            coverage: 0.5451,
            action: [
              281.789,
              256.95
            ]
          },
          {
            t: 0.1,
            agent: [
              248.265,
              189.029
            ],
            block: [
              254.841,
              299.354
            ],
            angle: 2.47452,
            coverage: 0.5451,
            action: [
              281.789,
              256.95
            ]
          },
          {
            t: 0.1083,
            agent: [
              264.956,
              222.873
            ],
            block: [
              254.841,
              299.354
            ],
            angle: 2.47452,
            coverage: 0.5451,
            action: [
              281.789,
              256.95
            ]
          },
          {
            t: 0.1167,
            agent: [
              273.643,
              240.465
            ],
            block: [
              254.61,
              305.428
            ],
            angle: 2.55857,
            coverage: 0.5743,
            action: [
              281.789,
              256.95
            ]
          },
          {
            t: 0.125,
            agent: [
              277.913,
              249.106
            ],
            block: [
              253.766,
              312.535
            ],
            angle: 2.65583,
            coverage: 0.6055,
            action: [
              282.503,
              258.429
            ]
          },
          {
            t: 0.1333,
            agent: [
              280.17,
              253.684
            ],
            block: [
              253.141,
              315.826
            ],
            angle: 2.70108,
            coverage: 0.6138,
            action: [
              282.503,
              258.429
            ]
          },
          {
            t: 0.1417,
            agent: [
              281.368,
              256.119
            ],
            block: [
              252.697,
              317.768
            ],
            angle: 2.72798,
            coverage: 0.6172,
            action: [
              282.503,
              258.429
            ]
          },
          {
            t: 0.15,
            agent: [
              281.961,
              257.327
            ],
            block: [
              252.479,
              318.634
            ],
            angle: 2.74006,
            coverage: 0.6183,
            action: [
              282.503,
              258.429
            ]
          },
          {
            t: 0.1583,
            agent: [
              282.247,
              257.908
            ],
            block: [
              252.361,
              319.088
            ],
            angle: 2.7464,
            coverage: 0.6185,
            action: [
              282.503,
              258.429
            ]
          },
          {
            t: 0.1667,
            agent: [
              282.382,
              258.184
            ],
            block: [
              252.304,
              319.303
            ],
            angle: 2.74941,
            coverage: 0.6186,
            action: [
              255.547,
              248.804
            ]
          },
          {
            t: 0.175,
            agent: [
              274.476,
              255.468
            ],
            block: [
              252.3,
              319.317
            ],
            angle: 2.7496,
            coverage: 0.6186,
            action: [
              255.547,
              248.804
            ]
          },
          {
            t: 0.1833,
            agent: [
              265.874,
              252.447
            ],
            block: [
              252.3,
              319.317
            ],
            angle: 2.7496,
            coverage: 0.6186,
            action: [
              255.547,
              248.804
            ]
          },
          {
            t: 0.1917,
            agent: [
              260.72,
              250.631
            ],
            block: [
              252.3,
              319.317
            ],
            angle: 2.7496,
            coverage: 0.6186,
            action: [
              255.547,
              248.804
            ]
          },
          {
            t: 0.2,
            agent: [
              258.048,
              249.687
            ],
            block: [
              252.3,
              319.317
            ],
            angle: 2.7496,
            coverage: 0.6186,
            action: [
              255.547,
              248.804
            ]
          },
          {
            t: 0.2083,
            agent: [
              256.736,
              249.224
            ],
            block: [
              252.3,
              319.317
            ],
            angle: 2.7496,
            coverage: 0.6186,
            action: [
              352.063,
              169.896
            ]
          },
          {
            t: 0.2167,
            agent: [
              284.645,
              225.672
            ],
            block: [
              252.3,
              319.317
            ],
            angle: 2.7496,
            coverage: 0.6186,
            action: [
              352.063,
              169.896
            ]
          },
          {
            t: 0.225,
            agent: [
              315.256,
              200.297
            ],
            block: [
              252.3,
              319.317
            ],
            angle: 2.7496,
            coverage: 0.6186,
            action: [
              352.063,
              169.896
            ]
          },
          {
            t: 0.2333,
            agent: [
              333.619,
              185.121
            ],
            block: [
              252.3,
              319.317
            ],
            angle: 2.7496,
            coverage: 0.6186,
            action: [
              352.063,
              169.896
            ]
          },
          {
            t: 0.2417,
            agent: [
              343.146,
              177.255
            ],
            block: [
              252.3,
              319.317
            ],
            angle: 2.7496,
            coverage: 0.6186,
            action: [
              352.063,
              169.896
            ]
          },
          {
            t: 0.25,
            agent: [
              347.821,
              173.397
            ],
            block: [
              252.3,
              319.317
            ],
            angle: 2.7496,
            coverage: 0.6186,
            action: [
              287.441,
              427.9
            ]
          },
          {
            t: 0.2583,
            agent: [
              330.954,
              247.833
            ],
            block: [
              252.3,
              319.317
            ],
            angle: 2.7496,
            coverage: 0.6186,
            action: [
              287.441,
              427.9
            ]
          },
          {
            t: 0.2667,
            agent: [
              311.32,
              329.58
            ],
            block: [
              246.042,
              320.863
            ],
            angle: 2.7966,
            coverage: 0.6525,
            action: [
              287.441,
              427.9
            ]
          },
          {
            t: 0.275,
            agent: [
              299.431,
              378.629
            ],
            block: [
              246.042,
              320.863
            ],
            angle: 2.7966,
            coverage: 0.6525,
            action: [
              287.441,
              427.9
            ]
          },
          {
            t: 0.2833,
            agent: [
              293.244,
              404.077
            ],
            block: [
              246.042,
              320.863
            ],
            angle: 2.7966,
            coverage: 0.6525,
            action: [
              287.441,
              427.9
            ]
          },
          {
            t: 0.2917,
            agent: [
              290.203,
              416.567
            ],
            block: [
              246.042,
              320.863
            ],
            angle: 2.7966,
            coverage: 0.6525,
            action: [
              76.848,
              283.651
            ]
          },
          {
            t: 0.3,
            agent: [
              226.479,
              379.9
            ],
            block: [
              246.042,
              320.863
            ],
            angle: 2.7966,
            coverage: 0.6525,
            action: [
              76.848,
              283.651
            ]
          },
          {
            t: 0.3083,
            agent: [
              158.348,
              336.539
            ],
            block: [
              246.109,
              320.765
            ],
            angle: 2.79657,
            coverage: 0.6528,
            action: [
              76.848,
              283.651
            ]
          },
          {
            t: 0.3167,
            agent: [
              117.65,
              310.221
            ],
            block: [
              246.109,
              320.765
            ],
            angle: 2.79657,
            coverage: 0.6528,
            action: [
              76.848,
              283.651
            ]
          },
          {
            t: 0.325,
            agent: [
              96.567,
              296.512
            ],
            block: [
              246.109,
              320.765
            ],
            angle: 2.79657,
            coverage: 0.6528,
            action: [
              76.848,
              283.651
            ]
          },
          {
            t: 0.3333,
            agent: [
              86.227,
              289.772
            ],
            block: [
              246.109,
              320.765
            ],
            angle: 2.79657,
            coverage: 0.6528,
            action: [
              197.286,
              252.464
            ]
          },
          {
            t: 0.3417,
            agent: [
              116.885,
              277.32
            ],
            block: [
              246.109,
              320.765
            ],
            angle: 2.79657,
            coverage: 0.6528,
            action: [
              197.286,
              252.464
            ]
          },
          {
            t: 0.35,
            agent: [
              153.109,
              265.802
            ],
            block: [
              246.109,
              320.765
            ],
            angle: 2.79657,
            coverage: 0.6528,
            action: [
              197.286,
              252.464
            ]
          },
          {
            t: 0.3583,
            agent: [
              175.094,
              259.102
            ],
            block: [
              246.109,
              320.765
            ],
            angle: 2.79657,
            coverage: 0.6528,
            action: [
              197.286,
              252.464
            ]
          },
          {
            t: 0.3667,
            agent: [
              186.544,
              255.663
            ],
            block: [
              246.109,
              320.765
            ],
            angle: 2.79657,
            coverage: 0.6528,
            action: [
              197.286,
              252.464
            ]
          },
          {
            t: 0.375,
            agent: [
              192.174,
              253.984
            ],
            block: [
              246.562,
              320.603
            ],
            angle: 2.80914,
            coverage: 0.6559,
            action: [
              159.078,
              81.893
            ]
          },
          {
            t: 0.3833,
            agent: [
              183.575,
              202.748
            ],
            block: [
              247.373,
              320.325
            ],
            angle: 2.86398,
            coverage: 0.6549,
            action: [
              159.078,
              81.893
            ]
          },
          {
            t: 0.3917,
            agent: [
              172.618,
              147.744
            ],
            block: [
              247.373,
              320.325
            ],
            angle: 2.86398,
            coverage: 0.6549,
            action: [
              159.078,
              81.893
            ]
          },
          {
            t: 0.4,
            agent: [
              165.895,
              114.866
            ],
            block: [
              247.373,
              320.325
            ],
            angle: 2.86398,
            coverage: 0.6549,
            action: [
              159.078,
              81.893
            ]
          },
          {
            t: 0.4083,
            agent: [
              162.381,
              97.83
            ],
            block: [
              247.373,
              320.325
            ],
            angle: 2.86398,
            coverage: 0.6549,
            action: [
              159.078,
              81.893
            ]
          },
          {
            t: 0.4167,
            agent: [
              160.651,
              89.473
            ],
            block: [
              247.373,
              320.325
            ],
            angle: 2.86398,
            coverage: 0.6549,
            action: [
              140.506,
              336.86
            ]
          },
          {
            t: 0.425,
            agent: [
              154.33,
              160.857
            ],
            block: [
              247.373,
              320.325
            ],
            angle: 2.86398,
            coverage: 0.6549,
            action: [
              140.506,
              336.86
            ]
          },
          {
            t: 0.4333,
            agent: [
              147.989,
              240.613
            ],
            block: [
              247.373,
              320.325
            ],
            angle: 2.86398,
            coverage: 0.6549,
            action: [
              140.506,
              336.86
            ]
          },
          {
            t: 0.4417,
            agent: [
              144.243,
              288.599
            ],
            block: [
              247.373,
              320.325
            ],
            angle: 2.86398,
            coverage: 0.6549,
            action: [
              140.506,
              336.86
            ]
          },
          {
            t: 0.45,
            agent: [
              142.31,
              313.519
            ],
            block: [
              247.373,
              320.325
            ],
            angle: 2.86398,
            coverage: 0.6549,
            action: [
              140.506,
              336.86
            ]
          },
          {
            t: 0.4583,
            agent: [
              141.364,
              325.755
            ],
            block: [
              247.373,
              320.325
            ],
            angle: 2.86398,
            coverage: 0.6549,
            action: [
              184.174,
              348.086
            ]
          },
          {
            t: 0.4667,
            agent: [
              153.822,
              334.937
            ],
            block: [
              247.373,
              320.325
            ],
            angle: 2.86398,
            coverage: 0.6549,
            action: [
              184.174,
              348.086
            ]
          },
          {
            t: 0.475,
            agent: [
              167.592,
              341.308
            ],
            block: [
              247.373,
              320.325
            ],
            angle: 2.86398,
            coverage: 0.6549,
            action: [
              184.174,
              348.086
            ]
          },
          {
            t: 0.4833,
            agent: [
              175.863,
              344.768
            ],
            block: [
              247.373,
              320.325
            ],
            angle: 2.86398,
            coverage: 0.6549,
            action: [
              184.174,
              348.086
            ]
          },
          {
            t: 0.4917,
            agent: [
              180.155,
              346.499
            ],
            block: [
              248.626,
              319.498
            ],
            angle: 2.85648,
            coverage: 0.6499,
            action: [
              184.174,
              348.086
            ]
          },
          {
            t: 0.5,
            agent: [
              182.262,
              347.334
            ],
            block: [
              249.375,
              318.817
            ],
            angle: 2.85358,
            coverage: 0.6468,
            action: [
              347.367,
              300.282
            ]
          },
          {
            t: 0.5083,
            agent: [
              231.523,
              333.598
            ],
            block: [
              249.73,
              314.352
            ],
            angle: 2.88698,
            coverage: 0.6412,
            action: [
              347.367,
              300.282
            ]
          },
          {
            t: 0.5167,
            agent: [
              284.262,
              318.477
            ],
            block: [
              249.347,
              312.641
            ],
            angle: 2.88571,
            coverage: 0.643,
            action: [
              347.367,
              300.282
            ]
          },
          {
            t: 0.525,
            agent: [
              315.772,
              309.401
            ],
            block: [
              249.539,
              312.061
            ],
            angle: 2.8783,
            coverage: 0.643,
            action: [
              347.367,
              300.282
            ]
          },
          {
            t: 0.5333,
            agent: [
              332.097,
              304.691
            ],
            block: [
              249.539,
              312.061
            ],
            angle: 2.8783,
            coverage: 0.643,
            action: [
              347.367,
              300.282
            ]
          },
          {
            t: 0.5417,
            agent: [
              340.104,
              302.38
            ],
            block: [
              249.539,
              312.061
            ],
            angle: 2.8783,
            coverage: 0.643,
            action: [
              8.668,
              393.612
            ]
          },
          {
            t: 0.55,
            agent: [
              243.795,
              328.867
            ],
            block: [
              249.797,
              310.657
            ],
            angle: 2.85753,
            coverage: 0.6445,
            action: [
              8.668,
              393.612
            ]
          },
          {
            t: 0.5583,
            agent: [
              137.146,
              358.231
            ],
            block: [
              249.797,
              310.657
            ],
            angle: 2.85753,
            coverage: 0.6445,
            action: [
              8.668,
              393.612
            ]
          },
          {
            t: 0.5667,
            agent: [
              73.07,
              375.876
            ],
            block: [
              249.797,
              310.657
            ],
            angle: 2.85753,
            coverage: 0.6445,
            action: [
              8.668,
              393.612
            ]
          },
          {
            t: 0.575,
            agent: [
              39.811,
              385.035
            ],
            block: [
              249.797,
              310.657
            ],
            angle: 2.85753,
            coverage: 0.6445,
            action: [
              8.668,
              393.612
            ]
          },
          {
            t: 0.5833,
            agent: [
              23.484,
              389.532
            ],
            block: [
              249.797,
              310.657
            ],
            angle: 2.85753,
            coverage: 0.6445,
            action: [
              185.713,
              279.64
            ]
          },
          {
            t: 0.5917,
            agent: [
              68.009,
              357.987
            ],
            block: [
              249.797,
              310.657
            ],
            angle: 2.85753,
            coverage: 0.6445,
            action: [
              185.713,
              279.64
            ]
          },
          {
            t: 0.6,
            agent: [
              121.002,
              322.509
            ],
            block: [
              249.797,
              310.657
            ],
            angle: 2.85753,
            coverage: 0.6445,
            action: [
              185.713,
              279.64
            ]
          },
          {
            t: 0.6083,
            agent: [
              153.197,
              301.141
            ],
            block: [
              249.797,
              310.657
            ],
            angle: 2.85753,
            coverage: 0.6445,
            action: [
              185.713,
              279.64
            ]
          },
          {
            t: 0.6167,
            agent: [
              169.973,
              290.04
            ],
            block: [
              249.797,
              310.657
            ],
            angle: 2.85753,
            coverage: 0.6445,
            action: [
              185.713,
              279.64
            ]
          },
          {
            t: 0.625,
            agent: [
              178.221,
              284.588
            ],
            block: [
              249.935,
              310.703
            ],
            angle: 2.85568,
            coverage: 0.6441,
            action: [
              192.64,
              282.194
            ]
          },
          {
            t: 0.6333,
            agent: [
              184.224,
              282.731
            ],
            block: [
              249.935,
              310.703
            ],
            angle: 2.85568,
            coverage: 0.6441,
            action: [
              192.64,
              282.194
            ]
          },
          {
            t: 0.6417,
            agent: [
              188.316,
              282.312
            ],
            block: [
              250.141,
              310.85
            ],
            angle: 2.85222,
            coverage: 0.6441,
            action: [
              192.64,
              282.194
            ]
          },
          {
            t: 0.65,
            agent: [
              190.526,
              282.218
            ],
            block: [
              250.422,
              311.058
            ],
            angle: 2.84756,
            coverage: 0.6438,
            action: [
              192.64,
              282.194
            ]
          },
          {
            t: 0.6583,
            agent: [
              191.629,
              282.198
            ],
            block: [
              250.6,
              311.192
            ],
            angle: 2.84464,
            coverage: 0.6436,
            action: [
              192.64,
              282.194
            ]
          },
          {
            t: 0.6667,
            agent: [
              192.162,
              282.194
            ],
            block: [
              250.691,
              311.262
            ],
            angle: 2.84316,
            coverage: 0.6434,
            action: [
              139.18,
              240.618
            ]
          },
          {
            t: 0.675,
            agent: [
              176.608,
              269.901
            ],
            block: [
              250.697,
              311.266
            ],
            angle: 2.84306,
            coverage: 0.6434,
            action: [
              139.18,
              240.618
            ]
          },
          {
            t: 0.6833,
            agent: [
              159.608,
              256.587
            ],
            block: [
              250.697,
              311.266
            ],
            angle: 2.84306,
            coverage: 0.6434,
            action: [
              139.18,
              240.618
            ]
          },
          {
            t: 0.6917,
            agent: [
              149.415,
              248.617
            ],
            block: [
              250.697,
              311.266
            ],
            angle: 2.84306,
            coverage: 0.6434,
            action: [
              139.18,
              240.618
            ]
          },
          {
            t: 0.7,
            agent: [
              144.129,
              244.485
            ],
            block: [
              250.697,
              311.266
            ],
            angle: 2.84306,
            coverage: 0.6434,
            action: [
              139.18,
              240.618
            ]
          },
          {
            t: 0.7083,
            agent: [
              141.534,
              242.457
            ],
            block: [
              250.697,
              311.266
            ],
            angle: 2.84306,
            coverage: 0.6434,
            action: [
              131.685,
              350.567
            ]
          },
          {
            t: 0.7167,
            agent: [
              138.075,
              273.995
            ],
            block: [
              250.697,
              311.266
            ],
            angle: 2.84306,
            coverage: 0.6434,
            action: [
              131.685,
              350.567
            ]
          },
          {
            t: 0.725,
            agent: [
              135.087,
              308.745
            ],
            block: [
              250.697,
              311.266
            ],
            angle: 2.84306,
            coverage: 0.6434,
            action: [
              131.685,
              350.567
            ]
          },
          {
            t: 0.7333,
            agent: [
              133.373,
              329.607
            ],
            block: [
              250.697,
              311.266
            ],
            angle: 2.84306,
            coverage: 0.6434,
            action: [
              131.685,
              350.567
            ]
          },
          {
            t: 0.7417,
            agent: [
              132.497,
              340.432
            ],
            block: [
              250.697,
              311.266
            ],
            angle: 2.84306,
            coverage: 0.6434,
            action: [
              131.685,
              350.567
            ]
          },
          {
            t: 0.75,
            agent: [
              132.071,
              345.746
            ],
            block: [
              250.697,
              311.266
            ],
            angle: 2.84306,
            coverage: 0.6434,
            action: [
              280.684,
              400.703
            ]
          },
          {
            t: 0.7583,
            agent: [
              175.922,
              363.115
            ],
            block: [
              250.697,
              311.266
            ],
            angle: 2.84306,
            coverage: 0.6434,
            action: [
              280.684,
              400.703
            ]
          },
          {
            t: 0.7667,
            agent: [
              223.541,
              380.376
            ],
            block: [
              250.697,
              311.266
            ],
            angle: 2.84306,
            coverage: 0.6434,
            action: [
              280.684,
              400.703
            ]
          },
          {
            t: 0.775,
            agent: [
              252.06,
              390.555
            ],
            block: [
              250.697,
              311.266
            ],
            angle: 2.84306,
            coverage: 0.6434,
            action: [
              280.684,
              400.703
            ]
          },
          {
            t: 0.7833,
            agent: [
              266.846,
              395.805
            ],
            block: [
              250.697,
              311.266
            ],
            angle: 2.84306,
            coverage: 0.6434,
            action: [
              280.684,
              400.703
            ]
          },
          {
            t: 0.7917,
            agent: [
              274.102,
              398.375
            ],
            block: [
              250.697,
              311.266
            ],
            angle: 2.84306,
            coverage: 0.6434,
            action: [
              271.052,
              318.487
            ]
          },
          {
            t: 0.8,
            agent: [
              274.729,
              375.295
            ],
            block: [
              250.697,
              311.266
            ],
            angle: 2.84306,
            coverage: 0.6434,
            action: [
              271.052,
              318.487
            ]
          },
          {
            t: 0.8083,
            agent: [
              273.29,
              349.549
            ],
            block: [
              250.697,
              311.266
            ],
            angle: 2.84306,
            coverage: 0.6434,
            action: [
              271.052,
              318.487
            ]
          },
          {
            t: 0.8167,
            agent: [
              272.219,
              334.061
            ],
            block: [
              250.697,
              311.266
            ],
            angle: 2.84306,
            coverage: 0.6434,
            action: [
              271.052,
              318.487
            ]
          },
          {
            t: 0.825,
            agent: [
              271.626,
              326.019
            ],
            block: [
              250.697,
              311.266
            ],
            angle: 2.84306,
            coverage: 0.6434,
            action: [
              271.052,
              318.487
            ]
          },
          {
            t: 0.8333,
            agent: [
              271.327,
              322.071
            ],
            block: [
              250.697,
              311.266
            ],
            angle: 2.84306,
            coverage: 0.6434,
            action: [
              366.288,
              255.999
            ]
          },
          {
            t: 0.8417,
            agent: [
              299.341,
              301.703
            ],
            block: [
              251.484,
              304.541
            ],
            angle: 2.77915,
            coverage: 0.6361,
            action: [
              366.288,
              255.999
            ]
          },
          {
            t: 0.85,
            agent: [
              329.77,
              280.796
            ],
            block: [
              252.361,
              301.494
            ],
            angle: 2.736,
            coverage: 0.6303,
            action: [
              366.288,
              255.999
            ]
          },
          {
            t: 0.8583,
            agent: [
              347.995,
              268.394
            ],
            block: [
              252.361,
              301.494
            ],
            angle: 2.736,
            coverage: 0.6303,
            action: [
              366.288,
              255.999
            ]
          },
          {
            t: 0.8667,
            agent: [
              357.445,
              261.986
            ],
            block: [
              252.361,
              301.494
            ],
            angle: 2.736,
            coverage: 0.6303,
            action: [
              366.288,
              255.999
            ]
          },
          {
            t: 0.875,
            agent: [
              362.082,
              258.846
            ],
            block: [
              252.361,
              301.494
            ],
            angle: 2.736,
            coverage: 0.6303,
            action: [
              283.919,
              235.993
            ]
          },
          {
            t: 0.8833,
            agent: [
              339.948,
              251.427
            ],
            block: [
              252.361,
              301.494
            ],
            angle: 2.736,
            coverage: 0.6303,
            action: [
              283.919,
              235.993
            ]
          },
          {
            t: 0.8917,
            agent: [
              314.622,
              244.309
            ],
            block: [
              252.361,
              301.494
            ],
            angle: 2.736,
            coverage: 0.6303,
            action: [
              283.919,
              235.993
            ]
          },
          {
            t: 0.9,
            agent: [
              299.327,
              240.139
            ],
            block: [
              249.039,
              303.925
            ],
            angle: 2.76819,
            coverage: 0.6502,
            action: [
              283.919,
              235.993
            ]
          },
          {
            t: 0.9083,
            agent: [
              291.374,
              237.993
            ],
            block: [
              248.971,
              304.0
            ],
            angle: 2.76929,
            coverage: 0.6505,
            action: [
              283.919,
              235.993
            ]
          },
          {
            t: 0.9167,
            agent: [
              287.466,
              236.943
            ],
            block: [
              248.971,
              304.0
            ],
            angle: 2.76929,
            coverage: 0.6505,
            action: [
              189.2,
              146.818
            ]
          },
          {
            t: 0.925,
            agent: [
              257.588,
              210.075
            ],
            block: [
              248.971,
              304.0
            ],
            angle: 2.76929,
            coverage: 0.6505,
            action: [
              189.2,
              146.818
            ]
          },
          {
            t: 0.9333,
            agent: [
              226.368,
              181.28
            ],
            block: [
              249.064,
              303.944
            ],
            angle: 2.72419,
            coverage: 0.6574,
            action: [
              189.2,
              146.818
            ]
          },
          {
            t: 0.9417,
            agent: [
              207.792,
              164.073
            ],
            block: [
              249.142,
              303.997
            ],
            angle: 2.71096,
            coverage: 0.6579,
            action: [
              189.2,
              146.818
            ]
          },
          {
            t: 0.95,
            agent: [
              198.182,
              155.158
            ],
            block: [
              249.142,
              303.997
            ],
            angle: 2.71096,
            coverage: 0.6579,
            action: [
              189.2,
              146.818
            ]
          },
          {
            t: 0.9583,
            agent: [
              193.471,
              150.784
            ],
            block: [
              249.142,
              303.997
            ],
            angle: 2.71096,
            coverage: 0.6579,
            action: [
              155.094,
              241.538
            ]
          },
          {
            t: 0.9667,
            agent: [
              181.132,
              176.696
            ],
            block: [
              249.142,
              303.997
            ],
            angle: 2.71096,
            coverage: 0.6579,
            action: [
              155.094,
              241.538
            ]
          },
          {
            t: 0.975,
            agent: [
              169.142,
              206.038
            ],
            block: [
              249.586,
              304.668
            ],
            angle: 2.71804,
            coverage: 0.6578,
            action: [
              155.094,
              241.538
            ]
          },
          {
            t: 0.9833,
            agent: [
              162.1,
              223.729
            ],
            block: [
              249.586,
              304.668
            ],
            angle: 2.71804,
            coverage: 0.6578,
            action: [
              155.094,
              241.538
            ]
          },
          {
            t: 0.9917,
            agent: [
              158.475,
              232.923
            ],
            block: [
              249.586,
              304.668
            ],
            angle: 2.71804,
            coverage: 0.6578,
            action: [
              155.094,
              241.538
            ]
          },
          {
            t: 1.0,
            agent: [
              156.701,
              237.439
            ],
            block: [
              249.586,
              304.668
            ],
            angle: 2.71804,
            coverage: 0.6578
          }
        ]
      }
    }
  },
  {
    id: "seed-42",
    label: "Init 3",
    seed: 42,
    strategy: "Same initial state across Codex, Claude Code, and Kimi rollouts.",
    rollouts: {
      codex: {
        agentId: "codex",
        label: "Codex",
        policy: "beam_guarded",
        color: "#747fff",
        steps: 69,
        finalCoverage: 0.9869,
        frames: [
          {
            t: 0,
            agent: [
              85,
              359
            ],
            block: [
              330.924,
              304.378
            ],
            angle: 2.25314,
            coverage: 0
          },
          {
            t: 0.0145,
            agent: [
              162.435,
              359.95
            ],
            block: [
              330.924,
              304.378
            ],
            angle: 2.25314,
            coverage: 0.0568,
            action: [
              346.894,
              362.213
            ]
          },
          {
            t: 0.029,
            agent: [
              246.304,
              360.979
            ],
            block: [
              330.924,
              304.378
            ],
            angle: 2.25314,
            coverage: 0.0568,
            action: [
              346.894,
              362.213
            ]
          },
          {
            t: 0.0435,
            agent: [
              296.511,
              361.595
            ],
            block: [
              334.811,
              298.637
            ],
            angle: 2.19638,
            coverage: 0.0351,
            action: [
              346.894,
              362.213
            ]
          },
          {
            t: 0.058,
            agent: [
              322.539,
              361.914
            ],
            block: [
              335.07,
              297.804
            ],
            angle: 2.19229,
            coverage: 0.0319,
            action: [
              346.894,
              362.213
            ]
          },
          {
            t: 0.0725,
            agent: [
              335.31,
              362.071
            ],
            block: [
              335.07,
              297.804
            ],
            angle: 2.19229,
            coverage: 0.0319,
            action: [
              346.894,
              362.213
            ]
          },
          {
            t: 0.087,
            agent: [
              338.278,
              350.746
            ],
            block: [
              335.07,
              297.804
            ],
            angle: 2.19229,
            coverage: 0.0319,
            action: [
              336.248,
              323.656
            ]
          },
          {
            t: 0.1014,
            agent: [
              337.765,
              338.434
            ],
            block: [
              335.07,
              297.804
            ],
            angle: 2.19229,
            coverage: 0.0319,
            action: [
              336.248,
              323.656
            ]
          },
          {
            t: 0.1159,
            agent: [
              316.627,
              256.957
            ],
            block: [
              295.519,
              265.714
            ],
            angle: 2.18419,
            coverage: 0.1979,
            action: [
              267.045,
              73.035
            ]
          },
          {
            t: 0.1304,
            agent: [
              294.049,
              172.875
            ],
            block: [
              268.849,
              231.62
            ],
            angle: 1.77629,
            coverage: 0.2606,
            action: [
              267.045,
              73.035
            ]
          },
          {
            t: 0.1449,
            agent: [
              280.563,
              122.952
            ],
            block: [
              267.903,
              230.839
            ],
            angle: 1.75829,
            coverage: 0.2631,
            action: [
              267.045,
              73.035
            ]
          },
          {
            t: 0.1594,
            agent: [
              273.578,
              97.146
            ],
            block: [
              267.903,
              230.839
            ],
            angle: 1.75829,
            coverage: 0.2631,
            action: [
              267.045,
              73.035
            ]
          },
          {
            t: 0.1739,
            agent: [
              270.152,
              84.499
            ],
            block: [
              267.903,
              230.839
            ],
            angle: 1.75829,
            coverage: 0.2631,
            action: [
              267.045,
              73.035
            ]
          },
          {
            t: 0.1884,
            agent: [
              268.511,
              78.445
            ],
            block: [
              267.903,
              230.839
            ],
            angle: 1.75829,
            coverage: 0.2631,
            action: [
              267.045,
              73.035
            ]
          },
          {
            t: 0.2029,
            agent: [
              267.735,
              75.579
            ],
            block: [
              267.903,
              230.839
            ],
            angle: 1.75829,
            coverage: 0.2631,
            action: [
              267.045,
              73.035
            ]
          },
          {
            t: 0.2174,
            agent: [
              267.369,
              74.229
            ],
            block: [
              267.903,
              230.839
            ],
            angle: 1.75829,
            coverage: 0.2631,
            action: [
              267.045,
              73.035
            ]
          },
          {
            t: 0.2319,
            agent: [
              267.197,
              73.595
            ],
            block: [
              267.903,
              230.839
            ],
            angle: 1.75829,
            coverage: 0.2631,
            action: [
              267.045,
              73.035
            ]
          },
          {
            t: 0.2464,
            agent: [
              267.116,
              73.298
            ],
            block: [
              267.903,
              230.839
            ],
            angle: 1.75829,
            coverage: 0.2631,
            action: [
              267.045,
              73.035
            ]
          },
          {
            t: 0.2609,
            agent: [
              267.078,
              73.158
            ],
            block: [
              267.903,
              230.839
            ],
            angle: 1.75829,
            coverage: 0.2631,
            action: [
              267.045,
              73.035
            ]
          },
          {
            t: 0.2754,
            agent: [
              267.06,
              73.093
            ],
            block: [
              267.903,
              230.839
            ],
            angle: 1.75829,
            coverage: 0.2631,
            action: [
              267.045,
              73.035
            ]
          },
          {
            t: 0.2899,
            agent: [
              267.052,
              73.062
            ],
            block: [
              267.903,
              230.839
            ],
            angle: 1.75829,
            coverage: 0.2631,
            action: [
              267.045,
              73.035
            ]
          },
          {
            t: 0.3043,
            agent: [
              267.048,
              73.048
            ],
            block: [
              267.903,
              230.839
            ],
            angle: 1.75829,
            coverage: 0.2631,
            action: [
              267.045,
              73.035
            ]
          },
          {
            t: 0.3188,
            agent: [
              252.273,
              103.887
            ],
            block: [
              267.903,
              230.839
            ],
            angle: 1.75829,
            coverage: 0.2631,
            action: [
              217.08,
              177.359
            ]
          },
          {
            t: 0.3333,
            agent: [
              236.272,
              137.292
            ],
            block: [
              267.903,
              230.839
            ],
            angle: 1.75829,
            coverage: 0.2631,
            action: [
              217.08,
              177.359
            ]
          },
          {
            t: 0.3478,
            agent: [
              226.693,
              157.291
            ],
            block: [
              267.903,
              230.839
            ],
            angle: 1.75829,
            coverage: 0.2631,
            action: [
              217.08,
              177.359
            ]
          },
          {
            t: 0.3623,
            agent: [
              221.727,
              167.658
            ],
            block: [
              267.903,
              230.839
            ],
            angle: 1.75829,
            coverage: 0.2631,
            action: [
              217.08,
              177.359
            ]
          },
          {
            t: 0.3768,
            agent: [
              219.291,
              172.745
            ],
            block: [
              267.903,
              230.839
            ],
            angle: 1.75829,
            coverage: 0.2631,
            action: [
              217.08,
              177.359
            ]
          },
          {
            t: 0.3913,
            agent: [
              213.066,
              185.872
            ],
            block: [
              267.903,
              230.839
            ],
            angle: 1.75829,
            coverage: 0.2631,
            action: [
              199.975,
              213.517
            ]
          },
          {
            t: 0.4058,
            agent: [
              207.035,
              198.605
            ],
            block: [
              266.897,
              236.825
            ],
            angle: 1.70509,
            coverage: 0.3417,
            action: [
              199.975,
              213.517
            ]
          },
          {
            t: 0.4203,
            agent: [
              170.621,
              275.571
            ],
            block: [
              267.13,
              265.738
            ],
            angle: 1.1961,
            coverage: 0.5453,
            action: [
              88.788,
              448.544
            ]
          },
          {
            t: 0.4348,
            agent: [
              133.192,
              354.684
            ],
            block: [
              267.54,
              267.599
            ],
            angle: 0.92547,
            coverage: 0.787,
            action: [
              88.788,
              448.544
            ]
          },
          {
            t: 0.4493,
            agent: [
              110.986,
              401.624
            ],
            block: [
              267.54,
              267.599
            ],
            angle: 0.92547,
            coverage: 0.787,
            action: [
              88.788,
              448.544
            ]
          },
          {
            t: 0.4638,
            agent: [
              99.509,
              425.882
            ],
            block: [
              267.54,
              267.599
            ],
            angle: 0.92547,
            coverage: 0.787,
            action: [
              88.788,
              448.544
            ]
          },
          {
            t: 0.4783,
            agent: [
              93.885,
              437.769
            ],
            block: [
              267.54,
              267.599
            ],
            angle: 0.92547,
            coverage: 0.787,
            action: [
              88.788,
              448.544
            ]
          },
          {
            t: 0.4928,
            agent: [
              91.194,
              443.459
            ],
            block: [
              267.54,
              267.599
            ],
            angle: 0.92547,
            coverage: 0.787,
            action: [
              88.788,
              448.544
            ]
          },
          {
            t: 0.5072,
            agent: [
              89.919,
              446.153
            ],
            block: [
              267.54,
              267.599
            ],
            angle: 0.92547,
            coverage: 0.787,
            action: [
              88.788,
              448.544
            ]
          },
          {
            t: 0.5217,
            agent: [
              89.319,
              447.421
            ],
            block: [
              267.54,
              267.599
            ],
            angle: 0.92547,
            coverage: 0.787,
            action: [
              88.788,
              448.544
            ]
          },
          {
            t: 0.5362,
            agent: [
              89.037,
              448.017
            ],
            block: [
              267.54,
              267.599
            ],
            angle: 0.92547,
            coverage: 0.787,
            action: [
              88.788,
              448.544
            ]
          },
          {
            t: 0.5507,
            agent: [
              88.905,
              448.297
            ],
            block: [
              267.54,
              267.599
            ],
            angle: 0.92547,
            coverage: 0.787,
            action: [
              88.788,
              448.544
            ]
          },
          {
            t: 0.5652,
            agent: [
              88.843,
              448.428
            ],
            block: [
              267.54,
              267.599
            ],
            angle: 0.92547,
            coverage: 0.787,
            action: [
              88.788,
              448.544
            ]
          },
          {
            t: 0.5797,
            agent: [
              88.814,
              448.49
            ],
            block: [
              267.54,
              267.599
            ],
            angle: 0.92547,
            coverage: 0.787,
            action: [
              88.788,
              448.544
            ]
          },
          {
            t: 0.5942,
            agent: [
              88.8,
              448.518
            ],
            block: [
              267.54,
              267.599
            ],
            angle: 0.92547,
            coverage: 0.787,
            action: [
              88.788,
              448.544
            ]
          },
          {
            t: 0.6087,
            agent: [
              88.794,
              448.532
            ],
            block: [
              267.54,
              267.599
            ],
            angle: 0.92547,
            coverage: 0.787,
            action: [
              88.788,
              448.544
            ]
          },
          {
            t: 0.6232,
            agent: [
              143.367,
              424.531
            ],
            block: [
              267.54,
              267.599
            ],
            angle: 0.92547,
            coverage: 0.787,
            action: [
              273.372,
              367.347
            ]
          },
          {
            t: 0.6377,
            agent: [
              202.477,
              398.531
            ],
            block: [
              267.54,
              267.599
            ],
            angle: 0.92547,
            coverage: 0.787,
            action: [
              273.372,
              367.347
            ]
          },
          {
            t: 0.6522,
            agent: [
              237.862,
              382.966
            ],
            block: [
              267.54,
              267.599
            ],
            angle: 0.92547,
            coverage: 0.787,
            action: [
              273.372,
              367.347
            ]
          },
          {
            t: 0.6667,
            agent: [
              256.207,
              374.897
            ],
            block: [
              267.54,
              267.599
            ],
            angle: 0.92547,
            coverage: 0.787,
            action: [
              273.372,
              367.347
            ]
          },
          {
            t: 0.6812,
            agent: [
              265.207,
              370.938
            ],
            block: [
              267.54,
              267.599
            ],
            angle: 0.92547,
            coverage: 0.787,
            action: [
              273.372,
              367.347
            ]
          },
          {
            t: 0.6957,
            agent: [
              275.482,
              358.829
            ],
            block: [
              267.54,
              267.599
            ],
            angle: 0.92547,
            coverage: 0.787,
            action: [
              293.543,
              332.805
            ]
          },
          {
            t: 0.7101,
            agent: [
              283.983,
              346.869
            ],
            block: [
              267.211,
              266.803
            ],
            angle: 0.91853,
            coverage: 0.796,
            action: [
              293.543,
              332.805
            ]
          },
          {
            t: 0.7246,
            agent: [
              309.684,
              304.078
            ],
            block: [
              256.187,
              252.835
            ],
            angle: 0.79997,
            coverage: 0.9003,
            action: [
              364.138,
              211.907
            ]
          },
          {
            t: 0.7391,
            agent: [
              334.748,
              261.73
            ],
            block: [
              255.775,
              252.506
            ],
            angle: 0.79608,
            coverage: 0.8961,
            action: [
              364.138,
              211.907
            ]
          },
          {
            t: 0.7536,
            agent: [
              349.477,
              236.776
            ],
            block: [
              255.775,
              252.506
            ],
            angle: 0.79608,
            coverage: 0.8961,
            action: [
              364.138,
              211.907
            ]
          },
          {
            t: 0.7681,
            agent: [
              357.064,
              223.91
            ],
            block: [
              255.775,
              252.506
            ],
            angle: 0.79608,
            coverage: 0.8961,
            action: [
              364.138,
              211.907
            ]
          },
          {
            t: 0.7826,
            agent: [
              360.776,
              217.612
            ],
            block: [
              255.775,
              252.506
            ],
            angle: 0.79608,
            coverage: 0.8961,
            action: [
              364.138,
              211.907
            ]
          },
          {
            t: 0.7971,
            agent: [
              362.552,
              214.599
            ],
            block: [
              255.775,
              252.506
            ],
            angle: 0.79608,
            coverage: 0.8961,
            action: [
              364.138,
              211.907
            ]
          },
          {
            t: 0.8116,
            agent: [
              363.392,
              213.173
            ],
            block: [
              255.775,
              252.506
            ],
            angle: 0.79608,
            coverage: 0.8961,
            action: [
              364.138,
              211.907
            ]
          },
          {
            t: 0.8261,
            agent: [
              363.788,
              212.501
            ],
            block: [
              255.775,
              252.506
            ],
            angle: 0.79608,
            coverage: 0.8961,
            action: [
              364.138,
              211.907
            ]
          },
          {
            t: 0.8406,
            agent: [
              363.974,
              212.186
            ],
            block: [
              255.775,
              252.506
            ],
            angle: 0.79608,
            coverage: 0.8961,
            action: [
              364.138,
              211.907
            ]
          },
          {
            t: 0.8551,
            agent: [
              364.061,
              212.037
            ],
            block: [
              255.775,
              252.506
            ],
            angle: 0.79608,
            coverage: 0.8961,
            action: [
              364.138,
              211.907
            ]
          },
          {
            t: 0.8696,
            agent: [
              364.102,
              211.968
            ],
            block: [
              255.775,
              252.506
            ],
            angle: 0.79608,
            coverage: 0.8961,
            action: [
              364.138,
              211.907
            ]
          },
          {
            t: 0.8841,
            agent: [
              364.121,
              211.935
            ],
            block: [
              255.775,
              252.506
            ],
            angle: 0.79608,
            coverage: 0.8961,
            action: [
              364.138,
              211.907
            ]
          },
          {
            t: 0.8986,
            agent: [
              364.13,
              211.92
            ],
            block: [
              255.775,
              252.506
            ],
            angle: 0.79608,
            coverage: 0.8961,
            action: [
              364.138,
              211.907
            ]
          },
          {
            t: 0.913,
            agent: [
              364.134,
              211.913
            ],
            block: [
              255.775,
              252.506
            ],
            angle: 0.79608,
            coverage: 0.8961,
            action: [
              364.138,
              211.907
            ]
          },
          {
            t: 0.9275,
            agent: [
              318.507,
              204.462
            ],
            block: [
              255.775,
              252.506
            ],
            angle: 0.79608,
            coverage: 0.8961,
            action: [
              209.814,
              186.717
            ]
          },
          {
            t: 0.942,
            agent: [
              269.087,
              196.394
            ],
            block: [
              255.775,
              252.506
            ],
            angle: 0.79608,
            coverage: 0.8961,
            action: [
              209.814,
              186.717
            ]
          },
          {
            t: 0.9565,
            agent: [
              239.503,
              191.564
            ],
            block: [
              255.775,
              252.506
            ],
            angle: 0.79608,
            coverage: 0.8961,
            action: [
              209.814,
              186.717
            ]
          },
          {
            t: 0.971,
            agent: [
              224.165,
              189.06
            ],
            block: [
              255.775,
              252.506
            ],
            angle: 0.79608,
            coverage: 0.8961,
            action: [
              209.814,
              186.717
            ]
          },
          {
            t: 0.9855,
            agent: [
              216.64,
              187.831
            ],
            block: [
              255.775,
              252.506
            ],
            angle: 0.79608,
            coverage: 0.8961,
            action: [
              209.814,
              186.717
            ]
          },
          {
            t: 1,
            agent: [
              212.699,
              199.065
            ],
            block: [
              255.429,
              256.264
            ],
            angle: 0.78342,
            coverage: 0.9869,
            action: [
              208.674,
              226.701
            ]
          }
        ]
      },
      claude: {
        agentId: "claude",
        label: "Claude Code",
        policy: "cem_fast",
        color: "#df785d",
        steps: 120,
        finalCoverage: 0.6129,
        frames: [
          {
            t: 0,
            agent: [
              85,
              359
            ],
            block: [
              330.924,
              304.378
            ],
            angle: 2.25314,
            coverage: 0,
            action: [
              88.18,
              342.979
            ]
          },
          {
            t: 0.0083,
            agent: [
              85.94,
              354.263
            ],
            block: [
              330.924,
              304.378
            ],
            angle: 2.25314,
            coverage: 0.0568,
            action: [
              121.989,
              268.391
            ]
          },
          {
            t: 0.0167,
            agent: [
              96.955,
              327.079
            ],
            block: [
              330.924,
              304.378
            ],
            angle: 2.25314,
            coverage: 0.0568,
            action: [
              132.043,
              349.8
            ]
          },
          {
            t: 0.025,
            agent: [
              111.364,
              324.192
            ],
            block: [
              330.924,
              304.378
            ],
            angle: 2.25314,
            coverage: 0.0568,
            action: [
              77.392,
              195.624
            ]
          },
          {
            t: 0.0333,
            agent: [
              105.223,
              288.785
            ],
            block: [
              330.924,
              304.378
            ],
            angle: 2.25314,
            coverage: 0.0568,
            action: [
              249.57,
              136.14
            ]
          },
          {
            t: 0.0417,
            agent: [
              144.072,
              229.237
            ],
            block: [
              330.924,
              304.378
            ],
            angle: 2.25314,
            coverage: 0.0568,
            action: [
              127.47,
              401.082
            ]
          },
          {
            t: 0.05,
            agent: [
              155.354,
              263.046
            ],
            block: [
              330.924,
              304.378
            ],
            angle: 2.25314,
            coverage: 0.0568,
            action: [
              167.527,
              357.454
            ]
          },
          {
            t: 0.0583,
            agent: [
              156.988,
              310.316
            ],
            block: [
              330.924,
              304.378
            ],
            angle: 2.25314,
            coverage: 0.0568,
            action: [
              286.885,
              376.925
            ]
          },
          {
            t: 0.0667,
            agent: [
              196.771,
              340.456
            ],
            block: [
              330.924,
              304.378
            ],
            angle: 2.25314,
            coverage: 0.0568,
            action: [
              214.283,
              347.499
            ]
          },
          {
            t: 0.075,
            agent: [
              216.487,
              349.93
            ],
            block: [
              330.924,
              304.378
            ],
            angle: 2.25314,
            coverage: 0.0568,
            action: [
              295.037,
              394.803
            ]
          },
          {
            t: 0.0833,
            agent: [
              241.578,
              363.938
            ],
            block: [
              330.924,
              304.378
            ],
            angle: 2.25314,
            coverage: 0.0568,
            action: [
              307.862,
              421.216
            ]
          },
          {
            t: 0.0917,
            agent: [
              269.961,
              385.894
            ],
            block: [
              330.924,
              304.378
            ],
            angle: 2.25314,
            coverage: 0.0568,
            action: [
              356.579,
              411.075
            ]
          },
          {
            t: 0.1,
            agent: [
              302.937,
              399.721
            ],
            block: [
              330.924,
              304.378
            ],
            angle: 2.25314,
            coverage: 0.0568,
            action: [
              302.937,
              403.424
            ]
          },
          {
            t: 0.1083,
            agent: [
              312.589,
              403.594
            ],
            block: [
              330.924,
              304.378
            ],
            angle: 2.25314,
            coverage: 0.0568,
            action: [
              283.265,
              340.995
            ]
          },
          {
            t: 0.1167,
            agent: [
              303.856,
              385.482
            ],
            block: [
              330.924,
              304.378
            ],
            angle: 2.25314,
            coverage: 0.0568,
            action: [
              357.835,
              423.21
            ]
          },
          {
            t: 0.125,
            agent: [
              316.532,
              389.624
            ],
            block: [
              330.924,
              304.378
            ],
            angle: 2.25314,
            coverage: 0.0568,
            action: [
              368.675,
              480.248
            ]
          },
          {
            t: 0.1333,
            agent: [
              338.016,
              420.69
            ],
            block: [
              330.924,
              304.378
            ],
            angle: 2.25314,
            coverage: 0.0568,
            action: [
              406.183,
              464.776
            ]
          },
          {
            t: 0.1417,
            agent: [
              363.971,
              443.846
            ],
            block: [
              330.924,
              304.378
            ],
            angle: 2.25314,
            coverage: 0.0568,
            action: [
              301.268,
              393.013
            ]
          },
          {
            t: 0.15,
            agent: [
              353.027,
              433.687
            ],
            block: [
              330.924,
              304.378
            ],
            angle: 2.25314,
            coverage: 0.0568,
            action: [
              473.933,
              337.165
            ]
          },
          {
            t: 0.1583,
            agent: [
              381.704,
              399.423
            ],
            block: [
              330.924,
              304.378
            ],
            angle: 2.25314,
            coverage: 0.0568,
            action: [
              266.817,
              421.011
            ]
          },
          {
            t: 0.1667,
            agent: [
              361.322,
              395.034
            ],
            block: [
              330.924,
              304.378
            ],
            angle: 2.25314,
            coverage: 0.0568,
            action: [
              459.868,
              204.187
            ]
          },
          {
            t: 0.175,
            agent: [
              377.504,
              341.094
            ],
            block: [
              330.924,
              304.378
            ],
            angle: 2.25314,
            coverage: 0.0568,
            action: [
              314.176,
              382.529
            ]
          },
          {
            t: 0.1833,
            agent: [
              369.901,
              331.956
            ],
            block: [
              330.924,
              304.378
            ],
            angle: 2.25314,
            coverage: 0.0568,
            action: [
              344.338,
              332.484
            ]
          },
          {
            t: 0.1917,
            agent: [
              355.178,
              336.892
            ],
            block: [
              330.924,
              304.378
            ],
            angle: 2.25314,
            coverage: 0.0568,
            action: [
              437.232,
              336.348
            ]
          },
          {
            t: 0.2,
            agent: [
              376.623,
              336.759
            ],
            block: [
              330.924,
              304.378
            ],
            angle: 2.25314,
            coverage: 0.0568,
            action: [
              456.324,
              325.551
            ]
          },
          {
            t: 0.2083,
            agent: [
              409.396,
              333.384
            ],
            block: [
              330.924,
              304.378
            ],
            angle: 2.25314,
            coverage: 0.0568,
            action: [
              355.577,
              324.206
            ]
          },
          {
            t: 0.2167,
            agent: [
              402.349,
              329.415
            ],
            block: [
              330.924,
              304.378
            ],
            angle: 2.25314,
            coverage: 0.0568,
            action: [
              449.774,
              294.771
            ]
          },
          {
            t: 0.225,
            agent: [
              410.286,
              318.152
            ],
            block: [
              330.924,
              304.378
            ],
            angle: 2.25314,
            coverage: 0.0568,
            action: [
              429.291,
              312.249
            ]
          },
          {
            t: 0.2333,
            agent: [
              421.256,
              312.534
            ],
            block: [
              330.924,
              304.378
            ],
            angle: 2.25314,
            coverage: 0.0568,
            action: [
              381.6,
              200.903
            ]
          },
          {
            t: 0.2417,
            agent: [
              411.624,
              278.892
            ],
            block: [
              330.924,
              304.378
            ],
            angle: 2.25314,
            coverage: 0.0568,
            action: [
              450.426,
              400.218
            ]
          },
          {
            t: 0.25,
            agent: [
              418.642,
              302.268
            ],
            block: [
              330.924,
              304.378
            ],
            angle: 2.25314,
            coverage: 0.0568,
            action: [
              435.068,
              358.283
            ]
          },
          {
            t: 0.2583,
            agent: [
              427.873,
              332.499
            ],
            block: [
              330.924,
              304.378
            ],
            angle: 2.25314,
            coverage: 0.0568,
            action: [
              440.492,
              285.511
            ]
          },
          {
            t: 0.2667,
            agent: [
              433.415,
              324.789
            ],
            block: [
              330.924,
              304.378
            ],
            angle: 2.25314,
            coverage: 0.0568,
            action: [
              416.62,
              240.524
            ]
          },
          {
            t: 0.275,
            agent: [
              429.851,
              294.572
            ],
            block: [
              330.924,
              304.378
            ],
            angle: 2.25314,
            coverage: 0.0568,
            action: [
              287.497,
              357.99
            ]
          },
          {
            t: 0.2833,
            agent: [
              385.871,
              303.921
            ],
            block: [
              330.924,
              304.378
            ],
            angle: 2.25314,
            coverage: 0.0568,
            action: [
              299.973,
              282.861
            ]
          },
          {
            t: 0.2917,
            agent: [
              344.544,
              304.858
            ],
            block: [
              328.836,
              302.115
            ],
            angle: 2.24339,
            coverage: 0.075,
            action: [
              401.003,
              164.146
            ]
          },
          {
            t: 0.3,
            agent: [
              351.722,
              260.848
            ],
            block: [
              316.845,
              287.943
            ],
            angle: 2.15235,
            coverage: 0.2219,
            action: [
              256.827,
              304.822
            ]
          },
          {
            t: 0.3083,
            agent: [
              330.049,
              258.107
            ],
            block: [
              308.431,
              274.416
            ],
            angle: 1.97637,
            coverage: 0.3736,
            action: [
              422.557,
              280.364
            ]
          },
          {
            t: 0.3167,
            agent: [
              346.732,
              269.716
            ],
            block: [
              305.794,
              272.082
            ],
            angle: 1.9514,
            coverage: 0.3891,
            action: [
              310.917,
              129.071
            ]
          },
          {
            t: 0.325,
            agent: [
              346.572,
              230.591
            ],
            block: [
              305.794,
              272.082
            ],
            angle: 1.9514,
            coverage: 0.3891,
            action: [
              168.842,
              141.344
            ]
          },
          {
            t: 0.3333,
            agent: [
              289.943,
              188.436
            ],
            block: [
              283.94,
              246.473
            ],
            angle: 1.461,
            coverage: 0.3469,
            action: [
              205.752,
              177.85
            ]
          },
          {
            t: 0.3417,
            agent: [
              245.173,
              175.415
            ],
            block: [
              261.625,
              236.477
            ],
            angle: 1.10467,
            coverage: 0.3352,
            action: [
              194.184,
              201.519
            ]
          },
          {
            t: 0.35,
            agent: [
              220.799,
              182.013
            ],
            block: [
              246.672,
              235.745
            ],
            angle: 0.88349,
            coverage: 0.422,
            action: [
              355.517,
              183.447
            ]
          },
          {
            t: 0.3583,
            agent: [
              254.982,
              185.367
            ],
            block: [
              245.335,
              235.713
            ],
            angle: 0.86408,
            coverage: 0.4305,
            action: [
              266.606,
              13.768
            ]
          },
          {
            t: 0.3667,
            agent: [
              273.543,
              134.772
            ],
            block: [
              245.335,
              235.713
            ],
            angle: 0.86408,
            coverage: 0.4305,
            action: [
              224.938,
              214.653
            ]
          },
          {
            t: 0.375,
            agent: [
              260.374,
              139.172
            ],
            block: [
              245.335,
              235.713
            ],
            angle: 0.86408,
            coverage: 0.4305,
            action: [
              332.288,
              22.588
            ]
          },
          {
            t: 0.3833,
            agent: [
              276.186,
              113.773
            ],
            block: [
              245.335,
              235.713
            ],
            angle: 0.86408,
            coverage: 0.4305,
            action: [
              197.779,
              156.919
            ]
          },
          {
            t: 0.3917,
            agent: [
              261.092,
              113.415
            ],
            block: [
              245.335,
              235.713
            ],
            angle: 0.86408,
            coverage: 0.4305,
            action: [
              149.787,
              195.917
            ]
          },
          {
            t: 0.4,
            agent: [
              219.349,
              142.726
            ],
            block: [
              245.335,
              235.713
            ],
            angle: 0.86408,
            coverage: 0.4305,
            action: [
              230.062,
              107.472
            ]
          },
          {
            t: 0.4083,
            agent: [
              210.109,
              141.51
            ],
            block: [
              245.335,
              235.713
            ],
            angle: 0.86408,
            coverage: 0.4305,
            action: [
              333.509,
              207.025
            ]
          },
          {
            t: 0.4167,
            agent: [
              247.876,
              156.872
            ],
            block: [
              245.335,
              235.713
            ],
            angle: 0.86408,
            coverage: 0.4305,
            action: [
              323.824,
              288.369
            ]
          },
          {
            t: 0.425,
            agent: [
              284.143,
              203.115
            ],
            block: [
              245.335,
              235.713
            ],
            angle: 0.86408,
            coverage: 0.4305,
            action: [
              252.19,
              182.851
            ]
          },
          {
            t: 0.4333,
            agent: [
              283.11,
              211.802
            ],
            block: [
              245.335,
              235.713
            ],
            angle: 0.86408,
            coverage: 0.4305,
            action: [
              144.83,
              141.591
            ]
          },
          {
            t: 0.4417,
            agent: [
              238.591,
              188.677
            ],
            block: [
              245.335,
              235.713
            ],
            angle: 0.86408,
            coverage: 0.4305,
            action: [
              0,
              105.979
            ]
          },
          {
            t: 0.45,
            agent: [
              152.584,
              156.378
            ],
            block: [
              243.365,
              235.916
            ],
            angle: 0.83477,
            coverage: 0.4521,
            action: [
              99.763,
              105.424
            ]
          },
          {
            t: 0.4583,
            agent: [
              110.348,
              132.102
            ],
            block: [
              243.365,
              235.916
            ],
            angle: 0.83477,
            coverage: 0.4521,
            action: [
              194.347,
              132.494
            ]
          },
          {
            t: 0.4667,
            agent: [
              129.443,
              126.572
            ],
            block: [
              243.365,
              235.916
            ],
            angle: 0.83477,
            coverage: 0.4521,
            action: [
              96.088,
              257.08
            ]
          },
          {
            t: 0.475,
            agent: [
              129.025,
              165.24
            ],
            block: [
              243.365,
              235.916
            ],
            angle: 0.83477,
            coverage: 0.4521,
            action: [
              164.695,
              223.52
            ]
          },
          {
            t: 0.4833,
            agent: [
              135.775,
              197.087
            ],
            block: [
              243.365,
              235.916
            ],
            angle: 0.83477,
            coverage: 0.4521,
            action: [
              299.209,
              344.76
            ]
          },
          {
            t: 0.4917,
            agent: [
              188.117,
              247.181
            ],
            block: [
              243.365,
              235.916
            ],
            angle: 0.83477,
            coverage: 0.4521,
            action: [
              163.039,
              286.27
            ]
          },
          {
            t: 0.5,
            agent: [
              198.979,
              275.234
            ],
            block: [
              261.51,
              255.389
            ],
            angle: 0.79101,
            coverage: 0.8624,
            action: [
              205.158,
              243.746
            ]
          },
          {
            t: 0.5083,
            agent: [
              197.878,
              270.193
            ],
            block: [
              261.684,
              255.565
            ],
            angle: 0.78962,
            coverage: 0.8565,
            action: [
              187.751,
              285.392
            ]
          },
          {
            t: 0.5167,
            agent: [
              195.595,
              271.133
            ],
            block: [
              261.684,
              255.565
            ],
            angle: 0.78962,
            coverage: 0.8565,
            action: [
              186.099,
              309.828
            ]
          },
          {
            t: 0.525,
            agent: [
              191.648,
              284.299
            ],
            block: [
              261.988,
              255.873
            ],
            angle: 0.78432,
            coverage: 0.8432,
            action: [
              215.66,
              230.018
            ]
          },
          {
            t: 0.5333,
            agent: [
              197.692,
              272.572
            ],
            block: [
              262.315,
              256.199
            ],
            angle: 0.77823,
            coverage: 0.8286,
            action: [
              216.266,
              256.164
            ]
          },
          {
            t: 0.5417,
            agent: [
              205.88,
              261.613
            ],
            block: [
              263.085,
              255.969
            ],
            angle: 0.78681,
            coverage: 0.8186,
            action: [
              270.861,
              138.052
            ]
          },
          {
            t: 0.55,
            agent: [
              227.155,
              223.282
            ],
            block: [
              289.818,
              254.254
            ],
            angle: 1.1166,
            coverage: 0.4478,
            action: [
              166.926,
              283.668
            ]
          },
          {
            t: 0.5583,
            agent: [
              216.611,
              227.311
            ],
            block: [
              293.982,
              255.392
            ],
            angle: 1.17893,
            coverage: 0.4131,
            action: [
              325.333,
              143.978
            ]
          },
          {
            t: 0.5667,
            agent: [
              241.964,
              209.525
            ],
            block: [
              299.557,
              257.801
            ],
            angle: 1.26834,
            coverage: 0.3703,
            action: [
              233.375,
              51.541
            ]
          },
          {
            t: 0.575,
            agent: [
              251.645,
              153.436
            ],
            block: [
              303.007,
              260.522
            ],
            angle: 1.32507,
            coverage: 0.354,
            action: [
              217.439,
              163.057
            ]
          },
          {
            t: 0.5833,
            agent: [
              240.49,
              138.65
            ],
            block: [
              303.007,
              260.522
            ],
            angle: 1.32507,
            coverage: 0.354,
            action: [
              394.906,
              143.839
            ]
          },
          {
            t: 0.5917,
            agent: [
              282.322,
              141.377
            ],
            block: [
              303.007,
              260.522
            ],
            angle: 1.32507,
            coverage: 0.354,
            action: [
              319.665,
              331.616
            ]
          },
          {
            t: 0.6,
            agent: [
              310.681,
              198.199
            ],
            block: [
              303.007,
              260.522
            ],
            angle: 1.32507,
            coverage: 0.354,
            action: [
              251.129,
              207.255
            ]
          },
          {
            t: 0.6083,
            agent: [
              297.142,
              222.177
            ],
            block: [
              294.479,
              258.635
            ],
            angle: 1.23155,
            coverage: 0.4145,
            action: [
              271.921,
              207.35
            ]
          },
          {
            t: 0.6167,
            agent: [
              282.989,
              218.668
            ],
            block: [
              284.889,
              257.786
            ],
            angle: 1.13476,
            coverage: 0.4949,
            action: [
              186.815,
              183.846
            ]
          },
          {
            t: 0.625,
            agent: [
              251.773,
              206.706
            ],
            block: [
              270.179,
              256.885
            ],
            angle: 0.95733,
            coverage: 0.7321,
            action: [
              193.966,
              214.155
            ]
          },
          {
            t: 0.6333,
            agent: [
              223.928,
              205.02
            ],
            block: [
              256.731,
              256.928
            ],
            angle: 0.76587,
            coverage: 0.9446,
            action: [
              177.381,
              204.161
            ]
          },
          {
            t: 0.6417,
            agent: [
              203.762,
              205.626
            ],
            block: [
              251.491,
              258.34
            ],
            angle: 0.68498,
            coverage: 0.8286,
            action: [
              86.08,
              148.023
            ]
          },
          {
            t: 0.65,
            agent: [
              163.796,
              188.492
            ],
            block: [
              251.491,
              258.345
            ],
            angle: 0.68496,
            coverage: 0.8285,
            action: [
              96.265,
              166.348
            ]
          },
          {
            t: 0.6583,
            agent: [
              130.684,
              175.495
            ],
            block: [
              251.491,
              258.345
            ],
            angle: 0.68496,
            coverage: 0.8285,
            action: [
              150.498,
              156.7
            ]
          },
          {
            t: 0.6667,
            agent: [
              129.066,
              167.5
            ],
            block: [
              251.491,
              258.345
            ],
            angle: 0.68496,
            coverage: 0.8285,
            action: [
              0.089,
              222.767
            ]
          },
          {
            t: 0.675,
            agent: [
              93.199,
              181.752
            ],
            block: [
              251.491,
              258.345
            ],
            angle: 0.68496,
            coverage: 0.8285,
            action: [
              130.755,
              211.096
            ]
          },
          {
            t: 0.6833,
            agent: [
              89.844,
              196.632
            ],
            block: [
              251.491,
              258.345
            ],
            angle: 0.68496,
            coverage: 0.8285,
            action: [
              96.094,
              303.81
            ]
          },
          {
            t: 0.6917,
            agent: [
              95.993,
              231.567
            ],
            block: [
              251.491,
              258.345
            ],
            angle: 0.68496,
            coverage: 0.8285,
            action: [
              131.669,
              246.942
            ]
          },
          {
            t: 0.7,
            agent: [
              107.213,
              248.094
            ],
            block: [
              251.491,
              258.345
            ],
            angle: 0.68496,
            coverage: 0.8285,
            action: [
              101.345,
              186.949
            ]
          },
          {
            t: 0.7083,
            agent: [
              109.469,
              231.659
            ],
            block: [
              251.491,
              258.345
            ],
            angle: 0.68496,
            coverage: 0.8285,
            action: [
              97.529,
              251.98
            ]
          },
          {
            t: 0.7167,
            agent: [
              105.256,
              230.809
            ],
            block: [
              251.491,
              258.345
            ],
            angle: 0.68496,
            coverage: 0.8285,
            action: [
              129.63,
              199.251
            ]
          },
          {
            t: 0.725,
            agent: [
              111.13,
              223.799
            ],
            block: [
              251.491,
              258.345
            ],
            angle: 0.68496,
            coverage: 0.8285,
            action: [
              46.36,
              184.269
            ]
          },
          {
            t: 0.7333,
            agent: [
              94.718,
              208.562
            ],
            block: [
              251.491,
              258.345
            ],
            angle: 0.68496,
            coverage: 0.8285,
            action: [
              140.463,
              272.312
            ]
          },
          {
            t: 0.7417,
            agent: [
              100.972,
              223.007
            ],
            block: [
              251.491,
              258.345
            ],
            angle: 0.68496,
            coverage: 0.8285,
            action: [
              169.295,
              274.917
            ]
          },
          {
            t: 0.75,
            agent: [
              126.344,
              245.523
            ],
            block: [
              251.491,
              258.345
            ],
            angle: 0.68496,
            coverage: 0.8285,
            action: [
              75.844,
              362.018
            ]
          },
          {
            t: 0.7583,
            agent: [
              119.03,
              285.734
            ],
            block: [
              251.491,
              258.345
            ],
            angle: 0.68496,
            coverage: 0.8285,
            action: [
              171.324,
              330.705
            ]
          },
          {
            t: 0.7667,
            agent: [
              128.787,
              312.039
            ],
            block: [
              251.491,
              258.345
            ],
            angle: 0.68496,
            coverage: 0.8285,
            action: [
              140.783,
              285.497
            ]
          },
          {
            t: 0.775,
            agent: [
              138.227,
              309.142
            ],
            block: [
              251.491,
              258.345
            ],
            angle: 0.68496,
            coverage: 0.8285,
            action: [
              210.692,
              222.429
            ]
          },
          {
            t: 0.7833,
            agent: [
              160.958,
              280.499
            ],
            block: [
              251.491,
              258.345
            ],
            angle: 0.68496,
            coverage: 0.8285,
            action: [
              49.128,
              272.572
            ]
          },
          {
            t: 0.7917,
            agent: [
              136,
              268.464
            ],
            block: [
              251.491,
              258.345
            ],
            angle: 0.68496,
            coverage: 0.8285,
            action: [
              251.296,
              346.08
            ]
          },
          {
            t: 0.8,
            agent: [
              157.513,
              290.588
            ],
            block: [
              251.491,
              258.345
            ],
            angle: 0.68496,
            coverage: 0.8285,
            action: [
              40.679,
              448.974
            ]
          },
          {
            t: 0.8083,
            agent: [
              135.963,
              346.116
            ],
            block: [
              251.491,
              258.345
            ],
            angle: 0.68496,
            coverage: 0.8285,
            action: [
              61.21,
              357.765
            ]
          },
          {
            t: 0.8167,
            agent: [
              100.691,
              367.241
            ],
            block: [
              251.491,
              258.345
            ],
            angle: 0.68496,
            coverage: 0.8285,
            action: [
              131.75,
              367.347
            ]
          },
          {
            t: 0.825,
            agent: [
              101.589,
              368.461
            ],
            block: [
              251.491,
              258.345
            ],
            angle: 0.68496,
            coverage: 0.8285,
            action: [
              239.826,
              408.491
            ]
          },
          {
            t: 0.8333,
            agent: [
              145.994,
              380.301
            ],
            block: [
              251.491,
              258.345
            ],
            angle: 0.68496,
            coverage: 0.8285,
            action: [
              200.825,
              381.513
            ]
          },
          {
            t: 0.8417,
            agent: [
              177.664,
              385.142
            ],
            block: [
              251.491,
              258.345
            ],
            angle: 0.68496,
            coverage: 0.8285,
            action: [
              137.285,
              392.451
            ]
          },
          {
            t: 0.85,
            agent: [
              171.764,
              387.41
            ],
            block: [
              251.491,
              258.345
            ],
            angle: 0.68496,
            coverage: 0.8285,
            action: [
              282.019,
              268.059
            ]
          },
          {
            t: 0.8583,
            agent: [
              199.802,
              352.939
            ],
            block: [
              255.267,
              252.117
            ],
            angle: 0.7611,
            coverage: 0.9245,
            action: [
              211.408,
              338.729
            ]
          },
          {
            t: 0.8667,
            agent: [
              215.611,
              335.366
            ],
            block: [
              255.177,
              252.03
            ],
            angle: 0.77046,
            coverage: 0.9119,
            action: [
              197.75,
              417.764
            ]
          },
          {
            t: 0.875,
            agent: [
              211.549,
              358.225
            ],
            block: [
              255.165,
              252.019
            ],
            angle: 0.7711,
            coverage: 0.9108,
            action: [
              177.206,
              362.016
            ]
          },
          {
            t: 0.8833,
            agent: [
              199.386,
              368.584
            ],
            block: [
              255.165,
              252.019
            ],
            angle: 0.7711,
            coverage: 0.9108,
            action: [
              253.881,
              246.714
            ]
          },
          {
            t: 0.8917,
            agent: [
              211.666,
              332.914
            ],
            block: [
              254.793,
              251.668
            ],
            angle: 0.80506,
            coverage: 0.8648,
            action: [
              205.378,
              367.556
            ]
          },
          {
            t: 0.9,
            agent: [
              215.935,
              329.506
            ],
            block: [
              254.017,
              250.855
            ],
            angle: 0.84157,
            coverage: 0.8018,
            action: [
              375.346,
              294.384
            ]
          },
          {
            t: 0.9083,
            agent: [
              262.324,
              323.091
            ],
            block: [
              254.017,
              250.855
            ],
            angle: 0.84157,
            coverage: 0.8018,
            action: [
              158.059,
              289.667
            ]
          },
          {
            t: 0.9167,
            agent: [
              249.353,
              309.249
            ],
            block: [
              254.366,
              244.048
            ],
            angle: 0.74061,
            coverage: 0.7455,
            action: [
              198.333,
              348.806
            ]
          },
          {
            t: 0.925,
            agent: [
              222.474,
              317.228
            ],
            block: [
              252.768,
              242.571
            ],
            angle: 0.7633,
            coverage: 0.687,
            action: [
              213.106,
              341.603
            ]
          },
          {
            t: 0.9333,
            agent: [
              214.068,
              328.889
            ],
            block: [
              252.618,
              242.427
            ],
            angle: 0.76719,
            coverage: 0.6797,
            action: [
              194.386,
              323.215
            ]
          },
          {
            t: 0.9417,
            agent: [
              207.236,
              329.912
            ],
            block: [
              252.47,
              242.287
            ],
            angle: 0.77962,
            coverage: 0.6641,
            action: [
              114.2,
              403.583
            ]
          },
          {
            t: 0.95,
            agent: [
              177.53,
              351.042
            ],
            block: [
              252.223,
              242.046
            ],
            angle: 0.82649,
            coverage: 0.6129,
            action: [
              87.676,
              296.009
            ]
          },
          {
            t: 0.9583,
            agent: [
              140.558,
              343.025
            ],
            block: [
              252.223,
              242.046
            ],
            angle: 0.82649,
            coverage: 0.6129,
            action: [
              64.547,
              373.373
            ]
          },
          {
            t: 0.9667,
            agent: [
              108.09,
              345.781
            ],
            block: [
              252.223,
              242.046
            ],
            angle: 0.82649,
            coverage: 0.6129,
            action: [
              210.042,
              212.263
            ]
          },
          {
            t: 0.975,
            agent: [
              129.787,
              309.742
            ],
            block: [
              252.223,
              242.046
            ],
            angle: 0.82649,
            coverage: 0.6129,
            action: [
              48.168,
              274.905
            ]
          },
          {
            t: 0.9833,
            agent: [
              117.127,
              284.467
            ],
            block: [
              252.223,
              242.046
            ],
            angle: 0.82649,
            coverage: 0.6129,
            action: [
              99.222,
              331.45
            ]
          },
          {
            t: 0.9917,
            agent: [
              102.618,
              294.555
            ],
            block: [
              252.223,
              242.046
            ],
            angle: 0.82649,
            coverage: 0.6129,
            action: [
              26.861,
              297.151
            ]
          },
          {
            t: 1,
            agent: [
              78.274,
              300.609
            ],
            block: [
              252.223,
              242.046
            ],
            angle: 0.82649,
            coverage: 0.6129
          }
        ]
      },
      kimi: {
        agentId: "kimi",
        label: "Kimi Code",
        policy: "trajectory_lookup",
        color: "#111111",
        steps: 91,
        finalCoverage: 0.9652,
        frames: [
          {
            t: 0.0,
            agent: [
              85.0,
              359.0
            ],
            block: [
              330.924,
              304.378
            ],
            angle: 2.25314,
            coverage: 0.0,
            action: [
              500.744,
              435.218
            ]
          },
          {
            t: 0.011,
            agent: [
              207.924,
              381.535
            ],
            block: [
              330.924,
              304.378
            ],
            angle: 2.25314,
            coverage: 0.0568,
            action: [
              500.744,
              435.218
            ]
          },
          {
            t: 0.022,
            agent: [
              341.061,
              405.943
            ],
            block: [
              330.924,
              304.378
            ],
            angle: 2.25314,
            coverage: 0.0568,
            action: [
              500.744,
              435.218
            ]
          },
          {
            t: 0.033,
            agent: [
              420.763,
              420.555
            ],
            block: [
              330.924,
              304.378
            ],
            angle: 2.25314,
            coverage: 0.0568,
            action: [
              500.744,
              435.218
            ]
          },
          {
            t: 0.044,
            agent: [
              462.081,
              428.13
            ],
            block: [
              330.924,
              304.378
            ],
            angle: 2.25314,
            coverage: 0.0568,
            action: [
              500.744,
              435.218
            ]
          },
          {
            t: 0.0549,
            agent: [
              482.354,
              431.846
            ],
            block: [
              330.924,
              304.378
            ],
            angle: 2.25314,
            coverage: 0.0568,
            action: [
              320.96,
              236.418
            ]
          },
          {
            t: 0.0659,
            agent: [
              438.906,
              374.847
            ],
            block: [
              330.924,
              304.378
            ],
            angle: 2.25314,
            coverage: 0.0568,
            action: [
              320.96,
              236.418
            ]
          },
          {
            t: 0.0769,
            agent: [
              385.93,
              312.027
            ],
            block: [
              330.924,
              304.378
            ],
            angle: 2.25314,
            coverage: 0.0568,
            action: [
              320.96,
              236.418
            ]
          },
          {
            t: 0.0879,
            agent: [
              353.63,
              274.312
            ],
            block: [
              326.171,
              294.783
            ],
            angle: 2.14645,
            coverage: 0.146,
            action: [
              320.96,
              236.418
            ]
          },
          {
            t: 0.0989,
            agent: [
              336.78,
              254.741
            ],
            block: [
              312.446,
              277.145
            ],
            angle: 1.94005,
            coverage: 0.3622,
            action: [
              320.96,
              236.418
            ]
          },
          {
            t: 0.1099,
            agent: [
              328.491,
              245.135
            ],
            block: [
              305.811,
              270.868
            ],
            angle: 1.85633,
            coverage: 0.3952,
            action: [
              308.574,
              196.536
            ]
          },
          {
            t: 0.1209,
            agent: [
              320.854,
              228.741
            ],
            block: [
              299.001,
              264.87
            ],
            angle: 1.76383,
            coverage: 0.3974,
            action: [
              308.574,
              196.536
            ]
          },
          {
            t: 0.1319,
            agent: [
              315.004,
              213.789
            ],
            block: [
              294.661,
              260.942
            ],
            angle: 1.69335,
            coverage: 0.3894,
            action: [
              308.574,
              196.536
            ]
          },
          {
            t: 0.1429,
            agent: [
              311.742,
              205.117
            ],
            block: [
              292.458,
              258.834
            ],
            angle: 1.65185,
            coverage: 0.383,
            action: [
              308.574,
              196.536
            ]
          },
          {
            t: 0.1538,
            agent: [
              310.095,
              200.671
            ],
            block: [
              291.569,
              257.964
            ],
            angle: 1.63401,
            coverage: 0.3803,
            action: [
              308.574,
              196.536
            ]
          },
          {
            t: 0.1648,
            agent: [
              309.295,
              198.5
            ],
            block: [
              291.131,
              257.527
            ],
            angle: 1.6249,
            coverage: 0.3789,
            action: [
              294.141,
              388.269
            ]
          },
          {
            t: 0.1758,
            agent: [
              304.646,
              254.152
            ],
            block: [
              289.754,
              256.839
            ],
            angle: 1.61103,
            coverage: 0.3781,
            action: [
              294.141,
              388.269
            ]
          },
          {
            t: 0.1868,
            agent: [
              299.844,
              315.062
            ],
            block: [
              287.87,
              257.282
            ],
            angle: 1.62266,
            coverage: 0.3819,
            action: [
              294.141,
              388.269
            ]
          },
          {
            t: 0.1978,
            agent: [
              296.993,
              351.587
            ],
            block: [
              287.804,
              257.333
            ],
            angle: 1.62385,
            coverage: 0.3821,
            action: [
              294.141,
              388.269
            ]
          },
          {
            t: 0.2088,
            agent: [
              295.519,
              370.534
            ],
            block: [
              287.804,
              257.333
            ],
            angle: 1.62385,
            coverage: 0.3821,
            action: [
              294.141,
              388.269
            ]
          },
          {
            t: 0.2198,
            agent: [
              294.796,
              379.832
            ],
            block: [
              287.804,
              257.333
            ],
            angle: 1.62385,
            coverage: 0.3821,
            action: [
              158.723,
              273.788
            ]
          },
          {
            t: 0.2308,
            agent: [
              254.411,
              350.438
            ],
            block: [
              287.804,
              257.333
            ],
            angle: 1.62385,
            coverage: 0.3821,
            action: [
              158.723,
              273.788
            ]
          },
          {
            t: 0.2418,
            agent: [
              210.881,
              315.886
            ],
            block: [
              287.804,
              257.333
            ],
            angle: 1.62385,
            coverage: 0.3821,
            action: [
              158.723,
              273.788
            ]
          },
          {
            t: 0.2527,
            agent: [
              184.844,
              294.933
            ],
            block: [
              287.804,
              257.333
            ],
            angle: 1.62385,
            coverage: 0.3821,
            action: [
              158.723,
              273.788
            ]
          },
          {
            t: 0.2637,
            agent: [
              171.349,
              284.022
            ],
            block: [
              287.804,
              257.333
            ],
            angle: 1.62385,
            coverage: 0.3821,
            action: [
              158.723,
              273.788
            ]
          },
          {
            t: 0.2747,
            agent: [
              164.729,
              278.659
            ],
            block: [
              287.802,
              257.407
            ],
            angle: 1.63954,
            coverage: 0.3851,
            action: [
              63.872,
              0.0
            ]
          },
          {
            t: 0.2857,
            agent: [
              133.513,
              195.136
            ],
            block: [
              289.783,
              257.595
            ],
            angle: 1.71442,
            coverage: 0.3979,
            action: [
              63.872,
              0.0
            ]
          },
          {
            t: 0.2967,
            agent: [
              101.637,
              106.241
            ],
            block: [
              289.783,
              257.595
            ],
            angle: 1.71442,
            coverage: 0.3979,
            action: [
              63.872,
              0.0
            ]
          },
          {
            t: 0.3077,
            agent: [
              82.746,
              53.18
            ],
            block: [
              289.783,
              257.595
            ],
            angle: 1.71442,
            coverage: 0.3979,
            action: [
              63.872,
              0.0
            ]
          },
          {
            t: 0.3187,
            agent: [
              72.987,
              25.7
            ],
            block: [
              289.783,
              257.595
            ],
            angle: 1.71442,
            coverage: 0.3979,
            action: [
              63.872,
              0.0
            ]
          },
          {
            t: 0.3297,
            agent: [
              68.205,
              12.223
            ],
            block: [
              289.783,
              257.595
            ],
            angle: 1.71442,
            coverage: 0.3979,
            action: [
              204.793,
              275.49
            ]
          },
          {
            t: 0.3407,
            agent: [
              107.584,
              87.224
            ],
            block: [
              289.783,
              257.595
            ],
            angle: 1.71442,
            coverage: 0.3979,
            action: [
              204.793,
              275.49
            ]
          },
          {
            t: 0.3516,
            agent: [
              151.629,
              172.39
            ],
            block: [
              289.783,
              257.595
            ],
            angle: 1.71442,
            coverage: 0.3979,
            action: [
              204.793,
              275.49
            ]
          },
          {
            t: 0.3626,
            agent: [
              178.134,
              223.764
            ],
            block: [
              290.166,
              257.251
            ],
            angle: 1.60068,
            coverage: 0.3753,
            action: [
              204.793,
              275.49
            ]
          },
          {
            t: 0.3736,
            agent: [
              191.9,
              250.467
            ],
            block: [
              290.226,
              258.948
            ],
            angle: 1.35771,
            coverage: 0.3784,
            action: [
              204.793,
              275.49
            ]
          },
          {
            t: 0.3846,
            agent: [
              198.659,
              263.584
            ],
            block: [
              290.897,
              261.474
            ],
            angle: 1.22706,
            coverage: 0.4537,
            action: [
              181.404,
              284.199
            ]
          },
          {
            t: 0.3956,
            agent: [
              194.982,
              272.444
            ],
            block: [
              291.475,
              262.985
            ],
            angle: 1.15954,
            coverage: 0.4789,
            action: [
              181.404,
              284.199
            ]
          },
          {
            t: 0.4066,
            agent: [
              189.026,
              278.21
            ],
            block: [
              291.627,
              263.327
            ],
            angle: 1.13448,
            coverage: 0.4798,
            action: [
              181.404,
              284.199
            ]
          },
          {
            t: 0.4176,
            agent: [
              185.264,
              281.282
            ],
            block: [
              291.668,
              263.416
            ],
            angle: 1.12289,
            coverage: 0.4786,
            action: [
              181.404,
              284.199
            ]
          },
          {
            t: 0.4286,
            agent: [
              183.279,
              282.807
            ],
            block: [
              291.679,
              263.438
            ],
            angle: 1.11835,
            coverage: 0.4779,
            action: [
              181.404,
              284.199
            ]
          },
          {
            t: 0.4396,
            agent: [
              182.298,
              283.541
            ],
            block: [
              291.682,
              263.445
            ],
            angle: 1.11609,
            coverage: 0.4775,
            action: [
              161.735,
              292.212
            ]
          },
          {
            t: 0.4505,
            agent: [
              176.011,
              286.258
            ],
            block: [
              291.683,
              263.446
            ],
            angle: 1.11595,
            coverage: 0.4775,
            action: [
              161.735,
              292.212
            ]
          },
          {
            t: 0.4615,
            agent: [
              169.489,
              288.989
            ],
            block: [
              291.683,
              263.446
            ],
            angle: 1.11595,
            coverage: 0.4775,
            action: [
              161.735,
              292.212
            ]
          },
          {
            t: 0.4725,
            agent: [
              165.612,
              290.602
            ],
            block: [
              291.683,
              263.446
            ],
            angle: 1.11595,
            coverage: 0.4775,
            action: [
              161.735,
              292.212
            ]
          },
          {
            t: 0.4835,
            agent: [
              163.608,
              291.435
            ],
            block: [
              291.683,
              263.446
            ],
            angle: 1.11595,
            coverage: 0.4775,
            action: [
              161.735,
              292.212
            ]
          },
          {
            t: 0.4945,
            agent: [
              162.626,
              291.843
            ],
            block: [
              291.683,
              263.446
            ],
            angle: 1.11595,
            coverage: 0.4775,
            action: [
              156.629,
              280.492
            ]
          },
          {
            t: 0.5055,
            agent: [
              160.646,
              288.572
            ],
            block: [
              291.683,
              263.446
            ],
            angle: 1.11595,
            coverage: 0.4775,
            action: [
              156.629,
              280.492
            ]
          },
          {
            t: 0.5165,
            agent: [
              158.788,
              284.911
            ],
            block: [
              291.683,
              263.446
            ],
            angle: 1.11595,
            coverage: 0.4775,
            action: [
              156.629,
              280.492
            ]
          },
          {
            t: 0.5275,
            agent: [
              157.704,
              282.708
            ],
            block: [
              291.683,
              263.446
            ],
            angle: 1.11595,
            coverage: 0.4775,
            action: [
              156.629,
              280.492
            ]
          },
          {
            t: 0.5385,
            agent: [
              157.147,
              281.564
            ],
            block: [
              291.683,
              263.446
            ],
            angle: 1.11595,
            coverage: 0.4775,
            action: [
              156.629,
              280.492
            ]
          },
          {
            t: 0.5495,
            agent: [
              156.875,
              281.002
            ],
            block: [
              291.683,
              263.446
            ],
            angle: 1.11595,
            coverage: 0.4775,
            action: [
              87.211,
              217.127
            ]
          },
          {
            t: 0.5604,
            agent: [
              136.22,
              261.997
            ],
            block: [
              291.683,
              263.446
            ],
            angle: 1.11595,
            coverage: 0.4775,
            action: [
              87.211,
              217.127
            ]
          },
          {
            t: 0.5714,
            agent: [
              113.928,
              241.578
            ],
            block: [
              291.683,
              263.446
            ],
            angle: 1.11595,
            coverage: 0.4775,
            action: [
              87.211,
              217.127
            ]
          },
          {
            t: 0.5824,
            agent: [
              100.591,
              229.37
            ],
            block: [
              291.683,
              263.446
            ],
            angle: 1.11595,
            coverage: 0.4775,
            action: [
              87.211,
              217.127
            ]
          },
          {
            t: 0.5934,
            agent: [
              93.679,
              223.045
            ],
            block: [
              291.683,
              263.446
            ],
            angle: 1.11595,
            coverage: 0.4775,
            action: [
              87.211,
              217.127
            ]
          },
          {
            t: 0.6044,
            agent: [
              90.287,
              219.942
            ],
            block: [
              291.683,
              263.446
            ],
            angle: 1.11595,
            coverage: 0.4775,
            action: [
              118.037,
              320.242
            ]
          },
          {
            t: 0.6154,
            agent: [
              97.777,
              248.944
            ],
            block: [
              291.683,
              263.446
            ],
            angle: 1.11595,
            coverage: 0.4775,
            action: [
              118.037,
              320.242
            ]
          },
          {
            t: 0.6264,
            agent: [
              106.88,
              281.262
            ],
            block: [
              291.683,
              263.446
            ],
            angle: 1.11595,
            coverage: 0.4775,
            action: [
              118.037,
              320.242
            ]
          },
          {
            t: 0.6374,
            agent: [
              112.427,
              300.698
            ],
            block: [
              291.683,
              263.446
            ],
            angle: 1.11595,
            coverage: 0.4775,
            action: [
              118.037,
              320.242
            ]
          },
          {
            t: 0.6484,
            agent: [
              115.32,
              310.79
            ],
            block: [
              291.683,
              263.446
            ],
            angle: 1.11595,
            coverage: 0.4775,
            action: [
              118.037,
              320.242
            ]
          },
          {
            t: 0.6593,
            agent: [
              116.744,
              315.745
            ],
            block: [
              291.683,
              263.446
            ],
            angle: 1.11595,
            coverage: 0.4775,
            action: [
              281.747,
              388.807
            ]
          },
          {
            t: 0.6703,
            agent: [
              165.831,
              338.392
            ],
            block: [
              291.683,
              263.446
            ],
            angle: 1.11595,
            coverage: 0.4775,
            action: [
              281.747,
              388.807
            ]
          },
          {
            t: 0.6813,
            agent: [
              218.581,
              361.474
            ],
            block: [
              291.683,
              263.446
            ],
            angle: 1.11595,
            coverage: 0.4775,
            action: [
              281.747,
              388.807
            ]
          },
          {
            t: 0.6923,
            agent: [
              250.118,
              375.148
            ],
            block: [
              291.683,
              263.446
            ],
            angle: 1.11595,
            coverage: 0.4775,
            action: [
              281.747,
              388.807
            ]
          },
          {
            t: 0.7033,
            agent: [
              266.459,
              382.211
            ],
            block: [
              291.683,
              263.446
            ],
            angle: 1.11595,
            coverage: 0.4775,
            action: [
              281.747,
              388.807
            ]
          },
          {
            t: 0.7143,
            agent: [
              274.476,
              385.671
            ],
            block: [
              291.683,
              263.446
            ],
            angle: 1.11595,
            coverage: 0.4775,
            action: [
              374.818,
              231.362
            ]
          },
          {
            t: 0.7253,
            agent: [
              305.834,
              340.775
            ],
            block: [
              291.683,
              263.446
            ],
            angle: 1.11595,
            coverage: 0.4775,
            action: [
              374.818,
              231.362
            ]
          },
          {
            t: 0.7363,
            agent: [
              337.457,
              291.139
            ],
            block: [
              282.393,
              247.425
            ],
            angle: 0.97227,
            coverage: 0.4788,
            action: [
              374.818,
              231.362
            ]
          },
          {
            t: 0.7473,
            agent: [
              356.155,
              261.325
            ],
            block: [
              282.393,
              247.425
            ],
            angle: 0.97227,
            coverage: 0.4788,
            action: [
              374.818,
              231.362
            ]
          },
          {
            t: 0.7582,
            agent: [
              365.807,
              245.851
            ],
            block: [
              282.393,
              247.425
            ],
            angle: 0.97227,
            coverage: 0.4788,
            action: [
              374.818,
              231.362
            ]
          },
          {
            t: 0.7692,
            agent: [
              370.535,
              238.255
            ],
            block: [
              282.393,
              247.425
            ],
            angle: 0.97227,
            coverage: 0.4788,
            action: [
              233.057,
              207.989
            ]
          },
          {
            t: 0.7802,
            agent: [
              330.882,
              227.705
            ],
            block: [
              282.393,
              247.425
            ],
            angle: 0.97227,
            coverage: 0.4788,
            action: [
              233.057,
              207.989
            ]
          },
          {
            t: 0.7912,
            agent: [
              286.555,
              218.497
            ],
            block: [
              282.393,
              247.425
            ],
            angle: 0.97227,
            coverage: 0.4788,
            action: [
              233.057,
              207.989
            ]
          },
          {
            t: 0.8022,
            agent: [
              259.883,
              213.204
            ],
            block: [
              271.844,
              249.63
            ],
            angle: 0.87173,
            coverage: 0.6662,
            action: [
              233.057,
              207.989
            ]
          },
          {
            t: 0.8132,
            agent: [
              246.031,
              210.5
            ],
            block: [
              265.333,
              251.036
            ],
            angle: 0.79845,
            coverage: 0.7722,
            action: [
              233.057,
              207.989
            ]
          },
          {
            t: 0.8242,
            agent: [
              239.23,
              209.181
            ],
            block: [
              262.29,
              251.673
            ],
            angle: 0.76044,
            coverage: 0.807,
            action: [
              323.154,
              302.1
            ]
          },
          {
            t: 0.8352,
            agent: [
              262.61,
              236.377
            ],
            block: [
              259.162,
              253.07
            ],
            angle: 0.73029,
            coverage: 0.8543,
            action: [
              323.154,
              302.1
            ]
          },
          {
            t: 0.8462,
            agent: [
              289.919,
              266.217
            ],
            block: [
              256.896,
              256.318
            ],
            angle: 0.74098,
            coverage: 0.9085,
            action: [
              323.154,
              302.1
            ]
          },
          {
            t: 0.8571,
            agent: [
              306.465,
              284.119
            ],
            block: [
              256.644,
              257.613
            ],
            angle: 0.75642,
            coverage: 0.9187,
            action: [
              323.154,
              302.1
            ]
          },
          {
            t: 0.8681,
            agent: [
              315.077,
              293.406
            ],
            block: [
              256.627,
              257.921
            ],
            angle: 0.76087,
            coverage: 0.9195,
            action: [
              323.154,
              302.1
            ]
          },
          {
            t: 0.8791,
            agent: [
              319.31,
              297.965
            ],
            block: [
              256.627,
              257.921
            ],
            angle: 0.76087,
            coverage: 0.9195,
            action: [
              159.369,
              459.619
            ]
          },
          {
            t: 0.8901,
            agent: [
              272.913,
              346.722
            ],
            block: [
              255.453,
              256.963
            ],
            angle: 0.7504,
            coverage: 0.9307,
            action: [
              159.369,
              459.619
            ]
          },
          {
            t: 0.9011,
            agent: [
              221.423,
              398.2
            ],
            block: [
              255.453,
              256.963
            ],
            angle: 0.7504,
            coverage: 0.9307,
            action: [
              159.369,
              459.619
            ]
          },
          {
            t: 0.9121,
            agent: [
              190.478,
              428.884
            ],
            block: [
              255.453,
              256.963
            ],
            angle: 0.7504,
            coverage: 0.9307,
            action: [
              159.369,
              459.619
            ]
          },
          {
            t: 0.9231,
            agent: [
              174.413,
              444.768
            ],
            block: [
              255.453,
              256.963
            ],
            angle: 0.7504,
            coverage: 0.9307,
            action: [
              159.369,
              459.619
            ]
          },
          {
            t: 0.9341,
            agent: [
              166.526,
              452.556
            ],
            block: [
              255.453,
              256.963
            ],
            angle: 0.7504,
            coverage: 0.9307,
            action: [
              187.934,
              367.644
            ]
          },
          {
            t: 0.9451,
            agent: [
              171.194,
              429.091
            ],
            block: [
              255.453,
              256.963
            ],
            angle: 0.7504,
            coverage: 0.9307,
            action: [
              187.934,
              367.644
            ]
          },
          {
            t: 0.956,
            agent: [
              178.552,
              401.403
            ],
            block: [
              255.453,
              256.963
            ],
            angle: 0.7504,
            coverage: 0.9307,
            action: [
              187.934,
              367.644
            ]
          },
          {
            t: 0.967,
            agent: [
              183.185,
              384.602
            ],
            block: [
              255.453,
              256.963
            ],
            angle: 0.7504,
            coverage: 0.9307,
            action: [
              187.934,
              367.644
            ]
          },
          {
            t: 0.978,
            agent: [
              185.628,
              375.852
            ],
            block: [
              255.453,
              256.963
            ],
            angle: 0.7504,
            coverage: 0.9307,
            action: [
              187.934,
              367.644
            ]
          },
          {
            t: 0.989,
            agent: [
              186.835,
              371.55
            ],
            block: [
              255.453,
              256.963
            ],
            angle: 0.7504,
            coverage: 0.9307,
            action: [
              244.799,
              309.8
            ]
          },
          {
            t: 1.0,
            agent: [
              204.228,
              352.386
            ],
            block: [
              255.729,
              256.69
            ],
            angle: 0.77118,
            coverage: 0.9652
          }
        ]
      }
    }
  },
  {
    id: "seed-31",
    label: "Init 4",
    seed: 31,
    strategy: "Same initial state across Codex, Claude Code, and Kimi rollouts.",
    rollouts: {
      codex: {
        agentId: "codex",
        label: "Codex",
        policy: "beam_guarded",
        color: "#747fff",
        steps: 71,
        finalCoverage: 0.9881,
        frames: [
          {
            t: 0,
            agent: [
              269,
              411
            ],
            block: [
              286.8,
              144.001
            ],
            angle: 1.0853,
            coverage: 0
          },
          {
            t: 0.0141,
            agent: [
              266.851,
              356.025
            ],
            block: [
              286.8,
              144.001
            ],
            angle: 1.0853,
            coverage: 0,
            action: [
              261.732,
              225.066
            ]
          },
          {
            t: 0.0282,
            agent: [
              264.524,
              296.481
            ],
            block: [
              286.8,
              144.001
            ],
            angle: 1.0853,
            coverage: 0,
            action: [
              261.732,
              225.066
            ]
          },
          {
            t: 0.0423,
            agent: [
              263.13,
              260.837
            ],
            block: [
              286.8,
              144.001
            ],
            angle: 1.0853,
            coverage: 0,
            action: [
              261.732,
              225.066
            ]
          },
          {
            t: 0.0563,
            agent: [
              262.408,
              242.358
            ],
            block: [
              286.8,
              144.001
            ],
            angle: 1.0853,
            coverage: 0,
            action: [
              261.732,
              225.066
            ]
          },
          {
            t: 0.0704,
            agent: [
              262.054,
              233.291
            ],
            block: [
              286.8,
              144.001
            ],
            angle: 1.0853,
            coverage: 0,
            action: [
              261.732,
              225.066
            ]
          },
          {
            t: 0.0845,
            agent: [
              272.344,
              223.43
            ],
            block: [
              286.8,
              144.001
            ],
            angle: 1.0853,
            coverage: 0,
            action: [
              297.11,
              206.4
            ]
          },
          {
            t: 0.0986,
            agent: [
              283.593,
              215.396
            ],
            block: [
              287.899,
              138.787
            ],
            angle: 1.01102,
            coverage: 0,
            action: [
              297.11,
              206.4
            ]
          },
          {
            t: 0.1127,
            agent: [
              353.874,
              174.975
            ],
            block: [
              286.594,
              124.291
            ],
            angle: 0.83296,
            coverage: 0,
            action: [
              512,
              85.072
            ]
          },
          {
            t: 0.1268,
            agent: [
              426.189,
              133.811
            ],
            block: [
              286.594,
              124.291
            ],
            angle: 0.83296,
            coverage: 0,
            action: [
              512,
              85.072
            ]
          },
          {
            t: 0.1408,
            agent: [
              469.102,
              109.428
            ],
            block: [
              286.594,
              124.291
            ],
            angle: 0.83296,
            coverage: 0,
            action: [
              512,
              85.072
            ]
          },
          {
            t: 0.1549,
            agent: [
              491.28,
              96.833
            ],
            block: [
              286.594,
              124.291
            ],
            angle: 0.83296,
            coverage: 0,
            action: [
              512,
              85.072
            ]
          },
          {
            t: 0.169,
            agent: [
              502.149,
              90.664
            ],
            block: [
              286.594,
              124.291
            ],
            angle: 0.83296,
            coverage: 0,
            action: [
              512,
              85.072
            ]
          },
          {
            t: 0.1831,
            agent: [
              507.351,
              87.711
            ],
            block: [
              286.594,
              124.291
            ],
            angle: 0.83296,
            coverage: 0,
            action: [
              512,
              85.072
            ]
          },
          {
            t: 0.1972,
            agent: [
              509.814,
              86.313
            ],
            block: [
              286.594,
              124.291
            ],
            angle: 0.83296,
            coverage: 0,
            action: [
              512,
              85.072
            ]
          },
          {
            t: 0.2113,
            agent: [
              510.974,
              85.655
            ],
            block: [
              286.594,
              124.291
            ],
            angle: 0.83296,
            coverage: 0,
            action: [
              512,
              85.072
            ]
          },
          {
            t: 0.2254,
            agent: [
              511.519,
              85.345
            ],
            block: [
              286.594,
              124.291
            ],
            angle: 0.83296,
            coverage: 0,
            action: [
              512,
              85.072
            ]
          },
          {
            t: 0.2394,
            agent: [
              511.774,
              85.2
            ],
            block: [
              286.594,
              124.291
            ],
            angle: 0.83296,
            coverage: 0,
            action: [
              512,
              85.072
            ]
          },
          {
            t: 0.2535,
            agent: [
              511.894,
              85.132
            ],
            block: [
              286.594,
              124.291
            ],
            angle: 0.83296,
            coverage: 0,
            action: [
              512,
              85.072
            ]
          },
          {
            t: 0.2676,
            agent: [
              511.95,
              85.1
            ],
            block: [
              286.594,
              124.291
            ],
            angle: 0.83296,
            coverage: 0,
            action: [
              512,
              85.072
            ]
          },
          {
            t: 0.2817,
            agent: [
              511.977,
              85.085
            ],
            block: [
              286.594,
              124.291
            ],
            angle: 0.83296,
            coverage: 0,
            action: [
              512,
              85.072
            ]
          },
          {
            t: 0.2958,
            agent: [
              511.989,
              85.078
            ],
            block: [
              286.594,
              124.291
            ],
            angle: 0.83296,
            coverage: 0,
            action: [
              512,
              85.072
            ]
          },
          {
            t: 0.3099,
            agent: [
              416.829,
              93.094
            ],
            block: [
              286.594,
              124.291
            ],
            angle: 0.83296,
            coverage: 0,
            action: [
              190.138,
              112.195
            ]
          },
          {
            t: 0.3239,
            agent: [
              313.759,
              101.778
            ],
            block: [
              286.594,
              124.291
            ],
            angle: 0.83296,
            coverage: 0,
            action: [
              190.138,
              112.195
            ]
          },
          {
            t: 0.338,
            agent: [
              252.057,
              106.977
            ],
            block: [
              265.059,
              135.961
            ],
            angle: 0.67146,
            coverage: 0.0366,
            action: [
              190.138,
              112.195
            ]
          },
          {
            t: 0.3521,
            agent: [
              220.07,
              109.673
            ],
            block: [
              251.017,
              143.379
            ],
            angle: 0.50866,
            coverage: 0.0872,
            action: [
              190.138,
              112.195
            ]
          },
          {
            t: 0.3662,
            agent: [
              204.375,
              110.995
            ],
            block: [
              245.765,
              146.142
            ],
            angle: 0.43309,
            coverage: 0.107,
            action: [
              190.138,
              112.195
            ]
          },
          {
            t: 0.3803,
            agent: [
              202.944,
              121.77
            ],
            block: [
              239.652,
              149.845
            ],
            angle: 0.33862,
            coverage: 0.1311,
            action: [
              210.718,
              146.494
            ]
          },
          {
            t: 0.3944,
            agent: [
              205.974,
              133.054
            ],
            block: [
              233.715,
              155.393
            ],
            angle: 0.24833,
            coverage: 0.15,
            action: [
              210.718,
              146.494
            ]
          },
          {
            t: 0.4085,
            agent: [
              229.541,
              175.265
            ],
            block: [
              222.903,
              186.895
            ],
            angle: 0.12167,
            coverage: 0.2943,
            action: [
              282.75,
              266.542
            ]
          },
          {
            t: 0.4225,
            agent: [
              253.865,
              217.184
            ],
            block: [
              224.173,
              223.797
            ],
            angle: 0.296,
            coverage: 0.4982,
            action: [
              282.75,
              266.542
            ]
          },
          {
            t: 0.4366,
            agent: [
              268.308,
              241.902
            ],
            block: [
              225.667,
              238.01
            ],
            angle: 0.43659,
            coverage: 0.6017,
            action: [
              282.75,
              266.542
            ]
          },
          {
            t: 0.4507,
            agent: [
              275.774,
              254.648
            ],
            block: [
              226.306,
              243.815
            ],
            angle: 0.50734,
            coverage: 0.5975,
            action: [
              282.75,
              266.542
            ]
          },
          {
            t: 0.4648,
            agent: [
              279.433,
              260.889
            ],
            block: [
              226.632,
              246.465
            ],
            angle: 0.54303,
            coverage: 0.5757,
            action: [
              282.75,
              266.542
            ]
          },
          {
            t: 0.4789,
            agent: [
              281.184,
              263.874
            ],
            block: [
              226.765,
              247.504
            ],
            angle: 0.5576,
            coverage: 0.5624,
            action: [
              282.75,
              266.542
            ]
          },
          {
            t: 0.493,
            agent: [
              282.014,
              265.287
            ],
            block: [
              226.833,
              248.024
            ],
            angle: 0.56503,
            coverage: 0.5554,
            action: [
              282.75,
              266.542
            ]
          },
          {
            t: 0.507,
            agent: [
              282.404,
              265.953
            ],
            block: [
              226.865,
              248.264
            ],
            angle: 0.5685,
            coverage: 0.5522,
            action: [
              282.75,
              266.542
            ]
          },
          {
            t: 0.5211,
            agent: [
              282.588,
              266.266
            ],
            block: [
              226.879,
              248.365
            ],
            angle: 0.56996,
            coverage: 0.5509,
            action: [
              282.75,
              266.542
            ]
          },
          {
            t: 0.5352,
            agent: [
              282.674,
              266.412
            ],
            block: [
              226.886,
              248.417
            ],
            angle: 0.57072,
            coverage: 0.5502,
            action: [
              282.75,
              266.542
            ]
          },
          {
            t: 0.5493,
            agent: [
              282.714,
              266.481
            ],
            block: [
              226.889,
              248.442
            ],
            angle: 0.57108,
            coverage: 0.5499,
            action: [
              282.75,
              266.542
            ]
          },
          {
            t: 0.5634,
            agent: [
              282.733,
              266.513
            ],
            block: [
              226.891,
              248.453
            ],
            angle: 0.57124,
            coverage: 0.5497,
            action: [
              282.75,
              266.542
            ]
          },
          {
            t: 0.5775,
            agent: [
              282.742,
              266.528
            ],
            block: [
              226.892,
              248.458
            ],
            angle: 0.57131,
            coverage: 0.5496,
            action: [
              282.75,
              266.542
            ]
          },
          {
            t: 0.5915,
            agent: [
              282.746,
              266.535
            ],
            block: [
              226.892,
              248.46
            ],
            angle: 0.57135,
            coverage: 0.5496,
            action: [
              282.75,
              266.542
            ]
          },
          {
            t: 0.6056,
            agent: [
              248.42,
              241.423
            ],
            block: [
              226.892,
              248.46
            ],
            angle: 0.57135,
            coverage: 0.5496,
            action: [
              166.648,
              181.597
            ]
          },
          {
            t: 0.6197,
            agent: [
              211.241,
              214.222
            ],
            block: [
              226.892,
              248.46
            ],
            angle: 0.57135,
            coverage: 0.5496,
            action: [
              166.648,
              181.597
            ]
          },
          {
            t: 0.6338,
            agent: [
              188.983,
              197.938
            ],
            block: [
              226.892,
              248.46
            ],
            angle: 0.57135,
            coverage: 0.5496,
            action: [
              166.648,
              181.597
            ]
          },
          {
            t: 0.6479,
            agent: [
              177.445,
              189.497
            ],
            block: [
              226.892,
              248.46
            ],
            angle: 0.57135,
            coverage: 0.5496,
            action: [
              166.648,
              181.597
            ]
          },
          {
            t: 0.662,
            agent: [
              171.784,
              185.355
            ],
            block: [
              226.892,
              248.46
            ],
            angle: 0.57135,
            coverage: 0.5496,
            action: [
              166.648,
              181.597
            ]
          },
          {
            t: 0.6761,
            agent: [
              167.801,
              195.129
            ],
            block: [
              226.892,
              248.46
            ],
            angle: 0.57135,
            coverage: 0.5496,
            action: [
              162.348,
              221.366
            ]
          },
          {
            t: 0.6901,
            agent: [
              165.14,
              206.925
            ],
            block: [
              227.337,
              248.821
            ],
            angle: 0.5757,
            coverage: 0.554,
            action: [
              162.348,
              221.366
            ]
          },
          {
            t: 0.7042,
            agent: [
              159.261,
              255.261
            ],
            block: [
              240.575,
              257.992
            ],
            angle: 0.68263,
            coverage: 0.7161,
            action: [
              147.3,
              360.554
            ]
          },
          {
            t: 0.7183,
            agent: [
              153.731,
              303.579
            ],
            block: [
              240.575,
              257.992
            ],
            angle: 0.68263,
            coverage: 0.7161,
            action: [
              147.3,
              360.554
            ]
          },
          {
            t: 0.7324,
            agent: [
              150.503,
              332.104
            ],
            block: [
              240.701,
              258.112
            ],
            angle: 0.63206,
            coverage: 0.7189,
            action: [
              147.3,
              360.554
            ]
          },
          {
            t: 0.7465,
            agent: [
              148.844,
              346.82
            ],
            block: [
              240.577,
              257.956
            ],
            angle: 0.56961,
            coverage: 0.6934,
            action: [
              147.3,
              360.554
            ]
          },
          {
            t: 0.7606,
            agent: [
              148.033,
              354.026
            ],
            block: [
              240.591,
              257.924
            ],
            angle: 0.56713,
            coverage: 0.6924,
            action: [
              147.3,
              360.554
            ]
          },
          {
            t: 0.7746,
            agent: [
              147.646,
              357.474
            ],
            block: [
              240.591,
              257.924
            ],
            angle: 0.56713,
            coverage: 0.6924,
            action: [
              147.3,
              360.554
            ]
          },
          {
            t: 0.7887,
            agent: [
              147.462,
              359.106
            ],
            block: [
              240.591,
              257.924
            ],
            angle: 0.56713,
            coverage: 0.6924,
            action: [
              147.3,
              360.554
            ]
          },
          {
            t: 0.8028,
            agent: [
              147.376,
              359.874
            ],
            block: [
              240.591,
              257.924
            ],
            angle: 0.56713,
            coverage: 0.6924,
            action: [
              147.3,
              360.554
            ]
          },
          {
            t: 0.8169,
            agent: [
              147.336,
              360.235
            ],
            block: [
              240.591,
              257.924
            ],
            angle: 0.56713,
            coverage: 0.6924,
            action: [
              147.3,
              360.554
            ]
          },
          {
            t: 0.831,
            agent: [
              147.316,
              360.405
            ],
            block: [
              240.591,
              257.924
            ],
            angle: 0.56713,
            coverage: 0.6924,
            action: [
              147.3,
              360.554
            ]
          },
          {
            t: 0.8451,
            agent: [
              147.308,
              360.484
            ],
            block: [
              240.591,
              257.924
            ],
            angle: 0.56713,
            coverage: 0.6924,
            action: [
              147.3,
              360.554
            ]
          },
          {
            t: 0.8592,
            agent: [
              147.303,
              360.522
            ],
            block: [
              240.591,
              257.924
            ],
            angle: 0.56713,
            coverage: 0.6924,
            action: [
              147.3,
              360.554
            ]
          },
          {
            t: 0.8732,
            agent: [
              147.301,
              360.539
            ],
            block: [
              240.591,
              257.924
            ],
            angle: 0.56713,
            coverage: 0.6924,
            action: [
              147.3,
              360.554
            ]
          },
          {
            t: 0.8873,
            agent: [
              147.3,
              360.547
            ],
            block: [
              240.591,
              257.924
            ],
            angle: 0.56713,
            coverage: 0.6924,
            action: [
              147.3,
              360.554
            ]
          },
          {
            t: 0.9014,
            agent: [
              142.742,
              340.832
            ],
            block: [
              240.591,
              257.924
            ],
            angle: 0.56713,
            coverage: 0.6924,
            action: [
              131.884,
              293.86
            ]
          },
          {
            t: 0.9155,
            agent: [
              137.805,
              319.475
            ],
            block: [
              240.591,
              257.924
            ],
            angle: 0.56713,
            coverage: 0.6924,
            action: [
              131.884,
              293.86
            ]
          },
          {
            t: 0.9296,
            agent: [
              134.85,
              306.69
            ],
            block: [
              240.591,
              257.924
            ],
            angle: 0.56713,
            coverage: 0.6924,
            action: [
              131.884,
              293.86
            ]
          },
          {
            t: 0.9437,
            agent: [
              133.318,
              300.062
            ],
            block: [
              240.591,
              257.924
            ],
            angle: 0.56713,
            coverage: 0.6924,
            action: [
              131.884,
              293.86
            ]
          },
          {
            t: 0.9577,
            agent: [
              132.566,
              296.81
            ],
            block: [
              240.591,
              257.924
            ],
            angle: 0.56713,
            coverage: 0.6924,
            action: [
              131.884,
              293.86
            ]
          },
          {
            t: 0.9718,
            agent: [
              140.482,
              286.804
            ],
            block: [
              240.591,
              257.924
            ],
            angle: 0.56713,
            coverage: 0.6924,
            action: [
              159.873,
              265.284
            ]
          },
          {
            t: 0.9859,
            agent: [
              149.274,
              276.915
            ],
            block: [
              240.591,
              257.924
            ],
            angle: 0.56713,
            coverage: 0.6924,
            action: [
              159.873,
              265.284
            ]
          },
          {
            t: 1,
            agent: [
              183.524,
              241.516
            ],
            block: [
              255.869,
              256.516
            ],
            angle: 0.78716,
            coverage: 0.9881,
            action: [
              257.834,
              165.266
            ]
          }
        ]
      },
      claude: {
        agentId: "claude",
        label: "Claude Code",
        policy: "cem_lite",
        color: "#df785d",
        steps: 80,
        finalCoverage: 0.0,
        frames: [
          {
            t: 0.0,
            agent: [
              269.0,
              411.0
            ],
            block: [
              286.8,
              144.001
            ],
            angle: 1.0853,
            coverage: 0.0,
            action: [
              255.285,
              266.865
            ]
          },
          {
            t: 0.0125,
            agent: [
              264.945,
              368.383
            ],
            block: [
              286.8,
              144.001
            ],
            angle: 1.0853,
            coverage: 0.0,
            action: [
              322.175,
              240.836
            ]
          },
          {
            t: 0.025,
            agent: [
              280.33,
              314.53
            ],
            block: [
              286.8,
              144.001
            ],
            angle: 1.0853,
            coverage: 0.0,
            action: [
              293.018,
              84.303
            ]
          },
          {
            t: 0.0375,
            agent: [
              290.501,
              232.28
            ],
            block: [
              286.8,
              144.001
            ],
            angle: 1.0853,
            coverage: 0.0,
            action: [
              386.866,
              124.526
            ]
          },
          {
            t: 0.05,
            agent: [
              320.372,
              174.73
            ],
            block: [
              272.31,
              117.057
            ],
            angle: 0.88718,
            coverage: 0.0,
            action: [
              304.386,
              177.565
            ]
          },
          {
            t: 0.0625,
            agent: [
              326.428,
              163.669
            ],
            block: [
              272.31,
              117.057
            ],
            angle: 0.88718,
            coverage: 0.0,
            action: [
              211.308,
              0.0
            ]
          },
          {
            t: 0.075,
            agent: [
              290.529,
              115.672
            ],
            block: [
              270.942,
              118.238
            ],
            angle: 0.9092,
            coverage: 0.0,
            action: [
              249.883,
              135.279
            ]
          },
          {
            t: 0.0875,
            agent: [
              265.631,
              103.138
            ],
            block: [
              263.343,
              122.394
            ],
            angle: 0.87596,
            coverage: 0.0,
            action: [
              220.806,
              115.978
            ]
          },
          {
            t: 0.1,
            agent: [
              247.91,
              109.25
            ],
            block: [
              248.573,
              130.839
            ],
            angle: 0.79723,
            coverage: 0.0,
            action: [
              231.745,
              138.768
            ]
          },
          {
            t: 0.1125,
            agent: [
              238.14,
              119.4
            ],
            block: [
              237.01,
              138.528
            ],
            angle: 0.7304,
            coverage: 0.0,
            action: [
              109.307,
              119.342
            ]
          },
          {
            t: 0.125,
            agent: [
              198.27,
              122.679
            ],
            block: [
              217.901,
              151.652
            ],
            angle: 0.58126,
            coverage: 0.0,
            action: [
              83.419,
              74.54
            ]
          },
          {
            t: 0.1375,
            agent: [
              149.896,
              108.418
            ],
            block: [
              210.582,
              155.623
            ],
            angle: 0.48807,
            coverage: 0.0,
            action: [
              194.51,
              151.814
            ]
          },
          {
            t: 0.15,
            agent: [
              150.319,
              115.858
            ],
            block: [
              210.582,
              155.623
            ],
            angle: 0.48807,
            coverage: 0.0,
            action: [
              115.807,
              150.937
            ]
          },
          {
            t: 0.1625,
            agent: [
              145.195,
              131.125
            ],
            block: [
              215.918,
              161.761
            ],
            angle: 0.52239,
            coverage: 0.0,
            action: [
              205.887,
              141.602
            ]
          },
          {
            t: 0.175,
            agent: [
              159.242,
              138.119
            ],
            block: [
              227.81,
              169.361
            ],
            angle: 0.62373,
            coverage: 0.0152,
            action: [
              187.484,
              69.229
            ]
          },
          {
            t: 0.1875,
            agent: [
              174.415,
              118.898
            ],
            block: [
              231.709,
              172.242
            ],
            angle: 0.65801,
            coverage: 0.0287,
            action: [
              156.939,
              124.435
            ]
          },
          {
            t: 0.2,
            agent: [
              172.366,
              112.813
            ],
            block: [
              231.709,
              172.242
            ],
            angle: 0.65801,
            coverage: 0.0287,
            action: [
              162.803,
              113.829
            ]
          },
          {
            t: 0.2125,
            agent: [
              167.561,
              113.784
            ],
            block: [
              231.709,
              172.242
            ],
            angle: 0.65801,
            coverage: 0.0287,
            action: [
              196.741,
              39.175
            ]
          },
          {
            t: 0.225,
            agent: [
              175.13,
              91.834
            ],
            block: [
              231.709,
              172.242
            ],
            angle: 0.65801,
            coverage: 0.0287,
            action: [
              184.197,
              222.049
            ]
          },
          {
            t: 0.2375,
            agent: [
              181.086,
              121.979
            ],
            block: [
              231.709,
              172.242
            ],
            angle: 0.65801,
            coverage: 0.0287,
            action: [
              233.136,
              147.398
            ]
          },
          {
            t: 0.25,
            agent: [
              197.47,
              144.132
            ],
            block: [
              230.862,
              185.466
            ],
            angle: 0.59229,
            coverage: 0.0802,
            action: [
              174.351,
              185.947
            ]
          },
          {
            t: 0.2625,
            agent: [
              196.457,
              159.246
            ],
            block: [
              223.143,
              189.334
            ],
            angle: 0.49034,
            coverage: 0.0816,
            action: [
              159.769,
              168.253
            ]
          },
          {
            t: 0.275,
            agent: [
              182.982,
              166.574
            ],
            block: [
              215.198,
              194.98
            ],
            angle: 0.38474,
            coverage: 0.0948,
            action: [
              51.75,
              176.417
            ]
          },
          {
            t: 0.2875,
            agent: [
              140.089,
              170.462
            ],
            block: [
              207.723,
              200.167
            ],
            angle: 0.26421,
            coverage: 0.1419,
            action: [
              148.73,
              165.34
            ]
          },
          {
            t: 0.3,
            agent: [
              127.974,
              170.044
            ],
            block: [
              207.723,
              200.167
            ],
            angle: 0.26421,
            coverage: 0.1419,
            action: [
              125.293,
              163.262
            ]
          },
          {
            t: 0.3125,
            agent: [
              128.245,
              167.458
            ],
            block: [
              207.723,
              200.167
            ],
            angle: 0.26421,
            coverage: 0.1419,
            action: [
              186.522,
              248.577
            ]
          },
          {
            t: 0.325,
            agent: [
              145.169,
              190.687
            ],
            block: [
              219.614,
              204.26
            ],
            angle: 0.36588,
            coverage: 0.195,
            action: [
              133.809,
              215.262
            ]
          },
          {
            t: 0.3375,
            agent: [
              148.338,
              207.043
            ],
            block: [
              230.286,
              208.742
            ],
            angle: 0.43591,
            coverage: 0.2566,
            action: [
              121.99,
              204.858
            ]
          },
          {
            t: 0.35,
            agent: [
              139.233,
              209.089
            ],
            block: [
              230.286,
              208.742
            ],
            angle: 0.43591,
            coverage: 0.2566,
            action: [
              101.428,
              4.484
            ]
          },
          {
            t: 0.3625,
            agent: [
              125.113,
              148.331
            ],
            block: [
              230.286,
              208.742
            ],
            angle: 0.43591,
            coverage: 0.2566,
            action: [
              183.417,
              61.26
            ]
          },
          {
            t: 0.375,
            agent: [
              138.138,
              99.675
            ],
            block: [
              230.286,
              208.742
            ],
            angle: 0.43591,
            coverage: 0.2566,
            action: [
              112.909,
              77.254
            ]
          },
          {
            t: 0.3875,
            agent: [
              137.235,
              83.445
            ],
            block: [
              230.286,
              208.742
            ],
            angle: 0.43591,
            coverage: 0.2566,
            action: [
              71.128,
              192.963
            ]
          },
          {
            t: 0.4,
            agent: [
              114.821,
              113.378
            ],
            block: [
              230.286,
              208.742
            ],
            angle: 0.43591,
            coverage: 0.2566,
            action: [
              144.683,
              144.752
            ]
          },
          {
            t: 0.4125,
            agent: [
              116.266,
              134.935
            ],
            block: [
              230.286,
              208.742
            ],
            angle: 0.43591,
            coverage: 0.2566,
            action: [
              36.752,
              107.593
            ]
          },
          {
            t: 0.425,
            agent: [
              96.148,
              130.284
            ],
            block: [
              230.286,
              208.742
            ],
            angle: 0.43591,
            coverage: 0.2566,
            action: [
              245.241,
              163.434
            ]
          },
          {
            t: 0.4375,
            agent: [
              131.304,
              137.001
            ],
            block: [
              230.286,
              208.742
            ],
            angle: 0.43591,
            coverage: 0.2566,
            action: [
              55.573,
              260.403
            ]
          },
          {
            t: 0.45,
            agent: [
              125.668,
              177.22
            ],
            block: [
              230.286,
              208.742
            ],
            angle: 0.43591,
            coverage: 0.2566,
            action: [
              77.364,
              175.374
            ]
          },
          {
            t: 0.4625,
            agent: [
              102.795,
              190.47
            ],
            block: [
              230.286,
              208.742
            ],
            angle: 0.43591,
            coverage: 0.2566,
            action: [
              61.53,
              277.05
            ]
          },
          {
            t: 0.475,
            agent: [
              85.241,
              215.772
            ],
            block: [
              230.286,
              208.742
            ],
            angle: 0.43591,
            coverage: 0.2566,
            action: [
              186.23,
              101.85
            ]
          },
          {
            t: 0.4875,
            agent: [
              110.514,
              191.787
            ],
            block: [
              230.286,
              208.742
            ],
            angle: 0.43591,
            coverage: 0.2566,
            action: [
              182.786,
              123.566
            ]
          },
          {
            t: 0.5,
            agent: [
              143.223,
              158.794
            ],
            block: [
              230.286,
              208.742
            ],
            angle: 0.43591,
            coverage: 0.2566,
            action: [
              151.288,
              117.74
            ]
          },
          {
            t: 0.5125,
            agent: [
              153.627,
              139.1
            ],
            block: [
              230.286,
              208.742
            ],
            angle: 0.43591,
            coverage: 0.2566,
            action: [
              184.827,
              182.008
            ]
          },
          {
            t: 0.525,
            agent: [
              163.703,
              147.238
            ],
            block: [
              230.286,
              208.742
            ],
            angle: 0.43591,
            coverage: 0.2566,
            action: [
              183.742,
              266.371
            ]
          },
          {
            t: 0.5375,
            agent: [
              173.116,
              187.298
            ],
            block: [
              238.83,
              219.033
            ],
            angle: 0.47685,
            coverage: 0.4217,
            action: [
              254.061,
              267.184
            ]
          },
          {
            t: 0.55,
            agent: [
              199.271,
              224.228
            ],
            block: [
              277.119,
              243.618
            ],
            angle: 0.77035,
            coverage: 0.4645,
            action: [
              335.126,
              225.616
            ]
          },
          {
            t: 0.5625,
            agent: [
              248.49,
              233.497
            ],
            block: [
              302.364,
              244.767
            ],
            angle: 1.08794,
            coverage: 0.3367,
            action: [
              196.823,
              260.671
            ]
          },
          {
            t: 0.575,
            agent: [
              248.369,
              241.629
            ],
            block: [
              310.313,
              247.108
            ],
            angle: 1.1565,
            coverage: 0.3143,
            action: [
              246.625,
              379.722
            ]
          },
          {
            t: 0.5875,
            agent: [
              241.968,
              285.502
            ],
            block: [
              319.213,
              264.286
            ],
            angle: 0.95462,
            coverage: 0.1449,
            action: [
              271.296,
              310.452
            ]
          },
          {
            t: 0.6,
            agent: [
              250.483,
              308.324
            ],
            block: [
              325.05,
              271.405
            ],
            angle: 0.75759,
            coverage: 0.0658,
            action: [
              268.232,
              404.478
            ]
          },
          {
            t: 0.6125,
            agent: [
              259.016,
              339.447
            ],
            block: [
              330.834,
              276.168
            ],
            angle: 0.54342,
            coverage: 0.008,
            action: [
              293.618,
              230.545
            ]
          },
          {
            t: 0.625,
            agent: [
              271.213,
              317.998
            ],
            block: [
              331.607,
              276.64
            ],
            angle: 0.49848,
            coverage: 0.0139,
            action: [
              184.895,
              432.229
            ]
          },
          {
            t: 0.6375,
            agent: [
              249.553,
              339.507
            ],
            block: [
              331.607,
              276.64
            ],
            angle: 0.49848,
            coverage: 0.0139,
            action: [
              182.468,
              410.569
            ]
          },
          {
            t: 0.65,
            agent: [
              220.026,
              373.391
            ],
            block: [
              331.607,
              276.64
            ],
            angle: 0.49848,
            coverage: 0.0139,
            action: [
              227.961,
              344.543
            ]
          },
          {
            t: 0.6625,
            agent: [
              214.923,
              372.735
            ],
            block: [
              331.607,
              276.64
            ],
            angle: 0.49848,
            coverage: 0.0139,
            action: [
              230.718,
              421.478
            ]
          },
          {
            t: 0.675,
            agent: [
              220.53,
              383.865
            ],
            block: [
              331.607,
              276.64
            ],
            angle: 0.49848,
            coverage: 0.0139,
            action: [
              294.083,
              353.366
            ]
          },
          {
            t: 0.6875,
            agent: [
              244.041,
              380.327
            ],
            block: [
              331.607,
              276.64
            ],
            angle: 0.49848,
            coverage: 0.0139,
            action: [
              420.242,
              433.493
            ]
          },
          {
            t: 0.7,
            agent: [
              304.364,
              392.595
            ],
            block: [
              339.638,
              260.885
            ],
            angle: 0.2017,
            coverage: 0.001,
            action: [
              491.924,
              276.414
            ]
          },
          {
            t: 0.7125,
            agent: [
              379.499,
              364.22
            ],
            block: [
              339.926,
              253.622
            ],
            angle: 0.18802,
            coverage: 0.0,
            action: [
              487.726,
              302.796
            ]
          },
          {
            t: 0.725,
            agent: [
              432.374,
              333.008
            ],
            block: [
              339.926,
              253.622
            ],
            angle: 0.18802,
            coverage: 0.0,
            action: [
              482.542,
              438.573
            ]
          },
          {
            t: 0.7375,
            agent: [
              459.191,
              357.428
            ],
            block: [
              339.926,
              253.622
            ],
            angle: 0.18802,
            coverage: 0.0,
            action: [
              417.062,
              214.12
            ]
          },
          {
            t: 0.75,
            agent: [
              452.274,
              326.922
            ],
            block: [
              339.926,
              253.622
            ],
            angle: 0.18802,
            coverage: 0.0,
            action: [
              362.676,
              398.802
            ]
          },
          {
            t: 0.7625,
            agent: [
              421.028,
              332.048
            ],
            block: [
              339.926,
              253.622
            ],
            angle: 0.18802,
            coverage: 0.0,
            action: [
              307.016,
              216.84
            ]
          },
          {
            t: 0.775,
            agent: [
              377.315,
              306.14
            ],
            block: [
              339.926,
              253.622
            ],
            angle: 0.18802,
            coverage: 0.0,
            action: [
              133.78,
              282.743
            ]
          },
          {
            t: 0.7875,
            agent: [
              292.606,
              286.266
            ],
            block: [
              271.777,
              238.629
            ],
            angle: 0.10735,
            coverage: 0.3563,
            action: [
              341.798,
              512.0
            ]
          },
          {
            t: 0.8,
            agent: [
              279.961,
              350.474
            ],
            block: [
              253.116,
              236.593
            ],
            angle: 0.12998,
            coverage: 0.3679,
            action: [
              276.328,
              308.582
            ]
          },
          {
            t: 0.8125,
            agent: [
              284.574,
              363.384
            ],
            block: [
              253.116,
              236.593
            ],
            angle: 0.12998,
            coverage: 0.3679,
            action: [
              184.862,
              268.477
            ]
          },
          {
            t: 0.825,
            agent: [
              254.648,
              330.465
            ],
            block: [
              251.669,
              236.443
            ],
            angle: 0.25234,
            coverage: 0.4178,
            action: [
              106.981,
              412.644
            ]
          },
          {
            t: 0.8375,
            agent: [
              199.823,
              344.166
            ],
            block: [
              245.313,
              234.268
            ],
            angle: 0.64405,
            coverage: 0.6008,
            action: [
              184.209,
              366.043
            ]
          },
          {
            t: 0.85,
            agent: [
              178.743,
              359.907
            ],
            block: [
              245.382,
              234.281
            ],
            angle: 0.67061,
            coverage: 0.5767,
            action: [
              272.8,
              341.681
            ]
          },
          {
            t: 0.8625,
            agent: [
              204.912,
              356.907
            ],
            block: [
              245.382,
              234.281
            ],
            angle: 0.67061,
            coverage: 0.5767,
            action: [
              107.93,
              272.857
            ]
          },
          {
            t: 0.875,
            agent: [
              186.781,
              329.999
            ],
            block: [
              245.251,
              234.322
            ],
            angle: 0.79726,
            coverage: 0.4616,
            action: [
              245.481,
              304.258
            ]
          },
          {
            t: 0.8875,
            agent: [
              193.207,
              312.989
            ],
            block: [
              244.879,
              234.023
            ],
            angle: 0.91908,
            coverage: 0.3981,
            action: [
              251.8,
              162.286
            ]
          },
          {
            t: 0.9,
            agent: [
              217.177,
              265.609
            ],
            block: [
              238.396,
              217.178
            ],
            angle: 0.97349,
            coverage: 0.2974,
            action: [
              187.111,
              170.962
            ]
          },
          {
            t: 0.9125,
            agent: [
              214.805,
              220.766
            ],
            block: [
              224.941,
              168.293
            ],
            angle: 0.75895,
            coverage: 0.0,
            action: [
              232.137,
              50.716
            ]
          },
          {
            t: 0.925,
            agent: [
              216.52,
              159.998
            ],
            block: [
              205.019,
              110.127
            ],
            angle: 0.38124,
            coverage: 0.0,
            action: [
              164.408,
              309.132
            ]
          },
          {
            t: 0.9375,
            agent: [
              203.075,
              185.118
            ],
            block: [
              199.642,
              102.065
            ],
            angle: 0.32858,
            coverage: 0.0,
            action: [
              0.0,
              115.087
            ]
          },
          {
            t: 0.95,
            agent: [
              137.183,
              181.237
            ],
            block: [
              190.257,
              97.471
            ],
            angle: 0.82104,
            coverage: 0.0,
            action: [
              101.752,
              239.66
            ]
          },
          {
            t: 0.9625,
            agent: [
              104.003,
              190.558
            ],
            block: [
              188.878,
              96.142
            ],
            angle: 0.99537,
            coverage: 0.0,
            action: [
              3.78,
              59.826
            ]
          },
          {
            t: 0.975,
            agent: [
              70.551,
              158.499
            ],
            block: [
              191.687,
              93.972
            ],
            angle: 1.05603,
            coverage: 0.0,
            action: [
              22.229,
              207.764
            ]
          },
          {
            t: 0.9875,
            agent: [
              45.065,
              158.381
            ],
            block: [
              191.687,
              93.972
            ],
            angle: 1.05603,
            coverage: 0.0,
            action: [
              156.215,
              78.197
            ]
          },
          {
            t: 1.0,
            agent: [
              72.591,
              140.286
            ],
            block: [
              196.336,
              92.422
            ],
            angle: 1.05147,
            coverage: 0.0
          }
        ]
      },
      kimi: {
        agentId: "kimi",
        label: "Kimi Code",
        policy: "trajectory_lookup",
        color: "#111111",
        steps: 37,
        finalCoverage: 0.9573,
        frames: [
          {
            t: 0.0,
            agent: [
              269.0,
              411.0
            ],
            block: [
              286.8,
              144.001
            ],
            angle: 1.0853,
            coverage: 0.0,
            action: [
              28.761,
              43.991
            ]
          },
          {
            t: 0.027,
            agent: [
              197.968,
              302.486
            ],
            block: [
              286.8,
              144.001
            ],
            angle: 1.0853,
            coverage: 0.0,
            action: [
              28.761,
              43.991
            ]
          },
          {
            t: 0.0541,
            agent: [
              121.034,
              184.955
            ],
            block: [
              286.8,
              144.001
            ],
            angle: 1.0853,
            coverage: 0.0,
            action: [
              28.761,
              43.991
            ]
          },
          {
            t: 0.0811,
            agent: [
              74.979,
              114.596
            ],
            block: [
              286.8,
              144.001
            ],
            angle: 1.0853,
            coverage: 0.0,
            action: [
              28.761,
              43.991
            ]
          },
          {
            t: 0.1081,
            agent: [
              51.103,
              78.122
            ],
            block: [
              286.8,
              144.001
            ],
            angle: 1.0853,
            coverage: 0.0,
            action: [
              28.761,
              43.991
            ]
          },
          {
            t: 0.1351,
            agent: [
              39.388,
              60.225
            ],
            block: [
              286.8,
              144.001
            ],
            angle: 1.0853,
            coverage: 0.0,
            action: [
              266.187,
              192.582
            ]
          },
          {
            t: 0.1622,
            agent: [
              103.978,
              95.588
            ],
            block: [
              286.8,
              144.001
            ],
            angle: 1.0853,
            coverage: 0.0,
            action: [
              266.187,
              192.582
            ]
          },
          {
            t: 0.1892,
            agent: [
              177.353,
              139.114
            ],
            block: [
              286.8,
              144.001
            ],
            angle: 1.0853,
            coverage: 0.0,
            action: [
              266.187,
              192.582
            ]
          },
          {
            t: 0.2162,
            agent: [
              221.618,
              165.688
            ],
            block: [
              290.757,
              150.763
            ],
            angle: 0.96303,
            coverage: 0.0194,
            action: [
              266.187,
              192.582
            ]
          },
          {
            t: 0.2432,
            agent: [
              244.626,
              179.557
            ],
            block: [
              303.537,
              166.83
            ],
            angle: 0.84264,
            coverage: 0.1104,
            action: [
              266.187,
              192.582
            ]
          },
          {
            t: 0.2703,
            agent: [
              255.928,
              186.381
            ],
            block: [
              311.174,
              175.203
            ],
            angle: 0.82069,
            coverage: 0.1133,
            action: [
              253.348,
              212.348
            ]
          },
          {
            t: 0.2973,
            agent: [
              257.547,
              195.498
            ],
            block: [
              316.349,
              180.71
            ],
            angle: 0.80889,
            coverage: 0.1146,
            action: [
              253.348,
              212.348
            ]
          },
          {
            t: 0.3243,
            agent: [
              256.001,
              203.379
            ],
            block: [
              318.87,
              183.323
            ],
            angle: 0.79402,
            coverage: 0.115,
            action: [
              253.348,
              212.348
            ]
          },
          {
            t: 0.3514,
            agent: [
              254.748,
              207.899
            ],
            block: [
              320.128,
              184.59
            ],
            angle: 0.78199,
            coverage: 0.115,
            action: [
              253.348,
              212.348
            ]
          },
          {
            t: 0.3784,
            agent: [
              254.04,
              210.207
            ],
            block: [
              320.627,
              185.084
            ],
            angle: 0.77602,
            coverage: 0.115,
            action: [
              253.348,
              212.348
            ]
          },
          {
            t: 0.4054,
            agent: [
              253.681,
              211.332
            ],
            block: [
              320.879,
              185.33
            ],
            angle: 0.77266,
            coverage: 0.115,
            action: [
              105.032,
              60.595
            ]
          },
          {
            t: 0.4324,
            agent: [
              209.653,
              167.0
            ],
            block: [
              320.895,
              185.346
            ],
            angle: 0.77244,
            coverage: 0.115,
            action: [
              105.032,
              60.595
            ]
          },
          {
            t: 0.4595,
            agent: [
              162.073,
              118.656
            ],
            block: [
              320.895,
              185.346
            ],
            angle: 0.77244,
            coverage: 0.115,
            action: [
              105.032,
              60.595
            ]
          },
          {
            t: 0.4865,
            agent: [
              133.6,
              89.684
            ],
            block: [
              320.895,
              185.346
            ],
            angle: 0.77244,
            coverage: 0.115,
            action: [
              105.032,
              60.595
            ]
          },
          {
            t: 0.5135,
            agent: [
              118.841,
              74.658
            ],
            block: [
              320.895,
              185.346
            ],
            angle: 0.77244,
            coverage: 0.115,
            action: [
              105.032,
              60.595
            ]
          },
          {
            t: 0.5405,
            agent: [
              111.6,
              67.284
            ],
            block: [
              320.895,
              185.346
            ],
            angle: 0.77244,
            coverage: 0.115,
            action: [
              396.292,
              182.274
            ]
          },
          {
            t: 0.5676,
            agent: [
              194.25,
              99.73
            ],
            block: [
              320.895,
              185.346
            ],
            angle: 0.77244,
            coverage: 0.115,
            action: [
              396.292,
              182.274
            ]
          },
          {
            t: 0.5946,
            agent: [
              285.88,
              137.024
            ],
            block: [
              325.387,
              191.932
            ],
            angle: 0.82426,
            coverage: 0.1217,
            action: [
              396.292,
              182.274
            ]
          },
          {
            t: 0.6216,
            agent: [
              340.943,
              159.563
            ],
            block: [
              324.729,
              193.766
            ],
            angle: 0.81171,
            coverage: 0.1303,
            action: [
              396.292,
              182.274
            ]
          },
          {
            t: 0.6486,
            agent: [
              369.526,
              171.285
            ],
            block: [
              324.729,
              193.766
            ],
            angle: 0.81171,
            coverage: 0.1303,
            action: [
              396.292,
              182.274
            ]
          },
          {
            t: 0.6757,
            agent: [
              383.558,
              177.045
            ],
            block: [
              324.729,
              193.766
            ],
            angle: 0.81171,
            coverage: 0.1303,
            action: [
              258.648,
              235.932
            ]
          },
          {
            t: 0.7027,
            agent: [
              349.583,
              195.67
            ],
            block: [
              324.729,
              193.766
            ],
            angle: 0.81171,
            coverage: 0.1303,
            action: [
              258.648,
              235.932
            ]
          },
          {
            t: 0.7297,
            agent: [
              308.689,
              214.161
            ],
            block: [
              297.332,
              222.683
            ],
            angle: 0.91655,
            coverage: 0.2754,
            action: [
              258.648,
              235.932
            ]
          },
          {
            t: 0.7568,
            agent: [
              283.801,
              225.064
            ],
            block: [
              276.403,
              237.7
            ],
            angle: 0.89528,
            coverage: 0.4078,
            action: [
              258.648,
              235.932
            ]
          },
          {
            t: 0.7838,
            agent: [
              270.826,
              230.686
            ],
            block: [
              264.19,
              245.982
            ],
            angle: 0.86504,
            coverage: 0.6541,
            action: [
              258.648,
              235.932
            ]
          },
          {
            t: 0.8108,
            agent: [
              264.445,
              233.438
            ],
            block: [
              258.938,
              249.533
            ],
            angle: 0.8484,
            coverage: 0.7643,
            action: [
              168.093,
              159.862
            ]
          },
          {
            t: 0.8378,
            agent: [
              234.611,
              212.263
            ],
            block: [
              252.809,
              252.399
            ],
            angle: 0.80404,
            coverage: 0.8775,
            action: [
              168.093,
              159.862
            ]
          },
          {
            t: 0.8649,
            agent: [
              204.162,
              188.526
            ],
            block: [
              250.783,
              252.707
            ],
            angle: 0.77737,
            coverage: 0.8713,
            action: [
              168.093,
              159.862
            ]
          },
          {
            t: 0.8919,
            agent: [
              186.118,
              174.237
            ],
            block: [
              250.783,
              252.707
            ],
            angle: 0.77737,
            coverage: 0.8713,
            action: [
              168.093,
              159.862
            ]
          },
          {
            t: 0.9189,
            agent: [
              176.798,
              166.815
            ],
            block: [
              250.783,
              252.707
            ],
            angle: 0.77737,
            coverage: 0.8713,
            action: [
              168.093,
              159.862
            ]
          },
          {
            t: 0.9459,
            agent: [
              172.231,
              163.17
            ],
            block: [
              250.783,
              252.707
            ],
            angle: 0.77737,
            coverage: 0.8713,
            action: [
              184.819,
              287.69
            ]
          },
          {
            t: 0.973,
            agent: [
              174.991,
              199.219
            ],
            block: [
              250.783,
              252.707
            ],
            angle: 0.77737,
            coverage: 0.8713,
            action: [
              184.819,
              287.69
            ]
          },
          {
            t: 1.0,
            agent: [
              179.313,
              239.327
            ],
            block: [
              256.468,
              257.436
            ],
            angle: 0.81963,
            coverage: 0.9573
          }
        ]
      }
    }
  },
  {
    id: "seed-48",
    label: "Init 5",
    seed: 48,
    strategy: "Same initial state across Codex, Claude Code, and Kimi rollouts.",
    rollouts: {
      codex: {
        agentId: "codex",
        label: "Codex",
        policy: "beam_guarded",
        color: "#747fff",
        steps: 45,
        finalCoverage: 0.9839,
        frames: [
          {
            t: 0,
            agent: [
              102,
              205
            ],
            block: [
              252.897,
              278.169
            ],
            angle: 0.08671,
            coverage: 0
          },
          {
            t: 0.0222,
            agent: [
              125.715,
              251.504
            ],
            block: [
              252.897,
              278.169
            ],
            angle: 0.08671,
            coverage: 0.3606,
            action: [
              182.208,
              362.281
            ]
          },
          {
            t: 0.0444,
            agent: [
              151.401,
              301.871
            ],
            block: [
              252.897,
              278.169
            ],
            angle: 0.08671,
            coverage: 0.3606,
            action: [
              182.208,
              362.281
            ]
          },
          {
            t: 0.0667,
            agent: [
              166.777,
              332.023
            ],
            block: [
              252.897,
              278.169
            ],
            angle: 0.08671,
            coverage: 0.3606,
            action: [
              182.208,
              362.281
            ]
          },
          {
            t: 0.0889,
            agent: [
              174.749,
              347.654
            ],
            block: [
              252.897,
              278.169
            ],
            angle: 0.08671,
            coverage: 0.3606,
            action: [
              182.208,
              362.281
            ]
          },
          {
            t: 0.1111,
            agent: [
              178.66,
              355.324
            ],
            block: [
              252.897,
              278.169
            ],
            angle: 0.08671,
            coverage: 0.3606,
            action: [
              182.208,
              362.281
            ]
          },
          {
            t: 0.1333,
            agent: [
              182.172,
              347.284
            ],
            block: [
              252.897,
              278.169
            ],
            angle: 0.08671,
            coverage: 0.3606,
            action: [
              187.752,
              322.667
            ]
          },
          {
            t: 0.1556,
            agent: [
              184.835,
              336.338
            ],
            block: [
              252.897,
              278.169
            ],
            angle: 0.08671,
            coverage: 0.3606,
            action: [
              187.752,
              322.667
            ]
          },
          {
            t: 0.1778,
            agent: [
              194.513,
              270.999
            ],
            block: [
              276.891,
              267.373
            ],
            angle: 0.4507,
            coverage: 0.385,
            action: [
              215.475,
              124.598
            ]
          },
          {
            t: 0.2,
            agent: [
              204.138,
              204.018
            ],
            block: [
              276.891,
              267.373
            ],
            angle: 0.4507,
            coverage: 0.385,
            action: [
              215.475,
              124.598
            ]
          },
          {
            t: 0.2222,
            agent: [
              209.815,
              164.296
            ],
            block: [
              276.891,
              267.373
            ],
            angle: 0.4507,
            coverage: 0.385,
            action: [
              215.475,
              124.598
            ]
          },
          {
            t: 0.2444,
            agent: [
              212.743,
              143.77
            ],
            block: [
              276.891,
              267.373
            ],
            angle: 0.4507,
            coverage: 0.385,
            action: [
              215.475,
              124.598
            ]
          },
          {
            t: 0.2667,
            agent: [
              214.176,
              133.713
            ],
            block: [
              276.891,
              267.373
            ],
            angle: 0.4507,
            coverage: 0.385,
            action: [
              215.475,
              124.598
            ]
          },
          {
            t: 0.2889,
            agent: [
              214.862,
              128.9
            ],
            block: [
              276.891,
              267.373
            ],
            angle: 0.4507,
            coverage: 0.385,
            action: [
              215.475,
              124.598
            ]
          },
          {
            t: 0.3111,
            agent: [
              215.187,
              126.621
            ],
            block: [
              276.891,
              267.373
            ],
            angle: 0.4507,
            coverage: 0.385,
            action: [
              215.475,
              124.598
            ]
          },
          {
            t: 0.3333,
            agent: [
              215.34,
              125.548
            ],
            block: [
              276.891,
              267.373
            ],
            angle: 0.4507,
            coverage: 0.385,
            action: [
              215.475,
              124.598
            ]
          },
          {
            t: 0.3556,
            agent: [
              215.411,
              125.043
            ],
            block: [
              276.891,
              267.373
            ],
            angle: 0.4507,
            coverage: 0.385,
            action: [
              215.475,
              124.598
            ]
          },
          {
            t: 0.3778,
            agent: [
              215.445,
              124.807
            ],
            block: [
              276.891,
              267.373
            ],
            angle: 0.4507,
            coverage: 0.385,
            action: [
              215.475,
              124.598
            ]
          },
          {
            t: 0.4,
            agent: [
              215.461,
              124.696
            ],
            block: [
              276.891,
              267.373
            ],
            angle: 0.4507,
            coverage: 0.385,
            action: [
              215.475,
              124.598
            ]
          },
          {
            t: 0.4222,
            agent: [
              215.468,
              124.644
            ],
            block: [
              276.891,
              267.373
            ],
            angle: 0.4507,
            coverage: 0.385,
            action: [
              215.475,
              124.598
            ]
          },
          {
            t: 0.4444,
            agent: [
              215.472,
              124.619
            ],
            block: [
              276.891,
              267.373
            ],
            angle: 0.4507,
            coverage: 0.385,
            action: [
              215.475,
              124.598
            ]
          },
          {
            t: 0.4667,
            agent: [
              215.473,
              124.608
            ],
            block: [
              276.891,
              267.373
            ],
            angle: 0.4507,
            coverage: 0.385,
            action: [
              215.475,
              124.598
            ]
          },
          {
            t: 0.4889,
            agent: [
              262.395,
              176.425
            ],
            block: [
              276.891,
              267.373
            ],
            angle: 0.4507,
            coverage: 0.385,
            action: [
              374.167,
              299.867
            ]
          },
          {
            t: 0.5111,
            agent: [
              313.215,
              232.551
            ],
            block: [
              276.891,
              267.373
            ],
            angle: 0.4507,
            coverage: 0.385,
            action: [
              374.167,
              299.867
            ]
          },
          {
            t: 0.5333,
            agent: [
              343.638,
              266.15
            ],
            block: [
              276.891,
              267.373
            ],
            angle: 0.4507,
            coverage: 0.385,
            action: [
              374.167,
              299.867
            ]
          },
          {
            t: 0.5556,
            agent: [
              359.409,
              283.568
            ],
            block: [
              276.891,
              267.373
            ],
            angle: 0.4507,
            coverage: 0.385,
            action: [
              374.167,
              299.867
            ]
          },
          {
            t: 0.5778,
            agent: [
              367.147,
              292.115
            ],
            block: [
              276.891,
              267.373
            ],
            angle: 0.4507,
            coverage: 0.385,
            action: [
              374.167,
              299.867
            ]
          },
          {
            t: 0.6,
            agent: [
              359.749,
              300.277
            ],
            block: [
              276.891,
              267.373
            ],
            angle: 0.4507,
            coverage: 0.385,
            action: [
              336.61,
              313.631
            ]
          },
          {
            t: 0.6222,
            agent: [
              349.477,
              306.624
            ],
            block: [
              276.891,
              267.373
            ],
            angle: 0.4507,
            coverage: 0.385,
            action: [
              336.61,
              313.631
            ]
          },
          {
            t: 0.6444,
            agent: [
              270.923,
              336.627
            ],
            block: [
              261.052,
              259.33
            ],
            angle: 0.33708,
            coverage: 0.3833,
            action: [
              92.486,
              403.095
            ]
          },
          {
            t: 0.6667,
            agent: [
              189.401,
              367.074
            ],
            block: [
              252.724,
              256.202
            ],
            angle: 0.73679,
            coverage: 0.926,
            action: [
              92.486,
              403.095
            ]
          },
          {
            t: 0.6889,
            agent: [
              140.952,
              385.097
            ],
            block: [
              252.827,
              256.112
            ],
            angle: 0.74538,
            coverage: 0.935,
            action: [
              92.486,
              403.095
            ]
          },
          {
            t: 0.7111,
            agent: [
              115.898,
              394.404
            ],
            block: [
              252.827,
              256.112
            ],
            angle: 0.74538,
            coverage: 0.935,
            action: [
              92.486,
              403.095
            ]
          },
          {
            t: 0.7333,
            agent: [
              103.619,
              398.963
            ],
            block: [
              252.827,
              256.112
            ],
            angle: 0.74538,
            coverage: 0.935,
            action: [
              92.486,
              403.095
            ]
          },
          {
            t: 0.7556,
            agent: [
              97.74,
              401.145
            ],
            block: [
              252.827,
              256.112
            ],
            angle: 0.74538,
            coverage: 0.935,
            action: [
              92.486,
              403.095
            ]
          },
          {
            t: 0.7778,
            agent: [
              94.957,
              402.178
            ],
            block: [
              252.827,
              256.112
            ],
            angle: 0.74538,
            coverage: 0.935,
            action: [
              92.486,
              403.095
            ]
          },
          {
            t: 0.8,
            agent: [
              93.646,
              402.664
            ],
            block: [
              252.827,
              256.112
            ],
            angle: 0.74538,
            coverage: 0.935,
            action: [
              92.486,
              403.095
            ]
          },
          {
            t: 0.8222,
            agent: [
              93.03,
              402.893
            ],
            block: [
              252.827,
              256.112
            ],
            angle: 0.74538,
            coverage: 0.935,
            action: [
              92.486,
              403.095
            ]
          },
          {
            t: 0.8444,
            agent: [
              92.741,
              403
            ],
            block: [
              252.827,
              256.112
            ],
            angle: 0.74538,
            coverage: 0.935,
            action: [
              92.486,
              403.095
            ]
          },
          {
            t: 0.8667,
            agent: [
              92.606,
              403.05
            ],
            block: [
              252.827,
              256.112
            ],
            angle: 0.74538,
            coverage: 0.935,
            action: [
              92.486,
              403.095
            ]
          },
          {
            t: 0.8889,
            agent: [
              92.542,
              403.074
            ],
            block: [
              252.827,
              256.112
            ],
            angle: 0.74538,
            coverage: 0.935,
            action: [
              92.486,
              403.095
            ]
          },
          {
            t: 0.9111,
            agent: [
              92.513,
              403.085
            ],
            block: [
              252.827,
              256.112
            ],
            angle: 0.74538,
            coverage: 0.935,
            action: [
              92.486,
              403.095
            ]
          },
          {
            t: 0.9333,
            agent: [
              92.499,
              403.09
            ],
            block: [
              252.827,
              256.112
            ],
            angle: 0.74538,
            coverage: 0.935,
            action: [
              92.486,
              403.095
            ]
          },
          {
            t: 0.9556,
            agent: [
              127.137,
              347.313
            ],
            block: [
              252.827,
              256.112
            ],
            angle: 0.74538,
            coverage: 0.935,
            action: [
              209.659,
              214.44
            ]
          },
          {
            t: 0.9778,
            agent: [
              164.657,
              286.899
            ],
            block: [
              252.827,
              256.112
            ],
            angle: 0.74538,
            coverage: 0.935,
            action: [
              209.659,
              214.44
            ]
          },
          {
            t: 1,
            agent: [
              187.119,
              250.733
            ],
            block: [
              255.051,
              255.745
            ],
            angle: 0.77618,
            coverage: 0.9839,
            action: [
              209.659,
              214.44
            ]
          }
        ]
      },
      claude: {
        agentId: "claude",
        label: "Claude Code",
        policy: "cem_lite",
        color: "#df785d",
        steps: 80,
        finalCoverage: 0.1266,
        frames: [
          {
            t: 0.0,
            agent: [
              102.0,
              205.0
            ],
            block: [
              252.897,
              278.169
            ],
            angle: 0.08671,
            coverage: 0.0,
            action: [
              194.611,
              276.235
            ]
          },
          {
            t: 0.0125,
            agent: [
              129.383,
              226.062
            ],
            block: [
              252.897,
              278.169
            ],
            angle: 0.08671,
            coverage: 0.3606,
            action: [
              176.814,
              482.146
            ]
          },
          {
            t: 0.025,
            agent: [
              153.778,
              309.756
            ],
            block: [
              252.897,
              278.169
            ],
            angle: 0.08671,
            coverage: 0.3606,
            action: [
              86.16,
              376.205
            ]
          },
          {
            t: 0.0375,
            agent: [
              139.029,
              358.03
            ],
            block: [
              252.897,
              278.169
            ],
            angle: 0.08671,
            coverage: 0.3606,
            action: [
              137.7,
              283.86
            ]
          },
          {
            t: 0.05,
            agent: [
              131.03,
              343.354
            ],
            block: [
              252.897,
              278.169
            ],
            angle: 0.08671,
            coverage: 0.3606,
            action: [
              93.889,
              391.808
            ]
          },
          {
            t: 0.0625,
            agent: [
              119.949,
              349.327
            ],
            block: [
              252.897,
              278.169
            ],
            angle: 0.08671,
            coverage: 0.3606,
            action: [
              215.842,
              285.074
            ]
          },
          {
            t: 0.075,
            agent: [
              144.143,
              335.81
            ],
            block: [
              252.897,
              278.169
            ],
            angle: 0.08671,
            coverage: 0.3606,
            action: [
              89.034,
              256.737
            ]
          },
          {
            t: 0.0875,
            agent: [
              138.615,
              305.199
            ],
            block: [
              252.897,
              278.169
            ],
            angle: 0.08671,
            coverage: 0.3606,
            action: [
              215.415,
              340.407
            ]
          },
          {
            t: 0.1,
            agent: [
              155.081,
              306.801
            ],
            block: [
              252.897,
              278.169
            ],
            angle: 0.08671,
            coverage: 0.3606,
            action: [
              135.834,
              442.088
            ]
          },
          {
            t: 0.1125,
            agent: [
              158.032,
              350.802
            ],
            block: [
              252.897,
              278.169
            ],
            angle: 0.08671,
            coverage: 0.3606,
            action: [
              299.299,
              392.283
            ]
          },
          {
            t: 0.125,
            agent: [
              197.588,
              378.191
            ],
            block: [
              252.897,
              278.169
            ],
            angle: 0.08671,
            coverage: 0.3606,
            action: [
              177.16,
              358.443
            ]
          },
          {
            t: 0.1375,
            agent: [
              207.383,
              376.899
            ],
            block: [
              252.897,
              278.169
            ],
            angle: 0.08671,
            coverage: 0.3606,
            action: [
              235.456,
              488.226
            ]
          },
          {
            t: 0.15,
            agent: [
              213.292,
              407.574
            ],
            block: [
              252.897,
              278.169
            ],
            angle: 0.08671,
            coverage: 0.3606,
            action: [
              272.922,
              395.567
            ]
          },
          {
            t: 0.1625,
            agent: [
              234.082,
              416.506
            ],
            block: [
              252.897,
              278.169
            ],
            angle: 0.08671,
            coverage: 0.3606,
            action: [
              185.257,
              466.762
            ]
          },
          {
            t: 0.175,
            agent: [
              226.304,
              429.939
            ],
            block: [
              252.897,
              278.169
            ],
            angle: 0.08671,
            coverage: 0.3606,
            action: [
              214.656,
              373.223
            ]
          },
          {
            t: 0.1875,
            agent: [
              217.348,
              418.807
            ],
            block: [
              252.897,
              278.169
            ],
            angle: 0.08671,
            coverage: 0.3606,
            action: [
              269.523,
              512.0
            ]
          },
          {
            t: 0.2,
            agent: [
              231.507,
              439.973
            ],
            block: [
              252.897,
              278.169
            ],
            angle: 0.08671,
            coverage: 0.3606,
            action: [
              223.494,
              374.29
            ]
          },
          {
            t: 0.2125,
            agent: [
              234.989,
              431.031
            ],
            block: [
              252.897,
              278.169
            ],
            angle: 0.08671,
            coverage: 0.3606,
            action: [
              291.498,
              480.778
            ]
          },
          {
            t: 0.225,
            agent: [
              250.761,
              438.315
            ],
            block: [
              252.897,
              278.169
            ],
            angle: 0.08671,
            coverage: 0.3606,
            action: [
              195.403,
              480.939
            ]
          },
          {
            t: 0.2375,
            agent: [
              240.728,
              456.538
            ],
            block: [
              252.897,
              278.169
            ],
            angle: 0.08671,
            coverage: 0.3606,
            action: [
              304.975,
              429.758
            ]
          },
          {
            t: 0.25,
            agent: [
              253.483,
              453.356
            ],
            block: [
              252.897,
              278.169
            ],
            angle: 0.08671,
            coverage: 0.3606,
            action: [
              262.502,
              512.0
            ]
          },
          {
            t: 0.2625,
            agent: [
              263.385,
              467.666
            ],
            block: [
              252.897,
              278.169
            ],
            angle: 0.08671,
            coverage: 0.3606,
            action: [
              209.222,
              344.608
            ]
          },
          {
            t: 0.275,
            agent: [
              248.334,
              437.868
            ],
            block: [
              252.897,
              278.169
            ],
            angle: 0.08671,
            coverage: 0.3606,
            action: [
              206.608,
              384.962
            ]
          },
          {
            t: 0.2875,
            agent: [
              229.924,
              408.401
            ],
            block: [
              253.363,
              276.214
            ],
            angle: 0.09327,
            coverage: 0.3614,
            action: [
              277.209,
              349.017
            ]
          },
          {
            t: 0.3,
            agent: [
              239.272,
              385.009
            ],
            block: [
              259.007,
              252.529
            ],
            angle: 0.15087,
            coverage: 0.33,
            action: [
              319.717,
              460.757
            ]
          },
          {
            t: 0.3125,
            agent: [
              268.383,
              400.793
            ],
            block: [
              259.403,
              249.612
            ],
            angle: 0.14982,
            coverage: 0.3343,
            action: [
              231.293,
              329.955
            ]
          },
          {
            t: 0.325,
            agent: [
              266.391,
              388.374
            ],
            block: [
              259.403,
              249.612
            ],
            angle: 0.14982,
            coverage: 0.3343,
            action: [
              334.773,
              412.85
            ]
          },
          {
            t: 0.3375,
            agent: [
              282.397,
              387.622
            ],
            block: [
              259.403,
              249.612
            ],
            angle: 0.14982,
            coverage: 0.3343,
            action: [
              152.901,
              183.5
            ]
          },
          {
            t: 0.35,
            agent: [
              251.795,
              330.063
            ],
            block: [
              255.794,
              248.903
            ],
            angle: 0.37059,
            coverage: 0.4504,
            action: [
              242.133,
              375.568
            ]
          },
          {
            t: 0.3625,
            agent: [
              234.385,
              320.639
            ],
            block: [
              244.554,
              243.606
            ],
            angle: 0.54561,
            coverage: 0.7561,
            action: [
              118.51,
              312.714
            ]
          },
          {
            t: 0.375,
            agent: [
              199.138,
              323.542
            ],
            block: [
              238.476,
              239.412
            ],
            angle: 0.745,
            coverage: 0.5716,
            action: [
              411.016,
              286.918
            ]
          },
          {
            t: 0.3875,
            agent: [
              248.814,
              311.791
            ],
            block: [
              237.912,
              238.922
            ],
            angle: 0.77615,
            coverage: 0.5296,
            action: [
              271.577,
              339.208
            ]
          },
          {
            t: 0.4,
            agent: [
              279.357,
              315.802
            ],
            block: [
              237.742,
              233.828
            ],
            angle: 0.70245,
            coverage: 0.504,
            action: [
              358.482,
              376.434
            ]
          },
          {
            t: 0.4125,
            agent: [
              305.145,
              336.827
            ],
            block: [
              237.742,
              233.828
            ],
            angle: 0.70245,
            coverage: 0.504,
            action: [
              388.968,
              234.971
            ]
          },
          {
            t: 0.425,
            agent: [
              338.775,
              313.481
            ],
            block: [
              237.742,
              233.828
            ],
            angle: 0.70245,
            coverage: 0.504,
            action: [
              336.071,
              323.043
            ]
          },
          {
            t: 0.4375,
            agent: [
              347.304,
              304.857
            ],
            block: [
              237.742,
              233.828
            ],
            angle: 0.70245,
            coverage: 0.504,
            action: [
              182.362,
              129.579
            ]
          },
          {
            t: 0.45,
            agent: [
              298.172,
              254.178
            ],
            block: [
              237.742,
              233.828
            ],
            angle: 0.70245,
            coverage: 0.504,
            action: [
              263.583,
              296.977
            ]
          },
          {
            t: 0.4625,
            agent: [
              269.475,
              247.196
            ],
            block: [
              236.877,
              237.077
            ],
            angle: 0.73498,
            coverage: 0.527,
            action: [
              204.006,
              195.93
            ]
          },
          {
            t: 0.475,
            agent: [
              246.365,
              236.96
            ],
            block: [
              233.209,
              244.868
            ],
            angle: 0.7965,
            coverage: 0.4374,
            action: [
              259.006,
              324.468
            ]
          },
          {
            t: 0.4875,
            agent: [
              242.795,
              257.06
            ],
            block: [
              223.058,
              256.343
            ],
            angle: 0.82336,
            coverage: 0.2567,
            action: [
              111.424,
              344.215
            ]
          },
          {
            t: 0.5,
            agent: [
              205.416,
              292.667
            ],
            block: [
              191.12,
              291.8
            ],
            angle: 1.02373,
            coverage: 0.1483,
            action: [
              176.221,
              466.06
            ]
          },
          {
            t: 0.5125,
            agent: [
              182.062,
              353.63
            ],
            block: [
              157.764,
              319.947
            ],
            angle: 1.23944,
            coverage: 0.0001,
            action: [
              196.954,
              344.576
            ]
          },
          {
            t: 0.525,
            agent: [
              183.292,
              370.308
            ],
            block: [
              153.657,
              324.829
            ],
            angle: 1.31556,
            coverage: 0.0,
            action: [
              165.531,
              375.292
            ]
          },
          {
            t: 0.5375,
            agent: [
              179.729,
              370.641
            ],
            block: [
              153.363,
              325.205
            ],
            angle: 1.32199,
            coverage: 0.0,
            action: [
              93.301,
              330.468
            ]
          },
          {
            t: 0.55,
            agent: [
              152.175,
              359.328
            ],
            block: [
              138.253,
              336.659
            ],
            angle: 1.52508,
            coverage: 0.0,
            action: [
              180.622,
              261.072
            ]
          },
          {
            t: 0.5625,
            agent: [
              150.92,
              325.774
            ],
            block: [
              131.719,
              338.815
            ],
            angle: 1.56874,
            coverage: 0.0,
            action: [
              107.263,
              379.991
            ]
          },
          {
            t: 0.575,
            agent: [
              141.261,
              330.83
            ],
            block: [
              127.168,
              338.078
            ],
            angle: 1.55147,
            coverage: 0.0,
            action: [
              126.84,
              256.434
            ]
          },
          {
            t: 0.5875,
            agent: [
              132.087,
              314.977
            ],
            block: [
              127.497,
              337.224
            ],
            angle: 1.3717,
            coverage: 0.0,
            action: [
              117.466,
              291.275
            ]
          },
          {
            t: 0.6,
            agent: [
              126.181,
              299.597
            ],
            block: [
              125.578,
              334.959
            ],
            angle: 1.25558,
            coverage: 0.0,
            action: [
              45.107,
              348.908
            ]
          },
          {
            t: 0.6125,
            agent: [
              100.583,
              311.577
            ],
            block: [
              106.057,
              334.189
            ],
            angle: 0.84733,
            coverage: 0.0,
            action: [
              34.698,
              257.388
            ]
          },
          {
            t: 0.625,
            agent: [
              72.034,
              301.094
            ],
            block: [
              94.619,
              339.337
            ],
            angle: 0.69077,
            coverage: 0.0,
            action: [
              0.0,
              480.441
            ]
          },
          {
            t: 0.6375,
            agent: [
              43.416,
              348.017
            ],
            block: [
              70.17,
              367.987
            ],
            angle: 0.33518,
            coverage: 0.0,
            action: [
              113.758,
              379.723
            ]
          },
          {
            t: 0.65,
            agent: [
              56.195,
              377.517
            ],
            block: [
              67.847,
              386.185
            ],
            angle: 6.25469,
            coverage: 0.0,
            action: [
              221.908,
              329.33
            ]
          },
          {
            t: 0.6625,
            agent: [
              113.122,
              366.688
            ],
            block: [
              78.258,
              384.209
            ],
            angle: 6.25919,
            coverage: 0.0,
            action: [
              23.512,
              477.731
            ]
          },
          {
            t: 0.675,
            agent: [
              105.133,
              394.101
            ],
            block: [
              89.714,
              397.368
            ],
            angle: 0.57682,
            coverage: 0.0,
            action: [
              65.873,
              478.375
            ]
          },
          {
            t: 0.6875,
            agent: [
              83.368,
              431.49
            ],
            block: [
              95.852,
              428.19
            ],
            angle: 0.96949,
            coverage: 0.0,
            action: [
              167.012,
              356.122
            ]
          },
          {
            t: 0.7,
            agent: [
              103.769,
              418.562
            ],
            block: [
              106.405,
              424.366
            ],
            angle: 0.95713,
            coverage: 0.0,
            action: [
              0.0,
              324.87
            ]
          },
          {
            t: 0.7125,
            agent: [
              82.483,
              382.358
            ],
            block: [
              100.276,
              412.722
            ],
            angle: 0.8284,
            coverage: 0.0,
            action: [
              150.988,
              426.641
            ]
          },
          {
            t: 0.725,
            agent: [
              91.055,
              385.014
            ],
            block: [
              92.968,
              403.452
            ],
            angle: 0.70621,
            coverage: 0.0,
            action: [
              149.107,
              512.0
            ]
          },
          {
            t: 0.7375,
            agent: [
              115.968,
              427.588
            ],
            block: [
              104.044,
              419.689
            ],
            angle: 0.87687,
            coverage: 0.0,
            action: [
              51.12,
              454.165
            ]
          },
          {
            t: 0.75,
            agent: [
              103.245,
              449.634
            ],
            block: [
              94.623,
              445.782
            ],
            angle: 1.06872,
            coverage: 0.0,
            action: [
              20.469,
              460.067
            ]
          },
          {
            t: 0.7625,
            agent: [
              71.466,
              455.602
            ],
            block: [
              58.569,
              444.487
            ],
            angle: 0.88045,
            coverage: 0.0,
            action: [
              0.0,
              382.437
            ]
          },
          {
            t: 0.775,
            agent: [
              41.113,
              435.119
            ],
            block: [
              53.54,
              442.201
            ],
            angle: 0.85436,
            coverage: 0.0,
            action: [
              0.0,
              489.094
            ]
          },
          {
            t: 0.7875,
            agent: [
              21.014,
              442.877
            ],
            block: [
              55.718,
              441.367
            ],
            angle: 0.8046,
            coverage: 0.0,
            action: [
              0.0,
              461.137
            ]
          },
          {
            t: 0.8,
            agent: [
              10.249,
              454.374
            ],
            block: [
              85.406,
              438.058
            ],
            angle: 0.99088,
            coverage: 0.0,
            action: [
              47.188,
              512.0
            ]
          },
          {
            t: 0.8125,
            agent: [
              18.847,
              473.417
            ],
            block: [
              139.419,
              426.008
            ],
            angle: 0.98031,
            coverage: 0.0,
            action: [
              0.0,
              432.178
            ]
          },
          {
            t: 0.825,
            agent: [
              17.427,
              467.664
            ],
            block: [
              141.916,
              424.248
            ],
            angle: 0.96704,
            coverage: 0.0,
            action: [
              117.833,
              470.584
            ]
          },
          {
            t: 0.8375,
            agent: [
              44.976,
              463.867
            ],
            block: [
              148.864,
              419.04
            ],
            angle: 0.91153,
            coverage: 0.0,
            action: [
              23.194,
              512.0
            ]
          },
          {
            t: 0.85,
            agent: [
              49.794,
              478.456
            ],
            block: [
              159.124,
              408.397
            ],
            angle: 0.78058,
            coverage: 0.0,
            action: [
              44.474,
              480.186
            ]
          },
          {
            t: 0.8625,
            agent: [
              45.708,
              484.356
            ],
            block: [
              159.141,
              408.376
            ],
            angle: 0.78101,
            coverage: 0.0,
            action: [
              22.81,
              512.0
            ]
          },
          {
            t: 0.875,
            agent: [
              38.358,
              492.688
            ],
            block: [
              159.149,
              408.366
            ],
            angle: 0.78126,
            coverage: 0.0,
            action: [
              117.956,
              484.155
            ]
          },
          {
            t: 0.8875,
            agent: [
              59.333,
              493.26
            ],
            block: [
              161.076,
              407.054
            ],
            angle: 0.79126,
            coverage: 0.0,
            action: [
              67.685,
              483.834
            ]
          },
          {
            t: 0.9,
            agent: [
              70.733,
              489.497
            ],
            block: [
              170.742,
              399.341
            ],
            angle: 0.81659,
            coverage: 0.0,
            action: [
              65.076,
              436.282
            ]
          },
          {
            t: 0.9125,
            agent: [
              69.937,
              472.714
            ],
            block: [
              179.038,
              393.247
            ],
            angle: 0.84219,
            coverage: 0.0,
            action: [
              209.436,
              441.519
            ]
          },
          {
            t: 0.925,
            agent: [
              110.544,
              457.538
            ],
            block: [
              210.596,
              370.902
            ],
            angle: 0.89852,
            coverage: 0.05,
            action: [
              123.66,
              430.905
            ]
          },
          {
            t: 0.9375,
            agent: [
              130.048,
              446.209
            ],
            block: [
              227.703,
              353.632
            ],
            angle: 0.84676,
            coverage: 0.1278,
            action: [
              149.396,
              443.426
            ]
          },
          {
            t: 0.95,
            agent: [
              137.135,
              442.426
            ],
            block: [
              233.489,
              347.733
            ],
            angle: 0.83469,
            coverage: 0.1274,
            action: [
              68.821,
              442.323
            ]
          },
          {
            t: 0.9625,
            agent: [
              119.095,
              442.103
            ],
            block: [
              233.896,
              347.298
            ],
            angle: 0.83361,
            coverage: 0.1274,
            action: [
              159.828,
              391.392
            ]
          },
          {
            t: 0.975,
            agent: [
              123.474,
              427.1
            ],
            block: [
              233.896,
              347.298
            ],
            angle: 0.83361,
            coverage: 0.1274,
            action: [
              223.788,
              461.601
            ]
          },
          {
            t: 0.9875,
            agent: [
              157.746,
              431.622
            ],
            block: [
              250.737,
              334.035
            ],
            angle: 0.85489,
            coverage: 0.1167,
            action: [
              226.239,
              382.325
            ]
          },
          {
            t: 1.0,
            agent: [
              189.201,
              420.947
            ],
            block: [
              259.19,
              322.972
            ],
            angle: 0.87417,
            coverage: 0.1266
          }
        ]
      },
      kimi: {
        agentId: "kimi",
        label: "Kimi Code",
        policy: "trajectory_lookup",
        color: "#111111",
        steps: 120,
        finalCoverage: 0.923,
        frames: [
          {
            t: 0.0,
            agent: [
              102.0,
              205.0
            ],
            block: [
              252.897,
              278.169
            ],
            angle: 0.08671,
            coverage: 0.0,
            action: [
              207.117,
              306.388
            ]
          },
          {
            t: 0.0083,
            agent: [
              133.08,
              234.977
            ],
            block: [
              252.897,
              278.169
            ],
            angle: 0.08671,
            coverage: 0.3606,
            action: [
              207.117,
              306.388
            ]
          },
          {
            t: 0.0167,
            agent: [
              166.742,
              267.446
            ],
            block: [
              252.897,
              278.169
            ],
            angle: 0.08671,
            coverage: 0.3606,
            action: [
              207.117,
              306.388
            ]
          },
          {
            t: 0.025,
            agent: [
              186.894,
              286.883
            ],
            block: [
              264.014,
              279.552
            ],
            angle: 0.1681,
            coverage: 0.3474,
            action: [
              207.117,
              306.388
            ]
          },
          {
            t: 0.0333,
            agent: [
              197.341,
              296.959
            ],
            block: [
              277.294,
              282.064
            ],
            angle: 0.23765,
            coverage: 0.324,
            action: [
              207.117,
              306.388
            ]
          },
          {
            t: 0.0417,
            agent: [
              202.467,
              301.903
            ],
            block: [
              281.379,
              282.035
            ],
            angle: 0.27081,
            coverage: 0.3206,
            action: [
              250.476,
              307.714
            ]
          },
          {
            t: 0.05,
            agent: [
              217.742,
              304.663
            ],
            block: [
              285.604,
              280.7
            ],
            angle: 0.32652,
            coverage: 0.3299,
            action: [
              250.476,
              307.714
            ]
          },
          {
            t: 0.0583,
            agent: [
              232.79,
              306.209
            ],
            block: [
              287.813,
              279.22
            ],
            angle: 0.36169,
            coverage: 0.3376,
            action: [
              250.476,
              307.714
            ]
          },
          {
            t: 0.0667,
            agent: [
              241.65,
              306.992
            ],
            block: [
              289.441,
              277.901
            ],
            angle: 0.3847,
            coverage: 0.3393,
            action: [
              250.476,
              307.714
            ]
          },
          {
            t: 0.075,
            agent: [
              246.217,
              307.372
            ],
            block: [
              291.015,
              277.347
            ],
            angle: 0.39638,
            coverage: 0.334,
            action: [
              250.476,
              307.714
            ]
          },
          {
            t: 0.0833,
            agent: [
              248.452,
              307.553
            ],
            block: [
              293.573,
              277.868
            ],
            angle: 0.4015,
            coverage: 0.3189,
            action: [
              214.044,
              347.777
            ]
          },
          {
            t: 0.0917,
            agent: [
              238.749,
              319.484
            ],
            block: [
              293.741,
              277.898
            ],
            angle: 0.40189,
            coverage: 0.3178,
            action: [
              214.044,
              347.777
            ]
          },
          {
            t: 0.1,
            agent: [
              227.588,
              332.354
            ],
            block: [
              293.741,
              277.898
            ],
            angle: 0.40189,
            coverage: 0.3178,
            action: [
              214.044,
              347.777
            ]
          },
          {
            t: 0.1083,
            agent: [
              220.842,
              340.053
            ],
            block: [
              293.741,
              277.898
            ],
            angle: 0.40189,
            coverage: 0.3178,
            action: [
              214.044,
              347.777
            ]
          },
          {
            t: 0.1167,
            agent: [
              217.333,
              344.044
            ],
            block: [
              293.741,
              277.898
            ],
            angle: 0.40189,
            coverage: 0.3178,
            action: [
              214.044,
              347.777
            ]
          },
          {
            t: 0.125,
            agent: [
              215.609,
              346.001
            ],
            block: [
              293.741,
              277.898
            ],
            angle: 0.40189,
            coverage: 0.3178,
            action: [
              218.902,
              299.216
            ]
          },
          {
            t: 0.1333,
            agent: [
              216.219,
              332.581
            ],
            block: [
              293.741,
              277.898
            ],
            angle: 0.40189,
            coverage: 0.3178,
            action: [
              218.902,
              299.216
            ]
          },
          {
            t: 0.1417,
            agent: [
              217.384,
              317.474
            ],
            block: [
              293.741,
              277.898
            ],
            angle: 0.40189,
            coverage: 0.3178,
            action: [
              218.902,
              299.216
            ]
          },
          {
            t: 0.15,
            agent: [
              218.131,
              308.373
            ],
            block: [
              293.741,
              277.898
            ],
            angle: 0.40189,
            coverage: 0.3178,
            action: [
              218.902,
              299.216
            ]
          },
          {
            t: 0.1583,
            agent: [
              218.527,
              303.646
            ],
            block: [
              293.741,
              277.898
            ],
            angle: 0.40189,
            coverage: 0.3178,
            action: [
              218.902,
              299.216
            ]
          },
          {
            t: 0.1667,
            agent: [
              218.723,
              301.324
            ],
            block: [
              293.741,
              277.898
            ],
            angle: 0.40189,
            coverage: 0.3178,
            action: [
              211.443,
              309.267
            ]
          },
          {
            t: 0.175,
            agent: [
              216.612,
              303.183
            ],
            block: [
              293.741,
              277.898
            ],
            angle: 0.40189,
            coverage: 0.3178,
            action: [
              211.443,
              309.267
            ]
          },
          {
            t: 0.1833,
            agent: [
              214.268,
              305.875
            ],
            block: [
              293.741,
              277.898
            ],
            angle: 0.40189,
            coverage: 0.3178,
            action: [
              211.443,
              309.267
            ]
          },
          {
            t: 0.1917,
            agent: [
              212.859,
              307.553
            ],
            block: [
              293.741,
              277.898
            ],
            angle: 0.40189,
            coverage: 0.3178,
            action: [
              211.443,
              309.267
            ]
          },
          {
            t: 0.2,
            agent: [
              212.128,
              308.435
            ],
            block: [
              293.741,
              277.898
            ],
            angle: 0.40189,
            coverage: 0.3178,
            action: [
              211.443,
              309.267
            ]
          },
          {
            t: 0.2083,
            agent: [
              211.769,
              308.871
            ],
            block: [
              293.741,
              277.898
            ],
            angle: 0.40189,
            coverage: 0.3178,
            action: [
              179.788,
              274.863
            ]
          },
          {
            t: 0.2167,
            agent: [
              202.237,
              298.907
            ],
            block: [
              293.741,
              277.898
            ],
            angle: 0.40189,
            coverage: 0.3178,
            action: [
              179.788,
              274.863
            ]
          },
          {
            t: 0.225,
            agent: [
              192.019,
              287.989
            ],
            block: [
              293.741,
              277.898
            ],
            angle: 0.40189,
            coverage: 0.3178,
            action: [
              179.788,
              274.863
            ]
          },
          {
            t: 0.2333,
            agent: [
              185.912,
              281.44
            ],
            block: [
              293.741,
              277.898
            ],
            angle: 0.40189,
            coverage: 0.3178,
            action: [
              179.788,
              274.863
            ]
          },
          {
            t: 0.2417,
            agent: [
              182.748,
              278.043
            ],
            block: [
              293.741,
              277.898
            ],
            angle: 0.40189,
            coverage: 0.3178,
            action: [
              179.788,
              274.863
            ]
          },
          {
            t: 0.25,
            agent: [
              181.196,
              276.375
            ],
            block: [
              293.741,
              277.898
            ],
            angle: 0.40189,
            coverage: 0.3178,
            action: [
              82.957,
              188.219
            ]
          },
          {
            t: 0.2583,
            agent: [
              151.822,
              249.959
            ],
            block: [
              293.741,
              277.898
            ],
            angle: 0.40189,
            coverage: 0.3178,
            action: [
              82.957,
              188.219
            ]
          },
          {
            t: 0.2667,
            agent: [
              120.461,
              221.834
            ],
            block: [
              293.741,
              277.898
            ],
            angle: 0.40189,
            coverage: 0.3178,
            action: [
              82.957,
              188.219
            ]
          },
          {
            t: 0.275,
            agent: [
              101.732,
              205.046
            ],
            block: [
              293.741,
              277.898
            ],
            angle: 0.40189,
            coverage: 0.3178,
            action: [
              82.957,
              188.219
            ]
          },
          {
            t: 0.2833,
            agent: [
              92.031,
              196.351
            ],
            block: [
              293.741,
              277.898
            ],
            angle: 0.40189,
            coverage: 0.3178,
            action: [
              82.957,
              188.219
            ]
          },
          {
            t: 0.2917,
            agent: [
              87.273,
              192.087
            ],
            block: [
              293.741,
              277.898
            ],
            angle: 0.40189,
            coverage: 0.3178,
            action: [
              332.019,
              203.8
            ]
          },
          {
            t: 0.3,
            agent: [
              158.635,
              194.651
            ],
            block: [
              293.741,
              277.898
            ],
            angle: 0.40189,
            coverage: 0.3178,
            action: [
              332.019,
              203.8
            ]
          },
          {
            t: 0.3083,
            agent: [
              237.315,
              198.674
            ],
            block: [
              293.741,
              277.898
            ],
            angle: 0.40189,
            coverage: 0.3178,
            action: [
              332.019,
              203.8
            ]
          },
          {
            t: 0.3167,
            agent: [
              284.554,
              201.205
            ],
            block: [
              293.741,
              277.898
            ],
            angle: 0.40189,
            coverage: 0.3178,
            action: [
              332.019,
              203.8
            ]
          },
          {
            t: 0.325,
            agent: [
              309.067,
              202.54
            ],
            block: [
              293.741,
              277.898
            ],
            angle: 0.40189,
            coverage: 0.3178,
            action: [
              332.019,
              203.8
            ]
          },
          {
            t: 0.3333,
            agent: [
              321.1,
              203.199
            ],
            block: [
              293.741,
              277.898
            ],
            angle: 0.40189,
            coverage: 0.3178,
            action: [
              365.248,
              303.053
            ]
          },
          {
            t: 0.3417,
            agent: [
              336.689,
              232.862
            ],
            block: [
              293.741,
              277.898
            ],
            angle: 0.40189,
            coverage: 0.3178,
            action: [
              365.248,
              303.053
            ]
          },
          {
            t: 0.35,
            agent: [
              350.061,
              264.798
            ],
            block: [
              293.741,
              277.898
            ],
            angle: 0.40189,
            coverage: 0.3178,
            action: [
              365.248,
              303.053
            ]
          },
          {
            t: 0.3583,
            agent: [
              357.717,
              283.896
            ],
            block: [
              293.741,
              277.898
            ],
            angle: 0.40189,
            coverage: 0.3178,
            action: [
              365.248,
              303.053
            ]
          },
          {
            t: 0.3667,
            agent: [
              361.624,
              293.794
            ],
            block: [
              293.673,
              277.999
            ],
            angle: 0.40311,
            coverage: 0.3183,
            action: [
              365.248,
              303.053
            ]
          },
          {
            t: 0.375,
            agent: [
              363.528,
              298.649
            ],
            block: [
              293.504,
              278.164
            ],
            angle: 0.4049,
            coverage: 0.3193,
            action: [
              186.854,
              382.044
            ]
          },
          {
            t: 0.3833,
            agent: [
              311.691,
              324.33
            ],
            block: [
              258.457,
              268.854
            ],
            angle: 0.17425,
            coverage: 0.3489,
            action: [
              186.854,
              382.044
            ]
          },
          {
            t: 0.3917,
            agent: [
              254.992,
              350.727
            ],
            block: [
              249.821,
              267.044
            ],
            angle: 0.30707,
            coverage: 0.3763,
            action: [
              186.854,
              382.044
            ]
          },
          {
            t: 0.4,
            agent: [
              220.995,
              366.389
            ],
            block: [
              244.951,
              265.228
            ],
            angle: 0.52016,
            coverage: 0.5338,
            action: [
              186.854,
              382.044
            ]
          },
          {
            t: 0.4083,
            agent: [
              203.36,
              374.483
            ],
            block: [
              244.542,
              265.01
            ],
            angle: 0.6149,
            coverage: 0.6116,
            action: [
              186.854,
              382.044
            ]
          },
          {
            t: 0.4167,
            agent: [
              194.706,
              378.449
            ],
            block: [
              244.64,
              265.089
            ],
            angle: 0.65937,
            coverage: 0.6441,
            action: [
              120.77,
              315.103
            ]
          },
          {
            t: 0.425,
            agent: [
              171.021,
              360.555
            ],
            block: [
              245.325,
              265.85
            ],
            angle: 0.89801,
            coverage: 0.6237,
            action: [
              120.77,
              315.103
            ]
          },
          {
            t: 0.4333,
            agent: [
              147.895,
              340.016
            ],
            block: [
              245.663,
              266.74
            ],
            angle: 1.1732,
            coverage: 0.4312,
            action: [
              120.77,
              315.103
            ]
          },
          {
            t: 0.4417,
            agent: [
              134.302,
              327.607
            ],
            block: [
              246.206,
              267.134
            ],
            angle: 1.30399,
            coverage: 0.3849,
            action: [
              120.77,
              315.103
            ]
          },
          {
            t: 0.45,
            agent: [
              127.299,
              321.153
            ],
            block: [
              247.132,
              266.974
            ],
            angle: 1.35455,
            coverage: 0.3703,
            action: [
              120.77,
              315.103
            ]
          },
          {
            t: 0.4583,
            agent: [
              123.873,
              317.982
            ],
            block: [
              247.484,
              266.868
            ],
            angle: 1.3633,
            coverage: 0.3674,
            action: [
              206.999,
              366.674
            ]
          },
          {
            t: 0.4667,
            agent: [
              147.73,
              331.71
            ],
            block: [
              247.564,
              266.842
            ],
            angle: 1.36483,
            coverage: 0.3668,
            action: [
              206.999,
              366.674
            ]
          },
          {
            t: 0.475,
            agent: [
              174.568,
              347.505
            ],
            block: [
              247.564,
              266.842
            ],
            angle: 1.36483,
            coverage: 0.3668,
            action: [
              206.999,
              366.674
            ]
          },
          {
            t: 0.4833,
            agent: [
              190.733,
              357.053
            ],
            block: [
              247.564,
              266.842
            ],
            angle: 1.36483,
            coverage: 0.3668,
            action: [
              206.999,
              366.674
            ]
          },
          {
            t: 0.4917,
            agent: [
              199.131,
              362.018
            ],
            block: [
              247.564,
              266.842
            ],
            angle: 1.36483,
            coverage: 0.3668,
            action: [
              206.999,
              366.674
            ]
          },
          {
            t: 0.5,
            agent: [
              203.256,
              364.458
            ],
            block: [
              247.564,
              266.842
            ],
            angle: 1.36483,
            coverage: 0.3668,
            action: [
              241.692,
              299.126
            ]
          },
          {
            t: 0.5083,
            agent: [
              215.489,
              345.656
            ],
            block: [
              247.564,
              266.842
            ],
            angle: 1.36483,
            coverage: 0.3668,
            action: [
              241.692,
              299.126
            ]
          },
          {
            t: 0.5167,
            agent: [
              227.535,
              324.578
            ],
            block: [
              251.839,
              259.26
            ],
            angle: 1.24203,
            coverage: 0.3989,
            action: [
              241.692,
              299.126
            ]
          },
          {
            t: 0.525,
            agent: [
              234.627,
              311.89
            ],
            block: [
              256.187,
              252.157
            ],
            angle: 1.13128,
            coverage: 0.457,
            action: [
              241.692,
              299.126
            ]
          },
          {
            t: 0.5333,
            agent: [
              238.282,
              305.299
            ],
            block: [
              258.46,
              248.328
            ],
            angle: 1.07775,
            coverage: 0.4761,
            action: [
              241.692,
              299.126
            ]
          },
          {
            t: 0.5417,
            agent: [
              240.071,
              302.063
            ],
            block: [
              259.761,
              246.09
            ],
            angle: 1.04827,
            coverage: 0.478,
            action: [
              262.879,
              389.146
            ]
          },
          {
            t: 0.55,
            agent: [
              247.191,
              327.129
            ],
            block: [
              259.847,
              245.941
            ],
            angle: 1.04636,
            coverage: 0.4777,
            action: [
              262.879,
              389.146
            ]
          },
          {
            t: 0.5583,
            agent: [
              254.381,
              355.223
            ],
            block: [
              259.847,
              245.941
            ],
            angle: 1.04636,
            coverage: 0.4777,
            action: [
              262.879,
              389.146
            ]
          },
          {
            t: 0.5667,
            agent: [
              258.634,
              372.134
            ],
            block: [
              259.847,
              245.941
            ],
            angle: 1.04636,
            coverage: 0.4777,
            action: [
              262.879,
              389.146
            ]
          },
          {
            t: 0.575,
            agent: [
              260.829,
              380.918
            ],
            block: [
              259.847,
              245.941
            ],
            angle: 1.04636,
            coverage: 0.4777,
            action: [
              262.879,
              389.146
            ]
          },
          {
            t: 0.5833,
            agent: [
              261.904,
              385.232
            ],
            block: [
              259.847,
              245.941
            ],
            angle: 1.04636,
            coverage: 0.4777,
            action: [
              242.073,
              304.782
            ]
          },
          {
            t: 0.5917,
            agent: [
              256.267,
              362.354
            ],
            block: [
              259.847,
              245.941
            ],
            angle: 1.04636,
            coverage: 0.4777,
            action: [
              242.073,
              304.782
            ]
          },
          {
            t: 0.6,
            agent: [
              249.848,
              336.316
            ],
            block: [
              259.847,
              245.941
            ],
            angle: 1.04636,
            coverage: 0.4777,
            action: [
              242.073,
              304.782
            ]
          },
          {
            t: 0.6083,
            agent: [
              245.974,
              320.604
            ],
            block: [
              259.847,
              245.941
            ],
            angle: 1.04636,
            coverage: 0.4777,
            action: [
              242.073,
              304.782
            ]
          },
          {
            t: 0.6167,
            agent: [
              243.961,
              312.436
            ],
            block: [
              259.847,
              245.941
            ],
            angle: 1.04636,
            coverage: 0.4777,
            action: [
              242.073,
              304.782
            ]
          },
          {
            t: 0.625,
            agent: [
              242.971,
              308.424
            ],
            block: [
              259.847,
              245.941
            ],
            angle: 1.04636,
            coverage: 0.4777,
            action: [
              372.164,
              434.716
            ]
          },
          {
            t: 0.6333,
            agent: [
              280.961,
              344.919
            ],
            block: [
              260.622,
              243.789
            ],
            angle: 1.01401,
            coverage: 0.4709,
            action: [
              372.164,
              434.716
            ]
          },
          {
            t: 0.6417,
            agent: [
              322.397,
              385.619
            ],
            block: [
              260.622,
              243.789
            ],
            angle: 1.01401,
            coverage: 0.4709,
            action: [
              372.164,
              434.716
            ]
          },
          {
            t: 0.65,
            agent: [
              347.23,
              410.099
            ],
            block: [
              260.622,
              243.789
            ],
            angle: 1.01401,
            coverage: 0.4709,
            action: [
              372.164,
              434.716
            ]
          },
          {
            t: 0.6583,
            agent: [
              360.11,
              422.811
            ],
            block: [
              260.622,
              243.789
            ],
            angle: 1.01401,
            coverage: 0.4709,
            action: [
              372.164,
              434.716
            ]
          },
          {
            t: 0.6667,
            agent: [
              366.43,
              429.052
            ],
            block: [
              260.622,
              243.789
            ],
            angle: 1.01401,
            coverage: 0.4709,
            action: [
              191.472,
              332.036
            ]
          },
          {
            t: 0.675,
            agent: [
              316.032,
              401.683
            ],
            block: [
              260.622,
              243.789
            ],
            angle: 1.01401,
            coverage: 0.4709,
            action: [
              191.472,
              332.036
            ]
          },
          {
            t: 0.6833,
            agent: [
              259.601,
              370.217
            ],
            block: [
              260.622,
              243.789
            ],
            angle: 1.01401,
            coverage: 0.4709,
            action: [
              191.472,
              332.036
            ]
          },
          {
            t: 0.6917,
            agent: [
              225.636,
              351.199
            ],
            block: [
              260.622,
              243.789
            ],
            angle: 1.01401,
            coverage: 0.4709,
            action: [
              191.472,
              332.036
            ]
          },
          {
            t: 0.7,
            agent: [
              207.995,
              341.308
            ],
            block: [
              260.622,
              243.789
            ],
            angle: 1.01401,
            coverage: 0.4709,
            action: [
              191.472,
              332.036
            ]
          },
          {
            t: 0.7083,
            agent: [
              199.333,
              336.448
            ],
            block: [
              260.622,
              243.789
            ],
            angle: 1.01401,
            coverage: 0.4709,
            action: [
              340.525,
              390.917
            ]
          },
          {
            t: 0.7167,
            agent: [
              239.254,
              351.528
            ],
            block: [
              260.622,
              243.789
            ],
            angle: 1.01401,
            coverage: 0.4709,
            action: [
              340.525,
              390.917
            ]
          },
          {
            t: 0.725,
            agent: [
              285.021,
              369.281
            ],
            block: [
              260.622,
              243.789
            ],
            angle: 1.01401,
            coverage: 0.4709,
            action: [
              340.525,
              390.917
            ]
          },
          {
            t: 0.7333,
            agent: [
              312.669,
              380.049
            ],
            block: [
              260.622,
              243.789
            ],
            angle: 1.01401,
            coverage: 0.4709,
            action: [
              340.525,
              390.917
            ]
          },
          {
            t: 0.7417,
            agent: [
              327.047,
              385.657
            ],
            block: [
              260.622,
              243.789
            ],
            angle: 1.01401,
            coverage: 0.4709,
            action: [
              340.525,
              390.917
            ]
          },
          {
            t: 0.75,
            agent: [
              334.112,
              388.414
            ],
            block: [
              260.622,
              243.789
            ],
            angle: 1.01401,
            coverage: 0.4709,
            action: [
              0.0,
              301.572
            ]
          },
          {
            t: 0.7583,
            agent: [
              236.813,
              363.318
            ],
            block: [
              260.622,
              243.789
            ],
            angle: 1.01401,
            coverage: 0.4709,
            action: [
              0.0,
              301.572
            ]
          },
          {
            t: 0.7667,
            agent: [
              129.368,
              335.333
            ],
            block: [
              260.622,
              243.789
            ],
            angle: 1.01401,
            coverage: 0.4709,
            action: [
              0.0,
              301.572
            ]
          },
          {
            t: 0.775,
            agent: [
              64.842,
              318.499
            ],
            block: [
              260.622,
              243.789
            ],
            angle: 1.01401,
            coverage: 0.4709,
            action: [
              0.0,
              301.572
            ]
          },
          {
            t: 0.7833,
            agent: [
              31.354,
              309.759
            ],
            block: [
              260.622,
              243.789
            ],
            angle: 1.01401,
            coverage: 0.4709,
            action: [
              0.0,
              301.572
            ]
          },
          {
            t: 0.7917,
            agent: [
              14.916,
              305.467
            ],
            block: [
              260.622,
              243.789
            ],
            angle: 1.01401,
            coverage: 0.4709,
            action: [
              198.98,
              270.862
            ]
          },
          {
            t: 0.8,
            agent: [
              65.874,
              294.331
            ],
            block: [
              260.622,
              243.789
            ],
            angle: 1.01401,
            coverage: 0.4709,
            action: [
              198.98,
              270.862
            ]
          },
          {
            t: 0.8083,
            agent: [
              125.866,
              283.522
            ],
            block: [
              260.622,
              243.789
            ],
            angle: 1.01401,
            coverage: 0.4709,
            action: [
              198.98,
              270.862
            ]
          },
          {
            t: 0.8167,
            agent: [
              162.255,
              277.176
            ],
            block: [
              260.682,
              243.904
            ],
            angle: 0.9537,
            coverage: 0.5292,
            action: [
              198.98,
              270.862
            ]
          },
          {
            t: 0.825,
            agent: [
              181.204,
              273.908
            ],
            block: [
              261.71,
              245.251
            ],
            angle: 0.87611,
            coverage: 0.6323,
            action: [
              198.98,
              270.862
            ]
          },
          {
            t: 0.8333,
            agent: [
              190.52,
              272.31
            ],
            block: [
              263.137,
              246.899
            ],
            angle: 0.83441,
            coverage: 0.709,
            action: [
              154.788,
              321.329
            ]
          },
          {
            t: 0.8417,
            agent: [
              181.919,
              286.467
            ],
            block: [
              264.357,
              248.215
            ],
            angle: 0.8007,
            coverage: 0.7719,
            action: [
              154.788,
              321.329
            ]
          },
          {
            t: 0.85,
            agent: [
              169.883,
              302.266
            ],
            block: [
              264.637,
              248.501
            ],
            angle: 0.77706,
            coverage: 0.7614,
            action: [
              154.788,
              321.329
            ]
          },
          {
            t: 0.8583,
            agent: [
              162.408,
              311.771
            ],
            block: [
              264.649,
              248.514
            ],
            angle: 0.76484,
            coverage: 0.7483,
            action: [
              154.788,
              321.329
            ]
          },
          {
            t: 0.8667,
            agent: [
              158.484,
              316.707
            ],
            block: [
              264.639,
              248.504
            ],
            angle: 0.76107,
            coverage: 0.7446,
            action: [
              154.788,
              321.329
            ]
          },
          {
            t: 0.875,
            agent: [
              156.549,
              319.13
            ],
            block: [
              264.639,
              248.504
            ],
            angle: 0.76107,
            coverage: 0.7446,
            action: [
              232.07,
              59.444
            ]
          },
          {
            t: 0.8833,
            agent: [
              178.47,
              242.859
            ],
            block: [
              264.639,
              248.504
            ],
            angle: 0.76107,
            coverage: 0.7446,
            action: [
              232.07,
              59.444
            ]
          },
          {
            t: 0.8917,
            agent: [
              202.778,
              159.543
            ],
            block: [
              264.639,
              248.504
            ],
            angle: 0.76107,
            coverage: 0.7446,
            action: [
              232.07,
              59.444
            ]
          },
          {
            t: 0.9,
            agent: [
              217.386,
              109.597
            ],
            block: [
              264.639,
              248.504
            ],
            angle: 0.76107,
            coverage: 0.7446,
            action: [
              232.07,
              59.444
            ]
          },
          {
            t: 0.9083,
            agent: [
              224.969,
              83.691
            ],
            block: [
              264.639,
              248.504
            ],
            angle: 0.76107,
            coverage: 0.7446,
            action: [
              232.07,
              59.444
            ]
          },
          {
            t: 0.9167,
            agent: [
              228.692,
              70.978
            ],
            block: [
              264.639,
              248.504
            ],
            angle: 0.76107,
            coverage: 0.7446,
            action: [
              270.605,
              251.818
            ]
          },
          {
            t: 0.925,
            agent: [
              241.869,
              121.768
            ],
            block: [
              264.639,
              248.504
            ],
            angle: 0.76107,
            coverage: 0.7446,
            action: [
              270.605,
              251.818
            ]
          },
          {
            t: 0.9333,
            agent: [
              255.054,
              180.49
            ],
            block: [
              264.639,
              248.504
            ],
            angle: 0.76107,
            coverage: 0.7446,
            action: [
              270.605,
              251.818
            ]
          },
          {
            t: 0.9417,
            agent: [
              262.839,
              216.011
            ],
            block: [
              264.639,
              248.504
            ],
            angle: 0.76107,
            coverage: 0.7446,
            action: [
              270.605,
              251.818
            ]
          },
          {
            t: 0.95,
            agent: [
              266.856,
              234.491
            ],
            block: [
              262.503,
              250.162
            ],
            angle: 0.75193,
            coverage: 0.7902,
            action: [
              270.605,
              251.818
            ]
          },
          {
            t: 0.9583,
            agent: [
              268.823,
              243.573
            ],
            block: [
              258.31,
              254.195
            ],
            angle: 0.7445,
            coverage: 0.8926,
            action: [
              292.149,
              267.917
            ]
          },
          {
            t: 0.9667,
            agent: [
              276.134,
              252.685
            ],
            block: [
              257.196,
              255.56
            ],
            angle: 0.74686,
            coverage: 0.9194,
            action: [
              292.149,
              267.917
            ]
          },
          {
            t: 0.975,
            agent: [
              283.479,
              259.903
            ],
            block: [
              257.045,
              255.822
            ],
            angle: 0.74835,
            coverage: 0.9227,
            action: [
              292.149,
              267.917
            ]
          },
          {
            t: 0.9833,
            agent: [
              287.819,
              263.96
            ],
            block: [
              257.036,
              255.843
            ],
            angle: 0.74853,
            coverage: 0.923,
            action: [
              292.149,
              267.917
            ]
          },
          {
            t: 0.9917,
            agent: [
              290.059,
              266.017
            ],
            block: [
              257.036,
              255.843
            ],
            angle: 0.74853,
            coverage: 0.923,
            action: [
              292.149,
              267.917
            ]
          },
          {
            t: 1.0,
            agent: [
              291.155,
              267.016
            ],
            block: [
              257.036,
              255.843
            ],
            angle: 0.74853,
            coverage: 0.923
          }
        ]
      }
    }
  },
  {
    id: "seed-18",
    label: "Init 6",
    seed: 18,
    strategy: "Same initial state across Codex, Claude Code, and Kimi rollouts.",
    rollouts: {
      codex: {
        agentId: "codex",
        label: "Codex",
        policy: "beam_guarded",
        color: "#747fff",
        steps: 69,
        finalCoverage: 0.986,
        frames: [
          {
            t: 0,
            agent: [
              407,
              209
            ],
            block: [
              118.841,
              351.339
            ],
            angle: 4.90606,
            coverage: 0
          },
          {
            t: 0.0145,
            agent: [
              344.187,
              265.47
            ],
            block: [
              118.841,
              351.339
            ],
            angle: 4.90606,
            coverage: 0.0016,
            action: [
              194.559,
              399.989
            ]
          },
          {
            t: 0.029,
            agent: [
              276.156,
              326.632
            ],
            block: [
              118.841,
              351.339
            ],
            angle: 4.90606,
            coverage: 0.0016,
            action: [
              194.559,
              399.989
            ]
          },
          {
            t: 0.0435,
            agent: [
              235.429,
              363.246
            ],
            block: [
              116.438,
              350.556
            ],
            angle: 5.07028,
            coverage: 0,
            action: [
              194.559,
              399.989
            ]
          },
          {
            t: 0.058,
            agent: [
              214.316,
              382.227
            ],
            block: [
              116.147,
              351.309
            ],
            angle: 5.3024,
            coverage: 0.009,
            action: [
              194.559,
              399.989
            ]
          },
          {
            t: 0.0725,
            agent: [
              203.957,
              391.54
            ],
            block: [
              115.111,
              352.737
            ],
            angle: 5.42864,
            coverage: 0.0217,
            action: [
              194.559,
              399.989
            ]
          },
          {
            t: 0.087,
            agent: [
              187.597,
              399.155
            ],
            block: [
              112.441,
              355.447
            ],
            angle: 5.57804,
            coverage: 0.0184,
            action: [
              156.008,
              410.657
            ]
          },
          {
            t: 0.1014,
            agent: [
              172.902,
              404.684
            ],
            block: [
              107.715,
              359.024
            ],
            angle: 5.70759,
            coverage: 0,
            action: [
              156.008,
              410.657
            ]
          },
          {
            t: 0.1159,
            agent: [
              124.51,
              418.764
            ],
            block: [
              81.574,
              371.222
            ],
            angle: 5.97927,
            coverage: 0,
            action: [
              21.08,
              447.997
            ]
          },
          {
            t: 0.1304,
            agent: [
              76.949,
              432.25
            ],
            block: [
              73.754,
              373.155
            ],
            angle: 0.47688,
            coverage: 0,
            action: [
              21.08,
              447.997
            ]
          },
          {
            t: 0.1449,
            agent: [
              48.958,
              440.148
            ],
            block: [
              75.113,
              328.371
            ],
            angle: 0.48408,
            coverage: 0,
            action: [
              21.08,
              447.997
            ]
          },
          {
            t: 0.1594,
            agent: [
              34.534,
              444.211
            ],
            block: [
              81.46,
              318.914
            ],
            angle: 0.54493,
            coverage: 0,
            action: [
              21.08,
              447.997
            ]
          },
          {
            t: 0.1739,
            agent: [
              27.474,
              446.198
            ],
            block: [
              81.489,
              318.867
            ],
            angle: 0.54292,
            coverage: 0,
            action: [
              21.08,
              447.997
            ]
          },
          {
            t: 0.1884,
            agent: [
              24.097,
              447.148
            ],
            block: [
              81.505,
              318.842
            ],
            angle: 0.54185,
            coverage: 0,
            action: [
              21.08,
              447.997
            ]
          },
          {
            t: 0.2029,
            agent: [
              22.498,
              447.598
            ],
            block: [
              81.513,
              318.829
            ],
            angle: 0.54128,
            coverage: 0,
            action: [
              21.08,
              447.997
            ]
          },
          {
            t: 0.2174,
            agent: [
              21.746,
              447.809
            ],
            block: [
              81.517,
              318.822
            ],
            angle: 0.54098,
            coverage: 0,
            action: [
              21.08,
              447.997
            ]
          },
          {
            t: 0.2319,
            agent: [
              21.392,
              447.909
            ],
            block: [
              81.52,
              318.818
            ],
            angle: 0.54082,
            coverage: 0,
            action: [
              21.08,
              447.997
            ]
          },
          {
            t: 0.2464,
            agent: [
              21.226,
              447.956
            ],
            block: [
              81.521,
              318.816
            ],
            angle: 0.54073,
            coverage: 0,
            action: [
              21.08,
              447.997
            ]
          },
          {
            t: 0.2609,
            agent: [
              21.148,
              447.977
            ],
            block: [
              81.522,
              318.815
            ],
            angle: 0.54069,
            coverage: 0,
            action: [
              21.08,
              447.997
            ]
          },
          {
            t: 0.2754,
            agent: [
              21.112,
              447.988
            ],
            block: [
              81.522,
              318.815
            ],
            angle: 0.54066,
            coverage: 0,
            action: [
              21.08,
              447.997
            ]
          },
          {
            t: 0.2899,
            agent: [
              21.095,
              447.992
            ],
            block: [
              81.522,
              318.815
            ],
            angle: 0.54065,
            coverage: 0,
            action: [
              21.08,
              447.997
            ]
          },
          {
            t: 0.3043,
            agent: [
              21.087,
              447.995
            ],
            block: [
              81.522,
              318.814
            ],
            angle: 0.54064,
            coverage: 0,
            action: [
              21.08,
              447.997
            ]
          },
          {
            t: 0.3188,
            agent: [
              22.24,
              415.825
            ],
            block: [
              90.493,
              300.813
            ],
            angle: 0.51398,
            coverage: 0,
            action: [
              24.993,
              339.192
            ]
          },
          {
            t: 0.3333,
            agent: [
              23.492,
              380.982
            ],
            block: [
              107.922,
              277.791
            ],
            angle: 0.58447,
            coverage: 0,
            action: [
              24.993,
              339.192
            ]
          },
          {
            t: 0.3478,
            agent: [
              24.241,
              360.124
            ],
            block: [
              120.976,
              265.782
            ],
            angle: 0.64411,
            coverage: 0,
            action: [
              24.993,
              339.192
            ]
          },
          {
            t: 0.3623,
            agent: [
              24.63,
              349.311
            ],
            block: [
              122.162,
              264.614
            ],
            angle: 0.62883,
            coverage: 0,
            action: [
              24.993,
              339.192
            ]
          },
          {
            t: 0.3768,
            agent: [
              24.82,
              344.005
            ],
            block: [
              122.162,
              264.614
            ],
            angle: 0.62883,
            coverage: 0,
            action: [
              24.993,
              339.192
            ]
          },
          {
            t: 0.3913,
            agent: [
              36.039,
              337.457
            ],
            block: [
              122.146,
              264.608
            ],
            angle: 0.60294,
            coverage: 0,
            action: [
              62.627,
              325.639
            ]
          },
          {
            t: 0.4058,
            agent: [
              48.134,
              331.913
            ],
            block: [
              122.56,
              264.881
            ],
            angle: 0.53477,
            coverage: 0,
            action: [
              62.627,
              325.639
            ]
          },
          {
            t: 0.4203,
            agent: [
              94.315,
              314.723
            ],
            block: [
              136.413,
              270.678
            ],
            angle: 0.30178,
            coverage: 0.012,
            action: [
              194.346,
              278.203
            ]
          },
          {
            t: 0.4348,
            agent: [
              140.246,
              297.919
            ],
            block: [
              186.201,
              269.835
            ],
            angle: 0.4423,
            coverage: 0.1898,
            action: [
              194.346,
              278.203
            ]
          },
          {
            t: 0.4493,
            agent: [
              167.337,
              288.039
            ],
            block: [
              216.645,
              268.281
            ],
            angle: 0.60935,
            coverage: 0.3367,
            action: [
              194.346,
              278.203
            ]
          },
          {
            t: 0.4638,
            agent: [
              181.309,
              282.95
            ],
            block: [
              232.817,
              268.582
            ],
            angle: 0.70514,
            coverage: 0.4921,
            action: [
              194.346,
              278.203
            ]
          },
          {
            t: 0.4783,
            agent: [
              188.149,
              280.459
            ],
            block: [
              240.735,
              268.399
            ],
            angle: 0.75948,
            coverage: 0.619,
            action: [
              194.346,
              278.203
            ]
          },
          {
            t: 0.4928,
            agent: [
              191.422,
              279.268
            ],
            block: [
              244.301,
              268.598
            ],
            angle: 0.78289,
            coverage: 0.6622,
            action: [
              194.346,
              278.203
            ]
          },
          {
            t: 0.5072,
            agent: [
              192.971,
              278.704
            ],
            block: [
              246.061,
              268.604
            ],
            angle: 0.79534,
            coverage: 0.6782,
            action: [
              194.346,
              278.203
            ]
          },
          {
            t: 0.5217,
            agent: [
              193.701,
              278.438
            ],
            block: [
              246.84,
              268.654
            ],
            angle: 0.80057,
            coverage: 0.6839,
            action: [
              194.346,
              278.203
            ]
          },
          {
            t: 0.5362,
            agent: [
              194.043,
              278.314
            ],
            block: [
              247.237,
              268.666
            ],
            angle: 0.80333,
            coverage: 0.6872,
            action: [
              194.346,
              278.203
            ]
          },
          {
            t: 0.5507,
            agent: [
              194.204,
              278.255
            ],
            block: [
              247.422,
              268.672
            ],
            angle: 0.80463,
            coverage: 0.6887,
            action: [
              194.346,
              278.203
            ]
          },
          {
            t: 0.5652,
            agent: [
              194.28,
              278.228
            ],
            block: [
              247.51,
              268.675
            ],
            angle: 0.80524,
            coverage: 0.6894,
            action: [
              194.346,
              278.203
            ]
          },
          {
            t: 0.5797,
            agent: [
              194.315,
              278.215
            ],
            block: [
              247.548,
              268.677
            ],
            angle: 0.8055,
            coverage: 0.6897,
            action: [
              194.346,
              278.203
            ]
          },
          {
            t: 0.5942,
            agent: [
              194.332,
              278.209
            ],
            block: [
              247.567,
              268.678
            ],
            angle: 0.80563,
            coverage: 0.6899,
            action: [
              194.346,
              278.203
            ]
          },
          {
            t: 0.6087,
            agent: [
              194.339,
              278.206
            ],
            block: [
              247.576,
              268.678
            ],
            angle: 0.80569,
            coverage: 0.69,
            action: [
              194.346,
              278.203
            ]
          },
          {
            t: 0.6232,
            agent: [
              170.559,
              298.11
            ],
            block: [
              247.577,
              268.678
            ],
            angle: 0.8057,
            coverage: 0.69,
            action: [
              113.906,
              345.525
            ]
          },
          {
            t: 0.6377,
            agent: [
              144.801,
              319.668
            ],
            block: [
              247.577,
              268.678
            ],
            angle: 0.8057,
            coverage: 0.69,
            action: [
              113.906,
              345.525
            ]
          },
          {
            t: 0.6522,
            agent: [
              129.38,
              332.573
            ],
            block: [
              247.577,
              268.678
            ],
            angle: 0.8057,
            coverage: 0.69,
            action: [
              113.906,
              345.525
            ]
          },
          {
            t: 0.6667,
            agent: [
              121.386,
              339.264
            ],
            block: [
              247.577,
              268.678
            ],
            angle: 0.8057,
            coverage: 0.69,
            action: [
              113.906,
              345.525
            ]
          },
          {
            t: 0.6812,
            agent: [
              117.464,
              342.547
            ],
            block: [
              247.577,
              268.678
            ],
            angle: 0.8057,
            coverage: 0.69,
            action: [
              113.906,
              345.525
            ]
          },
          {
            t: 0.6957,
            agent: [
              126.922,
              347.487
            ],
            block: [
              247.577,
              268.678
            ],
            angle: 0.8057,
            coverage: 0.69,
            action: [
              152.249,
              356.918
            ]
          },
          {
            t: 0.7101,
            agent: [
              138.312,
              351.881
            ],
            block: [
              247.577,
              268.678
            ],
            angle: 0.8057,
            coverage: 0.69,
            action: [
              152.249,
              356.918
            ]
          },
          {
            t: 0.7246,
            agent: [
              201.928,
              371.259
            ],
            block: [
              259.06,
              256.229
            ],
            angle: 0.79047,
            coverage: 0.9247,
            action: [
              343.965,
              413.884
            ]
          },
          {
            t: 0.7391,
            agent: [
              266.937,
              390.799
            ],
            block: [
              259.06,
              256.229
            ],
            angle: 0.79047,
            coverage: 0.9247,
            action: [
              343.965,
              413.884
            ]
          },
          {
            t: 0.7536,
            agent: [
              305.468,
              402.352
            ],
            block: [
              259.06,
              256.229
            ],
            angle: 0.79047,
            coverage: 0.9247,
            action: [
              343.965,
              413.884
            ]
          },
          {
            t: 0.7681,
            agent: [
              325.373,
              408.316
            ],
            block: [
              259.06,
              256.229
            ],
            angle: 0.79047,
            coverage: 0.9247,
            action: [
              343.965,
              413.884
            ]
          },
          {
            t: 0.7826,
            agent: [
              335.126,
              411.237
            ],
            block: [
              259.06,
              256.229
            ],
            angle: 0.79047,
            coverage: 0.9247,
            action: [
              343.965,
              413.884
            ]
          },
          {
            t: 0.7971,
            agent: [
              339.793,
              412.635
            ],
            block: [
              259.06,
              256.229
            ],
            angle: 0.79047,
            coverage: 0.9247,
            action: [
              343.965,
              413.884
            ]
          },
          {
            t: 0.8116,
            agent: [
              342.003,
              413.296
            ],
            block: [
              259.06,
              256.229
            ],
            angle: 0.79047,
            coverage: 0.9247,
            action: [
              343.965,
              413.884
            ]
          },
          {
            t: 0.8261,
            agent: [
              343.044,
              413.608
            ],
            block: [
              259.06,
              256.229
            ],
            angle: 0.79047,
            coverage: 0.9247,
            action: [
              343.965,
              413.884
            ]
          },
          {
            t: 0.8406,
            agent: [
              343.533,
              413.754
            ],
            block: [
              259.06,
              256.229
            ],
            angle: 0.79047,
            coverage: 0.9247,
            action: [
              343.965,
              413.884
            ]
          },
          {
            t: 0.8551,
            agent: [
              343.762,
              413.823
            ],
            block: [
              259.06,
              256.229
            ],
            angle: 0.79047,
            coverage: 0.9247,
            action: [
              343.965,
              413.884
            ]
          },
          {
            t: 0.8696,
            agent: [
              343.87,
              413.855
            ],
            block: [
              259.06,
              256.229
            ],
            angle: 0.79047,
            coverage: 0.9247,
            action: [
              343.965,
              413.884
            ]
          },
          {
            t: 0.8841,
            agent: [
              343.92,
              413.87
            ],
            block: [
              259.06,
              256.229
            ],
            angle: 0.79047,
            coverage: 0.9247,
            action: [
              343.965,
              413.884
            ]
          },
          {
            t: 0.8986,
            agent: [
              343.944,
              413.878
            ],
            block: [
              259.06,
              256.229
            ],
            angle: 0.79047,
            coverage: 0.9247,
            action: [
              343.965,
              413.884
            ]
          },
          {
            t: 0.913,
            agent: [
              343.955,
              413.881
            ],
            block: [
              259.06,
              256.229
            ],
            angle: 0.79047,
            coverage: 0.9247,
            action: [
              343.965,
              413.884
            ]
          },
          {
            t: 0.9275,
            agent: [
              337.995,
              379.515
            ],
            block: [
              259.06,
              256.229
            ],
            angle: 0.79047,
            coverage: 0.9247,
            action: [
              323.789,
              297.647
            ]
          },
          {
            t: 0.942,
            agent: [
              331.536,
              342.292
            ],
            block: [
              259.06,
              256.229
            ],
            angle: 0.79047,
            coverage: 0.9247,
            action: [
              323.789,
              297.647
            ]
          },
          {
            t: 0.9565,
            agent: [
              327.669,
              320.009
            ],
            block: [
              259.06,
              256.229
            ],
            angle: 0.79047,
            coverage: 0.9247,
            action: [
              323.789,
              297.647
            ]
          },
          {
            t: 0.971,
            agent: [
              325.665,
              308.457
            ],
            block: [
              259.06,
              256.229
            ],
            angle: 0.79047,
            coverage: 0.9247,
            action: [
              323.789,
              297.647
            ]
          },
          {
            t: 0.9855,
            agent: [
              324.681,
              302.789
            ],
            block: [
              259.06,
              256.229
            ],
            angle: 0.79047,
            coverage: 0.9247,
            action: [
              323.789,
              297.647
            ]
          },
          {
            t: 1,
            agent: [
              312.449,
              301.322
            ],
            block: [
              255.963,
              255.565
            ],
            angle: 0.78741,
            coverage: 0.986,
            action: [
              284.012,
              301.867
            ]
          }
        ]
      },
      claude: {
        agentId: "claude",
        label: "Claude Code",
        policy: "cem_lite",
        color: "#df785d",
        steps: 80,
        finalCoverage: 0.8201,
        frames: [
          {
            t: 0.0,
            agent: [
              407.0,
              209.0
            ],
            block: [
              118.841,
              351.339
            ],
            angle: 4.90606,
            coverage: 0.0,
            action: [
              255.528,
              324.479
            ]
          },
          {
            t: 0.0125,
            agent: [
              362.214,
              243.144
            ],
            block: [
              118.841,
              351.339
            ],
            angle: 4.90606,
            coverage: 0.0016,
            action: [
              197.015,
              380.836
            ]
          },
          {
            t: 0.025,
            agent: [
              296.406,
              296.788
            ],
            block: [
              118.841,
              351.339
            ],
            angle: 4.90606,
            coverage: 0.0016,
            action: [
              249.584,
              369.326
            ]
          },
          {
            t: 0.0375,
            agent: [
              264.173,
              333.57
            ],
            block: [
              118.841,
              351.339
            ],
            angle: 4.90606,
            coverage: 0.0016,
            action: [
              169.012,
              358.397
            ]
          },
          {
            t: 0.05,
            agent: [
              230.913,
              348.934
            ],
            block: [
              118.885,
              351.218
            ],
            angle: 4.95668,
            coverage: 0.0,
            action: [
              119.642,
              512.0
            ]
          },
          {
            t: 0.0625,
            agent: [
              187.39,
              399.876
            ],
            block: [
              112.701,
              362.615
            ],
            angle: 5.4887,
            coverage: 0.0102,
            action: [
              0.0,
              488.573
            ]
          },
          {
            t: 0.075,
            agent: [
              119.593,
              444.345
            ],
            block: [
              80.32,
              380.478
            ],
            angle: 6.10605,
            coverage: 0.0,
            action: [
              50.11,
              455.239
            ]
          },
          {
            t: 0.0875,
            agent: [
              78.144,
              457.379
            ],
            block: [
              71.659,
              381.656
            ],
            angle: 0.30125,
            coverage: 0.0,
            action: [
              0.0,
              429.934
            ]
          },
          {
            t: 0.1,
            agent: [
              47.395,
              450.42
            ],
            block: [
              74.75,
              338.176
            ],
            angle: 0.4901,
            coverage: 0.0,
            action: [
              0.0,
              512.0
            ]
          },
          {
            t: 0.1125,
            agent: [
              24.68,
              465.546
            ],
            block: [
              80.981,
              328.815
            ],
            angle: 0.54511,
            coverage: 0.0,
            action: [
              0.0,
              512.0
            ]
          },
          {
            t: 0.125,
            agent: [
              12.132,
              486.198
            ],
            block: [
              81.041,
              328.719
            ],
            angle: 0.54098,
            coverage: 0.0,
            action: [
              0.0,
              378.667
            ]
          },
          {
            t: 0.1375,
            agent: [
              5.816,
              459.561
            ],
            block: [
              81.073,
              328.668
            ],
            angle: 0.53878,
            coverage: 0.0,
            action: [
              51.098,
              378.053
            ]
          },
          {
            t: 0.15,
            agent: [
              17.864,
              423.385
            ],
            block: [
              92.229,
              312.725
            ],
            angle: 0.56472,
            coverage: 0.0,
            action: [
              85.205,
              184.648
            ]
          },
          {
            t: 0.1625,
            agent: [
              42.855,
              343.749
            ],
            block: [
              143.311,
              258.5
            ],
            angle: 0.7649,
            coverage: 0.0,
            action: [
              0.0,
              391.261
            ]
          },
          {
            t: 0.175,
            agent: [
              37.692,
              331.12
            ],
            block: [
              157.148,
              249.413
            ],
            angle: 0.82953,
            coverage: 0.0003,
            action: [
              233.691,
              260.408
            ]
          },
          {
            t: 0.1875,
            agent: [
              90.795,
              315.708
            ],
            block: [
              187.237,
              225.881
            ],
            angle: 0.86495,
            coverage: 0.0212,
            action: [
              96.071,
              198.973
            ]
          },
          {
            t: 0.2,
            agent: [
              114.336,
              273.238
            ],
            block: [
              221.358,
              193.812
            ],
            angle: 0.84481,
            coverage: 0.1123,
            action: [
              17.14,
              217.855
            ]
          },
          {
            t: 0.2125,
            agent: [
              86.045,
              243.842
            ],
            block: [
              226.163,
              190.994
            ],
            angle: 0.8662,
            coverage: 0.0804,
            action: [
              139.714,
              213.485
            ]
          },
          {
            t: 0.225,
            agent: [
              91.026,
              228.749
            ],
            block: [
              226.163,
              190.994
            ],
            angle: 0.8662,
            coverage: 0.0804,
            action: [
              98.59,
              266.003
            ]
          },
          {
            t: 0.2375,
            agent: [
              99.344,
              236.404
            ],
            block: [
              226.163,
              190.994
            ],
            angle: 0.8662,
            coverage: 0.0804,
            action: [
              262.27,
              106.166
            ]
          },
          {
            t: 0.25,
            agent: [
              148.324,
              202.09
            ],
            block: [
              226.163,
              190.994
            ],
            angle: 0.8662,
            coverage: 0.0804,
            action: [
              76.319,
              196.528
            ]
          },
          {
            t: 0.2625,
            agent: [
              145.275,
              185.833
            ],
            block: [
              226.163,
              190.994
            ],
            angle: 0.8662,
            coverage: 0.0804,
            action: [
              79.484,
              50.968
            ]
          },
          {
            t: 0.275,
            agent: [
              117.639,
              145.43
            ],
            block: [
              226.163,
              190.994
            ],
            angle: 0.8662,
            coverage: 0.0804,
            action: [
              216.076,
              59.754
            ]
          },
          {
            t: 0.2875,
            agent: [
              139.43,
              104.998
            ],
            block: [
              226.163,
              190.994
            ],
            angle: 0.8662,
            coverage: 0.0804,
            action: [
              229.282,
              225.709
            ]
          },
          {
            t: 0.3,
            agent: [
              177.068,
              131.193
            ],
            block: [
              226.163,
              190.994
            ],
            angle: 0.8662,
            coverage: 0.0804,
            action: [
              138.065,
              75.078
            ]
          },
          {
            t: 0.3125,
            agent: [
              175.526,
              128.182
            ],
            block: [
              229.355,
              195.166
            ],
            angle: 0.91059,
            coverage: 0.1136,
            action: [
              182.337,
              99.587
            ]
          },
          {
            t: 0.325,
            agent: [
              173.106,
              113.354
            ],
            block: [
              229.355,
              195.166
            ],
            angle: 0.91059,
            coverage: 0.1136,
            action: [
              259.666,
              253.158
            ]
          },
          {
            t: 0.3375,
            agent: [
              199.492,
              151.529
            ],
            block: [
              235.791,
              214.06
            ],
            angle: 1.01132,
            coverage: 0.2797,
            action: [
              144.708,
              343.713
            ]
          },
          {
            t: 0.35,
            agent: [
              192.982,
              224.03
            ],
            block: [
              255.516,
              260.236
            ],
            angle: 1.35555,
            coverage: 0.3497,
            action: [
              79.133,
              31.551
            ]
          },
          {
            t: 0.3625,
            agent: [
              153.122,
              188.539
            ],
            block: [
              255.516,
              260.236
            ],
            angle: 1.35555,
            coverage: 0.3497,
            action: [
              125.576,
              322.315
            ]
          },
          {
            t: 0.375,
            agent: [
              132.268,
              206.397
            ],
            block: [
              255.516,
              260.236
            ],
            angle: 1.35555,
            coverage: 0.3497,
            action: [
              28.564,
              217.598
            ]
          },
          {
            t: 0.3875,
            agent: [
              98.604,
              224.833
            ],
            block: [
              255.516,
              260.236
            ],
            angle: 1.35555,
            coverage: 0.3497,
            action: [
              265.116,
              197.192
            ]
          },
          {
            t: 0.4,
            agent: [
              136.243,
              217.815
            ],
            block: [
              255.516,
              260.236
            ],
            angle: 1.35555,
            coverage: 0.3497,
            action: [
              134.894,
              327.113
            ]
          },
          {
            t: 0.4125,
            agent: [
              154.567,
              247.028
            ],
            block: [
              255.516,
              260.236
            ],
            angle: 1.35555,
            coverage: 0.3497,
            action: [
              144.942,
              318.114
            ]
          },
          {
            t: 0.425,
            agent: [
              151.448,
              280.307
            ],
            block: [
              256.109,
              262.598
            ],
            angle: 1.12439,
            coverage: 0.5468,
            action: [
              170.864,
              395.551
            ]
          },
          {
            t: 0.4375,
            agent: [
              156.112,
              322.262
            ],
            block: [
              256.556,
              263.824
            ],
            angle: 0.79433,
            coverage: 0.8084,
            action: [
              215.048,
              340.492
            ]
          },
          {
            t: 0.45,
            agent: [
              175.719,
              340.506
            ],
            block: [
              256.389,
              263.856
            ],
            angle: 0.55735,
            coverage: 0.5376,
            action: [
              112.25,
              427.068
            ]
          },
          {
            t: 0.4625,
            agent: [
              163.539,
              368.058
            ],
            block: [
              256.488,
              263.939
            ],
            angle: 0.49801,
            coverage: 0.4775,
            action: [
              226.758,
              427.072
            ]
          },
          {
            t: 0.475,
            agent: [
              175.08,
              395.188
            ],
            block: [
              256.488,
              263.939
            ],
            angle: 0.49801,
            coverage: 0.4775,
            action: [
              241.689,
              446.762
            ]
          },
          {
            t: 0.4875,
            agent: [
              201.901,
              416.982
            ],
            block: [
              256.488,
              263.939
            ],
            angle: 0.49801,
            coverage: 0.4775,
            action: [
              235.055,
              427.953
            ]
          },
          {
            t: 0.5,
            agent: [
              219.117,
              425.959
            ],
            block: [
              256.488,
              263.939
            ],
            angle: 0.49801,
            coverage: 0.4775,
            action: [
              358.575,
              445.397
            ]
          },
          {
            t: 0.5125,
            agent: [
              264.015,
              432.897
            ],
            block: [
              256.488,
              263.939
            ],
            angle: 0.49801,
            coverage: 0.4775,
            action: [
              238.058,
              415.551
            ]
          },
          {
            t: 0.525,
            agent: [
              271.934,
              429.938
            ],
            block: [
              256.488,
              263.939
            ],
            angle: 0.49801,
            coverage: 0.4775,
            action: [
              335.776,
              370.918
            ]
          },
          {
            t: 0.5375,
            agent: [
              287.801,
              410.53
            ],
            block: [
              256.488,
              263.939
            ],
            angle: 0.49801,
            coverage: 0.4775,
            action: [
              172.274,
              397.987
            ]
          },
          {
            t: 0.55,
            agent: [
              260.813,
              400.225
            ],
            block: [
              256.488,
              263.939
            ],
            angle: 0.49801,
            coverage: 0.4775,
            action: [
              189.971,
              335.482
            ]
          },
          {
            t: 0.5625,
            agent: [
              226.882,
              379.721
            ],
            block: [
              256.488,
              263.939
            ],
            angle: 0.49801,
            coverage: 0.4775,
            action: [
              237.574,
              339.297
            ]
          },
          {
            t: 0.575,
            agent: [
              222.195,
              360.527
            ],
            block: [
              256.287,
              263.858
            ],
            angle: 0.6365,
            coverage: 0.6393,
            action: [
              256.732,
              339.506
            ]
          },
          {
            t: 0.5875,
            agent: [
              233.655,
              349.832
            ],
            block: [
              256.248,
              263.83
            ],
            angle: 0.63997,
            coverage: 0.6443,
            action: [
              327.009,
              483.301
            ]
          },
          {
            t: 0.6,
            agent: [
              265.117,
              386.97
            ],
            block: [
              256.248,
              263.83
            ],
            angle: 0.63997,
            coverage: 0.6443,
            action: [
              153.956,
              362.836
            ]
          },
          {
            t: 0.6125,
            agent: [
              242.679,
              394.797
            ],
            block: [
              256.248,
              263.83
            ],
            angle: 0.63997,
            coverage: 0.6443,
            action: [
              245.341,
              331.465
            ]
          },
          {
            t: 0.625,
            agent: [
              230.949,
              373.271
            ],
            block: [
              256.248,
              263.83
            ],
            angle: 0.63997,
            coverage: 0.6443,
            action: [
              199.642,
              360.189
            ]
          },
          {
            t: 0.6375,
            agent: [
              222.073,
              362.329
            ],
            block: [
              256.248,
              263.83
            ],
            angle: 0.63997,
            coverage: 0.6443,
            action: [
              307.131,
              329.352
            ]
          },
          {
            t: 0.65,
            agent: [
              243.713,
              351.16
            ],
            block: [
              256.248,
              263.83
            ],
            angle: 0.63997,
            coverage: 0.6443,
            action: [
              111.886,
              341.228
            ]
          },
          {
            t: 0.6625,
            agent: [
              214.284,
              344.539
            ],
            block: [
              253.528,
              261.77
            ],
            angle: 0.74515,
            coverage: 0.8081,
            action: [
              172.088,
              436.281
            ]
          },
          {
            t: 0.675,
            agent: [
              186.982,
              370.577
            ],
            block: [
              252.252,
              260.608
            ],
            angle: 0.82079,
            coverage: 0.8611,
            action: [
              51.725,
              350.211
            ]
          },
          {
            t: 0.6875,
            agent: [
              142.362,
              374.836
            ],
            block: [
              252.252,
              260.608
            ],
            angle: 0.82079,
            coverage: 0.8611,
            action: [
              177.934,
              387.854
            ]
          },
          {
            t: 0.7,
            agent: [
              137.763,
              376.337
            ],
            block: [
              252.252,
              260.608
            ],
            angle: 0.82079,
            coverage: 0.8611,
            action: [
              157.968,
              479.191
            ]
          },
          {
            t: 0.7125,
            agent: [
              147.82,
              408.221
            ],
            block: [
              252.252,
              260.608
            ],
            angle: 0.82079,
            coverage: 0.8611,
            action: [
              232.506,
              306.127
            ]
          },
          {
            t: 0.725,
            agent: [
              175.095,
              389.544
            ],
            block: [
              252.252,
              260.608
            ],
            angle: 0.82079,
            coverage: 0.8611,
            action: [
              83.246,
              342.65
            ]
          },
          {
            t: 0.7375,
            agent: [
              157.407,
              364.17
            ],
            block: [
              252.252,
              260.608
            ],
            angle: 0.82079,
            coverage: 0.8611,
            action: [
              232.236,
              389.937
            ]
          },
          {
            t: 0.75,
            agent: [
              169.184,
              366.612
            ],
            block: [
              252.698,
              259.993
            ],
            angle: 0.82133,
            coverage: 0.8729,
            action: [
              79.939,
              346.731
            ]
          },
          {
            t: 0.7625,
            agent: [
              151.244,
              363.653
            ],
            block: [
              252.698,
              259.993
            ],
            angle: 0.82133,
            coverage: 0.8729,
            action: [
              192.054,
              303.991
            ]
          },
          {
            t: 0.775,
            agent: [
              153.261,
              343.767
            ],
            block: [
              254.837,
              258.326
            ],
            angle: 0.82659,
            coverage: 0.9214,
            action: [
              122.155,
              377.414
            ]
          },
          {
            t: 0.7875,
            agent: [
              148.7,
              347.049
            ],
            block: [
              259.088,
              255.079
            ],
            angle: 0.83712,
            coverage: 0.9093,
            action: [
              188.509,
              314.197
            ]
          },
          {
            t: 0.8,
            agent: [
              156.956,
              341.147
            ],
            block: [
              259.088,
              255.079
            ],
            angle: 0.83712,
            coverage: 0.9093,
            action: [
              280.095,
              299.96
            ]
          },
          {
            t: 0.8125,
            agent: [
              197.846,
              325.266
            ],
            block: [
              287.853,
              227.455
            ],
            angle: 0.80784,
            coverage: 0.3658,
            action: [
              257.309,
              344.421
            ]
          },
          {
            t: 0.825,
            agent: [
              229.188,
              326.341
            ],
            block: [
              298.529,
              212.609
            ],
            angle: 0.75303,
            coverage: 0.2692,
            action: [
              188.878,
              316.959
            ]
          },
          {
            t: 0.8375,
            agent: [
              223.839,
              325.742
            ],
            block: [
              298.529,
              212.609
            ],
            angle: 0.75303,
            coverage: 0.2692,
            action: [
              360.563,
              265.48
            ]
          },
          {
            t: 0.85,
            agent: [
              259.707,
              306.859
            ],
            block: [
              299.807,
              210.902
            ],
            angle: 0.78774,
            coverage: 0.2671,
            action: [
              340.495,
              303.467
            ]
          },
          {
            t: 0.8625,
            agent: [
              298.935,
              299.115
            ],
            block: [
              299.807,
              210.902
            ],
            angle: 0.78774,
            coverage: 0.2671,
            action: [
              375.918,
              308.064
            ]
          },
          {
            t: 0.875,
            agent: [
              330.644,
              301.425
            ],
            block: [
              299.807,
              210.902
            ],
            angle: 0.78774,
            coverage: 0.2671,
            action: [
              373.699,
              291.863
            ]
          },
          {
            t: 0.8875,
            agent: [
              351.936,
              299.602
            ],
            block: [
              299.807,
              210.902
            ],
            angle: 0.78774,
            coverage: 0.2671,
            action: [
              320.963,
              267.999
            ]
          },
          {
            t: 0.9,
            agent: [
              347.544,
              289.181
            ],
            block: [
              299.807,
              210.902
            ],
            angle: 0.78774,
            coverage: 0.2671,
            action: [
              418.247,
              197.414
            ]
          },
          {
            t: 0.9125,
            agent: [
              364.949,
              258.516
            ],
            block: [
              299.807,
              210.902
            ],
            angle: 0.78774,
            coverage: 0.2671,
            action: [
              314.343,
              223.276
            ]
          },
          {
            t: 0.925,
            agent: [
              357.927,
              237.843
            ],
            block: [
              299.807,
              210.902
            ],
            angle: 0.78774,
            coverage: 0.2671,
            action: [
              201.978,
              221.758
            ]
          },
          {
            t: 0.9375,
            agent: [
              306.098,
              229.208
            ],
            block: [
              290.37,
              228.572
            ],
            angle: 0.95495,
            coverage: 0.2803,
            action: [
              291.393,
              227.792
            ]
          },
          {
            t: 0.95,
            agent: [
              284.323,
              227.013
            ],
            block: [
              275.059,
              240.007
            ],
            angle: 0.97239,
            coverage: 0.396,
            action: [
              121.809,
              142.16
            ]
          },
          {
            t: 0.9625,
            agent: [
              234.739,
              201.778
            ],
            block: [
              256.445,
              245.942
            ],
            angle: 0.82983,
            coverage: 0.6999,
            action: [
              169.412,
              199.404
            ]
          },
          {
            t: 0.975,
            agent: [
              197.234,
              191.574
            ],
            block: [
              249.034,
              247.066
            ],
            angle: 0.7251,
            coverage: 0.8201,
            action: [
              107.338,
              308.025
            ]
          },
          {
            t: 0.9875,
            agent: [
              163.458,
              225.802
            ],
            block: [
              249.034,
              247.066
            ],
            angle: 0.7251,
            coverage: 0.8201,
            action: [
              230.725,
              158.716
            ]
          },
          {
            t: 1.0,
            agent: [
              173.327,
              219.009
            ],
            block: [
              249.034,
              247.066
            ],
            angle: 0.7251,
            coverage: 0.8201
          }
        ]
      },
      kimi: {
        agentId: "kimi",
        label: "Kimi Code",
        policy: "trajectory_lookup",
        color: "#111111",
        steps: 91,
        finalCoverage: 0.9616,
        frames: [
          {
            t: 0.0,
            agent: [
              407.0,
              209.0
            ],
            block: [
              118.841,
              351.339
            ],
            angle: 4.90606,
            coverage: 0.0,
            action: [
              118.593,
              466.889
            ]
          },
          {
            t: 0.011,
            agent: [
              321.726,
              285.251
            ],
            block: [
              118.841,
              351.339
            ],
            angle: 4.90606,
            coverage: 0.0016,
            action: [
              118.593,
              466.889
            ]
          },
          {
            t: 0.022,
            agent: [
              229.367,
              367.837
            ],
            block: [
              116.348,
              350.613
            ],
            angle: 5.09366,
            coverage: 0.0,
            action: [
              118.593,
              466.889
            ]
          },
          {
            t: 0.033,
            agent: [
              174.077,
              417.276
            ],
            block: [
              108.202,
              359.674
            ],
            angle: 5.78347,
            coverage: 0.0,
            action: [
              118.593,
              466.889
            ]
          },
          {
            t: 0.044,
            agent: [
              145.414,
              442.906
            ],
            block: [
              99.52,
              363.319
            ],
            angle: 6.08285,
            coverage: 0.0,
            action: [
              118.593,
              466.889
            ]
          },
          {
            t: 0.0549,
            agent: [
              131.351,
              455.481
            ],
            block: [
              96.464,
              363.815
            ],
            angle: 6.22225,
            coverage: 0.0,
            action: [
              101.006,
              284.015
            ]
          },
          {
            t: 0.0659,
            agent: [
              119.415,
              407.433
            ],
            block: [
              90.869,
              363.844
            ],
            angle: 0.01957,
            coverage: 0.0,
            action: [
              101.006,
              284.015
            ]
          },
          {
            t: 0.0769,
            agent: [
              110.593,
              351.722
            ],
            block: [
              63.479,
              327.108
            ],
            angle: 5.88855,
            coverage: 0.0,
            action: [
              101.006,
              284.015
            ]
          },
          {
            t: 0.0879,
            agent: [
              105.719,
              318.007
            ],
            block: [
              51.669,
              306.874
            ],
            angle: 5.55901,
            coverage: 0.0,
            action: [
              101.006,
              284.015
            ]
          },
          {
            t: 0.0989,
            agent: [
              103.266,
              300.464
            ],
            block: [
              44.2,
              303.691
            ],
            angle: 5.38325,
            coverage: 0.0,
            action: [
              101.006,
              284.015
            ]
          },
          {
            t: 0.1099,
            agent: [
              102.077,
              291.843
            ],
            block: [
              40.162,
              303.802
            ],
            angle: 5.29943,
            coverage: 0.0,
            action: [
              152.778,
              505.835
            ]
          },
          {
            t: 0.1209,
            agent: [
              116.818,
              353.297
            ],
            block: [
              43.938,
              332.06
            ],
            angle: 5.37591,
            coverage: 0.0,
            action: [
              152.778,
              505.835
            ]
          },
          {
            t: 0.1319,
            agent: [
              133.13,
              422.375
            ],
            block: [
              57.025,
              350.183
            ],
            angle: 5.74656,
            coverage: 0.0,
            action: [
              152.778,
              505.835
            ]
          },
          {
            t: 0.1429,
            agent: [
              142.929,
              463.977
            ],
            block: [
              60.548,
              350.077
            ],
            angle: 5.84659,
            coverage: 0.0,
            action: [
              152.778,
              505.835
            ]
          },
          {
            t: 0.1538,
            agent: [
              148.015,
              485.589
            ],
            block: [
              60.928,
              350.047
            ],
            angle: 5.84821,
            coverage: 0.0,
            action: [
              152.778,
              505.835
            ]
          },
          {
            t: 0.1648,
            agent: [
              150.512,
              496.203
            ],
            block: [
              61.13,
              350.03
            ],
            angle: 5.84908,
            coverage: 0.0,
            action: [
              17.603,
              315.365
            ]
          },
          {
            t: 0.1758,
            agent: [
              111.741,
              444.971
            ],
            block: [
              61.65,
              322.572
            ],
            angle: 5.86515,
            coverage: 0.0,
            action: [
              17.603,
              315.365
            ]
          },
          {
            t: 0.1868,
            agent: [
              69.019,
              386.383
            ],
            block: [
              65.726,
              255.319
            ],
            angle: 6.14227,
            coverage: 0.0,
            action: [
              17.603,
              315.365
            ]
          },
          {
            t: 0.1978,
            agent: [
              43.372,
              351.003
            ],
            block: [
              67.11,
              238.838
            ],
            angle: 6.1547,
            coverage: 0.0,
            action: [
              17.603,
              315.365
            ]
          },
          {
            t: 0.2088,
            agent: [
              30.063,
              332.607
            ],
            block: [
              67.11,
              238.838
            ],
            angle: 6.1547,
            coverage: 0.0,
            action: [
              17.603,
              315.365
            ]
          },
          {
            t: 0.2198,
            agent: [
              23.53,
              323.569
            ],
            block: [
              67.11,
              238.838
            ],
            angle: 6.1547,
            coverage: 0.0,
            action: [
              191.257,
              230.265
            ]
          },
          {
            t: 0.2308,
            agent: [
              71.745,
              294.076
            ],
            block: [
              85.638,
              235.415
            ],
            angle: 6.02788,
            coverage: 0.0,
            action: [
              191.257,
              230.265
            ]
          },
          {
            t: 0.2418,
            agent: [
              125.874,
              264.773
            ],
            block: [
              139.189,
              214.836
            ],
            angle: 6.02617,
            coverage: 0.0403,
            action: [
              191.257,
              230.265
            ]
          },
          {
            t: 0.2527,
            agent: [
              158.467,
              247.492
            ],
            block: [
              178.988,
              198.185
            ],
            angle: 6.09792,
            coverage: 0.1328,
            action: [
              191.257,
              230.265
            ]
          },
          {
            t: 0.2637,
            agent: [
              175.397,
              238.58
            ],
            block: [
              198.037,
              190.353
            ],
            angle: 6.14436,
            coverage: 0.2555,
            action: [
              191.257,
              230.265
            ]
          },
          {
            t: 0.2747,
            agent: [
              183.711,
              234.217
            ],
            block: [
              208.515,
              186.234
            ],
            angle: 6.1723,
            coverage: 0.3235,
            action: [
              197.203,
              252.279
            ]
          },
          {
            t: 0.2857,
            agent: [
              189.452,
              238.639
            ],
            block: [
              213.37,
              185.513
            ],
            angle: 6.17136,
            coverage: 0.3411,
            action: [
              197.203,
              252.279
            ]
          },
          {
            t: 0.2967,
            agent: [
              193.244,
              244.7
            ],
            block: [
              216.216,
              185.185
            ],
            angle: 6.163,
            coverage: 0.3428,
            action: [
              197.203,
              252.279
            ]
          },
          {
            t: 0.3077,
            agent: [
              195.272,
              248.455
            ],
            block: [
              217.361,
              185.043
            ],
            angle: 6.15683,
            coverage: 0.3406,
            action: [
              197.203,
              252.279
            ]
          },
          {
            t: 0.3187,
            agent: [
              196.281,
              250.425
            ],
            block: [
              217.921,
              184.971
            ],
            angle: 6.15287,
            coverage: 0.3388,
            action: [
              197.203,
              252.279
            ]
          },
          {
            t: 0.3297,
            agent: [
              196.767,
              251.396
            ],
            block: [
              218.174,
              184.938
            ],
            angle: 6.15085,
            coverage: 0.3379,
            action: [
              195.248,
              241.31
            ]
          },
          {
            t: 0.3407,
            agent: [
              196.42,
              248.618
            ],
            block: [
              218.21,
              184.933
            ],
            angle: 6.15055,
            coverage: 0.3378,
            action: [
              195.248,
              241.31
            ]
          },
          {
            t: 0.3516,
            agent: [
              195.902,
              245.326
            ],
            block: [
              218.21,
              184.933
            ],
            angle: 6.15055,
            coverage: 0.3378,
            action: [
              195.248,
              241.31
            ]
          },
          {
            t: 0.3626,
            agent: [
              195.579,
              243.328
            ],
            block: [
              218.21,
              184.933
            ],
            angle: 6.15055,
            coverage: 0.3378,
            action: [
              195.248,
              241.31
            ]
          },
          {
            t: 0.3736,
            agent: [
              195.408,
              242.287
            ],
            block: [
              218.21,
              184.933
            ],
            angle: 6.15055,
            coverage: 0.3378,
            action: [
              195.248,
              241.31
            ]
          },
          {
            t: 0.3846,
            agent: [
              195.324,
              241.775
            ],
            block: [
              218.21,
              184.933
            ],
            angle: 6.15055,
            coverage: 0.3378,
            action: [
              107.959,
              262.92
            ]
          },
          {
            t: 0.3956,
            agent: [
              169.475,
              247.919
            ],
            block: [
              218.21,
              184.933
            ],
            angle: 6.15055,
            coverage: 0.3378,
            action: [
              107.959,
              262.92
            ]
          },
          {
            t: 0.4066,
            agent: [
              141.502,
              254.723
            ],
            block: [
              218.21,
              184.933
            ],
            angle: 6.15055,
            coverage: 0.3378,
            action: [
              107.959,
              262.92
            ]
          },
          {
            t: 0.4176,
            agent: [
              124.759,
              258.811
            ],
            block: [
              218.21,
              184.933
            ],
            angle: 6.15055,
            coverage: 0.3378,
            action: [
              107.959,
              262.92
            ]
          },
          {
            t: 0.4286,
            agent: [
              116.08,
              260.933
            ],
            block: [
              218.21,
              184.933
            ],
            angle: 6.15055,
            coverage: 0.3378,
            action: [
              107.959,
              262.92
            ]
          },
          {
            t: 0.4396,
            agent: [
              111.822,
              261.974
            ],
            block: [
              218.21,
              184.933
            ],
            angle: 6.15055,
            coverage: 0.3378,
            action: [
              226.743,
              95.513
            ]
          },
          {
            t: 0.4505,
            agent: [
              144.903,
              212.976
            ],
            block: [
              218.21,
              184.933
            ],
            angle: 6.15055,
            coverage: 0.3378,
            action: [
              226.743,
              95.513
            ]
          },
          {
            t: 0.4615,
            agent: [
              181.977,
              159.602
            ],
            block: [
              246.799,
              184.458
            ],
            angle: 0.0939,
            coverage: 0.2649,
            action: [
              226.743,
              95.513
            ]
          },
          {
            t: 0.4725,
            agent: [
              204.293,
              127.62
            ],
            block: [
              246.799,
              184.458
            ],
            angle: 0.0939,
            coverage: 0.2649,
            action: [
              226.743,
              95.513
            ]
          },
          {
            t: 0.4835,
            agent: [
              215.885,
              111.035
            ],
            block: [
              246.799,
              184.458
            ],
            angle: 0.0939,
            coverage: 0.2649,
            action: [
              226.743,
              95.513
            ]
          },
          {
            t: 0.4945,
            agent: [
              221.577,
              102.896
            ],
            block: [
              246.799,
              184.458
            ],
            angle: 0.0939,
            coverage: 0.2649,
            action: [
              327.648,
              273.935
            ]
          },
          {
            t: 0.5055,
            agent: [
              254.139,
              151.752
            ],
            block: [
              246.799,
              184.458
            ],
            angle: 0.0939,
            coverage: 0.2649,
            action: [
              327.648,
              273.935
            ]
          },
          {
            t: 0.5165,
            agent: [
              287.744,
              207.044
            ],
            block: [
              251.797,
              209.771
            ],
            angle: 0.30007,
            coverage: 0.3802,
            action: [
              327.648,
              273.935
            ]
          },
          {
            t: 0.5275,
            agent: [
              307.697,
              240.379
            ],
            block: [
              254.511,
              227.07
            ],
            angle: 0.49911,
            coverage: 0.5175,
            action: [
              327.648,
              273.935
            ]
          },
          {
            t: 0.5385,
            agent: [
              318.011,
              257.703
            ],
            block: [
              255.293,
              232.837
            ],
            angle: 0.58304,
            coverage: 0.6003,
            action: [
              327.648,
              273.935
            ]
          },
          {
            t: 0.5495,
            agent: [
              323.066,
              266.212
            ],
            block: [
              255.293,
              232.837
            ],
            angle: 0.58304,
            coverage: 0.6003,
            action: [
              281.563,
              479.133
            ]
          },
          {
            t: 0.5604,
            agent: [
              311.859,
              330.96
            ],
            block: [
              255.293,
              232.837
            ],
            angle: 0.58304,
            coverage: 0.6003,
            action: [
              281.563,
              479.133
            ]
          },
          {
            t: 0.5714,
            agent: [
              298.247,
              398.604
            ],
            block: [
              255.293,
              232.837
            ],
            angle: 0.58304,
            coverage: 0.6003,
            action: [
              281.563,
              479.133
            ]
          },
          {
            t: 0.5824,
            agent: [
              289.952,
              438.852
            ],
            block: [
              255.293,
              232.837
            ],
            angle: 0.58304,
            coverage: 0.6003,
            action: [
              281.563,
              479.133
            ]
          },
          {
            t: 0.5934,
            agent: [
              285.625,
              459.672
            ],
            block: [
              255.293,
              232.837
            ],
            angle: 0.58304,
            coverage: 0.6003,
            action: [
              281.563,
              479.133
            ]
          },
          {
            t: 0.6044,
            agent: [
              283.497,
              469.879
            ],
            block: [
              255.293,
              232.837
            ],
            angle: 0.58304,
            coverage: 0.6003,
            action: [
              216.625,
              341.163
            ]
          },
          {
            t: 0.6154,
            agent: [
              263.276,
              433.972
            ],
            block: [
              255.293,
              232.837
            ],
            angle: 0.58304,
            coverage: 0.6003,
            action: [
              216.625,
              341.163
            ]
          },
          {
            t: 0.6264,
            agent: [
              241.997,
              392.102
            ],
            block: [
              255.293,
              232.837
            ],
            angle: 0.58304,
            coverage: 0.6003,
            action: [
              216.625,
              341.163
            ]
          },
          {
            t: 0.6374,
            agent: [
              229.32,
              366.742
            ],
            block: [
              255.293,
              232.837
            ],
            angle: 0.58304,
            coverage: 0.6003,
            action: [
              216.625,
              341.163
            ]
          },
          {
            t: 0.6484,
            agent: [
              222.759,
              353.542
            ],
            block: [
              255.293,
              232.837
            ],
            angle: 0.58304,
            coverage: 0.6003,
            action: [
              216.625,
              341.163
            ]
          },
          {
            t: 0.6593,
            agent: [
              219.542,
              347.054
            ],
            block: [
              255.293,
              232.837
            ],
            angle: 0.58304,
            coverage: 0.6003,
            action: [
              0.0,
              463.183
            ]
          },
          {
            t: 0.6703,
            agent: [
              153.952,
              380.023
            ],
            block: [
              255.474,
              232.753
            ],
            angle: 0.61075,
            coverage: 0.5998,
            action: [
              0.0,
              463.183
            ]
          },
          {
            t: 0.6813,
            agent: [
              83.851,
              417.625
            ],
            block: [
              255.474,
              232.753
            ],
            angle: 0.61075,
            coverage: 0.5998,
            action: [
              0.0,
              463.183
            ]
          },
          {
            t: 0.6923,
            agent: [
              41.979,
              440.323
            ],
            block: [
              255.474,
              232.753
            ],
            angle: 0.61075,
            coverage: 0.5998,
            action: [
              0.0,
              463.183
            ]
          },
          {
            t: 0.7033,
            agent: [
              20.288,
              452.124
            ],
            block: [
              255.474,
              232.753
            ],
            angle: 0.61075,
            coverage: 0.5998,
            action: [
              0.0,
              463.183
            ]
          },
          {
            t: 0.7143,
            agent: [
              9.649,
              457.921
            ],
            block: [
              255.474,
              232.753
            ],
            angle: 0.61075,
            coverage: 0.5998,
            action: [
              215.853,
              160.998
            ]
          },
          {
            t: 0.7253,
            agent: [
              68.376,
              371.351
            ],
            block: [
              255.474,
              232.753
            ],
            angle: 0.61075,
            coverage: 0.5998,
            action: [
              215.853,
              160.998
            ]
          },
          {
            t: 0.7363,
            agent: [
              135.088,
              275.895
            ],
            block: [
              255.474,
              232.753
            ],
            angle: 0.61075,
            coverage: 0.5998,
            action: [
              215.853,
              160.998
            ]
          },
          {
            t: 0.7473,
            agent: [
              175.333,
              218.584
            ],
            block: [
              255.474,
              232.753
            ],
            angle: 0.61075,
            coverage: 0.5998,
            action: [
              215.853,
              160.998
            ]
          },
          {
            t: 0.7582,
            agent: [
              196.251,
              188.843
            ],
            block: [
              257.076,
              233.443
            ],
            angle: 0.62356,
            coverage: 0.6007,
            action: [
              215.853,
              160.998
            ]
          },
          {
            t: 0.7692,
            agent: [
              206.526,
              174.244
            ],
            block: [
              257.076,
              233.443
            ],
            angle: 0.62356,
            coverage: 0.6007,
            action: [
              279.598,
              250.382
            ]
          },
          {
            t: 0.7802,
            agent: [
              230.297,
              193.679
            ],
            block: [
              257.076,
              233.443
            ],
            angle: 0.62356,
            coverage: 0.6007,
            action: [
              279.598,
              250.382
            ]
          },
          {
            t: 0.7912,
            agent: [
              253.043,
              218.992
            ],
            block: [
              253.014,
              236.499
            ],
            angle: 0.58796,
            coverage: 0.6723,
            action: [
              279.598,
              250.382
            ]
          },
          {
            t: 0.8022,
            agent: [
              266.362,
              234.567
            ],
            block: [
              249.679,
              241.456
            ],
            angle: 0.58689,
            coverage: 0.7598,
            action: [
              279.598,
              250.382
            ]
          },
          {
            t: 0.8132,
            agent: [
              273.214,
              242.717
            ],
            block: [
              248.694,
              243.962
            ],
            angle: 0.59979,
            coverage: 0.7922,
            action: [
              279.598,
              250.382
            ]
          },
          {
            t: 0.8242,
            agent: [
              276.564,
              246.732
            ],
            block: [
              248.299,
              245.278
            ],
            angle: 0.60916,
            coverage: 0.8074,
            action: [
              374.022,
              358.332
            ]
          },
          {
            t: 0.8352,
            agent: [
              306.085,
              280.576
            ],
            block: [
              247.693,
              251.693
            ],
            angle: 0.68311,
            coverage: 0.8707,
            action: [
              374.022,
              358.332
            ]
          },
          {
            t: 0.8462,
            agent: [
              337.082,
              316.059
            ],
            block: [
              247.692,
              251.693
            ],
            angle: 0.68312,
            coverage: 0.8707,
            action: [
              374.022,
              358.332
            ]
          },
          {
            t: 0.8571,
            agent: [
              355.541,
              337.184
            ],
            block: [
              247.692,
              251.693
            ],
            angle: 0.68312,
            coverage: 0.8707,
            action: [
              374.022,
              358.332
            ]
          },
          {
            t: 0.8681,
            agent: [
              365.093,
              348.115
            ],
            block: [
              247.692,
              251.693
            ],
            angle: 0.68312,
            coverage: 0.8707,
            action: [
              374.022,
              358.332
            ]
          },
          {
            t: 0.8791,
            agent: [
              369.776,
              353.474
            ],
            block: [
              247.692,
              251.693
            ],
            angle: 0.68312,
            coverage: 0.8707,
            action: [
              125.659,
              372.143
            ]
          },
          {
            t: 0.8901,
            agent: [
              298.584,
              360.122
            ],
            block: [
              247.692,
              251.693
            ],
            angle: 0.68312,
            coverage: 0.8707,
            action: [
              125.659,
              372.143
            ]
          },
          {
            t: 0.9011,
            agent: [
              220.11,
              365.76
            ],
            block: [
              247.692,
              251.693
            ],
            angle: 0.68312,
            coverage: 0.8707,
            action: [
              125.659,
              372.143
            ]
          },
          {
            t: 0.9121,
            agent: [
              172.997,
              368.979
            ],
            block: [
              247.884,
              251.448
            ],
            angle: 0.69447,
            coverage: 0.8737,
            action: [
              125.659,
              372.143
            ]
          },
          {
            t: 0.9231,
            agent: [
              148.549,
              370.621
            ],
            block: [
              247.884,
              251.448
            ],
            angle: 0.69447,
            coverage: 0.8737,
            action: [
              125.659,
              372.143
            ]
          },
          {
            t: 0.9341,
            agent: [
              136.548,
              371.42
            ],
            block: [
              247.884,
              251.448
            ],
            angle: 0.69447,
            coverage: 0.8737,
            action: [
              175.141,
              218.431
            ]
          },
          {
            t: 0.9451,
            agent: [
              145.43,
              326.354
            ],
            block: [
              247.884,
              251.448
            ],
            angle: 0.69447,
            coverage: 0.8737,
            action: [
              175.141,
              218.431
            ]
          },
          {
            t: 0.956,
            agent: [
              158.553,
              277.31
            ],
            block: [
              247.884,
              251.448
            ],
            angle: 0.69447,
            coverage: 0.8737,
            action: [
              175.141,
              218.431
            ]
          },
          {
            t: 0.967,
            agent: [
              166.757,
              247.927
            ],
            block: [
              247.884,
              251.448
            ],
            angle: 0.69447,
            coverage: 0.8737,
            action: [
              175.141,
              218.431
            ]
          },
          {
            t: 0.978,
            agent: [
              171.072,
              232.691
            ],
            block: [
              250.704,
              252.106
            ],
            angle: 0.72683,
            coverage: 0.9103,
            action: [
              175.141,
              218.431
            ]
          },
          {
            t: 0.989,
            agent: [
              173.202,
              225.214
            ],
            block: [
              250.863,
              252.17
            ],
            angle: 0.72844,
            coverage: 0.9125,
            action: [
              181.183,
              245.711
            ]
          },
          {
            t: 1.0,
            agent: [
              176.011,
              229.699
            ],
            block: [
              254.05,
              254.371
            ],
            angle: 0.75253,
            coverage: 0.9616
          }
        ]
      }
    }
  }
];
