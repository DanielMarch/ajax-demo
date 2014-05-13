'use strict';

exports.dice = (req, res)=>{
  res.render('dice/dice', {title: 'Dice'});
};

exports.roll = (req, res)=>{
  var answer = Math.floor((Math.random() * 6) + 1);
  res.send({dr:answer});
};

exports.pair = (req, res)=>{
  res.render('dice/pairs', {title: 'Pairs'});
};

exports.pairroll = (req, res)=>{
  var answer1 = Math.floor((Math.random() * 6) + 1);
  var answer2 = Math.floor((Math.random() * 6) + 1);
  res.send({dr1:answer1, dr2:answer2});
};
