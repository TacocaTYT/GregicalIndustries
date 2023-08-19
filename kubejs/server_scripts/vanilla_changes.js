ServerEvents.recipes(e => {
//frick you
	e.remove({output: 'minecraft:crafting_table'});	
	e.shaped(Item.of('minecraft:crafting_table'), [
		'   ',
		'FF ',
		'LL ',
		], {
		F: 'minecraft:flint',
		L: '#minecraft:logs',
		});
//frick you more
	e.remove({output: '#forge:chests/wooden'});	
	e.shaped(Item.of('minecraft:chest'), [
		'PLP',
		'LCL',
		'PLP',
		], {
		P: '#minecraft:planks',
		L: '#minecraft:logs',
		C: '#forge:ingots/copper'
		});
		e.remove({output: '#forge:barrels/wooden'});	
		e.shaped(Item.of('minecraft:barrel'), [
			'PLP',
			'LCL',
			'PLP',
			], {
			P: '#minecraft:wooden_slabs',
			L: '#minecraft:logs',
			C: '#forge:ingots/copper'
			});
//frick you the most
	e.remove({output: 'minecraft:furnace'});	
	e.remove({output: 'quark:blackstone_furnace'});	
	e.remove({output: 'quark:deepslate_furnace'});	
	e.shaped(Item.of('minecraft:furnace'), [
		'CCC',
		'CFC',
		'LLL'
		], {
		C: '#forge:cobblestone',
		L: 'minecraft:copper_ingot',
		F: 'minecraft:campfire'
		});
//nerf plank recipe (hehe expert pack)	
e.forEachRecipe({ type: 'minecraft:crafting_shapeless', input: '#minecraft:logs', output: '#minecraft:planks' }, r => {
    let ingredients = r.originalRecipeIngredients
    let output = r.originalRecipeResult
    e.shapeless(Item.of(output.id, 2), ingredients[0]).id(r.getOrCreateId())
  })
//slabs nerf
e.forEachRecipe({ type: 'minecraft:crafting_shapeless', input: '#minecraft:planks', output: '#minecraft:wooden_slabs' }, r => {
    let ingredients = r.originalRecipeIngredients
    let output = r.originalRecipeResult
    e.shapeless(Item.of(output.id, 3), ingredients[0]).id(r.getOrCreateId())
  })
//sticks nerf
	e.remove({input: '#minecraft:planks', output:'minecraft:stick'})	
	e.shaped('2x minecraft:stick', [
	'P  ',
	'P  ',
	'   ',
	], {
	P: '#minecraft:planks',	
	})
	//bed recipe
	e.remove({output: '#minecraft:beds'})
	const colors = [
		'white', 
		'orange', 
		'magenta', 
		'light_blue',
		'yellow', 
		'lime', 
		'pink', 
		'gray', 
		'light_gray', 
		'cyan', 
		'purple', 
		'blue', 
		'brown', 
		'green', 
		'red', 
		'black',
	];
	//how
	for (let i = 0; i < colors.length; i++) {
	e.shaped('minecraft:' + colors[i] + '_bed', [
	'CCH',
	'OOO',
	'PFP',
	], {	
		P: '#minecraft:planks',
		F: '#forge:fences/wooden',
		O: 'minecraft:' + colors[i] + '_wool',
		H: 'immersiveengineering:hammer',
		C: 'minecraft:feather'
	}).damageIngredient(Item.of('immersiveengineering:hammer').ignoreNBT());
	}
})  