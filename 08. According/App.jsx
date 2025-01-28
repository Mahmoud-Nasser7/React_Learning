import According from "./components/According/According.jsx";
import { accordionData } from "./components/According/Data.js";
const App = () => {
  return (
    <div className="according">
      {accordionData.map(({ title, content }) => (
        <According key={Math.random()} title={title} content={content} />
      ))}
    </div>
  );
};

export default App;
