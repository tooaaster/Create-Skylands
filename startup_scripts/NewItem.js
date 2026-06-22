StartupEvents.registry('item', event => {
  // The texture for this item has to be placed in kubejs/assets/kubejs/textures/item/test_item.png
  // If you want a custom item model, you can create one in Blockbench and put it in kubejs/assets/kubejs/models/item/test_item.json
  event.create('leather_straps').displayName('Leather Straps')
  event.create('heated_steel_ingot').displayName('Heated steel Ingot')
  event.create('heated_bronze_ingot').displayName('Heated Bronze Ingot')
  event.create('heated_brass_ingot').displayName('Heated Brass Ingot')
  event.create('heated_zinc_ingot').displayName('Heated Zinc Ingot')
  event.create('heated_aluminum_ingot').displayName('Heated Aluminum Ingot')
  event.create('heated_cast_iron_ingot').displayName('Heated Cast Iron Ingot')
  event.create('wooden_mechanism').displayName('Wooden Mechanism')
  event.create('incomplete_wooden_mechanism').displayName('Incomplete Wooden Mechanism')
  event.create('calculation_mechanism').displayName('Calculation Mechanism')
  event.create('incomplete_calculation_mechanism').displayName('Calculation Mechanism Frame')
  event.create('mech_cast').displayName('Mechanism Frame Cast')

})


