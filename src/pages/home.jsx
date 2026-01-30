import { useState, useEffect } from 'react';
import PokemonCardComponent from '../components/pokemonCardComponent.jsx';
import { Row } from 'react-bootstrap';


import { getPokemons } from '../services/pokeApiService.jsx';
function Home() {
  const [pokemons, setPokemons] = useState([])


  useEffect(() => {
    getPokemons().then((response) => {
      setPokemons(response.results)
    });


  }, []);

  return (

    <>
      <Row>
        {pokemons.map((pokemon) => (
          <PokemonCardComponent key={pokemon.name} name={pokemon.name} url={pokemon.url} />
        ))}
      </Row>

    </>
  )
}

export default Home;