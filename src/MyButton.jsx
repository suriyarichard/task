import {} from 'react';
import PropTypes from 'prop-types';
import './Button.css'; // Add your custom styles if needed

const MyButton = ({ onClick, label }) => {
  return (
    <button className="my-button" onClick={onClick}>
      {label}
    </button>
  );
};

MyButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default MyButton;
