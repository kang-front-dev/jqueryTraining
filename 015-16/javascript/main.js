
$('.ask').on('click', function (e) {
    e.preventDefault();
    $('.ask').not($(this)).removeClass('active')
    $('.answer').not($(this).next()).slideUp(500)
    $(this).toggleClass('active').next().stop().slideToggle(500)
})


$('button[data-filter]').on('click', function () {

    let attrs = $(this).attr('data-filter')
    if (attrs == 'all') {
        $('div[data-filter]').stop().slideDown(500);
    } else {
        $('div[data-filter]').stop().slideUp(500);
    }
    $(`div[data-filter=${attrs}]`).stop().slideDown(500)
})

function typing(element) {
    let inner = element.html(),
        fullText = '',
        letterCount = 0,
        interval = setInterval(function () {
            fullText = fullText + inner[letterCount]
            element.html(fullText)
            letterCount++
            if (fullText === inner) {
                clearInterval(interval);
                setTimeout(() => {
                    letterCount = 0
                    fullText = ''
                }, 2000);
            }
        }, 100);
}

typing($('.mainTitle'));





$('.read-more').click(function (e) {
    e.preventDefault();
    if ($(this).html() === 'Hidden') {
        $(this).html('Read More');
    } else {
        $(this).html('Hidden');
    }
    $('.text-hidden').toggleClass('hidden');
})

$('.js-modal-show').click(function (e) {
    e.preventDefault();
    $('.modal').fadeIn(500)
})
$('.close').click(function (e) {
    e.preventDefault();
    $('.modal').fadeOut(500);
})

$('.nav').css({
    position: 'fixed',
    top: $(window).height() - $('.nav').outerHeight() + 'px',
    width: 100 + '%',
    zIndex: 10
})

$(window).on('scroll', function () {

    let editPosition = $(window).height() - $('.nav').outerHeight() - $(window).scrollTop()
    if (editPosition > 0) {
        $('.nav').css({
            top: editPosition + 'px'
        })
    } else {
        $('nav').css({
            top: 0
        })
    }
})

$('.js-sroll-to-id').click(function (e) {
    e.preventDefault();
    let attr = $(this).attr('href'),
        toEl = $(attr).offset().top


    $('html,body').animate({
        scrollTop: toEl - $('.nav').outerHeight()
    }, {
        duration: 1000
    })

})
$(window).on('scroll', function () {
    if ($(this).scrollTop() > 100) {
        $('.js-btn-top').addClass('show');
    } else {
        $('.js-btn-top').removeClass('show');
    }
})


$('a[href^="#header"]').click(function () {
    var target = $(this).attr('href');
    $('html, body').animate({ scrollTop: $(target).offset().top }, 800);
    return false;
});
