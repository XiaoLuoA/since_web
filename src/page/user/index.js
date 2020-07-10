import './index.less'
import {getUser} from "~/ajax";
import codes from "config/codeConfig"

getUser('123').then((data) => {
    if (data.code === codes.success){
        message.success('请求成功');
        console.log(data);
        return ;
    }else if (data.code == ""){

    }
});

doLogin('dgb','drb').then((data) => {
    if (data.code === "0"){
        message.success('请求成功');
        console.log(data);
        return ;
    }else if(data.code=="404"){
        console.log(errMsg);
    }else{
        console.log("error!!!!!!!!!!!!!");
        message.error('大概是用户的错吧');
    }
}).finally(() => {
    message.success('假装这是请求结束 loading消失');
});