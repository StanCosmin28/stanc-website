import ThemeToggle from "./Components/ThemeToggle";
import Navbar from "./Components/Navbar";
import "./App.css"; // Assuming your global styles are in App.css
// import Layout from "./Components/Layout";

const App = () => {
  return (
    <>
      <Navbar />
      <ThemeToggle />
      {/* <Layout /> */}
    </>
  );
};

export default App;
