import React from 'react'
// import { Link } from 'gatsby' 

export default function CorporateVideos({ videoText,langSelectText,videos,bgImage, urlLang}) {
    return (
        <div>
           <section className="container-fluid video-spacing p-0" style={{backgroundImage:`url(${bgImage})`}}>
	            <div className="container p-0 sdg-page">         
                    <div className="unsdg-wrapper">
                      <div className="row">
                        <div className="col-md-12 cm-video  unsdg-video wow fadeIn" style={{position: 'relative'}}>
                                <div>
                                  <div className="video">
                                    <div style={{width:'640px'}} className="wp-video">
                                      {
                                      videos?
                                      videos.map((data, key) => (                                          
                                        <div className={`country-item video${key}`} >                                          
                                              <video className="video-item" id={`video${key}`} poster={data.posterImage && data.posterImage.sourceUrl?data.posterImage.sourceUrl:""}>
                                                <source type="video/mp4" control="" src={data.corporateFilm && data.corporateFilm.mediaItemUrl?data.corporateFilm.mediaItemUrl:data.videoUrl} />
                                              </video>
                                          </div>
                                        ))
                                      :null}
                                    </div>
                                  </div>
                                  <div className="video-watch-container video-controller-wrapper">
                                  <div className="video-controller-container">
                                    <div className="video-heading">
                                      <a href="#/" className="video-controller btn-play" data-video="video0">
                                        <img className="play-btn" src="https://media.jimco.com/wp-content/uploads/2021/04/28124019/playbtn.png" width="43" height="43" alt="" />
                                            <h6>{videoText}</h6>
                                        </a>
                                        <a href="#/" className="video-controller btn-pause" data-video="video0">
                                          <img className="play-btn" src="https://media.jimco.com/wp-content/uploads/2021/06/10101242/pause.png" width="43" height="43" alt="" />
                                          <h6>{videoText}</h6>
                                        </a>                              
                                      </div>
                                    <div className="language">
                                    <h6>{langSelectText}</h6>  

                                      <div className="box">

                                      <div className="desktop-language">
                                      
                                      <div className="video-list">
                                      
                                        <ul>
                                          { videos?videos.map((data, key) => (
                                                    <li><a className={key===0?"play-selected-video":"play-selected-video active-video"} href="#/" data-video={`video${key}`}>
                                            {data.videoLabel}</a>
                                            </li>
                                                    ))
                                                      :null}
                                        
                                          </ul>
                                          </div>
                                        </div>


                                        <select id="select-language" className="select-language language-hide">
                                          { videos?videos.map((data, key) => (
                                                  <option value={`video${key}`}>{data.videoLabel}</option>
                                                    ))
                                                      :null}
                                          
                                        </select>
                                      </div>        

                    
                          </div>
                          </div>
                      </div>
                  </div>
                
              </div>
            </div>            
          </div>
        </div>
      </section>
    </div>
    )
}


