import "./App.css";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/Profle/Profile";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Contact />
      <Blog />
      <Profile />
    </div>
  );
}

export default App;
