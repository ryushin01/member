import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main/Main';

const Router = () => {
  return (
    <BrowserRouter basename="/member">
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
