
function App() {

  return (
    <>
      <div className="container">
          <h1>To Do List</h1>
          <div className="add">
            <input type="text" placeholder="Titulo"/>
            <textarea placeholder="Descripcion" cols="30" rows="10"></textarea>
            <button>Agregar</button>
          </div>
          <div className="task">
            <h2>Titulo</h2>
            <p>texto</p>
            <button>Eliminar</button>
          </div>
      </div>
    </>
  )
}

export default App
