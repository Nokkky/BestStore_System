const express = require('express');
const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();
const router = express.Router();

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


// addManager() POST /managers
router.post('/managers', (req, res, next) => {
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
    if (err){ 
      next(err);
    }
    res.status(200);
    res.send('Manager added...');
  });
});

// showManager() GET /managers
router.get('/managers', (req, res, next) => {
  let sql = 'SELECT * FROM salespersons';
  db.query(sql, (err, results) => {
    if (err){ 
      next(err);
    }
    res.status(200);
    
    res.json(results);
  });
});

// deleteManager() DELETE /managers/mid
// 如何决定manager的id？
router.delete('/salespersons/:said', (req, res, next) => {
  let sql = 'DELETE from salespersons WHERE salespersons_id = ' + req.params.said;
  db.query(sql, (err, results) => {
    if (err){ 
      next(err);
    }
    res.status(200);
    res.send('Manager deleted...');
  })
});

// addStore() POST /stores
router.post('/stores', (req, res, next) => {
  let sql = 'INSERT INTO store SET ?';
  let body = {
    address: req.body.address,
    manager: req.body.manager,
    region_id: req.body.region_id,
    salespersons_num: req.body.salespersons_num
  }
  db.query(sql, body, (err, results) => {
    if (err){ 
      next(err);
    }
  });
  sql = "SELECT changestoremanager(" + req.body.manager + ")"
  db.query(sql, body, (err, results) => {
    if (err){ 
      next(err);
    }
    res.status(200);
    res.send('Store added...');
  })
});

// showStore() GET /stores
router.get('/stores', (req, res, next) => {
  let sql = 'SELECT * FROM store';
  db.query(sql, (err, results) => {
    if (err){ 
      next(err);
    }
    res.status(200);
    res.json(results);
  });
});

// showStore() GET /stores
router.get('/stores/:stid', (req, res, next) => {
  let sql = 'SELECT * FROM store WHERE store_id =' + req.params.stid
  db.query(sql, (err, results) => {
    if (err){ 
      next(err);
    }
    res.status(200);
    res.json(results);
  });
});

// deleteStore() DELETE /stores/stid
router.delete('/stores/:stid', (req, res, next) => {
  let sql = 'DELETE from store WHERE store_id =' + req.params.stid;
  db.query(sql, (err, results) => {
    if (err){ 
      next(err);
    }
    res.status(200);
    res.send('Store deleted...');
  });
});

// updateStore() PATCH /stores/stid
router.patch('/stores/:stid', (req, res, next) => {
  let sql = 'UPDATE store SET ? WHERE store_id = ' + req.params.stid;
  let body = {
    address: req.body.address,
    store_id: req.body.store_id,
    manager: req.body.manager,
    region_id: req.body.region_id,
    salespersons_num: req.body.salespersons_num
  }
  db.query(sql, body, (err, results) => {
    if (err){ 
      next(err);
    }
  })
  sql = "SELECT changestoremanager(" + req.body.manager + ")"
  db.query(sql, body, (err, results) => {
    if (err){ 
      next(err);
    }
    res.status(200);
    res.send('Store updated...');
  })
});

// addProduct() POST /products
router.post('/products', (req, res, next) => {
  let sql = 'INSERT INTO product SET ?';
  //body里的内容付给对象
  let body = {
    amount: req.body.amount,
    cost: req.body.cost,
    kind: req.body.kind,
    price: req.body.price,
    product_name: req.body.product_name
  }
  db.query(sql, body, (err, results) => {
    if (err){ 
      next(err);
    }
    res.status(200);
    res.send('Product added...');
  });
});

// deleteProduct() DELETE /product/pid
router.delete('/products/:pid', (req, res, next) => {
  let newTitle = 'Updated Title';
  let sql = 'DELETE from product WHERE product_id =' + req.params.pid;
  db.query(sql, (err, results) => {
    if (err){ 
      next(err);
    }
    res.status(200);
    res.send('Product deleted...');
  });
});

// showProduct() GET /products
router.get('/products', (req, res, next) => {
  let sql = 'SELECT * FROM product';
  db.query(sql, (err, results) => {
    if (err){ 
      next(err);
    }
    res.status(200);
    res.json(results);
  });
});

// updateProduct('type',parameter) PUT/PATCH /product/pid
router.patch('/products/:pid', (req, res, next) => {
  let sql = 'UPDATE product SET ? WHERE product_id = ' + req.params.pid;
  let body = {
    amount: req.body.amount,
    cost: req.body.cost,
    kind: req.body.kind,
    price: req.body.price,
    product_name: req.body.product_name
  }
  db.query(sql, body, (err, results) => {
    if (err){ 
      next(err);
    }
    res.status(200);
    res.send('Products updated...');
  })
});

// showInventory() GET /inventories
router.get('/inventories', (req, res, next) => {
  let sql = 'SELECT * FROM inventory';
  db.query(sql, (err, results) => {
    if (err){ 
      next(err);
    }
    res.status(200);
    res.json(results);
  });
});

// addInventory() POST /inventories
router.post('/inventories', (req, res, next) => {
  let sql = 'INSERT INTO inventory SET ?';
  //body里的内容付给对象
  let body = {
    order_date: req.body.order_date,
    product_id: req.body.product_id,
    quantity: req.body.quantity,
  }
  db.query(sql, body, (err, results) => {
    if (err){ 
      next(err);
    }
    // res.send('Inventory added...');
  });
  sql = 'SELECT inventory_product(' + req.body.product_id + ", " + req.body.quantity + ')';
  db.query(sql, (err, results) => {
    if (err){ 
      next(err);
    }
    res.status(200);
    res.send('Inventory added...');
  });
});

// deleteInventory() DELETE /inventories/oid
router.delete('/inventories/:oid', (req, res, next) => {
  let sql = 'DELETE from inventory WHERE order_id =' + req.params.oid;
  db.query(sql, (err, results) => {
    if (err){ 
      next(err);
    }
    res.status(200);
    res.send('Inventory deleted...');
  });
});