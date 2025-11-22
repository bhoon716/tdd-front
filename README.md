# Think. Do. Done. (TDD)

> **복잡함은 덜어내고 본질에 집중하세요.**
> 당신의 생각을 실행으로 옮기는 가장 심플한 방법.

![Project Banner](https://via.placeholder.com/1200x600/0f172a/818cf8?text=Think.+Do.+Done.)

## 📖 프로젝트 소개

**Think. Do. Done.**은 단순한 할 일 관리 앱이 아닙니다. 생각(Think)을 정리하고, 행동(Do)으로 옮기며, 완료(Done)의 기쁨을 만끽할 수 있도록 설계된 **Kanban 스타일의 생산성 도구**입니다.

직관적인 드래그 앤 드롭 인터페이스와 몰입감을 주는 다크 모드 디자인으로, 당신의 업무 흐름을 끊김 없이 이어줍니다.

## ✨ 주요 기능

-   **Kanban Board**: `Think` -> `Do` -> `Done` 3단계 흐름으로 업무를 시각화합니다.
-   **Drag & Drop**: 마우스로 카드를 끌어서 상태를 손쉽게 변경할 수 있습니다.
-   **Premium Dark UI**: 눈이 편안한 다크 테마와 세련된 글래스모피즘(Glassmorphism) 디자인을 적용했습니다.
-   **Micro-interactions**: 버튼 호버, 입력창 포커스 등 섬세한 애니메이션으로 사용하는 즐거움을 더했습니다.
-   **Secure Auth**: JWT 기반의 안전한 로그인/회원가입 시스템을 제공합니다.

## 🛠 기술 스택

이 프로젝트는 최신 웹 기술을 사용하여 빠르고 안정적인 경험을 제공합니다.

-   **Frontend Framework**: [React 18](https://reactjs.org/)
-   **Build Tool**: [Vite](https://vitejs.dev/)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Styling**: Vanilla CSS (Variables, Flexbox/Grid, Animations)
-   **State Management**: React Context API
-   **Drag & Drop**: [@hello-pangea/dnd](https://github.com/hello-pangea/dnd)
-   **HTTP Client**: [Axios](https://axios-http.com/)
-   **Routing**: [React Router v6](https://reactrouter.com/)

## 🚀 시작하기

### 필수 조건

-   Node.js (v16 이상 권장)
-   npm 또는 yarn

### 설치 및 실행

1.  **저장소 클론**
    ```bash
    git clone https://github.com/bhoon716/tdd-front.git
    cd tdd-front
    ```

2.  **패키지 설치**
    ```bash
    npm install
    ```

3.  **개발 서버 실행**
    ```bash
    npm run dev
    ```
    브라우저에서 `http://localhost:5173`으로 접속하세요.

## 📂 프로젝트 구조

```
src/
├── api/            # API 통신 로직 (Axios 설정)
├── components/     # 재사용 가능한 UI 컴포넌트 (Button, Input, TodoItem 등)
├── context/        # 전역 상태 관리 (AuthContext)
├── pages/          # 페이지 컴포넌트 (Login, Signup, TodoList, MainPage)
├── types/          # TypeScript 타입 정의
├── App.tsx         # 라우팅 설정
├── main.tsx        # 진입점
└── index.css       # 전역 스타일 및 변수 설정
```

## 🎨 디자인 시스템

-   **Colors**: Slate & Indigo 기반의 다크 테마
-   **Typography**: Inter 폰트 사용, 가독성 최적화
-   **Effects**: Backdrop Blur, Smooth Transitions, Gradients

---

© 2024 Think. Do. Done. All rights reserved.
