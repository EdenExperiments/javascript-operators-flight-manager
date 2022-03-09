function Prices() {
    function calculateFinalPrice(basePrice, passengerVariation, flightVariation) {
        const passengerPercentage =passengerVariation/100;
        const flightPercentage = flightVariation/100;
        const endPrice = basePrice + passengerPercentage * basePrice + flightPercentage * (basePrice + (passengerPercentage * basePrice));

        return endPrice
    }

    function calculateDefaultFinalPrice(basePrice, passengerType, flightType) {
        let passengerPercentage = 0;
        let flightPercentage = 0;

        if (passengerType.toLowerCase() === "regular") {
            passengerPercentage = -0.05;
        } else {
            passengerPercentage = 0.05;
        }

        if (flightType.toLowerCase() === "business") {
            flightPercentage = 0.10;
        } else {
            flightPercentage = -0.03;
        }

        return basePrice + passengerPercentage * basePrice + flightPercentage * (basePrice + (passengerPercentage * basePrice));
    }

    function calculateTotalFinalPrice(seats, passengerType, flightType, basePrice) {
        return seats * calculateDefaultFinalPrice(parseInt(basePrice), passengerType, flightType);
    }

    return {calculateFinalPrice, calculateDefaultFinalPrice, calculateTotalFinalPrice};
}

module.exports = Prices();