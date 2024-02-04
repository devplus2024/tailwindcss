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


document.addEventListener("DOMContentLoaded", function() {
  const desktopRadios = document.querySelectorAll('input[name="content"]');
  const mobileRadios = document.querySelectorAll('input[name="content-mobile"]');
  const contents = document.querySelectorAll('.content');

  // Xác định radio button và nội dung mặc định
  const defaultDesktopRadio = document.querySelector('input[name="content"]:checked');
  const defaultContentId = `content-${defaultDesktopRadio.id}`;
  const defaultContent = document.getElementById(defaultContentId);
  defaultContent.classList.add("active");

  // Thêm sự kiện change cho desktop radio buttons để xử lý khi chúng được chọn
  desktopRadios.forEach(function(desktopRadio) {
      desktopRadio.addEventListener("change", function() {
          // Đồng bộ hóa trạng thái giữa desktop và mobile
          const correspondingMobileRadioId = this.id.replace('desktop', 'mobile');
          const correspondingMobileRadio = document.getElementById(correspondingMobileRadioId);
          correspondingMobileRadio.checked = this.checked;

          // Hiển thị nội dung tương ứng với radio button được chọn
          showContent(this);
      });
  });

  // Thêm sự kiện change cho mobile radio buttons để xử lý khi chúng được chọn
  mobileRadios.forEach(function(mobileRadio) {
      mobileRadio.addEventListener("change", function() {
          // Đồng bộ hóa trạng thái giữa mobile và desktop
          const correspondingDesktopRadioId = this.id.replace('mobile', 'desktop');
          const correspondingDesktopRadio = document.getElementById(correspondingDesktopRadioId);
          correspondingDesktopRadio.checked = this.checked;

          // Hiển thị nội dung tương ứng với radio button được chọn
          showContent(correspondingDesktopRadio);
      });
  });

  // Hàm hiển thị nội dung tương ứng với radio button được chọn
  function showContent(radio) {
      const selectedContentId = `content-${radio.id}`;
      contents.forEach(function(content) {
          content.classList.remove("active");
      });

      const selectedContent = document.getElementById(selectedContentId);
      selectedContent.classList.add("active");
  }
});


