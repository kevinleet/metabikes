const { model } = require('mongoose')
const db = require ('../db')
const {Bike} = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))


const main = async () => {
    const bicycle1 = await new Bike ({
        type: "Mountain",
        brand: "Stumpjumper",
        model: "EVO Pro",
        price:  6374.99,
        color: "Gloss Sand",
        wight:  10,
        description: "The Stumpjumper EVO Pro is a testament to full-gas trail performance. With an all-new design, from its S-Sizing geometry with an adjustable head tube angle, to its 150mm of shred-ready travel, this thing is a full-on ripper. And to top it off, it’s build has been hand-picked to keep overall weight low and stoke high. Fox Factory suspension? Check. Carbon 30mm-wide wheels? Check. XO1 Eagle drivetrain? Oh, yeah. With the Stumpjumper EVO Pro, you get all the goodies at a more palatable price.",
        immage: "https://assets.specialized.com/i/specialized/96322-10_SJ-EVO-PRO-SND-BLK_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto",
    })
    bicycle1.save()

    const bicycle2 = await new Bike ({
        type: "Road",
        brand: "Tarmac",
        model: "S-Works Tarmac SL7 - Shimano Dura-Ace Di2",
        price:  14250.00,
        color: "Red Tint/Metallic White Silver/ Satin Black",
        wight: 5,
        description: "Why should you be forced to choose between aerodynamics and weight, between ride quality and speed? It’s simple, you shouldn’t. Enter the new Tarmac—climb on the lightest bike the UCI allows, then descend on the fastest. We’ve utilized our most advanced technologies, from our FreeFoil Shape Library to an all-new Rider-First Engineered™ frame, to deliver a race bike that is truly without compromise. The days of making sacrifices between “aero” and “lightweight” bikes are over—the all-new Tarmac is the fastest race bike, ever. One bike to rule them all.To complement the world’s fastest frame, only the best components will do—which is why you’ll find the likes of Shimano’s Dura-Ace group with power meter and Roval’s new CLX Rapide wheels with their exceptional stability and aerodynamic prowess. The S-Works Tarmac is a top-level race machine, right out of the box.",
        image: "https://assets.specialized.com/i/specialized/90622-01_TARMAC-SL7-SW-DI2-REDTNT-METWHTSIL-BLK_FDSQ?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto"
    })
    bicycle2.save()

    const bicycle3 = await new Bike ({
        type: "Hybrid",
        brand: "Diverge",
        model: "Diverge Pro Carbon",
        price: 8200.00,
        colot: "Gloss Sand",
        Description: "Whether your goal is to escape on gravel back roads, far from cars and crowds, or drop the hammer at the front of your favorite gravel race, no bike does it better than the new Diverge. It’s quite simply the fastest, most capable - and just maybe the most fun - bike we’ve ever made, delivering a ride that’s quick and lively under power, but stable and confidence inspiring when the terrain gets rough. From Future Shock 2.0 and all-new gravel geometry, to internal storage and category leading tire clearance, the new Diverge represents everything we’ve learned over more than 40 years of riding road, gravel and dirt. The Diverge writes an entirely new chapter in the gravel bike category, so you can dream up entirely new rides. It’s the ultimate getaway vehicle",
        image: "https://assets.specialized.com/i/specialized/95422-10_DIVERGE-PRO-CARBON-SND-DOP_FDSQ?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto"
    })

await Bike.insertMany()
console.log("bikes created")


}


const run = async () => {
    await main()
    db.close()
}

run()