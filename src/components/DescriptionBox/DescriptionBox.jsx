import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className='descriptionbox-navigator'>
        <div className='descriptionbox-nav-box'>Description</div>
        <div className='descriptionbox-nav-box fade'>Reviews (122)</div>
      </div>
      <div className='descriptionbox-description'>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis consequat tristique. Maecenas rutrum hendrerit.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non mauris tincidunt, pellentesque dolor sit amet, feugiat leo. Etiam vitae leo ac tortor dignissim luctus. In hac habitasse platea dictumst.
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox
