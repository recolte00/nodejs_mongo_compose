// モジュールをロード
const express = require("express"),
      mongoose = require("mongoose");

// ポートとホストを設定
const PORT = 8080;
const HOST = "0.0.0.0";

// expressを使用
const app = express();

// データベース接続
mongoose.connect(
    "mongodb://mongo/test",
    { useUnifiedTopology: true,
      useNewUrlParser: true
    }
);

const db = mongoose.connection;
db.once("opne", () => {
    // 接続成功した場合
    console.log("Success MongoDB connected!!");
});

// 指定したポートを監視
app.listen(PORT, HOST);
console.log('Running on http://${HOST}:${PORT}');