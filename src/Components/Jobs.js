import React from "react"
import Job from './Job';
import { jobs } from '../util/jobs';

const Jobs = (props) => {
  return (
    <div className="jobs p-3 bg-light mb-3">
      {jobs.map((item, index) => {
        <Job job={item} />
      })}
    </div>
  )
}

export default Jobs;