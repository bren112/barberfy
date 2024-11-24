import React, { useState, useEffect } from 'react';
import supabase from '../../supabaseclient'; // Certifique-se de que o caminho esteja correto
import './Avisos.css'
function Avisos() {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    fetchNoticias();
  }, []);

  const fetchNoticias = async () => {
    try {
      const { data, error } = await supabase.from('noticias').select('*');
      if (error) {
        throw error;
      }
      setNoticias(data);
    } catch (error) {
      console.error('Erro ao buscar notícias:', error.message);
    }
  };

  return (
    <>
    <br/>
    <div className="avisos-container">
      <h2 className="header">Notícias e Avisos</h2>
      <ul className="news-list">
        {noticias.map((noticia) => (
          <li key={noticia.id} className="news-item">
            <h3 className="news-title">{noticia.titulo}</h3>
            <img
              className="news-image"
              src={noticia.img}
              alt={noticia.titulo}
            />
            <p className="news-description">{noticia.descricao}</p>
            <p className="news-date">
              <small>{new Date(noticia.data_publicacao).toLocaleDateString()}</small>
            </p>
          </li>
        ))}
      </ul>  </div>
      </>

      
  );
}

export default Avisos;
