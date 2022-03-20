import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layaout";
import Header from "../containers/Header";

import EmailValidation from "../pages/EmailValidation";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MyAccount from "../pages/MyAccount";
import MyAccountEdit from "../pages/MyAccountEdit";
import MyOrders from "../pages/MyOrders";
import MyOrder from "../pages/MyOrder";
import NewPass from "../pages/NewPass";
import RecoveryPassword from "../pages/RecoveryPassword";
import NotFound from "../pages/NotFound"
import "../styles/global.css";

import AppContext from "../context/AppContext"
import useInitialState from "../hooks/useInitialState";

const App = () => {
  const initialState = useInitialState();
    return (
    <AppContext.Provider value={ initialState }>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/email-validation" element={<EmailValidation />} />
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/my-account" element={<MyAccount />} />
            <Route exact path="/account-edit" element={<MyAccountEdit />} />
            <Route exact path="/orders" element={<MyOrders />} />
            <Route exact path="/my-order" element={<MyOrder />} />
            <Route exact path="/new-password" element={<NewPass />} />
            <Route exact path="/recovery-password" element={<RecoveryPassword />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
    );
}

export default App;