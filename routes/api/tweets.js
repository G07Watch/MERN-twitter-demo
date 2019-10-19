import express from 'express';

const router = express.Router();

router.get("/test", (req, res) => {
  res.json({ msg: "This is the tweet route" });
})

export default router;