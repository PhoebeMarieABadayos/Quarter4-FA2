function table() {

    var start = parseInt(document.getElementById("start").value);
    var end = parseInt(document.getElementById("end").value);

    if (isNaN(start) || isNaN(end) || start < 2 || end > 10 || start > end) {
        alert("Please enter numbers between 2 and 10");
        document.getElementById("table").innerHTML = "";
        return;
    }

    var table = "<table><thead><tr><th>x</th>";

    for (var i = start; i <= end; i++) {
        table += `<th>${i}</th>`;
    }
    table += "</tr></thead><tbody>";

    for (var i = start; i <= end; i++) {
        table += `<tr><th>${i}</th>`;
        for (var j = start; j <= end; j++) {
            table += `<td>${i * j}</td>`;
        }
        table += "</tr>";
    }

    table += "</tbody></table>";
    document.getElementById("table-container").innerHTML = table;
}