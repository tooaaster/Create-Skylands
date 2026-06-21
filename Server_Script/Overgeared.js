// To hot to handle
PlayerEvents.tick(event => {
  const player = event.player
  if (player.tickCount % 40 !== 0) return
  if (Ingredient.of('#overgeared:tongs').test(player.offHandItem)) return
  let burned = false
  for (let i = 0; i < player.inventory.items.size(); i++) {
    let stack = player.inventory.items.get(i)
    if (Ingredient.of('#overgeared:heated_metals').test(stack)) {
      player.drop(stack.copy(), false)
      stack.count = 0

      burned = true
    }
  }
  if (burned) {
    player.setRemainingFireTicks(100) 
  }
})


//Description

// event.remove({ output: '' })




ServerEvents.tags("item", event => {
    event.add("overgeared:heated_metals", 'kubejs:heated_steel_ingot')
    event.add("overgeared:heated_metals", 'kubejs:heated_iron_plate')
}) // serverEvents.tags end


//Remove
ServerEvents.recipes(event => {
event.remove({ id: 'overgeared:steel_helmet_to_diamond_helmet' })
event.remove({ id: 'overgeared:steel_chestplate_to_diamond_chestplate' })
event.remove({ id: 'overgeared:steel_leggings_to_diamond_leggings' })
event.remove({ id: 'overgeared:steel_boots_to_diamond_boots' })
event.remove({ output: 'overgeared:heated_steel_ingot' })
event.remove({ output: 'overgeared:steel_sword_blade' })
event.remove({ output: 'overgeared:steel_pickaxe_head' })
event.remove({ output: 'overgeared:steel_axe_head' })
event.remove({ output: 'overgeared:steel_shovel_head' })
event.remove({ output: 'overgeared:steel_hoe_head' })
event.remove({ output: 'minecraft:copper_ingot', type: 'minecraft:smelting' })
event.remove({ output: 'minecraft:copper_ingot', type: 'minecraft:blasting' })
event.remove({ output: 'minecraft:iron_ingot', type: 'minecraft:smelting' })
event.remove({ output: 'minecraft:iron_ingot', type: 'minecraft:blasting' })
event.remove({ output: 'overgeared:steel_tong' })
event.remove({ output: 'overgeared:steel_sword' })
event.remove({ output: 'overgeared:steel_pickaxe' })
event.remove({ output: 'overgeared:steel_axe' })
event.remove({ output: 'overgeared:steel_shovel' })
event.remove({ output: 'overgeared:steel_hoe' })
event.remove({ output: 'overgeared:netherite_alloy' })
event.remove({ output: 'overgeared:heated_netherite_alloy' })
event.remove({ output: 'overgeared:copper_plate' })
event.remove({ output: 'overgeared:iron_plate' })
event.remove({ output: 'overgeared:alloy_furnace' })
event.remove({ output: 'overgeared:nether_alloy_furnace' })
event.remove({ output: 'overgeared:steel_block' })
event.remove({ output: 'overgeared:steel_helmet' })
event.remove({ output: 'overgeared:steel_chestplate' })
event.remove({ output: 'overgeared:steel_leggings' })
event.remove({ output: 'overgeared:steel_boots' })
event.remove({ input: 'overgeared:iron_plate' })
event.remove({ input: 'overgeared:copper_plate' })
event.remove({ output: 'overgeared:steel_plate' })
event.remove({ output: 'create:copper_sheet' })
event.remove({ output: 'create:iron_sheet' })
event.remove({ output: 'create:brass_sheet' })
event.remove({ output: 'create:gold_sheet' })
event.remove({ output: 'create_sa:copper_helmet' })
event.remove({ output: 'create_sa:copper_chestplate' })
event.remove({ output: 'create_sa:copper_leggings' })
event.remove({ output: 'create_sa:copper_boots' })
event.remove({ output: 'create_sa:copper_pickaxe' })
event.remove({ output: 'create_sa:copper_axe' })
event.remove({ output: 'create_sa:copper_sword' })
event.remove({ output: 'create_sa:copper_shovel' })
event.remove({ output: 'create_sa:copper_hoe' })
event.remove({ output: 'tfmg:heavy_plate' })
event.remove({ output: 'immersiveengineering:stick_iron' })
event.remove({ output: 'musketmod:pistol' })
event.remove({ output: 'musketmod:musket' })



//bonking
event.recipes.create.sequenced_assembly('create:copper_sheet', 'minecraft:copper_ingot', 
    event.recipes.create.pressing('minecraft:copper_ingot', 'minecraft:copper_ingot')
    ).transitionalItem('minecraft:copper_ingot').loops(3)
event.recipes.create.pressing('create:copper_sheet', 'overgeared:heated_copper_ingot')

event.recipes.create.sequenced_assembly('create:iron_sheet', 'minecraft:iron_ingot', 
    event.recipes.create.pressing('minecraft:iron_ingot', 'minecraft:iron_ingot')
    ).transitionalItem('minecraft:iron_ingot').loops(3)
event.recipes.create.pressing('create:iron_sheet', 'overgeared:heated_iron_ingot')

event.recipes.create.sequenced_assembly('tfmg:heavy_plate', 'tfmg:steel_ingot', 
    event.recipes.create.pressing('tfmg:steel_ingot', 'tfmg:steel_ingot')
    ).transitionalItem('tfmg:steel_ingot').loops(9)

event.recipes.create.sequenced_assembly('tfmg:heavy_plate', 'kubejs:heated_steel_ingot', 
    event.recipes.create.pressing('kubejs:heated_steel_ingot', 'kubejs:heated_steel_ingot')
    ).transitionalItem('kubejs:heated_steel_ingot').loops(3)
event.remove({ output: 'tfmg:aluminum_sheet' })
event.recipes.create.pressing('tfmg:aluminum_sheet', 'kubejs:heated_aluminum_ingot')


//Cooling
event.custom({
 "type": "overgeared:cooling",
 "input": {
   "item": "kubejs:heated_steel_ingot"
 },
 "output": {
   "id": "tfmg:steel_ingot"
 }
})
event.custom({
 "type": "overgeared:cooling",
 "input": {
   "item": "kubejs:heated_cast_iron_ingot"
 },
 "output": {
   "id": "tfmg:cast_iron_ingot"
 }
})
event.custom({
 "type": "overgeared:cooling",
 "input": {
   "item": "kubejs:heated_aluminum_ingot"
 },
 "output": {
   "id": "tfmg:aluminum_ingot"
 }
})

  event.recipes.create.splashing('tfmg:steel_ingot', 'kubejs:heated_steel_ingot')
  event.recipes.create.splashing('minecraft:iron_ingot', 'overgeared:heated_iron_ingot')
  event.recipes.create.splashing('minecraft:copper_ingot', 'overgeared:heated_copper_ingot')
  event.recipes.create.splashing('tfmg:aluminum_ingot', 'kubejs:heated_aluminum_ingot')

//Custom Heating
event.smelting('kubejs:heated_steel_ingot', 'tfmg:steel_ingot')
event.blasting('kubejs:heated_steel_ingot', 'tfmg:steel_ingot')
event.smelting('kubejs:heated_cast_iron_ingot', 'tfmg:cast_iron_ingot')
event.blasting('kubejs:heated_cast_iron_ingot', 'tfmg:cast_iron_ingot')
event.smelting('kubejs:heated_aluminum_ingot', 'tfmg:aluminum_ingot')
event.blasting('kubejs:heated_aluminum_ingot', 'tfmg:aluminum_ingot')



//Custom Crafting 
event.custom({

 "type": "overgeared:crafting_shapeless",
 "category": "equipment",
 "ingredients": [
   {
     "item": "minecraft:leather"
   },
   {
     "tag": "c:tools/shear",
     "remainder": true,
     "durability_decrease": 10
   }
 ],
 "result": {
   "id": "kubejs:leather_straps",
   "count": 2
 }

}) // end custom


//                                               Steel To Diamond
event.custom({
  "type": "minecraft:smithing_transform",
  "addition": {
    "item": "minecraft:diamond"
  },
  "base": {
    "item": "alloyed:steel_axe"
  },
  "result": {
    "count": 1,
    "id": "minecraft:diamond_axe"
  },
  "template": {
    "item": "overgeared:diamond_upgrade_smithing_template"
  }
})
event.custom({
  "type": "minecraft:smithing_transform",
  "addition": {
    "item": "minecraft:diamond"
  },
  "base": {
    "item": "alloyed:steel_sword"
  },
  "result": {
    "count": 1,
    "id": "minecraft:diamond_sword"
  },
  "template": {
    "item": "overgeared:diamond_upgrade_smithing_template"
  }
})
event.custom({
  "type": "minecraft:smithing_transform",
  "addition": {
    "item": "minecraft:diamond"
  },
  "base": {
    "item": "alloyed:steel_hoe"
  },
  "result": {
    "count": 1,
    "id": "minecraft:diamond_hoe"
  },
  "template": {
    "item": "overgeared:diamond_upgrade_smithing_template"
  }
})
event.custom({
  "type": "minecraft:smithing_transform",
  "addition": {
    "item": "minecraft:diamond"
  },
  "base": {
    "item": "alloyed:steel_shovel"
  },
  "result": {
    "count": 1,
    "id": "minecraft:diamond_shovel"
  },
  "template": {
    "item": "overgeared:diamond_upgrade_smithing_template"
  }
})
event.custom({
  "type": "minecraft:smithing_transform",
  "addition": {
    "item": "minecraft:diamond"
  },
  "base": {
    "item": "alloyed:steel_helmet"
  },
  "result": {
    "count": 1,
    "id": "minecraft:diamond_helmet"
  },
  "template": {
    "item": "overgeared:diamond_upgrade_smithing_template"
  }
})
event.custom({
  "type": "minecraft:smithing_transform",
  "addition": {
    "item": "minecraft:diamond"
  },
  "base": {
    "item": "alloyed:steel_chestplate"
  },
  "result": {
    "count": 1,
    "id": "minecraft:diamond_chestplate"
  },
  "template": {
    "item": "overgeared:diamond_upgrade_smithing_template"
  }
})
event.custom({
  "type": "minecraft:smithing_transform",
  "addition": {
    "item": "minecraft:diamond"
  },
  "base": {
    "item": "alloyed:steel_leggings"
  },
  "result": {
    "count": 1,
    "id": "minecraft:diamond_leggings"
  },
  "template": {
    "item": "overgeared:diamond_upgrade_smithing_template"
  }
})
event.custom({
  "type": "minecraft:smithing_transform",
  "addition": {
    "item": "minecraft:diamond"
  },
  "base": {
    "item": "alloyed:steel_boots"
  },
  "result": {
    "count": 1,
    "id": "minecraft:diamond_boots"
  },
  "template": {
    "item": "overgeared:diamond_upgrade_smithing_template"
  }
})


//                                               End of Steel To Diamond

//                                                     Steel Tools
event.custom({
 "type": "overgeared:crafting_shapeless",
 "category": "equipment",
 "ingredients": [
   {
     "item": "overgeared:steel_axe_head"
   },
   {
     "item": "immersiveengineering:stick_treated",
     "remainder": true,
     "durability_decrease": 1
   }
 ],
 "result": {
   "id": "alloyed:steel_axe",
   "count": 1
 }
})
//                                               End of Steel Tools

//                                               heavy Armor
event.custom({
  "type": "minecraft:smithing_transform",
  "addition": {
    "item": "tfmg:heavy_plate"
  },
  "base": {
    "item": "alloyed:steel_helmet"
  },
  "result": {
    "count": 1,
    "id": "immersiveengineering:armor_steel_helmet"
  },
  "template": {
    "item": "tfmg:heavy_plate"
  }
})
event.custom({
  "type": "minecraft:smithing_transform",
  "addition": {
    "item": "tfmg:heavy_plate"
  },
  "base": {
    "item": "alloyed:steel_chestplate"
  },
  "result": {
    "count": 1,
    "id": "immersiveengineering:armor_steel_chestplate"
  },
  "template": {
    "item": "tfmg:heavy_plate"
  }
})
event.custom({
  "type": "minecraft:smithing_transform",
  "addition": {
    "item": "tfmg:heavy_plate"
  },
  "base": {
    "item": "alloyed:steel_leggings"
  },
  "result": {
    "count": 1,
    "id": "immersiveengineering:armor_steel_leggings"
  },
  "template": {
    "item": "tfmg:heavy_plate"
  }
})
event.custom({
  "type": "minecraft:smithing_transform",
  "addition": {
    "item": "tfmg:heavy_plate"
  },
  "base": {
    "item": "alloyed:steel_boots"
  },
  "result": {
    "count": 1,
    "id": "immersiveengineering:armor_steel_boots"
  },
  "template": {
    "item": "tfmg:heavy_plate"
  }
})
//                                               end of Heavy Armor

event.shaped(
Item.of('musketmod:pistol'),
[
' BF',
' NH',
'   '
],
{
B: 'immersiveengineering:stick_iron',
F: 'minecraft:flint_and_steel',
N: 'minecraft:iron_nugget',
H: 'createdieselgenerators:kelp_handle'
})

event.shaped(
Item.of('musketmod:musket'),
[
'BBF',
' NH',
'   '
],
{
B: 'immersiveengineering:stick_iron',
F: 'minecraft:flint_and_steel',
N: 'minecraft:iron_nugget',
H: 'createdieselgenerators:kelp_handle'
})






//Custom Grinding
event.custom({
 "type": "overgeared:grinding",
 "input": {
   "item": "minecraft:wheat"
 },
 "output": {
   "id": "create:wheat_flour"
 }
})




//Smithing
event.smithing(
  'minecraft:diamond_helmet',                     // arg 1: output
  'overgeared:diamond_upgrade_smithing_template', // arg 2: the smithing template
  'minecraft:diamond',                          // arg 3: the item to be upgraded
  'alloyed:steel_helmet'                            // arg 4: the upgrade item
)

event.smithing(
  'minecraft:diamond_chestplate',                     // arg 1: output
  'overgeared:diamond_upgrade_smithing_template', // arg 2: the smithing template
  'minecraft:diamond',                          // arg 3: the item to be upgraded
  'alloyed:steel_chestplate'                            // arg 4: the upgrade item
)

event.smithing(
  'minecraft:diamond_leggings',                     // arg 1: output
  'overgeared:diamond_upgrade_smithing_template', // arg 2: the smithing template
  'minecraft:diamond',                          // arg 3: the item to be upgraded
  'alloyed:steel_leggings'                            // arg 4: the upgrade item
)

event.smithing(
  'minecraft:diamond_boots',                     // arg 1: output
  'overgeared:diamond_upgrade_smithing_template', // arg 2: the smithing template
  'minecraft:diamond',                          // arg 3: the item to be upgraded
  'alloyed:steel_boots'                            // arg 4: the upgrade item
)




//Forging
// materials

//copper plate
event.custom({
  "type": "overgeared:forging",
  "category": "misc",
  "requires_blueprint": false,
  "tier": "stone",                     //anvil tier (stone, iron)
  "hammering": 9,
  "has_quality": false,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "need_quenching": false,
  "pattern": [
    "#  ",
    "   "
  ],
  "quality_difficulty": "master",
  "key": {
    "#": {
      "item": "minecraft:copper_ingot", //input
      "requires_heated": false,
"transfer_nbt": false
    }
  },
  "result": { //win
    "id": "create:copper_sheet"
  },
  "result_failed": { //fail
    "id": "minecraft:copper_ingot"
  },
  "show_notification": true
})

event.custom({
  "type": "overgeared:forging",
  "category": "misc",
  "requires_blueprint": false,
  "tier": "stone",                     //anvil tier (stone, iron)
  "hammering": 3,
  "has_quality": false,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "need_quenching": false,
  "pattern": [
    "#  ",
    "   "
  ],
  "quality_difficulty": "master",
  "key": {
    "#": {
      "item": "overgeared:heated_copper_ingot", //input
      "requires_heated": true,
"transfer_nbt": false
    }
  },
  "result": { //win
    "id": "create:copper_sheet"
  },
  "result_failed": { //fail
    "id": "minecraft:copper_ingot"
  },
  "show_notification": true
})


//Iron Rod
event.custom({
  "type": "overgeared:forging",
  "category": "misc",
  "requires_blueprint": false,
  "tier": "stone",                     //anvil tier (stone, iron)
  "hammering": 3,
  "has_quality": false,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "need_quenching": false,
  "pattern": [
    "#  ",
    "#  "
  ],
  "quality_difficulty": "master",
  "key": {
    "#": {
      "item": "overgeared:heated_iron_ingot", //input
      "requires_heated": true,
"transfer_nbt": false
    }
  },
  "result": { //win
    "id": "immersiveengineering:stick_iron"
  },
  "result_failed": { //fail
    "id": "minecraft:iron_ingot"
  },
  "show_notification": true
})

//Iron Sheet
event.custom({
  "type": "overgeared:forging",
  "category": "misc",
  "requires_blueprint": false,
  "tier": "stone",                     //anvil tier (stone, iron)
  "hammering": 2,
  "has_quality": false,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "need_quenching": false,
  "pattern": [
    "#  ",
    "   ",
    "   "
  ],
  "quality_difficulty": "master",
  "key": {
    "#": {
      "item": "overgeared:heated_iron_ingot", //input
      "requires_heated": true,
"transfer_nbt": false
    }
  },
  "result": { //win
    "id": "create:iron_sheet"
  },
  "result_failed": { //fail
    "id": "minecraft:iron_ingot"
  },
  "show_notification": true
})


//                ----Steal Tier----
event.custom({
  "type": "overgeared:forging",
  "category": "TOOL_HEADS",
  "blueprint": [
    "pickaxe"
  ],
  "requires_blueprint": false,
  "tier": "iron",                     //anvil tier (stone, iron)
  "hammering": 9,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": true,
  "has_polishing": true,
  "need_quenching": true,
  "pattern": [
    "###",
    "   "
  ],
  "quality_difficulty": "master",
  "key": {
    "#": {
      "item": "kubejs:heated_steel_ingot", //input
      "requires_heated": true,
"transfer_nbt": false
    }
  },
  "result": { //win
    "id": "overgeared:steel_pickaxe_head"
  },
  "result_failed": { //fail
    "id": "tfmg:steel_ingot"
  },
  "show_notification": true
})

event.custom({
  "type": "overgeared:forging",
  "category": "TOOL_HEADS",
  "blueprint": [
    "sword"
  ],
  "requires_blueprint": false,
  "tier": "iron",                     //anvil tier (stone, iron)
  "hammering": 9,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": true,
  "has_polishing": true,
  "need_quenching": true,
  "pattern": [
    " # ",
    " # "
  ],
  "quality_difficulty": "master",
  "key": {
    "#": {
      "item": "kubejs:heated_steel_ingot", //input
      "requires_heated": true,
"transfer_nbt": false
    }
  },
  "result": { //win
    "id": "overgeared:steel_sword_blade"
  },
  "result_failed": { //fail
    "id": "tfmg:steel_ingot"
  },
  "show_notification": true
})

event.custom({
  "type": "overgeared:forging",
  "category": "TOOL_HEADS",
  "blueprint": [
    "axe"
  ],
  "requires_blueprint": false,
  "tier": "iron",                     //anvil tier (stone, iron)
  "hammering": 9,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": true,
  "has_polishing": true,
  "need_quenching": true,
  "pattern": [
    "## ",
    "#  "
  ],
  "quality_difficulty": "master",
  "key": {
    "#": {
      "item": "kubejs:heated_steel_ingot", //input
      "requires_heated": true,
"transfer_nbt": false
    }
  },
  "result": { //win
    "id": "overgeared:steel_axe_head"
  },
  "result_failed": { //fail
    "id": "tfmg:steel_ingot"
  },
  "show_notification": true
})

event.custom({
  "type": "overgeared:forging",
  "category": "TOOL_HEADS",
  "blueprint": [
    "shovel"
  ],
  "requires_blueprint": false,
  "tier": "iron",                     //anvil tier (stone, iron)
  "hammering": 9,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": true,
  "has_polishing": true,
  "need_quenching": true,
  "pattern": [
    " # ",
    "   "
  ],
  "quality_difficulty": "master",
  "key": {
    "#": {
      "item": "kubejs:heated_steel_ingot", //input
      "requires_heated": true,
"transfer_nbt": false
    }
  },
  "result": { //win
    "id": "overgeared:steel_shovel_head"
  },
  "result_failed": { //fail
    "id": "tfmg:steel_ingot"
  },
  "show_notification": true
})

event.custom({
  "type": "overgeared:forging",
  "category": "TOOL_HEADS",
  "blueprint": [
    "hoe"
  ],
  "requires_blueprint": false,
  "tier": "iron",                     //anvil tier (stone, iron)
  "hammering": 9,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": true,
  "has_polishing": true,
  "need_quenching": true,
  "pattern": [
    "## ",
    "   "
  ],
  "quality_difficulty": "master",
  "key": {
    "#": {
      "item": "kubejs:heated_steel_ingot", //input
      "requires_heated": true,
"transfer_nbt": false
    }
  },
  "result": { //win
    "id": "overgeared:steel_hoe_head"
  },
  "result_failed": { //fail
    "id": "tfmg:steel_ingot"
  },
  "show_notification": true
})


event.custom({
  "type": "overgeared:forging",
  "category": "TOOL_HEADS",
  "requires_blueprint": false,
  "tier": "iron",                     //anvil tier (stone, iron)
  "hammering": 9,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": true,
  "has_polishing": true,
  "need_quenching": true,
  "pattern": [
    "  #",
    " ##",
    "#  "
  ],
  "quality_difficulty": "master",
  "key": {
    "#": {
      "item": "kubejs:heated_steel_ingot", //input
      "requires_heated": true,
"transfer_nbt": false
    }
  },
  "result": { //win
    "id": "overgeared:steel_tong"
  },
  "result_failed": { //fail
    "id": "tfmg:steel_ingot"
  },
  "show_notification": true
})

event.custom({
  "type": "overgeared:forging",
  "category": "misc",
  "requires_blueprint": false,
  "tier": "iron",                     //anvil tier (stone, iron)
  "hammering": 9,
  "has_quality": false,
  "minimum_quality": "poor",
  "needs_minigame": true,
  "has_polishing": false,
  "need_quenching": true,
  "pattern": [
    "  #",
    " # "
  ],
  "quality_difficulty": "master",
  "key": {
    "#": {
      "item": "kubejs:heated_steel_ingot", //input
      "requires_heated": true,
"transfer_nbt": false
    }
  },
  "result": { //win
    "id": "alloyed:steel_shears"
  },
  "result_failed": { //fail
    "id": "tfmg:steel_ingot"
  },
  "show_notification": true
})

//armor
event.custom({
  "type": "overgeared:forging",
  "category": "ARMORS",
  "requires_blueprint": false,
  "tier": "iron",                     //anvil tier (stone, iron)
  "hammering": 9,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": true,
  "has_polishing": false,
  "need_quenching": false,
  "pattern": [
    "###",
    "# #"
  ],
  "quality_difficulty": "master",
  "key": {
    "#": {
      "item": "tfmg:heavy_plate", //input
      "requires_heated": false,
"transfer_nbt": false
    }
  },
  "result": { //win
    "id": "alloyed:steel_helmet"
  },
  "result_failed": { //fail
    "id": "tfmg:steel_ingot"
  },
  "show_notification": true
})

event.custom({
  "type": "overgeared:forging",
  "category": "ARMORS",
  "requires_blueprint": false,
  "tier": "iron",                     //anvil tier (stone, iron)
  "hammering": 9,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": true,
  "has_polishing": false,
  "need_quenching": false,
  "pattern": [
    "# #",
    "###",
    "###"
  ],
  "quality_difficulty": "master",
  "key": {
    "#": {
      "item": "tfmg:heavy_plate", //input
      "requires_heated": false,
"transfer_nbt": false
    }
  },
  "result": { //win
    "id": "alloyed:steel_chestplate"
  },
  "result_failed": { //fail
    "id": "tfmg:steel_ingot"
  },
  "show_notification": true
})

event.custom({
  "type": "overgeared:forging",
  "category": "ARMORS",
  "requires_blueprint": false,
  "tier": "iron",                     //anvil tier (stone, iron)
  "hammering": 9,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": true,
  "has_polishing": false,
  "need_quenching": false,
  "pattern": [
    "###",
    "# #",
    "# #"
  ],
  "quality_difficulty": "master",
  "key": {
    "#": {
      "item": "tfmg:heavy_plate", //input
      "requires_heated": false,
"transfer_nbt": false
    }
  },
  "result": { //win
    "id": "alloyed:steel_leggings"
  },
  "result_failed": { //fail
    "id": "tfmg:steel_ingot"
  },
  "show_notification": true
})

event.custom({
  "type": "overgeared:forging",
  "category": "ARMORS",
  "requires_blueprint": false,
  "tier": "iron",                     //anvil tier (stone, iron)
  "hammering": 9,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": true,
  "has_polishing": false,
  "need_quenching": false,
  "pattern": [
    "# #",
    "# #"
  ],
  "quality_difficulty": "master",
  "key": {
    "#": {
      "item": "tfmg:heavy_plate", //input
      "requires_heated": false,
"transfer_nbt": false
    }
  },
  "result": { //win
    "id": "alloyed:steel_boots"
  },
  "result_failed": { //fail
    "id": "tfmg:steel_ingot"
  },
  "show_notification": true
})




//                ----Copper Tier----
event.custom({
  "type": "overgeared:forging",
  "category": "misc",
  "requires_blueprint": false,
  "tier": "stone",                     //anvil tier (stone, iron)
  "hammering": 3,
  "has_quality": false,
  "minimum_quality": "poor",
  "needs_minigame": false,
  "has_polishing": false,
  "need_quenching": false,
  "pattern": [
    "###"
  ],
  "quality_difficulty": "master",
  "key": {
    "#": {
      "item": "overgeared:heated_copper_ingot", //input
      "requires_heated": false,
"transfer_nbt": false
    }
  },
  "result": { //win
    "id": "create:copper_sheet"
  },
  "result_failed": { //fail
    "id": "tfmg:steel_ingot"
  },
  "show_notification": true
})




//armor
event.custom({
  "type": "overgeared:forging",
  "category": "ARMORS",
  "requires_blueprint": false,
  "tier": "stone",                     //anvil tier (stone, iron)
  "hammering": 3,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": true,
  "has_polishing": false,
  "need_quenching": false,
  "pattern": [
    "###",
    "# #"
  ],
  "quality_difficulty": "master",
  "key": {
    "#": {
      "item": "create:copper_sheet", //input
      "requires_heated": false,
"transfer_nbt": false
    }
  },
  "result": { //win
    "id": "overgeared:copper_helmet"
  },
  "result_failed": { //fail
    "id": "tfmg:steel_ingot"
  },
  "show_notification": true
})

event.custom({
  "type": "overgeared:forging",
  "category": "ARMORS",
  "requires_blueprint": false,
  "tier": "stone",                     //anvil tier (stone, iron)
  "hammering": 3,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": true,
  "has_polishing": false,
  "need_quenching": false,
  "pattern": [
    "# #",
    "###",
    "###"
  ],
  "quality_difficulty": "master",
  "key": {
    "#": {
      "item": "create:copper_sheet", //input
      "requires_heated": false,
"transfer_nbt": false
    }
  },
  "result": { //win
    "id": "overgeared:copper_chestplate"
  },
  "result_failed": { //fail
    "id": "tfmg:steel_ingot"
  },
  "show_notification": true
})

event.custom({
  "type": "overgeared:forging",
  "category": "ARMORS",
  "requires_blueprint": false,
  "tier": "stone",                     //anvil tier (stone, iron)
  "hammering": 3,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": true,
  "has_polishing": false,
  "need_quenching": false,
  "pattern": [
    "###",
    "# #",
    "# #"
  ],
  "quality_difficulty": "master",
  "key": {
    "#": {
      "item": "create:copper_sheet", //input
      "requires_heated": false,
"transfer_nbt": false
    }
  },
  "result": { //win
    "id": "overgeared:copper_leggings"
  },
  "result_failed": { //fail
    "id": "tfmg:steel_ingot"
  },
  "show_notification": true
})

event.custom({
  "type": "overgeared:forging",
  "category": "ARMORS",
  "requires_blueprint": false,
  "tier": "stone",                     //anvil tier (stone, iron)
  "hammering": 3,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": true,
  "has_polishing": false,
  "need_quenching": false,
  "pattern": [
    "# #",
    "# #"
  ],
  "quality_difficulty": "master",
  "key": {
    "#": {
      "item": "create:copper_sheet", //input
      "requires_heated": false,
"transfer_nbt": false
    }
  },
  "result": { //win
    "id": "overgeared:copper_boots"
  },
  "result_failed": { //fail
    "id": "tfmg:steel_ingot"
  },
  "show_notification": true
})

// Iron

event.custom({
  "type": "overgeared:forging",
  "category": "ARMORS",
  "requires_blueprint": false,
  "tier": "iron",                     //anvil tier (stone, iron)
  "hammering": 3,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": true,
  "has_polishing": false,
  "need_quenching": false,
  "pattern": [
    "###",
    "# #"
  ],
  "quality_difficulty": "master",
  "key": {
    "#": {
      "item": "create:iron_sheet", //input
      "requires_heated": false,
"transfer_nbt": false
    }
  },
  "result": { //win
    "id": "minecraft:iron_helmet"
  },
  "result_failed": { //fail
    "id": "tfmg:steel_ingot"
  },
  "show_notification": true
})

event.custom({
  "type": "overgeared:forging",
  "category": "ARMORS",
  "requires_blueprint": false,
  "tier": "iron",                     //anvil tier (stone, iron)
  "hammering": 3,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": true,
  "has_polishing": false,
  "need_quenching": false,
  "pattern": [
    "# #",
    "###",
    "###"
  ],
  "quality_difficulty": "master",
  "key": {
    "#": {
      "item": "create:iron_sheet", //input
      "requires_heated": false,
"transfer_nbt": false
    }
  },
  "result": { //win
    "id": "minecraft:iron_chestplate"
  },
  "result_failed": { //fail
    "id": "tfmg:steel_ingot"
  },
  "show_notification": true
})

event.custom({
  "type": "overgeared:forging",
  "category": "ARMORS",
  "requires_blueprint": false,
  "tier": "iron",                     //anvil tier (stone, iron)
  "hammering": 3,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": true,
  "has_polishing": false,
  "need_quenching": false,
  "pattern": [
    "###",
    "# #",
    "# #"
  ],
  "quality_difficulty": "master",
  "key": {
    "#": {
      "item": "create:iron_sheet", //input
      "requires_heated": false,
"transfer_nbt": false
    }
  },
  "result": { //win
    "id": "minecraft:iron_leggings"
  },
  "result_failed": { //fail
    "id": "tfmg:steel_ingot"
  },
  "show_notification": true
})

event.custom({
  "type": "overgeared:forging",
  "category": "ARMORS",
  "requires_blueprint": false,
  "tier": "iron",                     //anvil tier (stone, iron)
  "hammering": 3,
  "has_quality": true,
  "minimum_quality": "poor",
  "needs_minigame": true,
  "has_polishing": false,
  "need_quenching": false,
  "pattern": [
    "# #",
    "# #"
  ],
  "quality_difficulty": "master",
  "key": {
    "#": {
      "item": "create:iron_sheet", //input
      "requires_heated": false,
"transfer_nbt": false
    }
  },
  "result": { //win
    "id": "minecraft:iron_boots"
  },
  "result_failed": { //fail
    "id": "tfmg:steel_ingot"
  },
  "show_notification": true
})















}) //serverEvents end
