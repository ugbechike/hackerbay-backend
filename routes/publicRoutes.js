var express = require('express');
var router = express.Router();
var user =  require('../controller/userLogin');
var userPatchController = require('../controller/jsonpatch');
var routeAuths = require('../routeauthenticator/authenticator');
var userThumbNail = require('../controller/userThumbnail');
router.post('/login', user.userLogin);
router.patch('/userpatch', routeAuths.routeAuth, userPatchController.createPatch);
router.get('/thumbnail', routeAuths.routeAuth, userThumbNail.thumbnailGenerator);

module.exports = router;