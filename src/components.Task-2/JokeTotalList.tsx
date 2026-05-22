import JokeCard from "./JokeCard";

type JokeListProps = {
  jokes: string[];
  getJokes: () => Promise<void>;
};

const JokeTotalList = ({jokes, getJokes,}: JokeListProps) => {
  return (
    <div className="card shadow p-4 mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="m-0">Jokes</h3>

        <button
          className="btn btn-dark"
          onClick={getJokes}
        >
          Get 5 Jokes
        </button>
      </div>

      {jokes.length > 0 ? (
        <div className="list-group">
          {jokes.map(
            (joke, index) => (
              <JokeCard
                key={index}
                joke={joke}
              />
            )
          )}
        </div>
      ) : (
        <p className="text-center text-muted m-0">Click the button to load jokes</p>
      )}
    </div>
  );
};

export default JokeTotalList;