$(document).ready(function() {
	
	// fullpage init

	$('#fullpage').fullpage({
		menu: '#menu',
		anchors:['home', 'about', 'benefits', 'price',
		'delivery', 'feedback', 'history', 'order', 'contacts'],
		afterLoad: function(anchorLink, index){
            var loadedSection = $(this);

            if (index == 1) {
            	setTimeout(function(){
            		loadedSection.find('.js-show').addClass('is-visible');
            	}, 500);
            }
            else {
            	loadedSection.find('.js-show').addClass('is-visible');
            }

        }
	});

	// banners slider init

	$('.js-banners').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true
	});

	$('.js-comments').slick({
		slidesToShow: 1,
		slidesToScroll: 1
	});

	$('.js-comments').on('afterChange', function(event, slick, currentSlide, nextSlide){
		var comemntIndex = $('.js-comments').slick('slickCurrentSlide');
		comemntIndex = comemntIndex + 1;
		$('.js-counter').text(comemntIndex);
	});

	

	// select
    $(document).click(function() {
        $(".js-select").removeClass("is-active");
	      $(".js-select-list").slideUp(100);
    });
    
	// select list
    $("body").on("click",".js-select",function(event) {
        event.stopPropagation();
    });
    $("body").on("click",".js-select-text",function(event) {
    	var select = $(this).parents(".js-select");
        if (select.hasClass("is-active")) {
            $(".js-select").removeClass("is-active");
            $(".js-select-list").slideUp(100);
        }
        else {
            $(".js-select").removeClass("is-active");
            $(".js-select-list").slideUp(100);
            select.toggleClass("is-active").find(".js-select-list").slideToggle(100);
        }
       
    });

    $("body").on("click",".js-select-list li",function() {
        var val = $(this).attr("data-val");
        var text = $(this).text();
        var select = $(this).parents(".js-select");
        var selectList = $(this).parents(".js-select-list");
        select.find(".js-select-text").text(text);
        select.find("option").removeAttr("selected");
        select.find('option[value="'+val+'"]').attr("selected", "selected");
        selectList.find("li").removeClass("is-active");
        $(this).addClass("is-active");
        select.removeClass("is-active");
        selectList.slideUp(100);
        return false;
        
    });
	   
	// google map init
	function initialize() {
		var styles = [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}]
		var myLatLng = {lat: 55.755390, lng: 37.630389};
		var markerLatLng = {lat: 55.755554, lng: 37.621858};

        var mapOptions = {
            center: myLatLng,
            zoom: 15,
            scrollwheel: false,
            styles: styles
        };
        var map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);

        var marker = new google.maps.Marker({
            position: markerLatLng,
            icon: '../img/marker.png'
        });
        marker.setMap(map);
    }
    google.maps.event.addDomListener(window, 'load', initialize);   

});