function newAjax(url,fnSucc,fnFaild){
    //1.创建ajax对象
    //XMLHttpRequest();
    //ActiveXObject();
    if(window.XMLHttpRequest){
        //非IE6
        var oAjax = new XMLHttpRequest();
    }else{
        //IE6
        var oAjax = new ActiveXObject("Microsoft.XMLHTTP");
    }

    //2.链接服务器
    //open(方法,文件名,异步传输);
    oAjax.open('GET',url,true);

    //3.发送请求
    //send();
    oAjax.send();

    //4.接收返回
    oAjax.onreadystatechange = function(){
        /*
        * 处理状态
        * 0 初始化
        * 1 正在发生请求
        * 2 已接收响应
        * 3 解析响应
        * 4 完成
        */
        if(oAjax.readyState == 4){
            if(oAjax.status == 200){
                fnSucc(oAjax.responseText);
            }else{
                if(fnFaild){
                    fnFaild(oAjax.status );
                }
            }
        }
    }
} 