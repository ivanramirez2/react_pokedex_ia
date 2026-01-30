import { useEffect, useState } from "react";
import "./pokemonCardComponent.css";
import { Col } from "react-bootstrap";
import { getPokemonDetails } from "../services/pokeApiService";
import formatPokedexPosition from "../services/helperService";

function PokemonCardComponent({ name, url }) {

    const [hp, sethp] = useState(0);
    const [pokedexPosition, setPokedexPosition] = useState("");


    useEffect(() => {
        getPokemonDetails(url).then((response) => {
            sethp(response.stats[0].base_stat);
            setPokedexPosition(formatPokedexPosition(response.order));
        });
    }, [url]);

    return (
        <>
            <Col lg={4}>
                <div className="pokemon-card-main">
                    <div className="pokemon-card-container">
                        <div className="pokemon-card-header">
                            <div>
                                <h4>{name}</h4>

                            </div>
                            <div>
                                <label className="life-stat">HP: {hp}</label>
                                <label className="pokedex-position">#{pokedexPosition}</label>
                            </div>
                        </div>
                        <div className="pokemon-card-image-container">
                            <img src="" alt="" />
                        </div>
                        <div className="pokemon-card-description">

                        </div>
                    </div>
                </div>
            </Col>
        </>
    )
}

export default PokemonCardComponent