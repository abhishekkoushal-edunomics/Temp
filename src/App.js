import React from "react";
import { connect } from "react-redux";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import User from "./pages/User";
import UserAge from "./pages/UserAge";
import { viewUser } from "./redux/actions/actions";

function App() {
  return (
    <>
        <BrowserRouter>
          <Switch>
            <Route path="/user">
              <User />
            </Route>
            <Route path="/age">
              <UserAge />
            </Route>
            <Route path="/">
              <Redirect to="/user" />
            </Route>
          </Switch>
        </BrowserRouter>
    </>
  );
}
// const mapStateToProps = state =>{
//   return {users:state.users}
// }

// const mapDispachToProps = dispach =>{
//   return {viewUser:()=>dispach(viewUser())}
// }

// export default connect(mapStateToProps,mapDispachToProps)(App) ;
export default App;