let search_button = document.querySelector("#submit_button");

let search_box = document.querySelector("#search_box");

const accesstoken = "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";

let userInput = document.querySelector("#search_box").value;




// fetch(`https://api.github.com/users/${userInput}`, {
//   headers: {
//     Authorization: `Bearer ${accesstoken}`,
//   },
// })
//   .then(response => {
//     if (!response.ok){
//       throw new Error('Network respone is not okay');
//     }
//    return response.json();
//     })
//   .then(data => console.log(data))
//   .catch(error => console.error('Error:', error));








//   const userData = async () => {
//     const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
//     templeList = await response.json();

//     displayTemples(templeList);
//     console.log(templeList);


// }

document.getElementById('search_form').addEventListener('submit', function(event) {
  event.preventDefault();
  // Check if the pressed key is Enter (key code 13)
  if (event.key === 'Enter') {
    // Get the input value
    // userInput = this.value;

    // Make the fetch request
    fetch(`https://api.github.com/users/${userInput}`, {
      headers: {
        Authorization: `Bearer ${accesstoken}`,
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }
});

