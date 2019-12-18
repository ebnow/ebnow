var color = "&color=90-40-115"
var firstName = encodeURIComponent(we.authMgr.getUser().firstName);
var lastName = encodeURIComponent(we.authMgr.getUser().lastName);
var phone = encodeURIComponent(we.authMgr.getUser().phoneNumber);
var company = encodeURIComponent(we.authMgr.getUser().profile.firma);
var email = encodeURIComponent(we.authMgr.getUser().profile.publicEmailAddress.toLowerCase());
var size = "&size=220x220&margin=0";

var url = "https://api.qrserver.com/v1/create-qr-code/?data=BEGIN%3AVCARD%0AVERSION%3A2.1%0AFN%3A" + firstName + "+" + lastName + "%0AN%3A" + lastName + "%3B" + firstName + "%0ATEL%3BWORK%3BVOICE%3A" + phone + "%0AEMAIL%3BWORK%3BINTERNET%3A" + email + "%0AORG%3A" + company +"%0AEND%3AVCARD%0A" + size + color; 

var qrSelector = document.querySelector('.external-script-widget[data-widget-id="qrcode"]');

if (qrSelector) {
    console.log(url);
    qrSelector.innerHTML = "<img src ='" + url + "'>";
} else {
    console.log("This didn't work. Try again");
};