import React from 'react';
import AppRouter from './Routes/AppRouter';
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { ContextProvider } from './Components/utils/global.context';

function App() {
  return (
    <ContextProvider>
      <div className="App">
          <Navbar/>
          <AppRouter />
          <Footer/>
      </div>
    </ContextProvider>
  );
}

export default App;
