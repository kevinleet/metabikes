const { Accessory } = require("../models");

const getAccessories = async (req, res) => {
    if (req.query.type) {
        const type = req.query.type;
        const accessories = await Accessory.find({ type: type });
        res.json(accessories);
    } else {
        const accessories = await Accessory.find({});
        res.json(accessories);
    }
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

module.exports = {
    getAccessories,
    getAccessoryById,
};
