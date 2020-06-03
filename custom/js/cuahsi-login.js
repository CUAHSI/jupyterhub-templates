$(document).ready ( function(){
    
    // disable the sign-in button
    $('#btn-login').addClass('disabled')
    $('#chk-tou').on('change', function() {
	if ( !$('#chk_tou').is(':checked') ) {
	    $('#btn-login').addClass('disabled')
	} else {
	    $('#btn-login').removeClass('disabled')
	}

    });
   
});
