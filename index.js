var map = {
    'org.apache.cordova.battery-status':'cordova-plugin-battery-status',
    'org.apache.cordova.camera':'cordova-plugin-camera',    
    'org.apache.cordova.console':'cordova-plugin-console',
    'org.apache.cordova.contacts':'cordova-plugin-contacts',
    'org.apache.cordova.device':'cordova-plugin-device',
    'org.apache.cordova.device-motion':'cordova-plugin-device-motion',
    'org.apache.cordova.device-orientation':'cordova-plugin-device-orientation',
    'org.apache.cordova.dialogs':'cordova-plugin-dialogs',
    'org.apache.cordova.file':'cordova-plugin-file',
    'org.apache.cordova.file-transfer':'cordova-plugin-file-transfer',
    'org.apache.cordova.geolocation':'cordova-plugin-geolocation',
    'org.apache.cordova.globalization':'cordova-plugin-globalization',
    'org.apache.cordova.inappbrowser':'cordova-plugin-inappbrowser',
    'org.apache.cordova.media':'cordova-plugin-media',
    'org.apache.cordova.media-capture':'cordova-plugin-media-capture',
    'org.apache.cordova.network-information':'cordova-plugin-network-information',
    'org.apache.cordova.splashscreen':'cordova-plugin-splashscreen',
    'org.apache.cordova.statusbar':'cordova-plugin-statusbar',
    'org.apache.cordova.vibration':'cordova-plugin-vibration',
    'org.apache.cordova.test-framework':'cordova-plugin-test-framework'
}

module.exports.oldToNew = map;

var reverseMap = {};
Object.keys(map).forEach(function(elem){
    reverseMap[map[elem]] = elem;
})

module.exports.newToOld = reverseMap; 
