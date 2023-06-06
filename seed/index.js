const db = require ('../db')
const {Bike} = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))


const main = async () => {
    const bicycle1 = await new Bike ({
        type: "Mountain",
        brand: "Stumpjumper EVO Pro",
        price:  6,374.99,
        quantity: 5,
        frame_size: 165 - 180
    })
    bicycle1.save()

    const bicycle2 = await new Bike ({
        type: "Road",
        brand: "S-Works Tarmac SL7 - Shimano Dura-Ace Di2",
        price:  14,250.00,
        quantity: 3,
        frame_size: 180 -200
    })
    bicycle2.save()

    const bicycle3 = await new Bike ({
        type: "Hybrid",
        brand: "Allroad Ti – Force AXS XPLR",
        price: 5,799.00,
        quantity: 7,
        frame_size: 165 - 180
    })
    bicycle3.save()

    const bicycle4 = await new Bike ({
        type: "ebike",
        brand: "Grizzly - 52V Dual Motor Ebike",
        price: 3,299.00,
        quantity: 5,
        frame_size: 165 - 180
    })
    bicycle4.save()

    const bicycle5= await new Bike ({
        type: "Trail",
        brand: "Stumpjumper Alloyo",
        price: 2,099.99,
        quantity: 10,
        frame_size: 165 - 180
    })
    bicycle5.save()

await Bike.insertMany(main)
console.log("bikes created")


}


const run = async () => {
    await main()
    db.clsoe()
}

run()