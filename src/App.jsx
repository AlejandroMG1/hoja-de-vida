import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useRef } from 'react';
import { store } from 'state-pool';
import {
  faGraduationCap,
  faBriefcase,
  faGamepad,
  faCommentDots,
  faCertificate,
} from '@fortawesome/free-solid-svg-icons';
import PublicLayout from 'layouts/PublicLayout ';
import 'styles/globals.css';
import Info from 'pages/Info';

const App = () => {
  store.setState('sections', [
    {
      key: 1,
      tittle: 'Información academica',
      icon: faGraduationCap,
      content: (
        <>
          <span>Pregrado ingeniería en sistemas.</span>
          <br />
          <span>Universidad de Antioquia, Medellín, Colombia.</span>
          <br />
          <span>01/2017-Actualidad.</span>
        </>
      ),
      sectionRef: useRef(),
    },
    {
      key: 2,
      tittle: 'Información Laboral',
      icon: faBriefcase,
      content: (
        <>
          <span>Desarrollador Full Stack.</span>
          <br />
          <span>Zaito S.A.S, Medellín, Colombia.</span>
          <br />
          <span>07/2018-Actualidad.</span>
        </>
      ),
      sectionRef: useRef(),
    },
    {
      key: 3,
      tittle: 'Hobbies',
      icon: faGamepad,
      content: (
        <>
          <li>Ver películas y series.</li>
          <li>Jugar videojuegos.</li>
          <li>Ir a comer a restaurantes.</li>
        </>
      ),
      sectionRef: useRef(),
    },
    {
      key: 4,
      tittle: 'Idiomas',
      icon: faCommentDots,
      content: (
        <>
          <li>Español: Hablante nativo.</li>
          <li>inglés: nivel B2</li>
        </>
      ),
      sectionRef: useRef(),
    },
    {
      key: 5,
      tittle: 'Cursos y certificaciones',
      icon: faCertificate,
      content: (
        <>
          <li>Udemi, Django beginner, 2018</li>
          <li>Udemi, Django advanced, 2018</li>
          <li>Udemi, Make apliactions with ionic 4, 2019</li>
        </>
      ),
      sectionRef: useRef(),
    },
  ]);
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
