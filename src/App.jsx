import React from "react";
import Header from "./components/Screens/Header/Header";
import MainSection from "./components/MainSection/MainSection ";
import ContactSection from "./components/ContactSection/ContactSection";
import YouTubeAndMapSection from "./components/YoutubeXection/YoutubeSection";
import ContactForm from "./components/ContactForm/Contactform";

function App() {
  return (
    <div>
      <Header />
      <MainSection />
      <ContactForm/>
      <YouTubeAndMapSection />
    </div>
  );
}

export default App;
