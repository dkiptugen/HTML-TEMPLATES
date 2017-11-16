
$(function () {
  

    //tooltip
    $("[data-toggle='tooltip']").tooltip();

    //popover
    $('[data-toggle="popover"]').popover();

    //scroll menu
    $(window).scroll(function () {
        init();
    });

    //page scroll
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 70
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    //init function
    function init() {
        var scroll = $(window).scrollTop();
        if (scroll >= 100) {
            $('.p-navbar').removeClass('navbar-transparent').addClass('bg-primary');
            $('.navbar-brand>img').attr('width','138').attr('height','22');
        } else {
            $('.p-navbar').removeClass('bg-primary').addClass('navbar-transparent');
            $('.navbar-brand>img').attr('width','200').attr('height','32');
        }
        return false;
    }
    $('#voteModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget) // Button that triggered the modal
        var recipient = button.data('whatever') // Extract info from data-* attributes
        // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
        // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
        var modal = $(this)
        modal.find('.modal-title').text('Vote for ' + recipient)
        modal.find('.modal-body #recipient-name').val(recipient)
    })   
});
