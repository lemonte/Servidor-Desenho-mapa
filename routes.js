const express = require("express");
const updateData = require("./controllers/updateController");
const deleteData = require("./controllers/deleteController");
const createData = require("./controllers/createController");
const getData = require("./controllers/requestController");
const routes = express.Router();

routes.get('/', async function (req, res) {
    const response = await getData();
    return res.send(JSON.stringify(response));
}) 

routes.post('/', async function (req, res) {
    await createData(req.body.type, req.body.properties, req.body.geometry)
    return res.sendStatus(200);
})


routes.delete('/', async function (req, res) {
    await deleteData(req.query.id)
    return res.sendStatus(200);
});

routes.put('/', async function (req, res) {
    await updateData(req.body.id, req.body.type, req.body.properties, req.body.geometry)
    return res.sendStatus(200);
});


module.exports = routes;