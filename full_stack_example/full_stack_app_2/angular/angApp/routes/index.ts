import * as express from 'express';
import * as util from 'util';

var router = express.Router();

router.get('/', (req, res, next) => {

  res.render('index',
    { title: 'Express i Angular 2'
    }
  );
});

router.get('/menuitems', (req, res, next) => {
  res.json({ menuItems : [
    { ButtonName : 'About us'},
    { ButtonName : 'Contacts'},
    { ButtonName : 'Login'}
  ] });
});

router.post('/login', (req, res, next) => {
  console.log(`${util.inspect(req.body, false, null)}`);
  res.sendStatus(200);
});

export { router } ;
