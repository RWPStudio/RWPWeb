//实现滚动效果
const container = document.querySelector('.container')
const lis = document.querySelectorAll('.controls li')
var viewHeight = null //声明页面高度
var c=document.querySelectorAll('icon','aboutus','ourproject')
var index = 0; //当前索引
var flag = true; //节流开关
document.addEventListener('wheel', function (e) {
    e = e || window.event
    // 获取整屏的高度
    viewHeight = document.body.clientHeight;
    if (flag) {  //节流阀
        flag = false

        if (e.deltaY < 0) {
            index--
            if (index < 0) {
                index = 0
            }
        } else {
            index++;
            if (index > lis.length - 1) {
                index = lis.length - 1
            }
        }

        function forHistoryAPI(index) {
            index++;
            try {
                let dymanic_content = document.getElementById(`sec${index}`);
                if (dymanic_content.innerHTML.length === 0) {
                    loadContent(index, dymanic_content)
                } else {
                    console.log("略过重复加载项: ", dymanic_content);
                }
            } catch (e) {
                console.error(e);
            }

            function loadContent(index, dymanic_content) {
                if (!(index === 1)) {
                    console.log("Fetching ", index);
                    fetch(`part_page/section${index}/sec${index}.html`)
                        .then(response => response.text())
                        .then(data => {
                            dymanic_content.innerHTML = data;
                        }).catch(err => {
                        console.error("Cannot Fetch: ", err);
                    });
                }
            }
        }

        forHistoryAPI(index);

        container.style.top = -index * viewHeight + "px";
        // 改变颜色
        changeColor(index)
        setTimeout(function () {
            flag = true
        }, 500)
    }

})

//绑定点击事件
for (let i = 0; i < lis.length; i++) {
    lis[i].onclick = function () {
        viewHeight = document.body.clientHeight
        index = i
        changeColor(index)
        container.style.top = -index * viewHeight + 'px'
    }
}
//改变小li颜色
function changeColor(index) {
    for (var j = 0; j < lis.length; j++) {
        lis[j].className = ''
        c.id=''
    }
    lis[index].className = 'wholeactive'
}

function change(text){
    console.log(text);
    var c = document.querySelectorAll(".aboutus div");
    for(var i=0;i<c.length;i++){
        c[i].className=''
    }
    var b = document.querySelectorAll('.ourproject div');
    for(var i=0;i<b.length;i++){
        b[i].className=''
    }
    document.getElementById(text).className='action'

}

function getURLParams() {
    const url = new URL(window.location.href);
    return new URLSearchParams(url.search);
}
