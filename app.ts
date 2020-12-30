import * as express from "express";

const bodyParser = require("body-parser");
const port = process.env.PORT || 5000;

const app: express.Application = express();

app.get(
  "/ksh", 
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    
  }
);

app.listen(5000, () => {
  console.log(`Server is listening on port ${port}`);
});

export default app;