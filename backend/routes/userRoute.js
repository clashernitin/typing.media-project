import express from "express"
import {create, sendmail } from "../controller/userController.js"

const route = express.Router();

route.post("/create", create);
route.post("/send-email", sendmail);

export default route;