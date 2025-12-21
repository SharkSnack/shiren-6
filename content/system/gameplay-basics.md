---
title: "Gameplay Basics"
metaTitle: "Gameplay Basics - Shiren the Wanderer: Serpentcoil Island Wiki"
metaDescription: "Game mechanic details for Shiren the Wanderer: The Mystery Dungeon of Serpentcoil Island."
---

# Characters

## Playable Characters

<h3 id="basics-(all-playable-characters)" class="heading3Green">Basics (All Playable Characters)</h3>

<h4 id="hp" class="heading4Green">HP</h4>

The player collapses and the adventure ends in failure if HP falls to <span class="oceanBlueText">0</span>.<br/>HP decreases from things like monster attacks, certain traps and items, and starvation.<br/>HP can be restored by using items like Otogirisou, Healing Grass, Fixer Scroll, or Rejuvenation Pot.<br/>HP also naturally regenerates as turns elapse outside of battle or through item usage.

- Actions That <span class="blueText">Regen HP</span>
    - Move, or step in place
    - Normal attack (no target)
    - Move onto an item and pick it up
- Actions That <span class="purpleText2">Do Not Regen HP</span>
    - Use, place, or throw an item
    - Normal attack (aimed at a monster)
    - Pick up or exchange an underfoot item

<h4 id="hp-regeneration-rate" class="heading4Green">HP Regeneration Rate</h4>

The speed at which HP regenerates is based on the player's level.

|Level|Rate|
|-|-|
|1 - 9|+1 HP / Turn|
|10 - 19|+2 HP / Turn|
|20 - 99|+3 HP / Turn|

<h4 id="fullness" class="heading4Green"><img src="../images/other/food.png"/> Fullness</h4>

Fullness depletes as turns elapse, and Shiren takes <span class="oceanBlueText">1</span> damage per turn once it reaches <span class="oceanBlueText">0</span>.<br/>Replenish Fullness by eating food items such as Onigiri, Yakitori, Sweet Potato, or Peach Bun.<br/>Fixer Scroll fully restores Fullness if read when Fullness &le; <span class="oceanBlueText">20</span>, and Grass items replenish <span class="oceanBlueText">2</span> Fullness.

<p><b><u><span class="peachText">Fullness Replenishing Items</span>:</u></b></p>

<div class="sourceTable">

|Icon|Item / Source|Fullness|Notes|
|-|-|-|-|
|<img src="../images/other/food.png"/>|Onigiri|50|Dropped by: <img src="../images/monsters_s/27-1.png"/> Nigiri Baby <img src="../images/monsters_s/46-1.png"/> Egg Thing|
|<img src="../images/other/food.png"/>|Large Onigiri|100|Dropped by: <img src="../images/monsters_s/27-2.png"/> Nigiri Morph <img src="../images/monsters_s/46-2.png"/> Running Egg|
|<img src="../images/other/food.png"/>|Huge Onigiri|Max|Dropped by: <img src="../images/monsters_s/27-3.png"/> Nigiri Boss <img src="../images/monsters_s/46-3.png"/> Flying Egg|
|<img src="../images/other/food.png"/>|Rotten Onigiri|30|Comes with a negative effect, similar to Rotten Peach Bun.<br/>Onigiri items turn into this when you step on a <img src="../images/traps/21.png"/> Rotting Trap,<br/>or walk on water tiles / get hit by water (ex: <img src="../images/monsters_s/53-1.png"/> Water Ninja D).|
|<img src="../images/other/food.png"/>|Grilled Onigiri|75|Onigiri items turn into this when hit by fire or explosion damage.|
|<img src="../images/other/food.png"/>|Special Onigiri|30|Dropped by: <img src="../images/monsters_s/27-4.png"/> Nigiri Honcho <img src="../images/monsters_s/46-4.png"/> Hiding Egg|
|<img src="../images/other/food.png"/>|Sumo Onigiri|Max|Mostly obtained from making a <img src="../images/other/behemoth_gate.png"/> Behemoth Gate vanish.|
|<img src="../images/other/food.png"/>|Sweet Potato|50|Makes creatures in the same room warp elsewhere.|
|<img src="../images/other/food.png"/>|Yakitori|50|<img src="../images/monsters_s/13-1.png"/> Hen turns into this when hit by fire or explosion damage.|
|<img src="../images/other/momoman.png"/>|Peach Bun (any)|25|Eating any non-rotten Peach Bun replenishes 25 Fullness.|
|<img src="../images/other/momoman.png"/>|Rotten Peach Bun|30|Comes with a negative effect, similar to Rotten Onigiri.|
|<img src="../images/other/scroll.png"/>|Fixer Scroll|Max|Read when Fullness &le; 20 for Fullness replenishing effect.|
|<img src="../images/other/grass.png"/>|Grass (any)|2|Eating any grass item replenishes 2 Fullness.|
|<img src="../images/other/grass.png"/>|Revival Grass (revive)|Max|Being revived by Revival Grass fully replenishes Fullness.|
|<img src="../images/weapon/36.png"/>|Bonito Block|20|Nibbling on the weapon lowers upgrade value by 1.<br/>Cannot nibble any more when weapon strength drops to 0.|

</div>

<h4 id="fullness-depletion-rate" class="heading4Green"><img src="../images/shield/29.png"/> Fullness Depletion Rate</h4>

Fullness depletion for playable characters other than Shiren and Asuka is 1 Fullness / 10 Turns.<br/>Default display Fullness value of <span class="oceanBlueText">100</span> is stored as <span class="oceanBlueText">20000</span> in memory (so <span class="oceanBlueText">200</span> = <span class="oceanBlueText">1</span> Fullness).<br/>Numbers in parenthesis are internal memory Fullness depletion values per turn.

<div class="charTable">

|State|![Shiren](../images/icons/27.png) Shiren|![Asuka](../images/icons/32.png) Asuka|
|-|-|-|
|Normal|1 Fullness / 10 Turns (-20)|1 Fullness / 10 Turns (-20)|
|Sating (Shield Rune)|1 Fullness / 20 Turns (-10)|1 Fullness / 20 Turns (-10)|
|Sumo (Status)|1 Fullness / 5 Turns (-40)|1 Fullness / 2 Turns (-100)|
|Sating + Sumo|1 Fullness / 10 Turns (-20)|1 Fullness / 4 Turns (-50)|
|Healing (Bracelet)|3 Fullness / 5 Turns (-120)|3 Fullness / 5 Turns (-120)|
|Healing x2|6 Fullness / 5 Turns (-240)|6 Fullness / 5 Turns (-240)|
|Sating + Healing|3 Fullness / 10 Turns (-60)|3 Fullness / 10 Turns (-60)|
|Sating + Healing x2|3 Fullness / 5 Turns (-120)|3 Fullness / 5 Turns (-120)|
|Healing + Sumo|6 Fullness / 5 Turns (-240)|3 Fullness / 1 Turn (-600)|
|Healing x2 + Sumo|12 Fullness / 5 Turns (-480)|6 Fullness / 1 Turn (-1200)|
|Sating + Healing + Sumo|3 Fullness / 5 Turns (-120)|3 Fullness / 2 Turns (-300)|
|Sating + Healing x2 + Sumo|6 Fullness / 5 Turns (-240)|3 Fullness / 1 Turn (-600)|

</div>

<h4 id="sumo-status-(overview)" class="heading4Green"><img src="../images/icons/19.png"/> Sumo Status (Overview)</h4>

New status in Shiren 6 that activates when Shiren or Asuka's Fullness &ge; <span class="oceanBlueText">150</span>.<br/>Kokatsu Shiren, Tatsumi Shiren, and Koppa do not gain Sumo status even if Fullness &ge; <span class="oceanBlueText">150</span>.<br/>Drawbacks like a faster hunger rate and being unable to warp apply so it's not strictly an upgrade,<br/>though overall the beneficial effects generally outweigh the negative effects.

<div class="charTable">

|Change|![Shiren](../images/icons/27.png) Shiren|![Asuka](../images/icons/32.png) Asuka|
|-|-|-|
|Max HP|+50|+50|
|Damage Multiplier|x1.5|x1.5 (x4.5 w/Crit)|
|Dig Out Walls|Yes|Yes|
|Trap Immunity|Yes|Yes|
|Trip Protection|Yes|Yes|
|Movement Effects|Nullified|Nullified|
|100% Crit Rate|No|Yes|
|Hunger Rate|1 Fullness / 5 Turns|1 Fullness / 2 Turns|

</div>

<h4 id="sumo-status-(in-depth)" class="heading4Green"><img src="../images/icons/19.png"/> Sumo Status (In-Depth)</h4>

<p><b><u><span class="peachText">Sumo Status Details</span>:</u></b></p>

- Max HP is increased by <span class="oceanBlueText">50</span> and Current HP is restored by <span class="oceanBlueText">50</span> when the status activates.
    - The upper limit for Max HP is still <span class="oceanBlueText">500</span> with or without Sumo status.
- Asuka's innate crit rate increases to 100%, but Shiren does not gain crit rate.
- The player gains a <span class="orangeText2">x1.5</span> multiplier on damage dealt for normal attacks and arrows.
    - Asuka gains a total multiplier of <span class="orangeText2">x4.5</span> for normal attacks, factoring in the 100% crit rate.
- Stepping on a trap simply destroys the trap without triggering it.
    - This includes Pitfall and Floor-exiting traps, so be careful when stealing from a shop.
    - Spring Traps used to escape item islands, vaults, and buried shops won't break or function.
    - You can pick up or walk on traps if you have a Trapper's Bracelet equipped.
        - However, the trap will still break if you attempt to manually activate it.
    - To activate a trap underfoot: Place the trap next to a wall → shoot an arrow at the wall.
        - This lets you use Pitfall, Feeding, Removal, and other useful traps during Sumo status.
        - The warp effect of Spring, Log, and Gassy traps is still nullified.
- Items and monster special attacks that move or warp the player are nullified.
    - Items - Leaping grass/bracelet, Switching, Vaulting, Knockback, Skull Mage's staves.
        - Narrow-escape Staff won't warp you to the stairs, but will inflict Paralyzed status.
        - Monstercall Scroll won't warp you if read in a hallway or shop (won't generate a MH).
        - Unequipping a Waterwalk Bracelet or Floating Bracelet while on water makes you warp.
        - Entering flowing water with a Waterwalk Bracelet won't force movement.
    - Special Attacks - Lv1-2 Skull Mage, Armordillo, Tiger Thrower, Pullfrog, Tree Ninja, Jakaku.
        - Sumo status also protects against Armordillo and Jakaku's tripping effect.
- The player can dig through walls with normal attacks.
    - Upgrade value never decreases, even when you have a Pickaxe equipped.
- Fullness depletes at <span class="orangeText2">x2.0</span> speed (Shiren) or <span class="orangeText2">x5.0</span> speed (Asuka) during Sumo status.
    - Normal = 1 Fullness / 10 Turns (Shiren & Asuka).
    - Sumo = 1 Fullness / 5 Turns (Shiren), 1 Fullness / 2 Turns (Asuka).
    - Sating = 1 Fullness / 10 Turns (Shiren), 1 Fullness / 4 Turns (Asuka).
- If Fullness depletes to <span class="oceanBlueText">120</span> or less, Sumo status ends and Max Fullness decreases by <span class="oceanBlueText">5</span>.
    - You must maintain <span class="oceanBlueText">121+</span> Fullness if you want to stay in Sumo status.

<p><b><u><span class="peachText">Related Items / Modes</span>:</u></b></p>

<p><b><u>Sumo Onigiri</u></b><br/>Food item introduced in Shiren 6 that activates Sumo status when eaten by Shiren or Asuka.<br/>Rare outside of Sumo Dungeon, but can be obtained from making a <span class="runeIcon"><img src="../images/other/behemoth_gate.png"/></span> Behemoth Gate vanish.<br/>Max Fullness is less than <span class="oceanBlueText">150</span> = Max Fullness increases to <span class="oceanBlueText">150</span>, and fully replenishes Fullness.<br/>Max Fullness is greater than <span class="oceanBlueText">150</span> = No change to Max Fullness, and fully replenishes Fullness.<br/>Kokatsu Shiren, Tatsumi Shiren, Koppa = Fully replenishes Fullness, Sumo status <span class="redText">doesn't</span> activate.<br/>Shield with <span class="runeIcon"><img src="../images/rune/shield/30.png"/></span> Fasting equipped = Max Fullness remains locked to <span class="oceanBlueText">1</span>.</p>

<p><u>Bellyexpand Bracelet & Bellyshrink Bracelet Note:</u><br/>Eaten while Bellyexpand Bracelet is equipped = Max Fullness <span class="redText">decreases</span> to <span class="oceanBlueText">125</span> when unequipped.<br/>Eaten while Bellyshrink Bracelet is equipped = Max Fullness <span class="blueText">increases</span> to <span class="oceanBlueText">175</span> when unequipped.<br/>So unequip Bellyexpand Bracelet(s) and equip Bellyshrink Bracelet(s) before eating if possible,<br/>but beware that Bellyshrink Bracelet is always found in a cursed state.</p>

<p><b><u>Huge Onigiri</u></b><br/>Increases Max Fullness by <span class="oceanBlueText">5</span>, and fully replenishes Fullness.<br/>This food item serves as a counter to the Max Fullness <span class="oceanBlueText">-5</span> effect of losing Sumo status.</p>

<p><b><u>Bellyexpand Bracelet</u></b><br/>Each Bellyexpand Bracelet you equip raises Max Fullness by <span class="oceanBlueText">25</span> (Max: <span class="oceanBlueText">+50</span> with 2 bracelets).<br/>If you do Nigiri Morph Factory to <span class="oceanBlueText">200</span> Max Fullness and equip 1 bracelet to reach <span class="oceanBlueText">225</span> Max Fullness,<br/>you'll be able to eat a Large Onigiri at <span class="oceanBlueText">125</span> Fullness without wasting any Fullness restoration.<br/><span class="oceanBlueText">+25</span> Fullness = <span class="oceanBlueText">+125</span> Turns (Shiren) or <span class="oceanBlueText">+50</span> Turns (Asuka) of Sumo status without <span class="runeIcon"><img src="../images/rune/shield/29.png"/></span> Sating.</p>

<p><b><u>Wallpass Bracelet</u></b><br/>item_explanation</p>

<p><b><u>Bonito Block</u></b><br/>item_explanation</p>

<p><b><u>Peach Bun</u></b><br/>item_explanation</p>

<p><b><u>Feeding Trap</u></b><br/>item_explanation</p>

<p><b><u>Challenge Trial - Complete without Sumo Power</u></b><br/>item_explanation</p>

- Peach Bun
    - Eating a Peach Bun outside of Sumo Status:
        - If Fullness goes above 150 from eating the Peach Bun, you can wait until Fullness &lt; 150<br/>before reverting from Morphed Status to avoid activating Sumo Status.
    - Eating a Peach Bun during Sumo Status:
        - The Max HP +50 effect from Sumo Status doesn't apply during Morphed status.
        - Reverting after Fullness goes below 120 skips the -5 Max Fullness penalty.

<h4 id="attack-accuracy" class="heading4Green">Attack Accuracy</h4>

Accuracy values in the table are rough estimates obtained through player testing.<br/>Attack accuracy for playable characters other than Shiren and Asuka haven't been tested yet.

<div class="charTable">

|Attack Type|![Shiren](../images/icons/27.png) Shiren|![Asuka](../images/icons/32.png) Asuka|
|-|-|-|
|Normal Attack|92%|94%|
|Normal Attack (Rustproof)|94%|96%|
|Normal Attack (Accurate)|100%|100%|
|Projectile|84%|88%|
|Projectile (Rapid-fire Bracelet)|92%|(Untested)|
|Projectile (Sure-aim Bracelet)|100%|100%|

</div>

<h4 id="exp-table-(playable-character)" class="heading4Green">Experience Points Table</h4>

Kokatsu Shiren, Tatsumi Shiren, and Asuka level up faster than Normal Shiren until Lv25.<br/>Koppa levels up faster than Normal Shiren until Lv19, then becomes slower than any other character.

<div class="expTable">

|Lv|![Shiren](../images/icons/27.png) Total|![Shiren](../images/icons/27.png) Diff|![Asuka](../images/icons/32.png) Total|![Asuka](../images/icons/32.png) Diff|![Koppa](../images/icons/31.png) Total|![Koppa](../images/icons/31.png) Diff|![Kokatsu](../images/icons/29.png) ![Tatsumi](../images/icons/30.png) Total|![Kokatsu](../images/icons/29.png) ![Tatsumi](../images/icons/30.png) Diff|
|-|-|-|-|-|-|-|-|-|
|1|0|-|0|-|0|-|0|-|
|2|10|10|10|10|10|10|10|10|
|3|40|30|40|30|30|20|30|20|
|4|100|60|70|30|60|30|60|30|
|5|200|100|140|70|120|60|120|60|
|6|400|200|220|80|180|60|180|60|
|7|700|300|300|80|250|70|250|70|
|8|1,000|300|470|170|390|140|390|140|
|9|1,300|300|640|170|540|150|540|150|
|10|1,800|500|900|260|720|180|720|180|
|11|2,400|600|1,200|300|980|260|980|260|
|12|3,000|600|1,500|300|1,300|320|1,280|300|
|13|3,600|600|2,000|500|1,700|400|1,640|360|
|14|4,000|400|2,400|400|2,200|500|2,050|410|
|15|4,800|800|3,000|600|2,800|600|2,480|430|
|16|5,600|800|3,600|600|3,600|800|3,000|520|
|17|6,400|800|4,300|700|4,600|1,000|3,600|600|
|18|7,400|1,000|5,200|900|6,100|1,500|4,300|700|
|19|8,400|1,000|6,100|900|8,100|2,000|5,100|800|
|20|9,900|1,500|7,200|1,100|10,600|2,500|6,000|900|
|21|11,500|1,600|9,300|2,100|13,600|3,000|7,000|1,000|
|22|13,500|2,000|11,000|1,700|17,600|4,000|8,100|1,100|
|23|15,500|2,000|13,100|2,100|22,600|5,000|10,600|2,500|
|24|17,500|2,000|16,000|2,900|28,600|6,000|14,500|3,900|
|25|20,500|3,000|19,500|3,500|35,600|7,000|18,500|4,000|
|26|23,500|3,000|23,500|4,000|43,600|8,000|23,500|5,000|
|27|29,500|6,000|29,500|6,000|52,600|9,000|29,500|6,000|
|28|36,500|7,000|36,500|7,000|62,600|10,000|36,500|7,000|
|29|44,500|8,000|44,500|8,000|73,600|11,000|44,500|8,000|
|30|53,500|9,000|53,500|9,000|85,600|12,000|53,500|9,000|
|31|64,500|11,000|64,500|11,000|99,600|14,000|64,500|11,000|
|32|75,600|11,100|75,600|11,100|115,600|16,000|75,600|11,100|
|33|88,000|12,400|88,000|12,400|133,600|18,000|88,000|12,400|
|34|103,000|15,000|103,000|15,000|153,600|20,000|103,000|15,000|
|35|120,000|17,000|120,000|17,000|175,600|22,000|120,000|17,000|
|36|150,000|30,000|150,000|30,000|199,600|24,000|150,000|30,000|
|37|180,000|30,000|180,000|30,000|229,600|30,000|180,000|30,000|
|38|215,000|35,000|215,000|35,000|269,600|40,000|215,000|35,000|
|39|260,000|45,000|260,000|45,000|314,600|45,000|260,000|45,000|
|40|305,000|45,000|305,000|45,000|359,600|45,000|305,000|45,000|
|41|350,000|45,000|350,000|45,000|404,600|45,000|350,000|45,000|
|42|400,000|50,000|400,000|50,000|454,600|50,000|400,000|50,000|
|43|450,000|50,000|450,000|50,000|504,600|50,000|450,000|50,000|
|44|500,000|50,000|500,000|50,000|554,600|50,000|500,000|50,000|
|45|550,000|50,000|550,000|50,000|604,600|50,000|550,000|50,000|
|46|600,000|50,000|600,000|50,000|654,600|50,000|600,000|50,000|
|47|650,000|50,000|650,000|50,000|704,600|50,000|650,000|50,000|
|48|700,000|50,000|700,000|50,000|754,600|50,000|700,000|50,000|
|49|750,000|50,000|750,000|50,000|804,600|50,000|750,000|50,000|
|50|800,000|50,000|800,000|50,000|854,600|50,000|800,000|50,000|
|51|855,000|55,000|855,000|55,000|909,600|55,000|||
|52|910,000|55,000|910,000|55,000|964,600|55,000|||
|53|965,000|55,000|965,000|55,000|1,019,600|55,000|||
|54|1,020,000|55,000|1,020,000|55,000|1,074,600|55,000|||
|55|1,075,000|55,000|1,075,000|55,000|1,129,600|55,000|||
|56|1,130,000|55,000|1,130,000|55,000|1,184,600|55,000|||
|57|1,185,000|55,000|1,185,000|55,000|1,239,600|55,000|||
|58|1,240,000|55,000|1,240,000|55,000|1,294,600|55,000|||
|59|1,295,000|55,000|1,295,000|55,000|1,349,600|55,000|||
|60|1,350,000|55,000|1,350,000|55,000|1,404,600|55,000|||
|61|1,410,000|60,000|1,410,000|60,000|1,464,600|60,000|||
|62|1,470,000|60,000|1,470,000|60,000|1,524,600|60,000|||
|63|1,530,000|60,000|1,530,000|60,000|1,584,600|60,000|||
|64|1,590,000|60,000|1,590,000|60,000|1,644,600|60,000|||
|65|1,650,000|60,000|1,650,000|60,000|1,704,600|60,000|||
|66|1,710,000|60,000|1,710,000|60,000|1,764,600|60,000|||
|67|1,770,000|60,000|1,770,000|60,000|1,824,600|60,000|||
|68|1,830,000|60,000|1,830,000|60,000|1,884,600|60,000|||
|69|1,890,000|60,000|1,890,000|60,000|1,944,600|60,000|||
|70|1,950,000|60,000|1,950,000|60,000|2,004,600|60,000|||
|71|2,010,000|60,000|2,010,000|60,000|2,064,600|60,000|||
|72|2,070,000|60,000|2,070,000|60,000|2,124,600|60,000|||
|73|2,130,000|60,000|2,130,000|60,000|2,184,600|60,000|||
|74|2,190,000|60,000|2,190,000|60,000|2,244,600|60,000|||
|75|2,250,000|60,000|2,250,000|60,000|2,304,600|60,000|||
|76|2,310,000|60,000|2,310,000|60,000|2,364,600|60,000|||
|77|2,370,000|60,000|2,370,000|60,000|2,424,600|60,000|||
|78|2,430,000|60,000|2,430,000|60,000|2,484,600|60,000|||
|79|2,490,000|60,000|2,490,000|60,000|2,544,600|60,000|||
|80|2,550,000|60,000|2,550,000|60,000|2,604,600|60,000|||
|81|2,615,000|65,000|2,615,000|65,000|2,669,600|65,000|||
|82|2,680,000|65,000|2,680,000|65,000|2,734,600|65,000|||
|83|2,745,000|65,000|2,745,000|65,000|2,799,600|65,000|||
|84|2,815,000|70,000|2,815,000|70,000|2,869,600|70,000|||
|85|2,885,000|70,000|2,885,000|70,000|2,939,600|70,000|||
|86|2,955,000|70,000|2,955,000|70,000|3,009,600|70,000|||
|87|3,025,000|70,000|3,025,000|70,000|3,079,600|70,000|||
|88|3,095,000|70,000|3,095,000|70,000|3,149,600|70,000|||
|89|3,165,000|70,000|3,165,000|70,000|3,219,600|70,000|||
|90|3,235,000|70,000|3,235,000|70,000|3,289,600|70,000|||
|91|3,305,000|70,000|3,305,000|70,000|3,359,600|70,000|||
|92|3,375,000|70,000|3,375,000|70,000|3,429,600|70,000|||
|93|3,445,000|70,000|3,445,000|70,000|3,499,600|70,000|||
|94|3,515,000|70,000|3,515,000|70,000|3,569,600|70,000|||
|95|3,585,000|70,000|3,585,000|70,000|3,639,600|70,000|||
|96|3,655,000|70,000|3,655,000|70,000|3,709,600|70,000|||
|97|3,725,000|70,000|3,725,000|70,000|3,779,600|70,000|||
|98|3,800,000|75,000|3,800,000|75,000|3,854,600|75,000|||
|99|3,875,000|75,000|3,875,000|75,000|3,929,600|75,000|3,875,000|75,000|

</div>

### Shiren

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

## Travel Companion Characters

[Content]

# Items

#### Synthesis

<div class="smallScreenshot">
  <img src="../images/other/mixer.jpg"/>
</div>

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

<div class="smallScreenshot">
  <img src="../images/areas/other/sacred_sea_2.jpg"/>
</div>

Sacred items are rare weapons or shields that carry random enhanced abilities.<br/>These items generally have a higher Base Value and more Rune Slots than regular equipment.<br/>In addition, sacred items can sometimes have exclusive runes called Natural Runes.<br/>Rune Slots on sacred items can occasionally be filled with silver seals (roughly 40% chance per slot).<br/><span class="orangeText">※ The max Base Value modifier is +10 for Blue and +8 for Golden, but these values are extremely rare.</span>

##### Sacred Item Type

- Blue - Often has a higher Base Value modifier.
    - Base Value ranges from +5 ~ +10, extra rune slots ranges from 2 ~ 5.
    - Roughly 5% chance for additional runes being present.
- Golden - Often has more Runes and Rune Slots.
    - Base Value ranges from +3 ~ +8, extra rune slots ranges from 4 ~ 7.
    - Roughly 30% chance for additional runes being present.

##### Natural Runes

|Icon|Rune|Effect|
|-|-|-|
|<span class="runeIcon"><img src="../images/rune/weapon/3.png"/></span>|Back Attack|Attack in front and behind you at the same time.|
|<span class="runeIcon"><img src="../images/rune/weapon/4.png"/></span>|Side Attack|Attack in front and to your left and right at the same time.|
|<span class="runeIcon"><img src="../images/rune/weapon/17.png"/></span>|Anti-Behemoth|Lets you attack through a Behemoth monster's barrier.|
|<span class="runeIcon"><img src="../images/rune/weapon/24.png"/></span>|Thunderbolt|Chance to deal an extra 20 damage to a target.|
|<span class="runeIcon"><img src="../images/rune/weapon/31.png"/></span>|Danger Power|Deal more damage when your HP is low.|
|<span class="runeIcon"><img src="../images/rune/weapon/34.png"/></span>|Critical At 0|Critical hit when last digit of your HP is 0.|
|<span class="runeIcon"><img src="../images/rune/weapon/35.png"/></span>|Critical At 1|Critical hit when last digit of your HP is 1.|
|<span class="runeIcon"><img src="../images/rune/weapon/36.png"/></span>|Critical At 2|Critical hit when last digit of your HP is 2.|
|<span class="runeIcon"><img src="../images/rune/weapon/37.png"/></span>|Critical At 3|Critical hit when last digit of your HP is 3.|
|<span class="runeIcon"><img src="../images/rune/weapon/38.png"/></span>|Critical At 4|Critical hit when last digit of your HP is 4.|
|<span class="runeIcon"><img src="../images/rune/weapon/39.png"/></span>|Critical At 5|Critical hit when last digit of your HP is 5.|
|<span class="runeIcon"><img src="../images/rune/weapon/40.png"/></span>|Critical At 6|Critical hit when last digit of your HP is 6.|
|<span class="runeIcon"><img src="../images/rune/weapon/42.png"/></span>|Critical At 8|Critical hit when last digit of your HP is 8.|
|<span class="runeIcon"><img src="../images/rune/weapon/43.png"/></span>|Critical At 9|Critical hit when last digit of your HP is 9.|

# Dungeon

#### Wind

If you linger on a dungeon floor for too long, wind will begin to blow.<br/>The first three gusts are warnings, and the fourth gust forces you back to Shukuba Beach.<br/>Revival Grass doesn't take effect when that happens, and you lose all items and Gitan.<br/>※ The player can check the current turn count by viewing the Message Log.

##### Wind Turns

|Dungeon|1st|2nd|3rd|4th|
|-|-|-|-|-|
|Serpentcoil Island (1~14F)|1200|1300|1400|1500|
|Serpentcoil Island (15~30F)|1700|1800|1900|2000|
|Kiki Island|1700|1800|1900|2000|
|Yamakagashi Pass|900|1000|1100|1200|
|Training Path of Inference|900|1000|1100|1200|
|Training Path of Extra Inference|900|1000|1100|1200|
|Peach Dungeon|900|1000|1100|1200|
|Sumo Dungeon|900|1000|1100|1200|
|Cat-Ching's Divine Will|900|1000|1100|1200|
|Trapper's Secret Path|900|1000|1100|1200|
|Training Path of Shopping|900|1000|1100|1200|
|Behemoth Rush|900|1000|1100|1200|
|Sacred Ocean Tunnel|900|1000|1100|1200|
|Domain of Staves and Scrolls|900|1000|1100|1200|
|Isle of the Mighty|1200|1300|1400|1500|
|Heart of Serpentcoil Island|1700|1800|1900|2000|
|Tunnel of Wishes|600|700|800|900|

#### Kron's Challenge

Challenges that can occur at random in select postgame dungeons.<br/>It begins at the start of a floor, and the player is rewarded if they complete the challenge.<br/>The player is still rewarded based on their progress if they advance floors before the challenge ends,<br/>but the player won't receive any rewards if they advance using a Pitfall Trap or Floor-exiting Trap.

##### Possible Kron's Challenges

Note: The in-game text for each challenge might differ from the text in this table.

|Challenge|Gold|Silver|Bronze|Notes|
|-|-|-|-|-|
|Don't eat anything.|0 Times|1~2 Times|3~5 Times|Biting a Bonito Block is fine.<br/>Peach Buns count.|
|Don't throw or shoot anything.|0 Times|1~2 Times|3~5 Times|-|
|Don't swing staves.|0 Times|1~2 Times|3~5 Times|Cursed staves count.|
|Don't read scrolls.|0 Times|1~2 Times|3~5 Times|-|
|Read scrolls.|5 Times|2~4 Times|1 Time|Wet Scroll doesn't count.|
|Eat grass.|5 Times|2~4 Times|1 Time|Revival Grass activating doesn't count.|
|Light incense.|3 Times|2 Times|1 Time|-|
|Swing staves.|12 Times|4~11 Times|1~3 Times|Cursed staves count.|
|Hit monsters with arrows.|12 Times|4~11 Times|1~3 Times|Hitting a Shopkeeper counts.|
|Hit monsters with rocks.|12 Times|4~11 Times|1~3 Times|-|
|Take damage as few times as possible.|0 Times|1~5 Times|6~10 Times|-|
|Advance floors quickly.|100 Turns|101~500 Turns|501~1000 Turns|Gate of Wishes counts.|
|Slay monsters without taking damage.|10 Times|7~9 Times|3~6 Times|Monsters slain by companions count.<sup><span class="redText">*1</span></sup>|
|Slay lots of monsters.|20 Times|10~19 Times|5~9 Times||
|Teleport.|3 Times|2 Times|1 Time|Any type of warping counts.|
|Eat onigiri.|5 Times|2~4 Times|1 Time|Yakitori and Sweet Potato count.|
|Spend money at a shop.|5000G|3000~4999G|1000~2999G|-|

<p><span class="redText">*1</span> - As of game version 1.1.0 and later.</p>

##### Possible Kron's Challenge Rewards

|Reward|Gold|Silver|Bronze|Notes|
|-|-|-|-|-|
|Increase Max HP.|+30|+10|+3|-|
|Increase Max Strength.|+5|+3|+1|Also fully restores lost strength.|
|Increase Max Fullness.|+30|+10|+5|Also fully replenishes current fullness.<br/>No increase if Bodhi Shield is equipped.|
|Raise Upgrade Value of equipped items.|+5|+3|+1|-|
|Increase 1 staff's charges.|+20|+3|+1|Staves in pots are excluded.|
|Increase pot capacity by 1.|20 Pots|3 Pots|1 Pot|No increase if max capacity pot is selected.|
|Identify items not in pots.|20 Items|10 Items|1 Item|-|
|Bless items not in pots.|5 Items|3 Items|1 Item|-|
|Obtain Gitan.|7000G|3500G|1400G|-|
|Obtain Gitan.|5000G|2500G|1000G|-|
|Obtain Gitan.|4000G|2000G|800G|-|

#### Fever Time

<div class="smallScreenshot">
  <img src="../images/other/fever_time.png"/>
</div>

Limited time events that can occur at random in select postgame dungeons.<br/>When it does occur, it usually occurs when the player is inside a room instead of a hallway.<br/>There's no penalty for ignoring the event similar to Kron's Challenge, so don't feel pressured to act quickly.<br/>You can easily end up getting hit by a nasty special attack or stepping on a trap when in a hurry.

##### Fever Time Details

- The event progresses in real time instead of being based on turns.
    - The countdown doesn't begin until the player presses A after the notification appears.
    - Once the countdown reaches 0, the Fever Time ends on the next turn.
    - If an adventure is suspended during a Fever Time, the countdown is set to 0 upon resuming.
- Some have reported finding weapons and shields that normally don't appear in the dungeon's item table.
- Type 1 - Item related (30 seconds)
    - Lots of items of the category corresponding to the Fever Time are generated on the ground.
    - Item-find Bracelet's effect is granted to the player during the Fever Time.
        - Fever Time items blink on the map, so they're easy to tell apart from regular items.
    - Fever Time items that haven't been picked up will vanish once the Fever Time ends.
        - This includes Fever Time items that you picked up and set back down.
    - Collection Scroll can be used to quickly gather all Fever Time items.
        - It's recommended to use the <span class="blueText">Exchange</span> command if you're already at 24/24 items.
- Type 2 - Monster related (60 seconds)
    - Monster-find Bracelet's effect is granted to the player during the Fever Time.
    - Gathering Scroll can be used to quickly attract all monsters on the floor, but be careful.
    - Stepping in place sometimes leads to more monsters defeated than running around.

##### Possible Fever Times

<div class="abilityTable">

|Fever Time|Duration|Notes|
|-|-|-|
|Item|30 sec|Items selected from the current dungeon's floor table.|
|Weapon|30 sec|Weapons, Heavenly Scroll.|
|Shield|30 sec|Shields, Earthly Scroll.|
|Level Up|30 sec|Fortune Grass, Angel Seed, Fortune Staff.|
|Onigiri|30 sec|Onigiri type items, Yakitori, Sweet Potato.|
|Gitan|30 sec|Gitan.|
|Experience Points|60 sec|Defeated monsters grant x2.0 experience points.|
|Item Drop|60 sec|Defeated monsters always drop an item.<br/>Monsters like Chow drop 2 items, Behemoths also drop items.|

</div>

<h4 id="wishing-shrine" class="heading4"><img src="../images/other/wishing_shrine.png"/> Wishing Shrine</h4>

<div class="smallScreenshot">
  <img src="../images/other/wishing_shrine.jpg"/>
</div>

Object offering 3 random wishes, and <span class="runeIcon"><img src="../images/other/gate_of_wishes.png"/></span> Gate of Wishes leading to Tunnel of Wishes opens afterward.<br/>Tunnel of Wishes acts as a bonus zone where the item(s) you wished for can be found on the ground.<br/>Wishing Shrines are usually hidden inside a wall tile, buried room, or Gitan vault.

A chime will sound when a Wishing Shrine is present on a floor if a Shield of Presage is equipped.<br/>In addition, 1 Golden Egg Thing is always generated when a Wishing Shrine is present on a floor.<br/>It resembles Golden Intervals in Shiren 2, but Wishing Shrines are much easier to find.

Shopkeepers won't go towards a Gate of Wishes, so a Wall-less Scroll can be used to steal easily.<br/>In an earlier version, Monsterizing Trap caused Wishing Shrines to transform into a monster.

##### Possible Wishes

- Item Category
    - Weapon, Shield, Bracelet, Arrow / Rock, Food, Scroll, Staff, Incense, Pot, or Gitan.
- Specific Item
    - Preservation Pot, Revival Grass, Blank Scroll, Fixer Scroll, Wallpass Bracelet,<br/>Waterwalk Bracelet, Clairvoyant Bracelet, Monster-find Bracelet, or Item-find Bracelet.
- Miscellaneous
    - Identify Items - Identifier Scroll, Identifier Pot, etc.
    - Dig Through Walls - Pickaxe, Burrowing Staff, etc.
    - Increase Strength - Strength Grass, Strength Bracelet, etc.
    - Level Up - Fortune Grass, Angel Seed, etc.
    - Destroy Traps - Pickaxe, Wooden Mallet, Burrowing Staff, Trapseeker, Seewell Grass, etc.
    - Upgrade - Heavenly Scroll, Earthly Scroll, Plating Scroll, Slot-adding Scroll,<br/>Rune-eraser Scroll, Silverpurge Scroll, Upgrading Pot, etc.

#### Tunnel of Wishes

<div class="smallScreenshot">
  <img src="../images/other/tunnel_of_wishes.jpg"/>
</div>

1 floor bonus zone accessed by making a wish at a Wishing Shrine and going through a Gate of Wishes.<br/>A random quantity of the item(s) you wished for can be found on the ground in this area.<br/>Items dropped by defeated monsters are also generally weighted towards what you wished for.<br/>Unrelated items can also be generated either on the ground or inside the floor's walls.

The monster table is the same as the floor the Wishing Shrine was found on.<br/>Use a Collection Scroll or such if there were Fire Ninjas, Bored Kappas, or Field Knaves on the prior floor.<br/>Wind blows far earlier than regular floors inside a Tunnel of Wishes, and hallways are never dark.<br/>The adventure log cannot be checked inside a Tunnel of Wishes, and Parallel Data cannot be created.

<h4 id="flowing-water-and-rafts" class="heading4"> Flowing Water and Rafts</h4>

<div class="flowing_water">
  <img src="../images/other/flowing_water.png"/>
</div>

A long single tile wide waterway where rafts move downstream like a conveyor belt, 1 tile per turn.<br/>The player can ride a raft for a while or simply walk across it as a means to get to the other side.<br/>Items and monsters can also be on rafts, and monsters won't step off unless Shiren is within view.<br/>Aquatic types can walk inside the waterway, but they get pushed 1 tile in the direction of the flow.<br/>The waterway's end point is a whirlpool which warps entities back to the start of the waterway,<br/>and there are no negative effects for Shiren if he enters the whirlpool to warp.

Earthmound Staff can be used, but the pillar and ground tile get destroyed after 10 turns each.<br/>Rafts that collide with a ground tile vanish, but new rafts are generated so you won't get stuck.<br/>Water-drain Scroll or Wall-less Scroll can be used to remove the waterway and rafts on the floor.<br/>The [Monster Dojo](/system/monster-dojo) has a room with flowing water and rafts, for those who want to test things out.

#### Bouncy Wall Rooms

#### Item Islands

#### Gitan Vaults

#### Pillar Rooms

#### Hidden Hallways

#### Shiny Walls

# Monsters

#### Spawn Rate

##### Tunnel of Wishes

Yamakagashi Pass = 50 Turns

# Facilities

#### Warehouse

#### Item Holder (Storehouse / Bank)

#### Wagoneer (Fast-Travel)
