FROM node:12-slim

# ワーキングディレクトリを作成
WORKDIR /usr/src/app

# アプリケーションの依存関係をインストールする
COPY package*.json ./
RUN npm install
RUN npm install -g express

# アプリケーションのソースをバンドルする
COPY . .

# ポートを開放する
EXPOSE 8080
# アプリケーションを起動
CMD [ "node", "app.js" ]
