const express = require('express');
const app = express();
//获得post请求body内容的中间件
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
//
app.use(express.static('./public'));
const morgan = require('morgan');
app.use(morgan('short'));
//CORS
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "PUT,POST,PATCH,GET,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Origin,Access-Control-Allow-Headers, X-Requested-With,Origin,Authorization,authorization, X-Requested-With,Content-Type,Accept");
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});
app.use('/regionManager',checkAuthentication, require('./routes/regionManagerAPI'));
app.use('/salesperson',checkAuthentication, require('./routes/salespersonAPI'));
app.use('/storeManager',checkAuthentication, require('./routes/storeManagerAPI'));
app.use('/account', require('./routes/accountAPI'));
app.use('/aggregation',checkAuthentication, require('./routes/aggregationAPI'));
app.use('/browser', require('./routes/browserAPI'));

function checkAuthentication(req,res,next){
  next();
    // let token = req.headers["authorization"];
    // if(token && token.startsWith("Bearer ")){
    //   console.log("token contained");
    //     token = token.slice(7, token.length)
    //     jwt.verify(token, 'secretKey', (err, decoded) => {
    //       if(err){
    //           res.status(401).json({
    //               result : false,
    //               message : "Token invalid"
    //           })
    //       } 
    //       else {
    //          next()
    //       }
    //     }) 
    // } else {
    //   console.log("token not contained "+token);
    //     res.status(403).json({
    //         result : false,
    //         message : "token missing"
    //     })
    // } 
}




app.use(logErrors)
app.use(clientErrorHandler)

function logErrors (err, req, res, next) {
  console.error(err.stack);
  next(err);
}

function clientErrorHandler (err, req, res, next) {
  if (req.xhr) {
    res.status(500).send('Something failed!');
  } else {
    next(err);
  }
}

const port = 5000;
app.listen(port, () => {
  console.log('Server started on port ' + port);
});