import express from "express";
import cors from "cors";
import APIRoutes from "./src/Routes/index.js";
import bodyParser from "body-parser";

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());



// Define API routes
app.use("/api", APIRoutes);

// Error handling middleware for 404 errors
app.use("/api/*", (req, res, next) => {
    const err = new Error("Api Not Found");
    err.status = 404;
    next(err);
  });
  // Error handling middleware for other errors
  app.use(function (err, req, res, next) {
    // Set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
  
    // Render the error page
    res.status(err.status || 500);
    res.json({
      error: err.message,
    });
  });  


//#endregion

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });