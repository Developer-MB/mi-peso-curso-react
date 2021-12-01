import React from "react";
import Highcharts from 'highcharts';

class Grafica extends React.Component {
    componentDidMount() {
        console.log(this.props.registros)
        this.iniciarGrafica(this.props.registros)
    }

    componentWillReceiveProps(nextProps){
        this.iniciarGrafica(nextProps.registros)
    }

    iniciarGrafica = (registros) => {
        Highcharts.chart("grafica", {
            title: {
                text: "Peso vs Fecha"
            },
            xAxis: {
                type: "datetime"
            },
            series: [
                {
                    name: "test",
                    data: registros
                }
            ]
        })
    }
    render() {
        return (
            <div id="grafica" />
        )
    }
}

export default Grafica