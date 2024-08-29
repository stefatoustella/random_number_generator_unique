var i;
var j;
var numbersArray = [];
var Found;
var count = 0;

for (i = 0; i < 10; i++) {
    Found = false;

    let randomNumber = Math.floor(Math.random() * 10 + 1);

    if (i == 0) {
        numbersArray[i] = randomNumber;
    } else {
        for (j = 0; j < numbersArray.length; j++) {
            if (randomNumber == numbersArray[j]) {
                Found = true;
                i--;
                break;
            }
        }
        if (Found == false) {
            count++;
            numbersArray[count] = randomNumber;
        }
    }
}

for (k = 0; k < 10; k++) {
    document.write(numbersArray[k] + "<br>");
}