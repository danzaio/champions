### Varus - The Arrow of Retribution - DanZ-AIO Features
<img src="https://raw.communitydragon.org/latest/game/assets/characters/varus/hud/varus_circle_0.png" alt="Varus" title="Varus" data-md-file="varus.md">

*   **Adaptive Playstyle System:** Choose between ADC/On-Hit, Lethality (Poke), or AP Burst playstyles, activating unique logic tailored for each.
*   **Intelligent Blight Stack Management:** Prioritizes targets with the most Blight (W passive) stacks for detonation with Q or E.
*   **Precision Q (Piercing Arrow):** Advanced custom prediction for Q. Features killsteal, configurable poke keys (Q and W+Q), AP-specific logic (hold Q for 3 stacks, safety release on CC), and farming controls.
*   **Optimized W (Blighted Quiver):** Auto-activates W on Q charge. AP playstyle includes "Execute Only" logic. ADC playstyle allows W->Q detonation on stacked targets.
*   **Versatile E (Hail of Arrows):** Utility features like auto E on immobile targets and anti-gapclose. ADC logic includes combo opening and high attack speed E disabling. Detonates Blight stacks effectively.
*   **Strategic R (Chain of Corruption):** Configurable R usage for engage (always, on killable, on X enemies), auto R on immobile/channeling/diving targets, and semi-manual casting. Intelligent R combo damage calculation.
*   **Comprehensive Visuals:** On-screen HUD for script settings, spell range indicators, damage indicator with combo lethality, and Blight stack counter.

---
## Core Playstyle Settings
*   **Select Build Playstyle:** [Dropdown - ADC / On-Hit by default, Options: ADC / On-Hit, Lethality (Poke), AP Burst]
    *   Tailors the script's logic for Q, W, E, and R usage based on your chosen item build and playstyle.
*   **Prioritize Target with Most Blight:** [Toggle - OFF by default]
    *   When enabled, combo logic will focus the enemy champion with the most Blight (W passive) stacks.

---
## Ability Breakdown & Settings
### Q - Piercing Arrow
Varus charges and fires a powerful arrow that gains range and damage the longer it's charged. Detonates Blight stacks.
*   **Q Prediction Mode:** [Dropdown - Advanced Custom Prediction by default, Options: Advanced Custom Prediction, Extreme Accurate Custom Pred]
    *   Selects the prediction logic for Q. Extreme Accurate may cast less often but with higher hit chance.
*   **Use Q for Killsteal:** [Toggle - ON by default]
*   **Poke with Q Key:** [Keybind - H by default]
    *   Hold to charge and release Q for standard poke.
*   **Poke with W+Q Key:** [Keybind - U by default]
    *   Hold to activate W (if ready) then charge and release Q for empowered poke.
*   **Use Q for Lane Clear:** [Toggle - OFF by default]
*   **Min Minions for Lane Clear Q:** [Slider - 3, Range 1-7, Step 1]
*   **Use Q for Jungle Clear:** [Toggle - OFF by default]
*   **Hold Q if Target is Invisible:** [Toggle - ON by default]
    *   If charging Q and the target becomes invisible, Varus will continue charging (up to max duration) instead of instantly releasing.
*   **ADC - Q Settings:**
    *   **Use Q to Detonate in Combo:** [Toggle - ON by default]
    *   **Min Blight Stacks for Q (ADC):** [Slider - 3, Range 1-3, Step 1]
    *   **Harass with Q (ADC):** [Toggle - OFF by default]
    *   **Harass with W+Q (ADC):** [Toggle - OFF by default]
*   **Lethality - Q Settings:**
    *   **Use Q to Poke in Combo:** [Toggle - ON by default]
    *   **Use Q in Harass (Lethality):** [Toggle - ON by default]
*   **AP - Q Settings:**
    *   **Use Q to Detonate in Combo (Essential):** [Toggle - ON by default, Not Visible/Editable]
    *   **Hold Q Release for 3 Stacks (AP):** [Toggle - ON by default]
        *   In AP mode, Q will be held until the target has 3 Blight stacks or max charge time is reached.
    *   **Insta-release Q if CC'd (AP):** [Toggle - ON by default]
        *   If Varus is hit by crowd control while charging Q, it will be released immediately.

---
### W - Blighted Quiver
Passively, Varus' basic attacks deal bonus magic damage and apply Blight. Actively, Varus empowers his next Piercing Arrow.
*   **Auto-Activate W on Q Charge:** [Toggle - ON by default]
    *   Automatically activates W when Q begins charging (if W is ready).
*   **Only Activate W if W->Q can Execute:** [Toggle - ON by default, Tooltip: Most effective for AP playstyle.]
    *   W will only be auto-activated if the subsequent empowered Q is calculated to be a killing blow.
*   **ADC - W Settings:**
    *   **Use W->Q in Combo on Stacks (ADC):** [Toggle - OFF by default]
        *   When the target has enough Blight stacks, uses W-empowered Q to detonate.
    *   **Only use W->Q for Killsteal (ADC):** [Toggle - ON by default]
        *   If "Use W->Q in Combo on Stacks" is enabled, this restricts it to only when it can secure a kill.
    *   **Min Stacks for W->Q (ADC):** [Slider - 3, Range 1-3, Step 1]

---
### E - Hail of Arrows
Varus fires a volley of arrows that deal physical damage and create a desecrated area that slows enemies and reduces their healing. Detonates Blight stacks.
*   **Semi-Manual E Key:** [Keybind - G by default]
*   **General Utility:**
    *   **Auto E on Immobile Targets:** [Toggle - ON by default]
    *   **Use E for Anti-Gapclose:** [Toggle - ON by default]
*   **Use E for Killsteal:** [Toggle - ON by default]
*   **Use E for Lane Clear:** [Toggle - OFF by default]
*   **Min Minions for Lane Clear E:** [Slider - 3, Range 1-7, Step 1]
*   **Use E for Jungle Clear:** [Toggle - OFF by default]
*   **ADC - E Settings:**
    *   **Start Combo with E (ADC):** [Toggle - OFF by default]
    *   **Use E to Detonate in Combo (ADC):** [Toggle - ON by default]
    *   **Min Blight Stacks for E (ADC):** [Slider - 3, Range 1-3, Step 1]
    *   **Disable E at High Attack Speed (ADC):** [Toggle - OFF by default]
    *   **Bonus AS Threshold to Disable E (%):** [Slider - 150, Range 100-300, Step 10]
*   **Lethality/AP - E Settings:**
    *   **Use E in Combo (Lethality/AP):** [Toggle - ON by default]
    *   **Use E in Harass (Lethality/AP):** [Toggle - ON by default]
    *   **Min Blight Stacks for AP E (AP):** [Slider - 3, Range 1-3, Step 1]

---
### R - Chain of Corruption
Varus throws out a tendril of corruption that immobilizes the first enemy champion hit and then spreads to nearby unaffected champions.
*   **Combo R Usage:** [Dropdown - Only if Target is Killable by default, Options: Always Engage, Only if Target is Killable, If it Hits X Enemies]
*   **Min Enemies for R (AoE Logic):** [Slider - 2, Range 1-5, Step 1]
*   **Auto R on Immobile:** [Toggle - OFF by default]
*   **Use R to Interrupt:** [Toggle - OFF by default]
*   **Use R for Anti-Gapclose:** [Toggle - OFF by default]
*   **Semi-Manual R Key:** [Keybind - T by default]
*   **Use R to Killsteal:** [Toggle - OFF by default]
*   **R Killable Combo Calculation:** (Sub-menu)
    *   **Include R Blight Detonation:** [Toggle - ON by default]
    *   **Include Q in Calculation:** [Toggle - ON by default]
    *   **Include E in Calculation:** [Toggle - ON by default]
    *   **# of AAs to Calculate:** [Slider - 2, Range 0-5, Step 1]

---
## Management
*   **Harass Min Mana %:** [Slider - 60%, Range 0-100%, Step 5]
*   **Lane Clear Min Mana %:** [Slider - 50%, Range 0-100%, Step 5]

---
## Permashow (Status Display)
*   **Enable Permashow:** [Toggle - ON by default]
    *   *(Specific items shown are based on current playstyle and key toggle states, e.g., "Playstyle: ADC", "R Logic: On Killable", "Q Poke: ON/OFF")*

---
## Drawings
*   **Enable Drawings:** [Toggle - ON by default]
*   **Draw E Range:** [Toggle - ON by default]
*   **Draw R Range:** [Toggle - ON by default]
*   **Draw Q Charging Range:** [Toggle - ON by default] (Dynamic range while Q is charging)
*   **Advanced Visualizers:**
    *   **Status Display Mode:** [Dropdown - Permashow by default, Options: Off, Permashow, Next to Champion]
    *   **Draw W Stacks (Blight):** [Toggle - ON by default]
        *   Draws a visual counter of Blight stacks above enemies.
    *   **Draw Current Playstyle:** [Toggle - ON by default]
*   **Damage Indicator:**
    *   **Enable Damage Indicator:** [Toggle - ON by default]
    *   **Calculate Q Damage:** [Toggle - ON by default]
    *   **Calculate E Damage:** [Toggle - ON by default]
    *   **Calculate R Damage:** [Toggle - ON by default]
    *   **Calculate # of AAs:** [Slider - 2, Range 0-5, Step 1]