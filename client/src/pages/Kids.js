const Kids = () => {
  return (
    <div>
      <h1 className="flex-row justify-center mb-4">Welcome, userName</h1>
      <div className="col-12 col-lg-10">
        <p>Add or Remove your your little travelers here</p>
        <div className="form-inputs-container">
          <input className="card" placeholder="child's name" />
          <select className="card" id="childAgeSelect">
            <option value="childAge" disabled selected>
              Child's age
            </option>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
          <button className="btn btn-dark mb-3" id="addOneMoreButton">Add One More</button>
          <button className="btn btn-block btn-primary" id="addOneMoreButton">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Kids;
