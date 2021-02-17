import React from 'react';
import PropTypes from 'prop-types';

function Post({id , title, del}) {
    return(
        <div>
            <button onClick={() => del(id)} >x</button>
    <div>{title}</div>
    <img src={'https://source.unsplash.com/random?sig=${id}'}/>
        </div>
    )

}
Post.proptype = {
    id : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    del : PropTypes.func.isRequired
};
    

export default Post;  