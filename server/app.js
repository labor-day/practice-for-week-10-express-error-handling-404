const express = require('express');
const app = express();

app.get('/', (req, res) => {
  return res.send('GET / This is the root URL');
});


//middleware after all route handling which creates an error if no route was found
app.use((req, res, next) => {
  let error = new Error("Sorry, the requested resource couldn't be found");
  error.statusCode = 404;
  next(error);
})

// Custom error handler
app.use((err, req, res, next) => {
  console.log(err);
  res.statusCode = (err.statusCode || 500);
  resBody = {"message": err.message, "statusCode": res.statusCode};
  res.send(resBody);
});

const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));
