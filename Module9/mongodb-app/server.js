const express = require("express"); //creates express application - to install express
const dbConnect = require("./dbConnect");


let userRoutes = require('./routes/userRoutes');
let commentRoutes = require('./routes/commentRoutes');
let postRoutes = require('./routes/postRoutes');
let likeRoutes = require('./routes/likeRoutes')


const app = express(); //creating the application

require("dotenv").config();
// parse requests of content-type -application / json;

app.use(express.json());
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my MongoDB application." });
});
// set port, listen for requests

app.use('/api/users', userRoutes);
app.use('./api/comments', commentRoutes);
app.use('./api/posts',postRoutes);
app.use('./api/likes',likeRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port${PORT}.`);
});
