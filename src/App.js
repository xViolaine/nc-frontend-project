import './App.css';
import { Routes, Route } from 'react-router'
import Header from './components/Header'
import NavBar from './components/NavBar'
import ReviewList from './components/ReviewList'
import { useEffect, useState } from 'react'
import { getAllCategories } from './utils/API'

function App() {
  const [reviewByID, setReviewByID] = useState();
  const [allCategories, setAllCategories] = useState([]);

useEffect(() => {
  getAllCategories().then((categoriesFromAPI) => {
    setAllCategories(categoriesFromAPI)
  })
}, [])

  return (
    <div className="App">
      <Header />
      <div className='NavHome'>
        <NavBar allCategories={allCategories}/>
      </div>
      <Routes>
        <Route path="/reviews" element={<ReviewList reviewByID={reviewByID} setReviewByID={setReviewByID} />} />
      </Routes>
    </div>
  );
}

export default App;
