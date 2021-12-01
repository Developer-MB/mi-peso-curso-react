import React, { Component } from "react";
import BarraTitulo from "./components/BarraTitulo";
import Grafica from './components/Grafica';
import moment from "moment";
// import Tabla from "./components/Tabla";
import Form from "./components/Form";

class App extends Component {
  state = {
    registros: [],
    modal: false
  }

  componentDidMount() {
    if (localStorage.getItem('registros')) {
      const registros = JSON.parse(localStorage.getItem('registros'))
      this.setState({
        registros
      })
    }
  }

  aceptarRegistro = ({ fecha, peso }) => {
    const nuevoregistro = [+fecha, +peso]
    console.log(nuevoregistro)
    const newstateregistros = [...this.state.registros, nuevoregistro]
    localStorage.setItem('registros', JSON.stringify(newstateregistros))
    this.setState({
      registros: newstateregistros
    })
  }

  onCerrarForm = () => {
    this.setState({
      modal: false
    })
  }

  reiniciarRegistros = () => {
    localStorage.clear()
    this.setState({
      registros: []
    })
  }

  rendeFila = (registro) => {
    return (
      <tr key={registro[0]}>
        <td>{moment(registro[0]).format('LLLL')}</td>
        <td>{registro[1]} Kg</td>
      </tr>
    )
  }

  render() {
    const btnAdd = {
      position: "absolute",
      top: "80%",
      right: "10%"
    }

    return (
      <div>
        <Form
          visible={this.state.modal}
          onAceptar={this.aceptarRegistro}
          onCerrar={this.onCerrarForm}
        />
        <BarraTitulo />
        <main>
          <div className="valign-wrapper">
            <h2>Registro Diario de Peso</h2>
          </div>
          <div className="row">
            <div className="col s12 m12 l6">
              <Grafica registros={this.state.registros} />
              <a className="btn" onClick={this.reiniciarRegistros}>Reiniciar Lectura</a>
            </div>
            <div className="col s12 m12 l6">
              {/* <Tabla registros={this.state.registros} /> */}
              <table className="z-depth-2 hoverable">
                <thead>
                  <tr>
                    <th>Fechas</th>
                    <th>Peso (Kg)</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.registros.map(registro => this.rendeFila(registro))}
                </tbody>
              </table>
            </div>
          </div>
          <a className="btn-floating btn-large waves-effect waves-light red"
            style={btnAdd}
            onClick={() => this.setState({ modal: true })}>
            <i class="material-icons">add</i>
          </a>
        </main>
      </div>
    )
  }
}

export default App;
