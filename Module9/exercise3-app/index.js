const express = require("express");
const simpsonsRoutes = require("./routes/simpsonsRoutes");

const app = express();
const PORT = 8080;

app.use(express.json());

// Routes for Simpsons API integration
app.use("/api/simpsons", simpsonsRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
