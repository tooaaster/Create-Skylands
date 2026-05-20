ServerEvents.recipes(event => {

// event.remove({})


// remove recipes 
event.remove({output: 'tfmg:molten_steel'})
event.remove({input: 'tfmg:molten_steel'})
event.remove({mod: 'createmetalwork'})
event.remove({type: 'createbigcannons:melting'})
event.remove({output: 'createbigcannons:steel_ingot'})
event.remove({output: 'createbigcannons:steel_ingot_block'})
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
  Item.of('alloyed:steel_sword'), // arg 1: output
  [
    ' A ',
    ' A ', // arg 2: the shape (array of strings)
    ' B '
  ],
  {
    A: 'tfmg:steel_ingot',
    B: 'immersiveengineering:stick_treated'
  }
)

event.shaped(
  Item.of('alloyed:steel_pickaxe'), // arg 1: output
  [
    'AAA',
    ' B ', // arg 2: the shape (array of strings)
    ' B '
  ],
  {
    A: 'tfmg:steel_ingot',
    B: 'immersiveengineering:stick_treated'
  }
)

event.shaped(
  Item.of('alloyed:steel_axe'), // arg 1: output
  [
    'AA ',
    'AB ', // arg 2: the shape (array of strings)
    ' B '
  ],
  {
    A: 'tfmg:steel_ingot',
    B: 'immersiveengineering:stick_treated'
  }
)
event.shaped(
  Item.of('alloyed:steel_shovel'), // arg 1: output
  [
    ' A ',
    ' B ', // arg 2: the shape (array of strings)
    ' B '
  ],
  {
    A: 'tfmg:steel_ingot',
    B: 'immersiveengineering:stick_treated'
  }
)
event.shaped(
  Item.of('alloyed:steel_hoe'), // arg 1: output
  [
    'AA ',
    ' B ', // arg 2: the shape (array of strings)
    ' B '
  ],
  {
    A: 'tfmg:steel_ingot',
    B: 'immersiveengineering:stick_treated'
  }
)
event.shaped(
  Item.of('alloyed:steel_shears'), // arg 1: output
  [
    ' A ',
    'A  ', // arg 2: the shape (array of strings)
    '   '
  ],
  {
    A: 'tfmg:steel_ingot'
  }
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



// replace items




// Make Molten Steel
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
  "processing_time": 200,
  "results": [
    {
      "id": "tfmg:steel_ingot"
    }
  ]
})

})
