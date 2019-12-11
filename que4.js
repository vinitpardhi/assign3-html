
function createSlideShow()
{
    console.log("Inside createSlideShow");
    var $active=$('#slideshow IMG.ACTIVE');
    var $next=$active.next();

    $next.addClass('active');
    $active.removeClass('active');

    $(function(){
        setInterval("createSlideShow()",5000);
    });
}