# Step 1: React 앱 빌드
FROM node:22 AS build

WORKDIR /app

# 패키지 캐시를 활용하여 빌드 속도 최적화
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund

# 소스 코드 복사 후 빌드
COPY . .
RUN NODE_OPTIONS="--max-old-space-size=256" CI=true npm run build

# Step 2: Nginx를 사용하여 정적 파일 제공
FROM nginx:alpine

# React 빌드된 파일을 Nginx 경로에 복사
COPY --from=build /app/build /usr/share/nginx/html

# Nginx 설정 파일 복사
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
