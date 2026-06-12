# Stage 1: Build
FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install --include=optional \
  && arch="$(apk --print-arch)" \
  && case "$arch" in \
    x86_64) npm install --no-save @rollup/rollup-linux-x64-musl ;; \
    aarch64) npm install --no-save @rollup/rollup-linux-arm64-musl ;; \
    *) echo "Unsupported Alpine arch for Rollup native binary: $arch" && exit 1 ;; \
  esac

COPY . .

ARG PUBLIC_CONTACT_FORM_ENDPOINT=""
ARG PUBLIC_WHATSAPP_NUMBER=""
ARG PUBLIC_WHATSAPP_MESSAGE=""
ENV PUBLIC_CONTACT_FORM_ENDPOINT=$PUBLIC_CONTACT_FORM_ENDPOINT
ENV PUBLIC_WHATSAPP_NUMBER=$PUBLIC_WHATSAPP_NUMBER
ENV PUBLIC_WHATSAPP_MESSAGE=$PUBLIC_WHATSAPP_MESSAGE

RUN npm run build

# Stage 2: Serve
FROM nginx:alpine AS runner

COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
