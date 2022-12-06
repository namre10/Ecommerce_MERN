const app = require("./app");
const connectDatabase = require("./config/database");

// Setting config file
const dotenv = require("dotenv");
dotenv.config({ path: "backend/config/.env" });

var cors = require("cors");

//connecting to database
connectDatabase();

app.use(cors());

app.listen(process.env.PORT, () => {
  console.log(
    `Server is running on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode`
  );
});
