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
            })
        },
        section1Fn:function(){

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