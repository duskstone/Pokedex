import React from 'react';
import ReactDOM from 'react-dom';
import storeConfig from './store/store'
import { receiveAllPokemon, requestAllPokemon } from './actions/pokemon_actions'
import {fetchAllPokemon} from './util/api_util'
import { selectAllPokemon} from './reducers/selectors'
import Root from './components/root'

document.addEventListener('DOMContentLoaded', () => {
    const store = storeConfig();
    // window.store = store;
    // window.receiveAllPokemon = receiveAllPokemon;
    // window.fetchAllPokemon = fetchAllPokemon;
    // window.requestAllPokemon = requestAllPokemon;
    // window.selectAllPokemon = selectAllPokemon;
    const rootEl = document.getElementById('root');
    ReactDOM.render(<Root store={store}/>, rootEl);
});