import Logo from './assets/Logo.png'
import en_lang from './assets/en_lang.png'
import nl_lang from './assets/nl_lang.png'
import React, { useState } from 'react'
import Gallery from './Gallery'

function Home() {

  const[active_photo,setActive_photo]=useState('')
  const[active_video,setActive_video]=useState('')
  const[active_gallery,setActive_gallery]=useState('')
  const[filter_check,setFilter_check]=useState('')

  function resetMenu(listOf) {
    switch (listOf){
      case 'photo':{
        setActive_video('')
        setActive_gallery('')
        break
      }
      case 'video':{
        setActive_photo('')
        setActive_gallery('')
        break
      }
      case 'gallery':{
        setActive_photo('')
        setActive_video('')
        break
      }
      default:{
        setActive_video('')
        setActive_video('')
        setActive_gallery('')
      }
    }
  }

  return<>
    <header>
      <img src={Logo} alt='bryxy.space logo'/>
      <h4>where imagined ideas takes shape</h4>
    </header>
    <section>
      <div className='section_menu_container'>
        <ul className='menu'>
          <li className='menu_category'>photo
            <button className='menu_category_btn' onClick={()=>{active_photo?setActive_photo(''):setActive_photo('transition'); resetMenu('photo');}}/>             
            <ul className={`photo_menu sub_menu ${active_photo}`}>
              <li>portret</li>
              <li>product</li>
              <li>event</li>
              <li>modeling</li>
              <li>wedding</li>
              <li>promoion</li>
            </ul>
          </li>
          <li className='menu_category'>video
            <button className='menu_category_btn' onClick={()=>{active_video?setActive_video(''):setActive_video('transition'); resetMenu('video');}}/>
            <ul className={`video_menu sub_menu ${active_video}`}>
              <li>product</li>
              <li>event</li>
              <li>wedding</li>
              <li>promotion</li>
            </ul>
          </li>
          <li className='menu_category'>postproduction
          </li>
          <li className='menu_category'>gallery
            <button className='menu_category_btn' onClick={()=>{active_gallery?setActive_gallery(''):setActive_gallery('transition'); resetMenu('gallery');}}/>     
            <ul className={`gallery_menu sub_menu ${active_gallery}`}>
              <li>filter</li>
              <li>video<button className={filter_check} onClick={()=>filter_check?setFilter_check(''):setFilter_check('checked')}/></li>
              <li>photo<button className={filter_check} onClick={()=>filter_check?setFilter_check(''):setFilter_check('checked')}/></li>
              <Gallery/>
            </ul>
          </li>
          <li className='menu_category'>contact
          </li>
          <li className='menu_category'>main page
          </li>
        </ul>
        <div className='language_change'>
          <img className='nl_lang' src={nl_lang} alt='temporary alt'/> {/*make alt depending on language*/}
          <img className='en_lang' src={en_lang} alt='temporary alt'/> {/*make alt depending on language*/}
        </div>
      </div>
      <div></div>
    </section>
  </>
}

export default Home