const today = new Date();
const url = "https://de.eyo.net/api/users";
const id = we.authMgr.getSessionID();

const currentDate = (today.getDate() <= 9 ? "0" : "" ) + today.getDate() + "." + ((today.getMonth() + 1) <= 9 ? "0" : "" ) + (today.getMonth() + 1) + ".";

const USER_ENTITY = "user"
let request = new XMLHttpRequest();

request.open("GET",url + ";wesessid=" + id + "?query=" + currentDate + "&limit=5&extended=false");
request.addEventListener('load', function(event) {
   if (request.status >= 200 && request.status < 300) {
         let response = JSON.parse(request.responseText);
         const data = response.data;

         let birthdayMessage = "";
        
         if(data) {
            data.forEach(user => {
                // check if search hit is a user
                if(user.entityType == USER_ENTITY){
                   // User has birthday today
                   if(user.profile.geburtsdatum.substring(0, 6) == currentDate) {
                    birthdayMessage += '<a href="/profile/' + user.id + '">' + user.firstName + ' ' + user.lastName + '</a> hat heute Geburtstag!</br>';
                   }
                }
            });

            var greetingSelector = document.querySelector('.external-script-widget[data-widget-id="birthday"]');
            //var profileLink = "/profile/" + we.authMgr.getUser().id;
            

            if (greetingSelector) {
                greetingSelector.innerHTML = birthdayMessage;
            } else {
                console.log("This didn't work. Try again");
            };
         }
    }
});

request.send();