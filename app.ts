import * as express from "express";

const app: express.Application = express();

app.get(
  "/ksh", 
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    
  }
);

export default app;