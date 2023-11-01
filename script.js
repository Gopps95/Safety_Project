// Declare an array to store previous results
var resultsArray = [];

function calculatePriority() {
    var o = parseFloat(document.getElementById("o").value);
    var s = parseFloat(document.getElementById("s").value);
    var d = parseFloat(document.getElementById("d").value);

    var result = o * s * d;
    resultsArray.push(result);

    // Sort the results array in descending order
    resultsArray.sort(function (a, b) {
        return b - a;
    });

    // Find the priority of the current result
    var priority = resultsArray.indexOf(result) + 1;

    document.getElementById("result").textContent = result;
    document.getElementById("priority").textContent = "Priority: " + priority;
}
