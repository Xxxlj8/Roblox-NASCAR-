function showTab(tabName) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));
    document.getElementById(tabName).classList.add('active');
}

document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const fileInput = document.getElementById('fileInput');
    const files = fileInput.files;
    const previewContainer = document.getElementById('uploadPreview');

    previewContainer.innerHTML = ''; // Clear previous previews
    for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            previewContainer.appendChild(img);
        }
        reader.readAsDataURL(files[i]);
    }
});

document.getElementById('saveSchedule').addEventListener('click', function() {
    const scheduleEdit = document.getElementById('scheduleEdit').value;
    const events = scheduleEdit.split(',').map(event => event.trim());
    const scheduleTable = document.getElementById('scheduleTable').getElementsByTagName('tbody')[0];
    scheduleTable.innerHTML = ''; // Clear existing table content

    events.forEach(event => {
        const newRow = scheduleTable.insertRow();
        const cellEvent = newRow.insertCell(0);
        const cellLaps = newRow.insertCell(1);
        cellEvent.innerText = event; // Placeholder for event
        cellLaps.innerText = '200'; // Placeholder for laps
    });

    alert('Schedule updated!');
});
