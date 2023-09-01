function application(){
    document.getElementById("inner").classList.add("hide")
    
    setTimeout("connect()",700)
}
function connect(){
    document.getElementById("inner").style.display="none"
    document.getElementById("inner2").classList.add("show")
    document.getElementById("inner2").id= "inner"
    //第1步 连接后端
    //window.YESconnectServer();//后期修改ip方便
    var wsImpl = window.WebSocket || window.MozWebSocket;
    // 创建新的websocket新连接端口
    window.ws = new wsImpl('ws://127.0.0.1:8888');//192.168.0.1这是后端服务器地址，本地是127.0.0.1或者localhost，这里要注意：要与服务端统一ip写法（或者服务端监听所有得，如0.0.0.0：8888），否则其他电脑无法访问。
    console.log("连接中，等待连接 ..<br/>");
    //没有连接上就给客户提示
    //document.getElementById("container").innerHTML = '<img src="img/xxx.gif" style="margin-left:80px;margin-top:50px;"/><span style="margin-left:-80px;color:red">请尝试按F5刷新页面</span>';

    //第2步 当链接对象找到服务端成功对接后，提示正常打开
    ws.onopen = function () {
        console.log("连接成功");
        //连接公共就要取消提示：visibility:hidden;
        //document.getElementById("container").innerHTML = '<img src="img/xxx.gif" style="margin-left:80px;margin-top:30px;visibility:hidden;" /><span style="margin-left:-90px;color:red;visibility:hidden;">等待时间久，请尝试刷新页面</span>';

        // id对应刻客户本机的IP
        // console.log("唯一id号："+id); //打印看看对否

        // 发送数据给后端处理，这里我使用的是json
        let data = {
                "name":document.getElementById("name").value,
                "qqid":document.getElementById("qqid").value
            };
        var sendStr = JSON.stringify(data);
        console.log("发送数据（转换后）:" + sendStr);
        ws.send(sendStr);
    };
        //第3步 接收到服务端响应的数据时，触发事件
    ws.onmessage = function (evt) {
        var myobj = JSON.parse(evt.data);//转对象
        console.log(myobj);
        switch(myobj)
        {
            case 0:
                alert("此qq号已被注册")
                window.location.replace("../whitelist.html")
            break;
            case 1:
                alert("此名字已被注册")
                window.location.replace("../whitelist.html")
            break;
            case 2:
                alert("注册成功！欢迎来到红白阁服务器")
                window.location.replace("../index.html")
            break;
            case 3:
                alert("您还未登陆过服务器")
                window.location.replace("../whitelist.html")
            break;
        }

    };
}
function test(){




   //第4步 当服务端关闭后，定时重连操作
   ws.onclose = function () {
       // data.append ( '.. 网络连接失败<br/>');
       console.log("Close：连接关闭");
       // login();//重连
   };

   //第5步 当连接出现异常后，排查下连接错误原因
   ws.onerror = function() {
        console.log("Erro:出现错误");
        // login();//重连
   };
}
