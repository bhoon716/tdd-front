import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import TodoList from './pages/todo/TodoList';
import './App.css';

const PrivateRoute = () => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

const PublicRoute = () => {
  const { isAuthenticated } = useAuth();
  return !isAuthenticated ? <Outlet /> : <Navigate to="/todos" replace />;
};

import MainPage from './pages/MainPage';

// ... imports

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public Routes (Login/Signup) */}
          <Route element={<PublicRoute />}>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Route>

          {/* Private Routes (Todos) */}
          <Route element={<PrivateRoute />}>
            <Route path="/todos" element={<TodoList />} />
          </Route>

          {/* Main Page */}
          <Route path="/" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
