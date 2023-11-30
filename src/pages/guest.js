import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout"
import PrivateRoute from "../components/privateRoute"
import Profile from "../components/profile"
import Login from "../components/login"

const Guest = () => (
  <Layout>
    <Router>
      <PrivateRoute path="/guest/profile" component={Profile} />
      <Login path="/guest/login" />
    </Router>
  </Layout>
)

export default Guest