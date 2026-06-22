ServerEvents.recipes(event => {

  const { kubejs } = event.recipes;

  kubejs
    .shapeless("kubejs:wooden_mechanism", ["#c:stripped_logs", "minecraft:stick", "create:large_cogwheel","2x create:cogwheel", "tfmg:screwdriver", "chipped:saw"])
    .damageIngredient("tfmg:screwdriver").damageIngredient("chipped:saw");


event.recipes.create.sequenced_assembly(
  // Outputs:
  [
    CreateItem.of('kubejs:wooden_mechanism', 0.9), // Main output, will appear in JEI as the result
    CreateItem.of('minecraft:stick', 0.03),
    CreateItem.of('5x createdieselgenerators:wood_chip', 0.05),
    CreateItem.of('minecraft:wooden_shovel', 0.01)
  ],
  // Input:
  '#c:stripped_logs', 
  [
    event.recipes.create.pressing('kubejs:incomplete_wooden_mechanism', 'kubejs:incomplete_wooden_mechanism'),
    event.recipes.create.cutting('kubejs:incomplete_wooden_mechanism', 'kubejs:incomplete_wooden_mechanism'),
    event.recipes.create.deploying('kubejs:incomplete_wooden_mechanism', ['kubejs:incomplete_wooden_mechanism', 'create:cogwheel',]),
    event.recipes.create.deploying('kubejs:incomplete_wooden_mechanism', ['kubejs:incomplete_wooden_mechanism', 'create:large_cogwheel',]),
    event.recipes.create.pressing('kubejs:incomplete_wooden_mechanism', 'kubejs:incomplete_wooden_mechanism')
  ]
).transitionalItem('kubejs:incomplete_wooden_mechanism') // Set the transitional item
.loops(1)
// precision mechanism




//steel mechanism
event.recipes.create.sequenced_assembly(
    'tfmg:steel_mechanism', 'create:precision_mechanism',
    [
        event.recipes.create.deploying('tfmg:unfinished_steel_mechanism', ['tfmg:unfinished_steel_mechanism', 'tfmg:steel_cogwheel']),
        event.recipes.create.deploying('tfmg:unfinished_steel_mechanism', ['tfmg:unfinished_steel_mechanism', 'tfmg:large_steel_cogwheel']),
        event.recipes.create.deploying('tfmg:unfinished_steel_mechanism', ['tfmg:unfinished_steel_mechanism', 'immersiveengineering:component_steel'])
    ]
).transitionalItem('tfmg:unfinished_steel_mechanism')
.loops(3)

//computation mechaism related recipes

//cast
event.shaped(
  Item.of('kubejs:mech_cast', 1), // arg 1: output
  [
    'BCB',
    'DAD', // arg 2: the shape (array of strings)
    'BBB'
  ],
  {
    A: 'tfmg:steel_ingot',
    B: 'tfmg:steel_block',
    C: 'create:chute',
    D: 'tfmg:heavy_plate'
  }
) 
//computation frame
event.recipes.create.compacting(['kubejs:mech_cast', 'kubejs:incomplete_calculation_mechanism'], ['kubejs:mech_cast', '8x ae2:silicon']).heated()

//computation mechanism
event.recipes.create.sequenced_assembly(
  // Outputs:
  [
    CreateItem.of('kubejs:calculation_mechanism', 1)
  ],
  // Input:
  'kubejs:incomplete_calculation_mechanism', 
  [
    event.recipes.create.deploying('kubejs:incomplete_calculation_mechanism', ['kubejs:incomplete_calculation_mechanism', 'ae2:charged_certus_quartz_crystal']),
    event.recipes.create.deploying('kubejs:incomplete_calculation_mechanism', ['kubejs:incomplete_calculation_mechanism', 'tfmg:copper_wire']),
    event.recipes.create.deploying('kubejs:incomplete_calculation_mechanism', ['kubejs:incomplete_calculation_mechanism', 'ae2:calculation_processor']),
    event.recipes.create.filling('kubejs:incomplete_calculation_mechanism', ['kubejs:incomplete_calculation_mechanism', Fluid.of('tfmg:molten_plastic', 250)]),
    event.recipes.create.deploying('kubejs:incomplete_calculation_mechanism', ['kubejs:incomplete_calculation_mechanism', 'kubejs:incomplete_calculation_mechanism']),
    event.recipes.create.pressing('kubejs:incomplete_calculation_mechanism', 'kubejs:incomplete_calculation_mechanism')
  ]
).transitionalItem('kubejs:incomplete_calculation_mechanism') // Set the transitional item
.loops(1)





});

