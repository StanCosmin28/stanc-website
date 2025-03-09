import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Main from "./Components/Main";
import "./App.css";

const App = () => {
  return (
    // <div className="max-w-screen-md felx justify-center mx-auto relative">
    <>
      <Main>
        <Navbar />
        <Header />
      </Main>
    </>
    // </div>
  );
};

export default App;
