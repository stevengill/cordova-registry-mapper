#Cordova Registry Mapper

This module is used to map cordova plugin ids to package names. When cordova users add plugins to their projects using ids (ex cordova plugin add org.apache.cordova.device), this module will map that id to the corresponding package name so cordova-lib knows what to fetch from npm. This module was created so we could migrate our plugins over to npm instead of relying on our own registry.
