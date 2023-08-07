const Kids = () => {
  return (
    <div>
      <h1 className="welcome-text">Welcome, userName</h1>
      <div className="card">
        <p className="form-header">Add or Remove your your little travelers here</p>
        <div className="form-inputs-container py-3">
          <div>
            <input className="form-imput my-3 text-center" placeholder="child's name" />
          </div>
          <select className="form-input my-3" id="childAgeSelect">
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
          <button className="btn-wide btn-primary login" id="addOneMoreButton">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Kids;
