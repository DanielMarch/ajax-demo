'use strict';

exports.addition = (req, res)=>{
  res.render('calc/addition', {title: 'Sum'});
};

exports.sum = (req, res)=>{
  var answer = (req.body.num1 * 1) + (req.body.num2 * 1); // function that computes sum
  res.send({sum:answer}); //sends object back to browser that
};

exports.power = (req, res)=>{
  res.render('calc/power', {title: 'Power'});
};

exports.pow = (req, res)=>{
  var answer = Math.pow((req.body.num1 *1), (req.body.num2 * 1));
  res.send({pow:answer});
};

exports.sumlist = (req, res)=>{
  res.render('calc/sumlist', {title: 'Sum List'});
};

exports.sl = (req, res)=>{
  var array = req.body.list;
  var result = array.map(function(x){return parseInt(x);});
  var answer = result.reduce(function(a,b){return a + b;}, 0);
  res.send({suml:answer});
};
