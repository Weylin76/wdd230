const url = 'https://weylin76.github.io/wdd230/final/data/rental.json'; 

async function populateTable() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const rentals = await response.json();

    const tableBody = document.querySelector('#rentalTable tbody');
    tableBody.innerHTML = '';
    
    rentals.forEach(rental => {
      const row = tableBody.insertRow();

      const rentalTypeCell = row.insertCell();
      rentalTypeCell.textContent = rental.RentalType;

      const maxPersonsCell = row.insertCell();
      maxPersonsCell.textContent = rental.MaxPersons;

      const reservationHalfDayCell = row.insertCell();
      reservationHalfDayCell.textContent = `$${rental.Reservation.HalfDay}`;

      const reservationFullDayCell = row.insertCell();
      reservationFullDayCell.textContent = `$${rental.Reservation.FullDay}`;

      const walkInHalfDayCell = row.insertCell();
      walkInHalfDayCell.textContent = `$${rental.WalkIn.HalfDay}`;

      const walkInFullDayCell = row.insertCell();
      walkInFullDayCell.textContent = `$${rental.WalkIn.FullDay}`;
    });

  } catch (error) {
    console.error('An error occurred while fetching table data:', error);
  }
}

window.addEventListener('load', populateTable);
