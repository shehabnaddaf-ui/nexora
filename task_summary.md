## 📌 ملخص المهمة
إزالة السواد المحيط بالشعار في Hero و Navbar عبر معالجة أقوى للصورة ودمج CSS.

## 📂 الملفات المعدلة
- `scripts/remove-bg.py` — flood fill من الحواف لإزالة الخلفية السوداء
- `src/assets/logo-emblem-transparent.png` — إعادة معالجة
- `src/components/logo/NexoraEmblemImg.jsx` — class `nexora-emblem`
- `src/index.css` — `mix-blend-mode: lighten`

## 🔧 التعديلات
- حذف كل البكسلات السوداء المتصلة بحواف الصورة
- تنعيم حواف التوهج الأزرق المتبقية
- `lighten` يدمج أي سواد متبقي مع خلفية #050505

## ⚠️ ملاحظات
- الحل يعمل على الصورة الأصلية بدون استبدالها

## 💡 تحسينات مستقبلية (اختياري)
- PNG شفاف 100% من المصمم لأفضل نتيجة
