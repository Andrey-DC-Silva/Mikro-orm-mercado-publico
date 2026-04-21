import './Geral.css'
import Navbar from './components/navbar/Navbar';
import UsuariosPage from './pages/UsuariosPG';
import PedidosPage from './pages/PedidosPG';

export default function App() {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: "80px" }}>
        <UsuariosPage />
        <PedidosPage />
      </div>
    </>
  );
}