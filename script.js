function show(){
    var search = document.getElementById("input").value;

    if(search == "12345"){
        window.location.href = "ordersample.html";
    }else{
        alert("Invalid tracking ID")
    }
}