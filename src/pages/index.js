import * as React from 'react'
import { AdvancedImage } from '@cloudinary/react'
import { Cloudinary } from '@cloudinary/url-gen'

const IndexPage = () => {
  // Create a Cloudinary instance and set your cloud name.
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'chris101',
    },
  })

  // cld.image returns a CloudinaryImage with the configuration set.
  const myImage = cld.image('cld-sample', {
    background_removal: 'cloudinary_ai',
  })

  const removedBG = cld.image('sample_0ne', {
    background_removal: 'cloudinary_ai',
  })

  return (
    <>
      <div className='container'>
        <h1 class='fw-light text-center text-lg-start mt-4 mb-0'>
          Remove Image Background
        </h1>
        <hr class='mt-2 mb-5' />

        <div className='row text-center text-lg-start'>
          <div class='col-lg-3 col-md-4 col-6'>
            <a href='#' class='d-block mb-4 h-100'>
              <AdvancedImage
                className='img-fluid img-thumbnail'
                cldImg={myImage}
              />
            </a>
          </div>

          <div class='col-lg-3 col-md-4 col-6'>
            <a href='#' class='d-block mb-4 h-100'>
              <AdvancedImage
                className='img-fluid img-thumbnail'
                cldImg={removedBG}
              />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
