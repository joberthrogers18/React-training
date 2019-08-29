const mongoose = require('mongoose');

mongoose.connect(
  process.env.DATABASE, 
  {
    useNewUrlParser: true,
    useCreateIndex: true
  }, 
  (error) => {

    if (error){
      return console.log(`It was not possible connect with database ${error}`);
    }

    console.log(`Database was connect successful`);
  }
);