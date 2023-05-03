const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());

app.use(cors());

require("./startup/routes")(app);
require("./startup/dbMongo")();

// express.static.mime.types["js"] = "application/javascript";

// Serve the build folder
// app.use(express.static("dist"));
const PORT = process.env.PORT || 9000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
