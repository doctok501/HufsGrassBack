# github-commit-crawler

Github commit crawler with Nodejs, Slack API, Kakaowork Bot API

---

## 프론트엔드

- https://github.com/bengHak/garden_frontend

### 기능

- 매 시간마다 슬랙에 연동된 깃헙의 커밋 기록을 읽어서 Postgresql에 저장
- 커밋기록들을 REST API 제공
- 10시, 22시에 멤버들의 커밋상태를 카카오워크 Bot으로 알림 주기

### Slack Github 봇 연동

- https://slack.github.com/

### Slack API

- https://api.slack.com/ (이곳에서 Slack API 토큰을 받아옵니다)

### 카카오워크 Bot

- https://docs.kakaoi.ai/kakao_work/botdevguide/

### 서버 켜는 법

```
docker-compose up -d
```

### 환경변수 파일(.env)

```
- KAKAOWORK_API(카카오워크 안쓰면 생략)
- KAKAOWORK_CONVERSATION_ID(카카오워크 안쓰면 생략)
- SLACK_API_TOKEN(봇 토큰 새로 발급)
- SLACK_CHANNEL_ID(C로 시작하는 채널명)
- DB_USER(postgress)
- DB_PASSWORD
- DB_NAME
- DB_PORT(보통 5432)
- DB_HOST(컨테이너 ip입력)
- MEMBER_LIST=고병학,신형철,임나경(띄어쓰기 없이 쉼표로 구분)
- MEMBER_LIST_GITHUB=bengHak,ShinHyeongcheol,NakyungIm (띄어쓰기 없이 쉼표로 구분)
- TZ=Asia/Seoul
```

## 참고 깃허브

- https://github.com/junho85/garden5
- https://github.com/bengHak/github-commit-crawler

## 순서

1. 도커 설치(이미지를 포함)후 위에서 설명한 '서버 켜는 법'으로 실행
1-1. docker exec -it postgresql psql -U postgres -W postgres postgres 를 통해 테이블 확인 가능
1-2. docker ps 해서 나온 컨테이너 id를 통해 호스트 ip 확인 -> docker inspect "컨테이너 ip"

2. 프론트엔드 실행
2-1. node js에 npm이용(install, start) -> 리눅스 환경에서는 버전확인 필수
2-2. 프론트엔드 프록시 서버는 0.0.0.0으로 테스트후 서버 배포 후 수정

3. 도메인 받고 웹 배포
