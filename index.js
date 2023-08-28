const express = require('express');
const path = require('path');
const app = express();
const morgan = require('morgan');
const port = 3000;
const expressLayouts = require('express-ejs-layouts');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname , 'app', 'views'));
app.use(expressLayouts);


const router = require('./config/routes');

app.use('/',router);

app.listen(port,()=>{
    console.log(`Server berjalan di port ${port}`);
});