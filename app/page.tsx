"use client";
import "../styles/globals.css";
import { FC, useEffect } from "react";
import { useRouter } from "next/navigation";

const HomePage: FC = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/home");
  }, [router]);

  return null;
};

export default HomePage;
