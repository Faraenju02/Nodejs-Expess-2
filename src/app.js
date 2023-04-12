import express from "express";
import  morgan  from "morgan";

//Route
import contactRoute from "./routes/contact.route"

const app = express()

//setting
app.set('port', 3000)

//middleware
app.use(morgan("dev"))
app.use(express.json())

//exec route
app.use("/api/contacts",contactRoute)

export default app