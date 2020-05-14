const express = require('express');
const registrationRouter = require('./routes/registration');
const adminRouter = require('./routes/admin');



const app = express();

app.use('/admin',adminRouter);
app.use('/registration',registrationRouter);


app.set('port',3000);

app.listen(app.get('port'),function () {
  console.log(`App started on port 3000`);
});