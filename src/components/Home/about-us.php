<section class="container-fluid video-spacing p-0">
    <div class="container p-0 sdg-page">
        <div class="unsdg-wrapper">
            <div class="row">
                <div class="col-md-12 cm-video  unsdg-video wow fadeIn" style="position: relative;">
                    <div>
                        <div class="video">
                            <div style="width:640px" class="wp-video">
                                <?php
                                $count = 0;
                                foreach ($attributes['videos'] as $inner) : ?>
                                    <div class="country-item video<?= $count; ?>">
                                        <video class="video-item" id="video<?= $count; ?>" poster="<?php echo $inner['poster-image']['url']; ?>">
                                            <source type="video/mp4" control="" src="<?php echo $inner['video']['url']; ?>" />
                                        </video>
                                    </div>
                                <?php $count++;
                                endforeach; ?>

                            </div>
                        </div>                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>



<section id="about-us"  class="about-section section">
    <div class="container">
    <?php
    $count = 0;
    foreach ($attributes['about-us-row'] as $inner) :
    // print_r($inner['image']['url']);
    ?>
        <div class="row <?=$count % 2 == 0 ? '':'flex-row-reverse'?> ">    
            <div class="col-md-6 pr-md-0 <?=$count % 2 ==0 ? 'pr-md-0':'pl-md-0'?> ">
                <div class="<?=$count % 2 == 0 ? 'text-first':'text-second'?>">                
                    <span class="heading"><?=$inner['top-heading'];?></span>
                    <h4><?=$inner['heading'];?></h4>
                    <p class="pt-md-5 pb-md-5"><strong><?=$inner['description'];?></strong></p>
                    <div class="about-section-btn mb-4"><a href="#">Read More</a></div>
                </div>            
            </div>
            <div class="col-md-6 pl-md-0 <?=$count % 2 == 0 ? 'pl-md-0':'pr-md-0'?>">
                <div class="bg-image" style="background: url('<?=$inner['image']['url']?>')">
                    <img src="https://media.aljhealth.com/wp-content/uploads/2020/12/28082152/ceo-transparent.png" class="img-fluid" alt="" title="" />
                </div>           
            </div>         
        </div>
    <?php $count++;
    endforeach; ?>
    </div>
</section>