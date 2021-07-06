import React from 'react'
import Sidebar from './components/sidebar/Sidebar.js'
import Topbar from './components/topbar/Topbar.js'
import './App.css'
import Home from './pages/home/Home.js'
import UserList from './pages/userList/UserList.js'
import User from './pages/user/User.js'
import NewUser from './pages/newPage/NewUser.js'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import ProductList from './pages/productList/ProductList.js'
import Product from './pages/product/Product.js'
import NewProduct from './pages/newProduct/NewProduct.js'

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
      <Sidebar />
      <Switch>
        <Route exact path="/">
        <Home />
        </Route>
        <Route path="/users">
        <UserList />
        </Route>
        <Route path="/user/:userId">
        <User />
        </Route>
        <Route path="/newUser">
        <NewUser />
        </Route>
        <Route path="/products">
        <ProductList />
        </Route>
        <Route path="/product/:productsId">
        <Product />
        </Route>
        <Route path="/newproduct">
        <NewProduct />
        </Route>
      </Switch>
      </div>

    </Router>
  )
}

export default App
