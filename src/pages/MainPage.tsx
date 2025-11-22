import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Button } from '../components/Button';

const MainPage = () => {
    const { isAuthenticated } = useAuth();

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '2rem',
            background: 'radial-gradient(circle at 50% 50%, #1e293b 0%, #0f172a 100%)'
        }}>
            <h1 className="animate-slide-up" style={{
                fontSize: '8rem',
                fontWeight: 900,
                marginBottom: '-1rem',
                background: 'linear-gradient(to bottom, rgba(255,255,255,0.1), rgba(255,255,255,0.0))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '-0.05em',
                lineHeight: 1,
                userSelect: 'none'
            }}>
                TDD
            </h1>
            <h2 className="animate-slide-up delay-100" style={{
                fontSize: '4rem',
                fontWeight: 800,
                marginBottom: '1.5rem',
                background: 'linear-gradient(to right, #818cf8, #c084fc, #f472b6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
                position: 'relative',
                zIndex: 1
            }}>
                Think. Do. Done.
            </h2>
            <p className="animate-slide-up delay-100" style={{
                fontSize: '1.5rem',
                color: 'var(--color-text-muted)',
                marginBottom: '3rem',
                maxWidth: '600px',
                lineHeight: 1.6,
                fontWeight: 400
            }}>
                복잡함은 덜어내고 본질에 집중하세요.<br />
                당신의 생각을 실행으로 옮기는 가장 심플한 방법.
            </p>

            <div className="animate-slide-up delay-200" style={{ display: 'flex', gap: '1rem' }}>
                {isAuthenticated ? (
                    <Link to="/todos">
                        <Button style={{
                            fontSize: '1.125rem',
                            padding: '1rem 2.5rem',
                            borderRadius: 'var(--radius-full)',
                            boxShadow: '0 4px 6px -1px rgba(99, 102, 241, 0.2), 0 2px 4px -1px rgba(99, 102, 241, 0.1)'
                        }}>
                            내 할 일 목록으로 가기
                        </Button>
                    </Link>
                ) : (
                    <>
                        <Link to="/login">
                            <Button style={{
                                fontSize: '1.125rem',
                                padding: '1rem 2.5rem',
                                borderRadius: 'var(--radius-full)',
                                boxShadow: '0 4px 6px -1px rgba(99, 102, 241, 0.2), 0 2px 4px -1px rgba(99, 102, 241, 0.1)'
                            }}>
                                로그인
                            </Button>
                        </Link>
                        <Link to="/signup">
                            <Button variant="secondary" style={{
                                fontSize: '1.125rem',
                                padding: '1rem 2.5rem',
                                background: 'rgba(255, 255, 255, 0.05)',
                                color: 'var(--color-text-main)',
                                border: '1px solid var(--color-border)',
                                borderRadius: 'var(--radius-full)',
                                backdropFilter: 'blur(10px)'
                            }}>
                                회원가입
                            </Button>
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
};

export default MainPage;
