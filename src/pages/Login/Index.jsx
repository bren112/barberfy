import React, { useState } from 'react';
import supabase from '../../supabaseclient';
import './Login.css';
import InputMask from 'react-input-mask';
import { TextField, Button } from '@mui/material';

const Login = () => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [modalOpen, setModalOpen] = useState(false); // Estado para o modal
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [newCPF, setNewCPF] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      alert(`Email: ${userEmail}, Senha: ${userPassword}`);
      // Aqui você pode implementar a lógica de autenticação personalizada
    } catch (error) {
      console.error('Erro ao logar:', error);
    }
  };

  const handleCreateAccount = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.from('usuarios').insert([
        {
          nome: newName,
          telefone: newPhone,
          cpf: newCPF,
          email: newEmail,
          senha: newPassword,
        },
      ]);

      if (error) {
        console.error('Erro ao criar conta:', error);
        alert('Erro ao criar conta. Verifique os dados e tente novamente.');
      } else {
        alert('Conta criada com sucesso!');
        setModalOpen(false); // Fecha o modal após criar a conta
        setNewName('');
        setNewPhone('');
        setNewCPF('');
        setNewEmail('');
        setNewPassword('');
      }
    } catch (error) {
      console.error('Erro geral:', error);
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-title">LOGIN</h1>
      <form onSubmit={handleLogin} className="login-form">
        <div className="login-input-group">
          <TextField
            label="Email"
            variant="outlined"
            type="email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            placeholder="Digite seu email"
            fullWidth
            margin="normal"
          />
        </div>
        <div className="login-input-group">
          <TextField
            label="Senha"
            variant="outlined"
            type="password"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
            placeholder="Digite sua senha"
            fullWidth
            margin="normal"
          />
        </div>
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Logar
        </Button>
      </form>
      <p className="login-register-link" onClick={() => setModalOpen(true)}>
        Não tenho uma conta!
      </p>

      {/* Modal */}
      {modalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Criar Conta</h2>
            <form onSubmit={handleCreateAccount}>
              <div className="login-input-group">
                <TextField
                  label="Nome"
                  variant="outlined"
                  type="text"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  placeholder="Digite seu nome"
                  fullWidth
                  margin="normal"
                />
              </div>
              <div className="login-input-group">
                <InputMask
                  mask="(99) 99999-9999"
                  value={newPhone}
                  onChange={(e) => setNewPhone(e.target.value)}
                >
                  {(inputProps) => (
                    <TextField
                      {...inputProps}
                      label="Telefone"
                      variant="outlined"
                      placeholder="Digite seu telefone"
                      fullWidth
                      margin="normal"
                    />
                  )}
                </InputMask>
              </div>
              <div className="login-input-group">
                <InputMask
                  mask="999.999.999-99"
                  value={newCPF}
                  onChange={(e) => setNewCPF(e.target.value)}
                >
                  {(inputProps) => (
                    <TextField
                      {...inputProps}
                      label="CPF"
                      variant="outlined"
                      placeholder="Digite seu CPF"
                      fullWidth
                      margin="normal"
                    />
                  )}
                </InputMask>
              </div>
              <div className="login-input-group">
                <TextField
                  label="Email"
                  variant="outlined"
                  type="email"
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                  placeholder="Digite seu email"
                  fullWidth
                  margin="normal"
                />
              </div>
              <div className="login-input-group">
                <TextField
                  label="Senha"
                  variant="outlined"
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Digite sua senha"
                  fullWidth
                  margin="normal"
                />
              </div>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Criar Conta
              </Button>
              <Button
                type="button"
                variant="outlined"
                color="secondary"
                onClick={() => setModalOpen(false)}
                fullWidth
              >
                Fechar
              </Button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
