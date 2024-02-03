import "./App.css";
import Header from './components/Header.js';

const message = "Cool Cud";

function App() {
  return (
    <>
    <Header />
    <Heart msg={message} />;
    </>
  )
  }

export default App;
