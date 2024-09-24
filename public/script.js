$(document).ready(function() {
    $('#userForm').submit(function(e) {
        e.preventDefault();
        const formData = $(this).serializeArray();
        const userData = {};
        formData.forEach(item => {
            userData[item.name] = item.value;
        });
        $.ajax({
            url: '/api/register',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(userData),
            success: function(response) {
                alert(response);
                $('#userForm')[0].reset(); // Clear the form after successful submission
            },
            error: function(err) {
                alert('Error: ' + err.responseText);
            }
        });
    });
});