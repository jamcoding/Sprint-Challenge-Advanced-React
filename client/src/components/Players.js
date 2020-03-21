import React from 'react';

function Players(props) {
    // console.log('props', props);

    return (
        <div class="card">
            <h4>{props.player.name}</h4>
            <ul>
                <li>{props.player.country}</li>
                <li>{props.player.searches}</li>
            </ul>
        </div>
    )
}

export default Players;