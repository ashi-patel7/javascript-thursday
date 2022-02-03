// https://reqres.in/


const button = document.getElementById(`button`);
const input = document.getElementById(`input`);
const output = document.getElementById(`output`);
//button.onclick = () => read(input.value);
button.onclick = () => create(input.value); //CREATE request

// GET request list users
// 'https://reqres.in/api/users?page=2'
//read = URL => { //read = GET request
  //  axios.get(URL) //get(URL) = URL we want to get from
    //  .then((response) => {
      //  output.innerHTML = JSON.stringify(response.data); //read request returning in JSON format
      //}).catch((err) => {  //this line will only execute if there is an error with the read itself
    //    console.log(err);
   //   })
//  }

//GET request for single user id 2
// https://reqres.in/api/users/2

//POST request for create
// https://reqres.in/api/users

//create = URL => {
//            axios.post(URL, { //create = POST request
//                name:'Morpheus', //object
//                job:'leader'
//        })
//            .then((response) => {
//            output.innerHTML = JSON.stringify(response.data);
//        }).catch((err) => {
//            console.log(err);
//        })
//}

//POST request for Register successful
// https://reqres.in/api/register
//create = URL => {
  //              axios.post(URL, { //create = POST request
    //                email:'eve.holt@reqres.in', //object
      //              password:'pistol'
        //    })
          //      .then((response) => {
           //     output.innerHTML = JSON.stringify(response.data);
           // }).catch((err) => {
             //   console.log(err);
         //   })
 //   }
    
//POST request for Login successful
//https:reqres.in/api/login

create = URL => {
                axios.post(URL, { //create = POST request
                    email:'eve.holt@reqres.in', //OBJECT
                    password:'cityslicka'
                })
                    .then((response) => {
                    output.innerHTML = JSON.stringify(response.data);
                    })
    }
