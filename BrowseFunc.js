/* work in progress:


showAllIdeas();
// The function will display all ideas in a list once the page gets loaded.
// The function belongs to the default global object (special in JavaScript).
// In HTML the default global object is the HTML page itself, so the function "belongs" to the HTML page.
function showAllIdeas() {

    alert("method gets invoked!") // test

    $.get({
        url: "https://localhost:44390/api/Ideas", // added s to http! Needs to match the URI of the API
        type: 'GET',
        dataType: "json"
    }).then(function (data) {
        for (let i = 0; i < data.length; i++) {
        }
    });
}

*/