require("dotenv").config();

// Create express server
const express = require("express");
const app = express();

const port = process.env.PORT;

app.listen(port, () => {
  console.log(
    `Server is started on port ${port}. Visit http://localhost:${port}`
  );
});
