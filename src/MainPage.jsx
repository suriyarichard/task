// MainPage.js

import {} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CategoryItem from './CategoryItem';
import DetailPage from './DetailPage';
import './MainPage.css';

const categories = [
  { id: 1, name: 'MobilePhone' },
  { id: 2, name: 'Laptop' },
  { id: 3, name: 'Desktop' },
  { id: 4, name: 'HeadPhone' },
  // Add more categories as needed
];

const MainPage = () => {
  return (
    <Router>
      <div className="main-page">
        <h1>Product Categories</h1>
        <div className="category-list">
          {categories.map((category) => (
            <Link to={`/details/${category.id}`} key={category.id} className="category-link">
              <div className="category-item">
                <CategoryItem category={category} />
                <div className="category-content">
                  <h2 className="category-title">{category.name}</h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <Routes>
          <Route path="/details/:id" element={<DetailPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default MainPage;
