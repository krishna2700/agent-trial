<div dir="rtl">

# 🛒 فل اسٹیک پروڈکٹ اسٹور

![Node.js](https://img.shields.io/badge/Node.js-v18%2B-green?style=flat-square&logo=node.js)
![React](https://img.shields.io/badge/React-Vite-blue?style=flat-square&logo=react)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-brightgreen?style=flat-square&logo=mongodb)
![License](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)
![Deployment](https://img.shields.io/badge/Deployed%20on-Render-purple?style=flat-square)

ایک مکمل **MERN اسٹیک** (MongoDB، Express، React، Node.js) پروڈکٹ اسٹور ایپلیکیشن۔ اس ایپ میں پروڈکٹس کو **بنانے، دیکھنے، اپ ڈیٹ کرنے اور حذف کرنے** کی مکمل سہولت موجود ہے — یہ سب ایک صاف ستھری REST API کے ذریعے MongoDB ڈیٹابیس سے جڑی ہے۔

---

## 🌐 لائیو ڈیمو

> ایپلیکیشن آن لائن دیکھنے کے لیے نیچے دیے گئے لنک پر کلک کریں:

**[https://full-stack-project-deployment-product.onrender.com/](https://full-stack-project-deployment-product.onrender.com/)**

---

## ✨ خصوصیات

- ✅ پروڈکٹس کا اضافہ، ترمیم اور حذف (مکمل CRUD)
- ✅ MongoDB کے ذریعے مستقل ڈیٹا محفوظ کرنا
- ✅ React + Vite سے تیز اور جدید فرنٹ اینڈ
- ✅ Express.js پر مبنی صاف REST API
- ✅ Render.com پر مکمل ڈیپلوئمنٹ

---

## 🛠️ ٹیکنالوجی اسٹیک

| پرت | ٹیکنالوجی |
|-----|-----------|
| فرنٹ اینڈ | React، Vite |
| بیک اینڈ | Node.js، Express.js |
| ڈیٹابیس | MongoDB (Mongoose ODM) |
| ڈیپلوئمنٹ | Render.com |

---

## 📁 پروجیکٹ کی ساخت

```
فل-اسٹیک-پروڈکٹ-اسٹور/
│
├── backend/
│   ├── config/         ← ڈیٹابیس کنکشن کی ترتیب
│   ├── controllers/    ← API درخواستوں کا منطقی حصہ
│   ├── models/         ← Mongoose ڈیٹا اسکیمے
│   ├── routes/         ← API راستے (Routes)
│   └── server.js       ← بیک اینڈ کا داخلی نقطہ
│
├── frontend/           ← React ایپلیکیشن (Vite)
│
└── package.json        ← پروجیکٹ کی ترتیبات
```

---

## 🚀 شروعات کیسے کریں

### ضروریات

اس پروجیکٹ کو چلانے کے لیے آپ کے کمپیوٹر پر درج ذیل چیزیں انسٹال ہونی چاہئیں:

- **Node.js** — ورژن 18 یا اس سے اوپر
- **MongoDB Atlas** اکاؤنٹ — یا مقامی MongoDB سرور

---

### انسٹالیشن کے مراحل

**مرحلہ ۱ — ریپوزیٹری کلون کریں**

```bash
git clone https://github.com/krishna2700/Full-Stack-Project-Deployment--Product-Store.git
cd Full-Stack-Project-Deployment--Product-Store
```

**مرحلہ ۲ — تمام انحصارات انسٹال کریں**

```bash
npm install
```

**مرحلہ ۳ — ماحولیاتی متغیرات ترتیب دیں**

پروجیکٹ کے مرکزی فولڈر میں `.env` نام کی فائل بنائیں اور اس میں درج ذیل معلومات شامل کریں:

```env
MONGO_URI=آپ_کا_MongoDB_کنکشن_لنک
PORT=5000
```

**مرحلہ ۴ — ایپلیکیشن چلائیں**

```bash
npm run dev
```

> ✅ ایپلیکیشن چلنے کے بعد `http://localhost:5000` پر دستیاب ہوگی۔

---

## 📡 API اینڈ پوائنٹس

تمام API راستے `/api/products` کے تحت دستیاب ہیں:

| طریقہ (Method) | اینڈ پوائنٹ | کام |
|----------------|-------------|-----|
| `GET` | `/api/products` | تمام پروڈکٹس کی فہرست |
| `POST` | `/api/products` | نئی پروڈکٹ شامل کریں |
| `PUT` | `/api/products/:id` | موجودہ پروڈکٹ میں ترمیم |
| `DELETE` | `/api/products/:id` | پروڈکٹ حذف کریں |

---

## 📄 لائسنس

یہ پروجیکٹ **MIT لائسنس** کے تحت جاری کیا گیا ہے۔ آپ اسے آزادانہ استعمال، ترمیم اور تقسیم کر سکتے ہیں۔

---

<div align="center">

بنایا گیا ❤️ کے ساتھ | [krishna2700](https://github.com/krishna2700)

</div>

</div>
