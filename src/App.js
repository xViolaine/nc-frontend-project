import './App.css';
import { Routes, Route } from 'react-router'
import Header from './components/Header'
import NavBar from './components/NavBar'
import ReviewList from './components/ReviewList'
import { useState } from 'react';
import { SingleReview } from './components/SingleReview';


function App() {
  return (
    <div className="App">
      <Header />
      <div className='NavHome'>
        <NavBar />
      </div>
      <Routes>
        <Route path="/reviews" element={<ReviewList />} />
        <Route path="/review/:review_id" element={<SingleReview />} />
      </Routes>
    </div>
  );
}

export default App;
