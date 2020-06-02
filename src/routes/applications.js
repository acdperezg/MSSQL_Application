const express = require('express');
const router = express.Router();
const sql = require('mssql');

router.get('/list', (req, res) => {
    
    var dbconfig = {
        server: process.env.DB_SERVER,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        port: parseInt(process.env.DB_DATABASE_PORT),
        options: {
            encrypt: false,
            enableArithAbort: true
        }
    }

    var conn = new sql.ConnectionPool(dbconfig);

    conn.connect(function (err) {
        if (err) throw err;
        var req = new sql.Request(conn);
        req.query("SELECT * FROM ApiKey", function (err, recordset) {
            if (err) throw err;
            else
                res.send(recordset);
            conn.close();
        });
    });
});




module.exports = router;