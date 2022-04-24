import React from "react"
import Job from './Job';
import { jobs } from '../util/jobs';

const Jobs = (props) => {
  return (
    <div className="jobs p-3 mb-3">
      {jobs.map((item, index) => {
        return <Job job={item} />
      })}
    </div>
  )
}

export default Jobs;