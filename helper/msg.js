/**
 * Created by yang on 15/3/27.
 */
var http = require('http');
var querystring = require('querystring');

var codeSentTemplate =  require('../config').msgConfig;

var clone = function(ob){
    return JSON.parse(JSON.stringify(ob));
};

var codeSentData = function(mob,code){
    var data = clone(codeSentTemplate);
    data.mob = mob;
    data.p1 = code;
    return data;
};

var sent = function(postData){
    var content = querystring.stringify(postData);
    var options = {
        host:'api.weimi.cc',
        path:'/2/sms/send.html',
        method:'POST',
        agent:false,
        rejectUnauthorized : false,
        headers:{
            'Content-Type' : 'application/x-www-form-urlencoded',
            'Content-Length' :content.length
        }
    };
    var req = http.request(options,function(res){
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            console.log(JSON.parse(chunk));
        });
        res.on('end',function(){
            console.log('over');
        });
    });
    req.write(content);
    req.end();
};

exports.sendMsg = function(mob,code){
    var postData = codeSentData(mob,code);
    sent(postData);
};

