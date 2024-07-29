import React, { useState } from 'react';

// SearchBar component
const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <div>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search for products..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

// Category component
const Category = ({ name, imageUrl }) => (
  <div className="category">
    <img src={imageUrl} alt={name} />
    <h3>{name}</h3>
  </div>
);

// HomePage component
const HomePage = () => {
  const handleSearch = (query) => {
    // You can handle the search logic here
    console.log('Search query:', query);
  };

  return (
    <div className="home">
      <h1>Welcome to the Homepage</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="categories">
        <Category name="Fruits" imageUrl="/images/fruits.jpg" />
        <Category name="Vegetables" imageUrl="/images/vegetables.jpg" />
        <Category name="Dairy" imageUrl="/images/dairy.jpg" />
        <Category name="Grains" imageUrl="/images/grains.jpg" />
      </div>
    </div>
  );
};

export default HomePage;
