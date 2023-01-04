import {Request, Response, Router} from 'express';
const router = Router();

router.post('/test', async (req: Request, res: Response) => {
  res.send(`Hello world from: ${req.url}`);
});

export default router;
