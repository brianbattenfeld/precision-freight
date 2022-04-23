function FilterBox(props) {
  const { options, type, title, name } = props;

  return (
    <div className='filter-box text-left'>
      <h4>{title}</h4>
      {options.map((item, index) => {
        return (
          <div className="input-item form-group">
            <input
              type={type}
              id={`${name}.${index}`}
              name={name}
              className=""
            />
            <label htmlFor={`${name}.${index}`}>
              {item[1]}
            </label>
          </div>
        )
      })}
    </div>
  )
}

export default FilterBox