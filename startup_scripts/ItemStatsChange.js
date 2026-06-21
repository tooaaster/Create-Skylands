ItemEvents.modification(event => {

//adding durablilty to chipped:saw
    event.modify('chipped:saw', item => {item.maxDamage = 256; })
    event.modify('chipped:saw', item => {item.maxStackSize = 1; })



  event.modify('immersiveengineering:armor_steel_chestplate', item => {
    item.rarity = 'EPIC'
    item.maxDamage = 500
let modifiedAttributeModifier = Item.of(item.item().id).attributeModifiers
            .withModifierAdded(
                "generic.movement_speed", // Attribute ID: Affects the player's walking/running speed.
                { 
                    amount: -0.005, // Value: Adds 0.05 to the speed multiplier (equivalent to a 5% speed boost).
                    id: "a09d6c7e-b3f5-4e8c-8438-2c26f07d3b14", 
                    operation: "add_value" // Operation: Adds the 0.05 value directly to the movement speed attribute.
                }, 
                "chest" // Equipment Slot: Applies when worn in the 'head' slot.
            )
        item.setAttributeModifiersWithTooltip(modifiedAttributeModifier.modifiers())

  })


  event.modify('immersiveengineering:armor_steel_helmet', item => {
    item.rarity = 'EPIC'
    item.maxDamage = 340
let modifiedAttributeModifier = Item.of(item.item().id).attributeModifiers
            .withModifierAdded(
                "generic.movement_speed", // Attribute ID: Affects the player's walking/running speed.
                { 
                    amount: -0.005, // Value: Adds 0.05 to the speed multiplier (equivalent to a 5% speed boost).
                    id: "a09d6c7e-b3f5-4e8c-8438-2c26f07d3b14", 
                    operation: "add_value" // Operation: Adds the 0.05 value directly to the movement speed attribute.
                }, 
                "head" // Equipment Slot: Applies when worn in the 'head' slot.
            )
        item.setAttributeModifiersWithTooltip(modifiedAttributeModifier.modifiers())
  })


  event.modify('immersiveengineering:armor_steel_leggings', item => {
    item.rarity = 'EPIC'
    item.maxDamage = 470
let modifiedAttributeModifier = Item.of(item.item().id).attributeModifiers
            .withModifierAdded(
                "generic.movement_speed", // Attribute ID: Affects the player's walking/running speed.
                { 
                    amount: -0.005, // Value: Adds 0.05 to the speed multiplier (equivalent to a 5% speed boost).
                    id: "a09d6c7e-b3f5-4e8c-8438-2c26f07d3b14", 
                    operation: "add_value" // Operation: Adds the 0.05 value directly to the movement speed attribute.
                }, 
                "legs" // Equipment Slot: Applies when worn in the 'head' slot.
            )
        item.setAttributeModifiersWithTooltip(modifiedAttributeModifier.modifiers())
  })


  event.modify('immersiveengineering:armor_steel_boots', item => {
    item.rarity = 'EPIC'
    item.maxDamage = 400
let modifiedAttributeModifier = Item.of(item.item().id).attributeModifiers
            .withModifierAdded(
                "generic.movement_speed", // Attribute ID: Affects the player's walking/running speed.
                { 
                    amount: -0.005, // Value: Adds 0.05 to the speed multiplier (equivalent to a 5% speed boost).
                    id: "a09d6c7e-b3f5-4e8c-8438-2c26f07d3b14", 
                    operation: "add_value" // Operation: Adds the 0.05 value directly to the movement speed attribute.
                }, 
                "feet" // Equipment Slot: Applies when worn in the 'head' slot.
            )
        item.setAttributeModifiersWithTooltip(modifiedAttributeModifier.modifiers())
  })
})


ItemEvents.modification(event => {

    // --------------------------------------------------------------------------------------
    // --- Example 1: Leather Helmet (Movement Speed Increase) ---
    // Attribute Used: generic.movement_speed
    // --------------------------------------------------------------------------------------

    // event.modify('minecraft:leather_helmet', item => { ... }) targets the item with the ID 'minecraft:leather_helmet'.
    // The 'item' parameter is the ItemBuilder object, which allows us to set new properties.
    event.modify('minecraft:leather_helmet', item => {
        
        // Step 1: Set custom durability
        // item.setMaxDamage(75) overrides the default maximum durability of the Leather Helmet (55) 
        // and sets it to 75 hits before the item breaks.
        item.setMaxDamage(75)

        // Step 2: Define and combine attribute modifiers.
        // Item.of(item.item().id) gets a reference to the item's underlying Minecraft Item object.
        // .attributeModifiers retrieves the existing attribute modifiers associated with that item.
        // We capture this object in 'modifiedAttributeModifier' to chain our custom modifiers.
        let modifiedAttributeModifier = Item.of(item.item().id).attributeModifiers
            
            // The .withModifierAdded() function adds a new attribute modifier or re-adds a required default one.
            // The first argument is the attribute ID (e.g., "generic.armor").
            // The second argument is the modifier object ({...}).
            // The third argument is the equipment slot ("head").
            
            // Re-add the default generic.armor modifier
            .withModifierAdded(
                "generic.armor", // Attribute ID: Base Minecraft attribute for damage reduction.
                { 
                    amount: 1, // Value: The Leather Helmet's base armor amount.
                    id: "minecraft:armor.helmet", // Unique ID: Vanilla identifier for the armor modifier on the head slot.
                    operation: "add_value" // Operation: Adds the 'amount' value directly to the base attribute.
                }, 
                "head" // Equipment Slot: This modifier only applies when worn in the 'head' slot.
            )
            
            // Add custom generic.movement_speed modifier
            .withModifierAdded(
                "generic.movement_speed", // Attribute ID: Affects the player's walking/running speed.
                { 
                    amount: 0.05, // Value: Adds 0.05 to the speed multiplier (equivalent to a 5% speed boost).
                    id: "a09d6c7e-b3f5-4e8c-8438-2c26f07d3b14", // Unique ID: A custom UUID string to identify this specific modifier.
                    operation: "add_value" // Operation: Adds the 0.05 value directly to the movement speed attribute.
                }, 
                "head" // Equipment Slot: Applies when worn in the 'head' slot.
            )

        // Step 3: Apply the new attributes.
        // item.setAttributeModifiersWithTooltip() sets the final list of attributes on the item.
        // modifiedAttributeModifier.modifiers() retrieves the combined array of default and custom modifiers we built in Step 2.
        item.setAttributeModifiersWithTooltip(modifiedAttributeModifier.modifiers())
    })

    // --------------------------------------------------------------------------------------
    // --- Example 2: Iron Helmet (Knockback Resistance) ---
    // Attribute Used: generic.knockback_resistance
    // --------------------------------------------------------------------------------------

    // Target: 'minecraft:iron_helmet'
    event.modify('minecraft:iron_helmet', item => {
        
        // Step 1: Set custom durability (Default is 165)
        item.setMaxDamage(200)

        // Step 2: Define and combine attribute modifiers.
        let modifiedAttributeModifier = Item.of(item.item().id).attributeModifiers
            
            // Re-add the default generic.armor modifier (Amount: 2)
            .withModifierAdded(
                "generic.armor", // Attribute ID: Base damage resistance.
                { 
                    amount: 2, // Value: Iron Helmet's base armor amount.
                    id: "minecraft:armor.helmet", // Unique ID: Vanilla identifier.
                    operation: "add_value" // Operation: Adds the value directly.
                }, 
                "head" // Equipment Slot: Head.
            )
            
            // Add custom generic.knockback_resistance modifier
            .withModifierAdded(
                "generic.knockback_resistance", // Attribute ID: Reduces the distance the player is knocked back upon being hit.
                { 
                    amount: 0.05, // Value: Adds 0.05 resistance (5%).
                    id: "9447d91d-5c6e-47c3-87a4-e918b958863f", // Unique ID: Custom UUID for this modifier.
                    operation: "add_value" // Operation: Adds the resistance value.
                }, 
                "head" // Equipment Slot: Head.
            )

        // Step 3: Apply the new attributes.
        item.setAttributeModifiersWithTooltip(modifiedAttributeModifier.modifiers())
    })

    // --------------------------------------------------------------------------------------
    // --- Example 3: Diamond Helmet (Luck Increase) ---
    // Attribute Used: generic.luck
    // --------------------------------------------------------------------------------------

    // Target: 'minecraft:diamond_helmet'
    event.modify('minecraft:diamond_helmet', item => {
        
        // Step 1: Set custom durability (Default is 363)
        item.setMaxDamage(400)

        // Step 2: Define and combine attribute modifiers.
        let modifiedAttributeModifier = Item.of(item.item().id).attributeModifiers
            
            // Re-add default armor attributes
            .withModifierAdded(
                "generic.armor", // Attribute ID: Base damage resistance.
                { amount: 3, id: "minecraft:armor.helmet", operation: "add_value" }, // Diamond Helmet base armor is 3.
                "head"
            )
            .withModifierAdded(
                "generic.armor_toughness", // Attribute ID: Reduces damage from high-damage attacks (specific to Diamond/Netherite).
                { amount: 2, id: "minecraft:armor_toughness.helmet", operation: "add_value" }, // Diamond Toughness base is 2.
                "head"
            )
            
            // Add custom generic.luck modifier
            .withModifierAdded(
                "generic.luck", // Attribute ID: Affects various random outcomes like loot quality and fishing success.
                { 
                    amount: 1.0, // Value: Adds 1 full point of Luck.
                    id: "60ab5570-5b58-46c5-8f64-d621b16c52a0", // Unique ID: Custom UUID.
                    operation: "add_value" // Operation: Adds the value directly.
                }, 
                "head" // Equipment Slot: Head.
            )

        // Step 3: Apply the new attributes.
        item.setAttributeModifiersWithTooltip(modifiedAttributeModifier.modifiers())
    })
    
    // --------------------------------------------------------------------------------------
    // --- Example 4: Netherite Helmet (Maximum Health Increase) ---
    // Attribute Used: generic.max_health
    // --------------------------------------------------------------------------------------

    // Target: 'minecraft:netherite_helmet'
    event.modify('minecraft:netherite_helmet', item => {
        
        // Step 1: Set custom durability (Default is 407)
        item.setMaxDamage(650)

        // Step 2: Define and combine attribute modifiers.
        let modifiedAttributeModifier = Item.of(item.item().id).attributeModifiers
            
            // Re-add default armor attributes
            .withModifierAdded(
                "generic.armor", // Attribute ID: Base damage resistance.
                { amount: 3, id: "minecraft:armor.helmet", operation: "add_value" }, // Netherite Helmet base armor is 3.
                "head"
            )
            .withModifierAdded(
                "generic.armor_toughness", // Attribute ID: Toughness attribute.
                { amount: 3, id: "minecraft:armor_toughness.helmet", operation: "add_value" }, // Netherite Toughness base is 3.
                "head"
            )
            
            // Add custom generic.max_health modifier
            .withModifierAdded(
                "generic.max_health", // Attribute ID: Increases the maximum number of health points (hearts) a player has.
                { 
                    amount: 2.0, // Value: Adds 2.0 health points (equivalent to 1 full heart).
                    id: "01249b69-8051-46ac-b0b3-f09d8465057f", // Unique ID: Custom UUID.
                    operation: "add_value" // Operation: Adds the value directly.
                }, 
                "head" // Equipment Slot: Head.
            )

        // Step 3: Apply the new attributes.
        item.setAttributeModifiersWithTooltip(modifiedAttributeModifier.modifiers())
    })
})






