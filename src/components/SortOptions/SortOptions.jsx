import { useCarContext } from '../../context/CarContext';
import './SortOptions.css';

function SortOptions() {
  const { sortOption, setSortOption } = useCarContext();

  return (
    <div className="sort-options">
      <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
        <option value="">Sort By</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="year-newest">Year: Newest</option>
        <option value="year-oldest">Year: Oldest</option>
        <option value="mileage-asc">Mileage: Low to High</option>
        <option value="mileage-desc">Mileage: High to Low</option>
      </select>
    </div>
  );
}

export default SortOptions;
