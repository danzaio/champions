### Cassiopeia - The Serpent's Embrace - DanZ-AIO Features
<img src="https://raw.communitydragon.org/14.1/game/assets/characters/cassiopeia/hud/cassiopeia_circle_0.png" alt="Cassiopeia" title="Cassiopeia" data-md-file="cassiopeia.md">

*   **Intelligent Combo:** Utilizes Q, W, E, and R in combination based on customizable logic and prediction.
*   **Advanced Farming Modes:** Multiple configurable farming modes to suit different lane situations, cycled via keybind.
*   **Efficient Jungle Clear:** Clears jungle camps using Q and E based on mana management.
*   **Harass/Hybrid Mode:** Uses Q, W, and E for poking, with optional E last hitting for lane control.
*   **Kill Steal Module:** Automatically attempts to secure kills with Q, E, W, or R.
*   **Comprehensive Auto Abilities:** Auto Q harass, Auto R for CC and interrupts, and Auto W for CC and anti-dash.
*   **Manual Spell Casting:** Semi-cast keys for precise aiming of Q, W, E, and R.
*   **Flash + R Combo:** Executes a Flash + R combo with a dedicated keybind for aggressive plays.
*   **Smart AA Blocking:** Blocks auto-attacks during farming and combo to optimize spell usage.
*   **Extensive Drawing Options:** Visualizes ranges, damage, poisoned targets, farm mode, and Auto Q status.
---
## Ability Breakdown & Settings
### Q - Noxious Blast
*   **Toggle Auto Q:** [Keybind - G by default, Toggle]
    *   Enables or disables automatic Q harass in lane.
*   **Don't Auto Q Under Enemy Turret:** [Toggle - ON by default]
    *   Prevents Auto Q harass if you are under an enemy turret for safety.
*   **Use Q in Combo:** [Toggle - ON by default]
    *   Enables "Noxious Blast" (Q) usage during combo mode.
*   **Use Q in Harass:** [Toggle - ON by default]
    *   Enables "Noxious Blast" (Q) usage during Harass/Hybrid mode.
*   **Use Q in Flee:** [Toggle - OFF by default]
    *   Allows "Noxious Blast" (Q) usage while fleeing, potentially to slow chasing enemies.
*   **Use Q to Killsteal:** [Toggle - ON by default]
    *   Allows "Noxious Blast" (Q) to be used for securing kills on low-health enemies.
*   **Auto Q on CC'd:** [Toggle - ON by default]
    *   Automatically casts Q on crowd-controlled enemies for guaranteed hits.
*   **Q Harass Mana Limit %:** [Slider - 40%, Range 0-100%, Step 5]
    *   Sets the minimum mana percentage required for Auto Q and Harass Q usage.
*   **Q Semi-Cast Key:** [Keybind - Q by default]
    *   Hold this key to manually aim and cast "Noxious Blast" (Q).
*   **Q Range:** [Slider - 850, Range 600-850, Step 25]
    *   Adjusts the maximum casting range for "Noxious Blast" (Q).

---
### W - Miasma
*   **Use W in Combo:** [Toggle - ON by default]
    *   Enables "Miasma" (W) usage during combo mode.
*   **Use W in Harass:** [Toggle - ON by default]
    *   Enables "Miasma" (W) usage during Harass/Hybrid mode for area control and poke.
*   **W Anti-Dash:** [Toggle - ON by default]
    *   Automatically uses "Miasma" (W) to block and counter enemy dashes.
*   **Auto W on CC'd:** [Toggle - ON by default]
    *   Automatically casts W on crowd-controlled enemies for guaranteed area denial.
*   **Use W in Flee:** [Toggle - ON by default]
    *   Casts "Miasma" (W) behind you while fleeing to deter pursuers.
*   **W Harass Mana Limit %:** [Slider - 40%, Range 0-100%, Step 5]
    *   Sets the minimum mana percentage required for Harass W usage.
*   **W Semi-Cast Key:** [Keybind - W by default]
    *   Hold this key to manually aim and cast "Miasma" (W).
*   **W AoE Priority (Teamfight):** [Toggle - ON by default]
    *   Prioritizes hitting multiple enemies with W in Combo mode during teamfights.
*   **Max Range:** [Slider - 850, Range 600-850, Step 25]
    *   Adjusts the maximum casting range for "Miasma" (W).

---
### E - Twin Fang
*   **Use E in Combo:** [Toggle - ON by default]
    *   Enables "Twin Fang" (E) usage during combo mode for sustained damage.
*   **Use E in Harass:** [Toggle - ON by default]
    *   Enables "Twin Fang" (E) usage during Harass/Hybrid mode for poke and last hitting.
*   **Use E Last Hit in Harass:** [Toggle - ON by default]
    *   Prioritizes using "Twin Fang" (E) to last hit minions during Harass mode for efficient farming.
*   **Use E to Killsteal:** [Toggle - ON by default]
    *   Allows "Twin Fang" (E) to be used for securing kills on poisoned, low-health enemies.
*   **E Only on Poisoned:** [Toggle - ON by default]
    *   Restricts "Twin Fang" (E) casting to targets currently poisoned by Q or W, maximizing damage.
*   **E Semi-Cast Key:** [Keybind - E by default]
    *   Hold this key to manually cast "Twin Fang" (E) on a target.

---
### R - Petrifying Gaze
*   **R Combo Usage Mode:** [Dropdown - Always (If Stunnable) by default, Options: Never, Always (If Stunnable), Below HP %]
    *   Determines when "Petrifying Gaze" (R) is used in combo mode.
        *   **Never:** Disables R usage in combo.
        *   **Always (If Stunnable):** Uses R if the target is facing you and can be stunned.
        *   **Below HP %:** Uses R if the target is facing you, can be stunned, and is below a health percentage.
*   **R HP Limit % (Mode 3):** [Slider - 30%, Range 1-100%, Step 5]
    *   Sets the health percentage threshold for R usage in "Below HP %" mode.
*   **Auto R on CC'd:** [Toggle - ON by default]
    *   Automatically casts "Petrifying Gaze" (R) on crowd-controlled enemies if they are facing you.
*   **Auto R Interrupt Spells:** [Toggle - ON by default]
    *   Automatically uses "Petrifying Gaze" (R) to interrupt specific enemy channeling spells if they are facing you.
*   **R Interrupt Spell List:** [Sub-menu]
    *   This sub-menu contains toggles for interrupting specific champion ultimate and key spells with Cassiopeia's R.
        *   *Example:* Enable "Interrupt Katarina R" to automatically R Katarina when she uses Death Lotus (if facing).
*   **Flash R Keybind:** [Keybind - T by default]
    *   Hold this key to execute a Flash + R combo on the targeted enemy.
*   **R Semi-Cast Key:** [Keybind - R by default]
    *   Hold this key to manually cast "Petrifying Gaze" (R) in a direction.
*   **Auto R Min Facing Enemies:** [Slider - 2, Range 1-5, Step 1]
    *   Sets the minimum number of facing enemies required to trigger Auto R in teamfight scenarios.

---
## Combo Settings
*   **Only AA in Combo if Q/E Down:** [Toggle - OFF by default]
    *   Prevents auto-attacking during combo if both "Noxious Blast" (Q) and "Twin Fang" (E) are ready to be cast, prioritizing spell usage.

---
## Farm Settings
*   **Farm Mode:** [Dropdown - E Last Hit Only by default, Options: Q Only, Q+E Last Hit, E Last Hit Only, Q+E Clear]
    *   Selects the current farming logic for lane clear.
        *   **Q Only:** Prioritizes using Q to hit multiple minions for wave clear.
        *   **Q+E Last Hit:** Uses Q for wave clear and E for last hitting.
        *   **E Last Hit Only:** Uses E only to last hit minions.
        *   **Q+E Clear:** Aggressively uses both Q and E for fast wave clear.
*   **Cycle Farm Mode:** [Keybind - MMB (Middle Mouse Button) by default, Toggle]
    *   Toggles through the Farm Modes in the order: Q Only -> Q+E Last Hit -> E Last Hit Only -> Q+E Clear -> Q Only.
*   **Farm Mana Limit %:** [Slider - 40%, Range 0-100%, Step 5]
    *   Sets the minimum mana percentage required for using spells in lane farm.
*   **Q Clear Min Hit (Modes 1, 2, 4):** [Slider - 3, Range 1-5, Step 1]
    *   Sets the minimum number of minions "Noxious Blast" (Q) must hit to be used for wave clearing in Q-focused farm modes.

---
## Jungle Settings
*   **Use Q in Jungle Clear:** [Toggle - ON by default]
    *   Enables "Noxious Blast" (Q) usage for clearing jungle camps.
*   **Use E in Jungle Clear:** [Toggle - ON by default]
    *   Enables "Twin Fang" (E) usage for clearing jungle camps, maximizing damage output.
*   **Jungle Mana Limit %:** [Slider - 40%, Range 0-100%, Step 5]
    *   Sets the minimum mana percentage required for using spells in jungle clear, conserving mana for ganks and lane.

---
## Kill Steal Settings
*   **Enable Kill Steal:** [Toggle - ON by default]
    *   Master toggle to enable or disable the kill steal module.
*   **Use Q:** [Toggle - ON by default]
    *   Allows "Noxious Blast" (Q) to be used for kill stealing.
*   **Use W:** [Toggle - OFF by default]
    *   Allows "Miasma" (W) to be used for kill stealing.
*   **Use E:** [Toggle - ON by default]
    *   Allows "Twin Fang" (E) to be used for kill stealing.
*   **Use R:** [Toggle - OFF by default]
    *   Allows "Petrifying Gaze" (R) to be used for kill stealing, especially on multiple or distant targets.

---
## Draw Settings
*   **Enable Drawings:** [Toggle - ON by default]
    *   Master toggle to enable or disable all visual drawings from the script.
### Range Drawings
*   **Draw Q Range:** [Toggle - ON by default]
    *   Draws a circle indicating the casting range of "Noxious Blast" (Q).
*   **Draw W Range:** [Toggle - OFF by default]
    *   Draws a circle indicating the casting range of "Miasma" (W).
*   **Draw E Range:** [Toggle - OFF by default]
    *   Draws a circle indicating the casting range of "Twin Fang" (E).
*   **Draw R Range:** [Toggle - OFF by default]
    *   Draws a cone indicating the casting range and direction of "Petrifying Gaze" (R).
### Other Draw Options
*   **Draw Damage Indicator:** [Toggle - ON by default]
    *   Displays a damage indicator above enemy champions, showing potential combo damage and killability.
*   **Draw Poisoned Targets:** [Toggle - ON by default]
    *   Circles around enemy champions that are currently poisoned by Cassiopeia's Q or W.
*   **Draw Farm Mode:** [Toggle - ON by default]
    *   Displays an overlay indicating the currently selected Farm Mode above Cassiopeia.
*   **Draw Auto Q Status:** [Toggle - ON by default]
    *   Displays an overlay indicating whether Auto Q is currently enabled or disabled above Cassiopeia.
