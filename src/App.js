import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import NavBar from './components/NavBar'
import ReviewList from './components/ReviewList'
import { useState } from 'react'

function App() {
  const [reviewByID, setReviewByID] = useState();

  return (
    <div className="App">
    <Header />  
    <NavBar />  
    <Routes>
      <Route path="/"  element={<ReviewList reviewByID={reviewByID} setReviewByID={setReviewByID}/>} />
    </Routes>
    </div>
  );
}

export default App;
