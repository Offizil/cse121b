const search_button = document.querySelector("#submit_button");
const search_box = document.querySelector("#search_box");
const accessToken = "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";




search_form.addEventListener("submit", (event) => {
  event.preventDefault(); //Prevent the default form submission behavior
  // i changed from using click event on the submit button, 
  // ill be using the submit event on the frm itself since this is apparently more common

  // Get the user name from the search input and remove any spaces
  let userInput = document.querySelector("#search_box");

  userInput = userInput.value.split(" ").join("");

  
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

  
    


    let followers = data.followers;
    document.getElementById("followers").value = followers;


    let following = data.following;
    document.querySelector("#following").value = following;

    // let datejoined =  data.created_at;
    let joinFullDate = data.created_at;
            let dateStr = joinFullDate.substring(0,10)
            let dateSplit = dateStr.split("-")
            const monthNumber = dateSplit[1] - 1;
            const monthDay = dateSplit[0] ;
            const monthName = new Date(Date.UTC(0, monthNumber)).toLocaleString('en-US', { month: 'short' });

    document.querySelector("#created_at").value = `${monthName}, ${monthNumber}, ${monthDay}`;


    let updatedAt = data.updated_at;
    let dateStri = updatedAt.substring(0,10)
    let dateSplitt = dateStri.split("-")
    const monthNumberr = dateSplitt[1] - 1;
    const monthDayy = dateSplitt[0] ;
    const monthNamee = new Date(Date.UTC(0, monthNumber)).toLocaleString('en-US', { month: 'short' });
    
    document.querySelector("#updated_at").value = `${monthNamee}, ${monthNumberr}, ${monthDayy}`;


    let organization = data.organizations_url
    document.querySelector("#organizations").value = organization;

    let profile_pic = data.avatar_url;
    document.querySelector("#profilepic").src = profile_pic;

    
    let hmtl_profile = data.html_url;
    document.querySelector("#view_profile").href = hmtl_profile;

    let userid = data.login;
    document.querySelector("#user_id").value = "@" + userid;
    
    let reposs = data.public_repos;
    document.querySelector("#repo").value = reposs;


            
   
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
})