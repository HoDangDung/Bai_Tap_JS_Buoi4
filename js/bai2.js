function Submit(){
    let family = document.getElementById("family").value

    if(family === "B"){
        console.log("Bố");
        document.getElementById("submit").innerHTML = "<p>Xin chào Bố !</p>"
    }else if(family === "M"){
        console.log("Mẹ");
        document.getElementById("submit").innerHTML = "<p>Xin chào Mẹ !</p>"
    }else if(family === "A"){
        console.log("Anh");
        document.getElementById("submit").innerHTML = "<p>Xin chào Anh trai !</p>"
    }else{
        console.log("Em");
        document.getElementById("submit").innerHTML = "<p>Xin chào Em gái !</p>"
    }
    document.getElementById("submit").className = "bg-success card-footer text-white"
}