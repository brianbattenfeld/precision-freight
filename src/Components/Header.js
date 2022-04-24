function FilterBox(props) {
  const { options, type, title, name } = props;

  return (
    <header>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 py-3">
            <h1>Precision Freight</h1>
          </div>
        </div>
      </div>
    </header>
  )
}

export default FilterBox