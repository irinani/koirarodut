import { useState } from "react"
import './sass/main.scss';
import Header from './Header';
import Filters from './Filters';
import BreedItem from './BreedItem';
import breeds from './data/breeds';

const App = () => {
  const [filteredBreeds, setFilteredBreeds] = useState(breeds);
  const [sortOrder, setSortOrder] = useState('popular-desc');

  const filterBreeds = (e) => {
    const value = e.currentTarget.value;

    if (value.length > 2) {
      setFilteredBreeds(
        filteredBreeds.filter((breed) => {
          const objValues = Object.values(breed).toString();
          return objValues.toLocaleLowerCase().includes(value.toLocaleLowerCase());
        })
      );
    } else {
      sortBreeds(sortOrder, true);
    }
  };

  const sortBreeds = (value, isDefault = false) => {

    const breedsArray = isDefault ? breeds : filteredBreeds;

    setFilteredBreeds([...breedsArray].sort((a, b) => {
      if (value == 'alphabet-asc') {
        return a.name > b.name ? 1 : -1;
      } else if (value == 'alphabet-desc') {
        return a.name > b.name ? -1 : 1;
      } else if (value == 'popular-desc') {
        return a.amount > b.amount ? -1 : 1;
      } else if (value == 'popular-asc') {
        return a.amount > b.amount ? 1 : -1;
      }
    }))
  };

  const orderBreeds = (e) => {
    const value = e.currentTarget.value;
    setSortOrder(value);
    sortBreeds(value);
  };

  return (
    <div className="App">
      <Header />
      <Filters filterBreeds={filterBreeds} orderBreeds={orderBreeds} />
      <ul className="breeds container">
        {filteredBreeds.map((breed) =>
          <BreedItem key={breed.name} breed={breed} />
        )}
      </ul>
    </div>
  );
};

export default App;
