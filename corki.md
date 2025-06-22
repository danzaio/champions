### Corki - The Daring Bombardier - DanZ-AIO Features
<img src="https://raw.communitydragon.org/latest/game/assets/characters/corki/hud/corki_circle_0.png" alt="Corki" title="Corki" data-md-file="corki.md">

*   **Accurate Q Poke:** "Phosphorus Bomb" (Q) usage for harass and combo, utilizing circular prediction.
*   **Strategic W Usage:** "Valkyrie" (W) for aggressive plays (configurable safety checks) and defensive escapes. Special logic for "The Package" engage/escape.
*   **Efficient E Application:** "Gatling Gun" (E) for armor shred in combos and harass.
*   **Precision R Barrages:** "Missile Barrage" (R) for consistent poke and damage, with logic for normal and "Big One" rockets. Manual R key for targeted shots.
*   **Effective Farming:** Q and R usage for lane clearing, with mana management.
*   **Targeted Killsteal:** Utilizes Q and R (including Big R) to secure kills.
*   **Clear Visuals:** Range indicators and prediction visualizations for Q.

---
## Ability Breakdown & Settings
### Q - Phosphorus Bomb
Corki's primary AoE poke and reveal ability.
*   **Use Q in Combo:** [Toggle - ON by default]
    *   Enables Q usage during combo sequences.
*   **Use Q in Harass:** [Toggle - ON by default]
    *   Enables Q usage during harass mode.
*   **Use Q to Killsteal:** [Toggle - ON by default]
    *   Allows Q to be used for securing kills.

---
### W - Valkyrie / The Package
Corki's mobility spell, enhanced when "The Package" is available.
*   **Use W in Combo (Aggressive):** [Toggle - ON by default]
    *   Allows W "Valkyrie" to be used aggressively to engage or reposition in combos.
*   **Max Enemies to W In:** [Slider - 2, Range 1-5, Step 1]
    *   Maximum number of nearby enemies to consider W'ing into aggressively.
*   **Minimum HP% to W In:** [Slider - 40%, Range 0-100%, Step 5]
    *   Minimum player health percentage required to use W aggressively.
*   **Use W to Extend KS Range:** [Toggle - ON by default]
    *   Allows W to be used to get in range for a Q or R killsteal if the target is otherwise out of reach.
*   **Don't W Under Turret (Aggressive):** [Toggle - ON by default]
    *   Prevents aggressive W casts if the destination is under an enemy turret.
*   **Use W Defensively:** [Toggle - ON by default]
    *   Enables W "Valkyrie" for escapes when in danger.
*   **Defensive W Dangerous Enemy Count:** [Slider - 3, Range 1-5, Step 1]
    *   Minimum number of "dangerous" enemies nearby to trigger defensive W.
*   **Defensive W Danger Range:** [Slider - 400, Range 200-800, Step 50]
    *   The range within which enemies are considered for the "Dangerous Enemy Count".
*   **Defensive W HP%:** [Slider - 30%, Range 0-100%, Step 5]
    *   Player health percentage below which defensive W is prioritized.
*   *(Note: Specific "The Package" logic is usually handled by distinct conditions related to its availability and enhanced effects, often prioritizing engages or cutting off escapes.)*

---
### E - Gatling Gun
Corki's cone-based armor and magic resist shred.
*   **Use E in Combo:** [Toggle - ON by default]
    *   Enables E usage during combo sequences when enemies are in range.
*   **Use E in Harass:** [Toggle - OFF by default]
    *   Enables E usage during harass mode.

---
### R - Missile Barrage
Corki's spammable long-range rockets, with a "Big One" every few shots.
*   **Use R in Combo:** [Toggle - ON by default]
    *   Enables R usage during combo sequences.
*   **Use R in Harass:** [Toggle - ON by default]
    *   Enables R usage during harass mode.
*   **Use R to Killsteal:** [Toggle - ON by default]
    *   Allows R (normal missiles) to be used for securing kills.
*   **Use Big Rocket to Killsteal:** [Toggle - ON by default]
    *   Prioritizes using the "Big One" rocket for kill stealing if available and lethal.
*   **Manual R Key:** [Keybind - T by default]
    *   Hold this key to manually fire R missiles at the target closest to your cursor.

---
## Harass Settings
*   **Use Q:** [Toggle - ON by default] (See Q Settings)
*   **Use E:** [Toggle - OFF by default] (See E Settings)
*   **Use R:** [Toggle - ON by default] (See R Settings)
*   **Mana Manager %:** [Slider - 30%, Range 0-100%, Step 5]
    *   Minimum mana percentage required to use abilities in harass mode.

---
## Farm Settings
*   **Use Q:** [Toggle - ON by default]
    *   Enables Q for farming minions.
*   **Use E:** [Toggle - OFF by default]
    *   Enables E for farming minions.
*   **Use R:** [Toggle - OFF by default]
    *   Enables R for farming minions.
*   **Q Min. Minions:** [Slider - 3, Range 1-6, Step 1]
    *   Minimum number of minions Q must hit to be used for farming.
*   **R Min. Minions:** [Slider - 3, Range 1-6, Step 1]
    *   Minimum number of minions R must hit to be used for farming.
*   **Mana Manager %:** [Slider - 40%, Range 0-100%, Step 5]
    *   Minimum mana percentage required for using spells to farm.

---
## KillSteal Settings
*   **Use Q:** [Toggle - ON by default] (See Q Settings)
*   **Use R:** [Toggle - ON by default] (See R Settings)
*   **Use Big Rocket:** [Toggle - ON by default] (See R Settings)

---
## Draw Settings
*   **Draw Q Range:** [Toggle - ON by default]
    *   Color: White by default.
*   **Draw W Range:** [Toggle - ON by default]
    *   Color: Green by default.
*   **Draw E Range:** [Toggle - ON by default]
    *   Color: Yellow by default.
*   **Draw R Range:** [Toggle - ON by default]
    *   Color: Purple by default.
*   **Prediction Visualization:**
    *   **Show Q Prediction:** [Toggle - ON by default]
    *   **Show Enemy Path:** [Toggle - ON by default]
    *   **Show Collision:** [Toggle - ON by default]
*   **(Damage Indicator settings are typically global or under a separate "Damage Drawing" menu, not listed per-champion in this script's menu structure but assumed to be present in DanZ-AIO.)**