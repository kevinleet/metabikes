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
        if (!bike) throw Error("Bike Object ID Not Found");
        res.json(bike);
    } catch (e) {
        console.log(e);
        res.send("Oops. That didn't work. You made Mark sad. :'(");
    }
};

const createBike = async (req, res) => {
    try {
        const newBike = await new Bike(req.body);
        await newBike.save();
        return res.json({ newBike });
    } catch (e) {
        console.log(e);
        res.send("Oops. That didn't work. You made Mark sad. :'(");
    }
};

const updateBike = async (req, res) => {
    try {
        const { id } = req.params;
        const updateBike = await Bike.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        if (updateBike) {
            return res.json({ updateBike });
        }
        return res.send("Oops.  No bike Found. You made Mark sad. :'(");
    } catch (e) {
        console.log(e);
        res.send("Oops. That didn't work. You made Mark sad. :'(");
    }
};

const deleteBike = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteBike = await Bike.findByIdAndDelete(id);
        if (deleteBike) {
            return res.json({ deleteBike });
        }
        return res.send("Oops. No Bike found. You made Mark sad. :'(");
    } catch (e) {
        console.log(e);
        res.send("Oops. That didn't work. You made Mark sad. :'(");
    }
};

module.exports = {
    createBike,
    getBikes,
    getBikeById,
    updateBike,
    deleteBike,
};
