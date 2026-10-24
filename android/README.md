# קשר לאנדרואיד (Google Play)

האפליקציה לאנדרואיד היא Trusted Web Activity: היא פותחת את https://kesher-app.netlify.app במסך מלא, בלי שורת כתובת, עם אייקון ומסך פתיחה. כל עדכון לאתר מגיע לאפליקציה מיד, בלי לעדכן גרסה בחנות.

- שם החבילה: `app.netlify.kesher_app.twa` (קבוע לתמיד אחרי ההעלאה הראשונה לחנות)
- הבנייה רצה ב-GitHub Actions (`.github/workflows/android.yml`) בכל שינוי בתיקייה הזאת, או ידנית מלשונית Actions.

## חתימה

מפתח ההעלאה לחנות (`upload-keystore.p12`) **לא** נמצא במאגר, כי המאגר ציבורי. הוא נשמר אצלך, ובשני secrets ב-GitHub:
- `KESHER_KEYSTORE_BASE64`: הקובץ בקידוד base64
- `KESHER_KEYSTORE_PASSWORD`: הסיסמה

בלי שני ה-secrets הבנייה מייצרת רק APK לבדיקה. **שמרו גיבוי של הקובץ והסיסמה.** אם הם אובדים, אפשר לבקש מ-Google Play לאפס את מפתח ההעלאה.

טביעת האצבע (SHA-256) של מפתח ההעלאה:
`F4:37:E2:FC:EA:04:14:C1:4C:5B:36:5F:DC:3D:A5:07:C7:A9:82:9F:6F:BA:4F:A9:AA:50:41:09:18:BA:07:63`

## חיבור האתר לאפליקציה

כדי שהאפליקציה תיפתח בלי שורת כתובת, האתר מצהיר עליה ב-`public/.well-known/assetlinks.json`. אחרי ההעלאה הראשונה ל-Google Play, החנות חותמת את האפליקציה במפתח משלה (Play App Signing). צריך להעתיק מ-Play Console > Test and release > App integrity את ה-SHA-256 של **App signing key** ולהוסיף אותו לרשימה בקובץ הזה.

## חומרים לחנות

`store/icon-512.png` (אייקון) ו-`store/feature-graphic-1024x500.png` (תמונה ראשית).
