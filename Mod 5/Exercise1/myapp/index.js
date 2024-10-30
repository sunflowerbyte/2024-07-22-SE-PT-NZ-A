const testRoutes = require('./routes/myTestRoutes');
const calculatorRoutes = require('./routes/calculatorRoutes');
const express = require("express");
const cors = require("cors");
const userRoutes = require('./routes/userRoutes');

const app = express();
const port = 3000;

/*const app2 = express();
const port2 = 3001;

const app3 = express();
const port3 = 3002;

/*app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/test", (req, res) => {
  res.send("This is a test");
});

app.get("/test2", (req, res) => {
  res.send("Another test for this port");
});*/

app.listen(port, () => {
  console.log(`Example app listening
at http://localhost:${port}`);
});

/*app2.get("/", (req, res) => {
  res.send("Hi World!");
});

app2.get("/test", (req, res) => {
  res.send("This is another test");
});

app2.get("/test2", (req, res) => {
  res.send("This is another test for port 3001");
});*/

/*app2.listen(port2, () => {
  console.log(`Example app listening
at http://localhost:${port2}`);
});

app3.get("/", (req, res) => {
  res.send("Yo World!");
});

app3.get("/test", (req, res) => {
  res.send("This is another test haha");
});

app3.get("/test2", (req, res) => {
  res.send("This is another test for port 3002");
});

app3.listen(port3, () => {
  console.log(`Example app listening
at http://localhost:${port3}`);
});*/

app.use(express.json());

/*app.use('/', express.static('public'))*/
app.use (cors())
app.use('/mytest', testRoutes)
app.use('/calculator', calculatorRoutes)
app.use('/users', userRoutes)
