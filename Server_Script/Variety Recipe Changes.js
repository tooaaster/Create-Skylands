
ServerEvents.tags("item", event => {
  event.add("immersiveengineering:tools/hammers", 'create:wrench')
});
ServerEvents.recipes(event => {
//remove big cannons bs
event.remove({ output: 'createbigcannons:cast_iron_ingot' })
event.remove({ output: 'createbigcannons:steel_ingot' })
event.remove({ output: 'createbigcannons:cast_iron_nugget' })
event.remove({ output: 'createbigcannons:steel_scrap' })
event.remove({ output: 'createbigcannons:steel_block' })
event.remove({ output: 'tfmg:coke_oven' })
event.remove({ output: 'tfmg:pumpjack_crank' })
event.remove({ output: 'tfmg:pumpjack_hammer' })
event.remove({ output: 'tfmg:pumpjack_base' })
event.remove({ output: 'tfmg:pumpjack_hammer_head' })
event.remove({ output: 'tfmg:pumpjack_hammer_part' })
event.remove({ output: 'tfmg:pumpjack_hammer_connector'})
event.remove({ output: 'tfmg:large_pumpjack_hammer_head' })
event.remove({ output: 'tfmg:large_pumpjack_hammer_part' })
event.remove({ output: 'tfmg:large_pumpjack_hammer_connector'})
event.remove({ output: 'tfmg:surface_scanner'})
event.remove({ output: 'createoreexcavation:extractor'})
event.remove({ output: 'createoreexcavation:drilling_machine'})
event.remove({ output: 'tfmg:steel_mechanism'})
event.remove({ output: 'createbigcannons:steel_scrap'})
event.remove({ id: 'create:splashing/gravel'})
event.remove({ id: 'createbigcannons:iron_to_cast_iron_block'})
event.remove({ id: 'createbigcannons:cast_iron_block'})
event.remove({ id: 'createdieselgenerators:mixing/biodiesel'})

//add chorus flower recipe
event.recipes.create.filling('minecraft:chorus_flower', [Fluid.of('minecraft:water'), 'quark:chorus_fruit_block'])
event.remove({ output: 'quark:chorus_fruit_block'})
event.shaped(
  Item.of('quark:chorus_fruit_block', 1), // arg 1: output
  [
    '   ',
    'AA ', // arg 2: the shape (array of strings)
    'AA '
  ],
  {
    A: 'minecraft:chorus_fruit'
  }
) 
event.remove({ id: 'quark:building/crafting/compressed/chorus_fruit_blockuncompress'})
event.shapeless(
  Item.of('minecraft:chorus_fruit', 4), // arg 1: output
  [
    'quark:chorus_fruit_block'
  ]
)

//add secondary iron rod recipe
event.recipes.create.sequenced_assembly(
  // Outputs:
  [
    CreateItem.of('immersiveengineering:stick_iron', 1) // Main output, will appear in JEI as the result
  ],
  // Input:
  'create:iron_sheet', 
  [
    event.recipes.create.pressing('create:iron_sheet', 'create:iron_sheet'),
    event.recipes.create.cutting('create:iron_sheet', 'create:iron_sheet')
  ]
).transitionalItem('create:iron_sheet') // Set the transitional item
.loops(1)

//add copper to gravel washing
event.recipes.create.splashing([CreateItem.of('minecraft:flint', 0.25), CreateItem.of('create:copper_nugget', 0.12), CreateItem.of('minecraft:iron_nugget', 0.12)], 'minecraft:gravel')
//slag conversion
event.recipes.create.splashing([CreateItem.of('immersiveengineering:slag')], 'tfmg:slag')
//slag to nickel and lead
event.recipes.create.mixing([CreateItem.of('tfmg:nickel_nugget', 0.5), CreateItem.of('tfmg:lead_nugget', 0.8)], ['3x tfmg:slag', '8x tfmg:limesand']).superheated()
//sulfur from gunpowder
event.custom({
  "type": "tfmg:vat_machine_recipe",
  "ingredients": [
    {
      "item": "minecraft:gunpowder"
    },
    {
      "item": "minecraft:gunpowder"
    },
    {
      "item": "minecraft:gunpowder"
    }
  ],
  "machines": [
    "tfmg:centrifuge"
  ],
  "min_size": 4,
  "processing_time": 200,
  "results": [
    {
      "chance": 0.8,
      "id": "tfmg:sulfur_dust"
    },
    {
      "chance": 0.3,
      "id": "tfmg:nitrate_dust"
    },
    {
      "amount": 500,
      "id": "tfmg:carbon_dioxide"
    }
  ]
})

//drills
event.recipes.create.mechanical_crafting('createoreexcavation:drilling_machine', [
  ' HCH ',
  'DCGCE',
  ' H HF'
], {
  C: 'create:brass_casing',
  D: 'create:fluid_pipe',
  E: 'create:chute',
  F: 'createcasing:brass_gearbox',
  G: 'create:mechanical_drill',
  H: 'create:metal_girder'
})
event.recipes.create.mechanical_crafting('createoreexcavation:extractor', [
  ' HEH ',
  'DEGED',
  ' H HF'
], {
  D: 'create:fluid_pipe',
  E: 'create:copper_casing',
  F: 'createcasing:brass_gearbox',
  G: 'create:mechanical_drill',
  H: 'create:metal_girder'
})


//coke oven locked behind both cast iron and brass
event.shaped(
  Item.of('tfmg:coke_oven', 3), // arg 1: output
  [
    'BAB',
    'ACA', // arg 2: the shape (array of strings)
    'BAB'
  ],
  {
    A: 'tfmg:cast_iron_ingot',
    B: 'create:brass_ingot',  //arg 3: the mapping object
    C: 'tfmg:cast_iron_fluid_tank'
  }
) 


//crowns steelification
event.remove({ output: 'crowns:heat_exchanger'})
event.shaped(
  Item.of('crowns:heat_exchanger', 3), // arg 1: output
  [
    ' A ',
    'ABA', // arg 2: the shape (array of strings)
    ' A '
  ],
  {
    A: 'tfmg:aluminum_sheet',
    B: 'tfmg:steel_pipe',  //arg 3: the mapping object
  }
) 
event.remove({ output: 'crowns:steam_input'})
event.shaped(
  Item.of('crowns:steam_input', 3), // arg 1: output
  [
    ' A ',
    'ABA', // arg 2: the shape (array of strings)
    ' A '
  ],
  {
    A: 'tfmg:aluminum_pipe',
    B: 'tfmg:steel_casing',  //arg 3: the mapping object
  }
)
event.remove({ output: 'crowns:steam_collector'})
event.shaped(
  Item.of('crowns:steam_collector', 3), // arg 1: output
  [
    ' A ',
    'ABA', // arg 2: the shape (array of strings)
    ' A '
  ],
  {
    A: 'tfmg:steel_casing',
    B: 'tfmg:aluminum_pipe',  //arg 3: the mapping object
  }
)
event.remove({ output: 'crowns:compressor'})
event.shaped(
  Item.of('crowns:compressor', 3), // arg 1: output
  [
    'CAC',
    'BBB', // arg 2: the shape (array of strings)
    'CAC'
  ],
  {
    A: 'tfmg:steel_casing',
    B: 'tfmg:aluminum_mechanical_pump',  //arg 3: the mapping object
    C: 'tfmg:rubber_sheet'
  }
)
event.remove({ output: 'crowns:turbine_stage'})
event.recipes.create.mechanical_crafting('crowns:turbine_stage', [
  '    D    ',
  '  D D D  ',
  ' D DDD D ',
  '  DCBCD  ',
  'DDDBABDDD',
  '  DCBCD  ',
  ' D DDD D ',
  '  D D D  ',
  '    D    '
], {
  A: 'create:andesite_alloy_block',
  B: '#c:storage_blocks/steel',
  C: 'tfmg:steel_ingot',
  D: 'tfmg:heavy_plate'
})

//plastic fix
event.remove({id: 'tfmg:casting/plastic_sheet'})
event.custom({
  "type": "tfmg:casting",
  "ingredients": [
    {
      "type": "neoforge:single",
      "amount": 144,
      "fluid": "tfmg:molten_plastic"
    }
  ],
  "processing_time": 200,
  "results": [
    {
      "id": "tfmg:plastic_sheet"
    }
  ]
})

//phantom rail accessablility fix
event.remove({output: 'railways:track_phantom'})
event.recipes.create.sequenced_assembly(
  // Outputs:
  [
    CreateItem.of('32x railways:track_phantom'), // Main output, will appear in JEI as the result
  ],
  // Input:
  'minecraft:glass', 
  // Sequence:
  [
    event.recipes.create.deploying('railways:track_incomplete_phantom', ['railways:track_incomplete_phantom', 'minecraft:iron_nugget',]),
    event.recipes.create.deploying('railways:track_incomplete_phantom', ['railways:track_incomplete_phantom', 'minecraft:iron_nugget',]),
    event.recipes.create.pressing('railways:track_incomplete_phantom', 'railways:track_incomplete_phantom')
  ]
)
.transitionalItem('railways:track_incomplete_phantom') // Set the transitional item
.loops(1) // Set the number of loops

//phantom wide
event.remove({output: 'railways:track_phantom_wide'})
event.recipes.create.sequenced_assembly(
  // Outputs:
  [
    CreateItem.of('railways:track_phantom_wide'), // Main output, will appear in JEI as the result
  ],
  // Input:
  'railways:track_phantom', 
  // Sequence:
  [
    event.recipes.create.cutting('railways:track_incomplete_phantom_wide', 'railways:track_incomplete_phantom_wide'),
    event.recipes.create.deploying('railways:track_incomplete_phantom_wide', ['railways:track_incomplete_phantom_wide', 'minecraft:iron_nugget',]),
    event.recipes.create.pressing('railways:track_incomplete_phantom_wide', 'railways:track_incomplete_phantom_wide')
  ]
)
.transitionalItem('railways:track_incomplete_phantom_wide') // Set the transitional item
.loops(1) // Set the number of loops

//phantom narrow
event.remove({output: 'railways:track_phantom_narrow'})
event.recipes.create.sequenced_assembly(
  // Outputs:
  [
    CreateItem.of('2x railways:track_phantom_narrow'), // Main output, will appear in JEI as the result
  ],
  // Input:
  'railways:track_phantom', 
  // Sequence:
  [
    event.recipes.create.cutting('railways:track_incomplete_phantom_narrow', 'railways:track_incomplete_phantom_narrow'),
    event.recipes.create.pressing('railways:track_incomplete_phantom_narrow', 'railways:track_incomplete_phantom_narrow')
  ]
)
.transitionalItem('railways:track_incomplete_phantom_narrow') // Set the transitional item
.loops(1) // Set the number of loops







})


//test shapeless recipe
/* event.shapeless(
  Item.of('minecraft:dandelion', 3), // arg 1: output
  [
    'minecraft:bone_meal',
    'minecraft:yellow_dye', 	       // arg 2: the array of inputs
    '3x minecraft:ender_pearl'
  ]
)*/


//test vating
/* event.custom({
  "type": "tfmg:vat_machine_recipe",
  "allowed_vat_types": [
    "tfmg:steel_vat",
    "tfmg:firebrick_lined_vat"
  ],
  "ingredients": [
    {
      "item": "minecraft:ender_pearl"
    },
    {
      "type": "neoforge:single",
      "amount": 250,
      "fluid": "minecraft:water"
    }
  ],
  "machines": [
    "tfmg:mixing"
  ],
  "min_size": 2,
  "results": [
    {
      "amount": 1000,
      "id": "minecraft:lava"
    }
  ]


}) */


//test coking
/* event.custom({
  "type": "tfmg:coking",
  "ingredients": [
    {
      "item": "minecraft:honey_bottle"
    }
  ],
  "processing_time": 60,
  "results": [
    {
      "chance": 0.1,
      "id": "minecraft:sugar"
    },
    {
      "amount": 1,
      "id": "minecraft:water"
    },
    {
      "amount": 1,
      "id": "tfmg:air"
    }
  ]
}) */

