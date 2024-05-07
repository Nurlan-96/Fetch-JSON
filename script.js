async function fetchDataAndPopulateTable() {
    const response = await fetch('http://api.aladhan.com/v1/calendar/2017/4?latitude=51.508515&longitude=-0.1254872&method=2');
    const data = await response.json();
    const prayerTimesData = data.data;
    const tableBody = document.getElementById('prayerTimesBody');
    tableBody.innerHTML = '';
    prayerTimesData.forEach(data => {
        const row = document.createElement('tr');
        const dateCell = document.createElement('td');
        dateCell.textContent = data.date.readable;
        row.appendChild(dateCell);
        Object.values(data.timings).forEach(time => {
            const cell = document.createElement('td');
            cell.textContent = time;
            row.appendChild(cell);
        });
        tableBody.appendChild(row);
    });
}
window.onload = fetchDataAndPopulateTable;