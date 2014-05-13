'use strict';

var traceur = require('traceur');
var dbg = traceur.require(__dirname + '/route-debugger.js');
var initialized = false;

module.exports = (req, res, next)=>{
  if(!initialized){
    initialized = true;
    load(req.app, next);
  }else{
    next();
  }
};

function load(app, fn){
  var home = traceur.require(__dirname + '/../routes/home.js');
  var calc = traceur.require(__dirname + '/../routes/calc.js');
  var dice = traceur.require(__dirname + '/../routes/dice.js');
  var card = traceur.require(__dirname + '/../routes/card.js');


  app.get('/', dbg, home.index);
  app.get('/help', dbg, home.help);
  app.get('/sum', dbg, calc.addition);
  app.post('/sum', dbg, calc.sum);
  app.get('/pow', dbg, calc.power);
  app.post('/pow', dbg, calc.pow);
  app.get('/sumlist', dbg, calc.sumlist);
  app.post('/sumlist', dbg, calc.sl);
  app.get('/dice', dbg, dice.dice);
  app.post('/dice', dbg, dice.roll);
  app.get('/pair', dbg, dice.pair);
  app.post('/pair', dbg, dice.pairroll);
  app.get('/card', dbg, card.card);
  app.post('/card', dbg, card.draw);
  app.get('/poker', dbg, card.poker);
  app.post('/poker', dbg, card.deal);
  console.log('Routes Loaded');
  fn();
}
