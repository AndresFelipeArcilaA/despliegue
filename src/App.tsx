import './App.css'

function App() {

  return (
    <div className="container">
      <div className="login-container">
        <h2>Iniciar Sesión</h2>
        <img src="https://images.vexels.com/media/users/3/137684/isolated/preview/4205608f4b2ad81262e9328efbe9d2ab-logotipo-abstracto-de-cubo-geom-trico.png" alt="Imagen de inicio de sesión" className="login-image" />
        <form>
          <div className="form-group">
            <input
              type="text"
              placeholder="Correo"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Contraseña"
              required
            />
          </div>
          <button type="submit">Iniciar Sesión</button>
        </form>
      </div>
    </div>
  );
}

export default App
