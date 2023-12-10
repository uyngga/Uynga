
// JavaScript code to display today's date
document.addEventListener("DOMContentLoaded", function() {
    var today = new Date();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var formattedDate = today.toLocaleDateString('en-US', options);
    document.getElementById("todayDate").innerText = formattedDate;
});

