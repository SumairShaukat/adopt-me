import { useState, useEffect } from "react";
import Results from "./Results";
const Animals = ["dog", "cat", "rabbit", "snake"];
const SearchParams = () => {
  const [animal, setAnimal] = useState("");
  const [location, setLocation] = useState("Seattle, WA");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);

  useEffect(() => {
    requestPets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const requestPets = async () => {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();
    setPets(json.pets);
  };

  const breeds = [];
  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
        <lable htmlFor="location">
          <input
            id="location"
            onChange={(e) => setLocation(e.target.value)}
            value={location}
            placeholder="Location"
          />
        </lable>
        <lable htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            key={animal.id}
            onChange={(e) => {
              setAnimal(e.target.value);
              setBreed("");
            }}
          >
            <option />
            {Animals.map((animal) => (
              <option key="animal">{animal}</option>
            ))}
          </select>
        </lable>

        <lable htmlFor="breed">
          Breed
          <select
            key={breed.id}
            id="breed"
            disabled={breeds.length === 0}
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          >
            <option />
            {breeds.map((breed) => (
              <option key="breed">{breed}</option>
            ))}
          </select>
        </lable>
        <button>submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};
export default SearchParams;
