import express from "express";
import router from "./router/routes.js";
import cors from "cors";
import DBconnection from "./Database/db.js";
const app = express();
app.use(cors());
app.use(express.json());
app.use('/',router)
const PORT = 8000;

DBconnection();


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get('/', (req, res) => {
    res.send('Hello World');
});
