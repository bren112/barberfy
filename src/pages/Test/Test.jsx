import React, { useState, useEffect } from 'react'; 
import supabase from '../../supabaseclient';

function Teste() {
  const [noticias, setNoticias] = useState([]);
  const [novoTitulo, setNovoTitulo] = useState('');
  const [novaDescricao, setNovaDescricao] = useState('');
  const [novaImagem, setNovaImagem] = useState(null);

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

  const handleSubmitNoticia = async (event) => {
    event.preventDefault();
    try {
      let publicUrl = '';

      if (novaImagem) {
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from('imagens-noticias')
          .upload(`noticias/${novoTitulo}.png`, novaImagem, {
            cacheControl: '3600',
            upsert: true,
          });

        if (uploadError) {
          throw uploadError;
        }

        const { data } = supabase
          .storage
          .from('imagens-noticias')
          .getPublicUrl(`noticias/${novoTitulo}.png`);
        publicUrl = data.publicUrl;
      }

      const { data, error } = await supabase.from('noticias').insert([{
        titulo: novoTitulo,
        descricao: novaDescricao,
        img: publicUrl,
        data_publicacao: new Date().toISOString(),
      }]);

      if (error) {
        throw error;
      }

      console.log('Notícia inserida com sucesso:', data);
      setNovoTitulo('');
      setNovaDescricao('');
      setNovaImagem(null);
      fetchNoticias();
    } catch (error) {
      console.error('Erro ao inserir notícia:', error.message);
    }
  };

  const handleExcluirNoticia = async (id) => {
    if (window.confirm('Tem certeza que quer excluir esta notícia?')) {
      try {
        const { data, error } = await supabase.from('noticias').delete().eq('id', id);
        if (error) {
          throw error;
        }
        console.log('Notícia excluída com sucesso:', data);
        fetchNoticias();
      } catch (error) {
        console.error('Erro ao excluir notícia:', error.message);
      }
    }
  };

  return (<>
  <br/>
    <div className="admin-container">
      <h2>Área Administrativa</h2>
      <div className="form-container">
        <form onSubmit={handleSubmitNoticia}>
          <h3>Novo Recado</h3>
          <input
            type="text"
            placeholder="Título"
            value={novoTitulo}
            onChange={(e) => setNovoTitulo(e.target.value)}
            required
          />
          <textarea
            placeholder="Descrição"
            value={novaDescricao}
            onChange={(e) => setNovaDescricao(e.target.value)}
            required
          />
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setNovaImagem(e.target.files[0])}
            required
          />
          <button type="submit">Enviar Notícia</button>
        </form>
      </div>

      <h3>Notícias Cadastradas</h3>
      <ul className="news-list">
        {noticias.map((noticia) => (
          <li key={noticia.id} className="news-item">
            <h4>{noticia.titulo}</h4>
            <img src={noticia.img} alt={noticia.titulo} className="news-image" />
            <p>{noticia.descricao}</p>
            <button className="delete-button" onClick={() => handleExcluirNoticia(noticia.id)}>Excluir</button>
          </li>
        ))}
      </ul>

      <style jsx>{`
        .admin-container {
          padding: 20px;
          background-color: #f4f4f4;
          max-width: 900px;
          margin: 0 auto;
          border-radius: 10px;
        }

        h2 {
           font-family: "Danfo", serif;
            font-size: 4pc;
            text-align: center;
        }

        .form-container {
          background-color: #fff;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        form h3 {
                   font-family: "Lilita One", sans-serif;

          font-size: 2pc;
          color: #333;
        }

        input, textarea {
          width: 100%;
          padding: 10px;
          margin: 10px 0;
          border-radius: 5px;
          border: 1px solid #ccc;
          font-size: 1rem;
        }

        button {
          background-color: #28a745;
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 1rem;
        }

        button:hover {
          background-color: #218838;
        }

        h3 {
          margin-top: 20px;
          font-size: 1.25rem;
          color: #333;
        }

        .news-list {
          list-style-type: none;
          padding: 0;
        }

        .news-item {
          background-color: #fff;
          padding: 20px;
          margin: 10px 0;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .news-title {
          font-size: 1.5rem;
          color: #333;
        }

        .news-image {
          width: 100px;
          height: auto;
          margin-top: 10px;
        }

        .news-description {
          font-size: 1rem;
          color: #555;
        }

        .delete-button {
          background-color: #dc3545;
          color: white;
          padding: 8px 16px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 0.9rem;
          margin-top: 10px;
        }

        .delete-button:hover {
          background-color: #c82333;
        }
      `}</style>
    </div>
    </>
  );
}

export default Teste;
