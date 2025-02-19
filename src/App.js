import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Footer />
    </Router>
  );
};

export default App;
