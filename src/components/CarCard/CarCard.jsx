import { useCarContext } from '../../context/CarContext';
import './CarCard.css';

function CarCard({ car }) {
  const { favorites, toggleFavorite } = useCarContext();

  const isFavorite = favorites.includes(car.id);

  return (
    <div className="car-card">
      <img style={{width:300,height:300}} src={car.image} alt={`${car.make} ${car.model}`} />
      <h2>{car.make} {car.model} ({car.year})</h2>
      <p><strong>Price:</strong> ${car.price}</p>
      <p><strong>Mileage:</strong> {car.mileage} miles</p>
      <p><strong>Fuel Type:</strong> {car.fuelType}</p>
      <p><strong>Transmission:</strong> {car.transmission}</p>
      <ul>
        {car.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button onClick={() => toggleFavorite(car.id)}>
        {isFavorite ? '❤️ Remove Favorite' : '🤍 Add Favorite'}
      </button>
    </div>
  );
}

export default CarCard;
