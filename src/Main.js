import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../src/components/App';
import SharedPage from './pages/SharedPage';
import FolderPage from './pages/FolderPage';
import HomePage from './pages/HomePage';

function Main() {
  return (
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="shared" element={<SharedPage />} />
          <Route path="folder" element={<FolderPage />} />
        </Routes>
      </App>
    </BrowserRouter>
  );
}

export default Main;
