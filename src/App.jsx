import React from 'react';
import Header from './Header';
import Law from './Law';
import Float from './Float';
import "./Law.css";
import "./Float.css";
// import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Law/>
      {/* <Contact/> */}
      <Footer/>
      <Float 
        phoneNumber="+919951155742" 
        whatsappNumber="+919951155742" 
      />
    </div>
  );
}

export default App;