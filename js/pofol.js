;(function($){
    var pofol = {
        init:function(){
            var that = this;
                that.scrollEventFn();
                that.headerFn();
                that.section1Fn();
                that.section2Fn();
                that.section3Fn();
                that.section4Fn();
                that.section5Fn();
                that.section6Fn();
                that.section7Fn();
                that.section8Fn();
                that.section9Fn();
                that.footerFn();
        },
        scrollEventFn:function(){


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
            var scrollT = $(window).scrollTop();
            var $titleT = $('#section2 .top-title');
            var $titleB = $('#section2 .bottom-title');

            var btnN = $('#section2 .cube-btn').attr('id');
            var faceN = '.'+ btnN;
            var setId = null;

            
            $(window).scroll(function(e){ 
                if($(window).innerWidth()>980){
                    scrollT = $(window).scrollTop()*.5;
                }
                else{
                    scrollT = $(window).scrollTop()*.3;
                }
                $titleT.css({left:scrollT});
                $titleB.css({right:scrollT});
            });

            function faceNameFn(){
                $(faceN).stop().animate({opacity:.5},0).animate({opacity:1},1000);
            }

            //setTimeout(faceNameFn,100);

            $cubeBtn.each(function(idx){
                $(this).on({
                    click:function(){
                        $cubeBtn.removeClass('addCubeChk');
                        $(this).addClass('addCubeChk');
                        $cube.removeClass('addAuto');

                        if(idx == 0){
                            $cube.css({transform:'perspective(1000px) rotate3d(0,0,0,0deg)'});
                        }
                        else if(idx == 1){
                            $cube.css({transform:'perspective(1000px) rotate3d(0,1,0,180deg)'});
                        }
                        else if(idx == 2){
                            $cube.css({transform:'perspective(1000px) rotate3d(0,1,0,-90deg)'});
                        }
                        else if(idx == 3){
                            $cube.css({transform:'perspective(1000px) rotate3d(0,1,0,90deg)'});
                        }
                        else if(idx == 4){
                            $cube.css({transform:'perspective(1000px) rotate3d(1,0,0,-90deg)'});
                        }
                        else if(idx == 5){
                            $cube.css({transform:'perspective(1000px) rotate3d(1,0,0,90deg)'});
                        }

                        $g80.stop().animate({opacity:.5},600);
                        btnN = $(this).attr('id');
                        faceN = '.'+ btnN;
                        faceNameFn();
                        timerFn();
                    }
                });

                function timerFn(){
                    clearInterval(setId);
                    var t = 0;
                    setId = setInterval(function(){
                        t++;
                        if(t>6){
                            $cube.addClass('addAuto');
                            $cubeBtn.removeClass('addCubeChk');
                            $g80.stop().animate({opacity:.5},600);
                        }
                    },1000);
                }
            });

            
        },
        section3Fn:function(){
            var winw        = $(window).innerWidth();
            var winH        = $(window).innerHeight();
            var $sec3       = $('#section3');
            var $slide      = $('#section3 .slide');
            var $slideImgWrap = $('#section3 .slide-img-wrap');
            var slideImgW = winw;
            var $col        = $('#section3 .col');
            var $colW       = winw/2;
            var $nextBtn    = $('#section3 .next-btn');
            var $prevBtn    = $('#section3 .prev-btn');
            var $pageBtn    = $('#section3 .page-btn');
            var $pauseBtn   = $('#section3 .pause-btn');
            var $playBtn    = $('#section3 .play-btn');
            var $btnWrap    = $('#section3 .btn-wrap');
            var $activeBtn  = $('#section3 .sns-btn-container .active-btn');
            var $closeBtn  = $('#section3 .sns-btn-container .close-btn');

            var cnt     = 0;
            var n       = $('#section3 .slide').length;
            var setId   = null;
            var setId2  = null;

            function resizeFn(){
                winw = $(window).innerWidth();
                slideImgW = winw;
                if($(window).innerWidth()>980){
                    winH = $(window).innerHeight();
                    slideImgW = winw;
                }
                else{
                    winH = 700;
                    slideImgW = winw;
                }

                $sec3.css({width:winw,height:winH});
                $slideImgWrap.css({width:slideImgW,height:winH});
            }

            setTimeout(resizeFn,100);

            $(window).resize(function(){
                setTimeout(resizeFn,100);
            });

            function mainNextSlideFn(){
                $slide.css({zIndex:1});
                $slide.eq(cnt==0?n-1:cnt-1).css({zIndex:4});
                $slide.eq(cnt).css({zIndex:n}).find('.col').stop().animate({height:0},0).animate({height:100+'%'},1000);
                pageBtnColorEventFn();
            }

            function mainPrevSlideFn(){
                $slide.css({zIndex:1}).find('.col').stop().animate({height:100+'%'},0);
                $slide.eq(cnt).css({zIndex:4});
                $slide.eq(cnt==n-1?0:cnt+1).css({zIndex:n}).find('.col').stop().animate({height:100+'%'},0).animate({height:0},1000);
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
                })
            });

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
            });

            function autoPlayFn(){
                setId = setInterval(nextSlideCountFn,4000);
            };

            autoPlayFn();

            function pauseTimerFn(){
                var t = 0;
                clearInterval(setId);
                clearInterval(setId2);
                setId2 = setInterval(function(){
                    t ++;
                    if(t>5){
                        clearInterval(setId);
                        clearInterval(setId2);
                        t = 0 ;
                        nextSlideCountFn();
                        autoPlayFn();
                    }
                },1000)
            }

            $activeBtn.on({
                click:function(e){
                    e.preventDefault();
                    $('.sns-btn-wrap').addClass('addSnsActive');
                    clearInterval(setId);
                    clearInterval(setId2);
                }
            });
            $closeBtn.on({
                click:function(e){
                    e.preventDefault();
                    $('.sns-btn-wrap').removeClass('addSnsActive');
                    if($btnWrap.hasClass('addPauseActive')==true){
                        $btnWrap.removeClass('addPauseActive')
                    }
                    autoPlayFn();
                }
            });



        },
        section4Fn:function(){
            var $slideContent = $('#section4 .slide-content');
            var $activeBtn = $('#section4 .active-btn');
            var $slideWrap = $('#section4 .slide-wrap');
            var $nextBtn = $('#section4 .next-btn');
            var $prevBtn = $('#section4 .prev-btn');

            var cnt = 0;
            var winW = $(window).innerWidth();
            var $content = $('#section4 .content');
            var contentW = winW-240;

            // function resizeFn(){
            //     winW = $(window).innerWidth();
            //     contentW = winW-240;

            //     content.css({width:contentW});
            // }

            // setTimeout(resizeFn,100);

            // $(window).resize(function(){
            //     setTimeout(resizeFn,100);
            // });
            function mainslideFn(){
                $slideWrap.stop().animate({left:-363.25*cnt},600)
            }

            function nextSlideCountFn(){
                cnt ++;
                mainslideFn();
            }

            function prevSlideCountFn(){
                cnt--;
                mainslideFn();
            }

            $nextBtn.on({
                click:function(){
                    nextSlideCountFn();
                    $content.addClass('addNextActive');
                }
            });

            $prevBtn.on({
                click:function(){
                    prevSlideCountFn();
                    
                }
            });

            $slideContent.on({
                mouseenter:function(){
                    $slideContent.removeClass('addMouseActive');
                    $(this).addClass('addMouseActive');
                },
                mouseleave:function(){
                    $slideContent.removeClass('addMouseActive');
                }
            });

            $activeBtn.on({
                mouseenter:function(){
                    $activeBtn.removeClass('addBtnActive');
                    $(this).addClass('addBtnActive');
                },
                mouseleave:function(){
                    $activeBtn.removeClass('addBtnActive');
                }
            });
        },
        section5Fn:function(){
            var $slide = $('#section5 .slide');
            var $txtWrap = $('#section5 .txt-wrap');
            var $timerMoveBtn = $('#section5 .timer-move-btn');
            var $innerLine = $('#section5 .inner-line');

            var cnt = 0;
            var n   = $('#section5 .slide').length;
            var LineW = 0;
            var setId = null;
            var setTimeBar = null;

            function mainNextSlideFn(){
                //console.log(cnt);
                $slide.stop().hide().animate({opacity:0},0);
                $txtWrap.stop().hide().animate({opacity:0},0);
                $slide.eq(cnt).stop().show().animate({opacity:0},0).animate({opacity:1},1000);
                $txtWrap.eq(cnt).stop().show().animate({opacity:0},0).animate({opacity:1},1000);
            }

            // function mainPrevSlideFn(){

            // }

            function nextSlideCountFn(){
                cnt++;
                if(cnt>n-1){cnt=0}
                mainNextSlideFn();
            }

            // function prevSlideCountFn(){
            //     if(cnt<0){cnt=n-1}
            //     mainPrevSlideFn();
            // }

            $timerMoveBtn.each(function(idx){
                $(this).on({
                    click:function(){
                        cnt = idx;
                        mainNextSlideFn();
                        pauseTimerFn();
                    }
                });
            });

            function autoPlayFn(){
                var w = 0;
                setId = setInterval(nextSlideCountFn,6000);
                // setTimeBar = setInterval(function(){
                //     w ++;
                //     console.log(w)
                //     LineW = w*75;
                //     $innerLine.eq(cnt).css({width:LineW});
                // },1000);
            }

            autoPlayFn();

            function pauseTimerFn(){
                clearInterval(setId);
                autoPlayFn();
            }

        },
        section6Fn:function(){

        },
        section7Fn:function(){

        },
        section8Fn:function(){

        },
        section9Fn:function(){

        },
        footerFn:function(){

        }
    }
    pofol.init();
})(jQuery);