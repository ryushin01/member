import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  // root path 선언
  base: '/member',
  // vite에서 svg를 사용하기 위한 설정
  plugins: [svgr(), react()],
  server: {
    open: true, // 개발 서버 실행시 브라우저 자동 실행
  },
  build: {
    chunkSizeWarningLimit: 1600, // 패키지 크기 압축 경고 제한
  },
});
