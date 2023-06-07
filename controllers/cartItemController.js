const { CartItem } = require("../models");
const someCRUD = require("../controllers/someCRUD");

const getCartItems = async (req, res) => {
    const cartItems = await CartItem.find({}).populate("bicycleID").populate("accessoryID");
    res.json(cartItems);
};

const getCartItemsById = async (req, res) => {
    someCRUD.getObjectById(req, res, CartItem);
};

const getCartItemByBicycleID = async (req, res) => {
    try {
        const { bicycleID } = req.params;
        const cartItem = await CartItem.find({ bicycleID: bicycleID });
        if (!cartItem) throw Error("Cart Object ItemID Not Found");
        res.json(cartItem);
    } catch (e) {
        console.log(e);
        res.send("Oops. That didn't work. You made Mark sad. :'(");
    }
};

const getCartItemByAccessoryID = async (req, res) => {
    try {
        const { accessoryID } = req.params;
        const cartItem = await CartItem.find({ accessoryID: accessoryID });
        if (!cartItem) throw Error("Cart Object ItemID Not Found");
        res.json(cartItem);
    } catch (e) {
        console.log(e);
        res.send("Oops. That didn't work. You made Mark sad. :'(");
    }
};

const createCartItem = async (req, res) => {
    someCRUD.createObject(req, res, CartItem);
};

const updateCartItem = async (req, res) => {
    someCRUD.updateObjectByID(req, res, CartItem);
};

const deleteCartItem = async (req, res) => {
    someCRUD.deleteObjectByID(req, res, CartItem);
};

module.exports = {
    createCartItem,
    getCartItems,
    getCartItemsById,
    updateCartItem,
    deleteCartItem,
    getCartItemByBicycleID,
    getCartItemByAccessoryID,
};
