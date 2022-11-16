# 프로젝트 : 로스트아크 커뮤니티

![Untitled](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F45f7555a-8964-429f-b68d-60d11bfc2fb0%2FUntitled.png?table=block&id=8ddea30d-cce6-4882-9e65-98809eceb757&spaceId=83f45596-d92c-46e2-b170-00c441d94d81&width=2000&userId=dee01582-c4b2-4792-952a-17b4eb37394c&cache=v2)

<br/>

# 프로젝트 소개

게임 사이트는 대부분 다른 게임들과 묶여있고 카테고리에 로스트아크 라는 게임이 있는데, 로스트아크 유저만을 위한 커뮤니티 사이트 및 굿즈 구매 사이트를 만들고자 프로젝트를 시작하였습니다.

<br/><br/>

# 프로젝트 내용

## 클래스 선택

[http://localhost:3000/classes/selectClass/](http://localhost:3000/classes/selectClass/)

![Untitled](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd01989a4-5051-4946-9117-afb4f6b9358b%2FUntitled.png?table=block&id=82834ef3-ba2f-447a-aca8-93098d78b971&spaceId=83f45596-d92c-46e2-b170-00c441d94d81&width=2000&userId=dee01582-c4b2-4792-952a-17b4eb37394c&cache=v2)

- grid를 이용한 클래스 나열 및 반응형

<br/><br/>

## 클래스 상세

[http://localhost:3000/classes/classDetail/assassin/](http://localhost:3000/classes/classDetail/assassin/)

![Untitled](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fb904a977-1747-4711-af18-b086db82feae%2FUntitled.png?table=block&id=95a8d7c2-a633-43a9-980a-159e34d463ea&spaceId=83f45596-d92c-46e2-b170-00c441d94d81&width=2000&userId=dee01582-c4b2-4792-952a-17b4eb37394c&cache=v2)

<br/><br/>

## 커뮤니티 목록

[http://localhost:3000/boards/](http://localhost:3000/boards/)

- 페이지네이션으로 목록 보여주기
- useRef, useEffect를 이용한 자동이동 캐러셀 구현
- 검색 기능

![ezgif.com-gif-maker (2).gif](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/1002d0c1-a68a-45ab-9f1a-095cbab06853/ezgif.com-gif-maker_%282%29.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221116%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221116T090019Z&X-Amz-Expires=86400&X-Amz-Signature=7e87c3866160e8cae4455207d302791f2cf933e9a7af45faad3d7d46f05ece1b&X-Amz-SignedHeaders=host&x-id=GetObject)

<br/><br/>

## 커뮤니티 생성

[http://localhost:3000/boards/new/](http://localhost:3000/boards/new/)

![Untitled](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F99516ecf-6b5a-4490-b973-fd1dba0bbe2d%2FUntitled.png?table=block&id=50838608-ffbc-43f4-991d-eb47bfac5f77&spaceId=83f45596-d92c-46e2-b170-00c441d94d81&width=2000&userId=dee01582-c4b2-4792-952a-17b4eb37394c&cache=v2)

<br/><br/>

## 커뮤니티 상세

[http://localhost:3000/boards/](http://localhost:3000/boards/636df31c1a9e0f002973b93e/)[boardId]

- 좋아요 기능

![Untitled](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F64b25279-3847-4bbd-9888-61ee6d2e7f10%2FUntitled.png?table=block&id=2230ac56-94a0-4d87-b806-da4a116f14df&spaceId=83f45596-d92c-46e2-b170-00c441d94d81&width=2000&userId=dee01582-c4b2-4792-952a-17b4eb37394c&cache=v2)

<br/><br/>

## 댓글

- 댓글 CRUD
  ![Untitled](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F56bbd3b0-c3b9-48c3-8615-adfa1d7762b9%2FUntitled.png?table=block&id=47f4aee5-817d-4e81-869f-aea18f2b95ff&spaceId=83f45596-d92c-46e2-b170-00c441d94d81&width=2000&userId=dee01582-c4b2-4792-952a-17b4eb37394c&cache=v2)

![Untitled](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F355e0653-766f-491c-bcc9-758a69aec0d3%2FUntitled.png?table=block&id=92268ea5-85d8-4609-b6be-1a396928a4a9&spaceId=83f45596-d92c-46e2-b170-00c441d94d81&width=2000&userId=dee01582-c4b2-4792-952a-17b4eb37394c&cache=v2)

## <br/>

<br/>

## 구현예정

- useForm과 yup을 이용한 Product CRUD 및 리스트 구현
- 로그인 시 마이페이지 활성화 및 마이페이지 구현
- 구매 결제 기능
- accessToken을 활용한 권한분기
