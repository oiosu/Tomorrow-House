## 🏠 Tomorrow-House

#### ◼ 2309 SuperCoding TEAM 01 PJT 2 

◼ 2023.12.11(월)~2023.12.29(금) (3주 진행, FE/BE 협업 진행)

* 오늘의 집 벤치 마킹을 통해 '내일의 집' 쇼핑몰 프로젝트 진행

      협업 진행 : Discord, Notion

### ✔️Back-end
<img src="https://img.shields.io/badge/swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=green">

    BE Team : 김은지(CTO) (마이페이지, 장바구니) , 정재화 (쇼핑몰 판매, 조회), 유동후 (유저 로그인 / 로그아웃, 주문)

### ✔️Frond-end
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"><img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white"><img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=purple">

    FE Team : 임수경(CTO) (메인페이지, 장바구니), 김여울 (베스트상품, 결제완료), 김두희 (주문목록, 상품상세), 이세호 (로그인, 회원가입), 이주연 (관리자 페이지)

---


### 1. ERD
![image](https://github.com/oiosu/Tomorrow-House/assets/99783474/9acf968a-93bf-4db4-acc1-dc999e0b93e5)

* Backend Github : https://github.com/orgs/BE-ShoppingmallProject/repositories

* Backend Swagger : http://mini.jh1105.xyz:5305/swagger-ui/index.html


◾ 회원가입 : POST `/api/sign/register` _ 이메일, 패스워드, 이름, 닉네임, 전화번호, 성별, 주소, 프로필 이미지 입력 후 회원가입 

◾ 로그인 : POST `/api/sign/login` _ JWT 인증 토큰 값을 이용해서 이메일, 패스워드 입력 후 로그인 

◾ 회원가입 : DELETE `/api/sign/{user_id}` _ 입력한 user_id에 해당하는 회원의 상태를 deleted로 갱신 

◾ 판매상품등록 : POST `/api/post/add/` _ 판매자 id로 로그인 후 판매할 상품 등록 

◾ 판매상품수정 : PUT `/api/post/update` _ 판매자 id로 로그인 후 판매 중인 상품 정보 수정 

◾ 판매상품삭제 : DELETE `/api/post/{post_id}` _ 판매자 id로 로그인 후 판매 중인 상품 삭제 

◾ 모든상품페이지조회(일반user) : GET `api/post/normal` _ 판매자가 아닌 로그인한 일반 유저가 판매 중인 상품 페이지 조회 

◾ 단일상품페이지조회(판매자) : GET `api/post/{post_id}` _ 판매자가 자신이 판매 중인 상품 중 하나만 선택해서 조회 

◾ 카테고리별 상품페이지조회(판매자) : GET `api/post/category/` _ 판매자가 자신이 판매 중인 상품을 카테고리별로 선택해서 조회 

◾ 판매중인 모든상품페이지조회(판매자) : GET `api/post/seller-page/` _ 판매자가 자신이 판매 중인 모든 상품을 조회 

◾ 판매자 ID로 모든상품페이지조회(판매자) : GET `api/post/seller/` _ 판매자 id로 판매 중인 모든 상품을 조회 

◾ 장바구니 상품 담기 : POST `api/cart/add` _ 아이템 수량과 옵션을 선택해서 장바구니 안에 상품 담기 

◾ 장바구니 상품 수량 변경 : PUT `api/cart/updateCount/{cart_item_id}` _ 장바구니 안 상품 아이디를 이용해서 상품 수량 변경 

◾ 장바구니 상품 삭제 : DELETE `api/cart/delete/{cart_item_id}` _ 장바구니 안 상품 아이디를 이용해서 상품 삭제 

◾ 유저 장바구니 조회 : GET `/api/myPage/cart` _ JWT 인증 토큰 값을 이용해서 현재 로그인한 유저의 장바구니 불러오기 

◾ 유저 정보 조회 : GET `/api/myPage/UserInfo` _ JWT 인증 토큰 값을 이용해서 현재 로그인한 유저의 정보 불러오기 


---





