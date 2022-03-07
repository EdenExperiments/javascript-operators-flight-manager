const { supportsEsModules } = require("mocha/lib/utils");

function Passengers() {
    function checkFlightCapacity(flightCapacity, passengerNumbers) {
        let totalPassengers = 0;
        for (const number of passengerNumbers) {
            totalPassengers += number;
        }

        if (totalPassengers < flightCapacity) {
            return totalPassengers
        } else {
            throw new Error("The number of passengers is greater than the flight capacity")
        }
        
    }

    function distributeAllSeatsToAllPassengers(vipPassengers, regularPassengers, NoFlights, businessSeatsPerFlight, economySeatsPerFlight) {
        
        let seatDistribution = {
            vipPassengersWithBusinessSeats: 0,
            vipPassengersWithEconomySeats: 0,
            regularPassengersWithBusinessSeats: 0,
            regularPassengersWithEconomySeats: 0
        }

        let totalVipSeats = NoFlights * businessSeatsPerFlight;
        let totalEconSeats = NoFlights * economySeatsPerFlight;

        while (totalVipSeats > 0) {
            if (vipPassengers > 0) {
                seatDistribution.vipPassengersWithBusinessSeats += 1;
                vipPassengers -= 1;
                totalVipSeats -= 1;
            } else if (regularPassengers > 0) {
                seatDistribution.regularPassengersWithBusinessSeats += 1;
                regularPassengers -= 1;
                totalVipSeats -= 1;
            } else {
                break
            }
            
        }

        while (totalEconSeats > 0) {
            if (vipPassengers > 0) {
                seatDistribution.vipPassengersWithEconomySeats += 1;
                vipPassengers -= 1;
                totalEconSeats -= 1;
            } else if (regularPassengers > 0) {
                seatDistribution.regularPassengersWithEconomySeats += 1;
                regularPassengers -= 1;
                totalEconSeats -= 1;
            } else {
                break 
            }
            
        }
        
        return seatDistribution
    }



    return {checkFlightCapacity, distributeAllSeatsToAllPassengers};
}

module.exports = Passengers();


