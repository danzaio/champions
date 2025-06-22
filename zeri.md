### Zeri - The Spark of Zaun - DanZ-AIO Features
<img src="https://raw.communitydragon.org/latest/game/assets/characters/zeri/hud/zeri_circle_0.png" alt="Zeri" title="Zeri" data-md-file="zeri.md">

*   **Precise Q Aiming:** "Burst Fire" (Q) used as primary damage source, effectively an auto-attack replacement. Includes logic for chasing into Fog of War and attacking wards (including Control Wards in FoW).
*   **Perfected W Prediction:** "Ultrashock Laser" (W) with overhauled prediction, considering terrain for extended range. Options for advanced prediction for normal vs. terrain shots, and dynamic cast time based on attack speed. Auto W after wall dash.
*   **Intuitive E Dashes & Wall Jumps:** "Spark Surge" (E) with reworked wall jump system (mouse-guided jumps to pre-set spots), chase logic in combo, and Q-E-Q burst combo keybind. Improved path visualizer.
*   **Strategic R Usage:** "Lightning Crash" (R) for engages and teamfights, with configurable auto-casting based on HP, enemy count, or kill potential. Option to block manual R if no targets.
*   **Comprehensive Status Display:** Multiple modes (Permashow, Next to Champion) to monitor script settings and buff timers (R, E, Q cooldown) in real-time.
*   **Passive Turret Interaction:** Configurable modes for using Zeri's passive (charged auto-attack) on turrets. (Note: `zeri_v2.lua` mentioned passive turret logic was temporarily removed for rework, this reflects its intended state or previous functionality).

---
## Ability Breakdown & Settings
### Q - Burst Fire
Zeri's primary damage ability, functioning like an auto-attack.
*   **Use Q in Combo:** [Toggle - ON by default]
    *   (Orbwalker handles Q as basic attacks)
*   **Use Q in Harass:** [Toggle - ON by default]
    *   (Orbwalker handles Q as basic attacks)
*   **Chase Q into FoW:** [Toggle - ON by default]
    *   Attempts to predict and fire Q at enemies who have just entered Fog of War.
*   **FoW Chase Duration (sec):** [Slider - 5, Range 1-5, Step 1]
    *   How long to continue chasing with Q into Fog of War after the target disappears.
*   **Use Q on Wards:** [Toggle - ON by default]
    *   Automatically uses Q (as an auto-attack) to clear enemy wards.
*   **Q Control Wards in FoW:** [Toggle - ON by default]
    *   Automatically uses Q on known Control Ward locations even if they are in Fog of War (requires prior vision or knowledge of placement).

---
### W - Ultrashock Laser
Zeri fires an electric pulse that slows and damages the first enemy hit. If it hits terrain, it fires a long-range laser.
*   **Use W in Combo:** [Toggle - ON by default]
*   **Use Advanced Pred for Terrain W:** [Toggle - ON by default]
    *   Uses a more intensive prediction calculation when W is aimed to pass through terrain.
*   **Use Advanced Pred for Normal W:** [Toggle - ON by default]
    *   Uses a more intensive prediction calculation for direct W shots (not through terrain).
*   **Only W if target out of Q range:** [Toggle - ON by default]
    *   In combo, W will only be used if the target is outside of effective Q (auto-attack) range.
*   **Use W in Harass:** [Toggle - ON by default]
*   **Only use W if it hits terrain:** [Toggle - OFF by default]
    *   Restricts W usage to only casts that will pass through terrain for the extended laser.
*   **Use W to Killsteal:** [Toggle - ON by default]
*   **Auto W after E Wall Dash:** [Toggle - ON by default]
    *   Automatically fires W at a nearby target if Zeri is sliding along a wall with E.
*   **Semi W Key:** [Keybind - T by default]
    *   Hold to manually aim and cast W.

---
### E - Spark Surge
Zeri dashes a short distance and empowers her next few Q shots to pierce. If E hits terrain, she grinds along it, extending the dash.
*   **Q-E-Q Combo Key:** [Keybind - U by default]
    *   Press to execute a quick Q -> E (dash) -> Q sequence for burst damage or gap closing.
*   **Use E to Chase in Combo:** [Toggle - OFF by default]
    *   Allows E to be used offensively in combo to dash towards a fleeing target.
*   **Use E to flee over walls:** [Toggle - OFF by default]
    *   Enables using E to dash over terrain when the Flee key is active.
*   **Wall Jump Key:** [Keybind - Z by default]
    *   Hold this key and hover the mouse near a pre-set jump spot to automatically move to the start point and dash across the terrain.

---
### R - Lightning Crash
Zeri discharges a nova of electricity, damaging nearby enemies and overcharging herself, gaining attack speed, move speed, and chain lightning on her Q. Hitting champions extends the duration.
*   **Use R in Combo:** [Toggle - ON by default]
*   **Auto R Killable:** [Toggle - ON by default]
    *   Automatically casts R if it's predicted to secure a kill on a target.
*   **Auto R if My HP < %:** [Slider - 20, Range 0-100, Step 5]
    *   Automatically casts R if Zeri's health drops below this percentage in combat. (0 to disable)
*   **Enable Auto R on Enemy Count:** [Toggle - ON by default]
*   **Auto R if X Enemies Hit:** [Slider - 3, Range 1-5, Step 1]
    *   Automatically casts R if it will hit at least this many enemy champions.
*   **Enable Auto R if Target HP < %:** [Toggle - ON by default]
*   **Auto R if Target HP < %:** [Slider - 30, Range 1-99, Step 5]
    *   Automatically casts R if a nearby enemy champion's health is below this percentage.
*   **Block R if no targets hit:** [Toggle - ON by default]
    *   Prevents manual R casts if no enemy champions are within range.

---
## Farm Settings (Passive Turret Interaction)
*   **Passive Turret Attack Mode:** [Dropdown - Only Charged by default, Options: Always, Only Charged, Never]
    *   *(Note: Lua script mentioned this was temporarily removed for rework. This describes its intended function.)*
    *   **Always:** Uses Zeri's charged passive auto-attack on turrets whenever available.
    *   **Only Charged:** Only uses the passive auto-attack on turrets when it's fully charged.
    *   **Never:** Disables passive auto-attacks on turrets.

---
## Misc Settings (Ward Clearing)
*   **(Q on Wards and Q on FoW Control Wards are under Q Settings)**

---
## Drawings
*   **Enable Drawings:** [Toggle - ON by default]
*   **Draw Q Range:** [Toggle - ON by default]
*   **Draw R Range:** [Toggle - ON by default]
*   **Advanced Visualizers:**
    *   **Status Display Mode:** [Dropdown - Permashow by default, Options: Off, Permashow, Next to Champion]
        *   *(Permashow and Next to Champion displays show various active script settings like W combo, Q chase FoW, W prediction modes, R killable, etc.)*
    *   **Draw E Wall-Dash Path:** [Toggle - ON by default]
        *   Visualizes the path Zeri will take when E is used to grind along terrain.
    *   **Draw R Buff Bar:** [Toggle - ON by default]
        *   Displays a timer bar for R's Overcharge duration and stacks.
    *   **Draw E Buff Bar:** [Toggle - ON by default]
        *   Displays a timer bar for E's empowered Q (Lightning Rounds) duration and stacks.
    *   **Draw Q Cooldown Bar:** [Toggle - ON by default]
        *   Displays a visual bar for Q's cooldown (as it functions like an attack).
    *   **Draw W Hitbox:** [Toggle - ON by default]
        *   Visualizes the W pulse and the extended laser hitbox when aiming through terrain.
*   **Damage Indicator:** (Settings for Q, W, E, R, and Passive AAs)
    *   **Show Q Damage:** [Toggle - ON by default] (Includes E-empowered Q)
    *   **Show W Damage:** [Toggle - ON by default]
    *   **Show E Damage (Initial dash, if applicable):** [Toggle - ON by default]
    *   **Show R Damage (Initial nova):** [Toggle - ON by default]
    *   **Number of Passive AAs (in calc):** [Slider - 1, Range 0-5, Step 1]
*   **Debug Tools:**
    *   **Print Position to Console Key:** [Keybind - G by default]
        *   Prints current world coordinates for adding new custom wall jump spots.