import { useState, useEffect } from 'react';
import PokemonCardComponent from '../components/pokemonCardComponent.jsx';
import { Row } from 'react-bootstrap';


import { getPokemons, getTypes, getPokemonsByType } from '../services/pokeApiService.jsx';
function Home({ searchTerm }) {
  const [pokemons, setPokemons] = useState([])
  const [offset, setOffset] = useState(0)
  const limit = 20

  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState('');

  useEffect(() => {
    getTypes().then((response) => {
      setTypes(response.results);
    });
  }, []);

  useEffect(() => {
    if (selectedType) {
      getPokemonsByType(selectedType).then((response) => {
        // The structure of response for type is different: { pokemon: [{ pokemon: { name, url } }] }
        const formattedPokemons = response.pokemon.map(p => p.pokemon);
        setPokemons(formattedPokemons);
      });
    } else {
      getPokemons(limit, offset).then((response) => {
        setPokemons(response.results)
      });
    }
  }, [offset, selectedType]);

  const filteredPokemons = pokemons.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
    setOffset(0); // Reset offset when changing type (though pagination is hidden for type)
  };


  return (

    <>
      <div className="d-flex gap-3 mb-4">
        <select className="form-select" value={selectedType} onChange={handleTypeChange}>
          <option value="">Tipos</option>
          {types.map((type) => (
            <option key={type.name} value={type.url}>
              {type.name}
            </option>
          ))}
        </select>

      </div>


      <Row>
        {filteredPokemons.map((pokemon) => (
          <PokemonCardComponent key={pokemon.name} name={pokemon.name} url={pokemon.url} />
        ))}
      </Row>

      {!selectedType && (
        <div className="d-flex justify-content-between mb-4 mt-4">
          <button
            className="btn btn-primary"
            onClick={() => setOffset(Math.max(0, offset - limit))}
            disabled={offset === 0}
          >
            Anterior
          </button>
          <button
            className="btn btn-primary"
            onClick={() => setOffset(offset + limit)}
          >
            Siguiente
          </button>
        </div>
      )}

    </>
  )
}

export default Home;