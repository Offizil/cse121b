/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: 'Edem Offiong',
    photo: 'images/passport.jpg',
    favoriteFoods: ['ekpangkukwo', 
    'afang',
    'pounded yam',
    'coconut Rice',
    ],
    hobbies: ['scrabble', 'anime', 'programming', 'chess', 'swimming', 'football', 'table tennis'],
    placesLived: [],


};



/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: 'Calabar, CRS',
        length: '24 years',
    }
)

myProfile.placesLived.push(
    {
        place: 'Uyo, Aks',
        length: '2 years'
    }
)

myProfile.placesLived.push(
    {
        place: 'Owo, Ondo',
        length: '4 months'
    }
)

myProfile.placesLived.push(
    {
        place: 'Amoyo complex, Illorin',
        length: '1 week'
    }
)


myProfile.placesLived.push(
    {
        place: 'Eket, Aks',
        length: '3 weeks'
    }
)


/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo;

document.querySelector('#photo').alt = myProfile.name;


/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
})

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
}

)


/* Places Lived DataList */
myProfile.placesLived.forEach((place) => {
    let placeName = document.createElement('dt');
    let lengthStayed = document.createElement('dd');
    placeName.textContent = place.place;
    lengthStayed.textContent = place.length;

    // document.querySelector('dt').appendChild('dd');

    document.querySelector('#places-lived').appendChild(placeName);
    document.querySelector('#places-lived').appendChild(lengthStayed);

})





