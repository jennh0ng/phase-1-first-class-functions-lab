// Code your solution in this file!
function returnFirstTwoDrivers(drivers) {
    const returnFirstTwo = function() {
        return drivers.slice(0,2);
    }
    return returnFirstTwo();
}

function returnLastTwoDrivers(drivers) {
    const returnLastTwo = function() {
        return drivers.slice((drivers.length-2), drivers.length);
    }
    return returnLastTwo();
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(fare) {
    const fareMult = function(price) {
        return (fare * price);
    }
    return fareMult;
}

function fareDoubler(fare) {
    const double = createFareMultiplier(fare);
        return double(2);
    }

function fareTripler(fare) {
    const triple = createFareMultiplier(fare);
        return triple(3);
    }

function selectDifferentDrivers(drivers, someFunction) {
    return someFunction(drivers);
}