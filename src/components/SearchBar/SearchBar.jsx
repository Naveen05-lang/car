import { useState, useEffect } from 'react';
import { useCarContext } from '../../context/CarContext';
import useDebounce from '../../hooks/useDebounce';
import './SearchBar.css';
const carsData = await import('../../data/cars');

function SearchBar() {
  const { setCars } = useCarContext();
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearch = useDebounce(searchTerm, 500);

  const handleSearch = async () => {
    const carsData = await import('../../data/cars'); 
    const filteredCars = carsData.default.filter(car =>
      car.make.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
      car.model.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
      car.features.some(feature =>
        feature.toLowerCase().includes(debouncedSearch.toLowerCase())
      )
    );
    setCars(filteredCars);
  };

  useEffect(() => {
    if (debouncedSearch) {
      handleSearch();
    } else {
      
      import('../../data/cars').then(carsData => {
        setCars(carsData.default);
      });
    }
  }, [debouncedSearch]);

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search by make, model, or feature..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
