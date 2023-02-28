const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.use(express.json());
//routes
const userRoutes = require('./routes/users')
const projectRoutes = require('./routes/project')

app.use('/users', userRoutes)
app.use('/projects', projectRoutes)

mongoose.connect("mongodb+srv://kalyan:kalyan2003@cluster0.6ejb3yo.mongodb.net/?retryWrites=true&w=majority", {
    dbName: 'minorDB'
}).then(() => {
    console.log("Database connection is ready...");
}).catch((err) => { console.log(err) });

app.listen(3002, () => {
    console.log('server is running http://localhost:3002');
})