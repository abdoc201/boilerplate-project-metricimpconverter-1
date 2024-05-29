'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  
  let convertHandler = new ConvertHandler();

  app.get('/api/convert',(req,res)=>{
    const initNum = convertHandler.getNum(req.query.input)
    const initUnit = convertHandler.getUnit(req.query.input)
    const returnNum = convertHandler.convert(initNum,initUnit)
    const returnUnit = convertHandler.getReturnUnit(initUnit)
    const initUnitString = convertHandler.spellOutUnit(initUnit)
    const returnUnitString = convertHandler.spellOutUnit(returnUnit)
    const string = convertHandler.getString(initNum, initUnitString, returnNum, returnUnitString)
    res.status(200).send({
      initNum: initNum,
      initUnit: initUnit,
      returnNum: returnNum,
      returnUnit: returnUnit,
      string: string
    })
  })

};