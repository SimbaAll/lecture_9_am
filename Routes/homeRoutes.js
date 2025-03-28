import express from "express";
import homeController from "../Controllers/homeControllers.js";

const router = express.Router()

router.get("/getData",homeController.getData)
router.post("/insertData",homeController.insertData)
router.put("/updateData/:id",homeController.updateData)
router.delete("/deleteData/:id",homeController.deleteData)

export default router