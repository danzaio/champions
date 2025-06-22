### Kog'Maw - The Mouth of the Abyss - DanZ-AIO Features
<img src="https://raw.communitydragon.org/latest/game/assets/characters/kogmaw/hud/kogmaw_circle_0.png" alt="Kog'Maw" title="KogMaw" data-md-file="kogmaw.md">

*   **Precise Q Snipes:** "Caustic Spittle" (Q) for poke, resistance shred in combos, and kill securing.
*   **Optimized W Usage:** "Bio-Arcane Barrage" (W) for extended range and magic damage on-hit, core to his DPS. (Note: W activation logic retained from original script as per user request, menu options primarily for drawing/awareness).
*   **Effective E Slows:** "Void Ooze" (E) for area denial, slowing enemies, and kill securing, with anti-gapclose utility.
*   **Strategic R Bombardment:** "Living Artillery" (R) for long-range poke, finishing low-health targets, and auto-casting on CC'd enemies, with stack and mana management. Semi-manual R key for precise targeting.
*   **Flexible Farming Modes:** Configurable farming modes (Q Only, E Only, Q+E, Off) cycled via keybind for lane and jungle clear, with mana management.
*   **Comprehensive Visuals:** Range indicators, damage display, R stack counter, and farm mode indicator.

---
## Ability Breakdown & Settings
### Q - Caustic Spittle
Kog'Maw spits corrosive saliva, dealing magic damage and shredding armor and magic resist.
*   **Use Q in Combo:** [Toggle - ON by default]
*   **Use Q in Harass:** [Toggle - ON by default]
*   **Use Q to Killsteal:** [Toggle - ON by default]

---
### W - Bio-Arcane Barrage
Kog'Maw gains bonus attack range and his auto-attacks deal bonus magic damage.
*   **Use W in Combo:** [Toggle - ON by default]
    *   *(Note: The core activation logic for W in combos is based on the original script's behavior and is not heavily configurable via new menu items, prioritizing its use when targets are in range or to gain range advantage.)*

---
### E - Void Ooze
Kog'Maw launches ooze that damages and slows enemies it passes through, leaving a trail that also slows.
*   **Use E in Combo:** [Toggle - ON by default]
*   **Use E in Harass:** [Toggle - ON by default]
*   **Use E to Killsteal:** [Toggle - ON by default]
*   **Use E for Anti-Gapclose:** [Toggle - ON by default] (From Utility Menu)
    *   Automatically casts E to slow enemies dashing towards Kog'Maw.
*   **Use E to Interrupt:** [Toggle - ON by default] (From Utility Menu)
    *   Attempts to use E to interrupt channelled spells (though less reliable than hard CC).

---
### R - Living Artillery
Kog'Maw launches a living artillery shot from great range, dealing magic damage (bonus to low HP targets) and revealing them. Successive shots cost more mana.
*   **Use R in Combo:** [Toggle - ON by default]
*   **Max R Stacks in Combo:** [Slider - 3, Range 1-10, Step 1]
    *   Maximum number of R stacks allowed before stopping R casts in combo to manage mana.
*   **Use R to Killsteal:** [Toggle - ON by default]
*   **Max R Stacks for KS:** [Slider - 2, Range 1-10, Step 1]
    *   Maximum R stacks allowed for killsteal attempts.
*   **Auto R on CC'd:** [Toggle - ON by default]
    *   Automatically casts R on crowd-controlled enemies.
*   **Use R as Finisher:** [Toggle - ON by default]
    *   Uses R to execute enemies below a configured health percentage, potentially ignoring R stack limit if lethal.
*   **Finish Enemies Below HP %:** [Slider - 15%, Range 5-40, Step 1]
    *   Health threshold for the R Finisher logic.
*   **Semi-Manual R Key:** [Keybind - T by default]
    *   Hold this key to manually cast R towards the cursor-selected target.

---
## Farm & Jungle Settings
*   **Lane Clear Settings:**
    *   **Lane Clear Mode:** [Dropdown - Off by default, Options: [1] Use Q Only, [2] Use E Only, [3] Use Q + E, [4] Off]
        *   Selects the abilities used for lane clearing.
    *   **Cycle Lane Clear Mode:** [Keybind - MMB by default, Toggle]
        *   Cycles through the available Lane Clear Modes.
    *   **Lane Clear Min Mana %:** [Slider - 40%, Range 0-100%, Step 5]
        *   Minimum mana percentage required to use spells for lane clearing.
    *   **Min Minions for E (Lane Clear):** [Slider - 3, Range 1-7, Step 1]
        *   Minimum number of minions E must hit to be used in lane clear.
*   **Jungle Clear Settings:**
    *   **Use Q in Jungle:** [Toggle - ON by default]
    *   **Use E in Jungle:** [Toggle - ON by default]
    *   **Jungle Min Mana %:** [Slider - 30%, Range 0-100%, Step 5]
        *   Minimum mana percentage required to use spells for jungle clearing.

---
## Harass Mana Manager
*   **Harass Min Mana %:** [Slider - 50%, Range 0-100%, Step 5]
    *   Minimum mana percentage required to use Q or E in Harass mode.

---
## Draw Settings
*   **Enable Drawings:** [Toggle - ON by default]
*   **Range Drawings:**
    *   **Draw Q Range:** [Toggle - ON by default]
        *   Color: Green by default.
    *   **Draw W Range:** [Toggle - ON by default]
        *   Color: Red by default.
    *   **Draw E Range:** [Toggle - ON by default]
        *   Color: Blue by default.
    *   **Draw R Range:** [Toggle - ON by default]
        *   Color: Yellow by default.
*   **Damage Indicator:**
    *   **Enable Damage Indicator:** [Toggle - ON by default]
    *   **Show Q Damage:** [Toggle - ON by default]
    *   **Show E Damage:** [Toggle - ON by default]
    *   **Show R Damage:** [Toggle - ON by default]
    *   **AA Count:** [Slider - 2, Range 0-5, Step 1] (Number of AAs to include in damage calculation)
*   **Other Drawings:**
    *   **Draw R Stacks:** [Toggle - ON by default]
        *   Displays the current number of R stacks near Kog'Maw.
    *   **Draw Farm Mode:** [Toggle - ON by default]
        *   Displays the currently selected lane clear mode.