import DateTracker from './components/ui/DateTracker';
import { ThemeProvider } from "@/components/ui/theme-provider"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <DateTracker />
    </ThemeProvider>
  )
}

export default App
