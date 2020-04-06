const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();

const publicDirectory = path.join(__dirname, '/public');
const viewsPath = path.join(__dirname, '/views');

app.use(express.static(publicDirectory));
app.set('view engine', 'hbs');
app.set('views', viewsPath);

console.log(__dirname);
console.log(__filename);

app.get('/', (req, res) => {
    res.render('index', {
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: "Advantages",
        reasons: ["It facilitates the overall process of writing components", "It boosts productivity and facilitates further maintenance", "It ensures faster rendering", "It guarantees stable code", "It is SEO friendly", "It comes with a helpful developer toolset", "There is React Native for mobile app development", "It is focused and easy-to-learn", "It is backed by a strong community", "It is used by both Fortune 500 companies and innovative startups"]
    });
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});