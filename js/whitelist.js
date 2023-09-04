function application(){
    document.getElementById("inner").classList.add("hide")
    
    setTimeout("connect()",700)
}
function connect(){
    document.getElementById("inner").style.display="none"
    document.getElementById("inner2").classList.add("show")
    document.getElementById("inner2").id= "inner"
    var wsImpl = window.WebSocket || window.MozWebSocket;
    window.ws = new wsImpl('ws://redwhite.top:8888');
    console.log("连接中，等待连接 ..<br/>");
    ws.onopen = function () {
        console.log("连接成功");
        let data = {
                "name":document.getElementById("name").value,
                "qqid":document.getElementById("qqid").value
            };
        var sendStr = JSON.stringify(data);
        console.log("发送数据（转换后）:" + sendStr);
        ws.send(sendStr);
    };
    ws.onmessage = function (evt) {
        var myobj = JSON.parse(evt.data);
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
