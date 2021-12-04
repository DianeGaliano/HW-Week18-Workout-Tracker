const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');


const PORT = process.env.PORT || 3000;

const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workout-tracker', 
    {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});


require("./routes/apiRoutes")(app);
require('./routes/homeRoutes')(app);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
  
