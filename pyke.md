### Pyke - The Bloodharbor Ripper - DanZ-AIO Features
<img src="https://raw.communitydragon.org/latest/game/assets/characters/pyke/hud/pyke_circle_0.png" alt="Pyke" title="Pyke" data-md-file="pyke.md">

*   **Precision Q Hooks:** "Bone Skewer" (Q) with accurate prediction for both tap (thrust) and hold (throw) casts, used in combos and harass.
*   **Intelligent E Dashes & Stuns:** "Phantom Undertow" (E) for engaging, escaping, and stunning enemies. Features an "E Magnet" toggle to adjust Pyke's position after E dash to ensure the returning phantom hits the target. Includes Flash Follow for E.
*   **Calculated R Executes:** "Death From Below" (R) for executing low-health enemies, with logic to find optimal cast positions and prevent use on invulnerable targets.
*   **Combo & Harass Logic:** Configurable Q and E usage in different combat modes.
*   **Visual Aids:** Range indicators for Q, E, and R, including visualization for R execute zones. Status indicators for E Magnet and "E Only After Q" toggles.

---
## Ability Breakdown & Settings
### Q - Bone Skewer
Pyke throws or thrusts his harpoon, pulling or damaging and slowing the first enemy hit.
*   **Use Q in Combo:** [Toggle - ON by default]
*   **Use Q in Harass:** [Toggle - ON by default]
*   *(Q charging and release logic is handled by the script, prioritizing pulling hooked targets if Q is charged, or thrusting if tapped or target is very close.)*

---
### E - Phantom Undertow
Pyke dashes, leaving behind a phantom that returns to him, stunning enemies it passes through.
*   **Use E (Master Switch):** [Toggle - ON by default]
    *   General toggle for enabling E usage.
*   **E Only After Q (Toggle: MMB):** [Keybind - MMB by default, Toggle ON by default]
    *   Toggles whether E is used only after Q has successfully hit a target. Status displayed on screen.
*   **E Magnet (Toggle: U):** [Keybind - U by default, Toggle ON by default]
    *   Toggles the "E Magnet" feature. When active, after Pyke dashes with E, the script will attempt to slightly adjust Pyke's position to ensure the returning phantom hits the intended target. Status displayed on screen.
*   **Max Enemies (for E engage):** [Slider - 3, Range 1-5, Step 1]
    *   Maximum number of enemies near the target for E to be considered safe for an engage.
*   **Don't E Under Turret:** [Toggle - ON by default]
    *   Prevents casting E if the dash or phantom return would place Pyke under an enemy turret.
*   **Flash Settings (for E):**
    *   **Auto Flash Follow:** [Toggle - ON by default]
        *   If an enemy Flashes out of the E phantom's return path, Pyke will attempt to Flash to reposition the phantom for a stun.
    *   **Only Flash if Killable:** [Toggle - OFF by default]
        *   Restricts "Auto Flash Follow" for E to situations where the subsequent stun and damage would lead to a kill.
    *   **Prevent Flash Under Turret:** [Toggle - ON by default]
        *   Prevents "Auto Flash Follow" if it would result in Pyke Flashing under an enemy turret.

---
### R - Death From Below
Pyke strikes in an X-shaped area, executing enemies below a certain health threshold and blinking to the cast location. If an enemy champion dies in the X, Pyke can recast R.
*   **Use R if Killable (in Combo):** [Toggle - ON by default]
*   **Prevent R on Invulnerable Target:** [Toggle - ON by default]
    *   Prevents R from being cast on targets that are currently invulnerable (e.g., Zhonya's, Kayle R).
*   *(R execute logic automatically calculates if target is below the threshold. Script finds the best X pattern placement.)*

---
## Combo Settings
*   **Use Q:** [Toggle - ON by default] (See Q Settings)
*   **(E usage in combo is controlled by the "E Settings" master toggle and "E Only After Q" toggle.)**
*   **Use R if Killable:** [Toggle - ON by default] (See R Settings)

---
## Harass Settings
*   **Use Q:** [Toggle - ON by default] (See Q Settings)
*   **Use E:** [Toggle -OFF by default] (See E Settings for conditions)

---
## Draw Settings
*   **Draw Q Range:** [Toggle - ON by default]
    *   Color: Default Pyke Q color (e.g., light blue/teal).
*   **Draw E Range:** [Toggle - ON by default]
    *   Color: Default Pyke E color (e.g., ghostly blue).
*   **Draw R Range:** [Toggle - ON by default]
    *   Color: Default Pyke R color (e.g., deep red).
*   **Draw E After Q Status:** [Toggle - ON by default]
    *   Displays "E After Q: ON/OFF" near the player.
*   **Draw E Magnet Status:** [Toggle - ON by default]
    *   Displays "E Magnet: ON/OFF" near the player.
*   **(R Execute X-Pattern visualization is typically drawn when a target is executable.)**