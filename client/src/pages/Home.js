import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1 className="flex-row justify-center mb-4">Welcome, userName</h1>
      <div className="col-12 col-lg-10">
        <p>Which child is traveling with you today?</p>
        <div className="children-list">
          <div className="card">
            <label  for="checkbox-id">Child 1</label>
            <input
              type="checkbox"
              id="checkbox-id"
              name="checkbox-name"
              value="checkbox-value"
            ></input>
            <div>Age: "?"</div>
          </div>
          <div className="card">
            <label for="checkbox-id">Child 2</label>
            <input
              type="checkbox"
              id="checkbox-id"
              name="checkbox-name"
              value="checkbox-value"
            ></input>
            <div>Age: "?"</div>
          </div>
          <div className="card">
            <label for="checkbox-id">Child 3</label>
            <input
              type="checkbox"
              id="checkbox-id"
              name="checkbox-name"
              value="checkbox-value"
            ></input><div>Age: "?"</div>
            
          </div>
          <Link to="/kids">Edit list</Link>
        </div>
      </div>
      <div className="">
        <p>What is your budget?</p>
        <input className="form-input" placeholder="$0.00" type="currentcy" />
      </div>
      <div className="">
        <p>What flight are you on?</p>
        <input className="form-input" placeholder="flight number" />
      </div>
      <Link to="/matches">
        <button className="btn btn-block btn-primary">Search</button>
      </Link>
    </div>
  );
};

export default Home;
