function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

function statusChangeCallback(response) {
  console.log('Facebook login status changed.');
  console.log(response);
  // The response object is returned with a status field that lets the
  // app know the current login status of the person.
  // Full docs on the response object can be found in the documentation
  // for FB.getLoginStatus().
  if (response.status === 'connected') {
    // Logged into your app and Facebook.
        console.log('Successfully logged in with Facebook');
         FB.api('/me?fields=name,first_name,picture.width(480)', changeUser);
  }
}

  function changeUser(response) {
    console.log(response.name);
    console.log(1000000);
    //document.getElementsByClassName("facebookLogin").hide();
    //document.getElementById("name").text(response.name);
    //document.getElementById("photo").attr("src","response.picture.url");
    $(".facebookLogin").hide();
    $(".jumbotron").text(response.name);
    $("#photo").attr('src',response.picture.data.url);
    //$("img").attr("width","500");
    //$("img").attr("width","500");
    //$("img").attr("width","500");

  }