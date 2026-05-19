ServerEvents.recipes(event => {


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
