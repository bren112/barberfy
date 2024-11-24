import React, { useState } from 'react';
import './Sobre.css';
import banner from './saiba.png';
import { Link } from 'react-router-dom'; 


function Sobre() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <>
        <br/>
            <div className="container">
                <div className="btnpreto">
                {/* <h1 id='title_saibaMais'>Saiba Mais!</h1> */}
                <br/>
                <img src={banner} id='imgSobre' alt="Banner" />
            </div>
            </div>
            <br />
            {/* <p id="title_acordion">SOBRE </p> */}
            <div className="accordion">
                <div className="accordion-item">
                    <button
                        className={`accordion-header ${activeIndex === 0 ? 'active' : ''}`}
                        onClick={() => toggleAccordion(0)}
                    >
                        🚫 Regras
                    </button>
                    {activeIndex === 0 && (
                      <div className="accordion-content">
                      <p id='regra'>
                        Sejam todos muito bem-vindos, nossos queridos convidados, à nossa edição de Révellion, e para fazer jus à data, todos deverão ir ao menos com uma peça de roupa branca/clara!!
                    
                        <br/> 
                        🗓️ 28/12
                        <br/> 
                        ⏰ 21:00 
                        <br/> 
                        📍Santa Rita do Passa Quatro
                        <br/> 
                        👔 Uma peça branca/clara
                        <br/>
                        ——————————————————
                        <br/>
                        Informações básicas‼️
                        <br/><br/>
                        
                        1-) Estamos com o site totalmente autenticado, logo, todas as informações da festa serão divulgadas lá!!!
                        <br/>
                        2-) Todos devem fazer o cadastro no momento do pagamento, com nome completo e número de celular.
                        <br/>
                        3-) Grupo de whatsapp será utilizado apenas para rodar a lista de confirmados e determinados avisos.
                      </p>
                    </div>
                    
                    )}
                </div>
                <div className="accordion-item">
                    <button
                        className={`accordion-header ${activeIndex === 1 ? 'active' : ''}`}
                        onClick={() => toggleAccordion(1)}
                    >
                         🎉 Atrações
                    </button>
                    {activeIndex === 1 && (
                        <div className="accordion-content">
                          <p id="city">Clique Para Conhecer Nossas Atrações</p>
                        <br/>

                        <div className="btnlaranja">
                    <Link to="/atracoes">
                            <button>Atrações</button>
                    </Link>

                        </div>
                        </div>
                    )}
                </div>
                <div className="accordion-item">
                    <button
                        className={`accordion-header ${activeIndex === 2 ? 'active' : ''}`}
                        onClick={() => toggleAccordion(2)}
                    >
                        🗺️ Localização
                    </button>
                    {activeIndex === 2 && (
                        <div className="accordion-content">
                            <p id='city'>Santa Rita do Passa Quatro</p>
                            <div className="map-container">
                                <iframe
                                    src="https://www.openstreetmap.org/export/embed.html?bbox=-47.4908%2C-21.7253%2C-47.4653%2C-21.6952&layer=mapnik"
                                    width="100%"
                                    height="400"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    title="Mapa de Santa Rita do Passa Quatro"
                                ></iframe>
                            </div>
                        </div>
                    )}
                </div>
            </div>
                    <div className="btnpreto">
                    <Link to="/pagamento">

            <button id='btn'>Quero Ir</button>
            </Link>
                </div>
                <br/>
        </>
    );
}

export default Sobre;
