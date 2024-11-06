import logo from './assets/tag.png';
import moldura from './assets/moldura.png';
import scrolldown from './assets/scroll.gif';

import './App.css';
import Tilt from 'react-parallax-tilt';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    const handleScroll = () => {
      const scrolldownImg = document.querySelector('.scrolldown');
      if (window.scrollY > 0) {
        scrolldownImg.classList.add('fadeout');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="app">
      <div className="container">
        <div className="img-div">
          <img src={moldura} className="moldura" alt="logo" />
          <div>
            <Tilt
              gyroscope={true}
              trackOnWindow={true}
              perspective={500}
              className="tilt"
              reset={false}
            >
              <img src={logo} className="logo appearance " alt="logo" />
            </Tilt>
          </div>
        </div>
      </div>
      <div className="semi-container">
        <img className="scrolldown" src={scrolldown} alt="" />
      </div>
      <div className="text-container">
        <h1 className="title">Grafitt(AR)</h1>
        <p className="description">
          O grafite é uma poderosa forma de luta, resistência e expressão. Ele
          nasce das margens da sociedade como um movimento artístico que dá voz
          àqueles que frequentemente não têm espaço nos meios tradicionais.
        </p>

        <p>
          O grafite transforma a paisagem, expressando temas sociais, culturais
          e políticos, muitas vezes expondo injustiças e desafios que as
          comunidades sentem em silêncio. Outras vezes expressando o seu
          cotidiano, sendo uma declaração de amor ou apenas sua opinião sobre
          algo supérfulo{" "}
        </p>
      </div>

      <div className="text-container-2">
        <p>
          {" "}
          No entanto, há um debate sobre os impactos negativos do grafite em
          espaços privados e na arquitetura urbana.{" "}
        </p>
        <p>
          {" "}
          Muitos veem o grafite em residências, prédios históricos ou áreas
          comerciais como uma forma de "agressão" visual. A crítica se concentra
          no fato de que nem todos os espaços foram designados para intervenções
          artísticas e, em alguns casos, o grafite pode danificar a estética
          arquitetônica ou gerar custos de limpeza.
        </p>
        <p>
          {" "}
          contraste entre o impacto positivo de dar voz a uma comunidade e as
          críticas ao dano físico leva à reflexão sobre como equilibrar o
          direito à expressão com a preservação dos espaços públicos e privados.
        </p>
      </div>

      <div className="text-container-3">
        <p>
          A realidade aumentada pode ser uma alternativa para explorar o
          grafite. A tecnologia permite que as pessoas vejam e interajam com
          obras de arte digitalmente projetadas em espaços públicos ou privados.
          Isso pode ser uma maneira de preservar a arquitetura original de um
          edifício enquanto ainda permite que os artistas compartilhem suas
          mensagens e visões com o mundo.
        </p>
        <p>video</p>
        <p>
          O projeto Grafitt(AR), tem como objetivo criar uma forma alternativa
          de pessoas sem espaço se expressarem, de maneira diferente e mais
          segura quanto a cidade. De forma sem agradir a arquitetura e sem
          cuistos a cidade.{" "}
        </p>
        <p> video</p>

        <p>
        Projetos futuros:
        </p>

        <p>Login e usuários</p>
        <p>Upload pelos usuários</p>
        <p>votação para arte da semana</p>
        <p>modelos 3D</p>

      </div>
    </div>
  );
}

export default App;
