let selectNumbers = [5,1,4,8,2,10,7];
document.getElementById("selectText").innerHTML = selectNumbers.toString();
function selectSort() {
    for (let i = 0; i < selectNumbers.length; i++) {
        let prom = i;
        for (let j = i + 1; j < selectNumbers.length; j++) {
            if (selectNumbers[prom] > selectNumbers[j]) {
                prom=j;
            }
        }
        let prom2 = selectNumbers[i];
        selectNumbers[i] = selectNumbers[prom];
        selectNumbers[prom] = prom2;
    }
    document.getElementById("selectText").innerHTML = selectNumbers.toString();
}