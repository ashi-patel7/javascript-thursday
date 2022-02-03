const button = document.getElementById(`button`);
const input = document.getElementById(`input`);
const output = document.getElementById(`output`);

function get(URL){

  fetch(URL) //using fetch and providing the URL we want to get from
    .then((response) => {
      if (response.status !== 200) { //checking status code is 200 (successful), if it is true (anything but), status code is logged
        console.error(`status: ${response.status}`); //error code if anything but 200 status code
        return;
      }
      response.json() //if 200, code continues to execute - taking response from fetch and converting to JSON format using .json()
        .then(data => {
          output.innerHTML = JSON.stringify(data); //HTML output to see what our fetch is returning
        })
    }).catch((err) => { //this line will only execute if there is an error with the fetch itself
      console.error(`${err}`);
    });

}

// axios

read = URL => { //read is our GET request
  axios.get(URL) //get(URL) is the URL we want to get from
    .then((response) => {
      output.innerHTML = JSON.stringify(response.data); //cutting out the if statements above, we will get our HTML output to see what our fetch is returning in JSON format
    }).catch((err) => {  //this line will only execute if there is an error with the read itself
      console.log(err);
    })
}

create = URL => { //create is our POST request
  axios.post(URL, { //post(URL) is the URL we want to post to - post(URL, OBJECT)
    first_name: `Cameron`,  //manually creating object so we have something to post
    email : `cguthrie@qa.com` //when sending data we must give the data to send
  })
    .then((response) => {
      output.innerHTML = JSON.stringify(response.data); //response
    }).catch((err) => { //if create has an error itself
      console.log(err);
    })
}

button.onclick = () => create(input.value);


//GET request for single user id 2
read = URL => {
    axios.get('https://reqres.in/api/users/2')
        .then((response) => {
        output.innerHTML = JSON.stringify(response.data);
    }).catch((err) => {
        console.log(err);
    })
}

//POST request for create
create = URL => {
    axios.get('https://reqres.in/api/users', {
        first_name:'Morpheus',
        job:'leader'
    })
    .then((response) => {
        output.innerHTML = JSON.stringify(response.data);
    }).catch((err) => {
        console.log(err);
    })
}