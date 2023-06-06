const { Bike } = require("../models");

const getBikes = async (req, res) => {
    let bikes;

    if (req.query.type && req.query.sort) {
        if (req.query.sort === "asc") {
            bikes = await Bike.find({ type: req.query.type }).sort({
                price: 1,
            });
        } else if (req.query.sort === "desc") {
            bikes = await Bike.find({ type: req.query.type }).sort({
                price: -1,
            });
        }
    } else if (req.query.sort === "asc") {
        bikes = await Bike.find({}).sort({
            price: 1,
        });
    } else if (req.query.sort === "desc") {
        bikes = await Bike.find({}).sort({
            price: -1,
        });
    } else if (req.query.type) {
        bikes = await Bike.find({ type: req.query.type });
    } else {
        bikes = await Bike.find({});
    }
    res.json(bikes);
};

const getBikeById = async (req, res) => {
    try {
        const { id } = req.params;
        const bike = await Bike.findById(id);
        if (!bike) throw Error("Bike Not Found");
        res.json(bike);
    } catch (e) {
        console.log(e);
        res.send("Oops. That didn't work");
    }
};

module.exports = {
    getBikes,
    getBikeById,
};
