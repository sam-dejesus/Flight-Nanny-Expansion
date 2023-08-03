import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div >
      <h1 className="">Welcome, userName</h1>
      <div className="">
        <p className="">Which child is traveling with you today?</p>
        <div className="form-control">
          <div className="">
            <label  for="checkbox-id">
              <span className="label-text">Child 1</span>
              <input type="checkbox" id="checkbox-id" className="checkbox checkbox-success" name="checkbox-name" value="checkbox-value"></input>
            </label>
            <div>Age: "?"</div>
          </div>
          <div className="">
            <label for="checkbox-id">Child 2</label>
            <input type="checkbox" id="checkbox-id" className="checkbox checkbox-success" name="checkbox-name" value="checkbox-value"></input>
            <div>Age: "?"</div>
          </div>
          <div className="">
            <label for="checkbox-id">Child 3</label>
            <input type="checkbox" id="checkbox-id" className="checkbox checkbox-success" name="checkbox-name" value="checkbox-value"></input><div>Age: "?"</div>
            
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
