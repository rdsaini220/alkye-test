
'use client'
import React, { createContext, useState, useContext, useEffect, useMemo } from "react";
import Cookies from "js-cookie";
import { useRouter } from 'next/navigation';

const apiUrl = process.env.NEXT_PUBLIC_NEXTAUTH_URL;

const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const router = useRouter();

  const fetchUserData = async (userData) => {
    try {
      const response = await fetch(`${apiUrl}/login/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      const data = await response.json();

      if (data && data.token) {
        setIsLoggedIn(true);
        setUser(data);
        Cookies.set("user", JSON.stringify(data));
        router.push('/dashboard');
        return data;
      } else {
        setIsLoggedIn(false);
        setUser(null);
        Cookies.remove("user");
        return null;
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      setIsLoggedIn(false);
      setUser(null);
      Cookies.remove("user");
      return error;
    }
  };

  const isLogin = () => {
    let userData = Cookies.get("user");
    if (userData) {
      userData = JSON.parse(userData);
      setUser(userData);
      setIsLoggedIn(true);
      router.push('/dashboard');
    } else {
      setIsLoggedIn(false);
      setUser(null);
      router.push('/login');
    }
  };

  useEffect(() => {
    isLogin();
  }, []);

  const login = (data) => {
    if (data) {
      return fetchUserData(data);
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
    Cookies.remove("token");
    Cookies.remove("user");
    router.push('/login');
  };

  const memoedValue = useMemo(() => ({
    isLoggedIn,
    user,
    login,
    logout,
  }), [isLoggedIn, user]);

  return (
    <AuthContext.Provider value={memoedValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
