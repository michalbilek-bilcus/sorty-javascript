let quickNumbers = [5,1,4,8,2,10,7];
document.getElementById("quickText").innerHTML = quickNumbers.toString();
function quickSort(left, right) {
    if (left < right) {
        let sum = left;
        for (let i = left; i < right; i++) {
            if (quickNumbers[i] < quickNumbers[left]) {
                swap(i, ++sum);
            }
        }
        swap(left, sum)
        quickSort(left, sum);
        quickSort(sum+1, right);
    }
    document.getElementById("quickText").innerHTML = quickNumbers.toString();
}

function swap(left, right) {
    let prom = quickNumbers[right];
    quickNumbers[right] = quickNumbers[left];
    quickNumbers[left] = prom;
}