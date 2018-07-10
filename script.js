var button = document.getElementById("button");
var userinput = document.getElementById("userinput");
var ol = document.getElementsByClassName("ol");

function eventlistner(){
    return userinput.value.length;
}


function createlistelement(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(userinput.value));
    ol[0].appendChild(li);
    userinput.value="";
}

button.addEventListener("click", function () {
    if (eventlistner() > 0) {
        createlistelement()

    }
})



userinput.addEventListener("keypress", function (event) {
    if (eventlistner() > 0 && event.which==13) {
        createlistelement()

    }
})