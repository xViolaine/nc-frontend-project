import './App.css';
import { Routes, Route } from 'react-router'
import Header from './components/Header'
import NavBar from './components/NavBar'
import ReviewList from './components/ReviewList'


function App() {
  return (
    <div className="App">
      <Header />
      <div className='NavHome'>
        <NavBar />
      </div>
      <Routes>
        <Route path="/reviews" element={<ReviewList />} />
      </Routes>
    </div>
  );
}

export default App;
