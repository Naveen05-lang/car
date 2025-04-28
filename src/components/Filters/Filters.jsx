import { useCarContext } from '../../context/CarContext';
import './Filters.css';

function Filters() {
  const { filters, setFilters } = useCarContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="filters">
      <select name="make" value={filters.make} onChange={handleChange}>
        <option value="">All Makes</option>
        <option value="Toyota">Toyota</option>
        <option value="Honda">Honda</option>
      </select>

      <input
        type="number"
        name="yearRangeMin"
        placeholder="Min Year"
        value={filters.yearRange[0]}
        onChange={(e) => {
          const minYear = Number(e.target.value);
          setFilters(prev => ({ ...prev, yearRange: [minYear, prev.yearRange[1]] }));
        }}
      />

      <input
        type="number"
        name="yearRangeMax"
        placeholder="Max Year"
        value={filters.yearRange[1]}
        onChange={(e) => {
          const maxYear = Number(e.target.value);
          setFilters(prev => ({ ...prev, yearRange: [prev.yearRange[0], maxYear] }));
        }}
      />

      <input
        type="number"
        name="priceRangeMin"
        placeholder="Min Price"
        value={filters.priceRange[0]}
        onChange={(e) => {
          const minPrice = Number(e.target.value);
          setFilters(prev => ({ ...prev, priceRange: [minPrice, prev.priceRange[1]] }));
        }}
      />

      <input
        type="number"
        name="priceRangeMax"
        placeholder="Max Price"
        value={filters.priceRange[1]}
        onChange={(e) => {
          const maxPrice = Number(e.target.value);
          setFilters(prev => ({ ...prev, priceRange: [prev.priceRange[0], maxPrice] }));
        }}
      />

      <select name="fuelType" value={filters.fuelType} onChange={handleChange}>
        <option value="">All Fuel Types</option>
        <option value="Gasoline">Gasoline</option>
        <option value="Electric">Electric</option>
        <option value="Hybrid">Hybrid</option>
      </select>
    </div>
  );
}

export default Filters;
