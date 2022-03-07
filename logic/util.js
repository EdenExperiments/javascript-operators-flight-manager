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


    return {calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers}
}

module.exports = Util();

