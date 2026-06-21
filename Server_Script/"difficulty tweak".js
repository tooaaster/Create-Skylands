ServerEvents.recipes(event => {
  const { kubejs } = event.recipes;

  kubejs
    .shapeless("create:iron_sheet", ["#overgeared:smithing_hammers", "overgeared:heated_iron_ingot"])
    .damageIngredient("#overgeared:smithing_hammers");

event.remove({ output: 'tfmg:screwdriver'})
event.shaped(
  Item.of('tfmg:screwdriver', 1), // arg 1: output
  [
    '   ',
    'B  ', // arg 2: the shape (array of strings)
    'A  '
  ],
  {
    A: '#minecraft:planks',
    B: 'immersiveengineering:stick_iron'
  }
)
event.remove({ output: 'chipped:saw'})
event.shaped(
  Item.of('chipped:saw', 1), // arg 1: output
  [
    '  ',
    ' B', // arg 2: the shape (array of strings)
    'A '
  ],
  {
    A: '#minecraft:planks',
    B: 'create:iron_sheet'
  }
)
event.remove({ output: 'create:rose_quartz'})
event.custom({
  "type": "tfmg:vat_machine_recipe",
  "allowed_vat_types": [
    "tfmg:cast_iron_vat", "tfmg:steel_vat"
  ],
  "heat_requirement": "superheated",
  "ingredients": [
    {
      "item": "minecraft:quartz"
    },
    {
      "item": "minecraft:redstone"    
    },
    {
      "item": "minecraft:redstone"    
    },
    {
      "item": "minecraft:redstone"    
    }
  ],
  "min_size": 1,
  "processing_time": 200,
  "results": [
    {
      "chance": 0.4,
      "id": "create:rose_quartz"
    },
    {
      "chance": 0.6,
      "id": "minecraft:quartz"
    }
  ]
})

event.remove({ output: 'create:electron_tube'})
event.shaped(
  Item.of('create:electron_tube', 1), // arg 1: output
  [
    ' A ',
    'BBB', // arg 2: the shape (array of strings)
    'CCC'
  ],
  {
    A: 'create:polished_rose_quartz',
    B: 'tfmg:copper_wire',
    C: 'create:iron_sheet'
  }
) 

event.remove({ output: 'create:empty_blaze_burner'})
event.shaped(
  Item.of('create:empty_blaze_burner', 1), // arg 1: output
  [
    ' B ',
    'BAB', // arg 2: the shape (array of strings)
    ' B '
  ],
  {
    A: 'minecraft:netherrack',
    B: 'tfmg:cast_iron_sheet'
  }
) 
//add milling recipe for easier limesand
event.recipes.create.milling(CreateItem.of('tfmg:limesand', 0.8), 'create:limestone')

//make centrifuges real
event.remove({ output: 'tfmg:centrifuge'})
event.shaped(
  Item.of('tfmg:centrifuge', 1), // arg 1: output
  [
    'BAB',
    'BAB', // arg 2: the shape (array of strings)
    'BCB'
  ],
  {
    A: 'immersiveengineering:stick_iron',
    B: 'create:andesite_bars',
    C: 'create:andesite_alloy'
  }
) 

//makes brass casings 815% more annoying
event.remove({ output: 'create:brass_casing'})
event.recipes.create.sequenced_assembly(
  // Outputs:
  [
    CreateItem.of('create:brass_casing', 1) // Main output, will appear in JEI as the result
  ],
  // Input:
  'create_connected:empty_fan_catalyst', 
  [
    event.recipes.create.deploying('create_connected:empty_fan_catalyst', ['create_connected:empty_fan_catalyst', 'create:brass_nugget',]),
    event.recipes.create.deploying('create_connected:empty_fan_catalyst', ['create_connected:empty_fan_catalyst', 'immersiveengineering:slab_treated_wood_horizontal']),
    event.recipes.create.deploying('create_connected:empty_fan_catalyst', ['create_connected:empty_fan_catalyst', 'create:brass_nugget',])
  ]
).transitionalItem('create_connected:empty_fan_catalyst') // Set the transitional item
.loops(6)
//copper casing
event.remove({ output: 'create:copper_casing'})
event.recipes.create.item_application('create:copper_casing', ['immersiveengineering:sheetmetal_colored_gray', 'create:copper_sheet'])

//event.recipes.create.item_application('create:copper_casing', ['minecraft:dirt', 'minecraft:brown_mushroom'])



event.remove({ output: 'tfmg:steel_casing'})
event.remove({ output: 'tfmg:hardened_planks'})
event.remove({ id: 'immersiveengineering:crafting/treated_wood_horizontal'})
event.smoking('tfmg:hardened_planks', 'immersiveengineering:treated_wood_horizontal')



//same for steel casings
event.recipes.create.sequenced_assembly(
  // Outputs:
  [
    CreateItem.of('tfmg:steel_casing', 1) // Main output, will appear in JEI as the result
  ],
  // Input:
  'tfmg:hardened_planks', 
  [
    event.recipes.create.deploying('tfmg:hardened_planks', ['tfmg:hardened_planks', 'tfmg:steel_ingot',]),
    event.recipes.create.deploying('tfmg:hardened_planks', ['tfmg:hardened_planks', 'tfmg:rebar',]),
    event.recipes.create.deploying('tfmg:hardened_planks', ['tfmg:hardened_planks', 'tfmg:screw',]),
    event.recipes.create.deploying('tfmg:hardened_planks', ['tfmg:hardened_planks', 'tfmg:screwdriver',]),
    event.recipes.create.deploying('tfmg:hardened_planks', ['tfmg:hardened_planks', 'tfmg:rebar',]),
    event.recipes.create.deploying('tfmg:hardened_planks', ['tfmg:hardened_planks', 'tfmg:steel_ingot',])
  ]
).transitionalItem('immersiveengineering:treated_wood_horizontal') // Set the transitional item
.loops(6)
//steel extravaganza
event.remove({ output: 'tfmg:heavy_machinery_casing'})
event.recipes.create.sequenced_assembly(
  // Outputs:
  [
    CreateItem.of('tfmg:heavy_machinery_casing', 1) // Main output, will appear in JEI as the result
  ],
  // Input:
  'tfmg:steel_casing', 
  [
    event.recipes.create.deploying('tfmg:steel_casing', ['tfmg:steel_casing', 'tfmg:heavy_plate',]),
    event.recipes.create.deploying('tfmg:hardened_planks', ['tfmg:hardened_planks', 'tfmg:screw',]),
    event.recipes.create.deploying('tfmg:hardened_planks', ['tfmg:hardened_planks', 'tfmg:screwdriver',]),
    event.recipes.create.deploying('tfmg:hardened_planks', ['tfmg:hardened_planks', 'tfmg:screw',]),
    event.recipes.create.deploying('tfmg:hardened_planks', ['tfmg:hardened_planks', 'tfmg:screwdriver',])
  ]
).transitionalItem('tfmg:hardened_planks') // Set the transitional item
.loops(6)

//make uranium more expensive
event.remove({ input: 'crowns:raw_uranium'})
event.remove({ input: 'create:crushed_raw_uranium'})
event.remove({ input: '#c:raw_materials/uranium'})

event.recipes.create.compacting(['crowns:uranium_ingot', Fluid.of('tfmg:molten_slag', 1000)], '12x create:crushed_raw_uranium').superheated()
event.recipes.create.crushing(['create:crushed_raw_uranium', CreateItem.of('create:crushed_raw_uranium', 0.5), CreateItem.of('create:experience_nugget', 0.15)], 'crowns:raw_uranium')



//more bullshittery
event.remove({ output: 'create:mechanical_crafter'})
event.shaped(
  Item.of('create:mechanical_crafter', 4), // arg 1: output
  [
    'FCF',
    'DAE', // arg 2: the shape (array of strings)
    'FBF'
  ],
  {
    A: 'create:brass_casing',
    B: 'minecraft:crafting_table',
    C: 'create:electron_tube',
    D: 'create:precision_mechanism',
    E: 'kubejs:wooden_mechanism',
    F: 'create:cogwheel'
  }
) 
event.remove({ output: 'create:chute'})
event.shaped(
  Item.of('create:chute', 6), // arg 1: output
  [
    'B B',
    'A A', // arg 2: the shape (array of strings)
    'A A'
  ],
  {
    A: 'tfmg:cast_iron_sheet',
    B: 'tfmg:cast_iron_ingot'
  }
) 
event.shaped(
  Item.of('create:chute', 2), // arg 1: output
  [
    'B B',
    'A A', // arg 2: the shape (array of strings)
    'A A'
  ],
  {
    A: 'create:iron_sheet',
    B: 'minecraft:iron_ingot'
  }
) 
event.remove({ output: 'tfmg:blast_furnace_hatch'})
event.shaped(
  Item.of('tfmg:blast_furnace_hatch', 1), // arg 1: output
  [
    'DBD',
    'CAC', // arg 2: the shape (array of strings)
    'DBD'
  ],
  {
    A: 'create:brass_casing',
    B: 'create:smart_chute',
    C: 'tfmg:cast_iron_pipe',
    D: 'tfmg:fireproof_bricks'
  }
) 
event.remove({ output: 'tfmg:blast_furnace_output'})
event.shaped(
  Item.of('tfmg:blast_furnace_output', 1), // arg 1: output
  [
    'DED',
    'CAC', // arg 2: the shape (array of strings)
    'DBD'
  ],
  {
    A: 'overgeared:casting_furnace',
    B: 'create:precision_mechanism',
    C: 'tfmg:cast_iron_pipe',
    D: 'tfmg:fireproof_bricks',
    E: 'create:electron_tube'
  }
) 
event.remove({ output: 'overgeared:casting_furnace'})
event.shaped(
  Item.of('overgeared:casting_furnace', 1), // arg 1: output
  [
    'BCB',
    'EAE', // arg 2: the shape (array of strings)
    'BBB'
  ],
  {
    A: 'minecraft:blast_furnace',
    B: 'tfmg:fireproof_bricks',
    C: 'tfmg:cast_iron_pipe',
    E: 'minecraft:blaze_rod'
  }
) 
event.remove({ output: 'tfmg:fireproof_bricks'})
event.shaped(
  Item.of('tfmg:fireproof_bricks', 1), // arg 1: output
  [
    'BAB',
    'ABA', // arg 2: the shape (array of strings)
    'BAB'
  ],
  {
    A: 'tfmg:cast_iron_sheet',
    B: 'tfmg:fireproof_brick'
  }
) 
event.remove({ output: 'tfmg:fireproof_brick_reinforcement'})
event.shaped(
  Item.of('tfmg:fireproof_brick_reinforcement', 4), // arg 1: output
  [
    'BBB',
    'ACA', // arg 2: the shape (array of strings)
    'BBB'
  ],
  {
    A: 'tfmg:cast_iron_sheet',
    B: 'tfmg:fireproof_brick',
    C: 'tfmg:cast_iron_ingot'
  }
) 
event.remove({ output: 'create:mechanical_press'})
event.shaped(
  Item.of('create:mechanical_press', 1), // arg 1: output
  [
    ' C ',
    'DAD', // arg 2: the shape (array of strings)
    ' B '
  ],
  {
    A: 'create:andesite_casing',
    B: 'minecraft:iron_block',
    C: 'create:shaft',
    D: 'kubejs:wooden_mechanism'
  }
) 
event.remove({ output: 'create:mechanical_mixer'})
event.shaped(
  Item.of('create:mechanical_mixer', 1), // arg 1: output
  [
    ' C ',
    'DAD', // arg 2: the shape (array of strings)
    ' B '
  ],
  {
    A: 'create:andesite_casing',
    B: 'create:whisk',
    C: 'create:cogwheel',
    D: 'kubejs:wooden_mechanism'
  }
) 
event.remove({ output: 'create:encased_fan'})
event.shaped(
  Item.of('create:encased_fan', 1), // arg 1: output
  [
    ' C ',
    'DAD', // arg 2: the shape (array of strings)
    ' B '
  ],
  {
    A: 'create:andesite_casing',
    B: 'create:propeller',
    C: 'create:shaft',
    D: 'kubejs:wooden_mechanism'
  }
) 
event.remove({ output: 'create:speedometer'})
event.shaped(
  Item.of('create:speedometer', 1), // arg 1: output
  [
    ' C ',
    ' A ', // arg 2: the shape (array of strings)
    ' B '
  ],
  {
    A: 'create:andesite_casing',
    B: 'kubejs:wooden_mechanism',
    C: 'minecraft:compass',
  }
) 
event.remove({ output: 'create:mechanical_drill'})
event.shaped(
  Item.of('create:mechanical_drill', 1), // arg 1: output
  [
    ' C ',
    'DAD', // arg 2: the shape (array of strings)
    ' B '
  ],
  {
    A: 'create:andesite_casing',
    B: 'kubejs:wooden_mechanism',
    C: 'minecraft:iron_ingot',
    D: 'create:andesite_alloy'
  }
) 
event.remove({ output: 'create:mechanical_saw'})
event.shaped(
  Item.of('create:mechanical_saw', 1), // arg 1: output
  [
    ' C ',
    'CAC', // arg 2: the shape (array of strings)
    'DB '
  ],
  {
    A: 'create:andesite_alloy',
    B: 'create:andesite_casing',
    C: 'minecraft:iron_ingot',
    D: 'kubejs:wooden_mechanism'
  }
) 
event.remove({ output: 'create:deployer'})
event.shaped(
  Item.of('create:deployer', 1), // arg 1: output
  [
    ' A ',
    'DBD', // arg 2: the shape (array of strings)
    ' C '
  ],
  {
    A: 'create:electron_tube',
    B: 'create:andesite_casing',
    C: 'create:brass_hand',
    D: 'kubejs:wooden_mechanism'
  }
) 
event.remove({ output: 'create:portable_storage_interface'})
event.shaped(
  Item.of('create:portable_storage_interface', 1), // arg 1: output
  [
    ' C ',
    'DBD', // arg 2: the shape (array of strings)
    ' A '
  ],
  {
    A: 'create:andesite_casing',
    B: 'minecraft:sticky_piston',
    C: 'create:chute',
    D: 'kubejs:wooden_mechanism'
  }
) 
event.remove({ output: 'create:rotation_speed_controller'})
event.shaped(
  Item.of('create:rotation_speed_controller', 1), // arg 1: output
  [
    ' B ',
    ' A ', // arg 2: the shape (array of strings)
    ' D '
  ],
  {
    A: 'create:brass_casing',
    B: 'create:precision_mechanism',
    D: 'create:shaft'
  }
) 



});

