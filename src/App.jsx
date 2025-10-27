import { Routes, Route, useNavigate, useSearchParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useEffect } from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import { ContactProvider } from './contexts/ContactContext'
import Layout from './components/Layout'
import Home from './pages/Home'
import IA from './pages/IA'
import Developpement from './pages/Developpement'
import Reparation from './pages/Reparation'
import Projets from './pages/Projets'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Devis from './pages/Devis'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

// Composant pour gérer les redirections depuis les paramètres URL
function RouteRedirect() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  
  useEffect(() => {
    const route = searchParams.get('route')
    if (route && route !== '') {
      // Nettoyer l'URL et naviguer vers la route
      const cleanRoute = route.replace(/~and~/g, '&')
      navigate(`/${cleanRoute}`, { replace: true })
    }
  }, [searchParams, navigate])
  
  return <Home />
}

function App() {
  return (
    <ThemeProvider>
      <ContactProvider>
        <Helmet>
          <title>Klyon - Solutions Informatiques Professionnelles</title>
          <meta name="description" content="Klyon, votre partenaire informatique dans le Sud de la France. Support, développement sur-mesure et solutions IA." />
        </Helmet>
        
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<RouteRedirect />} />
            <Route path="ia" element={<IA />} />
            <Route path="developpement" element={<Developpement />} />
            <Route path="reparation" element={<Reparation />} />
            <Route path="projets" element={<Projets />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:slug" element={<BlogPost />} />
            <Route path="devis" element={<Devis />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </ContactProvider>
    </ThemeProvider>
  )
}

export default App
