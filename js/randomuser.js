const loadUser = () =>{
    fetch('https://randomuser.me/api/?gender=female')
    .then(res => res.json())
    .then(data => displayUser(data))
}

const displayUser = user => {
    const genderTag = document.getElementById('gender')
    genderTag.innerHTML = user.results[0].gender;

    const name = document.getElementById('name');
    name.innerHTML = user.results[0].name.title + ' ' + user.results[0].name.first + ' ' + user.results[0].name.last;

    const location = document.getElementById('location');
    location.innerHTML = user.results[0].location.city + ' ' + user.results[0].location.country;

    console.log(user.results[0].picture.large);

    const imgContainer = document.getElementById('image-container');
    const imgDiv = document.createElement('div');
    imgDiv.innerHTML = `
        <h3>Image:</h3>
        <img src="${user.results[0].picture.large}" alt="">
    `
    imgContainer.appendChild(imgDiv);
}

loadUser();