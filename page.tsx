"use client"

import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    window.location.href = "/exam.html"
  }, [])

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        background: "#f4f7f6",
        direction: "rtl",
      }}
    >
      <div
        style={{
          textAlign: "center",
          padding: "40px",
          background: "#fff",
          borderRadius: "20px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ color: "#007bff", marginBottom: "10px" }}>جاري التحميل...</h2>
        <p style={{ color: "#666" }}>يتم تحويلك لصفحة الامتحان</p>
      </div>
    </div>
  )
}
