import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { Home } from "./pages/Home";
import { RegisterForm } from "./pages/RegisterForm/RegisterForm";
import { LoginForm } from "./LoginForm/LoginForm";

export const App = () => {
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
