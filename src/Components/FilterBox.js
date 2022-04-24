function FilterBox(props) {
  const { options, type, title, name } = props;

  return (
    <div className='filter-box text-left'>
      <h4>{title}</h4>
      <div className="row">
        {options.map((item, index) => {
          return (
            <div className="col-md-6">
              <div className="input-item form-group text-wrap">
                <input
                  type={type}
                  id={`${name}.${index}`}
                  name={name}
                  className="mr-2"
                />
                <label htmlFor={`${name}.${index}`}>
                  {item[1]}
                </label>
              </div>
            </div>
          )
        })}
      </div>
      <hr />
    </div>
  )
}

export default FilterBox