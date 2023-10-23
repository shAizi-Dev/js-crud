const myTimeout = setTimeout(alertFunc, 3000);

function alertFunc() {
    document.getElementById("#form").innerHTML = alert("this is basic js conatct crud system when user load or refesh window and that time this alert show,then you press 'ok'.");
}


let i, el;
let data =[
    {firstname: "shahroz", lastname:"imtiaz", Email:"example@gmail.com", phonenum: 123345678},
];
let panel= document.querySelector("#panel");
function panelclick(){
    i=panel.selectedIndex;
    document.querySelector("#fname").value=data[i].firstname;
    document.querySelector("#lname").value=data[i].lastname;
    document.querySelector("#email").value=date[i].Email;
    document.querySelector("#num").value=data[i].phonenum;
}
function clearform(){
    document.querySelector("#fname").value="";
    document.querySelector("#lname").value="";
    document.querySelector("#email").value="";
    document.querySelector("#num").value="";
}
//  create submit function
function submitform(){
    let fn = document.querySelector("#fname").value;
    let ln = document.querySelector("#lname").value;
    let em = document.querySelector("#email").value;
    let num = document.querySelector("#num").value;

    // data = [...data, { firstname: fn, lastname: ln, Email: em, phonenum: num }];
    // console.log(data);
    // Check if first name is empty
    if (fn === "") {
        alert("First name cannot be empty");
        return false;
    }

    // Check if last name is empty
    if (ln === "") {
        alert("Last name cannot be empty");
        return false;
    }

    // Check if email is empty
    if (em === "") {
        alert("Email cannot be empty");
        return false;
    }

    // Check if phone number is empty
    if (num === "") {
        alert("Phone number cannot be empty");
        return false;
    }
    else{
        data = [...data, { firstname: fn, lastname: ln, Email: em, phonenum: num }];
    console.log(data);
    clearform();
    renderitem();
    }

    // if(fn==""||ln==""||em==""||num==""){
    //     alert("Please fill all fields!");
    // }else{
    //         // add to array or database
    //         console.log(`${fn}, ${ln}, ${em}, ${num}`);
    //         //clear form after submission
    //         data = [...data, { firstname: fn, lastname: ln, Email: em, phonenum: num }];
    //         console.log(data);
    //         clearform();
    //         renderitem();
    // }
} 
 
// renderitem function is used for default value as a example
function renderitem(){
    panel.textContent="";
    data.forEach(x=>{
    el=document.createElement("option");
    el.innerText =`   First name: ${x.firstname},   Last name :   ${x.lastname}  ,   Email:   ${x.Email}  ,   Phone#:    ${x.phonenum}`;
    panel.append(el);
    });
}
//  update function 
function updateform(){
    data[i].firstname= document.querySelector("#fname").value;
    data[i].lastname= document.querySelector("#lname").value;
    data[i]=Email= document.querySelector("#email").value;
    data[i]=phonenum= document.querySelector("#num").value;
    // we call renderitem function  to edit value 
    renderitem();
}
// delete  function to delete data in the form 
function deleteform(){
    data.splice(i, 1);
    renderitem();
}
renderitem();

