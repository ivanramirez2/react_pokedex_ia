function formatPokedexPosition(order) {
    if (order < 10) {
        return "00" + order;
    } else if (order < 100) {
        return "0" + order;
    } else {
        return order;
    }
}

export default formatPokedexPosition;