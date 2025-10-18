import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'

function App() {

  return (
    <>
      <Header />
      <main className='p-1.5'>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
