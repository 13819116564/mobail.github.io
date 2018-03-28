/**
 * Created by Administrator on 2018/1/28.
 * 
 */
window.onload=function(){
	headerScroll();

	Downtime();

	banner();


}

function headerScroll(){
	var jq_nav=document.querySelector('.jq_nav');
	var Max=jq_nav.offsetTop+jq_nav.offsetHeight;

	var jd_header=document.querySelector('.jd_header');

	window.onscroll=function(){
		var scrollDistence=window.document.body.scrollTop||document.documentElement.scrollTop;
		var persent=scrollDistence/Max;
		if(persent>1){
			persent=1;
		};
		jd_header.style.backgroundColor='rgba(201,21,35,'+persent+')';
	}
}

function Downtime(){
	var tollarH=3;
	var tollarSec=3*60*60;
	var liArr=document.querySelectorAll('.main_content:nth-child(1) li');
	console.log(liArr);
	var timer=setInterval(function(){
		tollarSec--;
		if(tollarSec<=0){
			clearInterval(timer);
			colsole.log('活动结束！');
			return
		}
		var hour=Math.floor(tollarSec/3600);
		var minu=Math.floor(tollarSec%3600/60);
		var sec=(tollarSec%60);
		liArr[0].innerHTML=Math.floor(hour/10);
		liArr[1].innerHTML=hour%10;
		liArr[3].innerHTML=Math.floor(minu/10);
		liArr[4].innerHTML=minu%10;
		liArr[6].innerHTML=Math.floor(sec/10);
		liArr[7].innerHTML=sec%10;
	},2000)
};

function banner(){
	var $banner = $('.jq_banner');
        var width = $banner.width();
        var imageBox = $banner.find('ul:eq(0)');
        var pointBox = $banner.find('ul:eq(1)')   
        var points = pointBox.find('li');
        var animateFuc = function() {
            imageBox.animate({
                'transform': 'translateX(' + (-index * width) + 'px)'
            }, 200, 'ease', function() {
                if (index >= 9) {
                    index = 1;
                    
                    imageBox.css({
                        'transform': 'translateX(' + (-index * width) + 'px)'
                    });
                } else if (index <= 0) {
                    index = 8;
                    imageBox.css({
                        'transform': 'translateX(' + (-index * width) + 'px)'
                    });
                }
                
                points.removeClass('current').eq(index - 1).addClass('current');
            });
        };
        var index = 1;
        var timer = setInterval(function() {
            index++;
            animateFuc();
        }, 3000);


        imageBox.on('swipeLeft', function() {
            index++;
            animateFuc();
        });

        imageBox.on('swipeRight', function() {
            index--;
            animateFuc();
        });
}