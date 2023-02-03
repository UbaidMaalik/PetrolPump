import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import { useEffect } from "react";
import store from "./store";
import { loadUser } from "./actions/auth";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./components/Dashboard";
import Customers from "./components/customer/Customers";
import AddCustomer from "./components/customer/AddCustomer";
import EditCustomer from "./components/customer/EditCustomer";
import FuelPrices from "./components/prices/FuelPrices";
import Transections from "./components/transection/Transections";
import DetailTransections from "./components/transection/DetailTransections";
import ReceiveAmount from "./components/transection/ReceiveAmount";
import EditTransection from "./components/transection/EditTransection";

function App() {
  // useEffect(() => {
  //   store.dispatch(loadUser());
  // });
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Switch>
            {/* <Route exact path="/login">
              <Login />
            </Route> */}
            <ProtectedRoute exact path="/dashboard" component={Dashboard} />
            <ProtectedRoute exact path="/customers" component={Customers} />
            <ProtectedRoute exact path="/addcustomer" component={AddCustomer} />
            <ProtectedRoute exact path="/" component={Dashboard} />
            <ProtectedRoute
              exact
              path="/customers/:id/edit"
              component={EditCustomer}
            />
            <ProtectedRoute
              exact
              path="/transections/:id/detail"
              component={DetailTransections}
            />
            <ProtectedRoute exact path="/fuelprices" component={FuelPrices} />
            <ProtectedRoute
              exact
              path="/transection"
              component={Transections}
            />
            <ProtectedRoute
              exact
              path="/transection"
              component={Transections}
            />
            <ProtectedRoute
              exact
              path="/receiveamount"
              component={ReceiveAmount}
            />
            <ProtectedRoute
              exact
              path="/transections/:id/edit/:type"
              component={EditTransection}
            />
            {/* <ProtectedRoute exact path="/t/:id" component={EditPayment} /> */}
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
