function calculatePriority() {
    var o = parseFloat(document.getElementById("o").value);
    var s = parseFloat(document.getElementById("s").value);
    var d = parseFloat(document.getElementById("d").value);

    var result = o * s * d;
    var priority = "Low";

    if (result > 50) {
        priority = "High";
    } else if (result > 20) {
        priority = "Medium";
    }

    document.getElementById("result").textContent = result;
    document.getElementById("priority").textContent = priority;
}
