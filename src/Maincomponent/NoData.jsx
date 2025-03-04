import React from 'react'

const NoData = () => {
  return (
    <div
    className="card d-flex align-items-center justify-content-center"
    style={{ padding: "40px 0", border: "none" }}
  >
    <div className="card-body">
      <img
        src="/public/nodata.jpg"
        alt="No data"
      />
      <h3 className="text-center">No Data</h3>
    </div>
  </div>
  )
}

export default NoData