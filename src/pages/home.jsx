import { useState, useEffect } from 'react';
import PokemonCardComponent from '../components/pokemonCardComponent.jsx';
import { Row } from 'react-bootstrap';


import { getPokemons } from '../services/pokeApiService.jsx';
function Home() {
  const [pokemons, setPokemons] = useState([])
  const [offset, setOffset] = useState(0)
  const limit = 20


  useEffect(() => {
    getPokemons(limit, offset).then((response) => {
      setPokemons(response.results)
    });
  }, [offset]);

  return (

    <>


      <Row>
        {pokemons.map((pokemon) => (
          <PokemonCardComponent key={pokemon.name} name={pokemon.name} url={pokemon.url} />
        ))}
      </Row>

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

    </>
  )
}

export default Home;