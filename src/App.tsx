import { PropsWithChildren } from 'react';
import { ThemeProvider } from "@/components/ui/theme-provider"
import Header from './components/ui/Header';
import DateTracker from './components/ui/DateTracker';

function App({children}: PropsWithChildren) {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header />
      <DateTracker />
      {children}
    </ThemeProvider>
  )
}

export default App
