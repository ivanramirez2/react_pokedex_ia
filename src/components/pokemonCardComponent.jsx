import { Col } from "react-bootstrap";

function PokemonCardComponent({ name, url }) {
    return (
        <>
            <Col lg={4}>
                {name}
                {url}
            </Col>
        </>
    )
}

export default PokemonCardComponent;