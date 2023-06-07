const { Accessory } = require("../models");
const someCRUD = require("../controllers/someCRUD");

const getAccessories = async (req, res) => {
    someCRUD.getLotsWithSortType(req, res, Accessory);
};

const getAccessoryById = async (req, res) => {
    someCRUD.getObjectById(req, res, Accessory);
};

//////////////////// ADMIN FUNCTIONS ////////////////////

const createAccessory = async (req, res) => {
    someCRUD.createObject(req, res, Accessory);
};

const updateAccessory = async (req, res) => {
    someCRUD.updateObjectByID(req, res, Accessory);
};

const deleteAccessory = async (req, res) => {
    someCRUD.deleteObjectByID(req, res, Accessory);
};

module.exports = {
    createAccessory,
    getAccessories,
    getAccessoryById,
    updateAccessory,
    deleteAccessory,
};
