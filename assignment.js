// https://github.com/MdShafique/Javascript-Problem-Solving


//====javascript Kilometer to Meter converter problem solution===//
function kilometerToMeter(number){
    var result = number * 1000;
    if(number > 0 ){
        return result;
    }
    else{
        return "I find My Father-in-law's house";
    }

}

var finalResult = kilometerToMeter(-13);
console.log(finalResult);

//=== Javascript budgetCalculator problem solution===//

function budgetCalculator(num1, num2, num3){
    var watchPrice = num1 * 50;
    var mobilePrice = num2 * 100;
    var laptopPrice = num3 * 500;
    var totalPrice = watchPrice + mobilePrice + laptopPrice;
    if (num1 >= 0 && num2 >= 0 && num3 >= 0){
        return totalPrice;
    }
    else {
        return "You must buy atleast 3 items";
    }
}

var totalcost = budgetCalculator(5,6);
console.log(totalcost);


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
      var result = hotelCost(30);
      console.log(result);

//=== Javascript finding largest array problem solution  ===/

function megaFriend(arr){
    var largest="";

    for(var i=0;i<arr.length;i++){

       if (arr[i].length>largest.length){
          largest=arr[i];
       }
    } 
    return largest;
 }
 
  var result = megaFriend(["olil", "kolil", "jolilor", "tolilas"]);
  console.log(result);