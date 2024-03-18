async function populateTable() {
  try {
    // Fetch the JSON data from the file
    const response = await fetch('data/rental.json'); // Make sure the path is correct
    const data = await response.json();

    // Get the tbody element where we will insert rows, not the entire table
    const tableBody = document.querySelector('#rentalTable tbody');
    tableBody.innerHTML = ''; // Clear existing table data

    // Iterate over each rental item and create table rows
    data.forEach(item => {
      const row = tableBody.insertRow();
      
      // Insert cells and set their text content
      const rentalTypeCell = row.insertCell();
      rentalTypeCell.textContent = item.RentalType;

      const maxPersonsCell = row.insertCell();
      maxPersonsCell.textContent = item.MaxPersons;

      const reservationHalfDayCell = row.insertCell();
      reservationHalfDayCell.textContent = `$${item.Reservation.HalfDay}`;

      const reservationFullDayCell = row.insertCell();
      reservationFullDayCell.textContent = `$${item.Reservation.FullDay}`;

      const walkInHalfDayCell = row.insertCell();
      walkInHalfDayCell.textContent = `$${item.WalkIn.HalfDay}`;

      const walkInFullDayCell = row.insertCell();
      walkInFullDayCell.textContent = `$${item.WalkIn.FullDay}`;
    });

  } catch (error) {
    console.error('An error occurred while fetching table data:', error);
  }
}

// Call the function to populate the table on window load
window.addEventListener('load', populateTable);