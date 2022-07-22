function Count(){
    // B1: Dữ liệu đầu vào
    let a =  +document.getElementById("first").value,
    b =  +document.getElementById("second").value, 
    c =  +document.getElementById("third").value, 
    soLe = 0, soChan = 0;

    // B2: Xử lý
    if (a % 2 === 0) {
        soChan++;
        console.log(soChan);
    }
    if (b % 2 === 0) {
        soChan++;
        console.log(soChan);
    } 
    if (c % 2 === 0) {
        soChan++;
        console.log(soChan);
    }
    soLe = 3 - soChan;
    console.log(soChan, soLe);

    // B3: Đầu ra
    document.getElementById("count").innerHTML = "<p>Có "+soChan+" số chẵn, "+soLe+" số lẻ"+"</p>"
}