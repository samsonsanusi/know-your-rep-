import './style.css'
import WhiteHeader from '../../components/headers/whiteHeader/index'
import img_icon from '../../assets/icons/img_icon.svg'

const CreatePetition = () => {
  return (
    <section>
      <WhiteHeader />
      <main>
        <section className='CreatePetition mainContainer'>
          <form className='createPetition__form'>
            <div className='petitionTitleContainer'>
              <label className='petitionTitle' htmlFor=''>
                Petition Title
              </label>
              <input
                className='petitionTitleInput'
                type='text'
                placeholder='Write a title'
              />
            </div>
            <div className='petitionDescriptionWrapper'>
              <label className='petitionTitle' htmlFor='description'>
                Description
              </label>
              <textarea
                className='petitionTextarea'
                name=''
                id=''
                cols='30'
                rows='10'
                placeholder='Start writing your description'
              ></textarea>
            </div>
            <div className='petitionUploadFileContainer'>
              <label className='samuel' for='inputTag'>
                <span className='daniel'>
                  <img src={img_icon} alt='' />
                  <span className='addImagePlaceholder'>
                    Add image,video and audio
                  </span>
                </span>
                <input className='samson' id='inputTag' type='file' />
              </label>
            </div>
            <button className='upload__file--btn '>Upload now</button>
            <div className='selectCategoryContainer'>
              <label htmlFor='Select category' className='petitionTitle'>
                Select category
              </label>
              <select className='selectCategoryWrapper' name='' id=''>
                <option value='0'>Select number of signatures needed</option>
                <option value=''>200</option>
                <option value=''>500</option>
                <option value=''>1000</option>
              </select>
            </div>
          </form>
          <button className='signIn-btn'>Publish</button>
        </section>
      </main>
    </section>
  )
}
export default CreatePetition
