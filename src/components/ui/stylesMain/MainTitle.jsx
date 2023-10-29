import React from 'react'

const MainTitle = ({mainTitle, title}) => {
  return (
    <section>
      <div>

        {/* title */}
        <div className='flex flex-col capitalize'>

          <div>
            <h2 className='font-medium text-black/60'>
              {title} / {mainTitle}
            </h2>
          </div>
          <div>
            <h1 className='text-4xl font-bold'>
              {mainTitle}
            </h1>
          </div>
        </div>
        </div>
    </section>
  )
}

export default MainTitle