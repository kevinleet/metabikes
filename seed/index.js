const { model } = require('mongoose')
const db = require ('../db')
const {Bike, Accessory } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))


const main = async () => {
    const bicycle1 = await new Bike ({
        type: "Mountain",
        brand: "Stumpjumper",
        model: "EVO Pro",
        price:  6374.99,
        color: "Gloss Sand",
        weight:  30,
        description: "The Stumpjumper EVO Pro is a testament to full-gas trail performance. With an all-new design, from its S-Sizing geometry with an adjustable head tube angle, to its 150mm of shred-ready travel, this thing is a full-on ripper. And to top it off, it’s build has been hand-picked to keep overall weight low and stoke high. Fox Factory suspension? Check. Carbon 30mm-wide wheels? Check. XO1 Eagle drivetrain? Oh, yeah. With the Stumpjumper EVO Pro, you get all the goodies at a more palatable price.",
        img: "https://assets.specialized.com/i/specialized/96322-10_SJ-EVO-PRO-SND-BLK_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto"
    })
    await bicycle1.save()

    const bicycle2 = await new Bike ({
        type: "Road",
        brand: "Tarmac",
        model: "S-Works Tarmac SL7 - Shimano Dura-Ace Di2",
        price:  14250.00,
        color: "Red Tint/Metallic White Silver/ Satin Black",
        weight: 15,
        description: "Why should you be forced to choose between aerodynamics and weight, between ride quality and speed? It’s simple, you shouldn’t. Enter the new Tarmac—climb on the lightest bike the UCI allows, then descend on the fastest. We’ve utilized our most advanced technologies, from our FreeFoil Shape Library to an all-new Rider-First Engineered™ frame, to deliver a race bike that is truly without compromise. The days of making sacrifices between “aero” and “lightweight” bikes are over—the all-new Tarmac is the fastest race bike, ever. One bike to rule them all.To complement the world’s fastest frame, only the best components will do—which is why you’ll find the likes of Shimano’s Dura-Ace group with power meter and Roval’s new CLX Rapide wheels with their exceptional stability and aerodynamic prowess. The S-Works Tarmac is a top-level race machine, right out of the box.",
        img: "https://assets.specialized.com/i/specialized/90622-01_TARMAC-SL7-SW-DI2-REDTNT-METWHTSIL-BLK_FDSQ?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto"
    })
    await bicycle2.save()

    const bicycle3 = await new Bike ({
        type: "Hybrid",
        brand: "Diverge",
        model: "Diverge Pro Carbon",
        price: 8200.00,
        color: "Gloss Sand",
        weight: 20,
        description: "Whether your goal is to escape on gravel back roads, far from cars and crowds, or drop the hammer at the front of your favorite gravel race, no bike does it better than the new Diverge. It’s quite simply the fastest, most capable - and just maybe the most fun - bike we’ve ever made, delivering a ride that’s quick and lively under power, but stable and confidence inspiring when the terrain gets rough. From Future Shock 2.0 and all-new gravel geometry, to internal storage and category leading tire clearance, the new Diverge represents everything we’ve learned over more than 40 years of riding road, gravel and dirt. The Diverge writes an entirely new chapter in the gravel bike category, so you can dream up entirely new rides. It’s the ultimate getaway vehicle",
        img: "https://assets.specialized.com/i/specialized/95422-10_DIVERGE-PRO-CARBON-SND-DOP_FDSQ?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto"
    })
    await bicycle3.save()

    const bicycle4 = await new Bike ({
        type: "Road",
        brand: "Crux",
        model: "Crux Pro",
        price: 8200.00,
        color: "Gloss Metallic Deep Lake / Green Pearl",
        weight: 17,
        description: "The Crux is the lightest gravel bike in the world, with the exceptional capability of massive tire clearance and performance gravel geometry. It’s not just the ultimate expression of gravel performance, it’s your one-way ticket to gravel enlightenment.This Crux Pro comes spec'd with a accurate and quick-shifting SRAM Force 1 eTap AXS hydraulic disc groupset, lightweight and durable Roval Terra CL Disc wheels, and 2Bliss Ready, 700x38mm Pathfinder Pro tires that hookup over nasty terrain.",
        img: "https://assets.specialized.com/i/specialized/91423-10_CRUX-PRO-DPLAKEMET-GRNPRL_HERO?bg=rgb(241,241,241)&w=2500&h=1406&fmt=auto"
    })
    await bicycle4.save()

    const bicycle5 = await new Bike ({
        type: "Mountain",
        brand: "Epic",
        model: "S-Works Epic",
        price: 12000,
        color: "Gloss Purple Tint Fades oaver Carbon / Chrome",
        weight: 21,
        description: "Hey you, yeah, you...the one with the scale out seeing which of the six identical tires on the shelf is the lightest. Sure, some might call you a bit obsessive, but no worries, here, the S-Works Epic is speaking exactly the same language. Countless design hours, endless test laps, terabytes of telemetry data—all of it to make sure not a single ounce of speed was left on the table. Mixing hardtail efficiency and full-suspension capability to impressively quick results, the S-Works Epic has always been defined by obsessive commitment to speed. Well, that and over 100 World Cup wins and podiums too",
        img: "https://assets.specialized.com/i/specialized/90323-00_EPIC-SW-PRPTNT-CHRM_FDSQ?bg=rgb(241,241,241)&w=2500&h=1406&fmt=auto"
    })
    await bicycle5.save()

    const bicycle6 = await new Bike ({
        type: "Mountain",
        brand: "Turbo Levo",
        model: "Turbo Levo SL Comp Carbon",
        price: 8000,
        color: "Gloss Blaze",
        weight: 42,
        description: "The Levo SL delivers unmatched ride quality and capability, amplified. For the trail rider who craves serpentine singletrack, sending it skyward, and lives for advancing your skills and fitness. Meet your new bike, the Levo SL. You’ll be blown away by it’s unmatched combination of flawless handling, capability, and “2 X You” amplification that gives you the Power to Ride More Trails. Compare it to anything out there, with a motor or without, and we know you’ll agree — Levo SL is THE ULTIMATE TRAIL BIKE.",
        img: "https://assets.specialized.com/i/specialized/96822-52_LEVO-SL-COMP-CARBON-BLZ-BLK-SILDST_HERO?bg=rgb(241,241,241)&w=2500&h=1406&fmt=auto"
    })
    await bicycle6.save()

    const bicycle7 = await new Bike ({
        type: "Road",
        brand: "S-Works Bikes",
        model: "S-Works Diverge STR",
        price: 13000,
        color: "Satin Forest Green/Dark Moss Green/Black Pearl",
        weight: 20,
        description: "With Future Shock suspension front and rear, the new Diverge STR delivers compliance without compromise. By suspending the rider—instead of the bike—Future Shock technology increases control and efficiency while decreasing fatigue, so you’ll be riding farther and faster over chunkier terrain than you believed possible. And the Diverge STR does this without the weight, sluggish pedal response, and inefficiency of other suspension systems. The S-Works Diverge STR starts with our FACT 11r carbon frameset with front and rear Future Shock suspension. It’s built with SRAM’s Red eTap AXS Eagle groupset for fast, efficient shifting with a 10-50 cassette to ensure you have the gearing to tackle any ride and a Quarq power meter helps you to dose your effort to perfection. The bike rolls on the new, lighter Roval Terra CLX II wheels with 42mm Tracer Pro tires. Terra carbon bars, an S-Works carbon seatpost, and S-Works Power with Mirror saddle complete the package making the Diverge STR the most capable Diverge ever.",
        img: "https://assets.specialized.com/i/specialized/96223-00_DIVERGE-STR-SW-FSTGRN-DKMOS-BLKPRL_HERO?bg=rgb(241,241,241)&w=2500&h=1406&fmt=auto"
    })
    await bicycle7.save()

    const bicycle8 = await new Bike ({
        type: "Hybrid",
        brand: "Crux",
        model: "S-Works Crux",
        price: 12250,
        color: "Gloss Berch Red Gold Perarl Speckle",
        weight: 16,
        description: "The Crux is the lightest gravel bike in the world, with the exceptional capability of massive tire clearance and performance gravel geometry. It’s not just the ultimate expression of gravel performance, it’s your one-way ticket to gravel enlightenment.This S-Works Crux comes spec'd with SRAM's pinnacle RED eTap AXS hydraulic disc groupset, lightweight and durable Roval Terra CLX Disc wheels, and 2Bliss Ready, 700x38mm Pathfinder Pro tires that hookup over nasty terrain.",
        img: "https://assets.specialized.com/i/specialized/91423-00_CRUX-SW-BRCH-RED-GLDPRL_HERO?bg=rgb(241,241,241)&w=2500&h=1406&fmt=auto"
    })
    await bicycle8.save()

    const bicycle9 = await new Bike ({
        type: "Hybrid",
        brand: "Turbo Creo SL EVO",
        model: "Turbo Cero",
        price: 14000,
        color: "Brushed/Smoked Liquid Metal/Black Liquid Metal",
        weight: 26,
        description: "What is it about gravel that's so appealing? Is it the break from hectic city streets and cars? Is it the audible crunch of rocks beneath your tires? Or maybe it's just the feeling of adventure? Whatever it is, the Turbo Creo SL EVO is here to assist you further into the forest, down the gravel road, or on your next adventure. It features the same motor, battery, and frame as its road-oriented cousin, but takes advantage of tire clearance and adds in some adventure-ready components to take you wherever your heart desires. It's you, only faster.",
        img: "https://assets.specialized.com/i/specialized/98122-010_BIK_CREO-SL-SW-CARBON-EVO-BRSH-SMKLQDMET-BLKLQDMET_HERO?bg=rgb(241,241,241)&w=2500&h=1406&fmt=auto"
    })
    await bicycle9.save()
    
    const bicycle10 = await new Bike ({
        type: "Road",
        brand: "Aethos",
        model: "Aethos - Campagnolo LTD",
        price: 15500,
        color: "Satin Berch / Black Pearl",
        weight: 15,
        description: "The lightest production road bike in the world, a bike built for the pure love of riding, the latest S-Works Aethos LTD is breaking the rules all over again. A celebration of Specialized heritage, only 300 of these individually numbered bikes will ever be made available worldwide. Each is unique with hand-dipped paint, and each is built with the all-new Campagnolo Super Record EPS group and Hyperon Wheels. The S-Works Aethos LTD with Campagnolo Super Record EPS raises the bar on what high-end road bike can be.Creating the lightest production road bike frame in the world - 585 grams - took every ounce of our 49 years of experience, so it’s a fitting canvas to celebrate the founding of Specialized. In 1973 it was a love of riding that inspired Mike Sinyard to sell his VW bus, pack up his bike, and go ride in Italy. It was on that trip that Mike fell in love with the quality, the beauty, and the ride of Italian components. He made it his mission to bring them to riders in the US, and Specialized Bicycle Components was born. Combining the Aethos with the pinnacle of Italian components pays homage to Mike’s love of riding and Italy’s riding culture.",
        img: "https://assets.specialized.com/i/specialized/95422-10_DIVERGE-PRO-CARBON-SND-DOP_FDSQ?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto"
    })
    await bicycle10.save()


    const accessories = [
        {
            type: "Hybrid",
            brand: "DRCKHROS",
            item: "Handlebar Mirror",
            price: 15.99,
            img: "https://m.media-amazon.com/images/I/51SeeZL+ecL._AC_SL1000_.jpg",
            description:
                "Bicycle Rear View Mirror: Acrylic CONVEX mirror,diameter 3.23 inch. Inlaid In Black Plastic Shell. Can Adjust Diferent Mirror Angle.",
        },
        {
            type: "Mountain",
            brand: "SKS GERMANY",
            item: "Fender Set",
            price: 26.99,
            img: "https://m.media-amazon.com/images/I/71BawVOWYuS._AC_SL1500_.jpg",
            description:
                "20 or 24 inche wheel compatible. Durable plastic construction / Metal and plastic harware. Rear mounts onto the seatpost of bike. 205 grams. Rear fender can pivot to adjust coverage.",
        },
        {
            type: "Road",
            brand: "BV",
            item: "Bicycle Seat Pack bag",
            price: 18.99,
            img: "https://m.media-amazon.com/images/I/61zWI0mXarL._AC_SL1000_.jpg",
            description:
                "Big zippered opening mouth design for riders' convenience. Taillight hanger with 3M ScotchliteTM reflective trim. Capacious for your tire tools & personal belonging - Mini/ Co2 pump/ Levers/ Tube/ Key & Phone. Multiple sizes option from EXTRA Small to Large for all kinds of cycling activities",
        },
    ];

await Accessory.insertMany(accessories)
console.log("bikes created")


}


const run = async () => {
    await main()
    db.close()
}

run()