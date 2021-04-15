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
            var $btnWrap = $('#section1 .btn-wrap')
            var $activeBtn = $('#section1 .active-btn');
            var $pageBtn = $('#section1 .page-btn');
            var $pauseBtn = $('#section1 .pause-btn');
            var $playBtn = $('#section1 .play-btn');
            var $nextBtn = $('#section1 .next-btn');
            var $prevBtn = $('#section1 .prev-btn');
            var winH = $(window).innerWidth();
            var secH = winH * 0.472937467;

            var cnt = 0;
            var n = $('#section1 .slide').length; //4
            var setId = null;
            var setId2 = null;

            function resizeFn(){
                winH = $(window).innerWidth();
                if($(window).innerWidth()>1360){
                    secH = winH * 0.472937467; /* 900px */
                }
                if($(window).innerWidth()<=1360){
                    secH = winH * 0.573529412; /* 780px */
                }
                if($(window).innerWidth()<=980){
                    secH = 700;
                }
                //secH = winH * 0.509721492;
                $('#section1').css({height:secH});
            }

            setTimeout(resizeFn,100);

            $(window).resize(function(){
                setTimeout(resizeFn,100);
            });

            function mainNextSlideFn(){
                $slide.css({zIndex:1});
                $slide.eq(cnt==0?n-1:cnt-1).css({zIndex:3}).stop().animate({opacity:0},1000);
                $slide.eq(cnt).css({zIndex:4}).stop().animate({opacity:0},0).animate({opacity:1},1000);
                pageBtnColorEventFn();
                //console.log($btnWrap.hasClass('addPauseActive'));
            }

            function mainPrevSlideFn(){
                $slide.css({zIndex:1,opacity:0});
                $slide.eq(cnt).css({zIndex:4}).stop().animate({opacity:1},1000);
                $slide.eq(cnt==n-1?0:cnt+1).css({zIndex:3}).stop().animate({opacity:1},0).animate({opacity:0},1000);
                pageBtnColorEventFn();
                //console.log($btnWrap.hasClass('addPauseActive'));
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
                    if($btnWrap.hasClass('addPauseActive')==true){
                        clearInterval(setId);
                        clearInterval(setId2);
                    }
                }
            });

            $prevBtn.on({
                click:function(){
                    pauseTimerFn();
                    if(!$slide.is(':animated')){
                        prevSlideCountFn();
                    }
                    if($btnWrap.hasClass('addPauseActive')==true){
                        clearInterval(setId);
                        clearInterval(setId2);
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
                            mainPrevSlideFn();
                        }
                        if(cnt < idx){
                            cnt = idx;
                            mainNextSlideFn();
                        }
                        if($btnWrap.hasClass('addPauseActive')==true){
                            clearInterval(setId);
                            clearInterval(setId2);
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

            $pauseBtn.on({
                click:function(){
                    $(this).parent().addClass('addPauseActive');
                    clearInterval(setId);
                    clearInterval(setId2);
                }
            });

            $playBtn.on({
                click:function(){
                    $(this).parent().removeClass('addPauseActive');
                    autoPlayFn();
                }
            })

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
            var $cubeBtn = $('#section2 .cube-btn');
            var $cube = $('#section2 .cube');
            var $g80 = $('#section2 .cube .g80');
            var btnN = $('#section2 .cube-btn').attr('id');
            var faceN = '.'+ btnN;

            function faceNameFn(){
                $(faceN).stop().animate({opacity:.1},0).animate({opacity:1},1000);
            }

            //setTimeout(faceNameFn,100);

            $cubeBtn.each(function(idx){
                $(this).on({
                    click:function(){
                        $cubeBtn.removeClass('addCubeChk');
                        $(this).addClass('addCubeChk');
                        $cube.removeClass('addAuto');

                        if(idx == 0){
                            $cube.animate({transform:'perspective(800),rotate3d(0,0,0,0deg)'});
                        }
                        if(idx == 1){
                            $cube.animate({transform:'perspective(800),rotate3d(0,1,0,-180deg)'});
                        }
                        if(idx == 2){
                            $cube.animate({transform:'perspective(800),rotate3d(0,1,0,-90deg)'});
                        }
                        if(idx == 3){
                            $cube.animate({transform:'perspective(800),rotate3d(0,1,0,90deg)'});
                        }
                        if(idx == 4){
                            $cube.animate({transform:'perspective(800),rotate3d(1,0,0,-90deg)'});
                        }
                        if(idx == 5){
                            $cube.animate({transform:'perspective(800),rotate3d(1,0,0,90deg)'});
                        }

                        // $g80.stop().animate({opacity:.50},600);
                        // btnN = $(this).attr('id');
                        // faceN = '.'+ btnN;
                        // faceNameFn();
                    }
                });
            })
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