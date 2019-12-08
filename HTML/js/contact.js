//Contact
$('#working_form').submit(function() {

    var action = $(this).attr('action');

    $("#message").slideUp(750, function() {
        $('#message').hide();

        $('#submit')
            .before('<img src="" class="gif_loader" />')
            .attr('disabled', 'disabled');

        $.post(action, {
                name: $('#name').val(),
                email: $('#email').val(),
                comments: $('#comments').val(),
            },
            function(data) {
                document.getElementById('message').innerHTML = data;
                $('#message').slideDown('slow');
                $('#cform img.gif_loader').fadeOut('slow', function() {
                    $(this).remove()
                });
                $('#submit').removeAttr('disabled');
                if (data.match('success') != null) $('#cform').slideUp('slow');
            }
        );

    });

    return false;

});

<script>
function showThxMessage(){
   var email = document.contact-form.emailAddress.value;
   if(email !== ''){
       var thxDiv = document.getElementById('thxMessage');
       thxDiv.getElementsByTagName('span')[0].innerHTML = email;
       document.myForm.reset();
       document.getElementById('message').style.display = 'none';
       thxDiv.style.display = 'block';
   }
}
</script>
