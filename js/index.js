
$(".head-option ").mouseenter(function(){
                    if (!$(this).is(".active")){ $('ul', this).slideDown(500);};
                }).mouseleave(function(){
                    if (!$(this).is(".active")){$('ul', this).slideUp(500);};
                });

 $(".body-option ").mouseenter(function(){
                    if (!$(this).is(".active")){ $('ul', this).slideDown(500);};
                }).mouseleave(function(){
                    if (!$(this).is(".active")){$('ul', this).slideUp(500);};
                });
