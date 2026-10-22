/* BÀI B — VIẾT CODE: Lọc tin và đăng tin nhanh (news.html)
   Viết code theo đặc tả.
   Không sửa news.html, không sửa css; chỉ viết JavaScript trong file này. */

// ---------- ĐÃ CHO SẴN (không sửa) ----------
// Chặn việc gửi form tìm kiếm khi nhấn Enter, để trang không bị tải lại.
document.querySelector("#searchbar form").addEventListener("submit", (e) => e.preventDefault());

// ---------- PHẦN BẠN VIẾT ----------
const oTimKiem = document.getElementById("o-tim-kiem")
const list = document.getElementById("list");
const boDem = document.getElementById("bo-dem");
const khongThay = document.getElementById("khong-thay");

const tinTieuDe = document.getElementById("tin-tieu-de");
const tinNoiDung = document.getElementById("tin-noi-dung");
const nutDang = document.getElementById("nut-dang");
const baoLoi = document.getElementById("bao-loi");

// F1. Bộ đếm "Đang hiển thị x/y tin" trong #bo-dem.
function capNhatBoDem(){
   const dsTin = list.querySelectorAll(":scope > li");
   const tongSoTin = dsTin.length;

   let soTinHienThi = 0;

   dsTin.forEach(tin => {
      if(tin.style.display !== "none")
         soTinHienThi++;
   });
}
// F2 + F3. Lọc tin khi gõ vào #o-tim-kiem (sự kiện keyup) và thông báo #khong-thay.
oTimKiem.addEventListener("keyup",() => {
   const tuKhoa = oTimKiem.value.trim().toLowerCase();
   const dsTin = list.querySelectorAll(":scope > li");

   let soTinTimThay = 0;

   dsTin.forEach(tin => {
      const noiDungTin = tin.textContext;
      const phuHop = noiDungTin.includes(tuKhoa);

      tin.style.display = phuHop ? "": "none";
      if(phuHop)
         soTinTimThay++;
      
   });

   if(soTinTimThay === 0){
      khongThay.textContent = "Không tìm thấy tin phù hợp";
      khongThay.classList.remove("an");
   }
   else{
      khongThay.textContent = "";
      khongThay.classList.add("an");
   }
   capNhatBoDem();
});
// F4. Nút "Read more >>" / "Thu gọn <<" — MỘT trình lắng nghe đặt trên #list.
list.addEventListener("click", (e) => {
   if(!e.target.matches("button.more"))
      return;
   const nut = e.target;
   const tin = nut.closest("li");
   const doanVan = tin.querySelector("p");

   if(doanVan.dataset.moRong === "true"){
      doanVan.style.display = "-webkit-box";
      doanVan.style.webkitLineClamp = "2";
      doanVan.style.webkitBoxOrient = "vertical";
      doanVan.style.overflow = "hidden";

      doanVan.dataset.moRong = "false";
      nut.textContent = "Read more >>";
   }
   else{
      doanVan.style.display = "";
      doanVan.style.webkitLineClamp = "";
      doanVan.style.webkitBoxOrient = "";
      doanVan.style.overflow = "";

      doanVan.dataset.moRong = "true";
      nut.textContent = "Thu gọn <<";
   }
});
// F5. Nút #nut-dang: kiểm tra dữ liệu, tạo <li> mới, chèn vào đầu #list.
nutDang.addEventListener("click", () => {
   const tieuDe = tinTieuDe.value.trim();
   const noiDung = tinNoiDung.value.trim();

   if(tieuDe === "" || noiDung === ""){
      baoLoi.textContent = "Nội dung hoặc tiêu đề không được để trống!";
      return;
   }
   const tinMoi = document.createElement("li");

   const thoiGian = document.createElement("span");
   thoiGian.className = "time";

   const ngay = new Date();
   const dd = String(ngay.getDate()).padStart(2,"0");
   const mm = String(ngay.getMonth()+1).padStart(2,"0");
   const yyyy = ngay.getFullYear();

   thoiGian.textContent = `${dd}-${mm}-${yyyy}`;

   const tieuDeMoi = document.createElement("h3");
   tieuDeMoi.textContent = tieuDe;

   const noiDungMoi = document.createElement("p");
   noiDungMoi.textContent = noiDung;

   const nutMoRong = document.createElement("button");
   nutMoRong.type = "button";
   nutMoRong.className = "more";
   nutMoRong.textContent = "Read more >>";

   tinMoi.append(thoiGian,tieuDeMoi,noiDungMoi);

   list.prepend(tinMoi);
   
   tinTieuDe.value = "";
   tinNoiDung.value = "";
   baoLoi.textContent = "";
   
   oTimKiem.dispatchEvent(new Event("key up"))

});
capNhatBoDem();
