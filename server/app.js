const express = require("express")
const mongoose = require("mongoose")
const morgan = require("morgan")
const path = require("path")

const app = express()
const port = 3000

mongoose
  .connect("mongodb://localhost:27017/mevn", { useNewUrlParser: true })
  .then((db) => {
    console.log("[OK] DB is connected")
  })
  .catch((err) => console.error(err))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan("dev"))

app.use("/", express.static(path.join(__dirname, "../client/dist")))
app.use("/api/records", require("./routes/records"))

app.listen(port, () => {
  console.log(`[OK] Server is running on localhost:${port}`)
})
