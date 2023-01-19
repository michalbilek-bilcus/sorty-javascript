let bubbleNumbers = [5,1,4,8,2,10,7];
document.getElementById("bubbleText").innerHTML = bubbleNumbers.toString();
function bubbleSort() {
    for (let i = 0; i < bubbleNumbers.length - 1; i++) {
        let prom = false;
        if (prom === false) {
            for (let j = 0; j < bubbleNumbers.length - i - 1; j++) {
                if (bubbleNumbers[j] > bubbleNumbers[j+1]) {
                    prom = true;
                    let save = bubbleNumbers[j];
                    bubbleNumbers[j] = bubbleNumbers[j+1];
                    bubbleNumbers[j+1] = save;
                }
            }
        }
    }
    document.getElementById("bubbleText").innerHTML = bubbleNumbers.toString();
}