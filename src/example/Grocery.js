import React, { useState } from 'react';
import Dropdown from './Dropdown'; // assuming Dropdown component is in a separate file

const GroceryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    { label: 'Fruits', value: 'fruits' },
    { label: 'Vegetables', value: 'vegetables' },
    { label: 'Dairy', value: 'dairy' },
    { label: 'Meat', value: 'meat' },
    // Add more categories as needed
  ];

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);

  };

  return (
    <div>
      <div style={{ margin: 20, width: 200 }}></div>
      <Dropdown options={categories} onSelect={handleCategorySelect} />
      {selectedCategory && (
        <div>
          <h2>{selectedCategory.label}</h2>
          {/* Display products for the selected category */}
        </div>
      )}
    </div>
  );
};

export default GroceryPage;