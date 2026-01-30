import { useEffect, useState } from "react";
import "./pokemonCardComponent.css";
import { Col } from "react-bootstrap";
import { getPokemonDetails } from "../services/pokeApiService";
import formatPokedexPosition from "../services/helperService";

function PokemonCardComponent({ name, url }) {

    const [hp, sethp] = useState(0);
    const [pokedexPosition, setPokedexPosition] = useState("");
    const [image, setImage] = useState("");
    const [abilities, setAbilities] = useState([]);
    const [description, setDescription] = useState("");


    useEffect(() => {
        getPokemonDetails(url).then((response) => {
            sethp(response.stats[0].base_stat);
            setPokedexPosition(formatPokedexPosition(response.order));
            setImage(response.sprites.front_default);
            setAbilities(response.abilities.map((ability) => ability.ability.name));
            setDescription(response.species.name);
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
                            <img src={image} alt={name} />
                        </div>
                        <div className="pokemon-card-description">
                            <label className="life-stat">Abilities: {abilities.join(", ")}</label>
                            <label className="life-stat">Description: {description}</label>
                        </div>
                    </div>
                </div>
            </Col>
        </>
    )
}

export default PokemonCardComponent