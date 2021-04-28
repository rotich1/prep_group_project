$(document).ready(function () {
    $("div.one").hide()
    $("div.sec").hide()

});


function submitedData() {
    let firstName = document.getElementById("fname").value;
    let lastName = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("number").value;
    let location = document.getElementById("location").value;
    let budget = document.getElementById("budget").value;
    let category = document.getElementById("category").value;
    let idea = document.getElementById("idea").value;

    //Creating and instance of Details constructor
    var details = new Details(firstName, lastName, email, phone, location, budget);

    var ideas = new Idea(category, idea)

    //function construction for details
    function Details(first, last, email, phone, location, budget) {
        this.firstName = first;
        this.lastName = last;
        this.email = email;
        this.phone = phone;
        this.location = location;
        this.budget = budget;

    }

    var name = firstName + " " + lastName;

    //funtion constructor for idea
    function Idea(category, idea) {
        this.category = category;
        this.idea = idea;
    }

    if (details.first == "" || details.last == "" || details.email == "" || details.phone == "" || details.location == "" || details.budget == "") {
        alert("Name missing")
    } else {
        $("div.one").show()
        $("div.pitch").hide()

        $(document).ready(function () {
            $("span#category").text(ideas.category);
            $("span#idea").text(ideas.idea)

            $("div#first").on("click", function () {
                $("div.sec").toggle()
                $("span.displayName").text(name);
                $("span.displayEmail").text(details.email);
                $("span.dispalyContact").text(details.phone);
                $("span.displayLocation").text(details.location);
                $("span.displayLocation").text(ideas.category);
                $("span.displayIdea").text(ideas.idea);
                $("span.displayBudget").text(budget);
            });
        });
    }
}