import express from 'express';

const router = express.Router();

router.get("/test", (req, res) => {
  res.json({ msg: "This is the user route" });
})


export default router;
