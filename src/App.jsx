import { Routes, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ThemeProvider } from './contexts/ThemeContext'
import { ContactProvider } from './contexts/ContactContext'
import Layout from './components/Layout'
import Home from './pages/Home'
import Services from './pages/Services'
import Competences from './pages/Competences'
import Projets from './pages/Projets'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Bam from './pages/Bam'
import NotFound from './pages/NotFound'

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
            <Route index element={<Home />} />
            <Route path="services" element={<Services />} />
            <Route path="competences" element={<Competences />} />
            <Route path="projets" element={<Projets />} />
            <Route path="contact" element={<Contact />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:slug" element={<BlogPost />} />
            <Route path="bam" element={<Bam />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </ContactProvider>
    </ThemeProvider>
  )
}

export default App
