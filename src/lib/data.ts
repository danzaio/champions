export interface LocalizedString {
  en: string;
  cn: string;
}

export interface Ability {
  name: LocalizedString;
  features: {
    en: string;
    cn: string;
    keybind?: string;
  }[];
}

export interface Champion {
  id: string;
  name: string;
  displayName: LocalizedString;
  tag: 'HOT' | 'NEW' | 'UPD' | null;
  role: 'adc' | 'support' | 'mid' | 'jungle' | 'top';
  difficulty: 1 | 2 | 3;
  color: string;
  icon: string;
  description: LocalizedString;
  abilities: {
    Q: Ability;
    W: Ability;
    E: Ability;
    R: Ability;
  };
  specialMechanics: {
    name: LocalizedString;
    description: LocalizedString;
  }[];
  keybinds: Record<string, {
    key: string;
    label: LocalizedString;
    defaultEnabled: boolean;
  }>;
}

export const CHAMPIONS: Champion[] = [
  {
    "id": "ezreal",
    "name": "Ezreal",
    "displayName": { "en": "EZREAL", "cn": "伊泽瑞尔" },
    "tag": "HOT",
    "role": "adc",
    "difficulty": 2,
    "color": "#00D8FF",
    "icon": "ezreal.svg",
    "description": { "en": "The Prodigal Explorer - High Performance Script", "cn": "探险家 - 高性能脚本" },
    "abilities": {
      "Q": {
        "name": { "en": "Mystic Shot", "cn": "秘术射击" },
        "features": [
          { "en": "Toggle Auto Q", "cn": "开关自动 Q", "keybind": "G" },
          { "en": "Disable Under Turret", "cn": "禁止塔下自动 Q" },
          { "en": "Adjustable Range (600-1200)", "cn": "射程调节 (600-1200)" }
        ]
      },
      "W": {
        "name": { "en": "Essence Flux", "cn": "精华跃动" },
        "features": [
          { "en": "Smart Harass: Only if Q/AA can proc", "cn": "智能骚扰: 仅在 Q/普攻可触发时 W" },
          { "en": "Use on Towers/Inhibitors", "cn": "对塔/水晶使用" },
          { "en": "Structure Check: Only in AA Range", "cn": "建筑检查: 仅在普攻射程内" },
          { "en": "Combo: Only if Q hit or AA range", "cn": "连招: 仅在 Q 可命中或普攻射程内" }
        ]
      },
      "E": {
        "name": { "en": "Arcane Shift", "cn": "奥术跃迁" },
        "features": [
          { "en": "Prevent E Under Turret", "cn": "防止 E 入塔" },
          { "en": "Prioritize Towards Allies", "cn": "优先向友军位移" },
          { "en": "Anti-Dash System", "cn": "反突进系统" }
        ]
      },
      "R": {
        "name": { "en": "Trueshot Barrage", "cn": "精准弹幕" },
        "features": [
          { "en": "Semi-Manual Key", "cn": "半手动按键", "keybind": "T" },
          { "en": "Modes: Off/Killable/Below HP%/Always", "cn": "模式: 关闭/击杀/血量/总是" },
          { "en": "Max Range (1000-5000)", "cn": "最大射程 (1000-5000)" }
        ]
      }
    },
    "specialMechanics": [
      { "name": { "en": "W Pending State", "cn": "W 挂起状态" }, "description": { "en": "Target lock during W flight to guarantee proc", "cn": "W 飞行期间锁定目标以确保触发" } },
      { "name": { "en": "Safe Escape Calculator", "cn": "安全逃逸计算器" }, "description": { "en": "Calculates safest escape path using E", "cn": "使用 E 计算最安全的逃逸路径" } }
    ],
    "keybinds": {
      "combo": { "key": "Space", "label": { "en": "Full Combo", "cn": "完整连招" }, "defaultEnabled": true },
      "harass": { "key": "V", "label": { "en": "Harass", "cn": "骚扰" }, "defaultEnabled": true }
    }
  },
  {
    "id": "blitzcrank",
    "name": "Blitzcrank",
    "displayName": { "en": "BLITZCRANK", "cn": "布里茨" },
    "tag": "HOT",
    "role": "support",
    "difficulty": 2,
    "color": "#FFD700",
    "icon": "placeholder.svg",
    "description": { "en": "The Great Steam Golem - Overhauled v11 Standard", "cn": "蒸汽机器人 - 全面改版 v11 标准" },
    "abilities": {
      "Q": {
        "name": { "en": "Rocket Grab", "cn": "机械飞爪" },
        "features": [
          { "en": "Auto on CC", "cn": "自动命中控制目标" },
          { "en": "Auto Interrupt Spells", "cn": "自动打断引导技能" },
          { "en": "Anti-Gapclose & Anti-Melee", "cn": "自动防突进 & 防近战" },
          { "en": "Semi-Auto Key", "cn": "半自动 Q 按键", "keybind": "T" }
        ]
      },
      "W": {
        "name": { "en": "Overdrive", "cn": "过载运转" },
        "features": [
          { "en": "Flee Key Integration", "cn": "逃跑按键集成" }
        ]
      },
      "E": {
        "name": { "en": "Power Fist", "cn": "能量铁拳" },
        "features": [
          { "en": "Auto E After Q Lands", "cn": "Q 命中后自动接 E" }
        ]
      },
      "R": {
        "name": { "en": "Static Field", "cn": "静电力场" },
        "features": [
          { "en": "Killsteal Mode", "cn": "自动击杀模式" },
          { "en": "AoE in Combo", "cn": "连招中自动 AoE" }
        ]
      }
    },
    "specialMechanics": [
      { "name": { "en": "Smart Hook Targeting", "cn": "智能钩子目标选择" }, "description": { "en": "Prioritizes easiest to hit targets based on prediction hitchance", "cn": "根据预测命中率优先选择最容易命中的目标" } }
    ],
    "keybinds": {
      "combo": { "key": "Space", "label": { "en": "Full Combo", "cn": "完整连招" }, "defaultEnabled": true },
      "flee": { "key": "G", "label": { "en": "Flee", "cn": "逃跑" }, "defaultEnabled": true }
    }
  },
  {
    "id": "caitlyn",
    "name": "Caitlyn",
    "displayName": { "en": "CAITLYN", "cn": "凯特琳" },
    "tag": "UPD",
    "role": "adc",
    "difficulty": 2,
    "color": "#8A2BE2",
    "icon": "placeholder.svg",
    "description": { "en": "The Sheriff of Piltover - High Performance Script", "cn": "皮城女警 - 高性能脚本" },
    "abilities": {
      "Q": {
        "name": { "en": "Piltover Peacemaker", "cn": "和平使者" },
        "features": [
          { "en": "Use on Traps/CC", "cn": "对陷阱/被控目标使用" },
          { "en": "Use after E Net hits", "cn": "E 绳网命中后自动接 Q" }
        ]
      },
      "W": {
        "name": { "en": "Yordle Snap Trap", "cn": "约德尔诱捕器" },
        "features": [
          { "en": "Auto on CC/Zhonya/Teleport", "cn": "自动对被控/中亚/传送目标放夹" },
          { "en": "Anti-Gapclose Traps", "cn": "防突进自动放夹" }
        ]
      },
      "E": {
        "name": { "en": "90 Caliber Net", "cn": "90口径绳网" },
        "features": [
          { "en": "Anti-Gapclose & Anti-Melee", "cn": "自动防突进 & 防近战" },
          { "en": "Disable Under Turret", "cn": "禁止塔下反向位移" }
        ]
      },
      "R": {
        "name": { "en": "Ace in the Hole", "cn": "让子弹飞" },
        "features": [
          { "en": "Auto Killsteal", "cn": "自动大招收割" },
          { "en": "Blocker Detection", "cn": "自动检测大招是否会被挡" },
          { "en": "Semi-Auto Key", "cn": "半自动 R 按键", "keybind": "T" }
        ]
      }
    },
    "specialMechanics": [
      { "name": { "en": "R Killable Indicator", "cn": "R 可击杀提示" }, "description": { "en": "Displays clear indicator when targets are within execute range", "cn": "当目标进入斩杀线时显示清晰提示" } }
    ],
    "keybinds": {
      "combo": { "key": "Space", "label": { "en": "Full Combo", "cn": "完整连招" }, "defaultEnabled": true }
    }
  },
  {
    "id": "cassiopeia",
    "name": "Cassiopeia",
    "displayName": { "en": "CASSIOPEIA", "cn": "卡西奥佩娅" },
    "tag": null,
    "role": "mid",
    "difficulty": 3,
    "color": "#4CAF50",
    "icon": "placeholder.svg",
    "description": { "en": "The Serpent's Embrace - Custom R Prediction", "cn": "魔蛇之拥 - 定制 R 预测逻辑" },
    "abilities": {
      "Q": {
        "name": { "en": "Noxious Blast", "cn": "瘟毒爆炸" },
        "features": [
          { "en": "Auto Q Toggle", "cn": "自动 Q 骚扰开关", "keybind": "G" },
          { "en": "Disable Under Turret", "cn": "禁止塔下自动 Q" }
        ]
      },
      "W": {
        "name": { "en": "Miasma", "cn": "剧毒迷雾" },
        "features": [
          { "en": "Anti-Gapclose Mode", "cn": "防突进模式" },
          { "en": "AoE Priority logic", "cn": "优先群体命中逻辑" }
        ]
      },
      "E": {
        "name": { "en": "Twin Fang", "cn": "双生毒牙" },
        "features": [
          { "en": "Only on Poisoned Option", "cn": "仅对中毒目标选项" },
          { "en": "Block AA in Combo", "cn": "连招中禁用普攻优先 E" }
        ]
      },
      "R": {
        "name": { "en": "Petrifying Gaze", "cn": "石化凝视" },
        "features": [
          { "en": "Facing-Direction Prediction", "cn": "面向检测预测逻辑" },
          { "en": "Semi-Auto & Flash-R", "cn": "半手动 R & 闪现 R", "keybind": "T" }
        ]
      }
    },
    "specialMechanics": [
      { "name": { "en": "Poison Tracker", "cn": "中毒状态追踪" }, "description": { "en": "Perfect E resets by tracking target poison duration", "cn": "通过追踪目标中毒持续时间实现完美的 E 重置" } }
    ],
    "keybinds": {
      "combo": { "key": "Space", "label": { "en": "Full Combo", "cn": "完整连招" }, "defaultEnabled": true },
      "farm": { "key": "J", "label": { "en": "Cycle Farm Mode", "cn": "循环清兵模式" }, "defaultEnabled": true }
    }
  },
  {
    "id": "corki",
    "name": "Corki",
    "displayName": { "en": "CORKI", "cn": "库奇" },
    "tag": null,
    "role": "adc",
    "difficulty": 2,
    "color": "#FF9800",
    "icon": "placeholder.svg",
    "description": { "en": "The Daring Bombardier - Hybrid Damage Specialist", "cn": "英勇投弹手 - 混合伤害专家" },
    "abilities": {
      "Q": {
        "name": { "en": "Phosphorus Bomb", "cn": "磷光炸弹" },
        "features": [
          { "en": "Farm Q Mode", "cn": "Q 清线模式" },
          { "en": "Auto Killsteal", "cn": "自动 Q 抢头" }
        ]
      },
      "W": {
        "name": { "en": "Valkyrie", "cn": "瓦尔基里俯冲" },
        "features": [
          { "en": "Defensive Dash Logic", "cn": "防御性 W 位移逻辑" },
          { "en": "Anti-Melee / Anti-Gapclose", "cn": "反近战 / 反突进" }
        ]
      },
      "E": {
        "name": { "en": "Gatling Gun", "cn": "格林快枪" },
        "features": [
          { "en": "Auto E in Combo", "cn": "连招中自动使用 E" }
        ]
      },
      "R": {
        "name": { "en": "Missile Barrage", "cn": "火箭轰击" },
        "features": [
          { "en": "Big Rocket Smart KS", "cn": "强化大飞弹智能抢头" },
          { "en": "Farm R with Stacks", "cn": "根据层数自动 R 清线" }
        ]
      }
    },
    "specialMechanics": [
      { "name": { "en": "Package Tracker", "cn": "特别包裹追踪" }, "description": { "en": "Optimized logic for empowered W usage", "cn": "为强化位移优化的使用逻辑" } }
    ],
    "keybinds": {
      "combo": { "key": "Space", "label": { "en": "Full Combo", "cn": "完整连招" }, "defaultEnabled": true }
    }
  },
  {
    "id": "jinx",
    "name": "Jinx",
    "displayName": { "en": "JINX", "cn": "金克丝" },
    "tag": "HOT",
    "role": "adc",
    "difficulty": 2,
    "color": "#FF69B4",
    "icon": "placeholder.svg",
    "description": { "en": "The Loose Cannon - High Performance Script", "cn": "暴走萝莉 - 高性能脚本" },
    "abilities": {
      "Q": {
        "name": { "en": "Switcheroo!", "cn": "枪炮交响曲" },
        "features": [
          { "en": "Smart Weapon Switching", "cn": "智能武器切换" },
          { "en": "Rocket Bonus Range Slider", "cn": "火箭炮切换射程调节" },
          { "en": "AS Stack Logic", "cn": "攻速层数最优化逻辑" }
        ]
      },
      "W": {
        "name": { "en": "Zap!", "cn": "震荡电磁波" },
        "features": [
          { "en": "Smart TTK Check", "cn": "智能击杀时间检查" },
          { "en": "Only Outside AA Range", "cn": "仅在普攻范围外使用" },
          { "en": "Semi-Manual Key", "cn": "半手动按键", "keybind": "G" }
        ]
      },
      "E": {
        "name": { "en": "Flame Chompers!", "cn": "嚼火者手雷" },
        "features": [
          { "en": "Predictive Pathing", "cn": "预判敌人逃跑路径" },
          { "en": "Auto on CC / Intercept", "cn": "自动连招 / 拦截突进" }
        ]
      },
      "R": {
        "name": { "en": "Death Rocket!", "cn": "超究极死神飞弹" },
        "features": [
          { "en": "Auto Execution", "cn": "自动斩杀收割" },
          { "en": "Minimap Range Drawing", "cn": "小地图射程显示" },
          { "en": "Semi-Manual Key", "cn": "半手动按键", "keybind": "T" }
        ]
      }
    },
    "specialMechanics": [
      { "name": { "en": "Get Excited Tracker", "cn": "被动兴奋追踪" }, "description": { "en": "Visual cue and positioning optimization during passive", "cn": "被动触发时的视觉提示与走位优化" } }
    ],
    "keybinds": {
      "combo": { "key": "Space", "label": { "en": "Full Combo", "cn": "完整连招" }, "defaultEnabled": true }
    }
  },
  {
    "id": "kaisa",
    "name": "Kai'Sa",
    "displayName": { "en": "KAI'SA", "cn": "卡莎" },
    "tag": "HOT",
    "role": "adc",
    "difficulty": 2,
    "color": "#9C27B0",
    "icon": "placeholder.svg",
    "description": { "en": "Daughter of the Void - Plasma Execution Specialist", "cn": "虚空之女 - 电浆斩杀专家" },
    "abilities": {
      "Q": {
        "name": { "en": "Icathian Rain", "cn": "艾卡西亚暴雨" },
        "features": [
          { "en": "Isolation Check", "cn": "孤立无援状态检测" },
          { "en": "AA Reset / Post-AA", "cn": "普攻重置 / 攻击后使用" }
        ]
      },
      "W": {
        "name": { "en": "Void Seeker", "cn": "虚空索敌" },
        "features": [
          { "en": "Initiate Mode (Long Range)", "cn": "远距离起手模式" },
          { "en": "Auto on CC / KS", "cn": "自动对被控目标 / 抢头" }
        ]
      },
      "E": {
        "name": { "en": "Supercharge", "cn": "充能" },
        "features": [
          { "en": "Anti-Melee / Anti-Gapclose", "cn": "自动防近战 / 防突进" },
          { "en": "Q-E Invisibility Combo", "cn": "Q-E 隐身动画连招" },
          { "en": "E Dodge System", "cn": "E 自动技能躲避" }
        ]
      },
      "R": {
        "name": { "en": "Killer Instinct", "cn": "猎手本能" },
        "features": [
          { "en": "Auto R Killable", "cn": "自动大招飞杀" },
          { "en": "Dodge Spells with R", "cn": "使用大招位移躲避技能" }
        ]
      }
    },
    "specialMechanics": [
      { "name": { "en": "Evolution Detection", "cn": "进化状态检测" }, "description": { "en": "Automatically adjusts logic based on evolved abilities", "cn": "根据技能进化状态自动调整脚本逻辑" } }
    ],
    "keybinds": {
      "combo": { "key": "Space", "label": { "en": "Full Combo", "cn": "完整连招" }, "defaultEnabled": true }
    }
  },
  {
    "id": "kogmaw",
    "name": "Kog'Maw",
    "displayName": { "en": "KOG'MAW", "cn": "大嘴" },
    "tag": null,
    "role": "adc",
    "difficulty": 2,
    "color": "#8BC34A",
    "icon": "placeholder.svg",
    "description": { "en": "The Mouth of the Abyss - Hypercarry Artillery", "cn": "深渊巨口 - 后期大核炮台" },
    "abilities": {
      "Q": {
        "name": { "en": "Caustic Spittle", "cn": "腐蚀唾液" },
        "features": [
          { "en": "Combo & Harass", "cn": "连招与骚扰使用" }
        ]
      },
      "W": {
        "name": { "en": "Bio-Arcane Barrage", "cn": "生化弹幕" },
        "features": [
          { "en": "W Status Visualizer", "cn": "W 持续时间视觉指示" },
          { "en": "Farm Mode integration", "cn": "清兵模式集成" }
        ]
      },
      "E": {
        "name": { "en": "Void Ooze", "cn": "虚空淤泥" },
        "features": [
          { "en": "Anti-Gapclose Logic", "cn": "防突进减速逻辑" }
        ]
      },
      "R": {
        "name": { "en": "Living Artillery", "cn": "活体大炮" },
        "features": [
          { "en": "Smart KS Logic", "cn": "智能大招抢头" },
          { "en": "Stack Management", "cn": "法力消耗叠层管理" },
          { "en": "Only on CC Option", "cn": "仅对被控目标选项" }
        ]
      }
    },
    "specialMechanics": [
      { "name": { "en": "Max DPS Orbwalking", "cn": "最高输出走砍" }, "description": { "en": "Optimized for extreme attack speeds during W", "cn": "为 W 期间的极高攻速优化的走砍逻辑" } }
    ],
    "keybinds": {
      "combo": { "key": "Space", "label": { "en": "Full Combo", "cn": "完整连招" }, "defaultEnabled": true }
    }
  },
  {
    "id": "leesin",
    "name": "Lee Sin",
    "displayName": { "en": "LEE SIN", "cn": "李青" },
    "tag": "HOT",
    "role": "jungle",
    "difficulty": 3,
    "color": "#FF0000",
    "icon": "placeholder.svg",
    "description": { "en": "The Blind Monk - High Performance Mechanics", "cn": "盲僧 - 高性能操作脚本" },
    "abilities": {
      "Q": {
        "name": { "en": "Sonic Wave", "cn": "天音波" },
        "features": [
          { "en": "Passive Weaving", "cn": "被动衔接优化" },
          { "en": "Smite-Q Combo", "cn": "惩戒 Q 连招" },
          { "en": "Minion Gapclose", "cn": "小兵位移接近" }
        ]
      },
      "W": {
        "name": { "en": "Safeguard", "cn": "金钟罩" },
        "features": [
          { "en": "Fast Ward Jump", "cn": "极速插眼位移", "keybind": "A" },
          { "en": "Semi-Auto W", "cn": "半手动 W 保护", "keybind": "U" }
        ]
      },
      "E": {
        "name": { "en": "Tempest", "cn": "天雷破" },
        "features": [
          { "en": "Auto Killsteal", "cn": "自动 E 抢头" },
          { "en": "Jungle Clear priority", "cn": "野区清理优先级" }
        ]
      },
      "R": {
        "name": { "en": "Dragon's Rage", "cn": "猛龙摆尾" },
        "features": [
          { "en": "Multi-Hit Calc", "cn": "多目标击退计算" },
          { "en": "Semi-Auto R", "cn": "半手动 R", "keybind": "H" }
        ]
      }
    },
    "specialMechanics": [
      { "name": { "en": "Insec Mode", "cn": "回旋踢模式" }, "description": { "en": "Automated Insec with Ward/Flash options", "cn": "全自动插眼/闪现回旋踢" } },
      { "name": { "en": "Chinese Combo", "cn": "中国式连招" }, "description": { "en": "Advanced Q1-Flash-Ward-W-R-Q2 chain", "cn": "高级 Q1-闪现-眼-W-R-Q2 连招" } }
    ],
    "keybinds": {
      "combo": { "key": "Space", "label": { "en": "Full Combo", "cn": "完整连招" }, "defaultEnabled": true }
    }
  },
  {
    "id": "mel",
    "name": "Mel",
    "displayName": { "en": "MEL", "cn": "梅尔" },
    "tag": "NEW",
    "role": "mid",
    "difficulty": 3,
    "color": "#673AB7",
    "icon": "placeholder.svg",
    "description": { "en": "The Medarda Matriarch - Advanced Mage Script", "cn": "米达尔达族长 - 高级法师脚本" },
    "abilities": {
      "Q": {
        "name": { "en": "Dark Matter", "cn": "黑暗物质" },
        "features": [
          { "en": "CC Follow-up", "cn": "接控制链 Q" },
          { "en": "Auto Killsteal", "cn": "自动 Q 抢头" }
        ]
      },
      "W": {
        "name": { "en": "Spell Shield", "cn": "法术护盾" },
        "features": [
          { "en": "W Reflect System", "cn": "W 反弹系统" },
          { "en": "Evade integration", "cn": "躲避系统集成" }
        ]
      },
      "E": {
        "name": { "en": "Void Walk", "cn": "虚空行走" },
        "features": [
          { "en": "Auto on CC / Flee", "cn": "自动控制 / 逃跑使用" }
        ]
      },
      "R": {
        "name": { "en": "Shadow Assault", "cn": "暗影突袭" },
        "features": [
          { "en": "Global Execute", "cn": "全屏斩杀逻辑" },
          { "en": "Auto Killable R", "cn": "自动 R 抢头" },
          { "en": "Semi-Auto Key", "cn": "半手动按键", "keybind": "T" }
        ]
      }
    },
    "specialMechanics": [
      { "name": { "en": "W Reflect Logic", "cn": "W 反弹逻辑" }, "description": { "en": "Precisely reflects dangerous skillshots back at enemies", "cn": "将危险技能精确反弹给敌人" } }
    ],
    "keybinds": {
      "combo": { "key": "Space", "label": { "en": "Full Combo", "cn": "完整连招" }, "defaultEnabled": true },
      "farm": { "key": "MMB", "label": { "en": "Farm Mode", "cn": "清线模式" }, "defaultEnabled": true }
    }
  },
  {
    "id": "milio",
    "name": "Milio",
    "displayName": { "en": "MILIO", "cn": "米利欧" },
    "tag": "NEW",
    "role": "support",
    "difficulty": 1,
    "color": "#FFEB3B",
    "icon": "placeholder.svg",
    "description": { "en": "The Gentle Flame - Defensive Support Specialist", "cn": "明烛 - 防御型辅助专家" },
    "abilities": {
      "Q": {
        "name": { "en": "Ultra Mega Fire Kick", "cn": "超级无敌火焰踢" },
        "features": [
          { "en": "Interrupt / Anti-Gapclose", "cn": "自动打断 / 防突进" },
          { "en": "Anti-Melee Trigger", "cn": "自动防近战触发" }
        ]
      },
      "W": {
        "name": { "en": "Cozy Campfire", "cn": "温馨营火" },
        "features": [
          { "en": "Auto Defensive Use", "cn": "自动防御使用" },
          { "en": "Ally Engage Synergy", "cn": "队友突进协同" }
        ]
      },
      "E": {
        "name": { "en": "Warm Hugs", "cn": "温暖拥抱" },
        "features": [
          { "en": "Shield Attacker logic", "cn": "自动为攻击者套盾" },
          { "en": "Evade Dodge Buff", "cn": "集成闪避加速" }
        ]
      },
      "R": {
        "name": { "en": "Breath of Life", "cn": "生命气息" },
        "features": [
          { "en": "Auto Cleanse CC", "cn": "全自动净化控制" },
          { "en": "Smart Heal Threshold", "cn": "智能低血量治疗" }
        ]
      }
    },
    "specialMechanics": [
      { "name": { "en": "Auto Cleanse System", "cn": "自动净化系统" }, "description": { "en": "Instant R response to major CC like Suppression/Stuns", "cn": "大招秒解压制、眩晕等核心控制" } }
    ],
    "keybinds": {
      "combo": { "key": "Space", "label": { "en": "Full Combo", "cn": "完整连招" }, "defaultEnabled": true },
      "semi_we": { "key": "G", "label": { "en": "Semi-Auto W+E Ally", "cn": "半手动 W+E 队友" }, "defaultEnabled": true }
    }
  },
  {
    "id": "olaf",
    "name": "Olaf",
    "displayName": { "en": "OLAF", "cn": "奥拉夫" },
    "tag": null,
    "role": "top",
    "difficulty": 1,
    "color": "#F44336",
    "icon": "placeholder.svg",
    "description": { "en": "The Berserker - Aggressive Top/Jungle Script", "cn": "狂战士 - 激进型上单/打野脚本" },
    "abilities": {
      "Q": {
        "name": { "en": "Undertow", "cn": "残暴打击" },
        "features": [
          { "en": "Extra Throw Range Slider", "cn": "额外投掷射程调节" },
          { "en": "Auto Q Killsteal", "cn": "自动 Q 抢头" }
        ]
      },
      "W": {
        "name": { "en": "Vicious Strikes", "cn": "狂暴" },
        "features": [
          { "en": "AA Reset Combo", "cn": "普攻重置连招" },
          { "en": "Smart HP Threshold", "cn": "智能生命值开启阈值" }
        ]
      },
      "E": {
        "name": { "en": "Reckless Swing", "cn": "鲁莽挥击" },
        "features": [
          { "en": "Auto KS & Farm", "cn": "自动抢头 & 清线" }
        ]
      },
      "R": {
        "name": { "en": "Ragnarok", "cn": "诸神黄昏" },
        "features": [
          { "en": "Disable Evade during R", "cn": "R 期间自动关闭躲避" }
        ]
      }
    },
    "specialMechanics": [
      { "name": { "en": "Axe Catching Logic", "cn": "拾斧逻辑" }, "description": { "en": "Optimized orbwalking to catch axes during combat", "cn": "战斗中优化的拾斧走砍逻辑" } }
    ],
    "keybinds": {
      "combo": { "key": "Space", "label": { "en": "Full Combo", "cn": "完整连招" }, "defaultEnabled": true },
      "farm": { "key": "MMB", "label": { "en": "Farm Mode", "cn": "发育模式" }, "defaultEnabled": true }
    }
  },
  {
    "id": "orianna",
    "name": "Orianna",
    "displayName": { "en": "ORIANNA", "cn": "奥莉安娜" },
    "tag": null,
    "role": "mid",
    "difficulty": 3,
    "color": "#00BCD4",
    "icon": "placeholder.svg",
    "description": { "en": "The Lady of Clockwork - Precision Ball Control", "cn": "发条魔灵 - 精确控球脚本" },
    "abilities": {
      "Q": {
        "name": { "en": "Command: Attack", "cn": "指令：攻击" },
        "features": [
          { "en": "Auto Q on CC'd", "cn": "自动 Q 命中控制目标" },
          { "en": "Killsteal Mode", "cn": "大球抢头模式" }
        ]
      },
      "W": {
        "name": { "en": "Command: Dissonance", "cn": "指令：杂音" },
        "features": [
          { "en": "AoE Priority logic", "cn": "优先群体命中逻辑" },
          { "en": "Farm W integration", "cn": "清线 W 集成" }
        ]
      },
      "E": {
        "name": { "en": "Command: Protect", "cn": "指令：防护" },
        "features": [
          { "en": "Smart Shielding (Self/Ally)", "cn": "智能护盾 (自己/队友)" },
          { "en": "Shield HP Thresholds", "cn": "护盾血量开启阈值" }
        ]
      },
      "R": {
        "name": { "en": "Command: Shockwave", "cn": "指令：震荡" },
        "features": [
          { "en": "Combo R Min Hit Slider", "cn": "连招最少命中敌人数调节" },
          { "en": "Killsteal / Auto AoE", "cn": "自动击杀 / 自动 AoE" }
        ]
      }
    },
    "specialMechanics": [
      { "name": { "en": "Ball Tracker", "cn": "魔偶追踪" }, "description": { "en": "High precision ball position tracking for instant casts", "cn": "高精度魔偶位置追踪，实现瞬发技能" } }
    ],
    "keybinds": {
      "combo": { "key": "Space", "label": { "en": "Full Combo", "cn": "完整连招" }, "defaultEnabled": true }
    }
  },
  {
    "id": "pyke",
    "name": "Pyke",
    "displayName": { "en": "PYKE", "cn": "派克" },
    "tag": "HOT",
    "role": "support",
    "difficulty": 3,
    "color": "#009688",
    "icon": "placeholder.svg",
    "description": { "en": "The Bloodharbor Ripper - Execute & Hook Specialist", "cn": "血港鬼影 - 斩杀与钩子专家" },
    "abilities": {
      "Q": {
        "name": { "en": "Bone Skewer", "cn": "骨刺穿刺" },
        "features": [
          { "en": "Smart Hook Prediction", "cn": "智能钩子预判" },
          { "en": "Extend CC Chain", "cn": "自动接控制链" },
          { "en": "Fire Before Death", "cn": "死前自动出钩" }
        ]
      },
      "W": {
        "name": { "en": "Ghostwater Dive", "cn": "幽潭潜行" },
        "features": [
          { "en": "Auto W after E", "cn": "E 命中后自动 W 走位" }
        ]
      },
      "E": {
        "name": { "en": "Phantom Undertow", "cn": "暗影之拥" },
        "features": [
          { "en": "E Magnet Logic", "cn": "E 命中磁铁走位逻辑" },
          { "en": "E+Flash Interaction", "cn": "E+闪现互动逻辑" },
          { "en": "Semi-Manual E", "cn": "半手动 E 按键", "keybind": "T" }
        ]
      },
      "R": {
        "name": { "en": "Death From Below", "cn": "涌泉之恨" },
        "features": [
          { "en": "Instant Execute", "cn": "瞬发斩杀逻辑" },
          { "en": "Threshold Calculation", "cn": "精确斩杀阈值计算" }
        ]
      }
    },
    "specialMechanics": [
      { "name": { "en": "E Magnet", "cn": "E 磁铁" }, "description": { "en": "Optimized movement during E dash to ensure stun lands", "cn": "E 冲刺期间优化的位移逻辑以确保眩晕命中" } }
    ],
    "keybinds": {
      "combo": { "key": "Space", "label": { "en": "Full Combo", "cn": "完整连招" }, "defaultEnabled": true }
    }
  },
  {
    "id": "samira",
    "name": "Samira",
    "displayName": { "en": "SAMIRA", "cn": "萨弥拉" },
    "tag": "HOT",
    "role": "adc",
    "difficulty": 3,
    "color": "#E91E63",
    "icon": "placeholder.svg",
    "description": { "en": "The Desert Rose - Style Grade Master", "cn": "沙漠玫瑰 - 评分连招大师" },
    "abilities": {
      "Q": {
        "name": { "en": "Flair", "cn": "华丽枪舞" },
        "features": [
          { "en": "Passive Weaving", "cn": "被动衔接优化" },
          { "en": "Melee/Ranged Detection", "cn": "近战/远程形态自动检测" }
        ]
      },
      "W": {
        "name": { "en": "Blade Whirl", "cn": "旋风飞刃" },
        "features": [
          { "en": "Auto Dodge Skillshots", "cn": "自动开 W 挡技能" },
          { "en": "Per-Spell Configuration", "cn": "逐技能防御设置" }
        ]
      },
      "E": {
        "name": { "en": "Wild Rush", "cn": "狂野突袭" },
        "features": [
          { "en": "Reset Available Check", "cn": "刷新状态检测" },
          { "en": "Safe Dash logic", "cn": "安全冲刺逻辑" }
        ]
      },
      "R": {
        "name": { "en": "Inferno Trigger", "cn": "地狱弹幕" },
        "features": [
          { "en": "Instant Style Cast", "cn": "S 级评分瞬发大招" },
          { "en": "Auto R in Combo", "cn": "连招中满足条件自动大招" }
        ]
      }
    },
    "specialMechanics": [
      { "name": { "en": "Style Grade Optimizer", "cn": "连招评分优化器" }, "description": { "en": "Prioritizes spell rotation to reach S grade fastest", "cn": "优先考虑技能循环以最快速度达到 S 级" } }
    ],
    "keybinds": {
      "combo": { "key": "Space", "label": { "en": "Full Combo", "cn": "完整连招" }, "defaultEnabled": true }
    }
  },
  {
    "id": "senna",
    "name": "Senna",
    "displayName": { "en": "SENNA", "cn": "赛娜" },
    "tag": null,
    "role": "adc",
    "difficulty": 2,
    "color": "#607D8B",
    "icon": "placeholder.svg",
    "description": { "en": "The Redeemer - Infinite Scaling Support", "cn": "涤魂圣枪 - 无限成长型辅助" },
    "abilities": {
      "Q": {
        "name": { "en": "Piercing Darkness", "cn": "穿透之暗" },
        "features": [
          { "en": "Heal Ally & Damage Enemy", "cn": "友军治疗 & 敌人伤害双重逻辑" },
          { "en": "Ward KS Extend", "cn": "眼位延伸 Q 抢头", "keybind": "MMB" },
          { "en": "Auto Q on CC'd", "cn": "自动 Q 命中控制目标" }
        ]
      },
      "W": {
        "name": { "en": "Last Embrace", "cn": "临终拥抱" },
        "features": [
          { "en": "Anti-Gapclose Logic", "cn": "防突进控制" },
          { "en": "Killsteal Mode", "cn": "自动 W 抢头" }
        ]
      },
      "E": {
        "name": { "en": "Curse of the Mist", "cn": "黑雾魔咒" },
        "features": [
          { "en": "Auto Escape E", "cn": "自动逃跑使用 E" },
          { "en": "Anti-Melee Shielding", "cn": "反近战保护" }
        ]
      },
      "R": {
        "name": { "en": "Dawning Shadow", "cn": "黯影黎明" },
        "features": [
          { "en": "Semi-Auto Key", "cn": "半手动按键", "keybind": "T" },
          { "en": "Save Ally Shielding", "cn": "自动护盾救队友" },
          { "en": "Multi-target AoE", "cn": "多目标 AoE 伤害" }
        ]
      }
    },
    "specialMechanics": [
      { "name": { "en": "Soul Collector", "cn": "灵魂收集器" }, "description": { "en": "Automated priority for collecting nearby souls", "cn": "自动优先收集附近的灵魂" } }
    ],
    "keybinds": {
      "combo": { "key": "Space", "label": { "en": "Full Combo", "cn": "完整连招" }, "defaultEnabled": true }
    }
  },
  {
    "id": "seraphine",
    "name": "Seraphine",
    "displayName": { "en": "SERAPHINE", "cn": "萨勒芬妮" },
    "tag": null,
    "role": "support",
    "difficulty": 1,
    "color": "#FF4081",
    "icon": "placeholder.svg",
    "description": { "en": "The Star-Eyed Songstress - Double Cast Master", "cn": "星籁歌姬 - 双重施法大师" },
    "abilities": {
      "Q": {
        "name": { "en": "High Note", "cn": "清唱" },
        "features": [
          { "en": "Double Cast Priority", "cn": "双重施法优先级" },
          { "en": "Auto Q on CC'd", "cn": "自动 Q 命中控制目标" }
        ]
      },
      "W": {
        "name": { "en": "Surround Sound", "cn": "聚光灯" },
        "features": [
          { "en": "Reactive Shielding", "cn": "响应式护盾防御" },
          { "en": "Team Proactive Heal", "cn": "团队主动治疗逻辑" }
        ]
      },
      "E": {
        "name": { "en": "Beat Drop", "cn": "增幅音波" },
        "features": [
          { "en": "Anti-Gapclose / Anti-Melee", "cn": "防突进 / 防近战" },
          { "en": "Auto Double-E Root", "cn": "自动双重 E 禁锢" }
        ]
      },
      "R": {
        "name": { "en": "Encore", "cn": "绝唱" },
        "features": [
          { "en": "AoE Multi-Hit logic", "cn": "多目标 AoE 逻辑" },
          { "en": "R-Flash Combo", "cn": "R-闪现连招", "keybind": "H" }
        ]
      }
    },
    "specialMechanics": [
      { "name": { "en": "Note Optimizer", "cn": "音符优化器" }, "description": { "en": "Optimizes spell rotation based on passive stacks", "cn": "根据被动层数优化技能旋转" } }
    ],
    "keybinds": {
      "combo": { "key": "Space", "label": { "en": "Full Combo", "cn": "完整连招" }, "defaultEnabled": true },
      "semi_r": { "key": "T", "label": { "en": "Semi-Auto R", "cn": "半手动 R" }, "defaultEnabled": true }
    }
  },
  {
    "id": "tristana",
    "name": "Tristana",
    "displayName": { "en": "TRISTANA", "cn": "崔丝塔娜" },
    "tag": null,
    "role": "adc",
    "difficulty": 1,
    "color": "#FF5722",
    "icon": "placeholder.svg",
    "description": { "en": "The Yordle Gunner - Tower Crushing Hypercarry", "cn": "麦林炮手 - 拆塔型超级大核" },
    "abilities": {
      "Q": {
        "name": { "en": "Rapid Fire", "cn": "急速射击" },
        "features": [
          { "en": "Use on Structures", "cn": "对建筑使用" },
          { "en": "Combo & Harass", "cn": "连招与骚扰使用" }
        ]
      },
      "W": {
        "name": { "en": "Rocket Jump", "cn": "火箭跳跃" },
        "features": [
          { "en": "Gap Close for Kill", "cn": "位移终结逻辑" },
          { "en": "Anti-Gapclose Mode", "cn": "防突进模式" }
        ]
      },
      "E": {
        "name": { "en": "Explosive Charge", "cn": "爆炸火花" },
        "features": [
          { "en": "E Smart Focus", "cn": "E 智能目标聚焦" },
          { "en": "Full Combo logic", "cn": "完整 E 爆发连招" }
        ]
      },
      "R": {
        "name": { "en": "Buster Shot", "cn": "毁灭射击" },
        "features": [
          { "en": "Killsteal Mode", "cn": "自动 R 抢头" },
          { "en": "Self-Peel Mode", "cn": "自动防守退敌" }
        ]
      }
    },
    "specialMechanics": [
      { "name": { "en": "E Burst Calculator", "cn": "E 爆发计算器" }, "description": { "en": "Calculates kill potential based on E stacks", "cn": "根据 E 层数计算击杀潜力" } }
    ],
    "keybinds": {
      "combo": { "key": "Space", "label": { "en": "Full Combo", "cn": "完整连招" }, "defaultEnabled": true }
    }
  },
  {
    "id": "twitch",
    "name": "Twitch",
    "displayName": { "en": "TWITCH", "cn": "图奇" },
    "tag": "HOT",
    "role": "adc",
    "difficulty": 2,
    "color": "#4CAF50",
    "icon": "placeholder.svg",
    "description": { "en": "The Plague Rat - Stealth Assassin ADC", "cn": "瘟疫之源 - 潜行刺客型 ADC" },
    "abilities": {
      "Q": {
        "name": { "en": "Ambush", "cn": "潜伏" },
        "features": [
          { "en": "Stealth Recall", "cn": "潜行回城", "keybind": "T" },
          { "en": "Reveal Range Drawing", "cn": "被发现范围显示" }
        ]
      },
      "W": {
        "name": { "en": "Venom Cask", "cn": "剧毒之桶" },
        "features": [
          { "en": "Smart Prediction", "cn": "智能预判施放" },
          { "en": "Out of AA Range Only", "cn": "仅在普攻范围外使用" }
        ]
      },
      "E": {
        "name": { "en": "Contaminate", "cn": "毒性爆发" },
        "features": [
          { "en": "Poison Stack Calc", "cn": "毒素层数伤害计算" },
          { "en": "Jungle Steal mode", "cn": "野区自动抢怪模式" }
        ]
      },
      "R": {
        "name": { "en": "Spray and Pray", "cn": "火力全开" },
        "features": [
          { "en": "Multi-Target Logic", "cn": "多目标自动大招" },
          { "en": "Bonus Range Visualizer", "cn": "额外射程视觉指示" }
        ]
      }
    },
    "specialMechanics": [
      { "name": { "en": "E Damage Tracker", "cn": "E 伤害追踪" }, "description": { "en": "Real-time execute indicator based on poison stacks", "cn": "根据毒素层数实时显示的击杀提示" } }
    ],
    "keybinds": {
      "combo": { "key": "Space", "label": { "en": "Full Combo", "cn": "完整连招" }, "defaultEnabled": true }
    }
  },
  {
    "id": "xayah",
    "name": "Xayah",
    "displayName": { "en": "XAYAH", "cn": "霞" },
    "tag": null,
    "role": "adc",
    "difficulty": 2,
    "color": "#F06292",
    "icon": "placeholder.svg",
    "description": { "en": "The Rebel - Feather Manipulation Marksman", "cn": "逆羽 - 羽毛操控型射手" },
    "abilities": {
      "Q": {
        "name": { "en": "Double Daggers", "cn": "双刃羽" },
        "features": [
          { "en": "Combo & Harass", "cn": "连招与骚扰使用" },
          { "en": "Killsteal Mode", "cn": "自动 Q 抢头" }
        ]
      },
      "W": {
        "name": { "en": "Deadly Plumage", "cn": "死亡羽衣" },
        "features": [
          { "en": "AS Buff Management", "cn": "攻速加成管理" }
        ]
      },
      "E": {
        "name": { "en": "Bladecaller", "cn": "逆刃" },
        "features": [
          { "en": "Feather Tracking", "cn": "羽毛实时追踪" },
          { "en": "Auto Root logic", "cn": "自动禁锢逻辑" },
          { "en": "Execute threshold", "cn": "精确斩杀线提示" }
        ]
      },
      "R": {
        "name": { "en": "Featherstorm", "cn": "暴风羽刃" },
        "features": [
          { "en": "Auto Dodge Skillshots", "cn": "自动躲避技能" },
          { "en": "Force Cast Key", "cn": "强制施放按键", "keybind": "T" }
        ]
      }
    },
    "specialMechanics": [
      { "name": { "en": "Feather Calc", "cn": "羽毛计数器" }, "description": { "en": "Tracks all active feathers for perfect E pullbacks", "cn": "追踪所有活性羽毛以实现完美的 E 召回" } }
    ],
    "keybinds": {
      "combo": { "key": "Space", "label": { "en": "Full Combo", "cn": "完整连招" }, "defaultEnabled": true }
    }
  },
  {
    "id": "yunara",
    "name": "Yunara",
    "displayName": { "en": "YUNARA", "cn": "云娜" },
    "tag": "NEW",
    "role": "adc",
    "difficulty": 2,
    "color": "#03A9F4",
    "icon": "placeholder.svg",
    "description": { "en": "The First Lands' Vow - Unique Custom Marksman", "cn": "初生之土的誓言 - 独特定制射手" },
    "abilities": {
      "Q": {
        "name": { "en": "Cultivation of Spirit", "cn": "灵气培养" },
        "features": [
          { "en": "Stack Management", "cn": "叠层管理逻辑" },
          { "en": "Empowered AA Auto-Activate", "cn": "满层自动激活强化普攻" }
        ]
      },
      "W": {
        "name": { "en": "Arc of Judgment", "cn": "审判之弧" },
        "features": [
          { "en": "Empowered W during R", "cn": "R 期间自动使用强化 W" },
          { "en": "Auto CC Follow-up", "cn": "自动接控制链" }
        ]
      },
      "E": {
        "name": { "en": "Kanmei's Steps", "cn": "阚明之步" },
        "features": [
          { "en": "Dash Dodge mode", "cn": "位移躲避模式" },
          { "en": "Anti-Melee / Anti-Gapclose", "cn": "反近战 / 反突进" }
        ]
      },
      "R": {
        "name": { "en": "Transcend One's Self", "cn": "超凡入圣" },
        "features": [
          { "en": "Teamfight Auto-Activate", "cn": "团战自动开启" },
          { "en": "Escape Mode", "cn": "逃跑开启模式" },
          { "en": "Kill Logic Calculation", "cn": "击杀潜力计算开启" }
        ]
      }
    },
    "specialMechanics": [
      { "name": { "en": "Transcendent State", "cn": "超凡状态" }, "description": { "en": "Optimizes all abilities while in unleashed form", "cn": "在超凡形式下优化所有技能逻辑" } }
    ],
    "keybinds": {
      "combo": { "key": "Space", "label": { "en": "Full Combo", "cn": "完整连招" }, "defaultEnabled": true }
    }
  },
  {
    "id": "zaahen",
    "name": "Zaahen",
    "displayName": { "en": "ZAAHEN", "cn": "Zaahen" },
    "tag": "NEW",
    "role": "top",
    "difficulty": 3,
    "color": "#795548",
    "icon": "placeholder.svg",
    "description": { "en": "The Darkin Soul - High Skill Cap Custom Fighter", "cn": "暗裔之魂 - 高操作上限定制战士" },
    "abilities": {
      "Q": {
        "name": { "en": "The Darkin Glaive", "cn": "黑暗之镰" },
        "features": [
          { "en": "AA Cancel / Reset", "cn": "普攻取消 / 重置" },
          { "en": "Always Q2 mode", "cn": "总是释放 Q2 模式" }
        ]
      },
      "W": {
        "name": { "en": "Dreaded Return", "cn": "恐惧回归" },
        "features": [
          { "en": "Max Range Pull/Stun", "cn": "最大距离拉拽/眩晕" },
          { "en": "Semi-Manual W", "cn": "半手动 W", "keybind": "A" }
        ]
      },
      "E": {
        "name": { "en": "Aureate Rush", "cn": "黄金冲刺" },
        "features": [
          { "en": "Sweet Spot Focus", "cn": "甜点位聚焦逻辑" },
          { "en": "Gapclose integration", "cn": "位移接近集成" }
        ]
      },
      "R": {
        "name": { "en": "Grim Deliverance", "cn": "严峻审判" },
        "features": [
          { "en": "Survival R Logic", "cn": "生存型自动 R" },
          { "en": "Execute R mode", "cn": "斩杀型自动 R" }
        ]
      }
    },
    "specialMechanics": [
      { "name": { "en": "Outer Edge Logic", "cn": "边缘伤害逻辑" }, "description": { "en": "Automatically positions to hit the sweet spot of E", "cn": "自动位移以命中 E 的外边缘甜点伤害" } }
    ],
    "keybinds": {
      "combo": { "key": "Space", "label": { "en": "Full Combo", "cn": "完整连招" }, "defaultEnabled": true }
    }
  },
  {
    "id": "zeri",
    "name": "Zeri",
    "displayName": { "en": "ZERI", "cn": "泽丽" },
    "tag": "HOT",
    "role": "adc",
    "difficulty": 3,
    "color": "#FFEB3B",
    "icon": "placeholder.svg",
    "description": { "en": "The Spark of Zaun - Mobility Specialist", "cn": "祖安花火 - 极速位移专家" },
    "abilities": {
      "Q": {
        "name": { "en": "Burst Fire", "cn": "疾速连击" },
        "features": [
          { "en": "Auto Q Toggle", "cn": "自动 Q 连射开关" }
        ]
      },
      "W": {
        "name": { "en": "Ultrashock Laser", "cn": "超震激光" },
        "features": [
          { "en": "Wall Interaction logic", "cn": "穿墙强化逻辑" }
        ]
      },
      "E": {
        "name": { "en": "Spark Surge", "cn": "电火疾冲" },
        "features": [
          { "en": "Wall Jump Calculation", "cn": "自动翻墙路径计算" }
        ]
      },
      "R": {
        "name": { "en": "Lightning Crash", "cn": "电光火石" },
        "features": [
          { "en": "Burst Mode optimization", "cn": "爆发模式优化" }
        ]
      }
    },
    "specialMechanics": [
      { "name": { "en": "Orbwalker Sync", "cn": "走砍同步" }, "description": { "en": "Perfectly synchronizes Q casts with movement", "cn": "将 Q 的施放与移动完美同步" } }
    ],
    "keybinds": {
      "combo": { "key": "Space", "label": { "en": "Full Combo", "cn": "完整连招" }, "defaultEnabled": true }
    }
  },
  {
    "id": "zoe",
    "name": "Zoe",
    "displayName": { "en": "ZOE", "cn": "佐伊" },
    "tag": null,
    "role": "mid",
    "difficulty": 3,
    "color": "#E91E63",
    "icon": "placeholder.svg",
    "description": { "en": "The Aspect of Twilight - Long Range Artillery Mage", "cn": "暮光星灵 - 超远距离长炮法师" },
    "abilities": {
      "Q": {
        "name": { "en": "Paddle Star", "cn": "星使一击" },
        "features": [
          { "en": "Q2 Redirect Logic", "cn": "Q2 重定向逻辑" },
          { "en": "Magnet Distance tuning", "cn": "磁吸距离微调" },
          { "en": "Max Damage delay", "cn": "最大伤害延迟施法" }
        ]
      },
      "W": {
        "name": { "en": "Spell Thief", "cn": "窃法巧手" },
        "features": [
          { "en": "Auto Use Spells", "cn": "自动使用拾取技能" }
        ]
      },
      "E": {
        "name": { "en": "Sleepy Bubble", "cn": "催眠气泡" },
        "features": [
          { "en": "Wall Extension calculation", "cn": "穿墙距离延伸计算" },
          { "en": "Auto on CC'd", "cn": "自动接控制链" }
        ]
      },
      "R": {
        "name": { "en": "Portal Jump", "cn": "折返跃迁" },
        "features": [
          { "en": "Combo Q-R chain", "cn": "连招 Q-R 链集成" }
        ]
      }
    },
    "specialMechanics": [
      { "name": { "en": "Artillery Prediction", "cn": "炮击预测" }, "description": { "en": "Advanced prediction for long range Q redirects", "cn": "远距离 Q 重定向的高级预判" } }
    ],
    "keybinds": {
      "combo": { "key": "Space", "label": { "en": "Full Combo", "cn": "完整连招" }, "defaultEnabled": true }
    }
  }
];

export const I18N = {
    en: {
        "app": { "title": "DanZ-AIO", "subtitle": "Champion Scripts", "description": "High-performance champion scripts" },
        "nav": { "home": "Home", "champions": "Champions", "changelog": "Changelog", "about": "About", "discord": "Discord", "telegram": "Telegram" },
        "home": {
            "hero": {
                "title": "Ultimate Scripts",
                "subtitle": "Professional Grade",
                "badge": "Next Generation Scripts",
                "description": "High-performance, reliable champion scripts with advanced prediction, smart combos, and automated mechanics.",
                "cta": "Browse Champions",
                "stats": { "champions": "Champions", "features": "Features", "updates": "Updates" }
            },
            "features": {
                "title": "Built for the Elite",
                "description": "Experience the next generation of scripting technology with features designed to provide a competitive edge while maintaining maximum security.",
                "prediction": {
                    "title": "Advanced Prediction",
                    "description": "Our engine calculates target movement and spell velocity with millisecond precision, ensuring your skillshots never miss."
                },
                "security": {
                    "title": "Optimized Performance",
                    "description": "Smart calculations ensure the code runs smoothly without FPS drops, fully optimized against memory leaks."
                },
                "latency": {
                    "title": "Zero Latency",
                    "description": "Seamless integration with TargetSelector, Orbwalker, and Evade in perfection."
                },
                "combos": {
                    "title": "Smart Combos",
                    "description": "Fully customizable sequences that adapt dynamically to target health, distance, and active buffs."
                },
                "core": {
                    "title": "Internal Core",
                    "description": "Leveraging the full potential of the engine with deep internal game integration and memory hooks."
                },
                "updates": {
                    "title": "Always Updated",
                    "description": "Real-time updates ensure perfect compatibility with every game patch and new champion release."
                }
            },
            "cta": {
                "title": "Ready to dominate?",
                "description": "Join thousands of players using DanZ-AIO to elevate their gameplay.",
                "button": "Get Started Now",
                "discord": "Join Discord",
                "telegram": "Join Telegram"
            }
        },
        "champions": {
            "title": "Available Champions",
            "search": "Search champions...",
            "filters": { "all": "All", "role": "Role", "tag": "Tag", "sort": "Sort by", "clear": "Clear" },
            "roles": { "ADC": "ADC", "SUPPORT": "Support", "MID": "Mid", "JUNGLE": "Jungle", "TOP": "Top" },
            "tags": { "HOT": "Hot", "NEW": "New", "UPD": "Updated" },
            "sort": { "name": "Name", "difficulty": "Difficulty", "role": "Role" },
            "count": "{count} champions available",
            "noResults": "No champions found"
        },
        "champion": {
            "tabs": { "abilities": "Abilities", "features": "Features", "mechanics": "Mechanics", "keybinds": "Keybinds" },
            "difficulty": "Difficulty",
            "role": "Role",
            "viewDetails": "View Details",
            "activeModule": "Active Module",
            "key": "KEY:",
            "abilities": { "passive": "Passive", "q": "Q", "w": "W", "e": "E", "r": "R" },
            "features": {
                "combo": "Combo",
                "harass": "Harass",
                "auto": "Automation",
                "drawings": "Drawings",
                "farm": "Farming",
                "prediction": "Prediction",
                "jungle": "Jungle",
                "killsteal": "Kill Steal",
                "visualizers": "Visualizers"
            },
            "mechanics": { "title": "Special Mechanics" },
            "keybinds": { "title": "Keybinds", "key": "Key", "action": "Action" }
        },
        "common": { "enabled": "Enabled", "disabled": "Disabled" },
        "changelog": {
            "title": "Latest Updates",
            "subtitle": "Track the evolution of DanZ-AIO scripts.",
            "newFeatures": "New Features",
            "addedChampions": "Added Champions",
            "updatedChampions": "Updated Champions",
            "fixes": "Fixes"
        },
        "footer": {
            "description": "Providing high-performance, reliable champion scripts for the community since 2024.",
            "disclaimer": "© 2024 DanZ-AIO. For educational purposes only.",
            "status": "System Online",
            "platform": "Platform",
            "support": "Support",
            "links": {
                "home": "Home",
                "champions": "Champions",
                "changelog": "Changelog",
                "discord": "Discord Server",
                "telegram": "Telegram Channel",
                "docs": "Documentation"
            }
        },
        "terminal": {
            "initializing": "DANZ-AIO KERNEL v25.2.0 INITIALIZING...",
            "detection": "DETECTION_MODE: SILENT",
            "searching": "SEARCHING FOR PROCESS: LeagueClient.exe...",
            "found": "PROCESS FOUND [PID: 14208]",
            "attaching": "ATTACHING TO BASE_ADDR: 0x7FF7F2A00000",
            "scanning": "SCANNING MEMORY FOR OFFSET: G_OBJECT_MANAGER...",
            "resolved": "OFFSET RESOLVED -> 0x4D2A8F0",
            "bypassing": "BYPASSING VANGUARD_X... SUCCESS [14ms]",
            "loading_engine": "LOADING NEURAL_PREDICTION_ENGINE...",
            "weights": "WEIGHTS LOADED: v9.4 (LOW_LATENCY)",
            "hooking": "HOOKING_API: {api}... OK",
            "injecting": "INJECTING CHAMPION_MODULES...",
            "module_ok": "{module}.dll... [OK]",
            "ready": "DANZ-AIO: SYSTEM_READY",
            "status": "SYSTEM_STATUS",
            "online": "ONLINE",
            "cpu": "CPU_LOAD",
            "gpu": "GPU_MEM"
        }
    },
    cn: {
        "app": { "title": "DanZ-AIO", "subtitle": "英雄脚本", "description": "高性能英雄脚本" },
        "nav": { "home": "首页", "champions": "英雄", "changelog": "更新日志", "about": "关于", "discord": "Discord", "telegram": "Telegram" },
        "home": {
            "hero": {
                "title": "终极脚本",
                "subtitle": "专业级",
                "badge": "下一代脚本技术",
                "description": "高性能、可靠的英雄脚本，具有先进的预测、智能连招和自动化机制。",
                "cta": "浏览英雄",
                "stats": { "champions": "英雄", "features": "特性", "updates": "更新" }
            },
            "features": {
                "title": "为精英打造",
                "description": "体验下一代脚本技术，旨在提供竞争优势，同时保持最大安全性。",
                "prediction": {
                    "title": "先进预测",
                    "description": "我们的引擎以毫秒级的精度计算目标移动和法术速度，确保您的技能永不落空。"
                },
                "security": {
                    "title": "未被检测 & 安全",
                    "description": "先进的人性化模式和底层钩子确保您的账号在高水平比赛中保持安全。"
                },
                "latency": {
                    "title": "零延迟",
                    "description": "高度优化的核心确保对系统性能的影响降至最低，即使在激烈的团战中也是如此。"
                },
                "combos": {
                    "title": "智能连招",
                    "description": "完全可定制的序列，可根据目标生命值、距离和活动增益动态调整。"
                },
                "core": {
                    "title": "内部核心",
                    "description": "充分利用引擎的潜力，实现深层内部游戏集成和内存钩子。"
                },
                "updates": {
                    "title": "持续更新",
                    "description": "实时更新确保与每个游戏补丁和新英雄发布完美兼容。"
                }
            },
            "cta": {
                "title": "准备好主宰了吗？",
                "description": "加入数千名使用 DanZ-AIO 的玩家，提升您的游戏水平。",
                "button": "立即开始",
                "discord": "加入 Discord",
                "telegram": "加入 Telegram"
            }
        },
        "champions": {
            "title": "可选英雄",
            "search": "搜索英雄...",

            "filters": { "all": "全部", "role": "定位", "tag": "标签", "sort": "排序", "clear": "清除" },
            "roles": { "ADC": "ADC", "SUPPORT": "辅助", "MID": "中单", "JUNGLE": "打野", "TOP": "上单" },
            "tags": { "HOT": "热门", "NEW": "新增", "UPD": "已更新" },
            "sort": { "name": "名称", "difficulty": "难度", "role": "定位" },
            "count": "{count} 个英雄可用",
            "noResults": "未找到英雄"
        },
        "champion": {
            "tabs": { "abilities": "技能", "features": "功能", "mechanics": "机制", "keybinds": "按键" },
            "difficulty": "难度",
            "role": "定位",
            "viewDetails": "查看详情",
            "activeModule": "活动模块",
            "key": "按键:",
            "abilities": { "passive": "被动", "q": "Q", "w": "W", "e": "E", "r": "R" },
            "features": {
                "combo": "连招",
                "harass": "骚扰",
                "auto": "自动化",
                "drawings": "绘制",
                "farm": "清兵",
                "prediction": "预测",
                "jungle": "打野",
                "killsteal": "抢头",
                "visualizers": "可视化"
            },
            "mechanics": { "title": "特殊机制" },
            "keybinds": { "title": "按键绑定", "key": "按键", "action": "动作" }
        },
        "common": { "enabled": "已启用", "disabled": "已禁用" },
        "changelog": {
            "title": "最新更新",
            "subtitle": "追踪 DanZ-AIO 脚本的演进。",
            "newFeatures": "新功能",
            "addedChampions": "新增英雄",
            "updatedChampions": "更新英雄",
            "fixes": "修复"
        },
        "footer": {
            "description": "自 2024 年以来，为社区提供高性能、可靠的英雄脚本。",
            "disclaimer": "© 2024 DanZ-AIO. 仅供教育目的使用。",
            "status": "系统在线",
            "platform": "平台",
            "support": "支持",
            "links": {
                "home": "首页",
                "champions": "英雄",
                "changelog": "更新日志",
                "discord": "Discord 服务器",
                "telegram": "Telegram 频道",
                "docs": "文档"
            }
        },
        "terminal": {
            "initializing": "DANZ-AIO 内核 v25.2.0 初始化中...",
            "detection": "检测模式: 静默",
            "searching": "正在搜索进程: LeagueClient.exe...",
            "found": "已找到进程 [PID: 14208]",
            "attaching": "正在附加到基址: 0x7FF7F2A00000",
            "scanning": "正在扫描内存偏移: G_OBJECT_MANAGER...",
            "resolved": "偏移量已解析 -> 0x4D2A8F0",
            "bypassing": "绕过 VANGUARD_X... 成功 [14ms]",
            "loading_engine": "正在加载神经预测引擎...",
            "weights": "权重已加载: v9.4 (低延迟)",
            "hooking": "挂钩 API: {api}... 成功",
            "injecting": "正在注入英雄模块...",
            "module_ok": "{module}.dll... [成功]",
            "ready": "DANZ-AIO: 系统就绪",
            "status": "系统状态",
            "online": "在线",
            "cpu": "CPU 负载",
            "gpu": "显存占用"
        }
    }
};
