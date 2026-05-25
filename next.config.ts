import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // 로컬 파일 드롭 시 별도 설정 없이 동작
  },
};

export default nextConfig;
