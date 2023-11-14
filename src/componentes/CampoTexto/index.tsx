import React from 'react'
import './CampoTexto.css'

interface CampoTextoProps {
    aoAlterado: (valor: string) => void //função void que recebe uma string por parametro
    placeholder: string
    label: string
    valor: string
    obrigatorio: boolean
}

const CampoTexto = (props: CampoTextoProps) => {

    const placeholderModificada = `${props.placeholder}...` 

    const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input 
                value={props.valor} 
                onChange={aoDigitado} 
                required={props.obrigatorio} 
                placeholder={placeholderModificada}
            />
        </div>
    )
}

export default CampoTexto