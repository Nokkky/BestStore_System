# Report

## Introduction

### Team member

| Name           | ID              |
| -------------- | --------------- |
| Sichao Xue     | six8@pitt.edu   |
| Yue Jia        | yuj36@pitt.edu  |
| Mengyuan Huang | meh215@pitt.edu |
| Nuoqi Zeng     | nuz2@pitt.edu   |

### Project Description

This system is a retail management system focusing on offline retail stores.

Employees can use our system to manage inventories, create new transactions, update information of employees , customers, and stores.

It is a similar system as when you checkout at a Nike store, but our products are different kinds of computers.

We provides different views for salespersons, store manager, and region manager so that they can perform different roles.

## Object

The goal of this project is to implement a retail management system. The users of this system are divided into customers and employees. Customers can browse and search for products at homepage of system. Employees, like salesperson, store manager, region manager, can operate related functions of store management in the system.

We make several assupmations before implementing this system.

### Customer

We divide customers into two categories, home and business. These two types of customers have different information. The category of a customer is decided by the salesperson.
| Category | Common Information | Special Information |
| -------- | ----------------------- | --------------------------------- |
| Home | id, address, kind, name | marry_status, age, gender, income |
| Business | id, address, kind, name | category, income |
All customers can browse the products in the browser component.

### Employee

There are three kinds of employee in the system: salesperson, store manager, and region manager.

For the salespersons, they control the in-store product purchase and transaction process. Once a customer selects the product and decides to buy it, the salesperson will help the customer own a new membership and store the personnel information. Then the salesperson add a new transaction record in the system, including the price, customer information and transaction time.

For the store manager, they can overview the store sales process, the overall sales amount and each salespersons’ progress, which makes it convenient for store management.

For the region managers, they can overview the region sales process. The sales comparisons between different regions, like total sales amount, total profits and average sales for each store. Hence they can determine which region has the best or worst sales condition and make it easier for further management decisions. Also, region managers can overview the storage condition, the product inventories in detail, then manage the inventory change.

## Team member's contributions

| Name           | Part              | Detail                                          |
| -------------- | ----------------- | ----------------------------------------------- |
| Mengyuan Huang | Server + Database | Backend routing and logic function              |
|                |                   | RESTful API                                     |
|                |                   | Authentication and session management           |
| Nuoqi Zeng     | Server + Database | Database structure                              |
|                |                   | RESTful API  
|                |                   | CRUD operations                                 |
|                |                   | Error handling                                  |
| Yue Jia        | Front-end         | Regional Manager related functions              |
|                |                   | Login and signup function                       |
| Sichao Xue     | Front-end         | Browser function                                |
|                |                   | Salesperson and store manager related functions |
|                |                   | UI layout and responsive design                 |
|                |                   | Router and Guard                                |
|                |                   | System deployment                               |

## Technical Architecture

### Model

#### Angular

We design nine models in our Front-end.
| Model | Attribute |
| ----------- | ---------------------------------------------------------------------------------------- |
| Aggregation | product_name, region_name, category, sum_quantity, product_id |
| Customer | customer_id, address, kind, name, marry_stauts, gender, income, category, company_income |
| Inventory | order_id, order_date, product_id,quantity |
| Product | product_id,product_name,amount,cost,kind,price,path |
| LoginToken | salesperson_id, job_title, sotre_id, token |
| Region | region_id,region_name,region_manager |
| Salesperson | salesperson_id,name,address,email,job_title,store_id,salary,password |
| Store | store_id, address, manager, region_id, salespersons_num |
| Transaction | order_id,customer_id,order_date,product_id,quantity,salesperson_id,store_id |

#### MySQL

In our website design process, we determined that a relational database is more suitable for our needs, so we choose MySQL as our database.
we separated the user into two kind (home and business) to provide information for salespersons when they communicated with those users.

| Table                | Column                                                                      |
| -------------------- | --------------------------------------------------------------------------- |
| Customer             | customer_id, name, kind, address                                            |
| Home                 | customer_id, marry_status, gender, age, income                              |
| Salespersons_account | salesperson_id, password                                                    |
| Salesperson          | salesperson_id,name,address,email,job_title,store_id,salary,password        |
| Store                | store_id, address, manager, region_id, salespersons_num                     |
| Transaction          | order_id,customer_id,order_date,product_id,quantity,salesperson_id,store_id |
| Inventory            | order_id, order_date, product_id,quantity, region_id                        |
| Product              | product_id,product_name,amount,cost,kind,price                              |
| Region               | region_id,region_name,region_manager                                        |
| Business             | customer_id, category, company_income                                       |

### View

#### Angular & Bootstrap

We use Angular to display our system. The general UI style is implemented by Bootstrap. We set the access control in our system that different user can only see their content in the system.

We have 4 different kinds of users.

| User Type      | Valid Content                                 |
| -------------- | --------------------------------------------- |
| Customer       | Browser                                       |
| Salesperson    | Browser, Customer, Product, Transaction       |
| Region Manager | Browser, Product, Store, Inventory, Dashboard |
| Store Manager  | Browser, Salesperson                          |

### Controller

#### Angular & Nodejs & Expressjs

By implementing controller, which is manipulating the model for view and database, we achieved controller both in frontend and backend.

In frontend, we use Angular, a MVC frontend framework, and provided some controller for frontend logic like access control, and changed the view when receive new data from backend.

In backend, we use Nodejs and Expressjs as the backend framework, to deal with the frontend request, CRUD operation for database. And for session management, we use Json Web Token here instead of Passport.js.

## Challenges

1. Since is project is a retail management system. We have many kinds of users to use our website. So we need to have complex functions and design many tables for it.

2. Responsive design of the system interface. How to properly display the sidebar on a small screen.

3. As the passport.js introduced in the slides, it confused us about how to customize the information that need to be send, so we decided to use JWT instead.

4. When the front end was deployed to glitch, we encountered a problem that the app exceeded the memory limit. Stopping and pausing for 15 seconds.Deploy the build version.

5. When selecting the sutiable online MySQL database, some database like Google Cloud is not easy to connect, thus we finally selected Free Sql Database to deploy our database online.

## Future Work

1. We could set a button on the page that user can show or hide the sidebar, and have a suitable UI on different devices.

2. We could add more pictures related with our products so that when the customers brows our website it would be more clearly.

3. We could plot some graph in our dashboard component instead of only text.

4. We could add more functions to our users so whey they are login they could do more things.

## Conclusion

1. We learned a lot about responsive design in class, especially media query. We have never learned about this knowledge. After learning it, We can implement the responsive design in my project.

2. We used to be unfamiliar with manipulating the DOM with JavaScript. But now We can implement some fancy operation in web project.

3. We learned how to connect frontend and backend together with mongoose and show our data on the page. And knowing how to design RESTful API would be very useful.

4. HTML and CSS will be always useful when we are in our career in the future. Every website needs HTML and CSS, they are the basic knowlege to build a website

5. Express.js allow us use the same language which is javascript both on backend and front end. It is kinda easy for us to be like a full-stack developer to design our website.

6. The relationship in database in complex, and error handle and access control will also be complex. To more successful implement a management system, comprehensively predifine logic of application is very important.

7. Our functionalities all are successful when we test on local, however, when we deploy it on glitch, everytime refresh page will get a error, no matter directly refresh on homepage or others. Therefore, when we want to test the update and delete function for salespersons, we will encounter a "Not FOUND" problem. We solve this problem by following [404 error during refresh after deployment](https://medium.com/tinywave/angular-6-404-error-during-refresh-after-deployed-8cec7140b584).

## Documentation

JWT in nodejs and expresshttps://medium.com/swlh/a-practical-guide-for-jwt-authentication-using-nodejs-and-express-d48369e7e6d4

Bootstrap: https://getbootstrap.com/docs/4.4/getting-started/introduction/

Angular: https://www.youtube.com/watch?v=vigcKQvCN8w

Angular: https://angular.io/docs

MySQL: http://www.mysqltutorial.org/mysql-delete-join/

Online Database Server: https://www.freesqldatabase.com/

404 error during refresh after deployment: https://medium.com/tinywave/angular-6-404-error-during-refresh-after-deployed-8cec7140b584

## Testing

Because only employees can login our system to see details information of stores. When login using different account, you can see different avaliable function for them.

Based on our assumption of the offline retail stores, we put the sign up function in the store manager pages, which is similar to hire a new salesperson for a store, and the store manager would collect the person's information and create the account for the person.

### Front-end(dev)

Front-end(dev) **contains source code.** But this version will constantly exceed the glitch memory limit. Stopping and pausing for 15 seconds. And the css style is wrong.**You should check our code using link below:**

<a href="https://glitch.com/~web-frontend" target="_blank">https://glitch.com/~web-frontend</a>

### Front-end(product)

Front-end(product) is the version that deploys the product version of our project(using exactly the same source code but with 'ng build' command line). **You should see our demo using link below:**

<a href="https://glitch.com/~web-frontend" target="_blank">https://glitch.com/~web-frontend</a>

### Back-end

Back-end is the server that provides RESTful API and connecting to our deployed database. **You should check our API using link below:**

<a href="https://glitch.com/~web-backend" target="_blank">https://glitch.com/~web-backend</a>

To successfully using our system, we provide following username and passwords for testing.
| Role | Employee ID | Password |
| -------------- | ----------- | --------- |
| salesperson | 10035 | sales3500 |
| store manager | 10009 | sales900 |
| region manager | 10001 | sales100 |
