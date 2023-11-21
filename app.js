// create a function and following the progressions inside the function.

// Progression 1: Create a promise call which fetches data

const getData = () => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      // Progression 2: Display the fetched data in the form of list
      data.map((user) => {
        let player = document.createElement('div');
        player.classList = 'player';

        let name = document.createElement('div');
        name.innerHTML = user.name;
        let email = document.createElement('div');
        email.innerHTML = user.email;
        let phone = document.createElement('div');
        phone.innerHTML = user.phone;
        let website = document.createElement('div');
        website.innerHTML = user.website;
        let company = document.createElement('div');
        company.innerHTML = user.company.name;
        let city = document.createElement('div');
        city.innerHTML = user.address.city;
        let zipcode = document.createElement('div');
        zipcode.innerHTML = user.address.zipcode;

        player.append(name, email, phone, website, company, city, zipcode);

        document.getElementById('message').append(player);
      });
    })

    // Progression 3: When the promise call is rejected then throw an error
    .catch((error) => {
      console.log('Promise rejected.');
      console.log(error.message);
    });
};

// getData();
