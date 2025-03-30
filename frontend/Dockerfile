# Node.js alap image
FROM node:18

# Munkakönyvtár beállítása
WORKDIR /app

# Függőségek telepítése
COPY package.json package-lock.json ./
RUN npm install

# Kód bemásolása
COPY . .

# React fejlesztői szerver futtatása
CMD ["npm", "start"]

# Port beállítása
EXPOSE 3000
