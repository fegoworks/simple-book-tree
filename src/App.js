import Header from "./components/Header";
import Courses from "./components/Courses";
import "./styling/_style.scss";

export default function App() {
  return (
    <div className="App">
      <Header />
      <hr />
      <Courses />
    </div>
  );
}
