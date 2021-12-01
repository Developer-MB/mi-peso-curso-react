import 'react-datepicker/dist/react-datepicker.min.css'
// import '@trendmicro/react-datepicker/dist/react-datepicker.css';
import React from "react"
import './Form.css'
import Swal from 'sweetalert2'
import DatePicker from "react-datepicker"
// import DatePicker, { DateInput, TimeInput } from '@trendmicro/react-datepicker';

export default class Form extends React.Component {
    state = {
        fecha: new Date(),
        peso: ""
    }

    onSubmit = () => {
        const { fecha, peso } = this.state

        if (!peso || isNaN(peso) || peso < 0) {
            Swal.fire({
                title: 'Lectura invalida',
                text: 'El registro de peso debe ser valido',
                icon: 'error',
                confirmButtonText: 'OK'
            })
        } else {
            this.props.onAceptar(this.state)
        }
    }

    cambioFecha = (fecha) => {
        this.setState({ fecha })
    }

    cambiarPeso = (evt) => {
        this.setState({
            peso: evt.target.value
        })
    }

    render() {
        return (
            <div className="row">
                <div className={`form-container scale-transition scale-out ${this.props.visible ? "scale-in" : ""} col s4 offset-s4 z-depth-4 cyan lighten-3`}>
                    <form>
                        <label htmlFor="fecha">
                            Fecha:
                            <DatePicker
                                selected={this.state.fecha}
                                onChange={this.cambioFecha}
                            />
                        </label>
                        <label htmlFor="peso">
                            Peso:
                            <input type="text" name="peso" value={this.state.peso}
                                onChange={this.cambiarPeso} id="peso" />
                        </label>
                        <input type="button" className="btn" onClick={this.onSubmit} value="Agregar" />
                        <input type="button" className="btn" onCLick={() => this.props.onCerrar()} value="Cerrar" />
                    </form>
                </div>
            </div>
        )
    }
}