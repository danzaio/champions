### Tristana - The Yordle Gunner - DanZ-AIO Features
<img src="https://raw.communitydragon.org/latest/game/assets/characters/tristana/hud/tristana_circle.png" alt="Tristana" title="Tristana" data-md-file="tristana.md">

*   **Fastest Possible E Usage:** Employs smart `orb.combat.register_f_pre_attack` integration to prioritize casting "Explosive Charge" (E) immediately before an auto-attack in combo mode for maximum responsiveness.
*   **Smart Q Activation:** Intelligently uses "Rapid Fire" (Q) based on the current mode (Combo, Harass, Farm, Jungle, Structure) and target status (e.g., E applied).
*   **Intelligent W Engagement & Escape:** Uses "Rocket Jump" (W) to engage potentially killable targets (with configurable safety checks like player HP, enemy numbers, turret avoidance, and target HP threshold) and defensively for escaping gap closers or fleeing.
*   **Versatile E Application:** Flexible use of "Explosive Charge" (E) in Combo and Harass, prioritizing structures and epic/large jungle monsters, and optionally focusing E-marked targets in combo.
*   **Powerful R Utility:** Utilizes "Buster Shot" (R) to interrupt critical enemy spells, secure kills (including an E+R finisher option), push away divers (anti-dash), and enable W->R Insec plays via a dedicated keybind.
*   **Efficient Farming Logic:** Streamlined farming using Q and E for waveclear, structures, and jungle camps, complete with mana management settings. Includes an option to opportunistically E enemy champions during laning/farming.
*   **Targeted Killsteal:** Dedicated Killsteal module primarily using R, with logic to avoid overkill if E detonation is sufficient and an option for E+R finishing bursts.
*   **Comprehensive Visual Aids:** Extensive drawing options including dynamic ranges (AA, E, R), W range, E target information (stacks, timer, damage), R killable indicator, farm mode status, damage indicators, and Insec path lines.

## Ability Breakdown & Settings
### Q - Rapid Fire
*   **Use Q in Combo:** [Toggle - ON by default]
    *   Enables "Rapid Fire" (Q) usage during Combo mode.
*   **Use Q in Harass if E on Target:** [Toggle - ON by default]
    *   In Harass mode, automatically uses Q if the harassed target currently has your "Explosive Charge" (E) applied.
*   **Harass Q Min Mana %:** [Slider - 50%, Range 0-100%, Step 5]
    *   The minimum mana percentage required to use Q in Harass mode.
*   **Use Q in Wave Clear:** [Toggle - ON by default]
    *   Enables Q usage while wave clearing (Lane Clear/Last Hit modes). Requires the Farm Toggle to also be ON.
*   **Toggle Q Farm Mode:** [Keybind - MMB (Middle Mouse Button) by default, Toggle]
    *   Toggles the allowance of Q usage during farming modes (Wave Clear/Last Hit). Effectively enables/disables Q for minions based on the 'Use Q in Wave Clear' setting.
*   **Wave Clear Q Min Mana %:** [Slider - 40%, Range 0-100%, Step 5]
    *   The minimum mana percentage required to use Q for wave clearing or jungling.
*   **Use Q in Jungle Clear:** [Toggle - ON by default]
    *   Enables Q usage while clearing jungle camps.
*   **Use Q on Structures:** [Toggle - ON by default]
    *   Enables Q usage when attacking enemy structures (Turrets, Inhibitors, Nexus).
### W - Rocket Jump
*   **W Combo Usage Mode:** [Dropdown - Gap Close for Kill by default, Options: Never, Gap Close for Kill]
    *   **Never:** Disables W usage in Combo mode.
    *   **Gap Close for Kill:** Allows W to be used to jump towards an enemy champion if they are outside AA range but within W range, *and* several conditions are met (see below).
*   **Min Player HP% (W Gap Close Kill):** [Slider - 70%, Range 0-100%, Step 5]
    *   Minimum player health percentage required to use W offensively ('Gap Close for Kill' mode).
*   **Max Enemies Near Target (W Gap Close Kill):** [Slider - 2, Range 1-5, Step 1]
    *   Maximum number of enemies allowed near the target's landing zone for W 'Gap Close for Kill' to be considered safe.
*   **Prevent Landing Under Turret (W Gap Close Kill):** [Toggle - ON by default]
    *   Prevents the 'Gap Close for Kill' W jump if the calculated landing position is under an enemy turret.
*   **Min Target HP% (W Gap Close Kill):** [Slider - 20%, Range 0-100%, Step 5]
    *   The target enemy champion's health must be *below* this percentage for the 'Gap Close for Kill' W jump to activate.
*   **Use W Away from Gap Closers:** [Toggle - OFF by default]
    *   Automatically uses "Rocket Jump" (W) to jump away from enemies who are using gap-closing abilities towards you.
*   **Min Player HP% (W Anti-Gapclose):** [Slider - 15%, Range 0-100%, Step 5]
    *   Minimum player health percentage required to use the anti-gapclose W defensively.
*   **Use W to Flee:** [Toggle - ON by default]
    *   Allows W to be used to jump towards the mouse cursor when the Flee key is held.
*   **Prevent W Towards Target After R:** [Toggle - ON by default]
    *   Prevents automatically casting W *towards* a target you recently cast R ("Buster Shot") on, avoiding accidental jumps after pushing them away.
### E - Explosive Charge
*   **Use E in Combo:** [Toggle - ON by default]
    *   Enables "Explosive Charge" (E) usage in Combo mode. Utilizes pre-attack logic for fast casting.
*   **Use E in Harass:** [Toggle - ON by default]
    *   Enables E usage in Harass mode.
*   **Harass E Min Mana %:** [Slider - 60%, Range 0-100%, Step 5]
    *   Minimum mana percentage required to use E in Harass mode.
*   **Use E in Wave Clear:** [Toggle - OFF by default]
    *   Enables E usage on minions during wave clearing. Prefers Siege minions.
*   **Use E in Jungle Clear:** [Toggle - ON by default]
    *   Enables E usage on jungle monsters. Prefers Epic/Large monsters.
*   **Farm/Structure E Min Mana %:** [Slider - 45%, Range 0-100%, Step 5]
    *   Minimum mana percentage required to use E for farming (Wave Clear, Jungle) or on Structures.
*   **Use E on Structures:** [Toggle - ON by default]
    *   Enables E usage on enemy structures (Turrets, Inhibitors, Nexus).
*   **Focus E Target in Combo:** [Toggle - ON by default]
    *   In Combo mode, forces the orbwalker to prioritize attacking the target currently marked by your E.
*   **E Enemy in Laneclear:** [Toggle - ON by default]
    *   Allows E to be cast on nearby enemy champions (if they don't already have E) while in Laneclear/Lasthit modes, for opportunistic poke. Uses Farm Mana %.
### R - Buster Shot
*   **Auto R Interrupt Spells:** [Toggle - ON by default]
    *   Automatically uses "Buster Shot" (R) to interrupt specific high-priority enemy channelled spells (configurable list).
*   **Interrupt Spell List:** [Menu]
    *   Allows configuration of which specific enemy champion spells should be interrupted by R. (Generated dynamically based on enemy team).
*   **Use R to Killsteal:** [Toggle - ON by default]
    *   Enables using R to secure kills on low-health enemies within range.
*   **Use R + E Finisher:** [Toggle - ON by default]
    *   In Killsteal logic, allows R to be used if the combined damage of R and an existing E detonation is enough to kill the target, even if R alone isn't.
*   **Don't R if E Will Kill:** [Toggle - ON by default]
    *   Prevents R Killsteal if an existing E charge detonation is already predicted to be lethal.
*   **Use R Against Dashes:** [Toggle - ON by default]
    *   Automatically uses R to push away an enemy champion who is dashing very close to you.
*   **Min Player HP% (R Anti-Dash):** [Slider - 20%, Range 0-100%, Step 5]
    *   Minimum player health percentage required for the automatic R Anti-Dash feature to activate.
*   **R Insec Keybind:** [Keybind - A by default]
    *   Hold this key to attempt a W->R "Insec" maneuver. The script will try to W past the nearest target and R them back towards your original location. Requires W and R to be ready.

## Combo Settings
*   **Use Q:** [Toggle - ON by default] (See Q Settings)
*   **W Mode:** [Dropdown - Gap Close for Kill by default] (See W Settings)
*   **Use E:** [Toggle - ON by default] (See E Settings)
*   **Focus E Target:** [Toggle - ON by default] (See E Settings)
*   *(Note: W usage in combo is heavily conditional based on W settings above)*

## Harass Settings
*   **Use Q (if E on Target):** [Toggle - ON by default] (See Q Settings)
*   **Use E:** [Toggle - ON by default] (See E Settings)
*   **Q Minimum Mana %:** [Slider - 50%, Range 0-100%, Step 5] (See Q Settings)
*   **E Minimum Mana %:** [Slider - 60%, Range 0-100%, Step 5] (See E Settings)

## Farm Settings
*   **Use Q:** [Toggle - ON by default, Requires Toggle Key] (See Q Settings)
*   **Toggle Q Farm:** [Keybind - MMB by default] (See Q Settings)
*   **Use E (Minions):** [Toggle - OFF by default] (See E Settings)
*   **Use E (Structures):** [Toggle - ON by default] (See E Settings)
*   **Use E (Enemy Champions):** [Toggle - ON by default] (See E Settings)
*   **Q Minimum Mana %:** [Slider - 40%, Range 0-100%, Step 5] (See Q Settings)
*   **E Minimum Mana %:** [Slider - 45%, Range 0-100%, Step 5] (See E Settings)
*   **Use Q (Structures):** [Toggle - ON by default] (See Q Settings)

## Jungle Settings
*   **Use Q:** [Toggle - ON by default] (See Q Settings)
*   **Use E:** [Toggle - ON by default] (See E Settings)
*   **Q Minimum Mana %:** [Slider - 40%, Range 0-100%, Step 5] (See Q Settings)
*   **E Minimum Mana %:** [Slider - 45%, Range 0-100%, Step 5] (See E Settings)

## Kill Steal Settings
*   **Use R:** [Toggle - ON by default] (See R Settings)
*   **Use R+E Finisher:** [Toggle - ON by default] (See R Settings)
*   **Don't R if E Kills:** [Toggle - ON by default] (See R Settings)
*   *(Note: Killsteal primarily uses R based on its settings. E detonation contributes passively or via the finisher logic).*

## Draw Settings
*   **Enable Drawings:** [Toggle - ON by default]
    *   Master toggle to enable or disable all drawings from the script.
    ### Range Drawings
    *   **Draw Auto-Attack Range (Dynamic):** [Toggle - ON by default]
        *   Draws a circle indicating Tristana's current auto-attack range (scales with level). Uses Q Color when Q is ready/active.
    *   **Draw E Range (Dynamic):** [Toggle - ON by default]
        *   Draws a circle indicating Tristana's current E/R range (scales with level). Uses E Color.
    *   **Draw W Range:** [Toggle - OFF by default]
        *   Draws a circle indicating the fixed casting range of "Rocket Jump" (W). Uses W Color.
    *   **Draw R Range (Dynamic):** [Toggle - OFF by default]
        *   Draws a circle indicating Tristana's current E/R range (scales with level). Uses R Color.
    ### Color Settings
    *   **Q Range Color:** [Color Picker - Default: White]
        *   Sets the color for the AA/Q range indicator shader.
    *   **W Range Color:** [Color Picker - Default: Greenish]
        *   Sets the color for the W range indicator shader.
    *   **E Range Color:** [Color Picker - Default: Blueish]
        *   Sets the color for the E range indicator shader.
    *   **R Range Color:** [Color Picker - Default: Reddish]
        *   Sets the color for the R range indicator shader.
    *   **E Timer Color:** [Color Picker - Default: Yellow/Orange]
        *   Sets the color for the E timer text drawn on targets.
    ### Other Draw Options
    *   **Draw E Target Information:** [Toggle - ON by default]
        *   Displays information (stacks, remaining time, detonation damage) above targets affected by your E.
    *   **Draw R Killable Text:** [Toggle - ON by default]
        *   Displays text ("R Killable") above enemy champions who can be killed by your R damage.
    *   **Draw Q Farm Mode Status:** [Toggle - ON by default]
        *   Displays an overlay indicating whether Q Farming is currently toggled ON or OFF via the keybind.
    *   **Draw Combo Damage Indicator:** [Toggle - ON by default]
        *   Enables the drawing of damage indicators on enemy health bars (see Damage Drawing section).
    *   **Draw Insec Lines:** [Toggle - ON by default]
        *   When holding the Insec keybind, draws lines indicating the planned W jump path and the R knockback direction on the target.

## Damage Drawing
Settings to display damage indicators on enemies:
*   **Show Q Damage:** [Toggle - ON by default]
    *   Includes Q's potential contribution in damage calculation (Note: Tristana Q is an attack speed steroid, direct damage contribution shown as 0, but included for completeness).
*   **Show W Damage:** [Toggle - ON by default]
    *   Includes W's potential contribution in damage calculation (Note: Tristana W is primarily mobility, direct damage shown as 0, but included for completeness).
*   **Show E Damage:** [Toggle - ON by default]
    *   Enables damage indicators displaying potential *base* "Explosive Charge" (E) damage (without stacks). Full combo calculation includes estimated stack damage.
*   **Show R Damage:** [Toggle - ON by default]
    *   Enables damage indicators displaying potential "Buster Shot" (R) damage.
*   **Number of AAs in Damage Calc:** [Slider - 2, Range 0-5, Step 1]
    *   Sets the number of auto-attacks to include when calculating the total potential combo damage shown in the indicator.
