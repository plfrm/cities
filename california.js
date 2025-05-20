//popup in the nav to show a dropdown
function getPopup() {
    var popup = document.getElementById("this_popup");
    popup.classList.toggle("show");
}
//Opens a menu bar when the web page is less than 900px in size
function openNav() {
    document.getElementById("mySidebar").style.width = "350px";
    document.getElementById("finav").style.marginLeft = "350px";
}
//Closes a menu bar when the web page is less than 900px in size
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("finav").style.marginLeft= "0";
}
//form validation
document.addEventListener("DOMContentLoaded", function () {
    const forms = document.getElementById('myform');

    forms.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevents the form from being submitted so it can be validated with Javascript
        let fname = document.getElementById('fname').value;
        let lname = document.getElementById('lname').value;
        let select = document.getElementById('county').value;      
        //field validation
        if (fname.trim() === '') {
            alert("Enter Your Name");
            return;
        }
        if (lname.trim() === '') {
            alert("Enter Your Last Name");
            return;
        }
        if (select === '') {
            alert("You must select an option");
            return;
        }
        alert('The form was sent successfully!');
        forms.submit(); 
    });
});
