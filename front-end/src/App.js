import { Router } from "./routes/Router";
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }`;

function App() {
  return (
    <div className="App">
      <Router/>
      <GlobalStyle/>
    </div>
  );
}

export default App;
