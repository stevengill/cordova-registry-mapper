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
    'org.apache.cordova.test-framework':'cordova-plugin-test-framework',
    'com.msopentech.websql' : 'cordova-plugin-websql',
    'com.msopentech.indexeddb' : 'cordova-plugin-indexeddb',
    'com.pbakondy.sim' : 'cordova-plugin-sim',
    'android.support.v4' : 'cordova-plugin-android-support-v4',
    'android.support.v7-appcompat' : 'cordova-plugin-android-support-v7-appcompat',
    'com.google.playservices' : 'cordova-plugin-googleplayservices',
    'com.google.cordova.admob' : 'cordova-plugin-admobpro',
    'com.rjfun.cordova.extension' : 'cordova-plugin-extension',
    'com.rjfun.cordova.plugin.admob' : 'cordova-plugin-admob',
    'com.rjfun.cordova.flurryads' : 'cordova-plugin-flurry',
    'com.rjfun.cordova.facebookads' : 'cordova-plugin-facebookads',
    'com.rjfun.cordova.httpd' : 'cordova-plugin-httpd',
    'com.rjfun.cordova.iad' : 'cordova-plugin-iad',
    'com.rjfun.cordova.iflyspeech' : 'cordova-plugin-iflyspeech',
    'com.rjfun.cordova.lianlianpay' : 'cordova-plugin-lianlianpay',
    'com.rjfun.cordova.mobfox' : 'cordova-plugin-mobfox',
    'com.rjfun.cordova.mopub' : 'cordova-plugin-mopub',
    'com.rjfun.cordova.mmedia' : 'cordova-plugin-mmedia',
    'com.rjfun.cordova.nativeaudio' : 'cordova-plugin-nativeaudio',
    'com.rjfun.cordova.plugin.paypalmpl' : 'cordova-plugin-paypalmpl',
    'com.rjfun.cordova.smartadserver' : 'cordova-plugin-smartadserver',
    'com.rjfun.cordova.sms' : 'cordova-plugin-sms',
    'com.rjfun.cordova.wifi' : 'cordova-plugin-wifi',
    'com.ohh2ahh.plugins.appavailability' : 'cordova-plugin-appavailability'
}

module.exports.oldToNew = map;

var reverseMap = {};
Object.keys(map).forEach(function(elem){
    reverseMap[map[elem]] = elem;
})

module.exports.newToOld = reverseMap;
