// CategoryItem.js
import {} from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import './styles.css';

const CategoryItem = ({ category }) => {
  return (
    <div className="category-item">
      <h3>{category.name}</h3>
      {/* Add more details or links as needed */}
    </div>
  );
};

// Add prop types
CategoryItem.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string.isRequired,
    // Add other properties if necessary
  }).isRequired,
};

export default CategoryItem;
