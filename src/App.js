import logo from './assets/5.png';
import moldura from './assets/moldura.png';
import basnky from './assets/banksy-disarm-cke.webp';
import wall from './assets/wall.jpg';
import home from './assets/pichodemais.jpg';
import nausea from './assets/nausea.webp';
import tag1 from './assets/smiley.webp';
import tag2 from './assets/guilty.webp';
import scrolldown from './assets/scroll.gif';

import './App.css';
import Tilt from 'react-parallax-tilt';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function App() {

  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {

    setTimeout(() => {
      let wallsizes = document.querySelector(".wall");
      let wallSize = {
        width: wallsizes.clientWidth,
        height: wallsizes.clientHeight,
      };

      console.log(wallSize);

      const tlBasnky = gsap.timeline({
        scrollTrigger: {
          trigger: "#basky",
          start: "top bottom",
          end: "bottom+=100 bottom",
          scrub: true,
         
        },
      });

      const stick1 = gsap.timeline({
        scrollTrigger: {
          trigger: ".wall",
          start: "top bottom-=100",
          end: "bottom bottom",
          scrub: true,
         
        },
      });

      const stick2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".wall",
          start: "top bottom-=100",
          end: "bottom bottom",
          scrub: true,
         
        },
      });

      tlBasnky.fromTo("#basky", { opacity: 0, x: -100 }, { opacity: 1, x: 0 });

      stick1.fromTo(
        "#sticky1",
        { opacity: 0, y: 0 },
        { opacity: 1, y: -wallSize.height / 1.5 }
      );

      stick2.fromTo(
        "#sticky2",
        { opacity: 0, y: 0 },
        { opacity: 1, y: -wallSize.height / 1.4 }
      );
    }, 300);
  }, []);

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
        <h1 className="title">
          Grafitt(<span className="ar">AR</span>)
        </h1>
        <p className="description">
          O grafite é uma poderosa forma de luta, resistência e expressão. Ele
          nasce das margens da sociedade como um movimento artístico que dá voz
          àqueles que frequentemente não têm espaço nos meios tradicionais.
        </p>
        <img id="basky" src={basnky} alt="" />

        <p className="description">
          O grafite transforma a paisagem, expressando temas sociais, culturais
          e políticos, muitas vezes expondo injustiças e desafios que as
          comunidades sentem em silêncio. Outras vezes expressando o seu
          cotidiano, sendo uma declaração de amor ou apenas sua opinião sobre
          algo supérfulo
        </p>
      </div>
      <div className="flying-imgs">
        <section className='section-wall'>
          <img className="wall" src={wall} alt="" />
          <div className="img-divs">
            <img id="sticky1" className="sticker" src={tag1} alt="" />
            <img id="sticky2" className="sticker" src={tag2} alt="" />
          </div>
        </section>
      </div>

      <div className="holder">
        <div className="text-container">
          <p className="description poblem-div">
            {" "}
            No entanto, há um debate sobre os impactos negativos do grafite em
            espaços privados e na arquitetura urbana...{" "}
          </p>
          <div className='pich-div'>
          <img className='nausea' src={nausea} alt="" />
          <img className='pich' src={home} alt="" />
          </div>
          <p className="description">
            {" "}
            Muitos veem o grafite em residências, prédios históricos ou áreas
            comerciais como uma forma de "agressão" visual. A crítica se
            concentra no fato de que nem todos os espaços foram designados para
            intervenções artísticas e, em alguns casos, o grafite pode danificar
            a estética arquitetônica ou gerar custos de limpeza.
          </p>
          <p className="description">
            {" "}
            contraste entre o impacto positivo de dar voz a uma comunidade e as
            críticas ao dano físico leva à reflexão sobre como equilibrar o
            direito à expressão com a preservação dos espaços públicos e
            privados.
          </p>
        </div>

        <div className="text-container">
          <p className="description">
            A realidade aumentada pode ser uma alternativa para explorar o
            grafite. A tecnologia permite que as pessoas vejam e interajam com
            obras de arte digitalmente projetadas em espaços públicos ou
            privados. Isso pode ser uma maneira de preservar a arquitetura
            original de um edifício enquanto ainda permite que os artistas
            compartilhem suas mensagens e visões com o mundo.
          </p>
          <p>video</p>
          <div className='cyber-div'>
            <span >
              (❁´◡`❁)
            </span>
            <p className="cyber-text">
              O projeto Grafitt(AR), tem como objetivo criar uma forma
              alternativa de pessoas sem espaço se expressarem, de maneira
              diferente e mais segura quanto a cidade. De forma sem agradir a
              arquitetura e sem cuistos a cidade.{" "} <br></br>
              <span> (*/ω＼*)</span>
              <span> (o゜▽゜)o☆</span>
            </p>
          </div>
          <p> video</p>

          <p>Projetos futuros:</p>

          <p>Login e usuários</p>
          <p>Upload pelos usuários</p>
          <p>votação para arte da semana</p>
          <p>modelos 3D</p>
        </div>
      </div>
    </div>
  );
}

export default App;
