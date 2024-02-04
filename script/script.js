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
    window.location.href = "https://phamquangtruongan.github.io/tailwindcss/";
  } else {
    console.log("Error");
  }
}

// Optional: Thêm sự kiện để tắt controls khi video đã bắt đầu phát
// document.querySelector('.rounded-lg').addEventListener('play', function() {
//   this.controls = false;
// });

document.addEventListener("DOMContentLoaded", function() {
  const radioButtons = document.querySelectorAll('input[type="radio"]');
  const contents = document.querySelectorAll('.content');

  radioButtons.forEach(function(radioButton, index) {
    radioButton.addEventListener("change", function() {
      contents.forEach(function(content) {
        content.classList.remove("active");
      });
      contents[index].classList.add("active");
    });
  });
});
