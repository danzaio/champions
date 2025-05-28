### Milio - The Gentle Flame - DanZ-AIO Features
<img src="https://raw.communitydragon.org/latest/game/assets/characters/milio/hud/milio_circle_0.png" alt="Milio" title="Milio" data-md-file="milio.md">

*   **Precise Q Usage:** Landing crucial "Ultra Mega Fire Kicks" for harass, interrupts, and kill secures.
*   **Intelligent W Shielding:** Protecting allies with "Cozy Campfire," prioritizing low-health or dangerously positioned teammates.
*   **Versatile E Shielding:** Utilizing "Warm Hugs" for both offensive and defensive plays, shielding allies during engages or escapes.
*   **Strategic R Cleansing & Healing:** Using "Breath of Life" to cleanse debilitating crowd control and provide life-saving heals in critical moments.
---
## Ability Breakdown & Settings
### Q - Ultra Mega Fire Kick
Milio's primary offensive and utility spell. DanZ-AIO offers extensive control over its usage:
*   **Auto Interrupt Spells:** [Toggle - ON by default]
    *   Automatically interrupts key enemy channeling spells. A detailed list of interruptible spells can be configured under "Interrupt Spell List".
*   **Interrupt Spell List:** [Sub-menu]
    *   This sub-menu contains toggles for interrupting specific champion ultimate and key spells. You can customize this list to prioritize interrupts based on the enemy composition.
    *   *Example:* Enable "Interrupt Katarina R" to automatically Q Katarina when she uses Death Lotus.
*   **Use in Combo:** [Toggle - ON by default]
    *   Casts Q during combo sequences to deal damage and apply pressure.
*   **Use in Harass:** [Toggle - ON by default]
    *   Automatically uses Q to harass enemies in lane when in Hybrid/Harass mode.
*   **Use in Flee:** [Toggle - OFF by default]
    *   Allows Q to be used offensively while in Flee mode, potentially to slow chasing enemies or create distance.
*   **Use Killsteal:** [Toggle - ON by default]
    *   Attempts to secure kills with Q when enemies are within lethal range.
*   **Auto Use on CC:** [Toggle - ON by default]
    *   Automatically casts Q on crowd-controlled enemies, ensuring easy hits on stunned, snared, etc., targets.
*   **Max Range:** [Slider - 1150, Range 0-1200, Step 50]
    *   Sets the maximum range for Q usage. Adjust this slider if you want to limit Q casting range for mana conservation or positioning reasons.
*   **Harass Mana Limit %:** [Slider - 50%, Range 0-100%, Step 5]
    *   Defines the minimum mana percentage required for Q to be used in Harass mode. Helps manage mana during laning phase.
*   **Semi-Cast Key Q:** [Keybind - G by default]
    *   Hold this key to manually cast Q at your cursor position. Useful for precise Q placements or manual interrupts.
---
### W - Cozy Campfire
Milio's signature shielding and healing ability. DanZ-AIO prioritizes ally safety and strategic W usage:
*   **Auto W Lethal Damage:** [Toggle - ON by default]
    *   Automatically casts W on allies (or self) to prevent lethal incoming damage from enemy spells. This feature has the highest priority to ensure survival.
*   **Auto W Ally Spell Shield:** [Toggle - ON by default]
    *   Automatically uses W on allies who are about to be hit by high-danger enemy skillshots, providing a shield to mitigate damage.
*   **Use W on Fleeing Ally:** [Toggle - ON by default]
    *   If an ally is fleeing and low health, W will be cast on them to aid their escape.
*   **Use in Flee:** [Toggle - ON by default]
    *   Casts W on self when in Flee mode for self-preservation.
*   **W Max Allies Possible:** [Toggle - ON by default]
    *   Attempts to position the W cast to maximize the number of allies shielded by "Cozy Campfire."
*   **Prioritize Dying Ally (Even if less allies hit):** [Toggle - ON by default]
    *   If enabled, will prioritize casting W on a very low health ally, even if it means shielding fewer allies overall. Survival of a critical ally takes precedence.
*   **Ally Shield HP Limit % (Combo):** [Slider - 70%, Range 0-100%, Step 5]
    *   Sets the maximum HP percentage of an ally for W to be cast on them during combo scenarios. This prevents over-shielding allies who are already healthy.
*   **Ally Shield HP Limit % (Harass):** [Slider - 50%, Range 0-100%, Step 5]
    *   Sets the maximum HP percentage of an ally for W to be cast on them during harass scenarios. Generally lower than combo to conserve mana in lane.
*   **Range:** [Slider - 950, Range 100-950, Step 50]
    *   Sets the maximum casting range for W. Generally, you'll want to keep this at the maximum range.
*   **Semi-Cast Key W:** [Keybind - H by default]
    *   Hold this key to manually cast W at your cursor position. Useful for preemptive shielding or specific placements.
*   **Ally Flee HP Limit % (W):** [Slider - 30%, Range 0-100%, Step 5]
    *   Sets the HP percentage threshold for allies to be considered "fleeing" and eligible for automatic W shielding in flee scenarios.
*   **W Skillshot Danger Level:** [Dropdown - Medium by default, Options: Low, Medium, High, Extreme]
    *   Controls the minimum danger level of enemy skillshots that will trigger automatic W spell shield. Higher danger levels mean W will only react to more threatening spells.
    *   *Low:* Reacts to Danger Level 2+ skillshots.
    *   *Medium:* Reacts to Danger Level 3+ skillshots.
    *   *High:* Reacts to Danger Level 4+ skillshots.
    *   *Extreme:* Reacts to Danger Level 5 skillshots only (most dangerous).
---
### E - Warm Hugs
Milio's single-target shield and movement speed buff. DanZ-AIO provides options for both self and ally focused E usage:
*   **Auto E Ally Danger:** [Toggle - ON by default]
    *   Automatically casts E on allies who are about to be hit by dangerous enemy skillshots, providing a shield and movement speed boost.
*   **Use in Combo:** [Toggle - ON by default]
    *   Casts E during combo sequences, primarily for the movement speed buff to aid in positioning or chasing.
*   **Ally Shield HP Limit % (Combo):** [Slider - 70%, Range 0-100%, Step 5]
    *   Sets the maximum HP percentage of an ally for E to be cast on them during combo scenarios, similar to W's HP limit.
*   **Use E on Fleeing Ally:** [Toggle - ON by default]
    *   If an ally is fleeing and low health, E will be cast on them to aid their escape with a shield and speed boost.
*   **Use in Flee:** [Toggle - ON by default]
    *   Casts E on self when in Flee mode for self-preservation and escape.
*   **Range:** [Slider - 650, Range 100-650, Step 50]
    *   Sets the maximum cast range for E.
*   **Harass Mana Limit %:** [Slider - 50%, Range 0-100%, Step 5]
    *   Defines the minimum mana percentage required for E usage in Harass mode. Primarily relevant if E was to be used offensively (though less common for Milio).
*   **Semi-Cast Key E:** [Keybind - J by default]
    *   Hold this key to manually cast E. By default, it will prioritize casting on an ally targetted by your Target Selector. If no valid ally target is found, it will self-cast E.
*   **Combo Ally Attack Enemy E:** [Toggle - ON by default]
    *   Automatically casts E on an ally when they are auto-attacking an enemy champion during combo/hybrid mode. This provides a shield and speed boost to help allies secure kills or win trades.
*   **E Priority:** [Dropdown - Ally by default, Options: Self, Ally]
    *   Determines the priority target for E semi-cast and potentially in other automated scenarios (though less relevant for E automation compared to W).
    *   *Self:* Prioritizes self-casting E when the semi-cast key is pressed.
    *   *Ally:* Prioritizes casting E on a selected ally (Target Selector target) when the semi-cast key is pressed. If no valid ally is selected, it may fall back to self-cast or not cast.
*   **Ally Flee HP Limit % (E):** [Slider - 30%, Range 0-100%, Step 5]
    *   Sets the HP percentage threshold for allies to be considered "fleeing" and eligible for automatic E shielding in flee scenarios.
*   **E Skillshot Danger Level:** [Dropdown - Medium by default, Options: Low, Medium, High, Extreme]
    *   Controls the minimum danger level of enemy skillshots that will trigger automatic E spell shield for allies. Similar to W's danger level setting.
    *   *Low:* Reacts to Danger Level 2+ skillshots.
    *   *Medium:* Reacts to Danger Level 3+ skillshots.
    *   *High:* Reacts to Danger Level 4+ skillshots.
    *   *Extreme:* Reacts to Danger Level 5 skillshots only (most dangerous).
---
### R - Breath of Life
Milio's ultimate, providing powerful crowd control cleanse and healing in an area. DanZ-AIO focuses on strategic and reactive R usage:
*   **Auto CC Cleanse:** [Sub-menu]
    *   Allows you to customize which types of crowd control effects will trigger automatic R cleansing on nearby allies.
        *   **Cleanse Stun:** [Toggle - ON by default]
        *   **Cleanse Snare:** [Toggle - ON by default]
        *   **Cleanse Taunt:** [Toggle - ON by default]
        *   **Cleanse Charm:** [Toggle - ON by default]
        *   **Cleanse Fear:** [Toggle - ON by default]
        *   **Cleanse Suppression:** [Toggle - ON by default]
        *   **Cleanse Polymorph:** [Toggle - ON by default]
        *   **Cleanse Knockup:** [Toggle - ON by default]
        *   **Cleanse Knockback:** [Toggle - ON by default]
        *   **Cleanse Grounded:** [Toggle - ON by default]
        *   **Cleanse Asleep:** [Toggle - ON by default]
            *   Toggle these options to specify which CC types you want Milio's R to automatically cleanse.
*   **Semi-Cast Key R:** [Keybind - T by default]
    *   Hold this key to manually cast R at your current position. Useful for preemptive cleansing or manual healing in specific situations.
*   **Auto R Low HP Ally:** [Toggle - ON by default]
    *   Automatically casts R when nearby allies are below a specified HP threshold, providing a burst heal.
*   **Ally HP Limit % (R):** [Slider - 20%, Range 0-100%, Step 5]
    *   Sets the HP percentage threshold for allies to trigger automatic R healing. Adjust this slider to control how aggressively R is used for healing. A lower percentage means R will be used more readily when allies are critically low.
---
## Farm Settings
Settings to control Milio's farming behavior:
*   **Use Q to Farm:** [Toggle - ON by default]
    *   Enables Q usage for last hitting minions in lane clear and last hit modes.
*   **Mana Limit %:** [Slider - 50%, Range 0-100%, Step 5]
    *   Sets the minimum mana percentage required for using Q to farm.
*   **Toggle Farm Mode:** [Keybind - MMB (Middle Mouse Button) by default, Toggle]
    *   Toggles between Farm Mode ON and OFF. When Farm Mode is ON, Milio will automatically farm minions using Q according to the configured settings. This mode is visually indicated by an overlay on your screen (if drawings are enabled).
---
## Kill Steal Settings
Settings for securing kills on low-health enemy champions:
*   **Enable Kill Steal:** [Toggle - ON by default]
    *   Enables the kill steal module, allowing Milio to automatically attempt to secure kills.
*   **Use Q:** [Toggle - ON by default]
    *   Allows "Ultra Mega Fire Kick" (Q) to be used for kill stealing.
---
## Draw Settings
Settings to customize visual drawings from the script:
*   **Enable Drawings:** [Toggle - ON by default]
    *   Master toggle to enable or disable all drawings from the script.
### Range Drawings
*   **Draw Q Range:** [Toggle - ON by default]
    *   Draws a circle indicating the casting range of "Ultra Mega Fire Kick" (Q).
*   **Draw W Range:** [Toggle - OFF by default]
    *   Draws a circle indicating the casting range of "Cozy Campfire" (W).
*   **Draw E Range:** [Toggle - OFF by default]
    *   Draws a circle indicating the casting range of "Warm Hugs" (E).
*   **Draw R Range:** [Toggle - OFF by default]
    *   Draws a circle indicating the casting range of "Breath of Life" (R).
---
## Damage Drawing
Settings to display damage indicators on enemies:
*   **Show Q Damage:** [Toggle - ON by default]
    *   Enables damage indicators displaying potential "Ultra Mega Fire Kick" (Q) damage above enemy champions. (Note: Milio's other abilities don't typically deal direct damage shown in indicators).
