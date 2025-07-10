
import FaqSection from "./FaqSection";
import FeatureGrid from "./FeatureGrid";
import Footer from "./Footer";
import QuoteSection from "./QuoteSection";
import RoadmintHeroClone from "./RoadmintHeroClone";
import TriviaSection from "./TriviaSection";

function App() {
  return (
    <div>
      <main className="relative z-10">
        {/* your content */}
      </main>
      <div className="fixed top-4 right-4 z-50">
        <button className="bg-gray-800 hover:bg-gray-700 text-white font-medium px-5 py-2 rounded-md border border-gray-600 shadow-md">
          Your Desk
        </button>
      </div>
      <RoadmintHeroClone />
      <QuoteSection />
      <TriviaSection />
      <FeatureGrid />
      <FaqSection />
      {/* Other sections */}
      <Footer />
    </div>
  );
}

export default App;
