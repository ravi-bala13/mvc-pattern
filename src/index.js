const express = require("express");

const connect = require("./configs/db.js");

const app = express();

// ***************************************

const userController = require("./controllers/user.controller");

const studentController = require("./controllers/student.controller");

const evalutationController = require("./controllers/evaluation.controller");

const topicController = require("./controllers/topic.controller");


//*********** CRUD ********************** */


app.use(express.json());

app.use("/users", userController);

app.use("/students", studentController);

app.use("/evaluations", evalutationController);

app.use("/topics", topicController);

// ***************************************

app.listen(2349, async () => {
    await connect();
    console.log("Hai my dear friend i am listening on 2349");
});