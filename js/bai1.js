function Sort() {
    // B1: Dữ liệu đầu vào
    let a =  +document.getElementById("firstNum").value,
    b =  +document.getElementById("secondNum").value, 
    c =  +document.getElementById("thirdNum").value;

    // B2: Xử lý
    // Cách 1: Lồng if trong if
    if (a > b) {
        if (b > c) {
            // B3: Xuất kết quả ra màn hình
            console.log(c, b, a);
            document.getElementById("thuTuTangDan").innerHTML = c +" < " + b + " < " + a
        }
        // Nếu a > b, b < c
        if(a > c){
            // B3: Xuất kết quả ra màn hình
            console.log(b, c, a);
            document.getElementById("thuTuTangDan").innerHTML = b +" < " + c + " < " + a
        }
        // Nếu a > b, a < c
        else{
            // B3: Xuất kết quả ra màn hình
            console.log(b, a, c);
            document.getElementById("thuTuTangDan").innerHTML = b +" < " + a + " < " + c
        }
    }
    if (b > c) {
        if(a > c){
            // B3: Xuất kết quả ra màn hình
            console.log(c, a, b);
            document.getElementById("thuTuTangDan").innerHTML = c +" < " + a + " < " + b
        }
        // Nếu b > c, a < c
        else {
            // B3: Xuất kết quả ra màn hình
            console.log(a, c, b);
            document.getElementById("thuTuTangDan").innerHTML = a +" < " + c + " < " + b
        }
    }
    // Nếu a < c
    else{
        if(b > a){
            // B3: Xuất kết quả ra màn hình
            console.log(a, b, c);
            document.getElementById("thuTuTangDan").innerHTML = a +" < " + b + " < " + c
        }
    }
}