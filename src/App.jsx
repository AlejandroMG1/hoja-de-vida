import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PublicLayout from 'layouts/PublicLayout ';
import 'styles/globals.css';
import Info from 'pages/Info';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PublicLayout />}>
          <Route path='' element={<Info />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
