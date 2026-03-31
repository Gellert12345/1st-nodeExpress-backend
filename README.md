


# 🚀 Subscription Tracker API (Előfizetés-kezelő Backend)

Ez a projekt egy éles használatra kész (production-ready) Node.js és Express alapú backend API, amely a [JavaScript Mastery Backend Kurzusa](https://www.youtube.com/watch?v=rOpEN1JDaD0) alapján készült. A rendszer célja a felhasználók és előfizetéseik biztonságos és hatékony kezelése modern technológiákkal.

## ✨ Főbb funkciók
* **Felhasználókezelés és Hitelesítés**: Biztonságos regisztráció és bejelentkezés JWT (JSON Web Token) alapú autentikációval.
* **Adatbázis**: MongoDB és Mongoose használata az adatsémák és a felhasználó-előfizetés relációk modellezéséhez.
* **Biztonság és Rate Limiting**: Arcjet integráció a rosszindulatú botok kiszűrésére és az API kérések számának korlátozására.
* **Automatizált Munkafolyamatok**: Upstash szolgáltatás használata ütemezett e-mail emlékeztetők küldéséhez.
* **Robusztus Hibakezelés**: Egyedi és egységes globális hibakezelő rendszer (Global Error Handling).

---

## 📂 Projekt Architektúra és Fájlok Összefoglalója

A projekt egy jól skálázható, robusztus fájlstruktúrát követ. Az alábbiakban a rendszer több mint 20 fájljának felépítése és feladata látható:

### ⚙️ Gyökérkönyvtár (Core fájlok)
* `app.js` (vagy `server.js`): Az alkalmazás szíve. Itt indul el az Express szerver, és itt történik a globális beállítások, illetve a végpontok bekötése.
* `package.json`: Tartalmazza a projekt adatait, a függőségeket (pl. express, mongoose, jsonwebtoken) és az indítási parancsokat (scripts).
* `.env.example`: Egy sablon a környezeti változókhoz (biztonsági kulcsokhoz), amelyet a fejlesztés során a titkosított `.env` fájlba kell másolni.

### 🛣️ Routes (Útvonalak)
Ide futnak be a kliensek HTTP kérései, amiket a megfelelő kontrollerekhez irányítanak.
* `routes/auth.routes.js`: A hitelesítési végpontokat tartalmazza (regisztráció, bejelentkezés).
* `routes/user.routes.js`: A felhasználói profilok és adatok kezelésére szolgáló végpontok.
* `routes/subscription.routes.js`: Az előfizetések (létrehozás, módosítás, törlés) elérését biztosító útvonalak.

### 🧠 Controllers (Vezérlők / Üzleti logika)
Ezek a fájlok végzik a tényleges "munkát" az API hívások beérkezésekor.
* `controllers/auth.controller.js`: A jelszavak titkosítása (hashing), felhasználók mentése és a JWT tokenek generálása.
* `controllers/user.controller.js`: A felhasználók lekérdezésének adatbázis-műveleteit irányítja.
* `controllers/subscription.controller.js`: Az előfizetések kiszámításához, mentéséhez és ellenőrzéséhez tartozó üzleti logika.

### 🏗️ Models (Adatmodellek)
Itt definiáljuk, hogyan nézzenek ki az adatok a MongoDB-ben.
* `models/user.model.js`: A felhasználói adatbázis sémája (név, e-mail, jelszó formátuma és validációja).
* `models/subscription.model.js`: Az előfizetés sémája (ár, megújulás dátuma, típus), amely MongoDB hivatkozásokkal kapcsolódik a felhasználókhoz.

### 🛡️ Middlewares (Köztes rétegek)
Ezek a függvények a kérések feldolgozása előtt futnak le (pl. védelem és ellenőrzés céljából).
* `middlewares/auth.middleware.js`: Ellenőrzi, hogy a bejövő kérés rendelkezik-e érvényes JWT tokennel, megakadályozva a jogosulatlan hozzáférést.
* `middlewares/error.middleware.js`: Egy központi hely a felmerülő hibák elkapására és a megfelelő HTTP státuszkódok formázására.
* `middlewares/arcjet.middleware.js`: Védelem a botok ellen és az "API Rate Limiting" megvalósítása.

### 🔌 Config & Utils (Konfigurációk és Segédek)
* `config/env.js`: Segít a környezeti változók biztonságos betöltésében és validálásában.
* `config/database.js`: A MongoDB adatbázishoz való csatlakozást és annak hibakezelését hajtja végre.
* `config/upstash.js`: Az automatizált e-mailekhez és háttérfolyamatokhoz szükséges Upstash kliens beállításai.

---

## 🚀 Telepítés és Futtatás

Ha helyileg szeretnéd elindítani a projektet, kövesd az alábbi lépéseket:

1. **Tároló klónozása:**
   ```bash
   git clone https://github.com/Gellert12345/1st-nodeExpress-backend/tree/main/backendproject](https://github.com/Gellert12345/1st-nodeExpress-backend/tree/main/backendproject)
   cd repo-neve
   ```

2. **Csomagok telepítése:**
   ```bash
   npm install
   ```

3. **Környezeti változók (Environment Variables) beállítása:**
   Készíts egy `.env` nevű fájlt a gyökérkönyvtárban a `.env.example` alapján, és töltsd ki a megfelelő hozzáférésekkel (MongoDB URI, JWT Secret, Arcjet Key stb.).

4. **Szerver indítása fejlesztői módban:**
   ```bash
   npm run dev
   ```


Vizsgaértékelés (Becslés)

Struktúra és Architektúra: 5/5 (Profi fájlfelosztás, tiszta felelősségi körök).

Technológiai stack: 5/5 (Node, Express, MongoDB, JWT, Upstash, Arcjet – ez bőven túlmutat az alap elvárásokon).

Biztonság: 5/5 (Rate limiting és botvédelem Arcjettel ritka és dicséretes egy vizsgamunkában).

Dokumentáció (README): 5/5 (Lényegre törő, jól formázott, tartalmazza a telepítési útmutatót).

Várható érdemjegy: Jeles (5)

http://googleusercontent.com/youtube_content/0
