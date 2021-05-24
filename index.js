const express = require("express");
const routes = require("./routes");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors({
    origin: true
  }));
app.use(routes);
app.listen(process.env.PORT || 3333);
console.info("########################################################################");
console.info("##              POWER        SERVER STARTED              POWER        ##");
console.info("########################################################################");
console.info('URL: ', 'localhost' + ":" + 3333);
console.info("------------------------------------------------------------------------");
