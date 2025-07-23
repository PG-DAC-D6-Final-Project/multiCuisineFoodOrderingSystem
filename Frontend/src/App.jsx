import Admin from './pages/admin/admin'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<Admin/>} />
      </Routes>
    </Router>
  )
}

export default App
