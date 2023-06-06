const { Bike } = require("../models");

const getBikes = async (req, res) => {
    const bikes = await Bike.find({});
    res.json(bikes);
};

const getBikeById = async (req, res) => {
    try {
        const { id } = req.params;
        const bike = await Bike.findById(id);
        if (!bike) throw Error("Bike Not Found");
        res.send(bike);
    } catch (e) {
        console.log(e);
        res.send("Oops. That didn't work");
    }
};

module.exports = {
    getBikes,
    getBikeById,
};
