# User authentication (帳密驗證)

這是一個練習驗證登入帳號密碼的專案，可透過種子資料產生的預設帳號密碼登入

## 預設帳號組

- email: tony@stark.com
     password: iamironman

- email: captain@hotmail.com
     password: icandothisallday

- email: peter@parker.com
     password: enajyram

- email: natasha@gamil.com
password: *parol#@$!

- email: nick@shield.com
password: password


## 建置環境

- node.js
- express
- mongoose
- mongodb

## 安裝流程

### 1. 開啟終端機使用git clone將專案下載至本地

```
git clone https://github.com/NokoDOjo/authentication.git

```
### 2. 進入專案資料夾

```
cd authentication

```
### 3. 安裝套件

```
npm install

```
### 4. 產生種子資料

```
npm run seeds

```
### 5. 啟動專案

```
npm run dev

```
### 6. 瀏覽專案


出現下列訊息，即代表伺服器端與資料庫端連線成功，可透過 http://localhost:3000 瀏覽專案
```
App is running on http://localhost:3000
mongodb connected

```


