import React from 'react';
class Value extends React.Component {
    carro(a, b) {
        return `minha ${a} é masi rapida do que meu ${b}`
    }
    render () {
        if(this.props.valor === 0) return <p>rolou</p>
        const { valor } = this.props
        return (
        <p> {this.carro(valor[0], valor[1])} </p>
        )
    }
}
export default Value;
