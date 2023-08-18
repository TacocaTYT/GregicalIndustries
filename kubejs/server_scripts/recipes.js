ServerEvents.recipes(e => {
    e.remove({output: 'create:gearbox'});
    e.remove({output: 'create_dd:integrated_circuit'});
    e.remove({output: 'create_dd:integrated_mechanism'});

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

    e.recipes.create.sandpaper_polishing('kubejs:pebble', 'kubejs:stone_ball_bearing');

    e.recipes.create.splashing([
    Item.of('kubejs:pebble').withChance(0.05), 
    Item.of('minecraft:iron_nugget').withChance(0.225), 
    Item.of('biomancy:stone_powder').withChance(0.65),
    Item.of('biomancy:stone_powder').withChance(0.65),
    Item.of('biomancy:stone_powder').withChance(0.65)], 
    'kubejs:refined_gravel');

    let inter = 'create_dd:incomplete_integrated_mechanism';

    e.recipes.create.sequenced_assembly([
        Item.of('create_dd:integrated_mechanism').withChance(160), 
        Item.of('create:brass_sheet').withChance(8.0), 
        Item.of('create:precision_mechanism').withChance(7.5), 
        Item.of('create:cogwheel').withChance(5.0),
        Item.of('create:brass_nugget').withChance(2.5),
        Item.of('create:shaft').withChance(2.5),
        Item.of('create:electron_tube').withChance(2.5)
    ], 'create:precision_mechanism', [ 
        e.recipes.createDeploying(inter, [inter, 'create:cogwheel']),
        e.recipes.createDeploying(inter, [inter, '#forge:plates/brass']),
        e.recipes.createDeploying(inter, [inter, 'create_dd:integrated_circuit']),
        e.recipes.createDeploying(inter, [inter, 'create:electron_tube']),
        e.recipes.createPressing(inter, inter),
    ]).transitionalItem(inter).loops(4) 

	inter = 'create_dd:incomplete_integrated_circuit';
	e.recipes.create.sequenced_assembly([
		Item.of('create_dd:integrated_circuit').withChance(160), 
		Item.of('create_dd:lapis_sheet').withChance(5.0), 
        Item.of('minecraft:redstone').withChance(2.5), 
        Item.of('minecraft:quartz').withChance(2.5),
        Item.of('create:brass_nugget').withChance(2.5)
	], 'gtceu:basic_electronic_circuit', [ 
		e.recipes.createDeploying(inter, [inter, 'minecraft:redstone']),
		e.recipes.createDeploying(inter, [inter, 'gtceu:nether_quartz_plate']),
		e.recipes.createDeploying(inter, [inter, 'createaddition:electrum_wire']),
		e.recipes.createPressing(inter, inter),
	]).transitionalItem(inter).loops(4);

    e.custom({
        type: 'biomancy:decomposing',
        ingredients: [
            {item: `minecraft:gravel`, count: 3}
        ],
        result: [
            {item: `kubejs:pebble`, count: Math.floor(Math.random() * 2) + 2}
        ]
    })
    })  