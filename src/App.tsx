import { PropsWithChildren } from 'react';
import { ThemeProvider } from "@/components/ui/theme-provider"
import Header from './components/ui/Header';

function App({children}: PropsWithChildren) {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header />
      {children}
    </ThemeProvider>
  )
}

export default App
