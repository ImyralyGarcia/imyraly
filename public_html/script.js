$(document).ready(function () {
    $("#contact").validate({
        debug: true,
        errorClass: "alert alert-danger",
        errorLabelContainer: "#output-area",
        errorElement: "div",
        // rules here define what is good or bad input
        //each rule starts with the form input element's NAME attribute
        rules: {
            name: {
                required: true
            },
            email: {
                email: true,
                required: true
            },
            message: {
                required: true,
                maxlength: 2000 //DO NOT camel case max length. It's just a JQuery rule.
            }
        },
        messages: {
            name: {
                required: "Name is a required field",
            },
            email: {
                email: "Please provide a valid email address",
                required: "Email is a required field"
            },
            message: {
                required: "Message is a required field",
                maxlength: "Message is too long"
            }
        },
        submitHandler: (form) => {

            $("#contact").ajaxSubmit({
                type: "POST",             //A get request is where you're getting info, a POST request is where you're sending info
                url: $("#contact").attr('action'),
                success: (ajaxOutput) => {
                    $("#output-area").css("display", "")
                    $("#output-area").html(ajaxOutput)

                    if ($(".alert-success") >= 1) {
                        $("#contact") [0].reset()
                    }
                }
            })

        }


    })
})