import { useCarContext } from '../../context/CarContext';
import './ViewToggle.css';

function ViewToggle() {
  const { viewMode, toggleViewMode } = useCarContext();

  return (
    <div className="view-toggle">
      <button 
        onClick={toggleViewMode} 
        className={viewMode === 'grid' ? 'active' : ''}
      >
        Grid View
      </button>
      <button 
        onClick={toggleViewMode} 
        className={viewMode === 'flex' ? 'active' : ''}
      >
        Flex View
      </button>
    </div>
  );
}

export default ViewToggle;
