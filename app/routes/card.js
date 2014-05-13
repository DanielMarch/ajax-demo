'use strict';

exports.card = (req, res)=>{
  res.render('card/card', {title: 'Draw Card'});
};

exports.draw = (req, res)=>{
  var cards = ['As', 'Ad', 'Ac', 'Ah', '2s', '2d', '2c', '2h', '3s', '3d', '3c', '3h', '4s', '4d', '4c', '4h', '5s', '5d', '5c', '5h', '6s', '6d', '6c', '6h', '7s', '7d', '7c', '7h', '8s', '8d', '8c', '8h', '9s', '9d', '9c', '9h', 'Ts', 'Td', 'Tc', 'Th', 'Js', 'Jd', 'Jc', 'Jh', 'Qs', 'Qd', 'Qc', 'Qh', 'Ks', 'Kd', 'Kc', 'Kh'];
  var answer = cards[Math.floor(Math.random() * cards.length)];
  res.send({dr:answer});
};

exports.poker = (req, res)=>{
  res.render('card/poker', {title: 'Poker'});
};

exports.deal = (req, res)=>{
  var cards = ['As', 'Ad', 'Ac', 'Ah', '2s', '2d', '2c', '2h', '3s', '3d', '3c', '3h', '4s', '4d', '4c', '4h', '5s', '5d', '5c', '5h', '6s', '6d', '6c', '6h', '7s', '7d', '7c', '7h', '8s', '8d', '8c', '8h', '9s', '9d', '9c', '9h', 'Ts', 'Td', 'Tc', 'Th', 'Js', 'Jd', 'Jc', 'Jh', 'Qs', 'Qd', 'Qc', 'Qh', 'Ks', 'Kd', 'Kc', 'Kh'];
  var answer1 = cards[Math.floor(Math.random() * cards.length)];
  var answer2 = cards[Math.floor(Math.random() * cards.length)];
  var answer3 = cards[Math.floor(Math.random() * cards.length)];
  var answer4 = cards[Math.floor(Math.random() * cards.length)];
  var answer5 = cards[Math.floor(Math.random() * cards.length)];
  res.send({de1:answer1, de2:answer2, de3:answer3, de4:answer4, de5:answer5});
};
