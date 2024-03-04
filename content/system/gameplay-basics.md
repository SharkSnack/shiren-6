---
title: "Gameplay Basics"
metaTitle: "Gameplay Basics - Shiren the Wanderer: Serpentcoil Island Wiki"
metaDescription: "Game mechanic details for Shiren the Wanderer: The Mystery Dungeon of Serpentcoil Island."
---

# Shiren

#### HP

Shiren collapses and the adventure ends in failure if HP falls to 0.<br/>HP decreases from things like monster attacks, certain traps and items, and starvation.<br/>HP can be restored by using items like Otogirisou, Healing Grass, Fixer Scroll, or Rejuvenation Pot.<br/>HP also naturally regenerates as turns elapse outside of battle or item usage.

#### HP Regeneration Rate

The speed at which HP regenerates is based on Shiren's level.

|Level|Rate|
|-|-|
|1~9|+1 HP / Turn|
|10~19|+2 HP / Turn|
|20~99|+3 HP / Turn|

#### Fullness

Fullness depletes as turns elapse, and Shiren takes 1 damage per turn once it reaches 0.<br/>Replenish fullness by eating food items such as Onigiri, Yakitori, Sweet Potato, or Peach Bun.<br/>Fixer Scroll fully restores Fullness if read when Fullness &le; 20, and Grass items replenish 2 Fullness.

#### Fullness Depletion Rate

|State|Rate|
|-|-|
|Normal|1 Fullness / 10 Turns|
|Sating (Shield Rune)|1 Fullness / 20 Turns|
|Sumo Status|1 Fullness / 5 Turns|
|Sating + Sumo Status|1 Fullness / 10 Turns|
|Healing Bracelet|6 Fullness / 10 Turns|
|Healing Bracelet x 2|12 Fullness / 10 Turns|
|Sating + Healing Bracelet|3 Fullness / 10 Turns|
|Sating + Healing Bracelet x 2|6 Fullness / 10 Turns|

#### Sumo Status

New status in Shiren 6 that activates when Shiren's Fullness &ge; 150.

Sumo Status Details:

- Max HP increases by 50.
- Shiren gains a x1.5 multiplier on damage dealt.
- Stepping on a trap simply destroys the trap without triggering it.
    - This includes Pitfall Traps, so be careful when stealing from a dungeon shop.
    - You can pick up or step on traps if you have a Trapper's Bracelet equipped.
    - Spring Traps needed to escape item islands won't break.
- Items and monster special attacks that move or warp the player are nullified.
    - Items - Leaping Grass, Switching Staff, Vaulting Staff, and Skull Mage's Staff.
    - Special Attacks - Armordillo, Tiger Thrower, and Pullfrog.
    - Exception: Unequipping a Waterwalk Bracelet or Floating Bracelet while on water.
- Shiren can dig through walls with normal attacks.
    - Upgrade value won't decrease even if you have a Pickaxe equipped.
- Fullness depletes at double speed (1 Fullness / 5 Turns).
    - The Sating rune slows hunger to regular speed (1 Fullness / 10 Turns).
- If Fullness depletes to 120 or less, Sumo status ends and Max Fullness decreases by 5.
    - You must maintain 121 or higher Fullness if you want to stay in Sumo status.

Related Items:

- Sumo Onigiri
    - Fully Replenishes Fullness.
    - If Max Fullness is less than 150, also increases Max Fullness to 150.
    - Bellyexpand Bracelet and Bellyshrink Bracelet affect the final Max Fullness value.
        - Unequip Bellyexpand Bracelets before eating to avoid diminishing the benefits.
        - Equip Bellyshrink Bracelets before eating to increase Max Fullness further.
- Huge Onigiri
    - Increases Max Fullness by 5, so it cancels out the Max Fulless loss when Sumo Status ends.
- Bellyexpand Bracelet
    - Equipping 1 increases the Max Fullness limit to 225.
        - This lets you eat a Large Onigiri at 125 Fullness to maintain Sumo Status without waste.
        - Only practical if you perform Nigiri Morph Factory to raise Max Fullness to the limit.
- Peach Bun
    - Eating a Peach Bun outside of Sumo Status:
        - If Fullness goes above 150 from eating the Peach Bun, you can wait until Fullness &lt; 150<br/>before reverting from Morph Status to avoid activating Sumo Status.
    - Eating a Peach Bun during Sumo Status:
        - The Max HP +50 effect from Sumo Status doesn't apply during Morph status.
        - Reverting after Fullness goes below 120 skips the -5 Max Fullness penalty.

#### Attack Accuracy

|Type|Accuracy|
|-|-|
|Normal Attack|92%|
|Normal Attack (Rustproof)|94%|
|Accurate Sword|100%|
|Projectile|84%|
|Arrow/Rock + Rapid-fire Bracelet|91~92%|

#### Damage Dealt

This section is for Shiren's normal attack damage.<br/>(Translated from [feketerigo's note](https://note.com/feketerigo6/n/n44e373fda515))

Formula:

<pre>
Dmg = (ATK x RNG - DEF + 1) x Slayer x Sumo x Empowered/Weakened x Fortified/Softened
</pre>

Explanation:

- ATK = STR_ATK + WPN_ATK + LV_ATK
    - STR_ATK
        - Current Strength
    - WPN_ATK
        - Weapon Strength x (0.75 + Current Strength / 32)
    - LV_ATK
        - Level &le; 5 = 1 + (Level - 1) x 1.5
        - 6 &le; Level &le; 13 = 7.5 + (Level - 5) x 1
        - 14 &le; Level = 15.5 + (Level - 13) x 0.5
- RNG
    - ±1/8 = 87.5 ~ 112.5%
- DEF
    - Monster's Defense / 2
- Slayer = (1 + MULT)
    - MULT (Multipliers are additive)
        - 0.5 = Beast, Aquatic, Dragon, Exploding, Floating, Ghost, Cyclops, Draining, Metal
        - 0.5 = Costly Hit, Voracious Hit, Critical Hit
        - 1.0 = Hunger Power
- Sumo
    - x1.5 damage multiplier.
- Empowered
    - 2.0 = Power-up Grass, Aggressive Incense (Can stack)
- Weakened
    - ...Is there anything that inflicts this on the player?
- Fortified
    - 1.25 = Lv4 monster receiving a buff after defeating a character.
    - 2.0 = Defensive Incense
- Softened
    - \~5.0 = Rust Trap x 8

Slayer Multiplier Example:

- Anti-Floating + Anti-Ghost + Costly Hit + Voracious Hit
    - (1 + 0.5 + 0.5 + 0.5 + 0.5) = 3.0, so the attack has a x3.0 damage multiplier.

#### Damage Received

This section is for how much damage Shiren receives from enemy attacks.<br/>(Translated from [feketerigo's note](https://note.com/feketerigo6/n/n44e373fda515))

Formula:

<pre>
Dmg = (ATK x RNG - DEF + 1) x Reduction x Empowered/Weakened x Fortified/Softened
</pre>

Explanation:

- ATK
    - Monster's Attack
- RNG
    - ±1/8 = 87.5 ~ 112.5%
- DEF
    - Shield Strength &le; 20 = Shield Strength
    - 21 &le; Shield Strength = 20 + (Shield Strength - 20) x 0.6
- Reduction (Multipliers are multiplicative)
    - 0.7 = Voracious Block, Costly Block, Hunger Power, Tough At (Number)
    - 0.5 = Full Armor
    - 0.45 = Critproof
- Empowered (Max: 5.0)
    - 2.0 = Lv4 monster receiving a buff after defeating a character.
    - 2.0 = Aquatic type monster on a water tile.
    - 2.0 = Enraged status, Aggressive Incense
    - Power-up Grass: 2.0 → 3.0 → 4.0 → 5.0
- Weakened
    - 0.5 = Poison (Poison Arrow, Rotten Onigiri)
    - Poison Arrow: 0.5 → 0.4 → 0.3 → 0.2 → 0.1 → 0.05 → 0.03? → 0.01?
- Fortified
    - 2.0 = Defensive Incense
- Softened
    - ...Is there anything that inflicts this on the player?

Reduction Multiplier Example:

- Voracious Block + Costly Block
    - (0.7 x 0.7) = 0.49, so the reduction multiplier is x0.49 which roughly halves damage.

# Items

#### Synthesis

Synthesis is a mechanic that lets you merge weapon and shield runes and upgrade value,<br/>and combine same name staves to add their remaining charges together.

※ Synthesis Pots and Mixers must be unlocked through a Side Quest before they appear in dungeons.

How to Synthesize:

The first item you insert into a Synthesis Pot or throw at a Mixer acts as the base.<br/>Each weapon or shield has a limited number of rune slots, and no more runes can be added once filled.<br/>Upgrade value can go up to +99 for any weapon or shield, and staves can go as high as 99 charges.

- Synthesis Pot
    - Insert same category items to synthesize them.
        - Can only synthesize weapons, shields or staves.
- Mixer
    - Throw items at a Mixer to synthesize them.
        - Some different category items can be synthesized (This is called Cross-Mixing).
        - Check to make sure you don't have Far-throwing status before throwing important items.
    - Unlike Shiren 5, Mixers will eat items even when afflicted with Paralyzed or Napping status.
        - Bad status conditions are cured each time Mixer eats an item.
    - The number of items a Mixer can eat depends on their level.
        - Mixer → 2, Mixermon → 3, Mixergon → 4, Mixerdon → 5
    - Bellyexpand Seed increases the number of items a Mixer can eat by 1.
        - Example: Throw a Bellyexpand Seed at a Mixer, then synthesize 3 items instead of 2.

Examples:

- Regular Synthesis
    - Katana first, Golden Sword+2 second → Katana+2 with Rustproof rune.
    - Paralyzing Staff [3] first, Paralyzing Staff [4] second → Paralyzing Staff [7].
- Cross-Mixing
    - Kataka first, Sedating Grass second → Katana with Sedating rune.
        - As mentioned earlier, Cross-Mixing is only possible with Mixer synthesis.

#### Blessings / Curses

Blessings:

- Bell icon is displayed near the item category.
- Only Food, Grass, Scrolls, and Peach Buns have the possibility of being blessed.
- The item can be used 2 times.
    - The Blessing is removed and it returns to being a regular item after the first use.
    - If thrown at a creature, the item falls on the ground underneath the creature after it hits.
- Buying and selling prices are doubled.
- Shiren 6 doesn't have Blessing Scroll or Blessing Pot, so the player cannot bless items.
    - However, Kron's Challenge can result in inventory items becoming blessed.
- If a blessed item gets targeted by a curse, it changes to a cursed item.
- The following scrolls always grant the lucky chance effect when blessed:
    - Identifier Scroll / Exorcism Scroll / Heavenly Scroll / Earthly Scroll

Curses:

- Skull icon is displayed near the item category.
- All item categories have the possibility of being cursed.
- Usage of the item becomes restricted.
    - Equipment: Cannot be unequipped.
        - Removal Trap can remove cursed items that are equipped, but the curse remains.
        - Onigiri Scroll can be used to turn the equipped item into a Large Onigiri.
    - Other Categories: The item cannot be used.
    - If a cursed item is thrown at a creature, it deals 1\~2 damage instead of its normal effect.
- Specific items can be used to remove the curse.
    - Read an Exorcism Scroll, or insert the cursed item into an Exorcism Pot.
    - If it's a weapon or shield, read one of the following scrolls:
        - Heavenly Scroll / Earthly Scroll / Plating Scroll / Slot-adding Scroll
    - If it's a weapon, shield, or bracelet, read a Fixer Scroll.
- Buying and selling prices are 87% of the item's normal price.
- How items get cursed:
    - Read a Curse Scroll.
    - Step on a Curse Trap, or throw an item onto a Curse Trap.
    - Get hit by a Curse Girl family monster's special attack.
    - Synthesize a cursed item.
        - Unlike Shiren 5, you can't remove a curse via synthesis based on the order of items.
- Items that are always found cursed:
    - Bellyshrink Bracelet / Item-losing Bracelet / Gitan-losing Bracelet
- Monster related notes:
    - Gazer's hypnosis cannot make you unequip or throw an equipped item if the item is cursed.
    - Bored Kappas can still make you equip a thrown item even if your equipped item is cursed.

#### Equipment Resonance

Certain weapons and shields activate special effects when equipped at the same time.<br/>See [Resonance](/system/equipment-resonance) for details.

#### Sacred Items

# Dungeon

#### Wind

#### Kron's Challenge

#### Fever Time

# Monsters

#### Spawn Rate

# Facilities

#### Warehouse

#### Item Holder (Storehouse / Bank)

#### Wagoneer (Fast-Travel)
