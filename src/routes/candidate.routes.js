import { Router } from "express";
import { verifyJWT } from "../middleware/auth.middleware.js";
import {
  createNewCandidate,
  updatedCandidate,
  deleteCandidate,
} from "../controllers/candidate.controller.js";

const router = Router();

router.route("/").post(verifyJWT, createNewCandidate);
router.route("/:candidateID").put(verifyJWT, updatedCandidate);
router.route("/:candidateID").delete(verifyJWT, deleteCandidate);

export default router;
