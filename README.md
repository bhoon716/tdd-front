# Think. Do. Done. (TDD) - Frontend ✅

> 심플하게 이용할 수 있는 To Do List 프론트엔드

해당 프로젝트는 **Kotlin**과 **Test-Driven Development(TDD)**을 학습하기 위해 개발된 **Todo List 백엔드 서버**와 연동되는 **프론트엔드** 레포지토리입니다.

🔗 **Backend Repository**: [https://github.com/bhoon716/tdd](https://github.com/bhoon716/tdd)

## ✨ 주요 기능

-   **JWT 인증**: 안전한 로그인 및 회원가입 기능
-   **Kanban Board**: `Think` → `Do` → `Done` 3단계로 할 일을 체계적으로 관리
-   **Drag & Drop**: 마우스 드래그로 간편하게 상태 변경
-   **Dark UI**: 세련되고 눈이 편안한 다크 모드 디자인

## 🛠 기술 스택

-   **Frontend**: React 18, TypeScript, Vite
-   **Styling**: Vanilla CSS (Dark Theme)
-   **State Management**: Context API
-   **Drag & Drop**: @hello-pangea/dnd
-   **HTTP Client**: Axios

## 🚀 실행 방법

1.  **패키지 설치**
    ```bash
    npm install
    ```

2.  **개발 서버 실행**
    ```bash
    npm run dev
    ```

## 📂 프로젝트 구조

```
src/
├── api/            # API 통신 (Axios)
├── components/     # UI 컴포넌트
├── context/        # 인증 상태 관리
├── pages/          # 페이지 (Login, Signup, TodoList)
└── index.css       # 스타일 정의
```
