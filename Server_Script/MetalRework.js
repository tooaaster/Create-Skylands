ServerEvents.recipes(event => {

// event.remove({})


// remove recipes 
event.remove({output: Fluid.of('tfmg:molten_steel')})
event.remove({input: Fluid.of('tfmg:molten_steel')})
event.remove({mod: 'createmetalwork'})
event.remove({type: 'createbigcannons:melting'})
event.remove({output: 'createbigcannons:steel_ingot'})
event.remove({output: 'createbigcannons:steel_block'})
event.remove({output: 'createbigcannons:steel_scrap'})
event.remove({id: 'tfmg:casting/steel'})
event.remove({id: 'alloyed:mixing/steel_ingot'})
event.remove({id: 'alloyed:crafting/forge'})
event.remove({output: 'immersiveengineering:steel_trapdoor'})
event.remove({output: 'alloyed:steel_trapdoor'})
event.remove({output: 'alloyed:steel_ingot'})
event.remove({output: 'alloyed:steel_block'})
event.remove({output: 'alloyed:steel_nugget'})
event.remove({output: 'alloyed:steel_sheet'})
event.remove({output: 'alloyed:steel_casing'})
event.remove({output: 'immersiveengineering:storage_steel'})
event.remove({output: 'immersiveengineering:steel_door'})
event.remove({output: 'createbigcannons:steel_block'})
event.remove({output: 'immersiveengineering:pickaxe_steel'})
event.remove({output: 'immersiveengineering:shovel_steel'})
event.remove({output: 'immersiveengineering:axe_steel'})
event.remove({output: 'immersiveengineering:hoe_steel'})
event.remove({output: 'immersiveengineering:sword_steel'})
event.remove({output: 'tfmg:steel_sword'})
event.remove({output: 'tfmg:steel_pickaxe'})
event.remove({output: 'tfmg:steel_axe'})
event.remove({output: 'tfmg:steel_shovel'})
event.remove({output: 'tfmg:steel_hoe'})
event.remove({id: 'create:mixing/brass_ingot'})
event.remove({id: 'tfmg:compacting/cast_iron'})
event.remove({output: 'createbigcannons:bronze_ingot', input: 'create:cinder_flour'})
event.remove({id: 'createbigcannons:compacting/forge_bronze_ingot'})
event.remove({id: 'createbigcannons:compacting/forge_bronze_nugget'})
event.remove({id: 'createbigcannons:compacting/forge_bronze_block'})
event.remove({id: 'alloyed:mixing/bronze_ingot'})
event.remove({id: 'alloyed:mixing/bronze_ingot_x3'})
event.remove({input: 'immersiveengineering:raw_aluminum'})
event.remove({id: 'createbigcannons:compacting/forge_cast_iron_block'})
event.remove({id: 'createbigcannons:compacting/iron_to_cast_iron_block'})
event.remove({ output: 'overgeared:steel_ingot' })
event.remove({ output: 'overgeared:steel_nugget' })
event.remove({ output: 'createbigcannons:bronze_ingot' })



//duplicate metal block transmutation
//steel
event.stonecutting('immersiveengineering:storage_steel', '#c:storage_blocks/steel')
event.stonecutting('tfmg:steel_block', '#c:storage_blocks/steel')
event.stonecutting('createbigcannons:steel_block', '#c:storage_blocks/steel')
event.stonecutting('overgeared:steel_block', '#c:storage_blocks/steel')
event.stonecutting('alloyed:steel_block', '#c:storage_blocks/steel')
//cast iron
event.stonecutting('tfmg:cast_iron_block', '#c:storage_blocks/cast_iron')
event.stonecutting('createbigcannons:cast_iron_block', '#c:storage_blocks/cast_iron')
//bronze
event.stonecutting('createbigcannons:bronze_block', '#c:storage_blocks/bronze')
event.stonecutting('alloyed:bronze_block', '#c:storage_blocks/bronze')
//lead
event.stonecutting('immersiveengineering:storage_lead', '#c:storage_blocks/lead')
event.stonecutting('tfmg:lead_block', '#c:storage_blocks/lead')
//nickel






//change casting basin recipe
event.remove({output: 'tfmg:casting_basin'})
event.shaped(
  Item.of('tfmg:casting_basin'), // arg 1: output
  [
    'CBC',
    'ACA', // arg 2: the shape (array of strings)
    'AAA'
  ],
  {
    A: 'create:andesite_alloy',
    B: 'minecraft:iron_ingot',
    C: 'minecraft:iron_nugget'
  }
)


// Steel Tools 
event.replaceInput(
  { input: 'tfmg:steel_sword' },    
  'tfmg:steel_sword',  
  Ingredient.of('alloyed:steel_sword') 
)

event.replaceInput(
  { input: 'immersiveengineering:sword_steel' },    
  'immersiveengineering:sword_steel',  
  Ingredient.of('alloyed:steel_sword') 

)



event.shaped(
  Item.of('alloyed:steel_fishing_rod'), // arg 1: output
  [
    '  A',
    ' AB', // arg 2: the shape (array of strings)
    'A B'
  ],
  {
    A: 'tfmg:steel_ingot',
    B: 'immersiveengineering:hemp_fiber'
  }
)


// Make Molten Steel
event.remove({id: 'tfmg:industrial_blastin/steel'})
event.remove({id: 'tfmg:industrial_blastin/steel_from_raw_iron'})
event.remove({id: 'tfmg:industrial_blastin/steel_from_dust'})
event.custom({
  "type": "tfmg:industrial_blasting",
  "hot_air_usage": 20,
  "ingredients": [
    {
      "tag": "c:dusts/iron"
    },
    {
      "tag": "tfmg:flux"
    }
  ],
  "processing_time": 20,
  "results": [
    {
      "amount": 144,
      "id": "createmetalwork:molten_steel"
    },
    {
      "amount": 144,
      "id": "tfmg:molten_slag"
    },
    {
      "amount": 20,
      "id": "tfmg:furnace_gas"
    }
  ]
})



event.custom({
  "type": "tfmg:industrial_blasting",
  "hot_air_usage": 40,
  "ingredients": [
    {
      "item": "minecraft:raw_iron"
    },
    {
      "tag": "tfmg:flux"
    }
  ],
  "processing_time": 40,
  "results": [
    {
      "amount": 288,
      "id": "createmetalwork:molten_steel"
    },
    {
      "amount": 288,
      "id": "tfmg:molten_slag"
    },
    {
      "amount": 200,
      "id": "tfmg:furnace_gas"
    }
  ]
})


event.custom({
"type": "tfmg:industrial_blasting",
  "hot_air_usage": 20,
  "ingredients": [
    {
      "item": "create:crushed_raw_iron"
    },
    {
      "tag": "tfmg:flux"
    }
  ],
  "processing_time": 20,
  "results": [
    {
      "amount": 144,
      "id": "createmetalwork:molten_steel"
    },
    {
      "amount": 144,
      "id": "tfmg:molten_slag"
    },
    {
      "amount": 200,
      "id": "tfmg:furnace_gas"
    }
  ]
})


event.custom({
  "type": "tfmg:vat_machine_recipe",
  "allowed_vat_types": [
    "tfmg:firebrick_lined_vat"
  ],
  "ingredients": [
    {
      "item": "create:crushed_raw_iron"
    },
    {
      "tag": "tfmg:flux"
    },
    {
      "item": "tfmg:coal_coke_dust"
    }
  ],
  "machines": [
    "tfmg:graphite_electrode",
    "tfmg:graphite_electrode",
    "tfmg:graphite_electrode"
  ],
  "min_size": 9,
  "processing_time": 20,
  "results": [
    {
      "chance": 0.9,
      "id": "tfmg:coal_coke_dust"
    },
    {
      "amount": 144,
      "id": "createmetalwork:molten_steel"
    },
    {
      "amount": 288,
      "id": "tfmg:molten_slag"
    }
  ]
})

// Use Molten Steel
event.custom({
  "type": "tfmg:casting",
  "ingredients": [
    {
      "type": "neoforge:single",
      "amount": 144,
      "fluid": "createmetalwork:molten_steel"
    }
  ],
  "processing_time": 100,
  "results": [
    {
      "id": "kubejs:heated_steel_ingot"
    }
  ]
})


//iron melting & casting
event.custom({
  "type": "createbigcannons:melting",
  "heat_requirement": "lowheated",
  "ingredients": [
  {
    "tag": "c:ingots/iron"
  }
],
"processing_time": 120,
"results": [
  {
    "amount": 144,
    "id": "createmetalwork:molten_iron"
  }
]
})
event.custom({
  "type": "createbigcannons:melting",
  "heat_requirement": "lowheated",
  "ingredients": [
  {
    "tag": "c:storage_blocks/iron"
  }
],
"processing_time": 840,
"results": [
  {
    "amount": 1296,
    "id": "createmetalwork:molten_iron"
  }
]
})
event.custom({
  "type": "createbigcannons:melting",
  "heat_requirement": "heated",
  "ingredients": [
  {
    "tag": "c:ingots/iron"
  }
],
"processing_time": 60,
"results": [
  {
    "amount": 144,
    "id": "createmetalwork:molten_iron"
  }
]
})
event.custom({
  "type": "createbigcannons:melting",
  "heat_requirement": "heated",
  "ingredients": [
  {
    "tag": "c:storage_blocks/iron"
  }
],
"processing_time": 420,
"results": [
  {
    "amount": 1296,
    "id": "createmetalwork:molten_iron"
  }
]
})
event.custom({
  "type": "tfmg:casting",
  "ingredients": [
    {
      "type": "neoforge:single",
      "amount": 144,
      "fluid": "createmetalwork:molten_iron"
    }
  ],
  "processing_time": 100,
  "results": [
    {
      "id": "overgeared:heated_iron_ingot"
    }
  ]
})
//andesite melting & casting
event.custom({
  "type": "createbigcannons:melting",
  "heat_requirement": "heated",
  "ingredients": [
  {
    "tag": "chipped:andesite"
  }
],
"processing_time": 420,
"results": [
  {
    "amount": 1296,
    "id": "createmetalwork:molten_andesite"
  }
]
})
event.custom({
  "type": "tfmg:casting",
  "ingredients": [
    {
      "type": "neoforge:single",
      "amount": 144,
      "fluid": "createmetalwork:molten_andesite"
    }
  ],
  "processing_time": 100,
  "results": [
    {
      "id": "minecraft:andesite"
    }
  ]
})
//gold melting & casting
event.custom({
  "type": "createbigcannons:melting",
  "heat_requirement": "heated",
  "ingredients": [
  {
    "tag": "c:ingots/gold"
  }
],
"processing_time": 60,
"results": [
  {
    "amount": 144,
    "id": "createmetalwork:molten_gold"
  }
]
})
event.custom({
  "type": "createbigcannons:melting",
  "heat_requirement": "heated",
  "ingredients": [
  {
    "tag": "c:storage_blocks/gold"
  }
],
"processing_time": 420,
"results": [
  {
    "amount": 1296,
    "id": "createmetalwork:molten_gold"
  }
]
})
event.custom({
  "type": "tfmg:casting",
  "ingredients": [
    {
      "type": "neoforge:single",
      "amount": 144,
      "fluid": "createmetalwork:molten_gold"
    }
  ],
  "processing_time": 100,
  "results": [
    {
      "id": "minecraft:gold_ingot"
    }
  ]
})
//copper melting & casting
event.custom({
  "type": "createbigcannons:melting",
  "heat_requirement": "heated",
  "ingredients": [
  {
    "tag": "c:ingots/copper"
  }
],
"processing_time": 60,
"results": [
  {
    "amount": 144,
    "id": "createmetalwork:molten_copper"
  }
]
})
event.custom({
  "type": "createbigcannons:melting",
  "heat_requirement": "heated",
  "ingredients": [
  {
    "tag": "c:storage_blocks/copper"
  }
],
"processing_time": 420,
"results": [
  {
    "amount": 1296,
    "id": "createmetalwork:molten_copper"
  }
]
})
event.custom({
  "type": "tfmg:casting",
  "ingredients": [
    {
      "type": "neoforge:single",
      "amount": 144,
      "fluid": "createmetalwork:molten_copper"
    }
  ],
  "processing_time": 100,
  "results": [
    {
      "id": "overgeared:heated_copper_ingot"
    }
  ]
})
//netherite melting & casting
event.custom({
  "type": "createbigcannons:melting",
  "heat_requirement": "heated",
  "ingredients": [
  {
    "tag": "c:ingots/netherite"
  }
],
"processing_time": 60,
"results": [
  {
    "amount": 144,
    "id": "createmetalwork:molten_netherite"
  }
]
})
event.custom({
  "type": "createbigcannons:melting",
  "heat_requirement": "heated",
  "ingredients": [
  {
    "tag": "c:storage_blocks/netherite"
  }
],
"processing_time": 420,
"results": [
  {
    "amount": 1296,
    "id": "createmetalwork:molten_netherite"
  }
]
})
event.custom({
  "type": "tfmg:casting",
  "ingredients": [
    {
      "type": "neoforge:single",
      "amount": 144,
      "fluid": "createmetalwork:molten_netherite"
    }
  ],
  "processing_time": 100,
  "results": [
    {
      "id": "minecraft:netherite_ingot"
    }
  ]
})
//brass melting & casting
event.custom({
  "type": "createbigcannons:melting",
  "heat_requirement": "heated",
  "ingredients": [
  {
    "tag": "c:ingots/brass"
  }
],
"processing_time": 60,
"results": [
  {
    "amount": 144,
    "id": "createmetalwork:molten_brass"
  }
]
})
event.custom({
  "type": "createbigcannons:melting",
  "heat_requirement": "heated",
  "ingredients": [
  {
    "tag": "c:storage_blocks/brass"
  }
],
"processing_time": 420,
"results": [
  {
    "amount": 1296,
    "id": "createmetalwork:molten_brass"
  }
]
})
event.custom({
  "type": "tfmg:casting",
  "ingredients": [
    {
      "type": "neoforge:single",
      "amount": 144,
      "fluid": "createmetalwork:molten_brass"
    }
  ],
  "processing_time": 100,
  "results": [
    {
      "id": "create:brass_ingot"
    }
  ]
})
//zinc melting & casting
event.custom({
  "type": "createbigcannons:melting",
  "heat_requirement": "heated",
  "ingredients": [
  {
    "tag": "c:ingots/zinc"
  }
],
"processing_time": 60,
"results": [
  {
    "amount": 144,
    "id": "createmetalwork:molten_zinc"
  }
]
})
event.custom({
  "type": "createbigcannons:melting",
  "heat_requirement": "heated",
  "ingredients": [
  {
    "tag": "c:storage_blocks/zinc"
  }
],
"processing_time": 420,
"results": [
  {
    "amount": 1296,
    "id": "createmetalwork:molten_zinc"
  }
]
})
event.custom({
  "type": "tfmg:casting",
  "ingredients": [
    {
      "type": "neoforge:single",
      "amount": 144,
      "fluid": "createmetalwork:molten_zinc"
    }
  ],
  "processing_time": 100,
  "results": [
    {
      "id": "create:zinc_ingot"
    }
  ]
})
//bronze melting & casting
event.custom({
  "type": "createbigcannons:melting",
  "heat_requirement": "heated",
  "ingredients": [
  {
    "tag": "c:ingots/bronze"
  }
],
"processing_time": 60,
"results": [
  {
    "amount": 144,
    "id": "createmetalwork:molten_bronze"
  }
]
})
event.custom({
  "type": "createbigcannons:melting",
  "heat_requirement": "heated",
  "ingredients": [
  {
    "tag": "c:storage_blocks/bronze"
  }
],
"processing_time": 420,
"results": [
  {
    "amount": 1296,
    "id": "createmetalwork:molten_bronze"
  }
]
})
event.custom({
  "type": "tfmg:casting",
  "ingredients": [
    {
      "type": "neoforge:single",
      "amount": 144,
      "fluid": "createmetalwork:molten_bronze"
    }
  ],
  "processing_time": 100,
  "results": [
    {
      "id": "alloyed:bronze_ingot"
    }
  ]
})
//andesite alloy melting & casting
event.custom({
  "type": "createbigcannons:melting",
  "heat_requirement": "heated",
  "ingredients": [
  {
    "tag": "c:ingots/andesite_alloy"
  }
],
"processing_time": 60,
"results": [
  {
    "amount": 144,
    "id": "createmetalwork:molten_andesite_alloy"
  }
]
})
event.custom({
  "type": "createbigcannons:melting",
  "heat_requirement": "heated",
  "ingredients": [
  {
    "tag": "c:storage_blocks/andesite_alloy"
  }
],
"processing_time": 420,
"results": [
  {
    "amount": 1296,
    "id": "createmetalwork:molten_andesite_alloy"
  }
]
})
event.custom({
  "type": "tfmg:casting",
  "ingredients": [
    {
      "type": "neoforge:single",
      "amount": 144,
      "fluid": "createmetalwork:molten_andesite_alloy"
    }
  ],
  "processing_time": 100,
  "results": [
    {
      "id": "create:andesite_alloy"
    }
  ]
})
//cast iron melting & casting
event.custom({
  "type": "createbigcannons:melting",
  "heat_requirement": "lowheated",
  "ingredients": [
  {
    "tag": "c:ingots/cast_iron"
  }
],
"processing_time": 60,
"results": [
  {
    "amount": 144,
    "id": "createbigcannons:molten_cast_iron"
  }
]
})
event.custom({
  "type": "createbigcannons:melting",
  "heat_requirement": "lowheated",
  "ingredients": [
  {
    "tag": "c:storage_blocks/cast_iron"
  }
],
"processing_time": 420,
"results": [
  {
    "amount": 1296,
    "id": "createbigcannons:molten_cast_iron"
  }
]
})
event.custom({
  "type": "tfmg:casting",
  "ingredients": [
    {
      "type": "neoforge:single",
      "amount": 144,
      "fluid": "createbigcannons:molten_cast_iron"
    }
  ],
  "processing_time": 100,
  "results": [
    {
      "id": "tfmg:cast_iron_ingot"
    }
  ]
})


//alloying time
event.recipes.create.mixing(Fluid.of('createmetalwork:molten_andesite_alloy', 288), [Fluid.of('createmetalwork:molten_iron', 16), Fluid.of('createmetalwork:molten_andesite', 144)])
event.recipes.create.mixing(Fluid.of('createmetalwork:molten_brass', 288), [Fluid.of('createmetalwork:molten_zinc', 144), Fluid.of('createmetalwork:molten_copper', 144)])
event.recipes.create.mixing(Fluid.of('createmetalwork:molten_bronze', 288), [Fluid.of('createmetalwork:molten_zinc', 144), Fluid.of('createmetalwork:molten_copper', 144), 'create:cinder_flour'])
event.recipes.create.mixing(Fluid.of('createmetalwork:molten_bronze', 288), [Fluid.of('createmetalwork:molten_brass', 288), 'create:cinder_flour'])
event.recipes.create.mixing(Fluid.of('createmetalwork:molten_netherite', 144), [Ingredient.of('minecraft:netherite_scrap', 2), Fluid.of('createmetalwork:molten_gold', 288)]).superheated()
event.recipes.create.mixing(Fluid.of('createbigcannons:molten_cast_iron', 288), [Fluid.of('createmetalwork:molten_iron', 288), 'minecraft:coal'])


//funky fresh aluminum preprocessing
event.recipes.create.crushing([CreateItem.of('3x tfmg:bauxite_powder'), CreateItem.of('3x tfmg:bauxite_powder', 0.5),CreateItem.of('tfmg:aluminum_nugget', 0.05)], 'immersiveengineering:raw_aluminum')


//radiant age metals
event.remove({output: 'createcasing:chorium_ingot'})
//make vat recipe for chorium
event.custom({
  "type": "tfmg:vat_machine_recipe",
  "allowed_vat_types": [
    "tfmg:firebrick_lined_vat"
  ],
  "heat_requirement": "heated",
  "ingredients": [
    {
      "item": "quark:chorus_fruit_block"
    },
    {
      "item": "tfmg:aluminum_ingot"    
    },
    {
      "type": "neoforge:single",
      "amount": 500,
      "fluid": "aeronautics:levitite_blend"
    }
  ],
  "machines": [
    "tfmg:graphite_electrode",
    "tfmg:graphite_electrode",
    "tfmg:graphite_electrode"
  ],
  "min_size": 9,
  "processing_time": 200,
  "results": [
    {
      "chance": 0.9,
      "id": "createcasing:chorium_ingot"
    },
    {
      "amount": 288,
      "id": "tfmg:molten_slag"
    },
    {
      "amount": 1000,
      "id": "tfmg:furnace_gas"
    }
  ]
})

//rework chromatic recipe
event.remove({output: 'create:chromatic_compound'})
event.recipes.create.sequenced_assembly(
  // Outputs:
  [
    CreateItem.of('create:chromatic_compound'), // Main output, will appear in JEI as the result
  ],
  // Input:
  'createcasing:chorium_ingot', 
  // Sequence:
  [
    // The transitional item set by `transitionalItem('create:incomplete_large_cogwheel')` is the item used during the intermediate stages of the assembly
    // Like a normal recipe function, it's used as a sequence step in this array. Input and output have the transitional item
    event.recipes.create.deploying('create:chromatic_compound', ['create:chromatic_compound', 'minecraft:lapis_lazuli',]),
    event.recipes.create.pressing('create:chromatic_compound', 'create:chromatic_compound'),
    event.recipes.create.filling('create:chromatic_compound', ['create:chromatic_compound', Fluid.of('createpropulsion:coral', 250)]),
    event.recipes.create.pressing('create:chromatic_compound', 'create:chromatic_compound'),
    event.recipes.create.deploying('create:chromatic_compound', ['create:chromatic_compound', 'create:experience_nugget',])
  ]
)
.transitionalItem('create:chromatic_compound') // Set the transitional item
.loops(2) // Set the number of loops

//renewable endstone cuz why not
event.recipes.create.mixing('minecraft:end_stone', [Fluid.of('aeronautics:levitite_blend', 100), '4x minecraft:cobblestone'])






})











