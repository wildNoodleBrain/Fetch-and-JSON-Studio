/*window.addEventListener("load", function () {
    const json = [];
    fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
        response.json().then(function (json) {
            const container = document.getElementById("container");
            for (let i = 0; i < json.length; i++) {
                container.innerHTML += `
    <div class="astronaut">
   <div class="bio">
      <h3>${json[i].firstName} ${json[i].lastName}</h3>
      <ul>
         <li>Hours in space: ${json[i].hoursInSpace}</li>
         <li>Active: ${json[i].active}</li>
         <li>Skills: ${json[i].skills}</li>
      </ul>
             </div>
   <img class="avatar" src=${json[i].picture}>
            </div>
`;
            };
        });
    });
});
*/
window.addEventListener("load", function () {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function (response) {
        response.json().then(function (json) {
            const container = document.getElementById("container");
            json.sort(function (firstAstro, secondAstro) { return firstAstro.hoursInSpace - secondAstro.hoursInSpace })
            for (let i = 0; i < json.length; i++) {

                if (json[i].active) {
                    container.innerHTML += `
                <div class="astronaut">
                <div class="bio">
                    <h3>${json[i].firstName} ${json[i].lastName}</h3>
                        <ul>
                            <li>Hours in space: ${json[i].hoursInSpace}</li>
                            <li class="activeTrue">Active: ${json[i].active}</li>
                            <li>Skills: ${json[i].skills}</li>
                        </ul>
                </div>
                <img class="avatar" src=${json[i].picture}>
                </div>
             `;
                } else {
                    container.innerHTML += `
                <div class="astronaut">
                <div class="bio">
                    <h3>${json[i].firstName} ${json[i].lastName}</h3>
                        <ul>
                            <li>Hours in space: ${json[i].hoursInSpace}</li>
                            <li>Active: ${json[i].active}</li>
                            <li>Skills: ${json[i].skills}</li>
                        </ul>
                </div>
                <img class="avatar" src=${json[i].picture}>
                </div>
             `;

                }
            };
        });
                container.innerHTML =+ `There are ${json.length} Astronauts up in here.</p>`  
    });

});
