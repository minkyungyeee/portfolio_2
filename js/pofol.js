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
                that.section8Fn();
                that.section9Fn();
                that.footerFn();
        },
        headerFn:function(){
            var $html           = $('html');
            var $subShow        = $('#wrap .sub-show');
            var $mainBtn        = $('#header .main-btn');
            var $sub            = $('#header .sub');
            var $asideBtn       = $('#aside .aside-btn');
            var $siteMapWrap    = $('#aside .site-map-wrap');
            var $asideSearchBtn = $('#aside .aside-search-btn');
            var $searchClose    = $('#aside .search-close');

            var $bar         = $('#aside .bar');
            var $moBar       = $('#header .mo-bar');
            var $moNavBtn    = $('#moblieNav .mo-nav-btn');
            var $moNavMain   = $('#moblieNav .mo-nav-main');
            var $moDepth2    = $('#moblieNav .mo-depth2');
            var $moDepth3    = $('#moblieNav .mo-depth3')
            var $moDepth1Btn = $('#moblieNav .mo-depth1-btn');
            var $moDepth2Btn = $('#moblieNav .mo-depth2-title-btn');
            var $moDepth3Btn = $('#moblieNav .mo-depth3-title-btn');
            var $depth2ListBtn = $('#moblieNav .depth2-list-btn');

            var $modelBtn = $('#header .model-btn');
            var t = 0;

            var winW = $(window).innerWidth();
            var winH = $(window).innerHeight();
            var subH = (winH*0.927760578)-40;

            function resizeFn(){
                winW = $(window).innerWidth();
                winH = $(window).innerHeight();
                subH = (winH*0.927760578)-40;
                $sub.css({maxHeight:subH});
                $siteMapWrap.css({height:winH,maxHeight:winH});
                $moNavMain.css({height:winH});
                //???????????? ?????????????????? ?????????????????? ?????????
                if($(window).innerWidth()>1020){
                    if($moBar.hasClass('addActive')){
                        $html.removeClass('addSub');
                        $moBar.removeClass('addActive');
                        $moNavMain.removeClass('addMoSub');
                        $moDepth2.removeClass('addDepth')
                        $moDepth3.removeClass('addDepth')
                    }
                }
                else {
                    $html.removeClass('addSub');
                    $sub.removeClass('addSubActive');
                    $mainBtn.removeClass('addColorActive');
                    $subShow.removeClass('addSubActive');
                    $asideBtn.stop().next().slideUp(0);
                    $bar.removeClass('addActive');
                    $asideSearchBtn.next().removeClass('addSearch');
                }

            }
            resizeFn();
            $(window).resize(function(){
                setTimeout(resizeFn,100);
            });

            //??????,????????? ??????????????? ????????????????????? ??????
            //?????? ????????? ??????????????????, ?????????????????? ?????????????????? ?????????
            $subShow.on({
                click:function(){
                    if($sub.hasClass('addSubActive')==true){ 
                        $sub.removeClass('addSubActive');
                        $html.removeClass('addSub');
                        $subShow.removeClass('addSubActive');
                        $mainBtn.removeClass('addColorActive');
                    }
                    if($asideSearchBtn.next().hasClass('addSearch')==true){
                        $html.removeClass('addSub');
                        $subShow.removeClass('addSubActive');
                        $asideSearchBtn.next().removeClass('addSearch');
                    }
                }
            });
            //pc-??????-??????????????????
            $mainBtn.on({
                click:function(){
                    t=1;
                    $asideSearchBtn.next().removeClass('addSearch');        //?????????????????? ???????????????????????? ????????????
                    if($(this).next().hasClass('addSubActive')==false){     //???????????? ?????????????????? ????????????
                        $html.removeClass('addSub');
                        $subShow.removeClass('addSubActive');
                        $sub.removeClass('addSubActive');
                        $mainBtn.removeClass('addColorActive');
                    }

                    $(this).next().toggleClass('addSubActive');             //??????????????? ??????????????? ????????????
                    $(this).toggleClass('addColorActive');                  //????????? ?????? ????????? ??????
                    $html.toggleClass('addSub');                            //html???????????? ???????????? ????????????
                    $subShow.toggleClass('addSubActive');                   //??????????????? ?????????????????? ????????????
                }
            });

            //pc????????????(???????????????)
            $asideBtn.on({
                click:function(e){
                    e.preventDefault();

                    if($asideSearchBtn.next().hasClass('addSearch')){       //??????????????? ????????????????????????
                        $asideSearchBtn.next().removeClass('addSearch');    //???????????? ?????????
                        $html.removeClass('addSub');                        //?????????????????? ???????????? html ?????????????????? ??????
                        $subShow.removeClass('addSubActive');               //?????????????????? ???????????? ??????????????? ??????
                    }

                    if(!$sub.hasClass('addSubActive')){                     //sub??? ????????????????????? ???????????????
                        $html.toggleClass('addSub');                        //html ????????? (???????????????????????? ?????? ??????????????????????????? ?????? x)
                    }

                    $bar.toggleClass('addActive');

                    $(this).stop().next().slideToggle();
                }
            });
            //pc ????????????
            $asideSearchBtn.on({                                            //??????????????? ???????????????
                click:function(e){
                    e.preventDefault();
                    $mainBtn.removeClass('addColorActive');                 //??????????????? ?????? ?????????
                    $sub.removeClass('addSubActive');                       //??????????????? ??????
                    if($subShow.hasClass('addSubActive')==false){           //?????????????????? ?????? ?????????
                        $subShow.removeClass('addSubActive');
                    }
                    $(this).next().toggleClass('addSearch');                //??????????????? ????????????, ???????????????
                    $subShow.toggleClass('addSubActive');                   //??????????????? ???????????? ??????
                    $html.toggleClass('addSub');                            //html??? ??????????????? ??????
                    if(t==1){                                               //sub????????? ????????? ???????????? ????????? ????????? ????????????????????????
                        t=0;
                        $html.addClass('addSub');                           //html ??????????????????
                        $subShow.addClass('addSubActive');                  //subShow??? ??????????????????,,==>?????? ??? ????????????
                    }
                }
            });
            //pc ???????????? ??????
            $searchClose.on({
                click:function(e){
                    e.preventDefault();
                    $mainBtn.removeClass('addColorActive');
                    $sub.removeClass('addSubActive');
                    $subShow.removeClass('addSubActive');
                    $html.removeClass('addSub');
                    $asideSearchBtn.next().removeClass('addSearch');
                }
            })

            //mobile-btn
            $moNavBtn.on({
                click:function(e){
                    e.preventDefault();
                    $moBar.toggleClass('addActive');
                    $moNavMain.toggleClass('addMoSub');
                    $html.toggleClass('addSub');
                }
            });

            $moDepth1Btn.on({
                click:function(e){
                    e.preventDefault();
                    $moDepth1Btn.next().removeClass('addDepth');
                    $(this).next().addClass('addDepth');
                }
            });

            $moDepth2Btn.on({
                click:function(e){
                    e.preventDefault();
                    if($moDepth2.hasClass('addDepth')){
                        $moDepth2.removeClass('addDepth')
                    }
                }
            });

            $depth2ListBtn.on({
                click:function(e){
                    e.preventDefault();
                    $(this).next().addClass('addDepth');
                }
            });

            $moDepth3Btn.on({
                click:function(e){
                    e.preventDefault();
                    if($moDepth3.hasClass('addDepth')){
                        $moDepth3.removeClass('addDepth')
                    }
                }
            })

            //?????? ?????? ?????????????????????
            $modelBtn.on({
                mouseenter:function(){
                    $modelBtn.removeClass('addBgActive');
                    $(this).addClass('addBgActive');
                },
                mouseleave:function(){
                    $modelBtn.removeClass('addBgActive');
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
            var k = null;
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
                if(k==null){
                    k = cnt==0?n-1:cnt-1;
                }
                $slide.css({zIndex:1,opacity:1});
                $slide.eq(k).css({zIndex:2});
                $slide.eq(cnt).css({zIndex:4}).stop().animate({opacity:0},0).animate({opacity:1},1000);
                pageBtnColorEventFn();
                //console.log($btnWrap.hasClass('addPauseActive'));
                k=null;
            }

            function mainPrevSlideFn(){
                if(k==null){
                    k = cnt==n-1?0:cnt+1
                }
                $slide.css({zIndex:1}).stop().animate({opacity:1},0);
                $slide.eq(cnt).css({ zIndex:2 }); 
                $slide.eq(k).css({ zIndex:4 }).stop().animate({opacity:1},0).animate({opacity:0},1500);
                pageBtnColorEventFn();
                k=null;
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
                        k = cnt;
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
        section2Fn:function(){  //???????????? ??????????????? ????????????, ?????? ????????? ????????? ???????????? (05/03)
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
            var k       = null;
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
                if($(window).innerWidth()>1020){
                    if(k==null){
                        k = cnt==0?n-1:cnt-1
                    }
                    $slide.css({zIndex:1});
                    $slide.eq(k).css({zIndex:2});
                    $slide.eq(cnt).css({zIndex:n}).find('.col').stop().animate({height:0},0).animate({height:100+'%'},1000);
                    k = null;
                }
                else{
                    if(k==null){
                        k = cnt==0?n-1:cnt-1
                    }
                    $slide.css({zIndex:1,opacity:1});
                    $slide.eq(k).css({zIndex:2});
                    $slide.eq(cnt).css({zIndex:n}).find('.slide-img-wrap').stop().animate({opacity:0},0).animate({opacity:1},1000);
                    k = null;
                }

                pageBtnColorEventFn();
            }

            function mainPrevSlideFn(){
                if($(window).innerWidth()>1020){
                    if(k==null){
                        k = cnt==n-1?0:cnt+1;
                    }
                    $slide.css({zIndex:1}).find('.col').stop().animate({height:100+'%'},0);
                    $slide.eq(cnt).css({zIndex:2});
                    $slide.eq(k).css({zIndex:n}).find('.col').stop().animate({height:100+'%'},0).animate({height:0},1000);
                    k = null;
                }
                else{
                    if(k==null){
                        k = cnt==n-1?0:cnt+1;
                    }
                    $slide.css({zIndex:1}).find('.slide-img-wrap').stop().animate({opacity:1},0);
                    $slide.eq(cnt).css({zIndex:2});
                    $slide.eq(k).css({zIndex:n}).find('.slide-img-wrap').stop().animate({opacity:1},0).animate({opacity:0},1000);
                    k = null;
                }

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
                        k = cnt;
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
        section4Fn:function(){ //???????????????????????? ???????????? ???????????? ?????????????????? ?????? (05/03)
            var $content = $('#section4 .content');
            var $slideContent = $('#section4 .slide-content');
            var $slide = $('#section4 .slide');
            var $activeBtn = $('#section4 .active-btn');
            var $slideWrap = $('#section4 .slide-wrap');
            var $nextBtn = $('#section4 .next-btn');
            var $prevBtn = $('#section4 .prev-btn');

            var cnt = 0;
            var n = $('#section4 .slide').length;
            var winW = $(window).innerWidth();
            var slideW        = $('#section4 .slide').width();
            var slideH        = slideW*0.984028863;

            var next = [0,1,2,3,4];
            var prev = [0,4,3,2,1];

            $slideContent.removeClass('addScroll');
            $(window).scroll(function(){
                if($(window).scrollTop() >= $('#section4').offset().top-800){
                    var ms = 200;
                    $slideContent.each(function(idx){
                        var that = $(this);
                        setTimeout(function(){
                            that.addClass('addScroll');
                        },ms*idx)
                    })
                }
                else if($(window).scrollTop()<=10){
                    $slideContent.each(function(idx){
                        if($slideContent.eq(idx).hasClass('addScroll')==true){
                            $slideContent.removeClass('addScroll');
                        }
                    })
                }
            });

            function resizeFn(){
                winW = $(window).innerWidth();

                if(winW>1020){
                        cnt=0;
                        $slideWrap.css({left:0});
                        $slide.eq(0).css({left:(25*0)+'%'})
                        $slide.eq(1).css({left:(25*1)+'%'})
                        $slide.eq(2).css({left:(25*2)+'%'})
                        $slide.eq(3).css({left:(25*3)+'%'})
                        $slide.eq(4).css({left:(25*4)+'%'})
                        $content.removeClass('addPrevActive')
                        $content.addClass('addNextActive');
                }
                else if(winW>780){
                        cnt=0;
                        $slideWrap.css({left:0});
                        $slide.eq(0).css({left:(33.3333*0)+'%'})
                        $slide.eq(1).css({left:(33.3333*1)+'%'})
                        $slide.eq(2).css({left:(33.3333*2)+'%'})
                        $slide.eq(3).css({left:(33.3333*3)+'%'})
                        $slide.eq(4).css({left:(33.3333*4)+'%'})
                        $content.removeClass('addPrevActive')
                        $content.addClass('addNextActive');
                }
                else {
                    cnt=0;
                    $slideWrap.css({left:0});
                    $slide.eq(0).css({left:(100*0)+'%'})
                    $slide.eq(1).css({left:(100*1)+'%'})
                    $slide.eq(2).css({left:(100*2)+'%'})
                    $slide.eq(3).css({left:(100*3)+'%'})
                    $slide.eq(4).css({left:(100*4)+'%'})
                    $content.addClass('addPrevActive');
                    $content.addClass('addNextActive');
                }


                if(winW<=780) {
                    $content.addClass('addPrevActive');
                    $content.addClass('addNextActive');
                }

            }
            setTimeout(resizeFn,100);
            $(window).resize(function(){
                //setTimeout(resizeFn,100);
                setTimeout(resizeFn,100);

            })
            function mainslideFn(){
                winW = $(window).innerWidth();
                if(winW>1020){
                    $slideWrap.stop().animate({left:-25*cnt+'%'},600);
                }
                else {
                    $slideWrap.stop().animate({left:-33.3333*cnt+'%'},600);
                }

            }

            function mainNextSlideFn(){
                for(var i=0;i<n;i++){
                    next[i]=i; //0,1,2,3,4
                }
                var imsi = next.pop();
                    next.unshift(imsi); //4,0,1,2,3
                for(var i=0;i<cnt;i++){
                    var imsi = next.shift();
                        next.push(imsi);
                }
                for(var i=0;i<n;i++){
                    $slide.eq(next[i]).stop().animate({left:(100*i)+'%'},0).animate({left:(100*(i-1))+'%'},600);
                }
            }
            function mainPrevSlideFn(){
                var j = n;
                for(var i=0;i<n;i++){
                    j--;
                    prev[i]=j;
                }
                var imsi = prev.pop();
                    prev.unshift(imsi);
                
                for(var i=n-1;i>cnt;i--){
                    var imsi = prev.shift();
                        prev.push(imsi);
                }

                console.log(prev)
                for(var i=0;i<n;i++){
                    $slide.eq(prev[i]).stop().animate({left:(100*(i*-1))+'%'},0).animate({left:(100*((i*-1)+1))+'%'},600);
                }
            }

            function nextSlideCountFn(){
                cnt ++;
                if(winW>1020){ //width??? 1020??? ?????????(4???????????????)
                    if(cnt>1){cnt=0}
                    mainslideFn();
                }
                else if(winW>780){ //width??? 780~1020??????(3??? ????????????) 
                    if(cnt>2){cnt=0}
                    mainslideFn();
                }
                else{               //width??? 780???????????? (1???????????????)
                    if(cnt>n-1){cnt=0}
                    mainNextSlideFn();
                }
            }

            function prevSlideCountFn(){
                cnt--;
                if(winW>1020){
                    if(cnt>1){cnt=0}
                    mainslideFn();
                }
                else if(winW>780){
                    if(cnt>2){cnt=0}
                    mainslideFn();
                }
                else{
                    if(cnt<0){cnt=n-1}
                    mainPrevSlideFn();
                }
                
            }

            $nextBtn.on({
                click:function(){
                    //cnt++;
                    if(winW>1020){
                        $content.removeClass('addNextActive');
                        $content.addClass('addPrevActive');
                    }
                    else if (winW>780){
                        if($content.hasClass('addPrevActive')==false){
                            $content.addClass('addPrevActive');
                        }
                        if(cnt>0){
                            $content.removeClass('addNextActive');
                        }
                    }
                    else{
                        if(cnt>n-1){cnt=0}
                    }
                    nextSlideCountFn();
                }
            });

            $prevBtn.on({
                click:function(){
                    console.log(cnt)
                    //cnt--;
                    if(winW>1020){
                        $content.removeClass('addPrevActive');
                        $content.addClass('addNextActive');
                    }
                    else if (winW>780){
                        if($content.hasClass('addNextActive')==false){
                            $content.addClass('addNextActive');
                        }
                        if(cnt<=1){
                            $content.removeClass('addPrevActive');
                        }
                    }
                    else{
                        if(cnt<0){cnt=n-1}
                    }
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
            var winW = $(window).innerWidth();
            var $slide = $('#section5 .slide');
            var $img = $('#section5 .slide img');
            var $slideConTxt = $('#section5 .slide-con-txt');
            var $txtWrap = $('#section5 .txt-wrap');
            var $timerMoveBtn = $('#section5 .timer-move-btn');
            var $innerLine = $('#section5 .inner-line');
            var $timerSwipe = $('#section5 .timer-swipe');
            var timerSwipeW = $('#section5 .timer-swipe').innerWidth()-30;

            var cnt = 0;
            var n   = $('#section5 .slide').length;
            var setId = null;
            var setTimeBar = null;
            var setTimeBar2 = null;

            function resizeFn(){
                winW = $(window).innerWidth();
                timerSwipeW = $('#section5 .timer-swipe').innerWidth()-30;
                if(winW>1020){
                    $slideConTxt.css({height:winW*0.436941671});
                }
                else if (winW>760){
                    $slideConTxt.css({height:winW*0.5});
                }
            }

            setTimeout(resizeFn,100);

            $(window).resize(function(){
                setTimeout(resizeFn,100);
            });


            function mainNextSlideFn(){
                $innerLine.removeClass('addAutoTimer');
                $innerLine.eq(cnt).addClass('addAutoTimer');
                $slide.stop().hide().animate({opacity:0},0);
                $txtWrap.stop().hide().animate({opacity:0},0);
                $slide.eq(cnt).stop().show().animate({opacity:0},0).animate({opacity:1},1000);
                $txtWrap.eq(cnt).stop().show().animate({opacity:0},0).animate({opacity:1},1000);
                $timerMoveBtn.removeClass('addSlideActive');
                $timerMoveBtn.eq(cnt).addClass('addSlideActive');

                timerSwipeW = $('#section5 .timer-swipe').innerWidth()-30;
                
                if(winW<=780){
                    $timerSwipe.css({left:-timerSwipeW*cnt});
                }

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
                        $(this).addClass('addSlideActive');
                    }
                });
            });

            function autoPlayFn(){
                setId = setInterval(nextSlideCountFn,6000);
            }

            autoPlayFn();

            function pauseTimerFn(){
                clearInterval(setId);
                autoPlayFn();
            }

        },
        section6Fn:function(){
            var $moreBtn = $('#section6 .more-btn');
            var $conLi = $('#section6 .container > ul > li');

            $conLi.removeClass('addScroll');
            $(window).scroll(function(){
                if($(window).scrollTop() >= $('#section6').offset().top-800){
                    var ms = 400;
                    $conLi.each(function(idx){
                        var that = $(this);
                        setTimeout(function(){
                            that.addClass('addScroll');
                        },ms*idx)
                    })
                }
                else if($(window).scrollTop() <= 20){
                    $conLi.each(function(idx){
                        if($conLi.eq(idx).hasClass('addScroll')==true){
                            $conLi.removeClass('addScroll');
                        }
                    });
                }
            });
            $conLi.on({
                mouseenter:function(){
                    $conLi.removeClass('addBack');
                    $(this).addClass('addBack');
                },
                mouseleave:function(){
                    $conLi.removeClass('addBack');
                }
            });
            $moreBtn.on({
                mouseenter:function(){
                    $moreBtn.removeClass('addUnderLine');
                    $(this).addClass('addUnderLine');
                },
                mouseleave:function(){
                    $moreBtn.removeClass('addUnderLine');
                }
            });
        },
        section7Fn:function(){  //780?????? ?????????fixed ????????? ?????? ?????? ?????? (05/03)
            var $activeBtn = $('#section7 .active-btn');
            var $imgBox = $('#section7 .img-box');
            var $txtBox = $('#section7 .txt-box');

            $(window).scroll(function(e){
                if($(window).scrollTop()>=$('#section7').offset().top-800){
                    $imgBox.addClass('addScroll');
                    var ms = 400;
                    $txtBox.each(function(idx){
                        var that = $(this);
                        setTimeout(function(){
                            that.addClass('addScroll');
                        },ms*idx)
                    });
                }
                if($(window).scrollTop()<=20){
                    $txtBox.each(function(idx){
                        if($txtBox.eq(idx).hasClass('addScroll')==true){
                            $txtBox.removeClass('addScroll');
                        }
                    })
                }
            });

            $activeBtn.on({
                mouseenter:function(){
                    $(this).addClass('addBtnActive');
                },
                mouseleave:function(){
                    $activeBtn.removeClass('addBtnActive');
                }
            });
        },
        section8Fn:function(){
            var winW = $(window).innerWidth();
            var $container = $('#section8 .container');
            var $socialFeed = $('#section8 .social-feed');
            var feedH = winW*0.331056227;
            var $socialLink = $('#section8 .social-link');
            var $moreBtn = $('#section8 .more-btn');

            function resizeFn(){
                winW = $(window).innerWidth();
                if(winW>1020){
                    feedH = winW*0.331056227;
                }
                else if(winW>780){
                    feedH = winW*1.205882353;
                }
                else{
                    feedH = winW*3.897435897;
                }
                $socialFeed.css({height:feedH});
            }

            setTimeout(resizeFn,100);

            $(window).resize(function(){
                setTimeout(resizeFn,100);
            });
            $socialLink.on({
                mouseenter:function(){
                    $socialLink.removeClass('addMouseOn');
                    $(this).addClass('addMouseOn');
                },
                mouseleave:function(){
                    $socialLink.removeClass('addMouseOn');
                },
            });

            $moreBtn.on({
                click:function(){
                    if($container.hasClass('addMoreActive')==false){
                        $container.removeClass('addMoreActive2');
                    }
                    else{
                        $container.addClass('addMoreActive2');
                    }
                    $container.addClass('addMoreActive');
                }
            })
        },
        section9Fn:function(){
            var $title = $('#section9 .title');
            var $contentBox = $('#section9 .content-box');

            $title.removeClass('addScroll');
            $contentBox.removeClass('addScroll');
            
            $(window).scroll(function(){
                if($(window).scrollTop() >= $('#section9').offset().top-800){
                    var ms = 400 ;
                    setTimeout(function(){
                        $title.addClass('addScroll');
                    },200);
                    $contentBox.each(function(idx){
                        var that = $(this);
                        setTimeout(function(){
                            that.addClass('addScroll');
                            that.stop().animate({opacity:1},200);
                        },ms*idx)
                    });
                }
                else if($(window).scrollTop() <= 20){
                    $title.removeClass('addScroll');
                    $contentBox.each(function(idx){
                        if($contentBox.eq(idx).hasClass('addScroll')==true){
                            $contentBox.removeClass('addScroll');
                            $contentBox.css({opacity:0});
                        }
                    })
                }
            });

        },
        footerFn:function(){
            var $goTopBtn = $('#footer .go-top-btn');
            var $htmlBody = $('html,body');
            var $notice = $('#footer .notice');
            var $nextBtn = $('#footer .next-btn');
            var $prevBtn = $('#footer .prev-btn');
            var $play = $('#footer .play');
            var $pause = $('#footer .pause');
            var $footerMobileBtn = $('#footer .footer-mobile-btn');

            var n = $('#footer .notice').length; //5
            var cnt = 0;
            var next = [4,0,1,2,3];
            var prev = [0,4,3,2,1];
            var setId = null;
            var setId2 = null;

            $goTopBtn.on({
                click:function(e){
                    e.preventDefault();
                    $htmlBody.stop().animate({scrollTop:0},1000,'easeInOutExpo')
                }
            });

            function mainNextSlideFn(){
                for(var i=0;i<n;i++){
                    next[i] = i;
                } //next[0,1,2,3,4]
                var imsi = next.pop();
                    next.unshift(imsi); //next[4,0,1,2,3]

                for(var i=0;i<cnt;i++){
                    var imsi = next.shift();
                        next.push(imsi);
                }

                for(var i=0;i<n;i++){
                    if($(window).innerWidth()>1020){
                        $notice.eq(next[i]).stop().animate({top:77*i},0).animate({top:77*(i-1)},800);
                    }
                    else if($(window).innerWidth()>570){
                        $notice.eq(next[i]).stop().animate({top:73*i},0).animate({top:73*(i-1)},800);
                    }
                    else {
                        $notice.eq(next[i]).stop().animate({top:100*i},0).animate({top:100*(i-1)},800);
                    }
                }
            }

            function mainPrevSlideFn(){
                var j = n;
                for(var i=0;i<n;i++){
                    j--;
                    prev[i]=j; //4,3,2,1,0
                }
                var imsi = prev.pop();
                    prev.unshift(imsi); //prev[0,4,3,2,1]

                for(var i=n-1;i>cnt;i--){
                    var imsi = prev.shift();
                        prev.push(imsi);
                }
                //console.log(prev)

                for(var i=0;i<n;i++){ //i 0,1,2,3,4
                    if($(window).innerWidth()>1020){
                        $notice.eq(prev[i]).stop().animate({top:77*(i*-1)},0).animate({top:77*((i*-1)+1)},800);
                    }
                    else if($(window).innerWidth()>570) {
                        $notice.eq(prev[i]).stop().animate({top:73*(i*-1)},0).animate({top:73*((i*-1)+1)},800);
                    }
                    else {
                        $notice.eq(prev[i]).stop().animate({top:100*(i*-1)},0).animate({top:100*((i*-1)+1)},800);
                    }
                }
            }

            function nextSlideCountFn(){
                cnt++;
                if(cnt>n-1){cnt=0}
                mainNextSlideFn();
            }

            function prevSlideCountFn(){
                cnt--;
                if(cnt<0){cnt=n-1}
                mainPrevSlideFn();
            }

            $nextBtn.on({
                click:function(){
                    pauseTimerFn();
                    if(!$notice.is(':animated')){
                        nextSlideCountFn();
                    }
                    if($(this).parent().hasClass('addPauseActive')==true){
                        clearInterval(setId);
                        clearInterval(setId2);
                    }
                }
            });

            $prevBtn.on({
                click:function(){
                    pauseTimerFn();
                    if(!$notice.is(':animated')){
                        prevSlideCountFn();
                    }
                    if($(this).parent().hasClass('addPauseActive')==true){
                        clearInterval(setId);
                        clearInterval(setId2);
                    }
                }
            });

            $pause.on({
                click:function(){
                    $(this).parent().addClass('addPauseActive');
                    clearInterval(setId);
                    clearInterval(setId2);
                }
            });
            $play.on({
                click:function(){
                    $(this).parent().removeClass('addPauseActive');
                    autoPlay();
                }
            });

            function autoPlay(){
                setId = setInterval(nextSlideCountFn,4000);
            }
            autoPlay();

            function pauseTimerFn(){
                var t = 0;
                clearInterval(setId);
                clearInterval(setId2);
                setId2 = setInterval(function(){
                    t ++;
                    if(t>4){
                        clearInterval(setId);
                        clearInterval(setId2);
                        t = 0 ;
                        nextSlideCountFn();
                        autoPlay();
                    }
                },1000)
            }

            $footerMobileBtn.each(function(idx){
                $(this).on({
                    click:function(e){
                        e.preventDefault();

                        $footerMobileBtn.next().stop().slideUp(300);
                        if($footerMobileBtn.eq(idx).parent().hasClass('addSubMenu')==false){
                            $footerMobileBtn.parent().removeClass('addSubMenu');
                        }
                        
                        $(this).parent().toggleClass('addSubMenu');
                        $(this).next().stop().slideToggle(600);
                    }
                })
            });
        }
    }
    pofol.init();
})(jQuery);