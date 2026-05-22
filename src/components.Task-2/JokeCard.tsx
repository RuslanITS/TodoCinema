type JokeCardProps = {
  joke: string;
};

const JokeCard = ({joke}: JokeCardProps) => {
  return (
    <div className="list-group-item list-group-item-action mb-3 rounded shadow-sm border-0">
      <div className="d-flex gap-3 align-items-start">
        <p className="m-0 fw-medium">
          {joke}
        </p>
      </div>
    </div>
  );
};

export default JokeCard;