// $(document).ready(function() {

// 	$('#search').keyup(function(){

// 		$.ajax({
// 			type: "POST",
// 			url: "/search/",
// 			data: {
// 				'search_text': $('#search').val(),
// 			},
// 			success: searchSuccess,
// 			dataType: 'html'
// 		});
// 	});
// 	// CSRF code
//     function getCookie(name) {
//         var cookieValue = null;
//         var i = 0;
//         if (document.cookie && document.cookie !== '') {
//             var cookies = document.cookie.split(';');
//             for (i; i < cookies.length; i++) {
//                 var cookie = jQuery.trim(cookies[i]);
//                 // Does this cookie string begin with the name we want?
//                 if (cookie.substring(0, name.length + 1) === (name + '=')) {
//                     cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
//                     break;
//                 }
//             }
//         }
//         return cookieValue;
//     }
//     var csrftoken = getCookie('csrftoken');

//     function csrfSafeMethod(method) {
//         // these HTTP methods do not require CSRF protection
//         return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
//     }
//     $.ajaxSetup({
//     beforeSend: function(xhr, settings) {
//         if (!csrfSafeMethod(settings.type)) {
//             // Send the token to same-origin, relative URLs only.
//             // Send the token only if the method warrants CSRF protection
//             // Using the CSRFToken value acquired earlier
//             xhr.setRequestHeader("X-CSRFToken", csrftoken);
//         }
//     }
// });
// });
// function searchSuccess(data, textStatus){
// 	$('#search-results').html(data);
// }
