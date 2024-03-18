"use strict";
var getcolor;
var userCommand;
var rgbColorMap = {
  "light steel blue": [176, 196, 222],
  "olive drab": [107, 142, 35],
  "navajo white": [255, 222, 173],
  "floral white": [255, 250, 240],
  green: [0, 255, 0],
  magenta: [255, 0, 255],
  "medium sea green": [60, 179, 113],
  orange: [255, 165, 0],
  "ghost white": [248, 248, 255],
  "light sea green": [32, 178, 170],
  orchid: [218, 112, 214],
  "light golden rod yellow": [250, 250, 210],
  "light slate gray": [119, 136, 153],
  "peach puff": [255, 218, 185],
  gray: [128, 128, 128],
  "dark salmon": [233, 150, 122],
  "dark olive green": [85, 107, 47],
  "sea shell": [255, 245, 238],
  "old lace": [253, 245, 230],
  gainsboro: [220, 220, 220],
  "papaya whip": [255, 239, 213],
  "aqua marine": [127, 255, 212],
  "light blue": [173, 216, 230],
  "dark golden rod": [184, 134, 11],
  "medium blue": [0, 0, 205],
  tan: [210, 180, 140],
  "lavender blush": [255, 240, 245],
  tomato: [255, 99, 71],
  "light pink": [255, 182, 193],
  salmon: [250, 128, 114],
  beige: [245, 245, 220],
  "corn silk": [255, 248, 220],
  yellow: [255, 255, 0],
  "midnight blue": [25, 25, 112],
  lime: [0, 255, 0],
  "dark green": [0, 100, 0],
  sienna: [160, 82, 45],
  "medium violet red": [199, 21, 133],
  chocolate: [210, 105, 30],
  crimson: [220, 20, 60],
  pink: [255, 192, 203],
  "medium aqua marine": [102, 205, 170],
  "spring green": [0, 255, 127],
  "slate blue": [106, 90, 205],
  ivory: [255, 255, 240],
  "dark sea green": [143, 188, 143],
  "lime green": [50, 205, 50],
  purple: [128, 0, 128],
  "slate gray": [112, 128, 144],
  firebrick: [178, 34, 34],
  maroon: [128, 0, 0],
  "misty rose": [255, 228, 225],
  "medium orchid": [186, 85, 211],
  "dark violet": [148, 0, 211],
  honeydew: [240, 255, 240],
  "light sky blue": [135, 206, 250],
  gold: [255, 215, 0],
  "pale violet red": [219, 112, 147],
  "blanched almond": [255, 235, 205],
  "alice blue": [240, 248, 255],
  "pale turquoise": [175, 238, 238],
  white: [255, 255, 255],
  "dodger blue": [30, 144, 255],
  "yellow green": [154, 205, 50],
  "lawn green": [124, 252, 0],
  thistle: [216, 191, 216],
  "dark blue": [0, 0, 139],
  "dark magenta": [139, 0, 139],
  black: [0, 0, 0],
  "golden rod": [218, 165, 32],
  azure: [240, 255, 255],
  "medium turquoise": [72, 209, 204],
  "steel blue": [70, 130, 180],
  peru: [205, 133, 63],
  brown: [165, 42, 42],
  "blue violet": [138, 43, 226],
  "deep sky blue": [0, 191, 255],
  khaki: [240, 230, 140],
  bisque: [255, 228, 196],
  "saddle brown": [139, 69, 19],
  red: [100, 0, 0],
  "medium spring green": [0, 250, 154],
  "dark cyan": [0, 139, 139],
  "green yellow": [173, 255, 47],
  wheat: [245, 222, 179],
  "pale golden rod": [238, 232, 170],
  "dark slate blue": [72, 61, 139],
  cyan: [0, 255, 255],
  "hot pink": [255, 105, 180],
  "orange red": [255, 69, 0],
  plum: [221, 160, 221],
  "sandy brown": [244, 164, 96],
  "medium purple": [147, 112, 219],
  "light green": [144, 238, 144],
  "medium slate blue": [123, 104, 238],
  "royal blue": [65, 105, 225],
  violet: [238, 130, 238],
  "forest green": [34, 139, 34],
  "light salmon": [255, 160, 122],
  "light yellow": [255, 255, 224],
  "dark turquoise": [0, 206, 209],
  "indian red": [205, 92, 92],
  blue: [0, 0, 100],
  lavender: [230, 230, 250],
  "deep pink": [255, 20, 147],
  "burly wood": [222, 184, 135],
  "pale green": [152, 251, 152],
  teal: [0, 128, 128],
  "dark orchid": [153, 50, 204],
  silver: [192, 192, 192],
  "lemon chiffon": [255, 250, 205],
  "antique white": [250, 235, 215],
  coral: [255, 127, 80],
  "light coral": [240, 128, 128],
  olive: [128, 128, 0],
  "dark orange": [255, 140, 0],
  "rosy brown": [188, 143, 143],
  "cadet blue": [95, 158, 160],
  navy: [0, 0, 128],
  indigo: [75, 0, 130],
  "dark red": [139, 0, 0],
  "mint cream": [245, 255, 250],
  "corn flower blue": [100, 149, 237],
  snow: [255, 250, 250],
  "sea green": [46, 139, 87],
  "dark slate gray": [47, 79, 79],
  turquoise: [64, 224, 208],
  "light cyan": [224, 255, 255],
  "dark khaki": [189, 183, 107],
  linen: [250, 240, 230],
  moccasin: [255, 228, 181],
  laal: [100, 0, 0],
  hara: [0, 100, 0],
  neela: [0, 0, 100],
  gulaabee: [255, 192, 203],
  saphed: [255, 255, 255],
  peela: [255, 255, 0],
  santara: [255, 165, 0],
  bainganee: [128, 0, 128],
  neel: [75, 0, 130],
  kaala: [0, 0, 0],
  lala: [100, 0, 0],
  sabuja: [0, 100, 0],
  parakastha: [0, 0, 100],
  sada: [255, 192, 203],
  haluda: [255, 255, 255],
  kamala: [255, 255, 0],
  raktabarna: [255, 165, 0],
  begani: [128, 0, 128],
  nilabarna: [75, 0, 130],
  kalo: [0, 0, 0],
  kempu: [100, 0, 0],
  hasiru: [0, 100, 0],
  nili: [0, 0, 100],
  gulabi: [255, 192, 203],
  bili: [255, 255, 255],
  haladi: [255, 255, 0],
  kittale: [255, 165, 0],
  nerale: [128, 0, 128],
  indigo: [75, 0, 130],
  kappu: [0, 0, 0],
};
document.addEventListener("DOMContentLoaded", () => {
  const inputField = document.getElementById("chatinput");
  inputField.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
      let input = inputField.value;
      inputField.value = "";
      output(input);
    }
  });
});

$.fn.extend({
  animateCss: function (animationName, globalContext, callback) {
    var animationEnd =
      "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
    this.addClass("animated " + animationName).one(animationEnd, function () {
      $(this).removeClass("animated " + animationName);
      callback(globalContext);
    });
    return this;
  },
});
var chatBot = {
  init: function (bot_id) {
    // bot_id is currently not used but can be useful in future
    if (!this.initialised) {
      console.log("initialising bot");

      var that = this; // Heil JS !!!

      // append bot code
      this.appendBotBody(function () {
        // dynamic variables
        that.bot_chat_box = $("#emily_wrap");
        that.bot_avatar = $("#emily_bot_avatar");
        that.bot_tool_tip = $("#chat_tooltip");
        that.bot_avatar_custom = $(".bot-icon-custom");
        that.bot_input_field = $("#chatinput");
        that.bot_send_button = $("#emily_input_button");
        that.bot_attach_button = $("#emily_attach_button");
        that.bot_date_button = $("#emily_date_button");
        that.bot_attach_button_hidden = $("#browse");

        // that.bot_minimize_button = $("#emilyMinimizeButton");
        that.bot_chat_history = $("#emily_chat_history");
        that.loader = $("#bot_loader");
        // event bindings
        that.bindEvents();

        // optional capabilities
        that.enableVoiceInput();
        that.enableTimeout();
      });
    }
  },
  // Function to make chatbot draggable
  makeBotDraggable: function () {
    console.log("making draggable");
    this.bot_chat_box.draggable({
      scroll: false,
      handle: "#messages",
      containment: "window",
    });
  },
  bindEvents: function () {
    var that = this;
    console.log("Binding all events");
    this.hideLoader();
    //this.makeBotDraggable();

    // this.bot_input_field.attr('disabled','disabled');
    this.bot_avatar.on("click", $.proxy(this.hideBotInterface, this));
    this.bot_tool_tip.on("click", $.proxy(this.showBotInterface, this));
    this.bot_avatar_custom.on("click", $.proxy(this.showBotInterface, this));
    this.bot_input_field.on("keyup", $.proxy(this.processUserInput, this));
    this.bot_send_button.on("click", $.proxy(this.sendmessagesToServer, this));
    this.bot_attach_button_hidden.on(
      "change",
      $.proxy(this.uploadDocument, this)
    );

    this.bot_date_button.on("change", function (event) {
      console.log("Date Button Click");
      console.log($("#emily_date_button").val());
      // $.proxy(that.sendmessagesToServer, this);
    });

    $("#get_started_button").on("click", $.proxy(this.getStarted, this));
    $("#user_id_input").on("keyup", $.proxy(this.processGetStarted, this));

    // this.bot_minimize_button.on('click', $.proxy(this.minimizeBot, this));
    $("#emily_chat_history").niceScroll();

    $(document).on("click", ".confirm_intent_btn", function (event) {
      $.proxy(that.confirm_intent, this, that, event)();
    });
    $(document).on("click", ".user_rating_btn", function (event) {
      $.proxy(that.confirm_user_rating, this, that, event)();
    });
    $(document).on("click", ".optionbutton", function (event) {
      var chips_div = document.getElementById("chips_div");
      chips_div.parentNode.removeChild(chips_div);

      that.input_value_catch = this.value;
      $.proxy(that.setQuery, this, that, event)(this.value);
      // $.proxy(that.sendmessagesToServer, this);
    });

    $(document).on("click", "#emily_attach_button", function (event) {
      that.bot_attach_button_hidden.click();
    });
  },
  appendBotBody: function (callback) {
    console.log("Appending Bot Body");
    callback();
  },
  enableVoiceInput: function () {
    console.log("Enabling voice input");
    if ("webkitSpeechRecognition" in window) {
      var that = this;
      this.voiceEnabled = true;
      this.bot_send_button.removeClass("sendst");
      this.bot_send_button.addClass("fa-microphone");

      this.bot_send_button.prop("onclick", null).off("click");
      this.bot_send_button.on("click", $.proxy(this.captureVoice, this));

      this.recognition = new webkitSpeechRecognition();
      this.recognition.continuous = false;
      this.recognition.interimResults = false;
      this.recognition.maxAlternatives = 5;

      this.recognition.onstart = function () {
        console.log("starting to listen to voice");
        that.bot_send_button.addClass("faa-pulse animated");
        that.isVoiceRecognizing = true;
      };
      this.recognition.onspeechstart = function () {
        console.log("in onspeechstart of Voice Recognition");
        setTimeout(function () {
          that.recognition.stop();
        }, 8000);
      };
      this.recognition.onresult = function (event) {
        console.log("in onresult of Voice Recognition");
        var two_line = /\n\n/g;
        var one_line = /\n/g;
        function linebreak(s) {
          return s.replace(two_line, "<p></p>").replace(one_line, "<br>");
        }

        var first_char = /\S/;
        function capitalize(s) {
          return s.replace(first_char, function (m) {
            return m.toUpperCase();
          });
        }

        var interim_transcript = "";
        if (typeof event.results == "undefined") {
          that.recognition.onend = null;
          that.recognition.stop();
          return;
        }
        for (var i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            that.voiceTranscript += event.results[i][0].transcript;
          } else {
            interim_transcript += event.results[i][0].transcript;
          }
        }
        that.voiceTranscript = capitalize(that.voiceTranscript);
      };
      this.recognition.onend = function () {
        console.log("ending voice recognition");
        that.bot_send_button.removeClass("faa-pulse animated");
        that.isVoiceRecognizing = false;
        console.log("Output from voice recognition -> ", that.voiceTranscript);
        that.sendmessagesToServer();
      };
    }
  },
  captureVoice: function () {
    console.log("Capturing Voice");
    this.stopSpeaking();

    if (this.isVoiceRecognizing) {
      this.recognition.stop();
      return;
    }
    this.voiceTranscript = "";
    this.recognition.lang = "en-US";
    this.recognition.start();
  },
  stopSpeaking: function () {
    if (window.chrome) {
      window.speechSynthesis.cancel();
    }
  },
  showBotInterface: function () {
    console.log("Showing the bot interface");
    $(".custom-tooltip-bot").css("display", "none");
    if (!this.conversationStarted) {
      // user is opening UI for first time
      this.initiateConversation();
      clearInterval(this.idleInterval);
    }
    // this.bot_avatar.css("display", "none");
    this.bot_avatar.toggleClass("bot-open");
    this.bot_avatar_custom.css("display", "none");
    this.bot_avatar.css("display", "block");
    this.bot_chat_box.fadeToggle();

    // this.bot_chat_box.css("display", "block");
  },
  hideBotInterface: function () {
    console.log("Showing the bot interface");
    if (!this.conversationStarted) {
      // user is opening UI for first time
      this.initiateConversation();
      clearInterval(this.idleInterval);
    }
    // this.bot_avatar.css("display", "none");
    this.bot_avatar.toggleClass("bot-open");
    this.bot_avatar_custom.css("display", "block");
    this.bot_avatar.css("display", "none");

    this.bot_chat_box.fadeToggle();

    // this.bot_chat_box.css("display", "block");
  },
  showBotAvatar: function () {
    console.log("Showing the bot avatar");
    // this.bot_avatar.css("display", "block");
    this.bot_chat_box.css("display", "none");
    this.bot_avatar.removeClass("bot-open");
  },
  scrollChatToBottom: function () {
    console.log("Scrolling chat to bottom");
    this.bot_chat_history.animate(
      { scrollTop: this.bot_chat_history[0].scrollHeight },
      420
    );
  },
  hideLoader: function () {
    console.log("Hiding Loader");
    this.loader.hide();
  },
  showLoader: function () {
    console.log("Showing Loader");
    this.loader.show();
  },
  minimizeBot: function (event) {
    console.log("Minimizing Bot");
    this.showBotAvatar();
  },
  processUserInput: function (event) {
    console.log("Processing user input");
    if (event.keyCode == 13) {
      $.proxy(this.sendmessagesToServer, this)();
    } else {
      $.proxy(this.setSendIcon, this)();
      $.proxy(this.stopSpeaking, this)();
    }
  },
  setMicIcon: function () {
    if (this.bot_send_button.hasClass("sendst")) {
      this.bot_send_button.removeClass("sendst");
      this.bot_send_button.addClass("fa-microphone");

      this.bot_send_button.prop("onclick", null).off("click");
      this.bot_send_button.on("click", $.proxy(this.captureVoice, this));
    }
  },
  setSendIcon: function () {
    if (this.bot_send_button.hasClass("fa-microphone")) {
      this.bot_send_button.addClass("sendst");
      this.bot_send_button.removeClass("fa-microphone faa-pulse animated");

      this.bot_send_button.prop("onclick", null).off("click");
      this.bot_send_button.on(
        "click",
        $.proxy(this.sendmessagesToServer, this)
      );
    }
  },

  sendmessagesToServer: function () {
    const inputField = document.getElementById("chatinput");
    let input = inputField.value;
    inputField.value = "";
    output(input);
    // event.preventDefault();
    this.setMicIcon();
  },

  // set warm greeting of bot
  initiateConversation: function () {
    console.log("Initiating Conversation");
    var that = this;
    this.conversationStarted = true;
    this.showLoader();

    $.ajax({
      url: that.base_url + "/chatbot/reply",
      type: "POST",
      // xhrFields: {
      //     withCredentials: true
      // },
      data: {
        user_id: that.user_id,
        query: "INITIALIZED_WIZBUDDY",
        dialog: that.dialog,
        intent: that.intent,
        data_dict: JSON.stringify(that.data_dict),
      },
      success: function (data) {
        that.hideLoader();
        that.stopSpeaking();
        // that.intent = "none";//data.intent; // commenting out to keep it as faq bot
        that.intent = data.intent;
        that.dialog = data.dialog;
        that.data_dict = data.data_dict;
        console.log(data.reply);
        if (data.reply[0]["reply"].includes("I am connected")) {
          data.reply[0]["reply_type"] = "chips";
          that.data_dict = {
            chipset_data: {
              Move: "Move",
              Glow: "Glow",
              "Play a track": "Play a track",
              "Help me with exercise 1": "Help me with exercise 1",
              "Go Crazy": "Wizbot, can you go crazy",
              "Ramp Walk": "Wizbot, show me how to ramp walk",
              "Disco Lights": "Wizbot, can you show disco lights",
              "Traffic Lights": "Wizbot, show me traffic light",
              Rain: "Wizbot, show me rain effect",
              Vibgyor: "Wizbot, show me vibgyor sequence",
            },
          };
        }
        that.processBotReply(data);

        // that.captureVoice();
      },
      error: function (data) {
        that.hideLoader();
      },
    });

    $(".saavy-avatar").addClass("animated flipInY");
  },
  sanitizeHTML: function (text) {
    console.log("sanitizing user text");
    var tags_mapping = {
      // for preventing xss attacks
      "&": " &amp; ",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
      "/": "&#2F;",
      "`": "&#60;",
      "=": "&#3D;",
    };
    return text.replace(/[&<>"']/g, function (e) {
      return tags_mapping[e];
    });
  },
  //show user asked query in chatbot
  showUserQuery: function (query) {
    console.log("Showing user query");
    this.reply_div_id++;
    var current_date = new Date();
    var formated_date_time =
      current_date.toDateString().substring(0, 10) +
      ", " +
      current_date.getHours() +
      ":" +
      current_date.getMinutes() +
      ":" +
      current_date.getSeconds();

    var reply_html =
      '<div id="reply_div_' +
      this.reply_div_id +
      '" class="chat-input"> <div class="ui-user-avatar user-avatar"></div><div class="user-text"><p>' +
      this.sanitizeHTML(query) +
      "</p><span>" +
      formated_date_time +
      "</span></div></div>";
    var $reply_div = $(reply_html).hide();
    $reply_div.insertBefore(this.loader);
    console.log(this.loader);
    $reply_div.fadeIn("slow");
    this.scrollChatToBottom();
  },
  confirm_user_rating: function (globalContext, event) {
    //console.log(globalContext, event);
    console.log("Handling the user_rating");
    event.preventDefault();
    var data_rating = $(this).attr("data-rating");
    var data_query_id = $(this).attr("data-query-id");

    if (data_rating == "LIKE") {
      $(this).removeClass("fa-thumbs-o-up").addClass("fa-thumbs-up");
      $(this)
        .siblings()
        .removeClass("fa-thumbs-down")
        .addClass("fa-thumbs-o-down");
    } else {
      $(this).removeClass("fa-thumbs-o-down").addClass("fa-thumbs-down");
      $(this).siblings().removeClass("fa-thumbs-up").addClass("fa-thumbs-o-up");
    }

    $.ajax({
      url: globalContext.base_url + "/setUserRating/",
      type: "POST",
      // xhrFields: {
      //     withCredentials: true
      // },
      data: { query_id: data_query_id, query_rating: data_rating },
      success: function (data) {
        // do nothing
      },
      error: function (data) {
        // do nothing
      },
    });
  },
  confirm_intent: function (globalContext, event) {
    //console.log(globalContext, event);
    console.log("Handling the actions");
    event.preventDefault();
    var data_status = $(this).attr("data-status");
    var data_query_id = $(this).attr("data-query-id");

    // $(this).closest(".chat-input").hide();
    globalContext.enableInput();
    globalContext.input_value_catch = data_status;
    globalContext.sendmessagesToServer();

    // $.ajax({
    //     url: globalContext.base_url + "/setIntentStatus/",
    //     type: 'POST',
    //     // xhrFields: {
    //     //     withCredentials: true
    //     // },
    //     data: { query_id:data_query_id,query_status:data_status },
    //     success: function (data) {
    //         // do nothing
    //     },
    //     error: function(data){
    //         // do nothing
    //     }
    // });
  },
  // process replies of Bot as per reply type
  processBotReply: function (data) {
    console.log("Processing Bot Reply", data);
    var that = this;
    var time = 1000;
    var view_type = "without_icon";
    console.log("Total messages : " + data.reply.length);
    $.each(data.reply, function (index, item) {
      setTimeout(function () {
        // console.log("Index: "+index);
        if (
          index == data.reply.length - 1 ||
          (index + 1 < data.reply.length &&
            data.reply[index + 1].reply_type != "simple")
        ) {
          view_type = "with_icon";
        }

        if (item.reply_type == "simple") {
          that.showSimpleBotReply(
            that.synthesizeReply(item.reply),
            data.query_id,
            view_type
          );
          that.speak(that.synthesizeSpeech(item.speech));
        } else if (item.reply_type == "endchat") {
          that.showEndSession(
            that.synthesizeReply(item.reply),
            data.query_id,
            view_type
          );
          that.speak(that.synthesizeSpeech(item.speech));
        } else if (item.reply_type == "simple_confused") {
          that.showConfusedBotReply(item, data.query_id);
          //that.speak(that.synthesizeSpeech(item.speech));
        } else if (item.reply_type == "chips") {
          that.showOptionChips(that.synthesizeReply(item.reply), data.query_id);
          that.speak(that.synthesizeSpeech(item.speech));
        } else if (item.reply_type == "media") {
          that.showMediaReply(that.synthesizeReply(item.reply), data.query_id);
          that.speak(that.synthesizeSpeech(item.speech));
        } else if (item.reply_type == "table_view") {
          that.showTableReply(that.synthesizeReply(item.reply), data.query_id);
        } else if (item.reply_type == "date_view") {
          that.enableDateButton();
          that.showSimpleBotReply(
            that.synthesizeReply(item.reply),
            data.query_id
          );
          that.speak(that.synthesizeSpeech(item.speech));
        } else if (item.reply_type == "attach_enable") {
          that.enableAttachButton(
            that.synthesizeReply(item.reply),
            data.query_id
          );
          that.speak(that.synthesizeSpeech(item.speech));
        }
      }, time);
      time += 1000;
    });
  },
  // Confused Reply to ask about confirmation
  showConfusedBotReply: function (item, query_id) {
    console.log("showConfusedBotReply");
    this.reply_div_id++;
    this.disableInput();
    this.hideLoader();
    console.log(item.reply);
    var reply_html =
      '<div id="reply_div_' +
      this.reply_div_id +
      '" class="chat-input"> <div class="ui-emily-avatar emily-avatar"></div><div class="emily-text"><div style="font-size:13px;">' +
      item.reply +
      '<center><div class="confirm_intent_div"><button style="margin-right: 10px;" type="button" class="confirm_intent_btn bot-btn-success " data-status="yes" data-query-id="' +
      query_id +
      '">Yes</button><button style="margin-right: 10px;" type="button" class="confirm_intent_btn bot-btn-danger " data-status="no" data-query-id="' +
      query_id +
      '">No</button></div></center> \
        </div></div>';
    if (query_id) {
      reply_html +=
        '<div class="rating_container"><i class="fa fa-thumbs-o-up user_rating_btn" data-rating="LIKE"  data-query-id="' +
        query_id +
        '"  aria-hidden="true"></i><i class="fa fa-thumbs-o-down user_rating_btn" data-rating="DISLIKE"  data-query-id="' +
        query_id +
        '"  aria-hidden="true"></i></div>';
    }
    reply_html += "</div>";
    console.log(reply_html);
    var $reply_div = $(reply_html).hide();
    $reply_div.insertBefore(this.loader);
    $reply_div.fadeIn("slow");
    this.scrollChatToBottom();
  },
  // Simple reply
  showSimpleBotReply: function (reply, query_id, view_type) {
    console.log("showSimpleBotReply");
    this.reply_div_id++;
    this.hideLoader();
    var current_date = new Date();
    var formated_date_time =
      current_date.toDateString().substring(0, 10) +
      ", " +
      current_date.getHours() +
      ":" +
      current_date.getMinutes() +
      ":" +
      current_date.getSeconds();
    if (view_type == "with_icon") {
      var reply_html =
        '<div id="reply_div_' +
        this.reply_div_id +
        '" class="chat-input"> <div class="ui-emily-avatar emily-avatar"></div><div class="emily-text"><p>' +
        reply +
        "</p><span>" +
        formated_date_time +
        "</span></div>";
    } else {
      var reply_html =
        '<div id="reply_div_' +
        this.reply_div_id +
        '" class="chat-input"> <div class="ui-emily-avatar emily-avatar" style="visibility:hidden;"></div><div class="emily-text" style="border-bottom: 0px;padding-bottom: 12px"><p>' +
        reply +
        "</p> <span>" +
        formated_date_time +
        "</span></div>";
    }

    if (query_id) {
      reply_html +=
        '<div class="rating_container"><i class="fa fa-thumbs-o-up user_rating_btn" data-rating="LIKE"  data-query-id="' +
        query_id +
        '"  aria-hidden="true"></i><i class="fa fa-thumbs-o-down user_rating_btn" data-rating="DISLIKE"  data-query-id="' +
        query_id +
        '"  aria-hidden="true"></i></div>';
    }
    reply_html += "</div>";
    var $reply_div = $(reply_html).hide();
    $reply_div.insertBefore(this.loader);
    $reply_div.fadeIn("slow");
    this.scrollChatToBottom();
  },
  showTableReply: function (reply, query_id) {
    console.log("showTableReply");
    this.reply_div_id++;
    this.hideLoader();

    var table_data = this.data_dict["table_data"];

    var reply_html = "";
    var job_list_containter = "bots-container" + this.reply_div_id;
    reply_html +=
      '<div id="' +
      job_list_containter +
      '" class="row bots-container slider-nav" \
        style="margin: 15px;">';
    reply_html +=
      '<article class="col s12 m6 l4">\
                    <div class="card hoverable">\
                      <div class="card-image waves-effect" style="background:#4298b5!important;">\
                        <div class="card-title truncate" title="Title">' +
      table_data["title"] +
      '</div>\
                      </div>\
                      <div class="card-content">\
                      <table>';
    for (var key in table_data["leave_balance_data"]) {
      reply_html +=
        '<tr><td class="table_font"><strong>' +
        key +
        '</strong></td><td class="table_font">' +
        table_data["leave_balance_data"][key] +
        "</td></tr>";
    }

    reply_html +=
      "</table>\
                      </div>\
                    </div>\
                </article></div></div></div>";
    var $reply_div = $(reply_html).hide();
    $reply_div.insertBefore(this.loader);
    $reply_div.fadeIn("slow");
    this.scrollChatToBottom();

    $("#" + job_list_containter).slick({
      dots: false,
      infinite: false,
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    });
  },
  // Simple reply
  showEndSession: function (reply, query_id, view_type) {
    console.log("showSimpleBotReply");
    this.reply_div_id++;
    this.hideLoader();
    var current_date = new Date();
    var formated_date_time =
      current_date.toDateString().substring(0, 10) +
      ", " +
      current_date.getHours() +
      ":" +
      current_date.getMinutes() +
      ":" +
      current_date.getSeconds();
    if (view_type == "with_icon") {
      var reply_html =
        '<div id="reply_div_' +
        this.reply_div_id +
        '" class="chat-input"> <div class="ui-emily-avatar emily-avatar"></div><div class="emily-text"><p>' +
        reply +
        "</p><span>" +
        formated_date_time +
        "</span></div>";
    } else {
      var reply_html =
        '<div id="reply_div_' +
        this.reply_div_id +
        '" class="chat-input"> <div class="ui-emily-avatar emily-avatar" style="visibility:hidden;"></div><div class="emily-text" style="border-bottom: 0px;padding-bottom: 12px"><p>' +
        reply +
        "</p> <span>" +
        formated_date_time +
        "</span></div>";
    }

    if (query_id) {
      reply_html +=
        '<div class="rating_container"><i class="fa fa-thumbs-o-up user_rating_btn" data-rating="LIKE"  data-query-id="' +
        query_id +
        '"  aria-hidden="true"></i><i class="fa fa-thumbs-o-down user_rating_btn" data-rating="DISLIKE"  data-query-id="' +
        query_id +
        '"  aria-hidden="true"></i></div>';
    }
    reply_html += "</div>";
    var $reply_div = $(reply_html).hide();
    $reply_div.insertBefore(this.loader);
    $reply_div.fadeIn("slow");
    this.scrollChatToBottom();
    this.bot_input_field.attr("disabled", "disabled");
  },
  showOptionChips: function (reply, query_id) {
    console.log("showSimpleBotReply");
    this.reply_div_id++;
    var current_date = new Date();
    var formated_date_time =
      current_date.toDateString().substring(0, 10) +
      ", " +
      current_date.getHours() +
      ":" +
      current_date.getMinutes() +
      ":" +
      current_date.getSeconds();

    this.hideLoader();
    var chips_vals = this.data_dict["chipset_data"];
    console.log(chips_vals);
    var that = this;
    var reply_html =
      '<div id="reply_div_' +
      this.reply_div_id +
      '" class="chat-input"> <div class="ui-emily-avatar emily-avatar"></div><div class="emily-text"><p>' +
      reply +
      "</p><span>" +
      formated_date_time +
      "</span></div>";

    if (query_id) {
      reply_html +=
        '<div class="rating_container"><i class="fa fa-thumbs-o-up user_rating_btn" data-rating="LIKE"  data-query-id="' +
        query_id +
        '"  aria-hidden="true"></i><i class="fa fa-thumbs-o-down user_rating_btn" data-rating="DISLIKE"  data-query-id="' +
        query_id +
        '"  aria-hidden="true"></i></div>';
    }
    reply_html += '</div><div id="chips_div" style="text-align:center">';
    for (var key in chips_vals) {
      console.log(key);
      reply_html +=
        "<button class='optionselector optionbutton' id='" +
        key +
        "' value='" +
        key +
        "'>" +
        chips_vals[key] +
        "</button>";
    }

    reply_html += "</div>";
    var $reply_div = $(reply_html).hide();
    $reply_div.insertBefore(this.loader);
    $reply_div.fadeIn("slow");
    this.scrollChatToBottom();
  },
  showMediaReply: function (reply, query_id) {
    console.log("showMediaReply");
    this.reply_div_id++;
    var current_date = new Date();
    var formated_date_time =
      current_date.toDateString().substring(0, 10) +
      ", " +
      current_date.getHours() +
      ":" +
      current_date.getMinutes() +
      ":" +
      current_date.getSeconds();

    var card = this.data_dict["basicCard"];

    var video_html =
      '\
            <video id="clip" controls preload=auto width="100%" data-setup="{}">\
                <source src="' +
      card["buttons"][0]["openUrlAction"]["url"] +
      '" type="video/mp4"/>\
            </video>';
    var reply_html =
      '<div id="reply_div_' +
      this.reply_div_id +
      '" class="chat-input"> <div class="ui-emily-avatar emily-avatar" style="visibility:hidden;"></div><div class="emily-text"><p>' +
      card["title"] +
      '</p><div class="video-view">' +
      video_html +
      "</div><span>" +
      formated_date_time +
      "</span></div>";

    reply_html += "</div>";
    var $reply_div = $(reply_html).hide();
    $reply_div.insertBefore(this.loader);
    $reply_div.fadeIn("slow");
    this.scrollChatToBottom();
  },
  showDateSelector: function (reply, query_id) {
    console.log("showDateSelector");
    this.reply_div_id++;
    this.hideLoader();
    var that = this;
    var current_date = new Date();
    var formated_date_time =
      current_date.toDateString().substring(0, 10) +
      ", " +
      current_date.getHours() +
      ":" +
      current_date.getMinutes() +
      ":" +
      current_date.getSeconds();

    var reply_html =
      '<div id="reply_div_' +
      this.reply_div_id +
      '" class="chat-input"> <div class="ui-emily-avatar emily-avatar"></div><div class="emily-text"><p>' +
      reply +
      "</p><span>" +
      formated_date_time +
      "</span></div>";

    if (query_id) {
      reply_html +=
        '<div class="rating_container"><i class="fa fa-thumbs-o-up user_rating_btn" data-rating="LIKE"  data-query-id="' +
        query_id +
        '"  aria-hidden="true"></i><i class="fa fa-thumbs-o-down user_rating_btn" data-rating="DISLIKE"  data-query-id="' +
        query_id +
        '"  aria-hidden="true"></i></div>';
    }
    reply_html += "</div>";
    var $reply_div = $(reply_html).hide();
    $reply_div.insertBefore(this.loader);
    $reply_div.fadeIn("slow");
    this.scrollChatToBottom();
  },
  enableAttachButton: function (reply, query_id) {
    console.log("enableAttachButton");
    this.hideLoader();
    $("#emily_attach_button").css("display", "block");
    $(".attach_tooltiptext").text(reply);
    $(".attach_tooltiptext").css("visibility", "visible");
  },
  enableDateButton: function () {
    console.log("enableDateButton");
    this.hideLoader();
    $("#emily_date_button").css("display", "block");
    // $(".attach_tooltiptext").text(reply);
    // $(".attach_tooltiptext").css("visibility","visible");

    // setTimeout(function(){$(".attach_tooltiptext").css("visibility","hidden");},5000);
  },
  showToolTip: function (botContext) {
    // botContext.bot_tool_tip.fadeIn('slow');
    console.log("showing tooltip");
    botContext.bot_tool_tip.show();
    botContext.bot_tool_tip.addClass("animated bounce");
    $(".custom-tooltip-bot").css("display", "block");
  },
  hideToolTip: function (botContext) {
    botContext.bot_tool_tip.addClass("animated bounceOut");
    $(".custom-tooltip-bot").css("display", "none");
    // botContext.bot_tool_tip.hide();
  },
  speak: function (msg) {
    try {
      console.log("speaking ", msg);
      // window.speechSynthesis.cancel();

      var msg = new SpeechSynthesisUtterance(msg);
      var voices = window.speechSynthesis.getVoices();
      msg.voice = voices.filter(function (voice) {
        return voice.name == "Google UK English Female";
      })[0];
      window.speechSynthesis.speak(msg);
    } catch (e) {
      console.log("Error in Speech Module");
    }
  },
  synthesizeReply: function (reply) {
    console.log("synthesizing reply", reply);
    console.log(this.data_dict);
    var reply = reply.replace("{{BOTNAME}}", this.bot_name);
    reply = reply.replace("{{USERNAME}}", this.user_name);
    reply = reply.replace("{{FIRSTNAME}}", this.user_name.split(" ")[0]);
    reply = reply.replace("{{YEARS}}", this.data_dict["YearsDiff"]);

    var greeting =
      new Date().getHours() > 11
        ? new Date().getHours() >= 16
          ? "Good Evening"
          : "Good Afternoon"
        : "Good Morning";
    reply = reply.replace("{{GREETING}}", greeting);
    return reply;
  },
  synthesizeSpeech: function (reply) {
    var reply = reply.replace("{{BOTNAME}}", this.bot_name);
    reply = reply.replace("{{USERNAME}}", this.user_name);
    reply = reply.replace("{{FIRSTNAME}}", this.user_name.split(" ")[0]);
    reply = reply.replace("{{YEARS}}", this.data_dict["YearsDiff"]);
    var greeting =
      new Date().getHours() > 11
        ? new Date().getHours() >= 16
          ? "Good Evening"
          : "Good Afternoon"
        : "Good Morning";
    reply = reply.replace("{{GREETING}}", greeting);
    return reply;
  },
  disableInput: function () {
    this.bot_input_field.prop("disabled", true);
    // this.bot_send_button.css('color', '#4c565d');
    // this.input_disabled = true;
  },
  enableInput: function () {
    this.bot_input_field.prop("disabled", false);
  },
  enableTimeout: function () {
    this.isDev && console.log("In timeout");

    //For Timeout functionality
    var that = this;
    this.idleInterval = setInterval(
      $.proxy(that.timerIncrement, this, that),
      1000
    ); // 1 second
    // $(window).mousemove(function (e) {
    //     that.idleTime = 0;
    // });
    // $(window).keypress(function (e) {
    //     that.idleTime = 0;
    // });
  },
  timerIncrement: function (botContext) {
    botContext.isDev && console.log("In timerIncrement");
    var that = botContext;
    botContext.idleTime = botContext.idleTime + 1;
    botContext.isDev && console.log(botContext.idleTime);
    if (botContext.idleTime == 3) {
      botContext.showToolTip(botContext);
    } else if (botContext.idleTime == 10) {
      botContext.hideToolTip(botContext);
      botContext.idleTime = 0;
      clearInterval(botContext.idleInterval);
    }
  },
  setQuery: function (globalContext, event, value) {
    console.log(value);
    // globalContext.bot_input_field.val(value);
    // globalContext.bot_send_button.click();
    globalContext.sendmessagesToServer();
    // $.proxy(globalContext.sendmessagesToServer, globalContext)
  },
};

$(document).ready(function () {
  console.log("DOM ready!");
  chatBot.init("f80feb53-35b27f663978-d6b72e5c0658");
});

function requestColorpowers(color) {
  var red = rgbColorMap[color][0];
  var green = rgbColorMap[color][1];
  var blue = rgbColorMap[color][2];

  var settings = {
    url: "http://192.168.4.1/smartlight",
    method: "POST",
    timeout: 0,
    headers: {
      "Content-Type": "text/plain",
    },

    data: "{r:" + red + ",g:" + green + ",b:" + blue + "}",
    error: function (data) {},
  };

  $.ajax(settings).done(function (response) {
  
  });
}

function getRandomColor() {
  var letters = "0123456789ABCDEF".split("");
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function output(input) {
  let product;
  let wizChat;

  // Regex remove non word/space chars
  // Trim trailing whitespce
  // Remove digits - not sure if this is best
  // But solves problem of entering something like 'hi1'

  let text = input
    .toLowerCase()
    .replace(/[^\w\s]/gi, "")
    .replace(/[\d]/gi, "")
    .trim();
  text = text
    .replace(/ a /g, " ") // 'tell me a story' -> 'tell me story'
    .replace(/i feel /g, "")
    .replace(/whats/g, "what is")
    .replace(/please /g, "")
    .replace(/ please/g, "")
    .replace(/r u/g, "are you");

  if (compare(prompts, replies, text)) {
    // Search for exact match in `prompts`
    product = compare(prompts, replies, text);
    
  } else if (text.match(/thank/gi)) {
    product = "You're welcome!";
  } else if (text.match(/(corona|covid|virus)/gi)) {
    // If no match, check if messages contains `coronavirus`
    product = coronavirus[Math.floor(Math.random() * coronavirus.length)];
  } else {
    // If all else fails: random alternative
    product = alternative[Math.floor(Math.random() * alternative.length)];
  }

  // Update DOM
  addChat(input, product);
}

function compare(promptsArray, repliesArray, string) {
  let reply;
  let replyFound = false;
  for (let x = 0; x < promptsArray.length; x++) {
    for (let y = 0; y < promptsArray[x].length; y++) {
      if (promptsArray[x][y] === string) {
        let query = promptsArray[x][y];
        getcolor = query.split(" ").splice(-1);
        userCommand=query;
        let replies = repliesArray[x];
        reply = replies[Math.floor(Math.random() * replies.length)];
        replyFound = true;
        break;
      }
    }
    if (replyFound) {
 
      // Stop outer loop when reply is found instead of interating through the entire array
      break;
    }
  }
  return reply;
}
  
function addChat(input, product) {
  const messagesContainer = document.getElementById("messages");
  getcolor;
  userCommand;
  var message = "chatbot : Kid :" +userCommand+"";
  
  let userImg = document.createElement("img");
  let userText = document.createElement("span");
  let userDiv = document.createElement("div");
  userDiv.id = "user";
  userImg.src = "../static/images/user-avatar.png";
  userImg.className = "avatar";
  userDiv.className = "user response";
  userDiv.innerHTML = `<span>${input}</span>`;
  userDiv.appendChild(userImg);
  messagesContainer.appendChild(userDiv);

  let botDiv = document.createElement("div");
  let botImg = document.createElement("img");
  let botText = document.createElement("span");
  botDiv.id = "bot";
  botDiv.className = "bot responses";
  botDiv.innerHTML = `<img src="../static/images/wizbot_hand_move.gif" class="avatar">`;
  botText.innerText = "....";
  botDiv.appendChild(botText);
  botDiv.appendChild(botImg);
  messagesContainer.appendChild(botDiv);
  // Keep messages at most recent
  messagesContainer.scrollTop =
    messagesContainer.scrollHeight - messagesContainer.clientHeight;
   
    
  // Fake delay to seem "real"

  setTimeout(() => {
    botText.innerText = `${product}`;
    // textToSpeech(product);
    requestColorpowers(getcolor);
  }, 2000);
}
