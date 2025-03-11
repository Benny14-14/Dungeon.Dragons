<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Spieler 1 | D&D</title>
</head>
<body>
    <h1>Willkommen, Spieler 1!</h1>
    <p>Hier sind deine aktuellen Werte:</p>

    <table id="data-table" border="1">
        <thead>
            <tr>
                <th>Name</th>
                <th>HP</th>
                <th>Mana</th>
            </tr>
        </thead>
        <tbody></tbody>
    </table>

    <script>
        // Google Sheets CSV-URL (veröffentlicht)
        const SHEET_URL = "https://docs.google.com/spreadsheets/d/e/DEINE_SHEET_ID/pub?output=csv";

        async function fetchData() {
            const response = await fetch(SHEET_URL);
            const data = await response.text();
            updateTable(data);
        }

        function updateTable(csvText) {
            const rows = csvText.split("\n").map(row => row.split(","));
            const tableBody = document.querySelector("#data-table tbody");
            tableBody.innerHTML = "";

            rows.forEach(row => {
                let tr = document.createElement("tr");
                row.forEach(cell => {
                    let td = document.createElement("td");
                    td.textContent = cell;
                    tr.appendChild(td);
                });
                tableBody.appendChild(tr);
            });
        }

        // Daten alle 10 Sekunden aktualisieren
        fetchData();
        setInterval(fetchData, 10000);
    </script>
</body>
</html>
