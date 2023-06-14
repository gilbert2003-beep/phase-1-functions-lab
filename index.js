// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation){
    return Math.abs(pickupLocation-42)
}
function distanceFromHqInFeet(pickupLocation){
    return distanceFromHqInBlocks(pickupLocation) * 264;
}
function distanceTravelledInFeet(startBlock, endBlock){
    return Math.abs(startBlock-endBlock) * 264
}
    function calculatesFarePrice(startBlock, endBlock) {
        // Call the distanceTravelledInFeet function to get the distance in feet
        let distance = distanceTravelledInFeet(startBlock, endBlock);
        // Declare a variable to store the fare
        let fare;
        // Use if-else statements to check the distance and assign the fare accordingly
        if (distance <= 400) {
        // If the distance is less than or equal to 400 feet, the fare is free
        fare = 0;
        } else if (distance > 400 && distance <= 2000) {
        // If the distance is between 400 and 2000 feet, the fare is 2 cents per foot for the extra distance
        fare = (distance - 400) * 0.02;
        } else if (distance > 2000 && distance <= 2500) {
        // If the distance is between 2000 and 2500 feet, the fare is fixed at 25 dollars
        fare = 25;
        } else {
        // If the distance is more than 2500 feet, the ride is not allowed
        fare = "cannot travel that far";
        }
        // Return the fare
        return fare;
        }

   