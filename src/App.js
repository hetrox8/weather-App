import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Countries from './Components/Countries';
import Details from './Components/Details';
import Navbar from './Components/Navbar';
import './Styles/App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            {/* Use the 'element' prop for child routes */}
            <Route index element={<Countries />} />
            <Route path="country/:countryId" element={<Details />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
