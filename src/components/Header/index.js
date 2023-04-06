import React from 'react';

import Aljlogo from "../../common/images/logo-blank.png"

export default function Header() {
  return (
    <header className='whitebgnav'>
    <a href="javascript:" class="menu-show mobile"> <em></em><em></em><em></em></a>
    <div class="container">
      <div class="row justify-content-between align-items-center">

        <div class="col-auto">
          
    <div class="menuconainer">
      
            {/* <div class="closeMenu mobile"><img src={Menuclose} alt="img" /></div> */}
            <ul class="menubx"><li><a title="What we do" class="menu-839" href="/en/#whatwedo">What we do  </a></li><li class="has-submenu"><i class="sidr-dropdown-toggler"></i><a title="Who We Are" class="menu-840" href="/en/#">Who We Are</a><ul class="sub-menu"><li><a title="About Us" class="menu-1073" href="/en/#about-us">About Us</a></li><li><a title="Our People" class="menu-844" href="/en/our-people/">Our People</a></li></ul></li><li><a title="Our Solutions" class="menu-842" href="/en/#oursolutions">Our Solutions  </a></li><li><a title="Contact us" class="menu-841" href="/en/#contact-us">Contact us  </a></li><li class="has-submenu"><i class="sidr-dropdown-toggler"></i><a title="News &amp; Insights" class="menu-843 active" href="/en/#">News &amp; Insights</a><ul class="sub-menu"><li><a title="News" class="menu-862 active" href="/en/news/">News</a></li><li><a title="Insights" class="menu-1069" href="/en/insights/">Insights</a></li><li><a title="In The News" class="menu-1436" href="/en/in-the-news/">In The News</a></li></ul></li><li><a href="" class="menu-lang-child">عربى</a></li></ul>
      
    </div>
    
</div>

                  <div class="col-auto">

<a href="/en/" class="logo"><img src={Aljlogo} alt="Abdul Latif Jameel Logo" /></a> 


          



</div>

                  </div>
</div>
                <div class="pagescrollbar"><div class="progressbar"></div></div>
</header> 
  );
}
