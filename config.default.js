/**
 * Created by yang on 15/3/27.
 */
module.exports = config = {};

config.mailConfig = {
    name: 'server robot',//发件人名称
    admin:'',//管理员邮箱,默认收件账号
    config:{
        service: "QQ",
        host: "smtp.qq.com", //这里选用的是qq邮箱代发，可改为gmail等
        port:465,
        secureConnection: true,
        auth: {
            user: "", // 邮箱账号
            pass: "" // 邮箱密码
        }
    }
};

config.msgConfig = {
    uid:'',//微米uid
    pas:'',//微米密码
    mob:'',//默认收信账号,管理员电话
    cid:'',//微米cid
    p1:'',//报备短信id
    type:'json'
};