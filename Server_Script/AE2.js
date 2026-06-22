ServerEvents.recipes(event => {
event.remove({ output: 'createpropulsion:platinum_casing'})

//see "MechanismRecipes" for computation mechanism recipe

//free skystone
event.remove({ output: 'ae2:sky_dust'})
event.recipes.create.crushing([CreateItem.of('ae2:sky_dust', 1), CreateItem.of('ae2:sky_dust', 0.15)], 'ae2:sky_stone_block')
//polarizing rose quartz tile gives skystone
event.custom({
  "type": "tfmg:polarizing",
  "ingredients": [
    {
      "item": "minecraft:stone"
    }
  ],
  "results": [
    {
      "id": "ae2:sky_stone_block"
    }
  ]
})
//flawless bud recipe
event.recipes.create.sequenced_assembly(
  // Outputs:
  [
    CreateItem.of('ae2:flawless_budding_quartz', 1)
  ],
  // Input:
  'ae2:flawed_budding_quartz', 
  [
    event.recipes.create.filling('ae2:flawed_budding_quartz', ['ae2:flawed_budding_quartz', Fluid.of('minecraft:water', 1000)])
  ]
).transitionalItem('ae2:flawed_budding_quartz') // Set the transitional item
.loops(999)

//charging certus recipe
event.remove({ output: 'ae2:charged_certus_quartz_crystal'})
event.custom({
  "type": "tfmg:polarizing",
  "ingredients": [
    {
      "item": "ae2:certus_quartz_crystal"
    }
  ],
  "results": [
    {
      "id": "ae2:charged_certus_quartz_crystal"
    }
  ]
})

//certus casing 
event.recipes.create.sequenced_assembly(
  // Outputs:
  [
    CreateItem.of('createpropulsion:platinum_casing', 1)
  ],
  // Input:
  'ae2:smooth_sky_stone_block', 
  [
    event.recipes.create.deploying('ae2:smooth_sky_stone_block', ['ae2:smooth_sky_stone_block', 'ae2:cut_quartz_slab']),
    event.recipes.create.cutting('ae2:smooth_sky_stone_block', 'ae2:smooth_sky_stone_block'),
    event.recipes.create.deploying('ae2:smooth_sky_stone_block', ['ae2:smooth_sky_stone_block', 'ae2:cut_quartz_slab']),
    event.recipes.create.filling('ae2:smooth_sky_stone_block', ['ae2:smooth_sky_stone_block', Fluid.of('tfmg:molten_plastic', 1000)]),
    event.recipes.create.pressing('ae2:smooth_sky_stone_block', 'ae2:smooth_sky_stone_block')

  ]
).transitionalItem('ae2:smooth_sky_stone_block') // Set the transitional item
.loops(1)

//certus silicon plate
event.remove({ output: 'ae2:printed_silicon'})
event.recipes.create.pressing('ae2:printed_silicon', 'ae2:silicon')

//calculation processor
event.remove({ output: 'ae2:calculation_processor'})
event.recipes.create.sequenced_assembly(
  // Outputs:
  [
    CreateItem.of('ae2:calculation_processor', 1)
  ],
  // Input:
  'ae2:cut_quartz_slab', 
  [
    event.recipes.create.deploying('createappliedkinetics:incomplete_calculation_processor', ['createappliedkinetics:incomplete_calculation_processor', 'minecraft:comparator']),
    event.recipes.create.deploying('createappliedkinetics:incomplete_calculation_processor', ['createappliedkinetics:incomplete_calculation_processor', 'minecraft:redstone']),
    event.recipes.create.deploying('createappliedkinetics:incomplete_calculation_processor', ['createappliedkinetics:incomplete_calculation_processor', 'minecraft:repeater']),
    event.recipes.create.deploying('createappliedkinetics:incomplete_calculation_processor', ['createappliedkinetics:incomplete_calculation_processor', 'minecraft:redstone_torch']),
    event.recipes.create.deploying('createappliedkinetics:incomplete_calculation_processor', ['createappliedkinetics:incomplete_calculation_processor', 'ae2:printed_silicon']),
    event.recipes.create.pressing('createappliedkinetics:incomplete_calculation_processor', 'createappliedkinetics:incomplete_calculation_processor')
  ]
).transitionalItem('createappliedkinetics:incomplete_calculation_processor') // Set the transitional item
.loops(1)

//wireless receiver
event.remove({ output: 'ae2:wireless_receiver'})
event.shaped(
  Item.of('ae2:wireless_receiver', 1), // arg 1: output
  [
    ' A ',
    'CBC', // arg 2: the shape (array of strings)
    ' C '
  ],
  {
    A: 'ae2:fluix_pearl',
    B: 'tfmg:circuit_board',
    C: 'minecraft:iron_ingot'
  }
) 
//fluix pearl
event.remove({ output: 'ae2:fluix_pearl'})
event.shaped(
  Item.of('ae2:fluix_pearl', 1), // arg 1: output
  [
    'BCB',
    'CAC', // arg 2: the shape (array of strings)
    'BCB'
  ],
  {
    A: 'minecraft:ender_pearl',
    B: 'ae2:fluix_dust',
    C: 'createcasing:chorium_ingot'
  }
) 





});
