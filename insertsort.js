let insertNumbers = [5,1,4,8,2,10,7];
document.getElementById("insertText").innerHTML = insertNumbers.toString();
function insertSort() {
    for (let i=0; i < insertNumbers.length-1; i++) {
        let j=i;
        let pom=insertNumbers[i+1];
        while(insertNumbers[i] > pom && j >= 0){
            insertNumbers[j+1]=insertNumbers[j];
            j--;
        }
        insertNumbers[j+1]=pom;
    }
    document.getElementById("insertText").innerHTML = insertNumbers.toString();
}