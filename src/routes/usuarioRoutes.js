import { Router } from "express";
import UsuarioController from "../controllers/UsuarioController.js";

const router = Router();

router.post("/", UsuarioController.createNewUsuario);
router.get("/", UsuarioController.getAllUsuarios);
router.put("/:id", UsuarioController.updateUsuario);
router.delete("/:id", UsuarioController.deleteUsuario);

export default router;