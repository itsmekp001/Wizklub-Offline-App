console.log("[info] current user: "+emailId);
var currentVolume = 100;
$( document ).ready(function() {
    console.log( "[info] wizbot application ready .. " );
    // enabling tooltip on hover chatbot btn
    $('[data-toggle="tooltip"]').tooltip();   
    // showing logging msg
    $(".toast").toast('show');

    // on load workspace dropdown select
    $('.workspace-dropdown-menu').on("click", '.blockly-dropdown-item',function(){
        console.log("item selected: "+$(this).text());
        $('.load-workspace-btn').text($(this).text());
        var selectedWorkspace = $(this).text();
        loadWorkspace(selectedWorkspace);

    });

    $(".delete-confirm-btn").click(function(){
        console.log("[info] delete confirm btn clicked");
        try{
            // var code = moment + pulse;
            console.log("[info] making api call for id: "+emailId);
            var _parameter = "deletewifi";
            var _data = { email: emailId};
            
            makeRequest(_parameter,_data).then(function(response){
                console.log("[status] for delete");
                console.log(response);
                response = response['response'];
                if (response['status'] == true){
                    showToast("success", response['reply']);
                    var url = "http://"+document.domain+":"+document.port+"/configure";
                    if (url.includes("wizklub")){
                        url = "https://wizklub.me/configure";
                    }
                    setTimeout(function(){
                        window.location.href = url;
                    },2000);
                }
                else{
                    showToast("error", response['reply']);
    
                }
            });
        }
        catch(err){
    
        }
    });

    $(".decrease-vol").click(function(){
        if(currentVolume > 0){
            currentVolume -= 20;
            console.log("[info] in decreasing volume");
            console.log("[info] making api call for id: "+emailId);
            var _parameter = "volumecontrol";
            var _data = { email: emailId, volume: currentVolume, source: "Blockly"};
            
            makeRequest(_parameter,_data).then(function(response){
                console.log("[status] for volume control: ",response);
                response = response['response'];
                if (response['status'] == true){
                    showToast("success", response['reply']);
                    var htmlScript = '<div class="progress-bar" role="progressbar" style="width: '+currentVolume+'%;" aria-valuenow="'+currentVolume+'" aria-valuemin="0" aria-valuemax="100">'+currentVolume+'%</div>';
                    $(".volume-progress").html(htmlScript);
                }
                else{
                    showToast("error", response['reply']);

                }
                
            });
        }
    });
    $(".increase-vol").click(function(){
        if(currentVolume < 100){
            currentVolume += 20;

            console.log("[info] in increasing volume");
            console.log("[info] making api call for id: "+emailId);
            var _parameter = "volumecontrol";
            var _data = { email: emailId, volume: currentVolume, source: "Blockly"};
            
            makeRequest(_parameter,_data).then(function(response){
                console.log("[status] for volume control");
                response = response['response'];
                if (response['status'] == true){
                    showToast("success", response['reply']);
                    var htmlScript = '<div class="progress-bar" role="progressbar" style="width: '+currentVolume+'%;" aria-valuenow="'+currentVolume+'" aria-valuemin="0" aria-valuemax="100">'+currentVolume+'%</div>';
                    $(".volume-progress").html(htmlScript);
                }
                else{
                    showToast("error", response['reply']);

                }
                
            });

        }

    });
    // fetch list of workspaces
    fetchWorkspaceList();

});


function makeRequest(_parameter,_data){
    return $.ajax({
        url: MASTER_URL+"/_api/"+_parameter,
        data: _data,
        async: false,
        type: 'POST',
    });
}
function sessionProcess(process) {
    try{
        console.log("[info] in sessionProcess");
        // var code = moment + pulse;
        console.log("[info] making api call for id: "+emailId);
        var _parameter = "session";
        var _data = { email: emailId, process: process, source: "Blockly"};
        
        makeRequest(_parameter,_data).then(function(response){
            console.log("[status] for shaftmoment");
            console.log(response);
            response = response['response'];
            if (response['status'] == true){
                showToast("success", response['reply']);
            }
            else{
                showToast("error", response['reply']);

            }
        });
    }
    catch(err){

    }
}
function requestShaftMoment(moment, pulse, movetype) {
    try{
        console.log("[info] in requestShaftMoment");
        // var code = moment + pulse;
        console.log("[info] making api call for id: "+emailId);
        var _parameter = "shaftmotion";
        var _data = { email: emailId, direction: moment, duration: pulse, source: "Blockly", movetype:movetype};
        
        makeRequest(_parameter,_data).then(function(response){
            console.log("[status] for shaftmoment");
            console.log(response);
            response = response['response'];
            if (response['status'] == true){
                showToast("success", response['reply']);
            }
            else{
                showToast("error", response['reply']);

            }
        });
    }
    catch(err){

    }
}
function requestRGBChange(red, green, blue) {
    try{
        console.log("[info] in requestRGBChange");
        // var code = moment + pulse;
        console.log("[info] making api call for id: "+emailId);
        var _parameter = "updatergb";
        var _data = { email: emailId, red: red, green: green, source: "Blockly", blue:blue};
        
        makeRequest(_parameter,_data).then(function(response){
            console.log("[status] for requestRGBChange");
            console.log(response);
            response = response['response'];
            if (response['status'] == true){
                showToast("success", response['reply']);
            }
            else{
                showToast("error", response['reply']);

            }
        });
    }
    catch(err){

    }
}
function requestMP3Module(folder, track) {
    console.log("[info] in requestMP3Module");
    var code = folder + track;
    console.log("[info] making api call for id: "+emailId);

    var _parameter = "playtrack";
    var _data =  { email: emailId, folder: folder, track: track, source: "Blockly" };
    makeRequest(_parameter,_data).then(function(response){
        console.log("[success] playing track "+track+".");
        console.log(response);
            response = response['response'];
            if (response['status'] == true){
                showToast("success", response['reply']);
            }
            else{
                showToast("error", response['reply']);

            }
    });

}
function requestOledDisplay(msg) {
    console.log("[info] in requestOledDisplay");
    console.log("[info] making api call for id: "+emailId);

    var _parameter = "oledisplay";
    var _data =  { email: emailId, msg: msg, source: "Blockly" };
    makeRequest(_parameter,_data).then(function(response){
        console.log("[success] display text .");
        console.log(response);
            response = response['response'];
            if (response['status'] == true){
                showToast("success", response['reply']);
            }
            else{
                showToast("error", response['reply']);

            }
    });

}
function requestColorChange(color, totalTime) {
    console.log("[info] in requestColorChanger");
    console.log("[info] making api call for id: "+emailId);

    var _parameter = "updatecolor";    
    var _data = { email: emailId, color: color, duration: totalTime, source: "Blockly"};
    // console.log(data);
    
    makeRequest(_parameter,_data).then(function(response){
        console.log("[success] updating color: "+color+".");

        console.log(response);
        response = response['response'];
        if (response['status'] == true){
            showToast("success", response['reply']);
        }
        else{
            showToast("error", response['reply']);

        }

    });
}
function requestServoControl(todo) {
    console.log("[info] in requestServoControl");
    var code = folder + track;
    console.log("[info] making api call for id: "+emailId);

    $.ajax({
        url: MASTER_URL+"/_api/servomotion",
        data: { email: emailId, code: todo },
        type: 'POST',
        success: function (result) {
            console.log("[success] processing servo "+emailId+".");
            console.log(result);

        }
    });
}
function requestExtraActivity(activitytype){
    try{
        console.log("[info] in requestExtraActivity");
        // var code = moment + pulse;
        console.log("[info] making api call for id: "+emailId);
        var _parameter = "extraActivities";
        var _data = { email: emailId, source: "Blockly", activitytype:activitytype};
        
        makeRequest(_parameter,_data).then(function(response){
            console.log("[status] for requestExtraActivity");
            console.log(response);
            response = response['response'];
            if (response['status'] == true){
                showToast("success", response['reply']);
            }
            else{
                showToast("error", response['reply']);

            }

            
        });
    }
    catch(err){

    }
}
function sendIt(myValue) {
}

var requestSensorValue = function(parameter, callback) {


    console.log("The sensor function is running ......");
    console.log("[info] trying to fetch "+parameter+" sensor");
    console.log("[info] making api call for id: "+emailId);

    var data = new FormData();
    data.append("email", emailId);
    data.append("parameter", parameter);
    data.append("source", "Blockly");

    var xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
        console.log("[info] in ready state");
        console.log(this.responseText);
    }
    });
    xhr.open("POST", MASTER_URL+"/_api/fetch", false);
    xhr.onload = function() {
        var status = xhr.status;
        var readystate = xhr.readyState;
        if (status == 200 && readystate == 4) {
            callback(null, JSON.parse(xhr.response));
            console.log(xhr.response);
            var response = JSON.parse(xhr.response);
            response = response['response'];
            if (response['status'] == true){
                showToast("success", response['reply']);
            }
            else{
                showToast("error", response['reply']);
            }

        } else {
            callback(status);
        }
        
    };
    xhr.send(data);
};

function saveWorkspace() {
    var xmlDom = Blockly.Xml.workspaceToDom(demoWorkspace);
    var xmlText = Blockly.Xml.domToPrettyText(xmlDom);

    var filename = $("#workspace_file_input").val();
    if (filename == ""){
        $(".filename-valid.invalid-feedback").css("display","block");
        return;
    }
    $.ajax({
        url: "/_api/saveworkspace",
        data: {email: emailId, "xml":xmlText, "filename":filename},
        type: 'POST',
        success: function (result) {
            console.log("[success] saved your configuration");
            console.log(result);
            if (result.response['status'] == true) {
                $(".filename-valid.invalid-feedback").css("display","none");
                $(".toast-body").html(result.response['msg']);
                $("#showSessionPopUp").modal("hide");
                $('.toast').toast('show');
                appendWorkspaceToList(filename);
            }
            else {
                $("#showSessionPopUp").modal("hide");
                $(".toast-body").html("Some error occurred while processing your request. Please try again after sometime.");
                $('.toast').toast('show');
            }
        }
    });
}
function loadWorkspace(selectedWorkspace) {
    $.ajax({
        url: "/_api/loadworkspace",
        data: {email: emailId, workspace: selectedWorkspace},
        type: 'POST',
        success: function (result) {
            console.log("[info] load workspace fetched");
            console.log(result);

            if (result.response['status']) {
                demoWorkspace.clear();
                xmlDom = Blockly.Xml.textToDom(result.response['xml']);
                Blockly.Xml.domToWorkspace(demoWorkspace, xmlDom);
            }
            
        }
    });
    
}
function fetchWorkspaceList(){
    console.log("[info] in fetching workspaces for user: "+emailId);
    $.ajax({
        url: "/_api/fetchallworkspace",
        data: {email: emailId},
        type: 'POST',
        success: function (result) {
            console.log("[success] workspaces list fetched");
            console.log(result);
            for(var i=0; i<result.workspaces.length;i++){
                appendWorkspaceToList(result.workspaces[i]);
            }
        }
    });
}
function appendWorkspaceToList(workspaceName){
    var htmlScript = '<div class="dropdown-item blockly-dropdown-item">'+workspaceName+'</div>';
    $(".workspace-dropdown-menu").append(htmlScript);
}