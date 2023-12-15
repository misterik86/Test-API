function getToken() {
  fetch('https://restful-booker.herokuapp.com/auth', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: 'admin',
      password: 'password123'
    })
  })
  .then(response => response.json())
  .then(data => {
    console.log(data.token);
  })
  .catch(error => {
    console.error('Error:', error);
  });
}

function getBookingIds() {
  fetch('https://restful-booker.herokuapp.com/booking')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
}

function getBooking(bookingId) {
  fetch(`https://restful-booker.herokuapp.com/booking/${bookingId}`)
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
}

function createBooking() {
  fetch('https://restful-booker.herokuapp.com/booking', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      firstname: 'Jim',
      lastname: 'Brown',
      totalprice: 111,
      depositpaid: true,
      bookingdates: {
        checkin: '2018-01-01',
        checkout: '2019-01-01'
      },
      additionalneeds: 'Breakfast'
    })
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
}

function updateBooking(bookingId) {
  fetch(`https://restful-booker.herokuapp.com/booking/${bookingId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Cookie': 'token=abc123'
    },
    body: JSON.stringify({
      firstname: 'James',
      lastname: 'Brown',
      totalprice: 111,
      depositpaid: true,
      bookingdates: {
        checkin: '2018-01-01',
        checkout: '2019-01-01'
      },
      additionalneeds: 'Breakfast'
    })
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
}

function partialUpdateBooking(bookingId) {
  fetch(`https://restful-booker.herokuapp.com/booking/${bookingId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Cookie': 'token=abc123'
    },
    body: JSON.stringify({
      firstname: 'James',
      lastname: 'Brown'
    })
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
}

function deleteBooking(bookingId) {
  fetch(`https://restful-booker.herokuapp.com/booking/${bookingId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Cookie': 'token=abc123'
    }
  })
  .then(response => {
    console.log('Booking deleted.');
  })
  .catch(error => {
    console.error('Error:', error);
  });
}

function pingHealthCheck() {
  fetch('https://restful-booker.herokuapp.com/ping')
  .then(response => {
    console.log('API is up and running.');
  })
  .catch(error => {
    console.error
