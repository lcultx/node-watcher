/**
 * Created by yang on 15/3/27.
 */
var later = require('later');
var mail = require('./helper/mail');
var msg = require('./helper/msg');
var child_process = require('child_process');
var config = require('./config');

//later.date.UTC(); 使用UTC时间 或本地时间
later.date.localTime();
var sched = {
    schedules:[
        {s: [0,10,20,30,40,50]}
    ]
};



function isExist(pid,callback){
    var exec = require('child_process').exec;
    exec('kill -0 ' + pid,
        function (error, stdout, stderr) {
            if(error && error.toString().indexOf('No such process') > 0){
                callback(false)
            }else{
                callback(true);
            }
        });
}



var pid = process.argv[2];
console.log(pid);
later.setInterval(function(){
    isExist(pid,function(is_exist){
        if(!is_exist){

            mail.sendMail(config.mailConfig.admin,'服务器' + pid + '进程异常中断','pid:' + pid + ',time:' + Date(Date.now()).toLocaleString());
            msg.sendMsg(config.msgConfig.mob,'服务器' + pid + '进程异常中断');
        }
    });
},sched);

console.log('exit_watcher is listening on pid: ' + pid + ' , schedules: ',JSON.stringify(sched.schedules));