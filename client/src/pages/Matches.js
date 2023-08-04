const Matches = () => {
  return (
    <div>
      <div>These Nannies are available to assist you on Flight: 'AA2420'</div>
      <div className="nannyResultCard">
        <img
          className="nannyAvatar"
          alt="nanny avatar"
          src="../../nanny1.png"
        ></img>
        <div>
          <div className="nannyName">Nanny1</div>
          <div className="reviews">Reviews</div>
        </div>
      </div>
      <div className="nannyResultCard">
        <img
          className="nannyAvatar"
          alt="nanny avatar"
          src="../../man2.png"
        ></img>
        <div>
          <div className="nannyName">Nanny2</div>
          <div className="reviews">Reviews</div>
        </div>
      </div>
      <div className="nannyResultCard">
        <img
          className="nannyAvatar"
          alt="nanny avatar"
          src="../../nanny3.png"
        ></img>
        <div>
          <div className="nannyName">Nanny3</div>
          <div className="reviews">Reviews</div>
        </div>
      </div>
      <div className="nannyResultCard">
        <img
          className="nannyAvatar"
          alt="nanny avatar"
          src="../../nanny4.png"
        ></img>
        <div>
          <div className="nannyName">Nanny4</div>
          <div className="reviews">Reviews</div>
        </div>
      </div>
      <button className="btn btn-block btn-primary">Request Assistance</button>
    </div>
  );
};

export default Matches;
