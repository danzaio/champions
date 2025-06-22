### Xerath - The Magus Ascendant - DanZ-AIO Features
<img src="https://raw.communitydragon.org/latest/game/assets/characters/xerath/hud/xerath_circle.png" alt="Xerath" title="Xerath" data-md-file="xerath.md">

*   **Precision Q Snipes:** "Arcanopulse" (Q) with dynamic range based on charge time, featuring advanced prediction (Default Balanced, Extremely Accurate options) and auto-release logic. Used for combo, harass, and kill stealing.
*   **Calculated W Blasts:** "Eye of Destruction" (W) for AoE damage and slow, with configurable logic (always, on slowed/immobile, only if center hits).
*   **Accurate E Stuns:** "Shocking Orb" (E) for single-target stun, with auto E on immobile targets, anti-gapclose, and interrupt capabilities. Utilizes advanced prediction.
*   **Long-Range R Bombardment:** "Rite of the Arcane" (R) with semi-manual tap-assist aiming, auto KS, configurable delay between shots, and target selection modes (Target Selector, Near Mouse).
*   **Efficient Farming:** Q and W usage for lane clearing and jungle farming, with mana and minion hit management.
*   **Comprehensive Visuals:** Range indicators, damage display, Q charge indicator, R shots left, and R killable text for enhanced awareness. Kalman Filter based prediction visualization.

---
## Prediction Settings
*   **Q/E Prediction Accuracy:** [Dropdown - Default (Balanced) by default, Options: Default (Balanced), Extremely Accurate (Stable)]
    *   **Default (Balanced):** Balanced prediction, suitable for most situations. Uses Kalman Filter movement predictability.
    *   **Extremely Accurate (Stable):** Casts only on very stable/predictable targets for highest hit-chance but may cast less often. Uses advanced Kalman Filter stability checks.

---
## Ability Breakdown & Settings
### Q - Arcanopulse
Xerath charges and fires a long-range beam of energy. Range and damage increase with charge time.
*   **Use Q in Combo:** [Toggle - ON by default]
*   **Use Q in Harass:** [Toggle - ON by default]
*   **Use Q to Killsteal:** [Toggle - ON by default]
*   **Auto-Release Full Charge Q:** [Toggle - ON by default]
    *   Automatically releases Q when it reaches maximum charge or if the target is about to leave max range/die. Script handles optimal release timing.

---
### W - Eye of Destruction
Xerath calls down a blast of arcane energy, dealing damage and slowing enemies. Deals increased damage in the center.
*   **Use W in Combo:** [Toggle - ON by default]
*   **Use W in Harass:** [Toggle - ON by default]
*   **W Usage Logic:** [Dropdown - Always by default, Options: Always, Only on Slowed/Immobile, Only if Center Hits]
    *   **Always:** Uses W whenever a target is in range.
    *   **Only on Slowed/Immobile:** Prioritizes using W on targets already slowed or CC'd.
    *   **Only if Center Hits:** Attempts to cast W only if the center of the AoE is predicted to hit the target.

---
### E - Shocking Orb
Xerath fires an orb of raw magic that stuns the first enemy hit. Stun duration increases with distance traveled.
*   **Use E in Combo:** [Toggle - ON by default]
*   **Auto E on Immobile:** [Toggle - ON by default]
    *   Automatically casts E on targets that are already immobilized by other CC.
*   **Auto E Anti-Gapclose:** [Toggle - ON by default]
    *   Automatically uses E to stun enemies dashing towards Xerath.
*   **Auto E to Interrupt:** [Toggle - ON by default]
    *   Uses E to interrupt important enemy channeling spells.

---
### R - Rite of the Arcane
Xerath anchors himself, gaining several long-range arcane barrages.
*   **Semi-Manual R (Tap-Assist) Key:** [Keybind - T by default]
    *   Hold this key: If R is not active, it casts the first shot at a target. If R is active, it continues firing at the target.
*   **Auto R for Killsteal:** [Toggle - ON by default]
    *   Automatically uses R charges to attempt to secure kills on low-health enemies.
*   **Delay Between R Shots (ms):** [Slider - 150, Range 0-1000, Step 50]
    *   The script-enforced delay between automatic R shots. Does not bypass game's minimum delay.
*   **R Max Range:** [Slider - 5000, Range 2000-5000, Step 100]
    *   Sets the maximum range for R targeting.
*   **R Target Selection Mode (for Semi-Manual/Auto KS):** [Dropdown - Near Mouse by default, Options: Target Selector, Near Mouse]
    *   **Target Selector:** Prioritizes the target selected by the script's main target selector.
    *   **Near Mouse:** Prioritizes the enemy champion closest to your mouse cursor within R range.

---
## Farm & Jungle Settings
*   **Use Q (Farm/Jungle):** [Toggle - ON by default]
*   **Minions for Q:** [Slider - 3, Range 1-7, Step 1]
    *   Minimum number of minions Q must hit to be used for farming.
*   **Use W (Farm/Jungle):** [Toggle - ON by default]
*   **Minions for W:** [Slider - 2, Range 1-7, Step 1]
    *   Minimum number of minions W must hit (ideally center) to be used for farming.
*   **Min Mana % (Farm/Jungle):** [Slider - 40%, Range 0-100%, Step 5]

---
## Drawings
*   **Enable Drawings:** [Toggle - ON by default]
*   **Range Drawings:**
    *   **Draw Q Range:** [Toggle - ON by default] (Shows dynamic charging range)
    *   **Draw W Range:** [Toggle - ON by default]
    *   **Draw E Range:** [Toggle - ON by default]
    *   **Draw R Range:** [Toggle - ON by default] (Shows current max R range setting)
*   **Damage Indicator:**
    *   **Enable Damage Indicator:** [Toggle - ON by default]
        *   Calculates damage from Q, W, E, and multiple R shots.
*   **Advanced Visualizers:**
    *   **Status Display Mode:** [Dropdown - Permashow by default, Options: Off, Permashow, Next to Champion]
    *   **Q Charge Indicator:** [Toggle - ON by default]
        *   Displays current Q charge percentage and range.
    *   **R Shots Left:** [Toggle - ON by default]
        *   Displays remaining R barrages when R is active.
    *   **R Killable Text:** [Toggle - ON by default]
        *   Shows text over enemies killable by R.
*   **(Permashow settings are configured in a separate internal menu to select which toggles are displayed.)**