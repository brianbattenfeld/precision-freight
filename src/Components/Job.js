function Job(props) {
  const { job } = props;
  const { title } = job;

  return (
    <div className="row job p-3 bg-light mb-3">
      <div className="row">
        <div className="col-md-4">
          <h3>{title}</h3>
        </div>
      </div>

    </div>
  )
}

export default Job