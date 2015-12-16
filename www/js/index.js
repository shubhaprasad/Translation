/**
* Copyright 2015 IBM Corp.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var Messages = {
	headerText: "Default header",
	actionsLabel: "Default action label",
	sampleText: "Default sample text",
	englishLanguage : "English",
	frenchLanguage : "French",
	russianLanguage : "Russian",
	hebrewLanguage : "Hebrew"
};

var wlInitOptions = {
    // Options to initialize with the WL.Client object.
    // For initialization options please refer to IBM MobileFirst Platform Foundation Knowledge Center.
};

// Called automatically after MFP framework initialization by WL.Client.init(wlInitOptions).
function wlCommonInit(){
    $('#languages').bind('change', languageChanged);
	
    var locale = WL.App.getDeviceLocale();
    var lang = WL.App.getDeviceLanguage();
    WL.Logger.debug(">> Detected locale: " + locale);
    WL.Logger.debug(">> Detected language: " + lang);

    if (locale.indexOf("en")!=-1) languageChanged("english");
    if (locale.indexOf("fr")!=-1) languageChanged("french");
    if (locale.indexOf("ru")!=-1) languageChanged("russian");
    if (locale.indexOf("he")!=-1) languageChanged("hebrew");
}

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },

    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, 'app.receivedEvent(...);' must be explicitly called.
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },

    // Update the DOM on a received event.
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();