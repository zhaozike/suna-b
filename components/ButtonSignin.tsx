// components/ButtonSignin.tsx
// 这是一个占位符组件，用于解决构建错误。
// 实际的登录按钮组件可能需要更多功能。

"use client";

import { Button } from "@/components/ui/button"; // 确保此路径正确

export default function ButtonSignin() {
  const handleSignIn = () => {
    // 占位符：点击登录按钮的逻辑
    console.log("Sign In button clicked (placeholder)");
    alert("登录功能（占位符）"); // 使用 alert 模拟，实际项目中应避免使用
  };

  return (
    <Button onClick={handleSignIn} className="bg-blue-500 hover:bg-blue-600 text-white rounded-md">
      登录
    </Button>
  );
}
