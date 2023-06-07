const { Accessory } = require("../models");

const getAccessories = async (req, res) => {
    let accessories;
    if (req.query.type && req.query.sort) {
        if (req.query.sort === "asc") {
            accessories = await Accessory.find({ type: req.query.type }).sort({
                price: 1,
            });
        } else if (req.query.sort === "desc") {
            accessories = await Accessory.find({ type: req.query.type }).sort({
                price: -1,
            });
        }
    } else if (req.query.sort === "asc") {
        accessories = await Accessory.find({}).sort({
            price: 1,
        });
    } else if (req.query.sort === "desc") {
        accessories = await Accessory.find({}).sort({
            price: -1,
        });
    } else if (req.query.type) {
        accessories = await Accessory.find({ type: req.query.type });
    } else {
        accessories = await Accessory.find({});
    }
    res.json(accessories);
};

const getAccessoryById = async (req, res) => {
    try {
        const { id } = req.params;
        const accessory = await Accessory.findById(id);
        if (!accessory) throw Error("Accessory Not Found");
        res.json(accessory);
    } catch (e) {
        console.log(e);
        res.send("Oops. That didn't work");
    }
};

//////////////////// ADMIN FUNCTIONS ////////////////////

const createAccessory = async (req, res) => {
    try {
        const newAccessory = await new Accessory(req.body);
        await newAccessory.save();
        return res.json({ newAccessory });
    } catch (e) {
        console.log(e);
        res.send("Oops. That didn't work. You made Mark sad. :'(");
    }
};

const updateAccessory = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedAccessory = await Accessory.findByIdAndUpdate(
            id,
            req.body,
            {
                new: true,
            }
        );
        if (updatedAccessory) {
            return res.json({ updatedAccessory });
        }
        return res.send("Oops.  No bike Found. You made Mark sad. :'(");
    } catch (e) {
        console.log(e);
        res.send("Oops. That didn't work. You made Mark sad. :'(");
    }
};

const deleteAccessory = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedAccessory = await Accessory.findByIdAndDelete(id);
        if (deletedAccessory) {
            return res.json({ deletedAccessory });
        }
        return res.send("Oops. No Bike found. You made Mark sad. :'(");
    } catch (e) {
        console.log(e);
        res.send("Oops. That didn't work. You made Mark sad. :'(");
    }
};

module.exports = {
    createAccessory,
    getAccessories,
    getAccessoryById,
    updateAccessory,
    deleteAccessory,
};
