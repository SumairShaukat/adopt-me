import { useState } from "react";

const Animals = ["dog", "cat", "rabbit", "snake"];
const SearchParams = () => {
  const [animal, setAnimal] = useState("");
  const [location, setLocation] = useState("Seattle, WA");
  const [breed, setBreed] = useState();

  const breeds = [];
  return (
    <div className="search-params">
      <form>
        <lable htmlFor="location">
          <input
            id="location"
            onChange={(e) => setLocation(e.target.value)}
            value={location}
            placeholder="Location"
          />
        </lable>
        <lable htmlFor="animal">
          animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => setAnimal(e.target.value)}
          >
            <option />
            {Animals.map((animal) => (
              <option key="animal">{animal}</option>
            ))}
          </select>
        </lable>

        <lable htmlFor="animal">
          breed
          <select
            id="animal"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          >
            <option />
            {breeds.map((breed) => (
              <option key="breed">{animal}</option>
            ))}
          </select>
        </lable>
        <button>submit</button>
      </form>
    </div>
  );
};
export default SearchParams;
