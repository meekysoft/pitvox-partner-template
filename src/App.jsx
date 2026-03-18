import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Competitions from './pages/Competitions.jsx'
import Leaderboards from './pages/Leaderboards.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="competitions" element={<Competitions />} />
        <Route path="leaderboards" element={<Leaderboards />} />
      </Route>
    </Routes>
  )
}
