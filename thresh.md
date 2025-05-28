# Thresh - The Chain Warden - DanZ-AIO Features

<img src="https://raw.communitydragon.org/latest/game/assets/characters/thresh/hud/thresh_circle.png" alt="Thresh" title="Thresh" data-md-file="thresh.md">

*   **Advanced Q Prediction:** Utilizes a sophisticated prediction system (`pred.linear.get_prediction` with custom filters) to accurately land "Death Sentence" (Q) hooks on moving targets.
*   **Intelligent Hook Management:** Options for automatic Q on CC'd or dashing targets, and Q2 (follow-up dash) usage control in combos.
*   **Strategic "Dark Passage" (W) Usage:** Automatically throws the lantern to save low-health allies or uses it situationally in combos. Includes a dedicated keybind for manual ally saves.
*   **Versatile "Flay" (E) Control:** Automatic E usage against gap closers, plus dedicated keybinds to manually force push or pull enemies. Smart E logic integrated into combo modes.
*   **Flash + Q Combo:** Executes Flash + Hook combos with prediction for surprise engages or catching distant targets.
*   **Multi-Mode Combo System:** Offers different combo sequences (QWE, WQE, EWQ) to adapt to various engagement scenarios.
*   **Automatic Interrupts:** Uses Q or E to interrupt important enemy channelled spells (configurable).
*   **Comprehensive Drawing Options:** Includes range indicators (including Flash+Q), prediction lines, target information, and status indicators for enhanced situational awareness.

## Ability Breakdown & Settings

### Q - Death Sentence

Thresh's signature hook, crucial for playmaking.

*   **Use Q in Combo:** [Toggle - ON by default]
    *   Enables "Death Sentence" (Q) usage during the Combo sequence.
*   **Use Q2 (Follow Hook) in Combo:** [Toggle - ON by default]
    *   Allows Thresh to automatically use the second activation of Q ("Death Leap") to dash to the hooked target during the Combo sequence, typically just before the hook expires.
*   **Auto Q on CC'd Targets:** [Toggle - ON by default]
    *   Automatically casts Q on nearby enemy champions who are immobilized (Stun, Snare, Suppression), making the hook easier to land.
*   **Auto Q on Dashing Targets:** [Toggle - ON by default]
    *   Automatically attempts to predict and cast Q on enemy champions who are currently dashing.
*   **Q Range:** [Slider - 1000, Range 800-1075, Step 25]
    *   Sets the maximum casting range for Death Sentence (Q). *Note: Base range is 1075, prediction might adjust effective range slightly.*
*   **Interrupt with Q:** [Toggle - ON by default]
    *   Allows Q to be used to interrupt enemy channelled spells if they are within range and enabled in Interrupt settings.

### W - Dark Passage

The life-saving lantern, used for utility and shielding.

*   **Use W in Combo:** [Toggle - ON by default]
    *   Enables "Dark Passage" (W) usage during the Combo sequence, typically thrown towards allies or strategic locations.
*   **Cast W on Lowest Ally Key:** [Keybind - Z by default, Hold]
    *   When held, automatically casts W towards the lowest health nearby ally (excluding yourself) within range. Useful for quick saves.
*   **W Range:** [Slider - 950, Range 500-950, Step 50]
    *   Sets the maximum casting range for Dark Passage (W).

### E - Flay

A versatile tool for displacement and crowd control.

*   **Use E in Combo:** [Toggle - ON by default]
    *   Enables "Flay" (E) usage during the Combo sequence. The direction (push/pull) is determined by the combo logic or Smart E setting.
*   **Use E Against Gap Closers:** [Toggle - ON by default]
    *   Automatically casts Flay (E) to interrupt enemy dashes or jumps towards you or allies.
*   **E Mode (Combo/Harass):** [Dropdown - Smart by default, Options: Smart, Always Push, Always Pull]
    *   Determines how E is used automatically in Combo/Harass:
        *   **Smart:** Attempts to pull enemies closer or push them away based on context (Default logic usually pulls).
        *   **Always Push:** Always uses E to push enemies away from Thresh.
        *   **Always Pull:** Always uses E to pull enemies towards Thresh.
*   **Force Push Key:** [Keybind - A by default, Hold]
    *   When held, forces the next E cast (if used manually or by combo/harass) to push the target away from Thresh.
*   **Force Pull Key:** [Keybind - S by default, Hold]
    *   When held, forces the next E cast (if used manually or by combo/harass) to pull the target towards Thresh.
*   **E Range:** [Slider - 500, Range 300-500, Step 25]
    *   Sets the effective range for Flay (E). *Note: The hitbox starts slightly behind Thresh.*
*   **Interrupt with E:** [Toggle - ON by default]
    *   Allows E to be used to interrupt enemy channelled spells if they are within range and enabled in Interrupt settings.

### R - The Box

A powerful zoning and slowing ultimate.

*   **Use R in Combo:** [Toggle - ON by default]
    *   Enables "The Box" (R) usage during the Combo sequence.
*   **Minimum Enemies for R:** [Slider - 2, Range 1-5, Step 1]
    *   Sets the minimum number of nearby enemy champions required to automatically cast R during the Combo.
*   **R Range:** [Slider - 450, Range 300-450, Step 25]
    *   Sets the casting range for The Box (R).

## Combo Settings

Settings controlling Thresh's behavior when the Combo key is active.

*   **Combo Key:** [Keybind - Spacebar by default, Hold]
    *   Hold this key to activate the full Combo logic.
*   **Combo Logic:** [Dropdown - Q -> W -> E by default, Options: Q -> W -> E, W -> Q -> E, E -> W -> Q]
    *   Selects the preferred order of ability usage in the combo sequence when abilities are available.
*   **Flash + Q Combo Key:** [Keybind - T by default, Hold]
    *   Hold this key to attempt a Flash + Q combo on the best available target within Flash + Q range.

## Harass Settings

Settings for poking and trading in lane.

*   **Harass Key:** [Keybind - C by default, Hold]
    *   Hold this key to activate the Harass logic.
*   **Use Q:** [Toggle - ON by default]
    *   Enables "Death Sentence" (Q) usage in Harass mode.
*   **Use E:** [Toggle - ON by default]
    *   Enables "Flay" (E) usage in Harass mode (direction based on E Mode setting).
*   **Minimum Mana %:** [Slider - 40%, Range 0-100%, Step 5]
    *   Sets the minimum mana percentage required to use abilities in Harass mode.

## Interrupt Settings

Settings for automatically interrupting enemy spells.

*   **Enable Interrupts:** [Toggle - ON by default]
    *   Master toggle for the automatic spell interruption feature.
*   **Interrupt with Q:** [Toggle - ON by default] (See Q Settings)
    *   Allows using Q to interrupt channelled spells.
*   **Interrupt with E:** [Toggle - ON by default] (See E Settings)
    *   Allows using E to interrupt channelled spells.
*   **Interruptible Spell List:** [Configuration Sub-menu - Not directly adjustable here, but shows which spells are targeted]
    *   The script contains a predefined list of important enemy channelled spells that can be interrupted.

## Draw Settings

Customize visual indicators provided by the script.

*   **Enable Drawings:** [Toggle - ON by default]
    *   Master toggle to enable or disable all script drawings.

    ### Range Drawings
    *   **Draw Q Range:** [Toggle - ON by default]
    *   **Draw W Range:** [Toggle - ON by default]
    *   **Draw E Range:** [Toggle - ON by default]
    *   **Draw R Range:** [Toggle - OFF by default]
    *   **Draw Flash + Q Range:** [Toggle - ON by default]

    ### Color Settings
    *   **Q Color:** [Color Picker - Default: Yellow]
    *   **W Color:** [Color Picker - Default: Green]
    *   **E Color:** [Color Picker - Default: Blue]
    *   **R Color:** [Color Picker - Default: Red]
    *   **Flash+Q Color:** [Color Picker - Default: Cyan]

    ### Other Draw Options
    *   **Draw Q Prediction Line/Info:** [Toggle - ON by default]
        *   Draws the calculated trajectory for Q, target path, prediction confidence, and other debug info.
    *   **Draw E Cast Position:** [Toggle - ON by default]
        *   Visualizes the position where E will be cast (especially for push/pull).
    *   **Draw Flash Target Position:** [Toggle - ON by default]
        *   Shows the location Thresh will attempt to Flash to during a Flash+Q combo.
    *   **Draw Flash+Q Prediction Target:** [Toggle - ON by default]
        *   Shows the predicted location the Q will be aimed at after Flashing.
    *   **Draw Current Target:** [Toggle - OFF by default]
        *   Highlights the current target selected by the script.
    *   **Prediction Color:** [Color Picker - Default: White]
    *   **E Cast Pos Color:** [Color Picker - Default: Magenta]
    *   **Flash Pos Color:** [Color Picker - Default: Pink]
    *   **Flash+Q Pred Color:** [Color Picker - Default: Light Blue]

## Damage Drawing

Display potential damage on enemy health bars.

*   **Show Q Damage:** [Toggle - ON by default]
*   **Show E Damage:** [Toggle - ON by default]
*   **Show R Damage:** [Toggle - ON by default]
*   **Number of AAs in Damage Calc:** [Slider - 1, Range 0-5, Step 1]
    *   Includes the damage of this many auto-attacks in the total damage indicator.
