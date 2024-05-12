import "./App.css";
import Home from "./components/home/Home";
import About from "./components/about/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import WeatherApp from "./components/weathercomponent/Index";
import SignUpForm from "./components/form/Signup";
import SignInForm from "./components/form/Signin";
import Todo from "./components/todocomponent/Todo";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route exact path="/todo" element={<Todo />} />
          <Route exact path="/weatherapp" element={<WeatherApp />} />
          <Route exact path="/signup" element={<SignUpForm/>} />
          <Route exact path="/signin" element={<SignInForm/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
