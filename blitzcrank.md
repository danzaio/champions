### Blitzcrank - The Great Steam Golem - DanZ-AIO Features
<img src="https://raw.communitydragon.org/latest/game/assets/characters/blitzcrank/hud/steamgolem_circle.png" alt="Blitzcrank" title="Blitzcrank" data-md-file="blitzcrank.md">

*   **Advanced Q Prediction:** Utilizes prediction to accurately land "Rocket Grab" (Q), accounting for target movement and collision with minions/walls.
*   **Intelligent Target Prioritization:** Focuses Q on CC'd or slowed enemies for higher hook success rates.
*   **Automatic E Usage:** Automatically casts "Power Fist" (E) immediately after landing a Q for a quick knock-up combo.
*   **Reactive Q on Dashes/Flash:** Attempts to predict and hook enemies at the end of their dash or Flash.
*   **Versatile R Usage:** Employs "Static Field" (R) strategically to interrupt crucial enemy channels, secure kills, hit multiple enemies, and counter gap closers.
*   **Combo Logic:** Executes a Q -> E -> R combo sequence when the combo key is held.
*   **Mana Management:** Allows configuration of minimum mana required for casting Q.
*   **Clear Visual Indicators:** Provides range drawings for Q and R, along with Q prediction visualization.

## Ability Breakdown & Settings
### Q - Rocket Grab
Blitzcrank's signature hook. DanZ-AIO focuses on landing it reliably.
*   **Minimum Mana % for Q:** [Slider - 30% by default, Range 0-100%, Step 5]
    *   Sets the minimum mana percentage required to automatically cast Q in combo or for auto-hooks. Prevents OOM situations.
*   **Auto Q on Dash/Flash:** [Implicit Feature - Always Active]
    *   The script automatically attempts to predict and cast Q on enemies using dashes or Flash within range.
*   **Prediction System:** [Core Feature - Always Active]
    *   Uses prediction logic (`pred.linear.get_prediction`) to aim Q based on target movement.
    *   Includes collision checks (`pred.collision.get_prediction`) to avoid hitting minions unless intended (Note: script currently checks minion collision).

### E - Power Fist
An empowered auto-attack that knocks up the target.
*   **Auto E After Q Hit:** [Toggle - ON by default]
    *   Automatically casts E on the target immediately after a successful Q hook connects.

### R - Static Field
An AoE burst of magic damage and silence, with a passive lightning strike on nearby enemies.
*   **Use R to Interrupt Channels:** [Toggle - ON by default]
    *   Automatically uses R to interrupt important enemy channeling spells (like Katarina R, Malzahar R, etc.) if they are in range.
*   **Interruptible Spells Whitelist:** [Sub-menu with Toggles - All ON by default]
    *   Allows enabling/disabling R interrupts for specific spells:
        *   Katarina R (KatarinaR)
        *   Miss Fortune R (MissFortuneBulletTime)
        *   Malzahar R (MalzaharR)
        *   Janna R (JannaR)
        *   Vel'koz R (VelkozR)
        *   Xerath R Channel (XerathLocusOfPower2)
        *   Galio R (GalioR)
        *   Nunu R (NunuR)
        *   Pantheon R (PantheonRJump)
        *   Shen R (ShenR)
        *   Karthus R (KarthusR)
*   **Use R to Execute:** [Toggle - ON by default]
    *   Automatically casts R if an enemy champion within range can be killed by its damage.
*   **Use R on Minimum Enemies:** [Slider - 2 by default, Range 1-5, Step 1]
    *   In Combo mode, automatically casts R if at least this many enemy champions are within range.
*   **Use R as Anti-Gapcloser:** [Toggle - ON by default]
    *   Automatically uses R to interrupt enemies dashing towards you within a specified range.
*   **Anti-Gapcloser R Range:** [Slider - 400 by default, Range 100-600, Step 25]
    *   Sets the maximum range from Blitzcrank for the Anti-Gapcloser R to trigger. R activates if the enemy dash *ends* within this range.

## Combo Settings
Settings to control Blitzcrank's behavior when the combo key is held.
*   **Use Q in Combo:** [Toggle - ON by default]
    *   Enables casting "Rocket Grab" (Q) during combo mode.
*   **Use E in Combo:** [Toggle - ON by default]
    *   Enables casting "Power Fist" (E) during combo mode (usually chained automatically after Q or used on nearby targets).
*   **Use R in Combo:** [Toggle - ON by default]
    *   Enables casting "Static Field" (R) during combo mode based on the "Use R on Minimum Enemies" setting.
*   **Combo Priority:** [Implicit Logic]
    *   The script generally prioritizes:
        1.  R for Execution (if enabled)
        2.  Q for hooking a target
        3.  E after a successful Q or on a close target
        4.  R for hitting multiple enemies (if enabled)

## Automatic Features
Features that operate automatically based on toggles, outside of holding the combo key.
*   **Auto E After Q Hit:** [Toggle - ON by default] (See E Settings)
*   **Auto Q on Dash/Flash:** [Implicit Feature] (See Q Settings)
*   **Auto R Interrupt:** [Toggle - ON by default] (See R Settings)
*   **Auto R Execute:** [Toggle - ON by default] (See R Settings)
*   **Auto R Anti-Gapcloser:** [Toggle - ON by default] (See R Settings)

## Draw Settings
Settings to customize visual drawings from the script:
*   **Enable Drawings:** [Toggle - ON by default]
    *   Master toggle to enable or disable all drawings from the script.
    ### Range Drawings
    *   **Draw Q Range:** [Toggle - ON by default]
        *   Draws a circle indicating the casting range of "Rocket Grab" (Q). (Color: Typically Yellow/Gold)
    *   **Draw R Range:** [Toggle - ON by default]
        *   Draws a circle indicating the casting range of "Static Field" (R). (Color: Typically Green/Blue)
    ### Other Draw Options
    *   **Draw Q Prediction:** [Toggle - OFF by default]
        *   Draws lines and circles indicating the predicted target position for Q and the hook's path. (Color: Typically Green/Red)

