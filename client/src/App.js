import "./App.css";
import {Route,Routes} from "react-router-dom"
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Home from "./pages/Home";
import NavbarC from "./components/Navbar";
import Dashboard from './pages/Dashboard';
import PrivateRoute from "./components/PrivateRoute";
import FooterC from "./components/Footer";
import About from "./components/About";
import Room from "./components/Room";
import Contact from "./components/Contact";
import { useEffect } from "react";
function App() {
  return (
    <div className="flex flex-col dark bg-[rgb(16,23,42)] text-gray-200">
      <NavbarC/>
      <Routes>
      <Route path="/"  element={<Home/>}/>
        <Route path="/login"  element={<LoginPage/>}/>
        <Route path="/Register"  element={<RegisterPage/>}/>
        <Route path="/about"  element={<About/>}/>
        <Route path="/contact"  element={<Contact/>}/>
        <Route element={<PrivateRoute/>}>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Route>
        <Route path="/room/:roomId"  element={<Room/>}/>
        <Route path="/contact"  element={<Contact/>}/>
      </Routes>
      <FooterC/>
    </div>
  );
}
useEffect(() => {
  const script = document.createElement("script");
  script.src = "https://embed.tawk.to/69f8a1f5e8e05f1c325a25ce/default"; // 🔴 replace this
  script.async = true;
  script.charset = "UTF-8";
  script.setAttribute("crossorigin", "*");

  document.body.appendChild(script);

  return () => {
    document.body.removeChild(script);
  };
}, []);

export default App;
