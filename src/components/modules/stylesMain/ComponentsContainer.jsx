import React from 'react'

const ComponentsContainer = ({component, componentName}) => {
  return (
    <section>
      <div className=''>
        <div className='flex flex-row justify-between py-[20px]'>
          
          {/* style title */}
          <div>
            <h1 className='text-base font-semibold capitalize md:text-xl'>
              {componentName}
            </h1>
          </div>

          {/* toggle for view or code */}
          <div className='flex flex-row gap-2 font-semibold'>
            <button>
              view
            </button>
            <button>
              code
            </button>
          </div>
        </div>
        {component}
      </div>
    </section>
  )
}

export default ComponentsContainer