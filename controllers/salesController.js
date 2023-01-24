const Sales = require("../models/salesModel");

const sales_controller = async (req, res, next) => {
    const salesData = await Sales.find().limit(10);
    res.render("index", { sales: salesData });
};

module.exports = { sales_controller };
