import Header from './components/ui/Header';
import DateTracker from './components/ui/DateTracker';
import { ThemeProvider } from "@/components/ui/theme-provider"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header />
      <DateTracker />
    </ThemeProvider>
  )
}

export default App
