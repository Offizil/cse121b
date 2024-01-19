/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Edem Offiong";

const currentDate = new Date();
const currentYear = currentDate. getFullYear();

let profilePicture = 'images/passport.jpg';



/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
let foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img'); // hope this works 





/* Step 4 - Adding Content */
nameElement.innerHTML = fullName;
nameElement.innerHTML = `<strong>${fullName}</strong}>`;

yearElement.textContent = currentYear;

// nameElement.textContent = currentYear;
// nameElement.textContent = currentYear;


imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);








/* Step 5 - Array */

let FaveFoods = ['coconut rice', 'afang soup', 'melon soup', 'jollof rice',];

foodElement.innerHTML = FaveFoods;
console.log(FaveFoods); //display 

let faveFoodOat = 'Bread';

// Add the value stored in this new 
// variable to your favorite food array.
FaveFoods.push(faveFoodOat);


// Append the new array values onto 
// the displayed content of the HTML 
// element with the id of food using a += operator

foodElement.innerHTML += `<br>${FaveFoods}`;


// Remove the first element in the favorite food array.
FaveFoods.shift();

// Append the array output showing 
// the modified array, using a line break as shown
foodElement.innerHTML += `<br>${FaveFoods}`;
console.log(foodElement);

// Remove the last element in the favorite food array.
FaveFoods.pop();

// Append the array output with this final modified
// favorite foods array. Hint: Step 5.5

// foodElement.innerHTML = FaveFoods;
foodElement.innerHTML += `<br>${FaveFoods}`;








