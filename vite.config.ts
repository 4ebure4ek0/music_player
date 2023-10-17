import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias:{
      src: "/src",
      components: "/src/components",
      pages: "/src/pages",
      images:"/src/assets/img",
      music:"/src/assets/music",
      performers: "/src/assets/img/performers",
      albums: "/src/assets/img/albums"
    }
  }
})
