# OpenJDK 17 기반 이미지 사용
FROM openjdk:17-jdk-slim

# 작업 디렉토리 설정
WORKDIR /apps

# 빌드된 JAR 파일을 컨테이너 내부로 복사
COPY build/libs/worklog-0.0.1-SNAPSHOT.jar app.jar

# 실행 명령어 설정
CMD ["java", "-jar", "app.jar"]

# 스프링부트 메모리 최적화
ENV JAVA_OPTS="-Xms128m -Xmx512m"