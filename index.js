import express from 'express'
import bodyParser from 'body-parser';
const app = express();
const port = 4000
var data = []
var ediatablecontent = {}
let deleteindex = 0
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("public"))
app.use(bodyParser.json())
app.post("/edit", (req, res) => {
    ediatablecontent = req.body;
    console.log(ediatablecontent)
    console.log("req.body:", req.body);
    console.log("index:", req.body.index)
    if (req.body.value) {
        deleteindex = Number(req.body.value);

        console.log("inside post of edit")
    }
    else {
        res.json({
            message: "Hey I got the data",
            title: req.body.title,
            content: req.body.content
        });
    }
})
app.post("/delete", (req, res) => {
    console.log("Delete post method output:", req.body)
    deleteindex = Number(req.body.value)
    console.log("data before deleted:", data)
    data.splice(deleteindex, 1);
    console.log("data before deleted:", data)
    res.json({
        message: "I have been deleted the blog"
    })
})
app.get("/edit", (req, res) => {
    console.log(data)
    data.pop(ediatablecontent.value)
    console.log(data)
    res.render("edit", { ediatablecontent })
})


app.get("/blogview", (req, res) => {
    res.render("view", { ediatablecontent });
});
app.get("/", (req, res) => {
    res.render("index", { data });
});

app.post("/", (req, res) => {

    data.push(req.body)

    console.log(data)
    res.render("index", { data });
})
app.get("/create", (req, res) => {
    res.render("createblog")
})
app.listen(port, () => {
    console.log("Listening on port 4000")
})