import './App.css';
import Layout from './components/Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Note from './components/Note';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path=':slug' element={<Note />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
