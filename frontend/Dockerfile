# Node.js alap image
FROM node:18

# OpenSSL workaround
ENV NODE_OPTIONS=--openssl-legacy-provider

# Munkakönyvtár beállítása
WORKDIR /app

# Függőségek telepítése
COPY package*.json ./
RUN npm install

# Kód bemásolása
COPY . .

# React fejlesztői szerver futtatása
CMD ["npm", "start"]

# Port beállítása
EXPOSE 3000
