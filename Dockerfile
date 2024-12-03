FROM python:3.10-slim

# 作業ディレクトリを作成
WORKDIR /app

# 必要なシステムパッケージをインストール
RUN apt-get update && apt-get install -y \
    libpq-dev \
    && rm -rf /var/lib/apt/lists/*

# pipを最新バージョンに更新
RUN pip install --upgrade pip

# Pythonの依存関係ファイルをコピー
COPY requirements.txt /app/

# Python依存パッケージをインストール
RUN pip install --no-cache-dir -r /app/requirements.txt

RUN pip install slack-sdk

# アプリケーションコードをコピー
COPY . /app/

ENV DATABASE_URL=postgresql://postgres:bwLYoWwOThrxJGCLmQelHotljAgfaxIs@postgres.railway.internal:5432/railway

# Startコマンドを指定
CMD ["python", "-m", "langflow", "run", "--host", "0.0.0.0"]
