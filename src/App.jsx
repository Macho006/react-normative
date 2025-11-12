import { Routes, Route } from 'react-router-dom'
import Home from './page/Home'
import Layout from "./components/Layout";
import About from './page/About'
import Contact from './page/Contact'
import Services from './page/Services'
import NotFound from './page/NotFound'
import Slug from './page/Slug'
import Cards from "./page/Cards";
import { Hooks } from './page/Hooks';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/product/:slug" element={<Slug />} />
          <Route path="cards" element={<Cards />} />
          <Route path="hooks" element={<Hooks />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
