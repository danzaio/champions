### Orianna - The Lady of Clockwork - DanZ-AIO Features
<img src="https://raw.communitydragon.org/latest/game/assets/characters/orianna/hud/orianna_circle.png" alt="Orianna" title="Orianna" data-md-file="orianna.md">

*   **Precise Ball Control (Q):** "Command: Attack" for strategic ball placement, poke, and setting up combos, with auto Q on CC'd enemies.
*   **Devastating AoE (W):** "Command: Dissonance" for AoE damage and slow/speed utility, with auto W for hitting multiple enemies.
*   **Strategic Shielding & Damage (E):** "Command: Protect" used defensively to shield self or allies based on HP thresholds, and offensively to damage enemies the ball passes through.
*   **Game-Changing Shockwaves (R):** "Command: Shockwave" for AoE CC and damage, with configurable minimum enemy hit counts for combo and automatic usage. Killsteal R option available.
*   **Efficient Farming:** Q and W usage for lane clearing and jungle farming, with mana management.
*   **Targeted Killsteal:** Utilizes Q, W, and R to secure kills.
*   **Clear Visuals:** Range indicators for all abilities, ball position, and prediction lines for Q.

---
## Ability Breakdown & Settings
### Q - Command: Attack
Orianna commands her Ball to a target location, dealing damage to enemies it passes through.
*   **Use Q in Combo:** [Toggle - ON by default]
*   **Use Q in Harass:** [Toggle - ON by default]
*   **Q Harass Minimum Mana %:** [Slider - 30%, Range 0-100%, Step 5]
*   **Auto Q on CC'd Enemies:** [Toggle - ON by default]
    *   Automatically casts Q towards crowd-controlled enemies for easier follow-up.

---
### W - Command: Dissonance
The Ball releases an electric pulse, damaging and slowing nearby enemies, while speeding up nearby allies.
*   **Use W in Combo:** [Toggle - ON by default]
*   **Use W in Harass:** [Toggle - OFF by default]
*   **W Farm Min Minions:** [Slider - 3, Range 1-6, Step 1]
    *   Minimum number of minions that must be in W's AoE to use it for farming.
*   **Auto W (AOE):** [Toggle - ON by default]
    *   Automatically casts W if the Ball is positioned to hit multiple enemies.
*   **Auto W Min Enemies:** [Slider - 2, Range 1-5, Step 1]
    *   Minimum number of enemies required to trigger Auto W.

---
### E - Command: Protect
Orianna commands her Ball to attach to an allied champion or herself, shielding them and damaging enemies it passes through on its way.
*   **Use E in Combo:** [Toggle - ON by default]
    *   Uses E offensively in combo if it can damage enemies while traveling to an ally or self.
*   **E Shield Settings:**
    *   **Use E Shield on Self:** [Toggle - ON by default]
    *   **Shield Self when HP% below:** [Slider - 15%, Range 0-100%, Step 5]
    *   **Use E Shield on Allies:** [Toggle - ON by default]
    *   **Shield Allies when HP% below:** [Slider - 10%, Range 0-100%, Step 5]
*   **E Damage Settings:**
    *   **Use E for Damage:** [Toggle - ON by default]
        *   Allows E to be cast primarily for its passthrough damage, usually aiming the ball towards an ally or self such that it hits enemies.

---
### R - Command: Shockwave
The Ball unleashes a shockwave, pulling nearby enemies towards it and dealing damage.
*   **Use R in Combo:** [Toggle - ON by default]
*   **Combo R Min Hit Enemies:** [Slider - 2, Range 1-5, Step 1]
    *   Minimum number of enemies that must be hit by R for it to be used in combo.
*   **Auto R (AOE):** [Toggle - ON by default]
    *   Automatically casts R if the Ball is positioned to hit a significant number of enemies.
*   **Auto R Min Enemies:** [Slider - 3, Range 1-5, Step 1]
    *   Minimum number of enemies required to trigger Auto R.
*   **Use R to Killsteal:** [Toggle - ON by default]

---
## Farm/Jungle Settings
*   **Lane Clear Settings:**
    *   **Use Q for Lane Clear:** [Toggle - ON by default]
    *   **Use W for Lane Clear:** [Toggle - ON by default]
    *   **Lane Clear Minimum Mana %:** [Slider - 40%, Range 0-100%, Step 5]
*   **Jungle Clear Settings:**
    *   *(Uses Lane Clear Q/W toggles and mana settings for simplicity, or can have dedicated jungle settings if added in script)*

---
## Killsteal Settings
*   **Use Q Killsteal:** [Toggle - ON by default]
*   **Use W Killsteal:** [Toggle - ON by default]
*   **(R Killsteal is part of R settings)**

---
## Draw Settings
*   **Show Skill Ranges:** [Toggle - ON by default]
    *   Draws Q, W, E, and R ranges.
*   **Show Ball Position:** [Toggle - ON by default]
    *   Draws an indicator for the Ball's current position.
    *   **Ball Color:** [Color Picker - Default: White, Alpha 100]
*   **Show Prediction Lines:** [Toggle - ON by default]
    *   Visualizes Q prediction trajectory and target path.
*   **(Damage Indicator settings are typically global or under a separate "Damage Drawing" menu but assumed present in DanZ-AIO.)**