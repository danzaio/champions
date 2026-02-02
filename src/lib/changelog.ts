export interface ChangelogEntry {
  version: string;
  date: string;
  type: 'major' | 'minor' | 'hotfix';
  features: { en: string; cn: string }[];
  fixes: { en: string; cn: string }[];
  addedChampions: string[];
  updatedChampions: string[];
}

export const CHANGELOG: ChangelogEntry[] = [
  {
    version: "25.2.0",
    date: "2026-01-30",
    type: "major",
    features: [
      { en: "Added global Command Palette (Ctrl+K) for quick navigation", cn: "添加全局命令面板 (Ctrl+K) 快速导航" },
      { en: "Introduced skeleton loading states for smoother UX", cn: "添加骨架屏加载状态，提升用户体验" },
      { en: "Optimized grid layout to support 24+ champions with improved density", cn: "优化网格布局，支持24+英雄，提高密度" },
      { en: "Enhanced champion cards with better borders and glow effects", cn: "增强英雄卡片边框和发光效果" },
      { en: "Improved URL sanitization for Data Dragon CDN", cn: "改进 Data Dragon CDN 的 URL 清理" },
    ],
    fixes: [
      { en: "Fixed TypeScript strict mode violations in ChampionGrid", cn: "修复 ChampionGrid 中的 TypeScript 严格模式违规" },
    ],
    addedChampions: ["zaahen", "yunara"],
    updatedChampions: ["leesin", "ezreal", "blitzcrank", "pyke"],
  },
  {
    version: "25.1.0",
    date: "2026-01-15",
    type: "minor",
    features: [
      { en: "Added 8 new champion scripts", cn: "添加8个新英雄脚本" },
      { en: "Enhanced bilingual support with improved translations", cn: "增强双语支持，优化翻译" },
      { en: "New champion filtering by role and difficulty", cn: "新增按角色和难度筛选英雄" },
    ],
    fixes: [],
    addedChampions: ["mel", "milio", "zaahen"],
    updatedChampions: ["jinx", "kaisa", "twitch"],
  },
  {
    version: "25.0.0",
    date: "2026-01-01",
    type: "major",
    features: [
      { en: "Complete website redesign with premium dark theme", cn: "全新网站设计，采用高级暗色主题" },
      { en: "24 champions with complete feature documentation", cn: "24个英雄，完整功能文档" },
      { en: "Framer Motion animations throughout the UI", cn: "全UI使用Framer Motion动画" },
      { en: "Fully bilingual (English/Chinese) interface", cn: "完全双语（英语/中文）界面" },
    ],
    fixes: [],
    addedChampions: ["ezreal", "blitzcrank", "caitlyn", "cassiopeia", "corki", "jinx", "kaisa", "kogmaw", "leesin", "olaf", "orianna", "pyke", "samira", "senna", "seraphine", "tristana", "twitch", "xayah", "zeri", "zoe"],
    updatedChampions: [],
  },
];
