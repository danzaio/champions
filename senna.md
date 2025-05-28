### Senna - The Redeemer - DanZ-AIO Features
<img src="https://raw.communitydragon.org/latest/game/assets/characters/senna/hud/senna_circle_0.png" alt="Senna" title="Senna" data-md-file="senna.md">

*   **Adaptive Q Usage:** Smart "Piercing Darkness" casts leveraging its unique targeting through units, including extended range mechanics and healing allies.
*   **Targeted W CC:** Reliable "Last Embrace" casts for crowd control, peel, and kill secures.
*   **Escape and Utility E:** Strategic "Curse of the Black Mist" usage for self-preservation and team disengage.
*   **Global R Impact:** High-range "Dawning Shadow" for kill secures, AoE damage/shield, and life-saving ally shields.
*   **Automated Soul Collection:** Effortlessly collects souls to scale Senna's power.
---
## Ability Breakdown & Settings
### Q - Piercing Darkness
Senna's core utility and damage spell, unique in its ability to target units to fire through others. DanZ-AIO leverages this mechanic for various scenarios.
*   **Q Extend Prediction Mode:** [Dropdown - Fast Prediction by default, Options: Fast Prediction, Advanced Prediction (Moving Only)]
    *   Controls the logic used when attempting to extend Q range by casting through units.
    *   *Fast Prediction:* Uses the nearest unit to the predicted target to aim Q through, regardless of target movement.
    *   *Advanced Prediction (Moving Only):* Only attempts to extend Q if the intended enemy target has recently changed path. Less aggressive but potentially more reliable prediction for moving targets.
*   **Auto Q on CC'd:** [Toggle - ON by default]
    *   Automatically casts Q on enemies affected by hard crowd control (stun, snare, etc.) within effective range.
*   **Auto Q on CC'd Ally:** [Toggle - ON by default]
    *   Automatically casts Q on allies affected by hard crowd control (stun, snare, etc.) within effective range to heal them.
*   **Use Q in Combo:** [Toggle - ON by default]
    *   Uses Q as part of the combo sequence for damage or healing.
*   **Use Q in Harass:** [Toggle - ON by default]
    *   Uses Q to harass enemies in lane or during poke scenarios, prioritizing damage or healing based on settings.
*   **Harass Q Min Mana %:** [Slider - 60%, Range 0-100%, Step 5]
    *   Minimum mana percentage required to use Q in Harass mode.
*   **Toggle Q Farm Mode:** [Keybind - MMB by default, Toggle]
    *   Toggles the automatic Q farming logic ON/OFF. When OFF, Q will not be used for last hitting minions (but can still be used for jungle clear).
*   **Min Minions for Q:** [Slider - 2, Range 1-10, Step 1]
    *   Minimum number of enemy lane minions that must be hit by the Q beam for it to be cast during Farm mode.
*   **Farm Q Min Mana %:** [Slider - 50%, Range 0-100%, Step 5]
    *   Minimum mana percentage required to use Q for farming minions (when Farm mode is ON).
*   **Use Q in Jungle Clear:** [Toggle - ON by default]
    *   Uses Q for clearing neutral monsters in the jungle.
*   **Use Q to Heal Allies:** [Toggle - ON by default]
    *   Enables Q usage specifically to heal low-health allies outside of combat/harass.
*   **Heal Ally Below HP %:** [Slider - 70%, Range 0-100%, Step 5]
    *   HP percentage threshold below which an ally is considered in need of healing from Q (applies to `Use Q to Heal Allies` and partially to `Auto Q on CC'd Ally`).
*   **Q Priority Mode:** [Dropdown - Damage First by default, Options: Damage First, Heal First]
    *   Determines whether Q should prioritize hitting an enemy for damage or an ally for healing if both are potential targets within effective range.
    *   *Damage First:* Tries to cast Q through a unit to hit the intended enemy target. If no enemy target is found, falls back to trying to heal the best available ally.
    *   *Heal First:* Tries to cast Q through a unit to hit the best available ally for healing. If no ally target is found, falls back to trying to damage the best available enemy.
*   **Q Heal Blacklist:** [Sub-menu]
    *   A list of your teammates. You can toggle them ON to prevent the script from automatically using Q to heal that specific ally. Useful for allies who manage their own health or don't require healing from your Q.
*   **Use Q+Ward Extend KS:** [Toggle - OFF by default]
    *   Attempts to place a ward and then immediately cast Q through it if an enemy target is killable by Q within its effective range but outside your direct Q cast range. Requires a ward item in inventory.
---
### W - Last Embrace
Senna's root ability.
*   **Use W to Killsteal:** [Toggle - ON by default]
    *   Uses W to secure kills on enemies within lethal range.
*   **Auto W on CC'd:** [Toggle - ON by default]
    *   Automatically casts W on enemies already affected by hard crowd control to extend the CC duration.
*   **Use W in Combo:** [Toggle - ON by default]
    *   Uses W as part of the combo sequence to root targets.
*   **Use W in Harass:** [Toggle - OFF by default]
    *   Uses W to harass enemies in lane or during poke scenarios.
*   **Harass W Min Mana %:** [Slider - 70%, Range 0-100%, Step 5]
    *   Minimum mana percentage required to use W in Harass mode.
*   **Use W vs Gap Closers:** [Toggle - ON by default]
    *   Automatically casts W on enemies who are currently dashing towards you or a nearby ally to stop their approach.
*   **Use W vs Gap Closers Below Player HP %:** [Slider - 60%, Range 0-100%, Step 5]
    *   Minimum player HP percentage required to trigger `Use W vs Gap Closers`. Senna will only use W defensively against gap closers if her health is below this threshold.
---
### E - Curse of the Black Mist
Senna's escape and engage tool, turning her and allies into wraiths.
*   **Use E in Combo (Escape/Chase):** [Toggle - OFF by default]
    *   Uses E during combo sequences. Currently implemented to use E for self-preservation if low health, or potentially for chase if outside effective Q range.
*   **Use E When Fleeing:** [Toggle - ON by default]
    *   Uses E on self automatically when in Flee mode.
*   **Auto E on Low HP:** [Toggle - ON by default]
    *   Automatically casts E on self when your health drops below a certain percentage.
*   **Auto E Below Player HP %:** [Slider - 30%, Range 0-100%, Step 5]
    *   HP percentage threshold below which `Auto E on Low HP` will trigger.
---
### R - Dawning Shadow
Senna's global ultimate, providing damage and shield.
*   **Use R to Killsteal:** [Toggle - ON by default]
    *   Uses R to secure kills on enemies within lethal range.
*   **Min R Range KS:** [Slider - 1000, Range 500-5000, Step 100]
    *   Minimum distance for `Use R to Killsteal`. Prevents using R for kills on very close targets where other abilities might be better.
*   **Max R Range KS:** [Slider - 15000, Range 1000-25000, Step 500]
    *   Maximum distance for `Use R to Killsteal`. Set to a high value for global presence.
*   **Use R for AoE in Combo:** [Toggle - ON by default]
    *   Attempts to find a position to cast R that will hit multiple enemy champions during combo.
*   **Min Enemies Hit for R (Combo):** [Slider - 3, Range 1-5, Step 1]
    *   Minimum number of enemy champions that must be predicted to be hit for `Use R for AoE in Combo` to trigger.
*   **Use R to Save Low HP Ally:** [Toggle - OFF by default]
    *   Automatically casts R when a nearby ally is below a certain HP threshold and is near enemies, providing a shield.
*   **Save Ally Below HP %:** [Slider - 20%, Range 0-100%, Step 5]
    *   HP percentage threshold below which an ally is considered in critical need of saving by R.
*   **Max Range to Save Ally (R):** [Slider - 1000, Range 500-10000, Step 50]
    *   Maximum distance to an ally for `Use R to Save Low HP Ally` to trigger.
*   **Semi-Manual R Key:** [Keybind - T by default]
    *   Hold this key to cast R towards the enemy hero closest to your mouse cursor within R range. Useful for quick, targeted R casts.
---
## Soul Collection Settings
Settings related to Senna's passive soul collection.
*   **Enable Soul Collection:** [Toggle - ON by default]
    *   Enables the automatic collection of nearby Senna souls. The script will attempt to move towards or auto-attack souls within range when not in active combat modes.
*   **Draw Nearby Souls:** [Toggle - ON by default]
    *   Highlights collectible Senna souls near you on the screen.
*   **Soul Highlight Color:** [Color - Default Cyan-ish (0, 255, 200, 200)]
    *   Sets the color used to highlight collectible souls.
---
## Farm Settings
Settings to control Milio's farming behavior:
*   **Use Q to Farm:** [Toggle - ON by default]
    *   Enables Q usage for last hitting minions in lane clear and last hit modes (requires `Toggle Q Farm Mode` to be ON). *Note: The actual toggle key and mana/minion limits for farming Q are found under the Q spell settings.*
*   **Mana Limit %:** [Slider - 40%, Range 0-100%, Step 5]
    *   Minimum mana percentage required for using Q for farming minions (this setting is actually in the Q menu under `farm_mana`).
*   **Toggle Farm Mode:** [Keybind - MMB by default, Toggle]
    *   Toggles the automatic Q farming logic ON/OFF. When Farm Mode is ON, Senna will automatically farm minions using Q according to the configured settings. This mode is visually indicated by an overlay on your screen (if drawings are enabled). *Note: This setting is in the Key Settings menu.*
---
## Kill Steal Settings
Settings for securing kills on low-health enemy champions:
*   **Enable Kill Steal:** [Implicitly Enabled per spell]
    *   There is no single master toggle for kill steal. Kill steal logic is active for each spell (`Q`, `W`, `R`) based on their individual kill steal toggles.
*   **Use Q:** [Toggle - ON by default, under Q menu]
    *   Allows "Piercing Darkness" (Q) to be used for kill stealing.
*   **Use W:** [Toggle - ON by default, under W menu]
    *   Allows "Last Embrace" (W) to be used for kill stealing.
*   **Use R:** [Toggle - ON by default, under R menu]
    *   Allows "Dawning Shadow" (R) to be used for kill stealing.
*   **Min R Range KS:** [Slider - 1000, under R menu]
*   **Max R Range KS:** [Slider - 15000, under R menu]
---
## Draw Settings
Settings to customize visual drawings from the script:
*   **Enable Drawings:** [Toggle - ON by default]
    *   Master toggle to enable or disable all drawings from the script.
### General Drawings
*   **Draw R Range on Minimap:** [Toggle - OFF by default]
    *   Draws a circle on the minimap indicating the maximum range of your R kill steal setting.
### Range Drawings
*   **Draw AA Range (Dynamic):** [Toggle - ON by default]
    *   Draws a circle indicating your current dynamic auto-attack range.
*   **Draw Q Cast Range (Dynamic):** [Toggle - ON by default]
    *   Draws a circle indicating your current dynamic Q *cast* range (scales with AA range).
*   **Draw W Range:** [Toggle - ON by default]
    *   Draws a circle indicating the casting range of "Last Embrace" (W).
*   **Draw R KS Range:** [Toggle - OFF by default]
    *   Draws a circle indicating the maximum range set for R kill steal (`Max R Range KS`). Also draws a smaller circle for `Min R Range KS` if set above 0.
### Color Settings
*   **AA Range Color:** [Color - Default White (255, 255, 255, 150)]
    *   Color for the AA range drawing.
*   **Q Cast Range Color:** [Color - Default Greenish (100, 255, 100, 150)]
    *   Color for the Q cast range drawing.
*   **W Range Color:** [Color - Default Blueish (100, 100, 255, 150)]
    *   Color for the W range drawing.
*   **R KS Range Color:** [Color - Default Reddish (255, 100, 100, 150)]
    *   Color for the R kill steal range drawing.
### Damage Drawing
Settings to display damage indicators on enemies:
*   **Draw Combo Damage Indicator:** [Toggle - ON by default]
    *   Master toggle to enable or disable the damage indicator drawing on enemy health bars.
*   **Show Q Damage:** [Toggle - ON by default]
    *   Includes estimated Q damage in the damage indicator calculation and breakdown.
*   **Show W Damage (Detonation):** [Toggle - ON by default]
    *   Includes estimated W detonation damage in the damage indicator calculation and breakdown.
*   **Show R Damage:** [Toggle - ON by default]
    *   Includes estimated R damage in the damage indicator calculation and breakdown.
*   **Number of AAs in Damage Calc:** [Slider - 1, Range 0-5, Step 1]
    *   Estimates this many auto-attacks in the damage indicator calculation.
*   **Show Passive Damage (Estimate):** [Toggle - ON by default]
    *   Includes estimated Passive damage per hit in the damage indicator calculation and breakdown.
*   **Draw Q Farm Mode Status:** [Toggle - ON by default]
    *   Draws an overlay near your champion indicating if Q Farm Mode is ON or OFF.
### Indicator Drawings
*   **Draw Q Extend Lines:** [Toggle - ON by default]
    *   Draws a visual line from the player through the unit being used to extend Q range, indicating the path of the Q beam towards the intended target.
*   **Q Extend Line Color:** [Color - Default Cyan-ish (0, 200, 255, 180)]
    *   Color for the `Q Extend Lines` drawing.
*   **Q+Ward KS Line Color:** [Color - Default Yellow (255, 255, 0, 180)]
    *   Color for the visual line drawn when a Q+Ward KS is being considered.
---
## Utility Settings
General utility features.
*   **Place Ward Key:** [Keybind - U by default]
    *   Hold this key to attempt to place a ward from your inventory at your mouse cursor position. The script will find the first available ward item (Trinket > Inventory Slots) and attempt to cast it if you are within ward placement range and not targeting a wall.
