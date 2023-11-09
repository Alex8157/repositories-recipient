import { Routes, Route } from "react-router-dom";
import styles from './styles/app.module.css';
import SearchPage from './pages/Search';
import RepositoryDetailPage from './pages/RepositoryDetail';

function App() {
  return (
    <div className={styles.App}>
      <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/repository/:id" element={<RepositoryDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
