function DuDoan() {

    // B1: Dữ liệu đầu vào
    let a = +document.getElementById("a").value,
        b = +document.getElementById("b").value,
        c = +document.getElementById("c").value,
        d = Math.sqrt(a * a + b * b);

    // B2: Xử lý
    if(a === b && a === c && b === c) {
        console.log("đều"); 
    }
    else if (a === b || b === c || a === c) {
        console.log("cân");
    }
    else if (d === c) {
        console.log("vuông");
    }
    else{
        console.log("Cái hình gì á!!!");
    }
}