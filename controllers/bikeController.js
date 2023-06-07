const { Bike } = require("../models");
const someCRUD = require("../controllers/someCRUD");

const getBikes = async (req, res) => {
    someCRUD.getLotsWithSortType(req, res, Bike);
};

const getBikeById = async (req, res) => {
    someCRUD.getObjectById(req, res, Bike);
};

//////////////////// ADMIN FUNCTIONS ////////////////////

const createBike = async (req, res) => {
    someCRUD.createObject(req, res, Bike);
};

const updateBike = async (req, res) => {
    someCRUD.updateObjectByID(req, res, Bike);
};

const deleteBike = async (req, res) => {
    someCRUD.deleteObjectByID(req, res, Bike);
};

module.exports = {
    createBike,
    getBikes,
    getBikeById,
    updateBike,
    deleteBike,
};
