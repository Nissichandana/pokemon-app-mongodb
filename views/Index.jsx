const React = require('react')

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
    };
    
    
    

class Index extends React.Component {
    render() {
        const{ pokemon } = this.props;

    return(
        <div>
        <div style={myStyle}><h1> My First React Component!</h1></div>
        <h1> See All The Pokemon! </h1>
        <nav>
            <a href='/new'> Create a Pokemon</a>
        </nav>
        <ul>
            {pokemon.map((poke, i) => {
                return(
                    <li key= {i}>
                        The <a href={`/pokemon/${poke._id}`}>
                            {poke.name}
                        </a>
                        <img src= {poke.img} alt = {`${poke.name} image`} />
                        <br></br>
                        <a href={`/pokemon/${poke._id}/edit`}> Edit This Pokemon</a>
                        <form action= {`/pokemon/${poke,_id}?_method=DELETE`} method = 'POST'>
                            <input type='submit' value= 'DELETE' />
                        </form>

                    </li>
                )
            })}
        </ul>

        </div>
    )

    }
}

module.exports = Index