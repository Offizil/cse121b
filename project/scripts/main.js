// let search_button = document.querySelector("#submit_button");

// let search_box = document.querySelector("#search_box");

// const accesstoken = "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";

// let userInput = document.querySelector("#search_box").value;



// document.getElementById('search_form').addEventListener('submit', function(event) {
//   event.preventDefault();
//   // Check if the pressed key is Enter (key code 13)
//   if (event.key === 'Enter') {
//     // Get the input value
//     userInput = search_box.value;

//     // Make the fetch request
//     fetch(`https://api.github.com/users/${userInput}`, {
//       headers: {
//         Authorization: `Bearer ${accesstoken}`,
//       },
//     })
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then(data => {
//       //   console.log(data);
//       // })
//       // .catch(error => {
//       //   console.error('There was a problem with the fetch operation:', error);
//       // });


//       // Display the user data as JSON in the info_card
//       document.getElementById('repo').value = data.public_repos;
//       document.getElementById('followers').value = data.followers;
//       document.getElementById('following').value = data.following;
//       })
//       .catch(error => {
//         console.error('There was a problem with the fetch operation:', error);
//       });

    
//     })
  

let search_button = document.querySelector("#submit_button");
let search_box = document.querySelector("#search_box");
const accessToken = "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";
let userInput = document.querySelector("#search_box").value;

document.getElementById('search_form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Check if the pressed key is Enter (key code 13)
  if (event.key === 'Enter') {
    // Get the input value
    userInput = search_box.value;

    // Make the fetch request
    fetch(`https://api.github.com/users/${userInput}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // Display the user data as JSON in the info_card
      document.getElementById('repo').value = data.public_repos;
      document.getElementById('followers').value = data.followers;
      document.getElementById('following').value = data.following;
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
  }
});

