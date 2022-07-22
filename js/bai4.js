function duDoan() {

    // B1: Dữ liệu đầu vào
    let a = +document.getElementById("a").value,
        b = +document.getElementById("b").value,
        c = +document.getElementById("c").value,
        d = Math.sqrt(a * a + b * b);

    // B2: Xử lý
    if (!a || !b || !c) {
        alert("Mời nhập giá trị")
        return
    } else {
        if (a === b && a === c && b === c) {
            console.log("đều");
            // B3: Đầu ra
            document.getElementById("duDoan").innerHTML = "<p>Tam giác đều đúng hôn...</p>"
        }
        else if (a === b || b === c || a === c) {
            console.log("cân");
            // B3: Đầu ra
            document.getElementById("duDoan").innerHTML = "<p>Tam giác cân chớ gì...</p>"
        }
        else if (d === c) {
            console.log("vuông");
            // B3: Đầu ra
            document.getElementById("duDoan").innerHTML = "<p>Này là tam giác vuông nè...</p>"
        }
        else {
            console.log("Hổng biết hình này");
            // B3: Đầu ra
            document.getElementById("duDoan").innerHTML = "<p>Hổng biết hình này (@.@)</p>"
        }

        document.getElementById("duDoan").className = "bg-success card-footer text-white"
    }
}