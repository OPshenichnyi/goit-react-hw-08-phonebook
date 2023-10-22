import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { refreshUser } from "./authorization/operationAuth";
import { RestrictedRoute } from "./RestrictedRouter";
import { PrivateRouter } from "./PrivateRouter";

import { Home } from "./pages/Home";
import { RegisterForm } from "./RegisterForm/RegisterForm";
import { LoginForm } from "./LoginForm/LoginForm";
import { Contact } from "./pages/Contact";


export const App = () => {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch])
  
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path="/register" element={
          <RestrictedRoute redirectTo="/contact" component={<RegisterForm/>} />}/>
        <Route path="/login" element={
          <RestrictedRoute redirectTo="/contact" component={<LoginForm />} />}/>
        <Route path="/contact" element={
          <PrivateRouter redirectTo="/login" component={<Contact/>}/>
        }/>
      </Route>
    </Routes>
  );
};
