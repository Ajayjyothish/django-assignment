$("#post-form").validate({
  rules: {
    name: {
      required: true,
      minlength: 5,
    },
    email: {
      required: true,
      email: true,
    },
    phone: {
      minlength: 10,
      maxlength: 10,
      number: true,
    },
  },
  messages: {
    name: {
      required: "Please put your full name.",
      minlength: "C'mon full name please.",
    },
    email: "A valid email please",
    phone: "Enter a 10 digit mobile number",
  },
  submitHandler: function (form, event) {
    event.preventDefault();
    $.ajax({
      type: form.method,
      url: "",
      data: {
        name: $("#name").val(),
        email: $("#email").val(),
        phone: $("#phone").val(),
        description: $("#description").val(),
        csrfmiddlewaretoken: $("input[name=csrfmiddlewaretoken]").val(),
        action: "post",
      },
      success: function (json) {
        document.getElementById("post-form").reset();
        alert("success");
      },
      error: function (xhr, errmsg, err) {
        console.log(xhr.status + ": " + xhr.resposeText);
      },
    });
  },
});
