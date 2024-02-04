





Optional: Thêm sự kiện để tắt controls khi video đã bắt đầu phát
document.querySelector('.rounded-lg').addEventListener('play', function() {
  this.controls = false;
});

document.addEventListener("DOMContentLoaded", function() {
  // Kiểm tra radio button nào được chọn mặc định
  const checkedRadioButton = document.querySelector('input[name="content"]:checked');
  
  // Lấy id của radio button được chọn mặc định
  const defaultCheckedId = checkedRadioButton ? checkedRadioButton.id : null;

  // Hiển thị nội dung tương ứng với radio button được chọn mặc định
  if (defaultCheckedId) {
    const defaultContent = document.getElementById(`content${defaultCheckedId.slice(-1)}`);
    defaultContent.classList.add("active");
  }

  // Thêm sự kiện change cho radio buttons để xử lý khi chúng được chọn
  const radioButtons = document.querySelectorAll('input[name="content"]');
  radioButtons.forEach(function(radioButton) {
    radioButton.addEventListener("change", function() {
      const contents = document.querySelectorAll('.content');
      contents.forEach(function(content) {
        content.classList.remove("active");
      });
      const selectedContentId = `content${this.id.slice(-1)}`;
      const selectedContent = document.getElementById(selectedContentId);
      selectedContent.classList.add("active");
    });
  });
});



document.addEventListener('DOMContentLoaded', function () {
  // Lấy thẻ a và thêm sự kiện click
  var downloadLink = document.getElementById('downloadLink');
  downloadLink.addEventListener('click', function (event) {
      // Ngăn chặn hành động mặc định của thẻ a (chuyển hướng)
      event.preventDefault();

      // Cập nhật tên file trước khi tải về
      var newFileName = '';  // Thay đổi tên file theo ý muốn
      downloadLink.download = newFileName;

      // Simulate click để bắt đầu quá trình tải về
      var clickEvent = new MouseEvent('click');
      downloadLink.dispatchEvent(clickEvent);
  });
});