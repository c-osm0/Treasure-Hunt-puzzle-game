const dashlink = document.getElementById("dashlink")
const dashsec = document.getElementById("dashsection")
const userslink = document.getElementById("userslink")
const usersec = document.getElementById("usersection")
const analylink = document.getElementById("analylink")
const scorelink = document.getElementById("scorelink")
const namelist = document.getElementsByClassName("namelist")
const emaillist = document.getElementsByClassName("emaillist")
const datelist = document.getElementsByClassName("datelist")
const activity = document.getElementById("activity-data")
const userlist = document.getElementById("userlist")

const body = document.querySelector("body"),
    modeToggle = body.querySelector(".mode-toggle");
sidebar = body.querySelector("nav");
sidebarToggle = body.querySelector(".sidebar-toggle");

let getMode = localStorage.getItem("mode");
if (getMode && getMode === "dark") {
    body.classList.toggle("dark");
}

let getStatus = localStorage.getItem("status");
if (getStatus && getStatus === "close") {
    sidebar.classList.toggle("close");
}

modeToggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    if (body.classList.contains("dark")) {
        localStorage.setItem("mode", "dark");
    } else {
        localStorage.setItem("mode", "light");
    }
});

sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
    if (sidebar.classList.contains("close")) {
        localStorage.setItem("status", "close");
    } else {
        localStorage.setItem("status", "open");
    }
})
const api_url = "http://localhost:8800/api/users/";
async function getapi(url) {

    // Storing response
    const response = await fetch(url);

    // Storing data in form of JSON
    var data = await response.json();
    // if (response) {
    //     hideloader();
    // }
    if (data) {
        show(data)
        recent(data)
        dashboard(data)
        score(data)
        makegraph(data)
    }
}
// function getMinY(){
//     return data.reduce((min, b) => Math.min(min, b.score), data[0].score);
//   }
//   function getMaxY(){
//     return data.reduce((max, b) => Math.max(max, b.score), data[0].score);
//   }
function dashboard(data)
{   
    document.getElementById("totalplayers").innerHTML = data.length;
    document.getElementById("maxtime").innerHTML = data.reduce((max, b) => Math.max(max, b.score), data[0].score) + " seconds";
    document.getElementById("mintime").innerHTML = data.reduce((min, b) =>  Math.min(min, b.score), data[0].score) + " seconds";

   
}
function recent(data){
    let tab =
        `<tr>
          <th>Username</th>
          <th>Email</th>
          <th>Last signed</th>
          <th>Score</th>
         </tr>`;

    // Loop to access all rows 
    data.forEach(r => {
        console.log(r);
        let value,value2,value3,dt
        if (r.isAdmin)
         {  value = "Admin"
            value2="Make Admin"

         }   
        else
            value = "Player"
            if(!r.score)value3="Not played"
            else value3=r.score
         dt=r.updatedAt.slice(0,10)
        tab += `<tr> 
        <td>${r.username} </td>
        <td>${r.email}</td>
        <td>${dt}</td>          
        <td>${value3}</td>          
    </tr>`;

        
    })
    document.getElementById("recentdata").innerHTML = tab;
}
function show(data) {

    console.log(data)

    let tab =
        `<tr>
          <th>Username</th>
          <th>Email</th>
          <th>Creation Date</th>
          <th>Type</th>
          <th>Score</th>
         </tr>`;

    // Loop to access all rows 
    data.forEach(r => {
        console.log(r);
        let value,value2,value3,dt
        if (r.isAdmin)
         {  value = "Admin"
            value2="Make Admin"

         }   
        else
            value = "Player"
            if(!r.score)value3="Not played"
            else value3=r.score
         dt=r.createdAt.slice(0,10)
        tab += `<tr> 
        <td>${r.username} </td>
        <td>${r.email}</td>
        <td>${dt}</td> 
        <td>${value}</td>          
        <td>${value3}</td>          
    </tr>`;

        
    })
    document.getElementById("data").innerHTML = tab;

}
function score(data) {

    console.log(data)

    let tab =
        `<tr>
          <th>Username</th>
          <th>Last Online</th>
          <th>Score</th>
         </tr>`;

    // Loop to access all rows 
    data.forEach(r => {
        console.log(r);
        let dt
        dt=r.updatedAt.slice(0,10)
        tab += `<tr> 
        <td>${r.username} </td>
        <td>${dt}</td> 
        <td>${r.score}</td>                   
    </tr>`;

        
    })
    document.getElementById("scoreboard").innerHTML = tab;

}
// Setting innerHTML as tab variable


// Calling that async function
getapi(api_url);

// function myFunction() {
//     var element = document.getElementById("myDIV");
//     element.classList.toggle("mystyle");
// }
dashlink.addEventListener("onclick", () => {
    usersec.style.display = 'none';
    dashsec.style.display = 'block';
})
userslink.addEventListener("onclick", () => {
    dashsec.style.display = 'none';
    usersec.style.display = 'block';
})
//   function makedash(){
//       usersec.style.visibility = 'hidden';
//         dashsec.style.visibility = 'visible';

//       }
//   function makeuser(){
//         dashsec.style.visibility = 'hidden';
//         usersec.style.visibility = 'visible';

//       }

function makegraph(data) {
    
    length = data.length;
    console.log(length);

    labels = [];
    values = [];
    for (i = 0; i < length; i++) {
        labels.push(data[i].username);
        values.push(data[i].score);
    }


    new Chart(document.getElementById("bar-chart"), {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [
                {
                    label: "score(in seconds)",
                    backgroundColor: ["#3e95cd",
                                      "#8e5ea2", 
                                      "#3cba9f", 
                                      "#e8c3b9", 
                                      "#c45850",
                                      "#CD5C5C", 
                                      "#40E0D0"],
                    data: values
                }
            ]
        },
        options: {
            legend: { display: false },
            title: {
                display: true,
                text: 'Scores'
            }
        }
    });

}

function makedash(){
    document.getElementById("dashsection").style.display = "block";
    document.getElementById("usersection").style.display = "none";
    document.getElementById("analsection").style.display = "none";
    document.getElementById("scoresection").style.display = "none";
}
function makeuser(){
    document.getElementById("dashsection").style.display = "none";
    document.getElementById("usersection").style.display = "block";
    document.getElementById("analsection").style.display = "none";
    document.getElementById("scoresection").style.display = "none";
}
function makeanal(){
    document.getElementById("dashsection").style.display = "none";
    document.getElementById("usersection").style.display = "none";
    document.getElementById("analsection").style.display = "block";
    document.getElementById("scoresection").style.display = "none";
}
function makescore(){
    document.getElementById("dashsection").style.display = "none";
    document.getElementById("usersection").style.display = "none";
    document.getElementById("analsection").style.display = "none";
    document.getElementById("scoresection").style.display = "block";
}