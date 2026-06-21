ServerEvents.recipes(event => {
event.remove({ id: 'createoreexcavation:ore_vein_type/water'})
event.remove({ id: 'createoreexcavation:ore_vein_type/nether_gold'})
event.remove({ id: 'createoreexcavation:ore_vein_type/netherite'})
event.remove({ id: 'createoreexcavation:ore_vein_type/coal'})
event.remove({ id: 'createoreexcavation:ore_vein_type/redstone'})
event.remove({ id: 'createoreexcavation:ore_vein_type/diamond'})
event.remove({ id: 'createoreexcavation:ore_vein_type/lapis'})
event.remove({ id: 'createoreexcavation:ore_vein_type/hardened_diamond'})
event.remove({ id: 'createoreexcavation:ore_vein_type/copper'})
event.remove({ id: 'createoreexcavation:ore_vein_type/zinc'})
event.remove({ id: 'createoreexcavation:ore_vein_type/gold'})
event.remove({ id: 'createoreexcavation:ore_vein_type/glowstone'})
event.remove({ id: 'createoreexcavation:ore_vein_type/emerald'})
event.remove({ id: 'createoreexcavation:ore_vein_type/iron'})
event.remove({ id: 'createoreexcavation:ore_vein_type/quartz'})
event.remove({ id: 'createoreexcavation:drilling/nether_gold'})
event.remove({ id: 'createoreexcavation:drilling/netherite'})
event.remove({ id: 'createoreexcavation:drilling/coal'})
event.remove({ id: 'createoreexcavation:drilling/redstone'})
event.remove({ id: 'createoreexcavation:drilling/diamond'})
event.remove({ id: 'createoreexcavation:drilling/lapis'})
event.remove({ id: 'createoreexcavation:drilling/hardened_diamond'})
event.remove({ id: 'createoreexcavation:drilling/copper'})
event.remove({ id: 'createoreexcavation:drilling/zinc'})
event.remove({ id: 'createoreexcavation:drilling/gold'})
event.remove({ id: 'createoreexcavation:drilling/glowstone'})
event.remove({ id: 'createoreexcavation:drilling/emerald'})
event.remove({ id: 'createoreexcavation:drilling/iron'})
event.remove({ id: 'createoreexcavation:drilling/quartz'})
event.remove({ id: 'createoreexcavation:extractor/water'})


//Output with chance has changed to coeutil.processingOutput(<item>, <chance 0-1>) from 1.20
//.placement(spacing, separation, salt)


//TEST




//iron
event.recipes.createoreexcavation.vein('{"text": "Iron vein"}', 'minecraft:raw_iron')
	.placement(64, 4, 6894685).biomeWhitelist('forge:is_overworld')
	.id("kubejs:iron_vein")
event.recipes.createoreexcavation.drilling('minecraft:raw_iron', 'kubejs:iron_vein', 1000)
	.stress(64).id("kubejs:my_vein1");


//gold
event.recipes.createoreexcavation.vein('{"text": "Gold vein"}', 'minecraft:raw_gold')
	.placement(64, 4, 4816700).biomeWhitelist('forge:is_overworld')
	.id("kubejs:gold_vein")
event.recipes.createoreexcavation.drilling('minecraft:raw_gold', 'kubejs:gold_vein', 1000)
	.stress(64).id("kubejs:my_vein2");

//redstone
event.recipes.createoreexcavation.vein('{"text": "Redstone vein"}', 'createoreexcavation:raw_redstone')
	.placement(64, 4, 3324032

).biomeWhitelist('forge:is_overworld')
	.id("kubejs:redstone_vein")
event.recipes.createoreexcavation.drilling('createoreexcavation:raw_redstone', 'kubejs:redstone_vein', 1000)
	.stress(64).id("kubejs:my_vein3");

//lapis
event.recipes.createoreexcavation.vein('{"text": "Lapis vein"}', 'minecraft:lapis_lazuli')
	.placement(128, 4, 7862607).biomeWhitelist('forge:is_overworld')
	.id("kubejs:lapis_vein")
event.recipes.createoreexcavation.drilling('minecraft:lapis_lazuli', 'kubejs:lapis_vein', 1000)
	.stress(64).id("kubejs:my_vein4");

//bauxite
event.recipes.createoreexcavation.vein('{"text": "Aluminum vein"}', 'immersiveengineering:raw_aluminum')
	.placement(256, 4, 64457512).alwaysFinite().veinSize(5, 8).id("kubejs:my_coal_vein")
event.recipes.createoreexcavation.drilling('immersiveengineering:raw_aluminum', 'kubejs:alulu_vein', 1000)
	.id("kubejs:alulu_vein");
event.recipes.createoreexcavation.drilling(
	[
		Item.of('immersiveengineering:raw_aluminum'),
		coeutil.processingOutput('tfmg:bauxite_powder', 0.1)
	], 'kubejs:alulu_vein', 1000)
	.drill('createoreexcavation:diamond_drill').fluid('0.5Bx minecraft:water').stress(128).id("kubejs:alulu_vein");

//zinc
event.recipes.createoreexcavation.vein('{"text": "Zinc vein"}', 'create:raw_zinc')
	.placement(64, 4, 3845092).biomeWhitelist('forge:is_overworld')
	.id("kubejs:zinc_vein")
event.recipes.createoreexcavation.drilling('create:raw_zinc', 'kubejs:zinc_vein', 1000)
	.stress(64).id("kubejs:my_vein6");

//coal
event.recipes.createoreexcavation.vein('{"text": "Coal vein"}', 'minecraft:coal')
	.placement(64, 4, 9530957).biomeWhitelist('forge:is_overworld')
	.id("kubejs:coal_vein")
event.recipes.createoreexcavation.drilling('minecraft:coal', 'kubejs:coal_vein', 1000)
	.stress(64).id("kubejs:my_vein7");

//uranium
event.recipes.createoreexcavation.vein('{"text": "Uranium vein"}', 'crowns:raw_uranium')
	.placement(256, 4, 7856783).id("kubejs:my_coal_vein")
event.recipes.createoreexcavation.drilling('crowns:raw_uranium', 'kubejs:uruwu_vein', 1000)
	.id("kubejs:uruwu_vein");
event.recipes.createoreexcavation.drilling(
	[
		Item.of('crowns:raw_uranium'),
		coeutil.processingOutput('tfmg:slag', 0.1),
        coeutil.processingOutput('minecraft:gravel', 0.5)
	], 'kubejs:uruwu_vein', 1000)
	.drill('createoreexcavation:netherite_drill').fluid('0.05Bx tfmg:sulfuric_acid').stress(256).id("kubejs:uruwu_vein");

//quartz
event.recipes.createoreexcavation.vein('{"text": "Quartz vein"}', 'minecraft:quartz')
	.placement(128, 4, 4494582).biomeWhitelist('forge:is_overworld')
	.id("kubejs:quartz_vein")
event.recipes.createoreexcavation.drilling('minecraft:quartz', 'kubejsquartz_vein', 1000)
	.stress(64).id("kubejs:my_vein9");

//diamond
event.recipes.createoreexcavation.vein('{"text": "Diamond vein"}', 'createoreexcavation:raw_diamond')
	.placement(128, 4, 7507071).biomeWhitelist('forge:is_overworld')
	.id("kubejs:diamond_vein")
event.recipes.createoreexcavation.drilling('createoreexcavation:raw_diamond', 'kubejsdiamond_vein', 1000)
	.stress(128).id("kubejs:my_vein10");


//Fluid extractor recipes (Fluids)
//oil
event.recipes.createoreexcavation.vein('{"text": "Oil well"}', 'tfmg:crude_oil_bucket')
	.placement(256, 4, 8795149).alwaysInfinite().id("kubejs:oil_well")
event.recipes.createoreexcavation.extracting('tfmg:crude_oil', 'kubejs:oil_well', 120)
	.fluid('1000x minecraft:water').id("kubejs:oil_well").stress(64);

//lava
event.recipes.createoreexcavation.vein('{"text": "Lava well"}', 'minecraft:lava_bucket')
	.placement(256, 4, 2345433).alwaysInfinite().id("kubejs:lava_well")
event.recipes.createoreexcavation.extracting('minecraft:lava', 'kubejs:lava_well', 120)
	.id("kubejs:test").stress(64);





});





