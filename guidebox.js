
var guideKey = "0e23f79151528714d7a69dbe1cf391543c83a031";

function subFunc(subResults) {
    var subText = document.createElement("p");
    subText.setAttribute("id", "subText");

    var textP = document.createTextNode("Subscription: ");
    subText.appendChild(textP);
    document.getElementById("subscription").appendChild(subText)

    console.log("subs");
    for (i = 0; i < subResults.results[0].subscription_web_sources.length; i++) {
        console.log(subResults.results[0].subscription_web_sources[i].link);

        ///Make a div for each source(shoudl be 4 in total)
        var subBtn = document.createElement("a");

        subBtn.setAttribute("href", subResults.results[0].subscription_web_sources[i].link);
        subBtn.setAttribute("target", "_blank");
        subBtn.setAttribute("class", "btn btn-outline-light");
        subBtn.setAttribute("id", "subButton");

        console.log(subBtn);
        var textSubBtn = document.createTextNode(subResults.results[0].subscription_web_sources[i].display_name);
        subBtn.appendChild(textSubBtn);
        document.getElementById("subResults").appendChild(subBtn);
    }
}

function purcFunc(subResults) {
    var purcText = document.createElement("p");
    purcText.setAttribute("id", "purcText");

    var purcP = document.createTextNode("Purchase: ");
    purcText.appendChild(purcP);
    document.getElementById("purchase").appendChild(purcText);
    for (j = 0; j < subResults.results[0].purchase_web_sources.length; j++) {
        console.log(subResults.results[0].purchase_web_sources[j].link);

        var purcBtn = document.createElement("a");
        purcBtn.setAttribute("href", subResults.results[0].purchase_web_sources[j].link);
        purcBtn.setAttribute("target", "_blank");
        purcBtn.setAttribute("class", "btn btn-outline-light");
        purcBtn.setAttribute("id", "purchaseButton");

        console.log(purcBtn);
        var textPurcBtn = document.createTextNode(subResults.results[0].purchase_web_sources[j].display_name);
        purcBtn.appendChild(textPurcBtn);
        document.getElementById("purcResults").appendChild(purcBtn);
    }
}

function freeFunc(subResults) {
    var freeText = document.createElement("p");
    freeText.setAttribute("id", "freeText");

    var freeP = document.createTextNode("Free to Watch: ");
    freeText.appendChild(freeP);
    document.getElementById("free").appendChild(freeText);
    for (k = 0; k < subResults.results[0].free_web_sources.length; k++) {
        console.log(subResults.results[0].free_web_sources[k].link);

        ///Make a div for each source(shoudl be 4 in total)
        var freeBtn = document.createElement("a");
        // This only seems to add the href attr and not everything else!
        freeBtn.setAttribute("href", subResults.results[0].free_web_sources[k].link);
        freeBtn.setAttribute("target", "_blank");
        freeBtn.setAttribute("class", "btn btn-outline-light");
        freeBtn.setAttribute("id", "freeButton");

        console.log(freeBtn);
        var textFreeBtn = document.createTextNode(subResults.results[0].free_web_sources[k].display_name);
        freeBtn.appendChild(textFreeBtn);
        document.getElementById("freeResults").appendChild(freeBtn);
    }
}

function everyFunc(subResults) {
    var everyText = document.createElement("p");
    everyText.setAttribute("id", "everyText");

    var everyP = document.createTextNode("TV Everywhere: ");
    everyText.appendChild(everyP);
    document.getElementById("tvEverywhere").appendChild(everyText);
    for (l = 0; l < subResults.results[0].tv_everywhere_web_sources.length; l++) {
        console.log(subResults.results[0].tv_everywhere_web_sources[l].link);

        ///Make a div for each source(shoudl be 4 in total)
        var everyBtn = document.createElement("a");
        // This only seems to add the href attr and not everything else!
        everyBtn.setAttribute("href", subResults.results[0].tv_everywhere_web_sources[l].link);
        everyBtn.setAttribute("target", "_blank");
        everyBtn.setAttribute("class", "btn btn-outline-light");
        everyBtn.setAttribute("id", "everyButton");

        console.log(everyBtn);
        var textEveryBtn = document.createTextNode(subResults.results[0].tv_everywhere_web_sources[l].display_name);
        everyBtn.appendChild(textEveryBtn);
        document.getElementById("everyResults").appendChild(everyBtn);
    }
}

function guideShow(search) {
    var showURL = "http://api-public.guidebox.com/v2/search?api_key=" + guideKey + "&type=show&query=" + search;

    $.ajax({
        url: showURL,
        method: "GET"
    }).then(function (response) {
        console.log("This is the show response");
        console.log(response);
        console.log(response.results[0].id);
        var showID = response.results[0].id;

        var responseShow = "http://api-public.guidebox.com/v2/shows/" + showID + "/episodes?api_key=" + guideKey + "&sources=subscription,purchase,free,tv_everywhere&include_links=true";

        $.ajax({
            url: responseShow,
            method: "GET"
        }).then(function (results) {
            console.log("These are my show results string");
            console.log(results);

            $("#loading").hide();
            subFunc(results);
            purcFunc(results);
            freeFunc(results);
            everyFunc(results);
        })
    })
}

// function guideMovie(search) {
//     var movieURL = "http://api-public.guidebox.com/v2/search?api_key=" + guideKey + "&type=movie&query=" + search;

//     $.ajax({
//         url: movieURL,
//         method: "GET"
//     }).then(function (response) {
//         console.log("This is the movie response");
//         console.log(response);
//         console.log(response.results[0].id);
//         var movieID = response.results[0].id;

//         var responseMovie = "http://api-public.guidebox.com/v2/movies/" + movieID + "/api_key=" + guideKey + "&sources=subscription,purchase,free,tv_everywhere&include_links=true";

//         $.ajax({
//             url: responseMovie,
//             method: "GET"
//         }).then(function(results){
//             console.log("These are my movie results string");
//             console.log(results);

// console.log(results.results[0].subscription_web_sources);
// console.log(results.results[0].purchase_web_sources);
// console.log(results.results[0].free_web_sources);
// console.log(results.results[0].tv_everywhere_web_sources);
//         })
//     })
// }

function guidePerson(search) {
    var personURL = "http://api-public.guidebox.com/v2/search?api_key=" + guideKey + "&type=person&query=" + search;

    $.ajax({
        url: personURL,
        method: "GET"
    }).then(function (response) {
        console.log("This is the person response");
        console.log(response);
    })
}



$("#find-movie").on("click", function () {
    $("#subResults, #purcResults, #freeResults, #everyResults").empty();
    $("#subscription, #purchase, #free, #tvEverywhere").empty();
    event.preventDefault();
    var guideSearch = $("#movie-input").val().trim().toLowerCase();
    $("#loading").show();
    //guideMovie(guideSearch);
    //guideShow(guideSearch);
    // guidePerson(guideSearch);
})

$("td").on("click", function () {
    var tableText = $(this).text();
    $("#subResults, #purcResults, #freeResults, #everyResults").empty();
    $("#subscription, #purchase, #free, #tvEverywhere").empty();
    $("#loading").show();
    // guideMovie(tableText);
    guideShow(tableText);
    // guidePerson(tableText);
})
