import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './components/Layout'
import { About } from './pages/About'
import { Activities } from './pages/Activities'
import { Contacts } from './pages/Contacts'
import { Conventions } from './pages/Conventions'
import { Documents } from './pages/Documents'
import { Events } from './pages/Events'
import { Founders } from './pages/Founders'
import { Home } from './pages/Home'
import { Join } from './pages/Join'
import { News } from './pages/News'
import { Organs } from './pages/Organs'
import { Policy } from './pages/Policy'
import { ReservedArea } from './pages/ReservedArea'
import { Territory } from './pages/Territory'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'chi-siamo', element: <About /> },
      { path: 'soci-fondatori', element: <Founders /> },
      { path: 'organi-associativi', element: <Organs /> },
      { path: 'attivita', element: <Activities /> },
      { path: 'diventa-socio', element: <Join /> },
      { path: 'documenti', element: <Documents /> },
      { path: 'news', element: <News /> },
      { path: 'eventi-formazione', element: <Events /> },
      { path: 'convenzioni', element: <Conventions /> },
      { path: 'delegazioni-territoriali', element: <Territory /> },
      { path: 'contatti', element: <Contacts /> },
      { path: 'privacy-policy', element: <Policy type="privacy" /> },
      { path: 'cookie-policy', element: <Policy type="cookie" /> },
      { path: 'area-riservata', element: <ReservedArea /> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
