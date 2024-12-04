import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Doacoes-de-Livros-Vai-na-Web/', // Substitua <nome-do-repositorio> pelo nome do seu repositório no GitHub
})
