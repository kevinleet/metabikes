const { CartItem } = require("../models");

const getCartItems = async (req, res) => {
    const cartItems = await CartItem.find({}).populate("itemID");
    res.json(cartItems);
};

const getCartItemsById = async (req, res) => {
    try {
        const { id } = req.params;
        const cartItem = await CartItem.findById(id);
        if (!cartItem) throw Error("Cart Oject ID Not Found");
        res.json(cartItem);
    } catch (e) {
        console.log(e);
        res.send("Oops. That didn't work. You made Mark sad. :'(");
    }
};

const createCartItem = async (req, res) => {
    try {
        const newCartItem = await new CartItem(req.body);
        await newCartItem.save();
        return res.json({ newCartItem });
    } catch (e) {
        console.log(e);
        res.send("Oops. That didn't work. You made Mark sad. :'(");
    }
};

const updateCartItem = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedCartItem = await CartItem.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        if (updatedCartItem) {
            return res.json({ updatedCartItem });
        }
        return res.send("Oops.  No cart Found. You made Mark sad. :'(");
    } catch (e) {
        console.log(e);
        res.send("Oops. That didn't work. You made Mark sad. :'(");
    }
};

const deleteCartItem = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedCartItem = await CartItem.findByIdAndDelete(id);
        if (deletedCartItem) {
            return res.json({ deletedCartItem });
        }
        return res.send("Oops. No cart found. You made Mark sad. :'(");
    } catch (e) {
        console.log(e);
        res.send("Oops. That didn't work. You made Mark sad. :'(");
    }
};

module.exports = {
    createCartItem,
    getCartItems,
    getCartItemsById,
    updateCartItem,
    deleteCartItem,
};
