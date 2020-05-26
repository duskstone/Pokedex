import {connect} from 'react-redux'
import PokemonIndex from './pokemon_index'
import { selectAllPokemon } from '../../reducers/selectors'
import { requestAllPokemon } from '../../actions/pokemon_actions'

// const mapStateToProps = state => {
// }

const mapDispatchToProps = dispatch => {
    return {
        requestAllPokemon: () => dispatch(requestAllPokemon()),
        selectAllPokemon: selectAllPokemon
    }
}

export default connect(
    null,
    mapDispatchToProps
)(PokemonIndex)