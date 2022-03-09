function Util() {

    function calculateTotalDistributedPassengers(distributionObject) {
        
        let totalPassengers = 0;

        for (const key in distributionObject) {
            totalPassengers += distributionObject[key];
        }
        return totalPassengers
    }

    function calculateTotalNumberOfPassengers(numbersArray) {
        let totalNumbers = 0;
        numbersArray.forEach(element => {
            totalNumbers += element;
        });
        return totalNumbers;
    }

    function checkInput(input) {
        if (!input || isNaN(input)) {
            throw new Error("Error with passenger input");
        }
    }

    function calculateTotalDistance(distanceArr) {
        let totalDistance = 0;
        for (const distance of distanceArr) {
            if (distance > 0) {
                totalDistance += distance;
            }
        }

        return totalDistance;
    }

    function calculateBonusPoints(distanceBusinessArr, distanceEconomyArr, businessPercent, economyPercent) {

        let businessPoints = (businessPercent/100) * calculateTotalDistance(distanceBusinessArr);
        let economyPoints = (economyPercent/100) * calculateTotalDistance(distanceEconomyArr)

        return businessPoints + economyPoints;
    }

    return {calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers, checkInput, calculateTotalDistance, calculateBonusPoints}
}

module.exports = Util();

