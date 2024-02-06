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

document.addEventListener("DOMContentLoaded", function () {
  const desktopRadios = document.querySelectorAll('input[name="content"]');
  const mobileRadios = document.querySelectorAll(
    'input[name="content-mobile"]'
  );
  const contents = document.querySelectorAll(".content");

  // Xác định radio button và nội dung mặc định
  const defaultDesktopRadio = document.querySelector(
    'input[name="content"]:checked'
  );
  const defaultContentId = `content-${defaultDesktopRadio.id}`;
  const defaultContent = document.getElementById(defaultContentId);
  defaultContent.classList.add("active");

  // Thêm sự kiện change cho desktop radio buttons để xử lý khi chúng được chọn
  desktopRadios.forEach(function (desktopRadio) {
    desktopRadio.addEventListener("change", function () {
      // Đồng bộ hóa trạng thái giữa desktop và mobile
      const correspondingMobileRadioId = this.id.replace("desktop", "mobile");
      const correspondingMobileRadio = document.getElementById(
        correspondingMobileRadioId
      );
      correspondingMobileRadio.checked = this.checked;

      // Hiển thị nội dung tương ứng với radio button được chọn
      showContent(this);
    });
  });

  // Thêm sự kiện change cho mobile radio buttons để xử lý khi chúng được chọn
  mobileRadios.forEach(function (mobileRadio) {
    mobileRadio.addEventListener("change", function () {
      // Đồng bộ hóa trạng thái giữa mobile và desktop
      const correspondingDesktopRadioId = this.id.replace("mobile", "desktop");
      const correspondingDesktopRadio = document.getElementById(
        correspondingDesktopRadioId
      );
      correspondingDesktopRadio.checked = this.checked;

      // Hiển thị nội dung tương ứng với radio button được chọn
      showContent(correspondingDesktopRadio);
    });
  });

  // Hàm hiển thị nội dung tương ứng với radio button được chọn
  function showContent(radio) {
    const selectedContentId = `content-${radio.id}`;
    contents.forEach(function (content) {
      content.classList.remove("active");
    });

    const selectedContent = document.getElementById(selectedContentId);
    selectedContent.classList.add("active");
  }
});

let x;
x = "JavaScript";
x = x + " + HTML + CSS ";
console.log(`I love Coder and ${x}`);

let y = 500;
y += 500;

console.log(y / 100);

function equation() {
  let Email = document.getElementById("email").value;
  let Password = document.getElementById("password").value;
  let Username = document.getElementById("username").value;

  // Tạo đối tượng JavaScript
  let userData = {
    email: Email,
    password: Password,
    username: Username,
  };

  // Chuyển đối tượng thành chuỗi JSON
  let jsonString = JSON.stringify(userData);

  // Tạo một đối tượng Blob từ chuỗi JSON
  let blob = new Blob([jsonString], { type: "application/json" });

  // Tạo một đường link để tải tệp JSON
  let link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.download = "userData.json";

  // Thêm link vào trang và kích hoạt sự kiện click để tải tệp
  document.body.appendChild(link);
  link.click();

  // Xóa link sau khi đã tải tệp
  document.body.removeChild(link);
}

document.addEventListener("DOMContentLoaded", function () {
  let a = 0;
  document.getElementById("p-1").textContent = 0;
  const plus = document.getElementById("Button-1");
  plus.onclick = function () {
    a++;
    document.getElementById("p-1").textContent = a;
  };
  const minus = document.getElementById("Button-2");
  minus.onclick = function () {
    a--;
    document.getElementById("p-1").textContent = a;
  };
  const restore = document.getElementById("Button-3");
  restore.onclick = function () {
    a = 0;
    document.getElementById("p-1").textContent = a;
  };
});
