import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Main from "./Components/Main";
import "./App.css";
import BrandsCarusel from "./Components/BrandsCarusel";
import SectionTitle from "./Components/SectionTitle";
import SectionContainer from "./Components/SectionContainer";
import SectionDescription from "./Components/SectionDescription";

const App = () => {
  return (
    // <div className="max-w-screen-md felx justify-center mx-auto relative">
    <>
      <Main>
        <Navbar />
        <Header />
      </Main>
      <BrandsCarusel />
      <SectionContainer>
        <SectionTitle title={"Who Am I"} />
        <SectionDescription
          description={
            "FullStack Developer, Front-End focused, delivering high-quality web applications by mastering cutting-edge technologies. Proficient in JavaScript, TypeScript, React, NodeJS, ExpressJS, HTML, CSS, and Tailwind. Skilled in leveraging AWS for cloud-based solutions and actively expanding expertise in advanced frameworks like NextJS while utilizing databases as MongoDB and SQL to build robust and scalable applications."
          }
        />
      </SectionContainer>
      <SectionContainer>
        <SectionTitle title={"Skills"} />
      </SectionContainer>
    </>
    // </div>
  );
};

export default App;
