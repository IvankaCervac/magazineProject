import express from "express";
import path from "path"
import  exphbs from 'express-handlebars';


let app = express();
const __dirname = path.resolve();



const hbs = exphbs.create({ 
    extname: "hbs",
 });
// Register `hbs.engine` with the Express app.
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');



app.get("/", (req, res) => {
    res.render('index');
});
app.get("/aboutUs", (req, res) => {
    res.render('aboutUs');
})
app.get("/location", (req, res) => {
    res.render('location');
})
app.get("/careers", (req, res) => {
    res.render('careers');
})



app.use(express.static(path.join(__dirname, 'dist')))

app.listen(3000, () => {
    console.log("aplicatia ruleaza pe portul 3000");
} )