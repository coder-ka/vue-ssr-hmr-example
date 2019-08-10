const app = require("./app");

app.use("/static", express.static(`${__dirname}/dist`));

app.listen(3000);
