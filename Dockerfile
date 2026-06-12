# Stage 1: Build
FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

ARG PUBLIC_CONTACT_FORM_ENDPOINT=""
ENV PUBLIC_CONTACT_FORM_ENDPOINT=$PUBLIC_CONTACT_FORM_ENDPOINT

RUN npm run build

# Stage 2: Serve
FROM nginx:alpine AS runner

COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
