const search_button = document.querySelector("#submit_button");
const search_box = document.querySelector("#search_box");
const accessToken = "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";
let userInput = document.querySelector("#search_box").value;

document.getElementById('search_form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Check if the pressed key is Enter (key code 13)
  if (event.key === 'Enter') {
    // Get the input value
    userInput = search_box.value.split(" ").join("");

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

search_button.addEventListener("click", () => {
  // Get the user name from the search input and remove any spaces
  userInput = userInput.split(" ").join("");

  
  // Get the 'user not found' element
	let userNotFound = document.getElementById("userNotFound");

  // send fetch request to GitHub API, acquire usser info
  fetch(`https://api.github.com/users/${userInput}`)
  .then(response => {
    if (!response.ok) {
      userNotFound.style.display = "block";
      throw new Error('Network response was not ok');  //might be rreduntant
    }
    else {
      userNotFound.style.display = "none";
      return response.json();
    }
    
  })
  .then(data => {

    let repos = data.public_repos;


    let followers = data.followers;
    document.querySelector("#followers").value = followers;


    let following = data.following;
    document.querySelector("#following").value = followers;

    let datejoined =  data.created_at;
    document.querySelector("#created_at").value = datejoined;


    let updatedAt = data.updated_at;
    document.querySelector("#updated_at").value = updatedAt;


    let organization = data.organization;
    document.querySelector("#organization").value = organization;

    let profile_pic = data.avatar_url;
    document.querySelector("profilepic").src = profile_pic;

    
    let hmtl_profile = data.html_url;
    document.querySelector("#view_profile").href = hmtl_profile;

    let userid = data.login;
    document.querySelector("#user_id").value = userid;




   
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
}
  
  






})