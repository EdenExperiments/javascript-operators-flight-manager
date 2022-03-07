function Flights() {
    
    function calculateNumberOfFlights(passengers, flightCapacity) {

        if (passengers < 0 || Number.isInteger(passengers)) {
            throw new Error("The number of passengers must be a positive integer value")
        } else if (flightCapacity < 0 || Number.isInteger(flightCapacity) {
            throw new Error("The capacity of the flight must be a positive integer value")
        } else {
            return Math.ceil(passengers / flightCapacity)
        }
    }

    function checkAircraftRevision(distanceLimit, distanceArray) {
        let totalDistance = 0;
        for (const distance of distanceArray) {
            totalDistance += distance;
        }

        if (totalDistance <= distanceLimit/2 ) {
            return "The revision needs to be done within the next 3 months"
        } else if (totalDistance <= distanceLimit * (3/4)) {
            return "The revision needs to be done within the next 2 months"
        } else if (totalDistance <= distanceLimit) {
            return "The revision needs to be done within the next month"
        } else {
            throw new Error("The total distance is greater than the distance limit")
        }
    }

    return {calculateNumberOfFlights, checkAircraftRevision}; 
}

module.exports = Flights();