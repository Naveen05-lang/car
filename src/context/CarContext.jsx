import { createContext, useContext, useState } from 'react';
import carsData from '../data/cars';

const CarContext = createContext();

export const CarProvider = ({ children }) => {
  const [cars, setCars] = useState(carsData);
  const [viewMode, setViewMode] = useState('grid');
  const [filters, setFilters] = useState({
    make: '',
    yearRange: [2000, 2025],
    priceRange: [0, 100000],
    fuelType: ''
  });
  const [sortOption, setSortOption] = useState('');
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (carId) => {
    setFavorites(prev =>
      prev.includes(carId)
        ? prev.filter(id => id !== carId)
        : [...prev, carId]
    );
  };

  
  return (
    <CarContext.Provider
      value={{
        cars,
        setCars,
        viewMode,
        setViewMode,
        filters,
        setFilters,
        sortOption,
        setSortOption,
        favorites,
        toggleFavorite,
      }}
    >
      {children}
    </CarContext.Provider>
  );
};

export const useCarContext = () => useContext(CarContext);
