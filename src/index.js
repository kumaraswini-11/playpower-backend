import { app } from "./app.js";

// Start the Express server
app.listen(process.env.PORT, () => {
  console.log(`Server is running at port: ${process.env.PORT}`);
});
