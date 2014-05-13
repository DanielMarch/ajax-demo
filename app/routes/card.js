'use strict';

exports.card = (req, res)=>{
  res.render('card/card', {title: 'Draw Card'});
};

exports.draw = (req, res)=>{
  var answer = Math.floor((Math.random() * 52) + 1);
  res.send({dr:answer});
};

exports.poker = (req, res)=>{
  res.render('card/poker', {title: 'Poker'});
};

exports.deal = (req, res)=>{
  var answer1 = Math.floor((Math.random() * 52) + 1);
  var answer2 = Math.floor((Math.random() * 52) + 1);
  var answer3 = Math.floor((Math.random() * 52) + 1);
  var answer4 = Math.floor((Math.random() * 52) + 1);
  var answer5 = Math.floor((Math.random() * 52) + 1);
  res.send({de1:answer1, de2:answer2, de3:answer3, de4:answer4, de5:answer5});
};
