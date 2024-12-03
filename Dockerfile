# ベースイメージ (Python公式イメージを使用)
FROM ubuntu:latest

# 必要な環境変数を設定
ENV PYTHONUNBUFFERED=1 \
    DEBIAN_FRONTEND=noninteractive

# 必要なシステムパッケージをインストール
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    libpq-dev \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# 作業ディレクトリを作成
WORKDIR /app

# Pythonの依存関係ファイルをコピー
COPY requirements.txt /app/

# Python依存パッケージをインストール
RUN pip install --no-cache-dir -r requirements.txt

# アプリケーションコードをコピー
COPY . /app/

# Startコマンドを指定
CMD ["python", "-m", "langflow", "run", "--host", "0.0.0.0"]
