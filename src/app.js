const express = require("express");
const path = require("path");
const hbs = require("hbs");
const forecast = require("./Utils/Forecast");

const app = express();

const publicdirectorypath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialPath = path.join(__dirname, "../templates/partials");

app.use(express.static(publicdirectorypath));
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialPath);

app.get("/", (req, res) => {
  res.render("index", {
    title: "Weather",
    name: "Chirag",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
    name: "Chirag",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help",
    helpText: "This is Some helpful Text.",
    name: "Chirag",
  });
});

app.get("/weather", (req, res) => {
  req.query.address;
  if (!req.query.address) {
    return res.send({ error: "You must Provide an Address" });
  }

  forecast(req.query.address, (error, { country, temp, feels_like }={}) => {
    if (error) {
      return res.send({ error });
    }
  
    res.send({
      location:req.query.address,
      country,
      forecast: temp +feels_like
      // forecast:'it is snowing',
      // location:req.query.address
    });
  
  });
  
});

app.get("/products", (req, res) => {
  if (!req.query.search) {
    return res.send({ error: "You must provide an search item" });
  }
  res.send({
    products: [],
  });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    name: "chirag",
    title: "404",
    errorMessage: "Help Article Not found",
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    name: "chirag",
    title: "404",
    errorMessage: "Page Not Found",
  });
});

app.listen(3000, () => {
  console.log("Server is Up and Running on Port!");
});
