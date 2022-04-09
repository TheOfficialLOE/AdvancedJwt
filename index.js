import express from "express";
import { enc } from "./jwe.js";
import hasToken from "./middleware.js"
const app = express();

app.use(express.json());

app.post("/", async (req, res) => {
    const jwe = await enc(JSON.stringify({ email: req.body.email }));
    return res.json(jwe);
});

app.get("/checkLogin", hasToken, async (req, res) => {
    return res.json(`Welcome dear ${req.email}`);
});

app.listen(3000, () => console.log("Listening on port 3000..."));