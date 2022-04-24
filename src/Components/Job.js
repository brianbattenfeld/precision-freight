function Job(props) {
  const { job } = props;
  const { title, value, expiration, distance, transitTimes, route, owner, rating } = job;

  return (
    <div className="job p-3 bg-light mb-3">
      <div className="row">
        <div className="col-md-8">
          <div className="row">
            <div className="col-md-6">
              <h4>{title}</h4>
              <p>Transit Time: {transitTimes}</p>
            </div>
            <div className="col-md-6">
              <p>Route: {route}</p>
              <p>Miles: {distance}</p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-3">{owner}</div>
            <div className="col-md-3">Rating: {rating}</div>
            <div className="col-md-3"><a href="#" className="btn btn-secondary btn-block">Reviews</a></div>
            <div className="col-md-3"><a href="#" className="btn btn-secondary btn-block">History</a></div>
          </div>
        </div>
        <div className="col-md-4">
          <h3>Best Value</h3>
          <h4>{value}</h4>
          <p>Expiration: {expiration}</p>
        </div>
      </div>

    </div>
  )
}

export default Job