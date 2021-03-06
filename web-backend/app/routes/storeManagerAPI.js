const express = require('express');
const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();
const router = express.Router();
const bcrypt = require('bcrypt');

module.exports = router
//Create connection
const db = mysql.createConnection({
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database
});

router.get('/', (req, res) => {
  res.send('Welcome!');
});


// addSalesperson() POST /salespersons
router.post('/salespersons', (req, res, next) => {
  let sql = 'INSERT INTO salespersons SET ?';
  //body里的内容付给对象
  let body = {
    address: req.body.address,
    email: req.body.email,
    job_title: req.body.job_title,
    name: req.body.name,
    salary: req.body.salary,
    store_id: req.body.store_id
  }
  db.query(sql, body, (err, results) => {
    if (err) {
      next(err);
    }
  });

  bcrypt.hash(req.body.password, 10, function(err,hash){
    sql = 'INSERT INTO salespersons_account (salesperson_id, password) VALUES (LAST_INSERT_ID(), ' + "'" + hash + "'" + ")";
    //body里的内容付给对象
    query = db.query(sql, body, (err, results) => {
    if (err) {
      next(err);
    }
      res.status(200).send('Salesperson added');
    });
  });
  
});

// deleteSalespersons() DELETE /salespersons/said
router.delete('/salespersons/:said', (req, res, next) => {
  let sql = 'DELETE from salespersons WHERE salesperson_id =' + req.params.said;
  db.query(sql, (err, results) => {
    if (err) {
      next(err);
    }
    res.status(200)
    res.send(results);
  });
});

// getSalespersonStoreId() /salespersons/store_id/:said
router.get('/salespersons/store_id/:said', (req, res, next) => {
  let sql = 'SELECT store_id FROM salespersons WHERE salesperson_id =' + req.params.said;
  db.query(sql, (err, results) => {
    if (err) {
      next(err);
    }
    res.status(200)
    res.send(results);
  });
});

// decreaseSalesperson_num() /stores/decrease_dsalespersons_num/stid
router.get('/decrease_salespersons_num/:stid', (req, res, next) => {
  let sql = 'SELECT deletesalesperson_store(' + req.params.stid + ')';
  db.query(sql, (err, results) => {
    if (err) {
      next(err);
    }
    res.status(200)
    res.send('Salesperson number of store decreases...');
  });

});

// increaseSalesperson_num() /stores/increase_salespersons_num/stid
router.get('/increase_salespersons_num/:stid', (req, res, next) => {
  let sql = 'SELECT addsalesperson_store(' + req.params.stid + ')';
  db.query(sql, (err, results) => {
    if (err) {
      next(err);
    }
  });
    res.status(200)
  res.send('Salesperson number of store increases...');

});

// get salespersons() GET /salespersons
router.get('/salespersons', (req, res, next) => {
  let sql = 'SELECT * FROM salespersons';
  db.query(sql, (err, results) => {
    if (err) {
      next(err);
    }
    res.status(200)
    res.json(results);
  });
});

// get salespersons() GET /salespersons/id
router.get('/salespersons/:id', (req, res, next) => {
  let sql = 'SELECT * FROM salespersons WHERE salesperson_id = ' + req.params.id;
  db.query(sql, (err, results) => {
    if (err) {
      next(err);
    }
    res.status(200)
    res.json(results);
  });
});

// updateSalesperson PATCH /salespersons/said
router.patch('/salespersons/:said', (req, res, next) => {
  let sql = 'UPDATE salespersons SET ? WHERE salesperson_id = ' + req.params.said;
  let body = {
    address: req.body.address,
    email: req.body.email,
    job_title: req.body.job_title,
    name: req.body.name,
    salary: req.body.salary,
    store_id: req.body.store_id
  }
  db.query(sql, body, (err, results) => {
    if (err) {
      next(err);
    }
  })

  sql = 'UPDATE salespersons_account SET ? WHERE salesperson_id = ' + req.params.said;
  body = {
    password: req.body.password
  }
  db.query(sql, body, (err, results) => {
    if (err) {
      next(err);
    }
    res.status(200)
    res.send("Salesperson updated...")
  })
})

// getSalespersonWithPassword() GET /salespersons/password/id
router.get('/salespersons/password/:id', (req, res, next) => {
  let sql = 'SELECT * FROM salespersons, salespersons_account WHERE salespersons.salesperson_id = salespersons_account.salesperson_id and salespersons.salesperson_id = ' + req.params.id;
  db.query(sql, (err, results) => {
    if (err) {
      next(err);
    }
    res.status(200)
    res.json(results);
  });
});
