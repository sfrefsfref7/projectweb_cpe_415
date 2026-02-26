2.2 REST API ≥ 8 routes คืออะไร

Route = ประตูให้ frontend เรียก

ตัวอย่างสำหรับ MealTrack:

Method	Route	ความหมาย
POST	/auth/register	สมัคร
POST	/auth/login	ล็อกอิน
GET	/meals	ดูมื้ออาหาร
POST	/meals	เพิ่มมื้อ
PUT	/meals/:id	แก้
DELETE	/meals/:id	ลบ
GET	/summary	ดูแคลอรี่รวม
GET	/users	(admin) ดูผู้ใช้

npm install express cors bcryptjs jsonwebtoken