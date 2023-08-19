ServerEvents.recipes(e => {
    e.remove({output: 'create:gearbox'});
    e.remove({output: 'create_dd:integrated_circuit'});
    e.remove({output: 'create_dd:integrated_mechanism'});
    e.remove({output: 'biomancy:stone_powder'});
    e.remove({output: 'gtceu:flint_mortar'});
    e.remove({output: 'create:copper_diving_helmet'});
    e.remove({output: 'create:copper_diving_boots'});

    e.shaped(Item.of('create:gearbox', 1), [
        'BGB',
        'GCG',
        'BGB'
      ], {
        B: 'kubejs:andesite_bearing',
        C: 'create:andesite_casing',
        G: 'create:cogwheel'
      });

    e.shaped(Item.of('kubejs:andesite_bearing', 1), [
        'BIB',
        'BRB',
        'BIB'
      ], {
        B: 'kubejs:stone_ball_bearing',
        R: 'gtceu:iron_ring',
        I: 'minecraft:iron_ingot'
      });

    e.recipes.create.sandpaper_polishing('kubejs:stone_ball_bearing', 'botania:pebble');

    e.recipes.create.splashing([
    Item.of('botania:pebble').withChance(0.05), 
    Item.of('minecraft:iron_nugget').withChance(0.225), 
    Item.of('biomancy:stone_powder').withChance(0.65)], 
    'kubejs:refined_gravel');

  let inter = 'create_dd:incomplete_integrated_mechanism';
  e.recipes.create.sequenced_assembly([
      Item.of('create_dd:integrated_mechanism').withChance(1), 
  ], 'create:precision_mechanism', [ 
      e.recipes.createDeploying(inter, [inter, 'create:cogwheel']),
      e.recipes.createDeploying(inter, [inter, '#forge:plates/brass']),
      e.recipes.createDeploying(inter, [inter, 'create_dd:integrated_circuit']),
      e.recipes.createDeploying(inter, [inter, 'create:electron_tube']),
      e.recipes.createPressing(inter, inter),
  ]).transitionalItem(inter).loops(4) 

	inter = 'create_dd:incomplete_integrated_circuit';
	e.recipes.create.sequenced_assembly([
		Item.of('create_dd:integrated_circuit').withChance(1), 
	], 'gtceu:basic_electronic_circuit', [ 
		e.recipes.createFilling(inter, [inter, Fluid.of('gtceu:red_alloy',420)]),
		e.recipes.createDeploying(inter, [inter, 'gtceu:nether_quartz_plate']),
		e.recipes.createDeploying(inter, [inter, 'createaddition:electrum_wire']),
		e.recipes.createPressing(inter, inter),
	]).transitionalItem(inter).loops(4);
	//engineer's hammer
	e.remove({output: 'immersiveengineering:hammer'})	
	e.shaped('immersiveengineering:hammer', [
	' PS',
	' RP',
	'RW ',
	], {
	R: '#forge:rods/wooden',
	S: '#forge:string',
	P: '#forge:plates/iron',
	W: '#forge:tools/wrenches'
	}).damageIngredient(Item.of('#forge:tools/wrenches').ignoreNBT());
//GREG TOOLS
e.remove({output: 'create_sa:copper_sword'});
e.remove({output: 'create_sa:copper_pickaxe'});
e.remove({output: 'create_sa:copper_axe'});
e.remove({output: 'create_sa:copper_shovel'});
e.remove({output: 'create_sa:copper_hoe'});
e.remove({output: 'create_sa:copper_helmet'});
e.remove({output: 'create_sa:copper_chestplate'});
e.remove({output: 'create_sa:copper_leggings'});
e.remove({output: 'create_sa:copper_boots'});
e.shaped(Item.of('create_sa:copper_sword', 1), [
  ' C ',
  ' C ',
  'STS'
], {
  C: '#forge:ingots/copper',
  S: 'minecraft:string',
  T: 'minecraft:stick'
});
e.shaped(Item.of('create_sa:copper_pickaxe', 1), [
  'CCC',
  'STS',
  ' T '
], {
  C: '#forge:ingots/copper',
  S: 'minecraft:string',
  T: 'minecraft:stick'
});
e.shaped(Item.of('create_sa:copper_axe', 1), [
  'SCC',
  'STC',
  ' T '
], {
  C: '#forge:ingots/copper',
  S: 'minecraft:string',
  T: 'minecraft:stick'
});
e.shaped(Item.of('create_sa:copper_axe', 1), [
  'CCS',
  'CTS',
  ' T '
], {
  C: '#forge:ingots/copper',
  S: 'minecraft:string',
  T: 'minecraft:stick'
});
e.shaped(Item.of('create_sa:copper_shovel', 1), [
  'SCS',
  ' T ',
  ' T '
], {
  C: '#forge:ingots/copper',
  S: 'minecraft:string',
  T: 'minecraft:stick'
});
e.shaped(Item.of('create_sa:copper_hoe', 1), [
  'SCC',
  ' TS',
  ' T '
], {
  C: '#forge:ingots/copper',
  S: 'minecraft:string',
  T: 'minecraft:stick'
});
e.shaped(Item.of('create_sa:copper_hoe', 1), [
  'CCS',
  'ST ',
  ' T '
], {
  C: '#forge:ingots/copper',
  S: 'minecraft:string',
  T: 'minecraft:stick'
});
e.shaped(Item.of('kubejs:copper_armor_plating', 2), [
  'CCC',
  'CCC',
  'SSS'
], {
  C: '#forge:ingots/copper',
  S: 'minecraft:string'
});
e.shaped(Item.of('create_sa:copper_helmet', 1), [
  'CCC',
  'CSC',
  '   '
], {
  C: 'kubejs:copper_armor_plating',
  S: 'minecraft:string'
});
e.shaped(Item.of('create_sa:copper_chestplate', 1), [
  'CSC',
  'CCC',
  'CCC'
], {
  C: 'kubejs:copper_armor_plating',
  S: 'minecraft:string'
});
e.shaped(Item.of('create_sa:copper_leggings', 1), [
  'CCC',
  'CSC',
  'C C'
], {
  C: 'kubejs:copper_armor_plating',
  S: 'minecraft:string'
});
e.shaped(Item.of('create_sa:copper_boots', 1), [
  '   ',
  'CSC',
  'C C'
], {
  C: 'kubejs:copper_armor_plating',
  S: 'minecraft:string'
});
e.shaped(Item.of('create:copper_diving_helmet', 1), [
  'CCC',
  'CGC',
  'SSS' 
], {
  C: 'kubejs:copper_armor_plating',
  S: 'minecraft:string',
  G: 'create:goggles'
});
e.shaped(Item.of('create:copper_diving_boots', 1), [
  'ASA',
  'C C',
  'CSC' 
], {
  C: 'kubejs:copper_armor_plating',
  S: 'minecraft:string',
  A: 'create:andesite_alloy'
});
e.remove({output: 'minecraft:iron_sword'});
e.remove({output: 'minecraft:iron_pickaxe'});
e.remove({output: 'minecraft:iron_axe'});
e.remove({output: 'minecraft:iron_shovel'});
e.remove({output: 'minecraft:iron_hoe'});
e.remove({output: 'minecraft:iron_helmet'});
e.remove({output: 'minecraft:iron_chestplate'});
e.remove({output: 'minecraft:iron_leggings'});
e.remove({output: 'minecraft:iron_boots'});
e.shaped(Item.of('minecraft:iron_sword', 1), [
  ' C ',
  ' C ',
  'STS'
], {
  C: '#forge:ingots/iron',
  S: 'minecraft:string',
  T: 'minecraft:stick'
});
e.shaped(Item.of('minecraft:iron_pickaxe', 1), [
  'CCC',
  'STS',
  ' T '
], {
  C: '#forge:ingots/iron',
  S: 'minecraft:string',
  T: 'minecraft:stick'
});
e.shaped(Item.of('minecraft:iron_axe', 1), [
  'SCC',
  'STC',
  ' T '
], {
  C: '#forge:ingots/iron',
  S: 'minecraft:string',
  T: 'minecraft:stick'
});
e.shaped(Item.of('minecraft:iron_axe', 1), [
  'CCS',
  'CTS',
  ' T '
], {
  C: '#forge:ingots/iron',
  S: 'minecraft:string',
  T: 'minecraft:stick'
});
e.shaped(Item.of('minecraft:iron_shovel', 1), [
  'SCS',
  ' T ',
  ' T '
], {
  C: '#forge:ingots/iron',
  S: 'minecraft:string',
  T: 'minecraft:stick'
});
e.shaped(Item.of('minecraft:iron_hoe', 1), [
  'SCC',
  ' TS',
  ' T '
], {
  C: '#forge:ingots/iron',
  S: 'minecraft:string',
  T: 'minecraft:stick'
});
e.shaped(Item.of('minecraft:iron_hoe', 1), [
  'CCS',
  'ST ',
  ' T '
], {
  C: '#forge:ingots/iron',
  S: 'minecraft:string',
  T: 'minecraft:stick'
});
e.shaped(Item.of('kubejs:iron_armor_plating', 2), [
  'CCC',
  'CCC',
  'SSS'
], {
  C: '#forge:ingots/iron',
  S: 'minecraft:string'
});
e.shaped(Item.of('minecraft:iron_helmet', 1), [
  'CCC',
  'CSC',
  '   '
], {
  C: 'kubejs:iron_armor_plating',
  S: 'minecraft:string'
});
e.shaped(Item.of('minecraft:iron_chestplate', 1), [
  'CSC',
  'CCC',
  'CCC'
], {
  C: 'kubejs:iron_armor_plating',
  S: 'minecraft:string'
});
e.shaped(Item.of('minecraft:iron_leggings', 1), [
  'CCC',
  'CSC',
  'C C'
], {
  C: 'kubejs:iron_armor_plating',
  S: 'minecraft:string'
});
e.shaped(Item.of('minecraft:iron_boots', 1), [
  '   ',
  'CSC',
  'C C'
], {
  C: 'kubejs:iron_armor_plating',
  S: 'minecraft:string'
});
// THE FLINTAGE 
e.remove({output: 'minecraft:stone_sword'});
e.remove({output: 'minecraft:stone_pickaxe'});
e.remove({output: 'minecraft:stone_axe'});
e.remove({output: 'minecraft:stone_shovel'});
e.remove({output: 'minecraft:stone_hoe'});
e.remove({output: 'minecraft:wooden_sword'});
e.remove({output: 'minecraft:wooden_pickaxe'});
e.remove({output: 'minecraft:wooden_axe'});
e.remove({output: 'minecraft:wooden_shovel'});
e.remove({output: 'minecraft:wooden_hoe'});
e.shaped(Item.of('minecraft:stone_sword', 1), [
  ' C ',
  ' C ',
  'STS'
], {
  C: 'minecraft:flint',
  S: 'minecraft:string',
  T: 'minecraft:stick'
});
e.shaped(Item.of('minecraft:stone_pickaxe', 1), [
  'CCC',
  'STS',
  ' T '
], {
  C: 'minecraft:flint',
  S: 'minecraft:string',
  T: 'minecraft:stick'
});
e.shaped(Item.of('minecraft:stone_axe', 1), [
  'SCC',
  'STC',
  ' T '
], {
  C: 'minecraft:flint',
  S: 'minecraft:string',
  T: 'minecraft:stick'
});
e.shaped(Item.of('minecraft:stone_axe', 1), [
  'CCS',
  'CTS',
  ' T '
], {
  C: 'minecraft:flint',
  S: 'minecraft:string',
  T: 'minecraft:stick'
});
e.shaped(Item.of('minecraft:stone_shovel', 1), [
  'SCS',
  ' T ',
  ' T '
], {
  C: 'minecraft:flint',
  S: 'minecraft:string',
  T: 'minecraft:stick'
});
e.shaped(Item.of('minecraft:stone_hoe', 1), [
  'SCC',
  ' TS',
  ' T '
], {
  C: 'minecraft:flint',
  S: 'minecraft:string',
  T: 'minecraft:stick'
});
e.shaped(Item.of('minecraft:stone_hoe', 1), [
  'CCS',
  'ST ',
  ' T '
], {
  C: 'minecraft:flint',
  S: 'minecraft:string',
  T: 'minecraft:stick'
});
// primitive stuff
e.shapeless(
  Item.of('scguns:fire_starter', 1),
  [ 
    '2x minecraft:stick'
  ]
)
e.shapeless(
  Item.of('create:copper_nugget', 1),
  [ 
    'gtceu:flint_mortar',
    '#forge:sand',
    '#forge:gravel'
  ]
).damageIngredient(Item.of('gtceu:flint_mortar').ignoreNBT());
e.shaped(Item.of('gtceu:flint_mortar', 1), [
  'STS',
  'CTC',
  'CCC'
], {
  C: 'minecraft:cobblestone',
  S: 'minecraft:string',
  T: 'minecraft:flint'
});
})