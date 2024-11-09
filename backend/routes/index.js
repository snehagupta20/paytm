import express from 'express';
import userRouter from './user.js';
// const userRouter = require('./user.js');

const router = express.Router();

router.use('/user', userRouter);

// module.exports = router;

const mainRouter = router;
export default mainRouter;