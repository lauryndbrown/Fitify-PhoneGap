$(document).on('deviceready', function(){
    
    var authUrl = "https://www.fitbit.com/oauth2/authorize?response_type=code&client_id=228J44&redirect_uri=http%3A%2F%2Flocalhost%3A3000&scope=activity%20heartrate%20location%20nutrition%20profile%20settings%20sleep%20social%20weight&expires_in=604800"

    var loginButton = $('#login-button');
    var loginStatus = $('#login-status');
    loginButton.click(function(){
        var authWindow = window.open(authUrl, "_blank");
        $( authWindow ).on('load',function(){
            var url = authWindow.location.href;
            var code = /\?code=(.+)#/.exec(url);
            var error = /\?error=(.+)$/.exec(url);
            //authWindow.close();
            if(code) {
                alert("code:"+code[1]);
                $.post('https://api.fitbit.com/oauth2/token', {
                    code: code[1],
                    client_id: '228J44',
                    client_secret: 'ffedf989d2b96996db816a8ba4697985',
                    redirect_uri: 'https%3A%2F%2Fgithub.com%2Flauryndbrown%2FFitify-PhoneGap',
                    grant_type: 'authorization_code',
                }).done(function(response) {
                    deferred.resolve(data);
                }).fail(function(response) {
                    deferred.reject(response.responseJSON);
                });
            }else if (error) {
                alert("error");
                deferred.reject({
                    error: error[1]
                });
            }
        });
            
      /*  $(authWindow).document.on('ready', function (){
                alert("hello");
                alert(authWindow.location.href);
        });
        $(authWindow).load(function(e) {
           
            
            if (code || error){
                authWindow.close();
            }

           
            */
    });
});
