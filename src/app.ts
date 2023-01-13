import console from 'console';
import * as express from 'express';
import ErrorHandler from './middlewares/ErrorHandler';

class App {
  public app: express.Express;
    
  constructor() {
    this.app = express.default();

    this.config();

    this.app.get('/doodly', (req, res) => res.json(
      { message: 'We\'re On Fire' },
    ));
  }
  
  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header(
        'Access-Control-Allow-Methods',
        'GET,POST,DELETE,OPTIONS,PUT,PATCH',
      );
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(express.json());
    this.app.use(accessControl);
    this.app.use(ErrorHandler.handle);
  }
  
  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export default App;