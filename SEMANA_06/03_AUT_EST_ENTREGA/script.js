const express = require('express'); 
const hostname = '127.0.0.1';


const port = 3052;
const sqlite3 = require('sqlite3').verbose();
const app = express();
const DBPATH = 'dbUser.db';
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })


app.use(express.static("../frontend/"));


app.use(express.json());


/* Definição dos endpoints */
app.get('/user1', (req, res) => {
    res.statusCode = 200;
    //res.setHeader('Content-Type', 'text/html');
    res.setHeader('Access-Control-Allow-Origin', '*');
    var db = new sqlite3.Database(DBPATH);
    var sql = 'SELECT * FROM tbUser WHERE userId = 1';
    db.get(sql, [], (err, row) => {
	    if (err) {
		throw err;
	    }
	    res.json(row);
	    });
});



app.post('/userinsert', urlencodedParser, (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); 

    sql = "INSERT INTO tbUser (title, id, completed) VALUES ('" + req.body.title + "', 33, false)";
    var db = new sqlite3.Database(DBPATH); 
    db.run(sql, [],  err => {
        if (err) {
            throw err;
        }
    });
    db.close();
    res.end();
});