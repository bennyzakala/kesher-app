# קשר ב-Google Play: מה למלא ב-Play Console

כל מה שצריך להעתיק לטפסים, לפי הסדר שבו Play Console מבקש אותו.

## יצירת האפליקציה (Create app)

| שדה | ערך |
|---|---|
| App name | קשר |
| Default language | Hebrew – עברית (iw-IL) |
| App or game | App |
| Free or paid | Free |

## Main store listing

**Short description** (עד 80 תווים):

> היכרויות חינם לגמרי: מחפשים לפי עיר, אוהבים תמונה או תשובה, ומתחילים לדבר.

**Full description:**

> קשר היא אפליקציית היכרויות ישראלית, חינמית לגמרי. בלי מנויים, בלי תשלומים ובלי הגבלות.
>
> במקום להחליק ימינה ושמאלה, מכירים אנשים דרך מה שהם באמת משתפים: תמונות ותשובות לשאלות כמו "יום ראשון מושלם" או "הדרך לכבוש אותי". אהבתם משהו מסוים? עושים לייק בדיוק לו, ואפשר להוסיף תגובה כדי לפתוח שיחה.
>
> מה יש בקשר:
> • חיפוש לפי עיר, מתל אביב ועד אילת
> • סינון לפי טווח גילאים, סטטוס, דת ואמונה וילדים
> • לייקים לתמונה או לתשובה מסוימת, עם תגובה אישית
> • ורדים בלי הגבלה, כדי לבלוט
> • "אהבו אותך": רואים מי עשה לך לייק, בחינם
> • התאמה כשהלייק הדדי, וצ'אט ישיר
> • פרופיל עם עד 6 תמונות, 3 שאלות ופרטים כמו גובה, עיסוק, השכלה והרגלים
> • דיווח וחסימה בכל פרופיל ובכל שיחה
>
> פרטיות: כתובת האימייל ותאריך הלידה לא מוצגים לאף אחד, רק הגיל. התמונות גלויות רק למשתמשים רשומים, ואפשר למחוק את החשבון וכל המידע בכל רגע.
>
> קשר מיועדת לבני 18 ומעלה.

**Graphics:** אייקון `icon-512.png`, תמונה ראשית `feature-graphic-1024x500.png` (שניהם בתיקייה הזאת), ולפחות 2 צילומי מסך מהטלפון (גילוי, פרופיל, התאמה, צ'אט).

**Category:** Dating. **Contact email:** כתובת שתופיע בחנות.

## App content (Policy > App content)

- **Privacy policy:** `https://kesher-app.netlify.app/privacy.html`
- **App access:** "All or some functionality is restricted". מוסיפים פרטי התחברות של חשבון בדיקה שפתחתם באתר (אימייל וסיסמה), כדי שהבודקים של Google יוכלו להיכנס.
- **Ads:** No, my app does not contain ads.
- **Content rating:** קטגוריה Social or communication. עונים שיש תקשורת בין משתמשים (Users can interact: Yes), שיתוף תמונות (Yes), ושאין אלימות, הימורים או תוכן מיני בוטה. הדירוג שיתקבל הוא בדרך כלל 18+ / Mature בגלל שמדובר בהיכרויות.
- **Target audience:** 18 and over בלבד.
- **News app:** No.
- **Government app:** No.
- **Financial features:** None.
- **Health:** None.
- **Dating apps declaration** (אם מופיע): כן, אפליקציית היכרויות. יש דיווח וחסימה, וגיל מינימלי 18.

## Data safety

**Does your app collect or share user data?** Yes. **Encrypted in transit?** Yes. **Can users request deletion?** Yes (מחיקת חשבון בתוך האפליקציה, לשונית פרופיל).

אף מידע לא משותף עם צדדים שלישיים (Shared: No). כל הסוגים שלמטה הם Collected, לצורך App functionality (ו-Account management איפה שרלוונטי), חובה או לא לפי הטבלה:

| סוג מידע ב-Play | מה נאסף | חובה? |
|---|---|---|
| Personal info > Name | שם פרטי | חובה |
| Personal info > Email address | אימייל | חובה |
| Personal info > Other info | תאריך לידה, עיר, גובה, עיסוק, השכלה, סטטוס | חלק חובה (תאריך לידה, עיר) |
| Personal info > Religious or political beliefs | דת ואמונה | רשות |
| Personal info > Sexual orientation / Other | מגדר | רשות |
| Photos and videos > Photos | תמונות פרופיל | חובה כדי להופיע |
| Messages > Other in-app messages | הודעות בצ'אט | רשות |
| App activity > Other user-generated content | תשובות לשאלות, לייקים, דיווחים | רשות |

## Release

1. Test and release > Testing > **Closed testing**: יוצרים מסלול, מוסיפים לפחות 12 בודקים (רשימת אימיילים של חשבונות Google), ומעלים את הקובץ `.aab`.
2. **Play App Signing:** מאשרים (ברירת המחדל).
3. אחרי 14 יום של בדיקה סגורה עם 12 בודקים לפחות, מבקשים גישה ל-Production (חובה בחשבונות פרטיים חדשים).
4. ב-Test and release > App integrity מעתיקים את SHA-256 של **App signing key** ומוסיפים אותו ל-`public/.well-known/assetlinks.json`, כדי שהאפליקציה תיפתח בלי פס כתובת.
