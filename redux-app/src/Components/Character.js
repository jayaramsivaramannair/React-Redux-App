import React from 'react';
import { connect } from 'react-redux';
import { getCharacter } from '../Actions/actions';

const Character = (props) => {
    if (props.loading) {
        return <h2>Fetching Characters....</h2>
    }

    return (
        <div>
            <button onClick={() => props.getCharacter()}>Get Random Character</button>
            <div>
                <h3>{props.character.name}</h3>
                <p>{`Species: ${props.character.species}`}</p>
                <p>{`Origin: ${props.character.origin.name}`}</p>
                <p>{`Dead / Alive: ${props.character.status}`}</p>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        character: state.character,
        error: state.error,
        loading: state.loading,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCharacter: () => dispatch(getCharacter())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Character);