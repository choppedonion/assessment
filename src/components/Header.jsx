import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const Header = ({title}) => {
  return (
    <section className='container my-5 py-5'>
      <div className='row'>
        <div className='col-12 mb-5'>
          <h1 className='display-6 fw-bolder text-center'>{title}</h1>
          <hr/>
        </div>
      </div>
    </section>
  )
}

export default Header