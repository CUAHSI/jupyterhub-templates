$(document).ready ( function(){
    
    // disable the sign-in button
    $('#btn-login').addClass('disabled')
    $('#chk-tou').on('change', function() {
	if ( this.checked ) {
	    // enable the sign in button
	    $('#btn-login').removeClass('disabled');
	} else {
	    // disable the sign in button
	    $('#btn-login').addClass('disabled');
	}

    });
   
});
