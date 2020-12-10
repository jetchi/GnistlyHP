


function submitIdea() {

    /*var formData = new FormData(document.querySelector('addIdea'));*/
    let ideaTitle = "min ide200";
    let ideaDescription = "sdlfkbj";
    let ideaDate = "2020-12-06 00:02:03.000";
    let ideaImpact = 3;
    let ideaEffort = 2;
    let userID = 3;



    let data = {IdeaTitle: ideaTitle, IdeaDescription: ideaDescription, IdeaDate: ideaDate, IdeaImpact: ideaImpact, IdeaEffort: ideaEffort, UserID: userID };

    $.ajax({
        url: "http://localhost:44390/api/Ideas",
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


