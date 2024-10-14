// priority: 0

ServerEvents.recipes(event=> {
    /*
    event.replaceInput(
        {type: 'gtceu:primitive_blast_furnace'
        },
        'minecraft:coal',
        'gtceu:coke_gem'
    )
    */
    event.remove({input:'minecraft:coal',type:'gtceu:primitive_blast_furnace'})
    event.remove({input:'minecraft:charcoal',type:'gtceu:primitive_blast_furnace'})
    event.remove({input:'gtceu:coal_dust',type:'gtceu:primitive_blast_furnace'})
    event.remove({input:'gtceu:charcoal_dust',type:'gtceu:primitive_blast_furnace'})
    event.remove({input:'minecraft:coal_block',type:'gtceu:primitive_blast_furnace'})
    event.remove({input:'gtceu:coke_block',type:'gtceu:primitive_blast_furnace'})
    event.remove({input:'gtceu:charcoal_block',type:'gtceu:primitive_blast_furnace'})
    event.recipes.minestuck.unavailable_grist_cost('#forge:plates')
    event.recipes.minestuck.unavailable_grist_cost('#forge:rods')
    event.recipes.minestuck.unavailable_grist_cost('#forge:plates')
    event.recipes.minestuck.unavailable_grist_cost('gtceu:cobalt_ingot')
    event.recipes.minestuck.unavailable_grist_cost('gtceu:raw_cobalt')
    event.recipes.minestuck.unavailable_grist_cost('#forge:ores')
    event.recipes.minestuck.unavailable_grist_cost('gtceu:red_alloy_ingot')
})
