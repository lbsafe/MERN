# MERN

<p align="center"><img src="https://github.com/lbsafe/MERN/assets/65703793/13bc2fb4-2752-4167-882f-c3528d7fce1b" alt="mern" width="400px"></p>

## MERN 이란 
> MERN은 줄임말로 보통 MERN 스택이라고 하며 MongoDB + Express + React + Node.js 로 웹 사이트를 개발하는 것을 의미한다.

- (M)몽고DB - 데이터베이스
- (E)익스프레스 - 서버 프레임워크
- (R)리액트 - 클라인트 프레임워크
- (N)노드JS - 서버 개발언어

***
## MERN Setting

**:one: 몽고DB 세팅**

1. 몽고DB 설치

    1-1. 설치 링크 : :link:[MongoDB][mongodblink]

    [mongodblink]: https://www.mongodb.com/ko-kr "Go Mongodb"

    1-2. 설치 순서 : 제품 -> 커뮤니티에디션 -> Download Community -> Download(버전선택) -> 설치 후 Connect 버튼 클릭

2. 몽고DB 간단 설명

    2-1. MongoDBCompass - 데이터베이스에 접속하기 위한 프로그램  

    2-2. URL - 데이터 베이스 기준 주소  

    2-3. 기본 구성 요소 (admin, config, local)

**:two: EXPRESS**

1. 익스프레스(express) 생성기 설치 명령어

    ```js
    npm install -g express-generator
    ```

**:three: nodemon**

1. nodemon 기능 
    > 노드 서버를 키고 코드를 수정하거나 업데이트했을 때, 서버를 내리고 다시 켜야 반영이 되는데 이런 번거로운 작업을 일일히 할 필요없이 변경점을 감지해주고 반영시켜주는 기능

2. nodemon 설치 명령어

    ```js
    npm install -g nodemon
    
    npm list -g //설치 확인
    -> (express-generator@4.16.1)
    ```

**:four: EXPRESS 프로젝트 (서버) 생성**

1. 경로 : 서버를 생성하려는 폴더 내부/ (instagram-clone/)

2. 명령어
    ```js
    express --view=no-view server
    ```

**:five: 파일 서버 생성 및 구축**

1. 경로 : server/files (files 폴더 생성)

2. 샘플 데이터

    2-1. 각각 폴더 생성
    ```html
    server/files/avatar   
    server/files/photos
    ```
    2-2. 각각 폴더에 샘플 이미지 데이터 넣기
    
**:six:** 서버에 필요한 패키지 설치

1. 패키지 목록
    * compression - 압축 기능 제공
    * cookie-parser - 쿠키 수집 기능
    * cors - Cross Origin 요청을 가능하게 한다.
    * debug - 버그 처리 관련 기능 제공
    * dotenv - 환경변수 사용 제공
    * express - 프레임워크
    * express-validator - 유효성 검사 기능 제공
    * helmet - 요청 헤더 보호
    * http-errors - http 에러 관련 처리
    * jsonwebtoken - JWT 기능
    * luxon - 날짜 데이터 가공 기능
    * mongoose - 몽고DB ODM (서버와 몽고DB 사이 다리)
    * morgan - 로그 기록 기능 (에러 로그, 통신 로그 등)
    * multer - 파일 처리 기능
    * passport - 인증 처리
    * passport-jwt - passport와 JWT 연결

2. 패키지 설치

    2-1. cd server 서버로 이동

    2-2. 설치 명령어

    ```js
    npm install compression cookie-parser cors debug dotenv express express-validator helmet http-errors jsonwebtoken luxon mongoose morgan multer passport passport-jwt
    ```
3. package.json 파일에서 패키지 설치 확인

    3-1. 잘못 된 패키지 설치 경우 패키지 삭제

    ```js
    npm uninstall 패키지 이름
    ```

**:seven: 환경변수 파일 (.env) 생성**

1. 경로 : server 폴터 안에 .env 생성 (server/.env)

2. .env 설정
    ```js
    // 데이터베이스 주소
    MONGODB_URL="mongodb://127.0.0.1:27017/instagram_clone_db"
    // 파일 서버 주소
    FILE_URL="http://127.0.0.1:3000/api/files"
    // JWT(토큰) 생성에 사용되는 키
    SECRET="bunny"
    ```

**:eight: models 데이터 처리 영역 생성**

1. 경로 : server/models

2. models 폴더 파일 생성 목록
    * User.js
    * Post.js
    * Likes.js
    * Following.js
    * Comments.js

3. 각 models 파일 설정하기

**:nine: 미들웨어 설정하기**

>클라이언트와 서버 중간에서 처리 역할 담당  
-> 요청과 응답 사이에서 여러가지 일을 처리한다.

1. 경로 : server/middlewares

2. middlewares 하위 파일 생성 목록
    * auth.js - 인증 처리
    * loginValidator.js - 로그인 폼데이터 유효성 검사
    * signUpValidator.js - 가입 폼데이터 유효성 검사
    * upload.js - 파일 처리

3. 용어 정리
    ```html
    DBMS - DataBase Management System
    예) 몽고DB, 오라클, MySQL
    요청 - 헤더 바디
    헤더 - 메타 데이터
    바디 - 실제 데이터 (유저가 입력한 데이터)
    ```

**:keycap_ten: 컨트롤러 설정하기**

> 애플리케이션의 로직 (실질적인 클라이언트 요청 처리 부분)

1. 경로 : server/controllers

2. controllers 하위 파일 생성 목록
    * userController.js - 유저 로직
    * postController.js - 게시물 로직
    * commentController.js - 댓글 로직
    * profileController.js - 프로필 로직

**:one::one: 라우터 설정하기**

> 사용자의 요청과 적절한 리소스를 연결한다. (서버가 제공하는 서비스 목록)

1. 경로 :  server/routes

2. index.js 기존 내용 삭제 후 작성

**:one::two: app 모듈 설정하기**

1. 경로 : server/app.js

2. app.js 기존 내용 삭제 후 작성

**:one::three: seed 데이터 설정**

> 샘플 데이터 생성 처리

1. 경로 : server/seed.js

2. seed.js 생성 후 내용 작성

3. 씨드데이터 생성 명령어

    3-1. 경로 : server/

    3-2. node seed .env의 데이터베이스 주소
        
    ```js
    node seed "mongodb://127.0.0.1:27017/instagram_clone_db"
    ```
    3-3. 몽고db에서 데이터가 잘 추가 되었는지 확인

***
### POSTMAN - 서버 테스트 도구

1. postman 가입 및 설치

2. 사용방법
    
    2-1. 세팅하기
    ```html
    workspaces -> my workspace -> create new collection(+버튼) ->
    blank collection -> 생성후 (점3개) 메뉴 클릭 후 이름 변경(instagram-api) -> Add request -> 상단부분에서 이름(index) 및 router 변경 -> localhost:3000/api 치고 Send
    ```
    2-2. 라우터 및 테스트 경로 설정
    ```html
    (각 확인하려는 파일에 맞게 작성한다. localhost:3000/api/users)

    (postman 테스트 시 body 탭의 index.js router 연결에 맞게 Post로 설정 (테스트할때마다 맞게 바꿔준다. 토큰이 필요한 경우 Auth 에서 bearer Token 설정) 
    raw, json 설정 후 테스트 코드작성
    ```

    2-3. 팔로우 처럼 params 관련 테스트 시 쿼리스트링 이용 
    ```html
    localhost:3000/api/profiles?following=jobs
    ```

    2-4. 작성 예시
    ```js
    {
        "email": "lbsafe@example.com",
        "name": "test",
        "username": "lbsafe",
        "password": "12345"
    }
    ```

    2-5. 변경사항이 생기면 저장해준다.

3. 개발 서버 실행하는 명령어 추가

    3-1. 경로: package.json / scripts

    ```js
    // "start:watch": "nodemon ./bin/www" 추가

    "scripts": {
        "start": "node ./bin/www",
        "start:watch": "nodemon ./bin/www"
    },
    ```

    3-2. 개발 서버 실행 명령어 (server/)
    ```html
    npm run start:watch
    ```
***