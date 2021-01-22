// https://github.com/MdShafique/Javascript-Problem-Solving


//====javascript Kilometer to Meter converter problem solution===//

function kilometerToMeter(number){
    var result = number * 1000;
    if(number > 0 ){
        return result;
    }
    else{
        return "Please Insert Positive Value";
    }

}

// var finalResult = kilometerToMeter(23);
// console.log(finalResult);

//=== Javascript budgetCalculator problem solution===//

function budgetCalculator(value1, value2, value3){
    var watchPrice = value1 * 50;
    var mobilePrice = value2 * 100;
    var laptopPrice = value3 * 500;
    var totalPrice = watchPrice + mobilePrice + laptopPrice;
    if (value1 >= 0 && value2 >= 0 && value3 >= 0){
        return totalPrice;
    }
    else {
        return "Please Insert Three Value ";
    }
}

// var totalcost = budgetCalculator(5, 6, 3);
// console.log(totalcost);


// ===javascript hotelCost problem solution===//

function hotelCost(dayInHire){
    var totalCost = 0;
    if (dayInHire <=10) {
        totalCost = dayInHire * 100;
    } 
    else if (dayInHire <=20) {
        var firstTenDays = 10 * 100;
        var totelCost = dayInHire -10;
        var afterTenDays = totelCost * 80;    
        totalCost = firstTenDays + afterTenDays;
    } 
    else {
        var firstTenDays = 10 * 100;
        var afterTenDays = 10 * 80;
        var totelCost = dayInHire - 20;
        var lastDays = totelCost * 50;
        totalCost =  firstTenDays + afterTenDays + lastDays;
    }
      return totalCost;
}
    //   var result = hotelCost(30);
    //   console.log(result);

//=== Javascript finding largest array problem solution  ===/


function megaFriend(listOfArray){
    var largest="";

    for(var i=0;i<listOfArray.length; i++){

       if (listOfArray[i].length>largest.length){
          largest=listOfArray[i];
       }
    } 
    return largest;
 }
 
//   var result = megaFriend(["olil", "kolil", "jolilor", "tolilas"]);
//   console.log(result);