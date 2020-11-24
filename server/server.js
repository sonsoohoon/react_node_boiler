const express = require('express');
const app = express();
const port =process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded( {extended : false } ));

let indexRouter = require('./controller/index');
const academyRouter = require('./controller/academy');
app.use(indexRouter);
app.use(academyRouter);

app.listen(port, ()=>{
  console.log(`express is running on ${port}`);
})
