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

    3-1. User.js

    ```js
    // require (ES5) = import (ES6)
    // crypto - 암호화 기능
    const mongoose = require("mongoose");
    const Schema = mongoose.Schema;
    const jwt = require("jsonwebtoken");
    const crypto = require("crypto");
    const Post = require("./Post");
    const Following = require("./Following");

    /* User Schema (모델의 구조) */

    const userSchema = new Schema({
        // 이메일
        email: { type: String, minLength: 5 },
        // 비밀번호
        password: { type: String, minLength: 5 },
        // 비밀번호 암호화에 사용되는 키
        salt: { type: String },
        // 아이디
        username: { type: String, minLength: 3, required: true },
        // 이름
        name: { type: String },
        // 프로필 사진
        avatar: { type: String, default: "default.png" },
        // 자기 소개
        bio: { type: String },
    }, { // 옵션
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    });
    ```
***