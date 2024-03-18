(function ($) {
  "use strict";
  var selectedWorkspace = "";
  $(document).ready(function () {
    var currentEnv = findBootstrapEnvironment();
    console.log("[info] wizbot application initialized: " + currentEnv);
    // changing
    if (currentEnv == "sm" || currentEnv == "xs" || currentEnv == "md") {
      // $(".is-mobile").css("display", "block");
      $(".blockly-playground").css("width", "100%");
    } else {
      $(".is-pc").css("display", "block");
      $(".blockly-playground").css("width", "100%");
    }

    $(".blocklySvg").css("background-size", "contain");

    // enabling tooltip on hover chatbot btn
    $('[data-toggle="tooltip"]').tooltip();
    // showing logging msg
  });
})(jQuery);
