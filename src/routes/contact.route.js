import { Router } from "express";
import { methods as contactController } from "../controllers/contact.controller";

const router = Router()


router.get("/", contactController.getContacts)
router.get("/:id", contactController.getContact)
router.post("/", contactController.addContact)
router.delete("/:id", contactController.deleteContact)
router.put("/:id", contactController.updateContact)

export default router