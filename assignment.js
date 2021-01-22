// https://github.com/bmrabiulalam/phero-b3-milestone3-assignment

// Assignment 1
function kilometerToMeter(kilometer) {
    let meter = 0;
    if (kilometer > 0) {
        meter = kilometer * 1000; // 1 kilometer = 1000 meter
        return meter;
    } else {
        return "INPUT ERROR: Invalid Input Type! Input any number that is greater than 0.";
    }
}
// console.log(kilometerToMeter(11.55));

// Assignment 2
// 3 Function Input Parameters for the amount of each item
function budgetCalculator(amountOfWatch, amountOfPhone, amountOfLaptop) {
    if (
        Number.isInteger(amountOfWatch) &&
        Number.isInteger(amountOfPhone) &&
        Number.isInteger(amountOfLaptop) &&
        amountOfWatch > 0 &&
        amountOfPhone > 0 &&
        amountOfLaptop > 0
    ) {
        let totalBudgetAmount = 0,
            totalWatchBudget = 0,
            totalPhoneBudget = 0,
            totalLaptopBudget = 0;

        totalWatchBudget = amountOfWatch * 50; // Given Watch price is 50
        totalPhoneBudget = amountOfPhone * 100; // Given Phone price is 100
        totalLaptopBudget = amountOfLaptop * 500; // Given Laptop price is 500

        totalBudgetAmount = totalWatchBudget + totalPhoneBudget + totalLaptopBudget;

        return totalBudgetAmount;
    }
    else {
        return "INPUT ERROR: Invalid Input type! Input any positive integer number.";
    }
}
// console.log(budgetCalculator(4, 2, 1));

// Assignment 3
function hotelCost(livingDays) {
    let totalCost = 0,
        firstTenDayPrice = 100, // Given Living cost for first 10 days is 100
        secondTenDayPrice = 80, // Given Living cost for second 10 days is 80
        laterDayPrice = 50; // Given Living cost for later days after first 20 days is 50

    if (livingDays > 0) {
        if (!Number.isInteger(livingDays)) {
            return "INPUT ERROR: Input an integer number.";
        } else if (livingDays <= 10) {
            totalCost = livingDays * firstTenDayPrice;
        } else if (livingDays <= 20) {
            totalCost += 10 * firstTenDayPrice;
            totalCost += (livingDays - 10) * secondTenDayPrice;
        } else {
            totalCost += 10 * firstTenDayPrice;
            totalCost += 10 * secondTenDayPrice;
            totalCost += (livingDays - 20) * laterDayPrice;
        }
        return totalCost;
    } else {
        return "INPUT ERROR: Invalid Input Type! Input any integer number of days that is greater than 0.";
    }
}
// console.log(hotelCost(7));

// Assignment 4
function megaFriend(friendNames) {
    // friendNames parameter would be an array of strings
    let megaFriendName = "";
    if (Array.isArray(friendNames)) { // check if the input is an array
        if(friendNames.length > 0){
            for (let i = 0; i < friendNames.length; i++) {
                // Take the i'th string of the array to compare the length with "megaFriendName" variable
                let friendName = friendNames[i];
                if (typeof friendName === 'string' || friendName instanceof String){
                    // Compare the length of "friendName" with "megaFriendName" variable
                    // to find the longest string and storing it to "megaFriendName"
                    if (friendName.length > megaFriendName.length) {
                        megaFriendName = friendName;
                    }
                }
                else{
                    return "INPUT ERROR: Invalid Array Elements! All elements in the input array should be string.";
                }          
            }
            return megaFriendName;
        }
        else{
            return "INPUT ERROR: Empty Array! ";
        }
    }
    else {
        return "INPUT ERROR: Invalid Input Type! Input should be an array of strings.";
    }
}
// let names = ["John", "Doe", "Smith", "Donald", "Hysenberg"];
// console.log(megaFriend([]));
