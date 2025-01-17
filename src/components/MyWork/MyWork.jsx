import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const MyWork = () => {
    const handleImgClick = (work) => {
        window.open(work.w_link, '_blank');

    }
  return (
    <div id='work' className="mywork">
        <div className="mywork-title">
            <h1>My latest work</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="mywork-container">
            {mywork_data.map((work, index)=>{
                return <img key={index} src={work.w_img} alt="" onClick={()=>handleImgClick(work)}/>
            })}
        </div>
        {
            mywork_data.length > 6 ? <div className="mywork-showmore">
            <p>Show More</p>
            <img src={arrow_icon} alt="" />
        </div> :<></>
        }

        
        
    </div>
  )
}

export default MyWork