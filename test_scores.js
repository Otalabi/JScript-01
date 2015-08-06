//declarer arrays "names" and "scores"
var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];
//This function receives an id and gets the related HTML object.
var $ = function (id) {
    return document.getElementById(id);
}

// This is the event handler for the onclick event of the button "display_results"

var display_results = function () {
    var sum = 0;
    for (var i = 0; i < scores.length; i++) {
        sum += scores[i];//adds up the scores
    }
     var avg = sum / scores.length;//calculates the average
    {
        var string = "";
        for (var i = 0; i < names.length; i++) {
            string += names[i] + " " + "-" + " " + scores[i] + "\n";
        }
        //this displays average and array values in the text-area.
        $("results").value = "Average Score = " + avg.toFixed(1) + "\n" + "\n" +
            string;
    }
    $("name").focus();//sets focus back to "name" text-box
}

// This is the event handler for the onclick event of the button "add_to_array"
var add_to_array = function () {
    var name = $("name").value;
    var score = parseInt($("score").value);

    //Validates new entries
    if (name == "") {
        alert("Name should not be empty");
    }
    else  if (isNaN(score) || score < 0 || score > 100){
        alert("Enter no between 0 and 100");
    }
    else {
        //adds new entries to the end of the arrays
        names.push(name);
        scores.push(score);
    }
    //sets the name and score text-box to empty
    $("name").value = "";
    $("score").value = "";

    display_results();//updates the result

    $("name").focus();

}
// This is the event handler for the onload event of the page.
window.onload = function () {
    $("display").onclick = display_results;// Assigns the event handler named  display_results to the onclick event display
    $("add").onclick = add_to_array;// Assigns the event handler named  add_to_array to the onclick event add
    $("name").focus();
}


