(function($){$.fn.responsiveMenu=function(options){var defaults={autoArrows:false,width:768};var options=$.extend(defaults,options);return this.each(function(){var node=$(this);var $window=$(window);var setClass=function(){if($window.width()>options.width){node.addClass('dropdown').removeClass('accordion');}else{node.addClass('accordion').removeClass('dropdown');}}
$window.resize(function(){setClass();$node.children('ul').css('display','none');});setClass();node.addClass('responsive-menu').find('a').live('click',function(e){var a=$(this);var container=a.next('ul,div');if($this.hasClass('accordion')&&container.length>0){container.slideToggle();return false;}}).stop().siblings('ul').parent('li').addClass('hasChild');if(options.autoArrows){$('.hasChild > a',node).append('<span class="arrow">&nbsp;</span>');}});}})(jQuery);

