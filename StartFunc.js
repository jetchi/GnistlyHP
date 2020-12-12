function submitIdea() {

    // data input
    let ideaTitle = document.getElementById("ideaTitle").value;
    let ideaDescription = document.getElementById("ideaDescription").value;
    let ideaDate = new Date(); // returns a string that looks like this: "2020-12-06T00:02:03.000Z" this format is called ISO Dates (Date-Time)
    let ideaImpact = document.getElementById("estimatedImpactRange").value;
    let ideaEffort = document.getElementById("estimatedEffortRange").value;
    let userID = document.getElementById("ideaAuthor").value;

    let data = {IdeaTitle: ideaTitle, IdeaDescription: ideaDescription, IdeaDate: ideaDate, IdeaImpact: ideaImpact, IdeaEffort: ideaEffort, UserID: userID };

    // creating idea in the database
    $.ajax({
        url: "https://localhost:44390/api/Ideas", // added s to http! Needs to match the URI of the API when running in the browser
        type: 'POST',
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
        success: function () {
            alert("ide er gemt");
        },
        error: function () {
            alert(" fejl ");
        }
    });
}