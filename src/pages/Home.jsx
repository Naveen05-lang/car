import { useCarContext } from '../context/CarContext';
import CarCard from '../components/CarCard/CarCard';
import ViewToggle from '../components/ViewToggle/ViewToggle';
import Filters from '../components/Filters/Filters';
import SortOptions from '../components/SortOptions/SortOptions';
import SearchBar from '../components/SearchBar/SearchBar';

function Home() {
  const { cars, viewMode } = useCarContext();

  return (
    <div className="home">
      <div className="controls">
        <SearchBar />
        <Filters />
        <SortOptions />
        <ViewToggle />
      </div>

      <div className={`car-list ${viewMode}`}>
        {cars.map(car => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
}

export default Home;
