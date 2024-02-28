// MainPage.js
import {} from 'react';
import CategoryItem from './CategoryItem';
import './styles.css'; // Import the styles

const categories = [
  { id: 1, name: 'Electronics' },
  { id: 2, name: 'Clothing' },
  { id: 3, name: 'Books' },
  // Add more categories as needed
];

const MainPage = () => {
  return (
    <div className="main-page">
      <h1>Product Categories</h1>
      <div className="category-list">
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
