import './profile.css'
import { Formik } from "formik"
import FilterBox from './Components/FilterBox';
import Jobs from './Components/Jobs';
import { states, contractors, contractorTypes } from "./util/filters"

function Manufacturer() {
  return (
    <div className='container-fluid'>
      <div className="row">
        <div className="col-md-4">
          <div className='filters bg-dark p-3 text-white'>
            <Formik>
              <form>
                <FilterBox type="checkbox" options={contractorTypes} title="Types" name="types" />
                <FilterBox type="checkbox" options={contractors} title="Contractors" name="contractor" />
                <FilterBox type="checkbox" options={states} title="Origin" name="origin" />
                <FilterBox type="checkbox" options={states} title="Destination" name="destination" />
              </form>
            </Formik>

          </div>
        </div>
        <div className="col-md-8">
          <div className='d-block'>
            <h1>Manufacturer</h1>
            <Jobs />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Manufacturer