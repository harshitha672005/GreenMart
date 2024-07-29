import React, { useState } from 'react';
import Dropdown from './Dropdown';
const GroceryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    { label: 'Fruits', value: 'fruits' },
    { label: 'Vegetables', value: 'vegetables' },
    { label: 'Dairy', value: 'dairy' },
    { label: 'Meat', value: 'meat' },
  
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
        
        </div>
      )}
    </div>
  );
};

export default GroceryPage;