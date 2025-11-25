# Think. Do. Done. (TDD) - Frontend ✅

심플하게 이용할 수 있는 To Do List 프론트엔드입니다.  
Kotlin 기반의 **Test-Driven Development(TDD)** Todo List 백엔드 서버와 연동되어 동작합니다.

🔗 Backend Repository: https://github.com/bhoon716/tdd

---

## ✨ 주요 기능

- **JWT 인증**
  - 안전한 회원가입 / 로그인
  - 로그인 상태에 따른 화면 제어
- **Kanban Board**
  - `Think → Do → Done` 3단계로 할 일을 체계적으로 관리
- **Drag & Drop**
  - 마우스 드래그로 쉽게 상태 변경
- **다크 테마 UI**
  - Vanilla CSS로 구현된 심플한 다크 테마

---

## 🛠 기술 스택

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Vanilla CSS (Dark Theme)
- **State Management**: React Context API
- **Drag & Drop**: `@hello-pangea/dnd`
- **HTTP Client**: Axios

---

## 📂 프로젝트 구조

```bash
src/
├── api/            # API 통신 (Axios)
├── components/     # UI 컴포넌트
├── context/        # 인증 상태 관리 (Context API)
├── pages/          # 페이지 (Login, Signup, TodoList)
└── index.css       # 전역 스타일 및 다크 테마
````

> 🚀 로컬 실행 방법
> 
> 이 프론트엔드는 tdd 백엔드 서버와 함께 실행해야 정상 동작합니다.


0. 사전 준비
- Git
- JDK 17 이상
- Node.js 18 이상, npm

1. 백엔드 서버 실행
- 먼저 백엔드 레포지토리를 클론하고 서버를 실행합니다.

```bash
# 백엔드 레포지토리 클론
git clone https://github.com/bhoon716/tdd.git
cd tdd

# 개발 서버 실행
./gradlew bootRun
```
- API 서버: http://localhost:8080
- H2 콘솔: http://localhost:8080/h2-console
- 백엔드 포트를 변경했다면, 프론트엔드에서 사용하는 Axios의 기본 baseURL도 같이 변경해야 합니다.

2. 프론트엔드 실행
새 터미널을 열어서 프론트엔드를 실행합니다.

```bash
# 프론트엔드 레포지토리 클론
git clone https://github.com/bhoon716/tdd-front.git
cd tdd-front

# 패키지 설치
npm install

# 개발 서버 실행
npm run dev
```
- Vite 개발 서버: 기본값 http://localhost:5173

3. 접속
백엔드 서버(http://localhost:8080)가 실행 중인지 확인합니다.

브라우저에서 http://localhost:5173에 접속합니다.