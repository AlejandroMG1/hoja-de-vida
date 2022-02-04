import Section from 'components/Section';
import React from 'react';
import { useGlobalState } from 'state-pool';
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Info = () => {
  const [sections] = useGlobalState('sections');
  return (
    <div className='p-7'>
      <Section
        tittle='Descripción personal'
        content='Desarrollador capaz de entender problemas con facilidad y encontrar soluciones de software con rapidez, siempre en busca de ofrecer la mayor calidad posible en sus desarrollos, con habilidades enfocadas en back end con experiencia tanto en desarrollo de back end como front end, versátil con capacidad de moverse entre múltiples tecnologías según sea requerido.'
      />
      {sections.map((section) => {
        return (
          <Section
            tittle={section.tittle}
            content={section.content}
            key={section.key}
            sRef={section.sectionRef}
          />
        );
      })}
      <button
        type='button'
        className='rounded-full bg-blue-400'
        style={{
          width: '50px',
          height: '50px',
          position: 'fixed',
          bottom: '15px',
          right: '15px',
        }}
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        <FontAwesomeIcon icon={faAngleDoubleUp} style={{ fontSize: '25px' }} />
      </button>
    </div>
  );
};

export default Info;
