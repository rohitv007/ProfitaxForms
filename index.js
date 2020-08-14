$(document).ready(function () {
   
    $('#dismiss').on('click', function () {
        // hide sidebar
        $('#sidebar').removeClass('active');
        
    });

    $('#sidebarCollapse').on('click', function () {
        // open sidebar
        $('#sidebar').addClass('active');
        
        // $('.collapse.in').toggleClass('in');
        // $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });

    
        var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
        $('ul a').each(function() {
         if (this.href === path) {
          $(this).addClass('active');
         }
         else{
            $(this).removeClass('active');
         }
        });
       

    if  ($(window).width() > 992){
    $('#sidebarCollapse').addClass('disabled');}
else
    $('#sidebarCollapse').removeClass('disabled');
});