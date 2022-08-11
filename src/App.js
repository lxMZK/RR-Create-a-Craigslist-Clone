// Import data
import Searchbar from './Searchbar'
import Directroy from './Directory'
import Gallery from './Gallery'
import Sidebar from './Sidebar'
// Import components
import './App.css';

function App() {
  return (
    <div>
      <h1>craigslist</h1>
      <div className="App">
        {/* Your content will go here! */}
        <Searchbar />
        <Directroy />
        <Gallery />
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
