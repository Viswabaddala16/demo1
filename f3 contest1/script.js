var nameInput = document.getElementById("name");
var professionInput = document.getElementById("profession");
var ageInput = document.getElementById("age");
var button = document.getElementById("adduser");
button.addEventListener("click",() => {
    var name = nameInput.value;
    var profession = professionInput.value;
    var age = ageInput.value;
    if(name == "" || age == "" || profession == ""){
        document.querySelector(".status-msg").style.display= "block";
        document.querySelector(".status-msg").style.display= "red";
    }else{

        document.querySelector(".employees-container").innerHTML += `
        <div class="employee-card" id="id-${name}-${profession}-${age}">
            <div class="employee-details">
                <span>Name: ${name}</span>
                <span>Profession: ${profession}</span>
                <span>Age: ${age}</span> 
            </div>
            <button id="del-user-btn" onclick="deleteUser('id-${name}-${profession}-${age}')">Delete User</button>
        </div>
        `;
    }
});
function deleteUser(id){
    var userToDel = document.getElementById("id");
    console.log(userToDel);
    document.querySelector(".employees-container").removeChild(userToDel);
    alert("user is deleted");
}
