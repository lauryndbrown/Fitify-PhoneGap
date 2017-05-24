var visible_page;
$(document).ready(function(){
    set_visible("#splash-page");
    set_visible("#login-page");
});
function set_visible(page){
    if(visible_page){
        visible_page.css("display", "none");
    }
    visible_page = $(page);
    visible_page.css("display", "block");
}
