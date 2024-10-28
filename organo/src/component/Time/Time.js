import Colaborador from '../Colaborador/Colaborador'
import './Time.css'
import PropTypes from 'prop-types'

const Time = (props) => {
    return (
        (props.colaboradores.length > 0) ? <section className='time' style={{backgroundColor: props.corSecundaria}}>
        <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map( colaborador => <Colaborador corDeFundo={props.corPrimaria} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}/> )}
            </div>
        </section> 
        : ''
    )
}

Time.propTypes = {
    corSecundaria: PropTypes.string.isRequired,
    corPrimaria: PropTypes.string.isRequired,
    nome: PropTypes.string.isRequired,
    colaboradores: PropTypes.arrayOf(PropTypes.shape({
        nome: PropTypes.string.isRequired,
        cargo: PropTypes.string.isRequired,
        imagem: PropTypes.string.isRequired
    })).isRequired
}

export default Time
