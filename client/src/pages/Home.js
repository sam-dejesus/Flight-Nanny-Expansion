import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div >
      <h1 className="welcome-text">Welcome, userName</h1>
      <div className="">
        <p className="form-header">Which child is traveling with you today?</p>
        <div className="form-control">
          <div className="card childCards">
            <label for="checkbox-id" className="">
            <input type="checkbox" id="checkbox-id" className="checkbox checkbox-success" name="checkbox-name" ></input>
            <span className="checkLabel">Child 1 | Age: "?"</span>
            </label>
          </div>
          <div className="card childCards">
          <label for="checkbox-id" className="">
            <input type="checkbox" id="checkbox-id" className="checkbox checkbox-success" name="checkbox-name" ></input>
            <span className="checkLabel">Child 2 | Age: "?"</span>
            </label>
          </div>
          <div className="card childCards">
          <label for="checkbox-id" className="">
            <input type="checkbox" id="checkbox-id" className="checkbox checkbox-success" name="checkbox-name" ></input>
            <span className="checkLabel">Child 3 | Age: "?"</span>
            </label>
          </div>
          <Link to="/kids" className="lessImportantLink">Edit list</Link>
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
