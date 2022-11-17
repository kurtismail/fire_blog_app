import Content from "./components/Content";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="App" style={{backgroundColor: "grey", scale:"0.95"}}>
      <h1>hello react</h1>
      <Header/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
