function layDuLieu() {
  var giaTriInput1 = document.getElementById("myInput1").value;
  var giaTriInput2 = document.getElementById("myInput2").value;
  var giaTriInput3 = document.getElementById("myInput3").value;

  if (
    giaTriInput1 == "codeder@gmail.com" &&
    giaTriInput2 == "coder123" &&
    giaTriInput3 == "08112009"
  ) {
    console.log("Dữ liệu từ ô input: " + giaTriInput1);
    window.location.href =
      "https://phamquangtruongan.github.io/tailwindcss/";
  } else {
    console.log("Error");
  }
}

