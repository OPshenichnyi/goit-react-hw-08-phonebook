import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { Home } from "./pages/Home";
import { RegisterForm } from "./RegisterForm/RegisterForm";
import { LoginForm } from "./LoginForm/LoginForm";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { refreshUser } from "./authorization/operationAuth";

export const App = () => {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch])
  
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path="/register" element={<RegisterForm />}></Route>
        <Route path="/login" element={<LoginForm/>}></Route>
      </Route>
    </Routes>
  );
};
