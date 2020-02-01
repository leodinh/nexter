import React from "react";
import Layout from "./Layout/Layout";
import Realtors from "./Realtors/Realtors";
import Features from "./Features/Features";
import StoryContent from "./Story/StoryContent/StoryContent";
import StoryPicture from "./Story/StoryPictures/StoryPicture";
import Homes from "./Homes/Homes";
import Gallery from "./Gallery/Gallery";
import Footer from "./Footer/Footer";
function App() {
  return (
    <Layout>
      <div className="realtors">
        <Realtors />
      </div>
      <section className="features">
        <Features />
      </section>
      <div className="story__pictures">
        <StoryPicture />
      </div>
      <div className="story__content">
        <StoryContent />
      </div>
      <section className="homes">
        <Homes />
      </section>
      <section className="gallery">
        <Gallery />
      </section>
      <footer className="footer">
        <Footer />
      </footer>
    </Layout>
  );
}

export default App;
