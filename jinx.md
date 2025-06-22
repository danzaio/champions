### Jinx - The Loose Cannon - DanZ-AIO Features
<img src="https://raw.communitydragon.org/latest/game/assets/characters/jinx/hud/jinx_circle.png" alt="Jinx" title="Jinx" data-md-file="jinx.md">

*   **Dynamic Q Switching:** Intelligent "Switcheroo!" (Q) logic for optimal weapon choice (Pow-Pow Minigun vs. Fishbones Rocket Launcher) in combos, harass, and farming, considering range, AoE potential, and mana.
*   **Accurate W Snipes:** "Zap!" (W) usage with advanced prediction for poke, slowing, and finishing targets, with options to use only outside AA range and smart TTK checks.
*   **Strategic E Traps:** "Flame Chompers!" (E) placement for combos (on CC, predictive), anti-gapclose (on self, intercept path), peeling, and chokepoint control.
*   **Global R Execution:** "Super Mega Death Rocket!" (R) for executing low-health enemies, with configurable range and safety checks. Semi-manual R casting available.
*   **Comprehensive Visuals:** Damage indicators, weapon status, passive timer, R killable text, and R range on minimap for enhanced awareness.

---
## Ability Breakdown & Settings
### Q - Switcheroo!
Jinx swaps weapons between Pow-Pow (Minigun) for single-target DPS and Fishbones (Rocket Launcher) for AoE and longer range.
*   **Rocket Switch Bonus Range:** [Slider - 0, Range 0-200, Step 5]
    *   How much earlier to switch to rockets before entering normal rocket attack range. Helps fire immediately while moving.
*   **Default to Rockets in Combo:** [Toggle - ON by default]
    *   Automatically switches to Rockets when entering Combo mode if not already active.
*   **Default to Minigun in Lane Clear:** [Toggle - ON by default]
    *   Automatically switches to Minigun when entering Lane Clear mode if not already active.
*   **Minigun Switch Bonus Range:** [Slider - 0, Range 0-150, Step 5]
    *   How much earlier to switch back to minigun when chasing. Allows faster finishing with higher attack speed.
*   **Switch in Combo/Harass:** [Toggle - ON by default]
    *   Enables automatic weapon switching during Combo and Harass modes based on context.
*   **Switch for Combo AoE:** [Toggle - OFF by default]
    *   Automatically switches to rockets if multiple enemy heroes can be hit with splash damage during combo.
*   **Min Heroes for Rocket AoE (Combo):** [Slider - 2, Range 2-5, Step 1]
    *   Minimum number of enemy champions that need to be in splash range to switch to rockets for AoE in combo.
*   **Switch for Waveclear AoE:** [Toggle - OFF by default]
    *   Automatically switches to rockets if multiple minions can be hit with splash damage during waveclear.
*   **Minions to Splash with Q (Waveclear):** [Slider - 5, Range 2-6, Step 1]
    *   Minimum number of minions to be hit by rocket splash to trigger the switch in waveclear.
*   **Farm Minimum Mana % (for Rockets):** [Slider - 60%, Range 0-100%, Step 5]
    *   Minimum mana percentage required to use rockets for AoE farming.

---
### W - Zap!
Jinx's long-range shock blast that slows and damages the first enemy hit.
*   **Use W in Combo:** [Toggle - ON by default]
*   **Use W in Harass:** [Toggle - ON by default]
*   **Use W on champs during Lane Clear:** [Toggle - ON by default]
*   **W Range Logic:**
    *   **Combo: Only use outside AA range:** [Toggle - ON by default]
    *   **Harass: Only use outside AA range:** [Toggle - ON by default]
    *   **LaneClear: Only use outside AA range:** [Toggle - OFF by default]
*   **W Smart TTK Check:** [Toggle - ON by default]
    *   Prevents using W if auto-attacks can kill the target faster.
*   **Harass Minimum Mana %:** [Slider - 50%, Range 0-100%, Step 5]
*   **Accurate W Prediction:** [Toggle - ON by default] (From Prediction Settings Menu)
    *   Uses stricter prediction logic for W, increasing accuracy but may cast less often.
*   **Semi-Manual W Key:** [Keybind - G by default] (From Key Settings Menu)

---
### E - Flame Chompers!
Jinx throws out three traps that root enemies.
*   **Combo E Mode:** [Dropdown - Predictive Pathing (Chasing) by default, Options: Off, On CC'd Targets Only, Predictive Pathing (Chasing), Always (Aggressive)]
    *   **Off:** Disables E in combo.
    *   **On CC'd Targets Only:** Places traps under enemies already affected by hard CC.
    *   **Predictive Pathing (Chasing):** Attempts to place traps in the path of a fleeing enemy.
    *   **Always (Aggressive):** Uses E more freely in combo.
*   **E on Path/Chokepoint:** [Toggle - ON by default]
    *   Automatically casts E on predicted enemy paths or key chokepoints.
*   **Use E to Peel:** [Toggle - OFF by default]
    *   Places traps in front of Jinx when an enemy is walking towards her.
*   **E Max Range:** [Slider - 925, Range 500-925, Step 50]
*   **Auto E on CC'd Targets:** [Toggle - ON by default] (From Automatic Settings Menu)
*   **Enable Anti-Gapcloser E:** [Toggle - ON by default] (From Automatic Settings Menu)
*   **Anti-Gapclose E Mode:** [Dropdown - Intercept Path by default, Options: On Self, Intercept Path] (From Automatic Settings Menu)
    *   **On Self:** Places traps at Jinx's feet against gap closers.
    *   **Intercept Path:** Tries to place traps on the enemy's dash path.
*   **Interrupt Spells with E:** [Toggle - ON by default] (From Automatic Settings Menu)
*   **Semi-Manual E Key:** [Keybind - H by default] (From Key Settings Menu)

---
### R - Super Mega Death Rocket!
Jinx fires a global rocket that deals more damage based on travel distance and missing health.
*   **Auto R To Execute in Combo:** [Toggle - ON by default]
*   **Don't R if target in W range (Combo):** [Toggle - ON by default]
    *   Prevents casting R in combo if the target is still within W range (Zap!).
*   **R Minimum Range:** [Slider - W_RANGE (e.g. 1475), Range 500-2000, Step 50]
*   **R Maximum Range:** [Slider - 3000, Range 1000-5000, Step 100]
*   **Accurate R Prediction:** [Toggle - ON by default] (From Prediction Settings Menu)
    *   Uses stricter prediction logic for R, increasing accuracy but may cast less often.
*   **Semi-Manual R Key:** [Keybind - T by default] (From Key Settings Menu)

---
## Killsteal Settings
*   **Enable Killsteal:** [Toggle - ON by default]
*   **Use W:** [Toggle - ON by default]
*   **Use R:** [Toggle - ON by default]

---
## Draw Settings
*   **Enable Drawings:** [Toggle - ON by default]
*   **Status Visualizers:**
    *   **Status Display Mode:** [Dropdown - Permashow by default, Options: Off, Permashow, Next to Champion]
*   **Status Indicators:**
    *   **Show 'GET EXCITED!' Cue:** [Toggle - ON by default]
    *   **Show Weapon Status:** [Toggle - ON by default]
    *   **Show R Killable Text:** [Toggle - ON by default]
*   **Range Indicators:**
    *   **Draw Q Switch Range:** [Toggle - ON by default] (Visualizes current AA range and rocket range)
    *   **Draw W Range:** [Toggle - ON by default]
    *   **Draw E Range:** [Toggle - OFF by default]
    *   **Draw R Range (Max setting):** [Toggle - OFF by default]
    *   **Draw R Range on Minimap:** [Toggle - ON by default]
*   **Damage Indicator:**
    *   **Enable Damage Indicator:** [Toggle - ON by default]
    *   **Show W Damage:** [Toggle - ON by default]
    *   **Show E Damage:** [Toggle - ON by default]
    *   **Show R Damage:** [Toggle - ON by default]
    *   **Number of AAs:** [Slider - 3, Range 0-6, Step 1]