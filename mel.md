### Mel - The Shadow Empress - DanZ-AIO Features
<img src="https://raw.communitydragon.org/latest/game/assets/characters/rell/hud/rell_circle_0.png" alt="Mel" title="Mel" data-md-file="mel.md">
*(Note: "Mel" is not an official League of Legends champion. The icon for "Rell" is used as a placeholder. Features are based on the provided `mel.lua` script which appears to be for a custom or uniquely named champion configuration, potentially related to a champion like Syndra or Orianna given the "Dark Matter" Q ability, but named "Mel" in the script and index.)*

*   **Precise Q Placement:** "Dark Matter" (Q) usage for poke, farming, and kill secures, utilizing circular prediction.
*   **Advanced W Spell Shield:** Sophisticated "Spell Shield" (W) logic to reflect or block incoming enemy skillshots, with auto-positioning and timing. Includes a detailed visualizer for interception.
*   **Accurate E Dispersal:** "Void Walk" (E, possibly Scatter the Weak if Syndra-like) for combos, harass, and kill securing.
*   **Global R Impact:** "Shadow Assault" (R, possibly Unleashed Power if Syndra-like) for high-damage output in combos and for kill stealing. Semi-manual casting available.
*   **Efficient Farming:** Q usage for lane clear, with mana and minion hit management.
*   **Comprehensive Visuals:** Range indicators, passive stack display (if applicable, based on "Overwhelm" buff), farm mode toggle display, and W interception visualizer.

---
## Ability Breakdown & Settings
### Q - Dark Matter
Mel conjures a sphere of dark matter, dealing damage in an area.
*   **Q Customizable Range:** [Slider - 1050, Range 100-1050, Step 100]
    *   Adjusts the maximum casting range for Q.
*   **Use Q in Combo:** [Toggle - ON by default]
*   **Use Q in Harass:** [Toggle - ON by default]
*   **Q Minimum Mana % (Harass):** [Slider - 30%, Range 0-100%, Step 5]
*   **Use Q to Killsteal:** [Toggle - ON by default]
*   **Auto Q on CC'd:** [Toggle - ON by default]
    *   Automatically casts Q on crowd-controlled enemies.
*   **Auto Q on Flee:** [Toggle - OFF by default]
    *   Allows Q usage while fleeing to deter chasers.
*   **Semi Q Key:** [Keybind - G by default] (From Key Settings Menu)
    *   Hold to manually aim and cast Q.

---
### W - Spell Shield
Mel creates a protective shield that can reflect or block incoming abilities.
*   **Enable W Reflect/Block:** [Toggle - ON by default]
*   **Move Towards Skillshot on W Reflect/Block:** [Toggle - ON by default]
    *   If enabled, Mel will attempt to move into the path of a skillshot to ensure it's intercepted by W.
*   **Reflectable Spells:** [Sub-menu]
    *   Allows toggling W reflection for specific enemy champion abilities. (Defaults ON for most projectiles).
    *   Each enemy champion in the game will have a sub-menu here listing their abilities.
*   **Blockable Spells:** [Sub-menu]
    *   Allows toggling W blocking for specific enemy champion abilities (Experimental, defaults OFF for non-projectiles or low-speed projectiles).
    *   Each enemy champion in the game will have a sub-menu here listing their abilities.

---
### E - Void Walk (or similar displacement/scatter)
Mel's ability for repositioning or affecting enemy positions.
*   **Use E in Combo:** [Toggle - ON by default]
*   **Use E in Harass:** [Toggle - ON by default]
*   **E Minimum Mana % (Harass):** [Slider - 30%, Range 0-100%, Step 5]
*   **Use E to Killsteal:** [Toggle - ON by default]
*   **E Max Range:** [Slider - 1050, Range 100-1050, Step 100]
*   **Auto E on CC'd:** [Toggle - ON by default]
    *   Automatically casts E on crowd-controlled enemies.
*   **Auto E on Flee:** [Toggle - ON by default]
    *   Allows E usage while fleeing.
*   **Semi E Key:** [Keybind - H by default] (From Key Settings Menu)
    *   Hold to manually aim and cast E.

---
### R - Shadow Assault (or similar ultimate)
Mel's ultimate ability for high burst damage.
*   **Use R in Combo:** [Toggle - ON by default]
*   **Use R to Killsteal:** [Toggle - ON by default]
*   **Auto R Killable:** [Toggle - ON by default]
    *   Automatically uses R if it will kill the target.
*   **Semi R Key:** [Keybind - T by default] (From Key Settings Menu)
    *   Hold to manually cast R on the selected target.

---
## Farm Settings
*   **Use Q for Farm:** [Toggle - ON by default]
*   **Minimum Mana % (Farming):** [Slider - 40%, Range 0-100%, Step 5]
*   **Min Minions for Q (Farming):** [Slider - 1, Range 1-10, Step 1]
*   **Toggle Farm Mode Key:** [Keybind - MMB by default, Toggle] (From Key Settings Menu)
    *   Toggles Q farming ON or OFF.

---
## Jungle Settings
*   **Use Q for Jungle:** [Toggle - ON by default]
*   **Use E for Jungle:** [Toggle - OFF by default]
*   **Minimum Mana % (Jungle):** [Slider - 30%, Range 0-100%, Step 5]

---
## Draw Settings
*   **Enable Drawings:** [Toggle - ON by default]
*   **General Drawings:**
    *   **Draw Passive Stacks Overlay:** [Toggle - ON by default] (If "MelPassiveOverwhelm" or "MelOverwhelm" buff exists and is relevant)
*   **Range Drawings:**
    *   **Draw Q Range:** [Toggle - ON by default]
        *   Color: Red by default.
    *   **Draw E Range:** [Toggle - ON by default]
        *   Color: Blue by default.
    *   **Draw R Range:** [Toggle - OFF by default]
        *   Color: Yellow by default.
*   **W Interception Visualizer:** (Implicitly ON when W Reflect/Block is enabled)
    *   Draws lines and points indicating the skillshot being intercepted, Mel's optimal position, and timing.
*   **Damage Drawing:**
    *   **Show Q Damage:** [Toggle - ON by default]
    *   **Show E Damage:** [Toggle - ON by default]
    *   **Show R Damage:** [Toggle - ON by default]
*   **(Farm Mode overlay is drawn if enabled in general drawing settings)**