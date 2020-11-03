$(document).on("submit", "#post-form", function (e) {
  e.preventDefault();
  $.ajax({
    type: "POST",
    url: "",
    data: {
      name: $("#id_name").val(),
      email: $("#id_email").val(),
      phone: $("#id_phone").val(),
      description: $("#id_description").val(),
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
});
