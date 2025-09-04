import LandingPage from './pages/landingPage'
import NavBar from "./components/NavBar/navBar.tsx"

const App = () => {
  return (
    <main className='App'>
      <NavBar />
      <LandingPage />
    </main>
  )
}

export default App