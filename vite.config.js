import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: 'jsx', // 기본 로더를 'jsx'로 설정
    include: /src\/.*\.[jt]sx?$/, // .js와 .jsx 파일 모두 포함
  },
})