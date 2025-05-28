### Ezreal - The Prodigal Explorer - DanZ-AIO Features
<img src="https://raw.communitydragon.org/latest/game/assets/characters/ezreal/hud/ezreal_circle.png" alt="Ezreal" title="Ezreal" data-md-file="ezreal.md">

*   **Advanced Prediction System:** Utilizing both fast and advanced prediction modes for "Mystic Shot" (Q) based on target distance, enhancing accuracy in various situations.
*   **Smart "Essence Flux" (W) Usage:**  Prioritizing W on marked targets and offering conditional usage based on Q hit probability and auto-attack range.
*   **Defensive "Arcane Shift" (E):**  Intelligently using E to evade gap closers, considering safe positions away from enemies and turrets, and optionally prioritizing allies for escape.
*   **Versatile "Trueshot Barrage" (R) Modes:**  Offering multiple R usage modes including killsteal, HP threshold based casting, and manual semi-cast, adapting to different combat scenarios.
*   **Smart Combo & Harass Logic:**  Intelligent auto-attack weaving in combo, and conditional spell casting based on kill potential and mana management in harass mode.
*   **Farm and Jungle Clear:**  Automated farming with Q, with customizable modes (Last Hit, Full Clear, Off) and mana management, and jungle clearing with Q and W.
*   **Kill Steal Module:**  Securing kills with Q, W, and R when enemies are within lethal range.
*   **Extensive Drawing Options:**  Comprehensive range indicators, prediction lines, damage indicators, and status overlays for enhanced visual feedback.
## Ability Breakdown & Settings
### Q - Mystic Shot
*   **Farm Under Turret:** [Toggle - ON by default]
    *   Allows Q to be used to farm minions even when you are under your own turret.
*   **Toggle Auto Q:** [Keybind - G by default, Toggle]
    *   Toggles automatic Q casting ON or OFF. When ON, Ezreal will automatically cast Q at targets based on the configured settings.
*   **Disable Auto Q Under Turret:** [Toggle - ON by default]
    *   When enabled, automatically disables Auto Q casting if you are under an enemy turret, preventing unwanted aggression.
*   **Q Range:** [Slider - 1125, Range 600-1150, Step 25]
    *   Sets the maximum casting range for Mystic Shot (Q). Adjust this to control the distance at which Q will be cast.
*   **Advanced Prediction Distance:** [Slider - 700, Range 200-1200, Step 50]
    *   Determines the distance threshold for switching between fast and advanced prediction modes for Q. Targets closer than this distance use fast prediction.
### W - Essence Flux
Ezreal's W offers poke and damage amplification. DanZ-AIO manages its usage for optimal effect:
*   **Use on Towers:** [Toggle - ON by default]
    *   Allows "Essence Flux" (W) to be cast on enemy towers for poke damage.
*   **Use on Towers in AA Range Only:** [Toggle - ON by default]
    *   Restricts W usage on towers only when they are within your auto-attack range, potentially for safer poking.
*   **Use in Combo if can hit Q or inside AA range:** [Toggle - ON by default]
    *   In combo mode, W will only be cast if the target is also within Q range or auto-attack range, ensuring a follow-up.
*   **W Range:** [Slider - 1125, Range 600-1150, Step 25]
    *   Sets the maximum casting range for Essence Flux (W).
*   **Prioritize W Marked Targets in Combo:** [Toggle - ON by default]
    *   In combo mode, if a target is marked by your W, it will be prioritized for spell casts, maximizing damage output.
### E - Arcane Shift
Ezreal's mobility tool, used defensively in DanZ-AIO:
*   **Use E against gap closers:** [Toggle - ON by default]
    *   Automatically casts "Arcane Shift" (E) to escape from enemy gap closers, enhancing survivability.
*   **Don't E into enemies:** [Toggle - ON by default]
    *   Prevents E from being cast towards enemy champions, ensuring it's used for escape or repositioning, not aggression.
*   **Prioritize E towards allies:** [Toggle - ON by default]
    *   When using E defensively, attempts to shift towards the nearest ally, potentially for safer positioning.
*   **Prevent E under turret:** [Toggle - ON by default]
    *   Disables E casting if the target destination is under an enemy turret, preventing risky escapes.
### R - Trueshot Barrage
Ezreal's ultimate for long-range damage and kill secures. DanZ-AIO offers multiple usage modes:
*   **Don't R Under Turret:** [Toggle - ON by default]
    *   Prevents "Trueshot Barrage" (R) from being cast if the predicted target location is under an enemy turret.
*   **R Usage Mode:** [Dropdown - Killable Only by default, Options: Off, Killable Only, Below HP %, Always (in Combo)]
    *   **Off:** Disables automatic R casting.
    *   **Killable Only:** R is automatically cast only when it can secure a kill on an enemy champion (only in Combo mode).
    *   **Below HP %:** R is automatically cast when an enemy champion's health falls below the specified percentage.
    *   **Always (in Combo):** R is cast whenever it's available during combo mode, regardless of kill potential.
*   **Use R below % HP:** [Slider - 40%, Range 1-100%, Step 1]
    *   Sets the health percentage threshold for the "Below HP %" R Usage Mode. R will be cast when an enemy's HP drops below this percentage.
*   **Maximum R Range:** [Slider - 2000, Range 1000-3000, Step 100]
    *   Sets the maximum casting range for "Trueshot Barrage" (R).
*   **R Semi-Manual Key:** [Keybind - T by default]
    *   Hold this key to manually cast R at the targeted enemy. Useful for manual aiming and long-range snipes.
*   **Only R If Target Out of Q/AA Range:** [Toggle - ON by default]
    *   When enabled, R will only be cast automatically if the target is outside of both your Q and auto-attack range, ensuring you're not wasting R when other spells are more effective.
### Combo Settings
Settings to control Ezreal's behavior in combo mode (when the combo key is pressed):
*   **Smart AA Weaving:** [Toggle - ON by default]
    *   Enables intelligent auto-attack weaving between spell casts in combo mode for maximum damage output.
*   **Use Q:** [Toggle - ON by default]
    *   Enables "Mystic Shot" (Q) usage in combo mode.
*   **Use W:** [Toggle - ON by default]
    *   Enables "Essence Flux" (W) usage in combo mode.
*   **Use E:** [Toggle - OFF by default]
    *   Enables "Arcane Shift" (E) usage in combo mode.  Generally used defensively or for repositioning, use with caution in combo.
*   **Don't W if Q Can Kill:** [Toggle - ON by default]
    *   In combo mode, if "Mystic Shot" (Q) is already lethal to the target, "Essence Flux" (W) will not be cast, potentially saving mana.
*   **Don't Q if W+AA Can Kill:** [Toggle - ON by default]
    *   In combo mode, if "Essence Flux" (W) combined with an auto-attack is lethal to the target, "Mystic Shot" (Q) will not be cast, optimizing damage and mana usage.
*   **Don't W/Q if AA Can Kill:** [Toggle - ON by default]
    *   In combo mode, if a single auto-attack is lethal to the target, both "Essence Flux" (W) and "Mystic Shot" (Q) will be skipped, prioritizing the faster auto-attack.
### Harass Settings
Settings for Ezreal's harass behavior in lane (when the harass key is pressed):
*   **Use Q:** [Toggle - ON by default]
    *   Enables "Mystic Shot" (Q) usage in harass mode to poke enemies.
*   **Use W:** [Toggle - ON by default]
    *   Enables "Essence Flux" (W) usage in harass mode for poke and damage amplification.
*   **Minimum Mana %:** [Slider - 40%, Range 0-100%, Step 5]
    *   Sets the minimum mana percentage required for Ezreal to use spells in harass mode, helping manage mana during laning.
## Farm Settings
Settings to control Ezreal's farming behavior:
*   **Use Q:** [Toggle - ON by default]
    *   Enables "Mystic Shot" (Q) to be used for farming minions.
*   **Use W on Towers:** [Toggle - ON by default]
    *   Allows "Essence Flux" (W) to be used on enemy towers while farming, for additional poke damage.
*   **Minimum Mana %:** [Slider - 40%, Range 0-100%, Step 5]
    *   Sets the minimum mana percentage required for using spells to farm, conserving mana for combat.
*   **Q Farm Mode:** [Dropdown - Off by default, Options: Off, Last Hit Only, Full Clear]
    *   **Off:** Disables Q farming completely.
    *   **Last Hit Only:** Q is used only to last-hit minions that are about to die.
    *   **Full Clear:** Q is used to clear minion waves as quickly as possible.
*   **Toggle Q Farm Mode:** [Keybind - MMB (Middle Mouse Button) by default, Toggle]
    *   Toggles through the Q Farm Modes (Off -> Last Hit -> Full Clear -> Off...).
## Jungle Settings
Settings for clearing jungle camps:
*   **Use Q:** [Toggle - ON by default]
    *   Enables "Mystic Shot" (Q) usage for clearing jungle monsters.
*   **Use W on Monsters:** [Toggle - ON by default]
    *   Enables "Essence Flux" (W) usage on jungle monsters, especially Baron and Dragon, for faster clearing.
## Kill Steal Settings
Settings for securing kills on low-health enemy champions:
*   **Enable Kill Steal:** [Toggle - ON by default]
    *   Enables the kill steal module, allowing Ezreal to automatically attempt to secure kills.
*   **Use Q:** [Toggle - ON by default]
    *   Allows "Mystic Shot" (Q) to be used for kill stealing.
*   **Use W:** [Toggle - OFF by default]
    *   Allows "Essence Flux" (W) to be used for kill stealing.
*   **Use R:** [Toggle - OFF by default]
    *   Allows "Trueshot Barrage" (R) to be used for kill stealing, especially on distant targets.
## Draw Settings
Settings to customize visual drawings from the script:
*   **Enable Drawings:** [Toggle - ON by default]
    *   Master toggle to enable or disable all drawings from the script.
    ### Range Drawings
    *   **Draw Q Range:** [Toggle - ON by default]
        *   Draws a circle indicating the casting range of "Mystic Shot" (Q).
    *   **Draw W Range:** [Toggle - ON by default]
        *   Draws a circle indicating the casting range of "Essence Flux" (W).
    *   **Draw E Range:** [Toggle - ON by default]
        *   Draws a circle indicating the casting range of "Arcane Shift" (E).
    *   **Draw R Range:** [Toggle - OFF by default]
        *   Draws a circle indicating the casting range of "Trueshot Barrage" (R).
    ### Color Settings
    *   **Q Color:** [Color Picker - Default: Red]
        *   Sets the color for the Q range indicator and related drawings.
    *   **W Color:** [Color Picker - Default: Green]
        *   Sets the color for the W range indicator and related drawings.
    *   **E Color:** [Color Picker - Default: Blue]
        *   Sets the color for the E range indicator and related drawings.
    *   **R Color:** [Color Picker - Default: Yellow]
        *   Sets the color for the R range indicator and related drawings.
    ### Other Draw Options
    *   **Draw Predictions:** [Toggle - OFF by default]
        *   Enables drawing of prediction lines for skillshots, showing the predicted path of spells.
    *   **Draw Current Target:** [Toggle - OFF by default]
        *   Highlights the current target selected by the script's target selector.
    *   **Draw Collision Check Area:** [Toggle - OFF by default]
        *   Visualizes the area used for collision checks when predicting skillshots.
    *   **Draw Auto Q Status:** [Toggle - ON by default]
        *   Displays an overlay indicating whether Auto Q is currently enabled or disabled.
    *   **Prediction Color:** [Color Picker - Default: Green]
        *   Sets the color for prediction lines and related drawings.
    *   **Collision Area Color:** [Color Picker - Default: Orange]
        *   Sets the color for the collision check area drawings.
    *   **Auto Q Status Color:** [Color Picker - Default: Purple]
        *   Sets the color for the Auto Q status overlay text.
    *   **Show Combo Mode:** [Toggle - ON by default]
        *   Displays an overlay showing the current combo mode status and relevant information.
## Damage Drawing
Settings to display damage indicators on enemies:
*   **Show Q Damage:** [Toggle - ON by default]
    *   Enables damage indicators displaying potential "Mystic Shot" (Q) damage above enemy champions.
*   **Show W Damage:** [Toggle - ON by default]
    *   Enables damage indicators displaying potential "Essence Flux" (W) damage.
*   **Show E Damage:** [Toggle - ON by default]
    *   Enables damage indicators displaying potential "Arcane Shift" (E) damage (Note: Ezreal E is primarily utility/mobility, damage might be minimal).
*   **Show R Damage:** [Toggle - ON by default]
    *   Enables damage indicators displaying potential "Trueshot Barrage" (R) damage.
*   **Number of AAs in Damage Calc:** [Slider - 2, Range 0-5, Step 1]
    *   Sets the number of auto-attacks to consider when calculating total damage in the damage indicators. This helps estimate damage over a short period including auto-attacks.
