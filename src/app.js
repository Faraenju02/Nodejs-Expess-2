import express from "express";
import morgan from "morgan";
import path from "path"


//swagger
import swaggerUi from "swagger-ui-express"
import swaggerJSDoc from "swagger-jsdoc";

//Route
import contactRoute from "./routes/contact.route"

const app = express()
const swaggerSpec = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "node Mysql api",
            version: "1.0.0"
        },
        servers: [
            {
                url: "http://localhost:3000"
            }
        ]
    },
    apis:[`${path.join(__dirname,"./routes/contact.route.js")}`]
}

//setting
app.set('port', 3000)

//middleware
app.use(morgan("dev"))
app.use(express.json())
app.use("/api-doc", swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(swaggerSpec)))

//exec route
app.use("/api/contacts", contactRoute)

export default app