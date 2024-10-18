# Node.js rasmiy tasviridan foydalanish
FROM node:18-alpine

# Ish jildini o'rnatish
WORKDIR /app

# package.json va package-lock.json fayllarini nusxalash
COPY package*.json ./

# Bog'liqliklarni o'rnatish
RUN npm install

# Loyiha fayllarini nusxalash
COPY . .

# Loyihani build qilish
RUN npm run build

COPY default.conf /etc/nginx/conf.d/default.conf

# Ilovani ishga tushirish uchun port
EXPOSE 3000

# Ilovani ishga tushirish
CMD ["node", ".output/server/index.mjs"]