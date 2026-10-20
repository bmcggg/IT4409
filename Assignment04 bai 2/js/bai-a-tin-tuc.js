/* BÀI A — ĐIỀN VÀO CHỖ TRỐNG: Trang News lấy dữ liệu từ JSON
   Thay mỗi ___(n)___ bằng đáp án của bạn.
   - Chỗ trống nằm trong CODE: điền tên phương thức / từ khoá / toán tử / biểu thức còn thiếu.
   - Chỗ trống nằm trong CHÚ THÍCH ("in ra: ..."): điền kết quả bạn DỰ ĐOÁN, chưa chạy vội.
   File chỉ chạy được khi mọi chỗ trống trong code đã được điền. */

// Máy chủ gửi về MỘT CHUỖI JSON chứa 5 bài viết.
const duLieuTho = '[' +
	'{"id":1,"title":"Khai trương xưởng in mới","date":"01-03-2012","views":320,"tags":["su kien","xuong in"],"draft":false},' +
	'{"id":2,"title":"Mẫu thiệp cưới mùa thu","date":"15-03-2012","views":870,"tags":["thiep cuoi","mau moi"],"draft":false},' +
	'{"id":3,"title":"Hướng dẫn chọn giấy cotton","date":"02-04-2012","views":540,"tags":["huong dan","giay"],"draft":false},' +
	'{"id":4,"title":"Bảng giá 2013","date":"20-04-2012","views":0,"tags":["bang gia"],"draft":true},' +
	'{"id":5,"title":"Ưu đãi in danh thiếp","date":"05-05-2012","views":870,"tags":["khuyen mai","mau moi"],"draft":false}' +
	']';

// ---------- Phần 1: JSON → mảng object ----------
const dsBai = JSON.parse(duLieuTho);

// ---------- Phần 2: Thêm / bớt phần tử ----------
// Thêm vào CUỐI mảng:
dsBai.push({ id: 6, title: "Tuyển thực tập sinh", date: "10-05-2012", views: 45, tags: ["tuyen dung"], draft: true });
// Thêm vào ĐẦU mảng:
dsBai.unshift({ id: 0, title: "Thông báo nghỉ lễ", date: "30-04-2012", views: 120, tags: ["thong bao"], draft: false });
// Lấy ra và xoá phần tử CUỐI:
const baiCuoi = dsBai.pop();
console.log(baiCuoi.id);             // in ra: 6 
// Lấy ra và xoá phần tử ĐẦU:
const baiDau = dsBai.shift;
console.log(dsBai.length);           // in ra: 5

// ---------- Phần 3: Thuộc tính của object ----------
const baiMot = dsBai[0];
baiMot.noiBat = true;                          // thêm thuộc tính
<<<<<<< HEAD
baiMot["tac gia"] = "Ban biên tập";              // thêm thuộc tính có khoá là  tac gia  (có dấu cách)
delete baiMot.noiBat;                       // xoá thuộc tính noiBat
console.log(baiMot.noiBat);          // in ra: undefined
=======
baiMot___(8)___ = "Ban biên tập";              // thêm thuộc tính có khoá là  tac gia  (có dấu cách)
___(9)___ baiMot.noiBat;                       // xoá thuộc tính noiBat
console.log(baiMot.noiBat);          // in ra: ___(10)___
>>>>>>> cffcebe19652ccf707d647c437d7fd959c2e0537

// ---------- Phần 4: Kiểu tham chiếu ----------
const baiGhim = dsBai[1];
baiGhim.title = "[GHIM] " + baiGhim.title;
<<<<<<< HEAD
console.log(dsBai[1].title);         // in ra: "[GHIM] Mẫu thiệp cưới mùa thu"

// ---------- Phần 5: filter / map / reduce ----------
// Chỉ giữ các bài ĐÃ ĐĂNG (draft là false):
const daDang = dsBai.filter(bai => bai.draft === false);
console.log(daDang.length);          // in ra: 4

// Mảng mới gồm tiêu đề viết HOA:
const dsTieuDe = daDang.map(bai => bai.title.toUpperCase());

// Tổng lượt xem:
const tongLuotXem = daDang.reduce((tong, bai) => tong + bai.views, 0);
console.log(tongLuotXem);            // in ra: 2600
// Nếu BỎ đối số thứ hai (17) của reduce thì tongLuotXem là:
//   (A) vẫn là con số đúng   (B) một chuỗi bắt đầu bằng "[object Object]"   (C) báo TypeError
//   → B

// Bài nhiều lượt xem nhất; nếu bằng nhau thì giữ bài ĐỨNG TRƯỚC trong mảng:
const baiHot = daDang.reduce((max, bai) => bai.views > max.views ? bai : max);
console.log(baiHot.id);              // in ra: 2

// Callback của map KHÔNG return:
const thu = daDang.map(bai => { bai.views + 1; });
console.log(thu[0]);                 // in ra: undefined
=======
console.log(dsBai[1].title);         // in ra: ___(11)___

// ---------- Phần 5: filter / map / reduce ----------
// Chỉ giữ các bài ĐÃ ĐĂNG (draft là false):
const daDang = dsBai.___(12)___(bai => bai.draft === false);
console.log(daDang.length);          // in ra: ___(13)___

// Mảng mới gồm tiêu đề viết HOA:
const dsTieuDe = daDang.___(14)___(bai => bai.title.___(15)___());

// Tổng lượt xem:
const tongLuotXem = daDang.reduce((tong, bai) => tong + ___(16)___, ___(17)___);
console.log(tongLuotXem);            // in ra: ___(18)___
// Nếu BỎ đối số thứ hai (17) của reduce thì tongLuotXem là:
//   (A) vẫn là con số đúng   (B) một chuỗi bắt đầu bằng "[object Object]"   (C) báo TypeError
//   → ___(19)___

// Bài nhiều lượt xem nhất; nếu bằng nhau thì giữ bài ĐỨNG TRƯỚC trong mảng:
const baiHot = daDang.reduce((max, bai) => bai.views ___(20)___ max.views ? bai : max);
console.log(baiHot.id);              // in ra: ___(21)___

// Callback của map KHÔNG return:
const thu = daDang.map(bai => { bai.views + 1; });
console.log(thu[0]);                 // in ra: ___(22)___
>>>>>>> cffcebe19652ccf707d647c437d7fd959c2e0537

// ---------- Phần 6: Đếm số bài theo thẻ (tag) ----------
const demThe = {};
daDang.forEach(bai => {
<<<<<<< HEAD
	for (const the of bai.tags) {
		demThe[the] = (demThe[the] || 0) + 1;
=======
	for (const the ___(23)___ bai.tags) {
		demThe[the] = (demThe[___(24)___] || 0) + 1;
>>>>>>> cffcebe19652ccf707d647c437d7fd959c2e0537
	}
});
console.log(demThe["mau moi"]);      // in ra: ___(25)___

// ---------- Phần 7: Class ----------
class BaiViet {
<<<<<<< HEAD
	constructor(duLieu) {
		this.title = duLieu.title;
		this.date = duLieu.date;
		this.views = duLieu.views;
=======
	___(26)___(duLieu) {
		this.title = duLieu.title;
		this.date = duLieu.date;
		___(27)___.views = duLieu.views;
>>>>>>> cffcebe19652ccf707d647c437d7fd959c2e0537
	}
	tomTat() {
		return `${this.date} — ${this.views} lượt xem`;
	}
}
<<<<<<< HEAD
const dsBaiViet = daDang.map(duLieu => new BaiViet(duLieu));

// ---------- Phần 8: Object → JSON ----------
const guiDi = JSON.stringify(dsBaiViet[0]);
console.log(guiDi);
// Chuỗi guiDi có chứa phương thức tomTat không? (có / không)  → không
=======
const dsBaiViet = daDang.map(duLieu => ___(28)___ BaiViet(duLieu));

// ---------- Phần 8: Object → JSON ----------
const guiDi = JSON.___(29)___(dsBaiViet[0]);
console.log(guiDi);
// Chuỗi guiDi có chứa phương thức tomTat không? (có / không)  → ___(30)___
>>>>>>> cffcebe19652ccf707d647c437d7fd959c2e0537

// ---------- Hiển thị ----------
veDanhSachTin(dsBaiViet);
hienThi(`Đã đăng: ${daDang.length} bài — tổng ${tongLuotXem} lượt xem — bài hot: #${baiHot.id}`);
hienThi(`Tiêu đề: ${dsTieuDe.join(" | ")}`);
for (const the in demThe) {
	hienThi(`#${the}: ${demThe[the]} bài`);
}
