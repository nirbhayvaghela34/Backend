

function Jokes({ jokes }) {
    return (
        <section>
            <h2>Jokes : {jokes.length}</h2>
            <ul>
                {jokes.map((joke) => (
                    <li key={joke.id}>
                        <h3>{joke.title}</h3>
                        <p>{joke.content}</p>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Jokes;
