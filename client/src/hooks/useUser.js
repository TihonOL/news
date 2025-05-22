import { useEffect, useState } from "react";
import axiosInstance, { setAccessToken } from "../axiosInstance";

export default function useUser() {
  const [user, setUser] = useState({ status: "fetching", data: null });

  useEffect(() => {
    axiosInstance("/tokens/refresh")
      .then(({ data }) => {
        setTimeout(() => {
          setUser({ status: "logged", data: data.user });
        }, 1000);
        setAccessToken(data.accessToken);
      })
      .catch(() => {
        setUser({ status: "guest", data: null });
        setAccessToken ("");
      });
  }, []);

  const logoutHandler = async () => {
    try {
      await axiosInstance.get("/auth/logout");
      setAccessToken('');
      setUser({ status: "guest", data: null }); // Сначала обновляем состояние
      return true; // Возвращаем успешный статус
    } catch (error) {
      console.error('Logout error:', error);
      return false;
    }
  };

  const signUpHandler = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    if (!formData.email || !formData.password || !formData.name) {
      return alert("Missing required fields");
    }
    axiosInstance.post("/auth/signup", formData).then(({ data }) => {
      setUser({ status: "logged", data: data.user });
    });
  };

  const signInHandler = async (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    if (!formData.email || !formData.password) {
      return alert("Missing required fields");
    }
    await axiosInstance.post("/auth/signin", formData).then(({ data }) => {
      setUser({ status: "logged", data: data.user });
    });
  };

  return {
    user,
    signInHandler,
    signUpHandler,
    logoutHandler,
  };
}
