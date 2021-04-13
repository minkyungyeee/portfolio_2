;(function($){
    var pofol = {
        init:function(){
            var that = this;
                that.headerFn();
                that.section1Fn();
                that.section2Fn();
                that.section3Fn();
                that.section4Fn();
                that.section5Fn();
                that.section6Fn();
                that.section7Fn();
                that.footerFn();
        },
        headerFn:function(){
            var $asideBtn = $('#header .aside-btn');
            var $hamGap = $('#header .ham-gap');
            var $bar = $('#header .bar');

            $asideBtn.on({
                click:function(e){
                    e.preventDefault();
                    $hamGap.toggleClass('addActive');
                    $bar.toggleClass('addActive');
                }
            });
        },
        section1Fn:function(){
            var $slide = $('#section1 .slide');
            var $activeBtn = $('#section1 .active-btn');
            var $pageBtn = $('#section1 .page-btn');
            var $pauseBtn = $('#section1 .pause-btn');
            var $nextBtn = $('#section1 .next-btn');
            var $prevBtn = $('#section1 .prev-btn');

            var cnt = 0;
            var n = $('#section1 .slide').length; //4
            var setId = null;
            var setId2 = null;
            var pause = 0;

            function mainNextSlideFn(){
                $slide.css({zIndex:1});
                $slide.eq(cnt==0?n-1:cnt-1).css({zIndex:3});
                $slide.eq(cnt).css({zIndex:4}).stop().animate({opacity:0},0).animate({opacity:1},1000);
                pageBtnColorEventFn();
            }

            function mainPrevSlideFn(){
                $slide.css({zIndex:1,opacity:0});
                $slide.eq(cnt).css({zIndex:4}).stop().animate({opacity:1},1000);
                $slide.eq(cnt==n-1?0:cnt+1).css({zIndex:3}).stop().animate({opacity:1},0).animate({opacity:0},1000);
                pageBtnColorEventFn();
            }

            function nextSlideCountFn(){
                cnt ++;
                if(cnt>n-1){cnt=0}
                mainNextSlideFn();
            }

            function prevSlideCountFn(){
                cnt --;
                if(cnt<0){cnt=n-1}
                mainPrevSlideFn();
            }

            $nextBtn.on({
                click:function(){
                    pauseTimerFn();
                    if(!$slide.is(':animated')){
                        nextSlideCountFn();
                    }
                }
            });

            $prevBtn.on({
                click:function(){
                    pauseTimerFn();
                    if(!$slide.is(':animated')){
                        prevSlideCountFn();
                    }
                }
            });

            function pageBtnColorEventFn(){
                var z = cnt;
                if(z>n-1){z=0}
                $pageBtn.removeClass('addPauseActive');
                $pageBtn.eq(z).addClass('addPauseActive');
                
            }

            pageBtnColorEventFn();

            $pageBtn.each(function(idx){
                $(this).on({
                    click:function(){
                        pauseTimerFn();
                        if(cnt > idx){
                            cnt = idx;
                            mainNextSlideFn();
                        }
                        if(cnt < idx){
                            cnt = idx;
                            mainPrevSlideFn();
                        }
                    }
                });
            });

            function autoPlayFn(){
                setId = setInterval(nextSlideCountFn,4000);
            }

            autoPlayFn();

            function pauseTimerFn(){
                var t = 0;
                clearInterval(setId);
                clearInterval(setId2);
                setId2 = setInterval(function(){
                    t++;
                    if(t>4){
                        clearInterval(setId);
                        clearInterval(setId2);
                        t=0;
                        nextSlideCountFn();
                        autoPlayFn();
                    }
                },1000);
            }

            // function pauseFn(){
            //     if(pause==1){
            //         clearInterval(setId);
            //         clearInterval(setId2);
            //     }
            //     if(pause==0){
            //         autoPlayFn();
            //         pause=1;
            //     }
            // }

            $pauseBtn.on({
                click:function(){
                    // pause=1;
                    // if(pause == 1){
                    //     pauseFn();
                    //     pause=0;
                    // }
                    $(this).toggleClass('addPauseActive');
                }
            });

            $activeBtn.on({
                mouseenter:function(e){
                    e.preventDefault();
                    $activeBtn.removeClass('addBgActive');
                    $(this).addClass('addBgActive');
                },
                mouseleave:function(e){
                    e.preventDefault();
                    $activeBtn.removeClass('addBgActive');
                }
            });
        },
        section2Fn:function(){

        },
        section3Fn:function(){

        },
        section4Fn:function(){

        },
        section5Fn:function(){

        },
        section6Fn:function(){

        },
        section7Fn:function(){

        },
        footerFn:function(){

        }
    }
    pofol.init();
})(jQuery);