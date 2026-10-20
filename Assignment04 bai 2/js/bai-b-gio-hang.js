/* BÀI B — VIẾT CODE: Giỏ hàng của xưởng in
   Hoàn thiện class GioHang và hàm napGioHang.
   Không đổi tên class, tên phương thức, tên hàm; không sửa phần "DỮ LIỆU ĐÃ CHO". */

// ---------- DỮ LIỆU ĐÃ CHO (không sửa) ----------
const DANH_MUC = [
	{ id: "TC01", ten: "Thiệp cưới cotton", loai: "thiep cuoi", gia: 1500 },
	{ id: "TC02", ten: "Thiệp cưới kraft", loai: "thiep cuoi", gia: 900 },
	{ id: "DT01", ten: "Danh thiếp ép kim", loai: "danh thiep", gia: 1200 },
	{ id: "PB01", ten: "Phong bì lót lụa", loai: "phu kien", gia: 500 }
];

// ---------- PHẦN BẠN VIẾT ----------
class GioHang {
	constructor() {
		// Mỗi dòng của giỏ là một object { id, ten, loai, gia, soLuong }.
		this.dsDong = [];
	}

	// 1. Thêm sản phẩm; trả về true nếu thêm được, false nếu soLuong không hợp lệ.
	them(sanPham, soLuong) {
		if(!Number.isInteger(soLuong)||soLuong <= 0)
			return false;
		const dong = this.dsDong.find(item => item.id === sanPham.id);

		if(dong)
			dong.soLuong += soLuong;
		else{
			this.dsDong.push({
				id: sanPham.id,
				ten: sanPham.ten,
				loai: sanPham.loai,
				gia: sanPham,gia,
				soLuong: soLuong
			});
		}
	}

	// 2. Xoá dòng có id tương ứng; trả về true nếu có xoá, false nếu không tìm thấy.
	xoa(id) {
<<<<<<< HEAD
		const id = this.dsDong.findIndex(item => item.id === id);
		
		if(id === -1)
			return false;
		
		this.dsDong.splice(id,1);
		return true;
=======
		// TODO
>>>>>>> cffcebe19652ccf707d647c437d7fd959c2e0537
	}

	// 3. Tổng tiền cả giỏ.
	tongTien() {
<<<<<<< HEAD
		return this.dsDong.reduce(
			(tong, dong) => tong + dong.gia*dong.soLuong,
			0
		);
=======
		// TODO
>>>>>>> cffcebe19652ccf707d647c437d7fd959c2e0537
	}

	// 4. Object thống kê: { "<loai>": tổng tiền của loại đó, ... }.
	thongKeTheoLoai() {
<<<<<<< HEAD
		const res = {};

		this.dsDong.forEach(dong => {
			if(res[dong.loai] === undefined)
				res[dong.loai] = 0;
			res[res.loai] += dong.gia * dong.soLuong;
		});
		return res;
=======
		// TODO
>>>>>>> cffcebe19652ccf707d647c437d7fd959c2e0537
	}

	// 5. Dòng có thành tiền lớn nhất (bản sao, có thêm thanhTien); null nếu giỏ rỗng.
	dongDatNhat() {
<<<<<<< HEAD
		if(this.dsDong.length === 0)
			return null;
		const max = this.dsDong.reduce((max,dong) => {
			return dong.gia * dong.soLuong > max? dong.gia * dong.soLuong : max;
		});
		return {
			...max,
			thanhTien: max.gia * max.soLuong
		};
=======
		// TODO
>>>>>>> cffcebe19652ccf707d647c437d7fd959c2e0537
	}

	// 6. Mảng BẢN SAO các dòng, mỗi dòng có thêm thuộc tính thanhTien.
	layDanhSach() {
<<<<<<< HEAD
		return this.dsDong.map(dong => ({
			...dong,
			thanhTien: dong.gia * dong.soLuong
		}));
=======
		// TODO
>>>>>>> cffcebe19652ccf707d647c437d7fd959c2e0537
	}

	// 7. Chuỗi JSON của mảng các dòng.
	xuatJSON() {
<<<<<<< HEAD
		return JSON.stringify(this.dsDong);
=======
		// TODO
>>>>>>> cffcebe19652ccf707d647c437d7fd959c2e0537
	}
}

// 8. Tạo lại một GioHang từ chuỗi JSON do xuatJSON() sinh ra.
function napGioHang(chuoiJSON) {
<<<<<<< HEAD
	const arr = xuatJSON();
	const gio = new GioHang();
	
	gio.dsDong = arr.map(dong => ({
		id: dong.id,
		ten: dong.ten,
		loai: dong.loai,
		gia: dong.gia,
		soLuong: dong.soLuong
	}));

	return gio;
=======
	// TODO
>>>>>>> cffcebe19652ccf707d647c437d7fd959c2e0537
}

// ---------- CHẠY THỬ (không sửa) ----------
const gio = new GioHang();
gio.them(DANH_MUC[0], 100);
gio.them(DANH_MUC[3], 200);
gio.them(DANH_MUC[0], 50);
veGioHang(gio.layDanhSach(), gio.tongTien());
console.table(gio.layDanhSach());
hienThi(`JSON gửi lên máy chủ: ${gio.xuatJSON()}`);
