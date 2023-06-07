const getLotsWithSortType = async (req, res, collection) => {
    let functionObjects;
    if (req.query.type && req.query.sort) {
        if (req.query.sort === "asc") {
            functionObjects = await collection.find({ type: req.query.type }).sort({
                price: 1,
            });
        } else if (req.query.sort === "desc") {
            functionObjects = await collection.find({ type: req.query.type }).sort({
                price: -1,
            });
        }
    } else if (req.query.sort === "asc") {
        functionObjects = await collection.find({}).sort({
            price: 1,
        });
    } else if (req.query.sort === "desc") {
        functionObjects = await collection.find({}).sort({
            price: -1,
        });
    } else if (req.query.type) {
        functionObjects = await collection.find({ type: req.query.type });
    } else {
        functionObjects = await collection.find({});
    }
    console.log("getLotsWithSortType");
    res.json(functionObjects);
};

const getObjectById = async (req, res, collection) => {
    try {
        const { id } = req.params;
        const object = await collection.findById(id);
        if (!object) throw Error(`Object ID Not Found`);
        res.json(object);
    } catch (e) {
        console.log(e);
        res.send("Oops. That didn't work. You made Mark sad. :'(");
    }
};

const createObject = async (req, res, collection) => {
    try {
        const newObject = await new collection(req.body);
        await newObject.save();
        return res.json({ newObject });
    } catch (e) {
        console.log(e);
        res.send("Oops. That didn't work. You made Mark sad. :'(");
    }
};

const updateObjectByID = async (req, res, collection) => {
    try {
        const { id } = req.params;
        const updatedObject = await collection.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        if (updatedObject) {
            return res.json({ updatedObject });
        }
        return res.send("Oops.  No object Found. You made Mark sad. :'(");
    } catch (e) {
        console.log(e);
        res.send("Oops. That didn't work. You made Mark sad. :'(");
    }
};

const deleteObjectByID = async (req, res, collection) => {
    try {
        const { id } = req.params;
        const deletedObject = await collection.findByIdAndDelete(id);
        if (deletedObject) {
            return res.json({ deletedObject });
        }
        return res.send("Oops. No Object found. You made Mark sad. :'(");
    } catch (e) {
        console.log(e);
        res.send("Oops. That didn't work. You made Mark sad. :'(");
    }
};

module.exports = {
    createObject,
    getLotsWithSortType,
    getObjectById,
    updateObjectByID,
    deleteObjectByID,
};
