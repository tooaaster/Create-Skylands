
ServerEvents.tags("item", event => {
  event.add("immersiveengineering:tools/hammers", 'create:wrench')
});
ServerEvents.recipes(event => {
//remove big cannons bs
event.remove({ output: 'createbigcannons:cast_iron_ingot' })
event.remove({ output: 'createbigcannons:steel_ingot' })
event.remove({ output: 'createbigcannons:cast_iron_nugget' })
event.remove({ output: 'createbigcannons:steel_nugget' })
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



//duplicate metal block transmutation
event.stonecutting('immersiveengineering:storage_steel', '#c:storage_blocks/steel')
event.stonecutting('tfmg:steel_block', '#c:storage_blocks/steel')
event.stonecutting('createbigcannons:steel_block', '#c:storage_blocks/steel')
event.stonecutting('tfmg:cast_iron_block', '#c:storage_blocks/cast_iron')
event.stonecutting('createbigcannons:cast_iron_block', '#c:storage_blocks/cast_iron')


event.recipes.create.splashing([CreateItem.of('minecraft:flint', 0.25), CreateItem.of('create:copper_nugget', 0.12), CreateItem.of('minecraft:iron_nugget', 0.12)], 'minecraft:gravel')


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

//steel mechanism
event.recipes.create.sequenced_assembly(
      'tfmg:steel_mechanism', 'create:precision_mechanism',
      [
        event.recipes.create.deploying('tfmg:unfinished_steel_mechanism', ['tfmg:unfinished_steel_mechanism', 'tfmg:steel_cogwheel',]),
        event.recipes.create.deploying('tfmg:unfinished_steel_mechanism', ['tfmg:unfinished_steel_mechanism', 'tfmg:large_steel_cogwheel',]),
        event.recipes.create.deploying('tfmg:unfinished_steel_mechanism', ['tfmg:unfinished_steel_mechanism', 'immersiveengineering:component_steel',])
      ])
    .transitionalItem('tfmg:unfinished_steel_mechanism')
    .loops(3)

})



//test shapeless recipe
/* event.shapeless(
  Item.of('minecraft:dandelion', 3), // arg 1: output
  [
    'minecraft:bone_meal',
    'minecraft:yellow_dye', 	       // arg 2: the array of inputs
    '3x minecraft:ender_pearl'
  ]
)
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
) */

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

