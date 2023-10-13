import React from 'react'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import s from './App.module.css'
import Footer from './components/Footer'
import Nav from './components/Nav'

// const IndexPage = React.lazy(() => import('./pages/index'))
// const AboutPage = React.lazy(() => import('./pages/about'))
import AboutPage from './pages/about'
import IndexPage from './pages/index'

const wrapSuspense = (element: React.ReactNode) => {
  return (
    <React.Suspense>
      <Nav />
      {element}
      <Footer />
    </React.Suspense>
  )
}

const router = createHashRouter(
  [
    {
      path: '/',
      element: wrapSuspense(<IndexPage />)
    },
    {
      path: '/about',
      element: wrapSuspense(<AboutPage />)
    }
  ],
  { basename: '/' }
)

function App() {
  // const [greetMsg, setGreetMsg] = useState('')
  // const [name, setName] = useState('')
  // async function greet() {
  //   // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  //   setGreetMsg(await invoke('greet', { name }))
  // }

  return (
    <div className={s.container}>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
