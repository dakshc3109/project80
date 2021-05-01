var names = [];
function sumbit(){
    var guestName = document.getElementById("sumbit_name").value;
    names.push(guestName);
    document.getElementById("display_name_with_commas").innerHTML = names;
}

function show(){
    var display_without_commas =names.join("<h4>"+" "+"</h4>");
    document.getElementById("display_without_commas").innerHTML = display_without_commas;
}

function sortedList(){
    var sorted = names.sort().join("<h4>"+" "+"</h4>");
    document.getElementById("display_sorted_list").innerHTML = sorted;
}

function searching(){
    var s = document.getElementById("search").value;
    var found = 0;
    var j;
    for (var j = 0; j<names.length; j++) {
        if(s==names[j]){
            found=found+1;
        }
    }
    document.getElementById("searched_names").innerHTML = "name found "+found+" time/s";
    console.log("name found"+found+"time/s");
}