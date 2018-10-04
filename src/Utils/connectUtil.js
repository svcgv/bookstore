

    const baseURL = 'http://127.0.0.1:9080'
    /**
     * $1:地址，$2:参数，$3:成功回调，$4:失败回调，$5:请求方式（默认post），方式$6:超时时间
     * 报文封装,请求参数
     */
    function fetchConnect  (url,params,successCallBack,failCallBack,type,timeOut){
        const header = getHeader()
        const success = successCallBack?successCallBack:defaultSuccessCall
        const fail = failCallBack?failCallBack:defaultFailCall
        const options = params?params:{}
        const reqType = type?type:'POST'
        const outTime = timeOut?timeOut:3000
        const fullURL = baseURL+url
        var myInit = { method: reqType,
                headers: header,
                body: {REQ_HEADER:{},REQ_BODY:options},
                mode: 'cors',
                cache: 'default' };
        fetch(fullURL, myInit)
            .then(//增加网络正常返回，但业务逻辑错误的判断
                function(response){
                    console.log(response)
                    response.json().then(json => {
                        console.log(json.result)
                  })
                    if(response.RSP_HEADER === '1'){
                        success(response.RSP_BODY)
                    }
                    else{
                        fail(response.RSP_BODY)
                    }
                }
            )
            .then(
                function(response){
                    console.log(response)
                    
                        fail(response)
                }
            )
        
       
    }

    /**
     * $1:地址，$2:参数，$3:成功回调，$4:失败回调，$5:请求方式（默认post），方式$6:超时时间
     * 报文封装,请求参数
     */
    function xhrConnect  (url,params,successCallBack,failCallBack,type,timeOut){
        const header = getHeader()
        const success = successCallBack?successCallBack:defaultSuccessCall
        const fail = failCallBack?failCallBack:defaultFailCall
        const options = params?params:{}
        const reqType = type?type:'POST'
        const outTime = timeOut?timeOut:3000
        const fullURL = baseURL+url

        
        var xhr = new XMLHttpRequest();
       
        xhr.timeout = timeOut;
        xhr.ontimeout = function (event) {
            alert("请求超时！");
        }
        xhr.onerror = function (event){
            alert("请求失败");
        }
        var formData = new FormData();
        for(let i in params){
            formData.append(i, params[i]);
        }
       
        xhr.open('POST', fullURL);
        xhr.setRequestHeader('Content-Type', 'application/json'); 
        xhr.send(JSON.stringify(params));
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 ) {
                if( xhr.status == 200){
                    success(JSON.parse(xhr.response));
                }
                else {
                    fail(xhr.response);
                }
            }
           
        }
    
        
    }


    /**
     * 下载方式：后台用fileOutputStream放到返回里面,前台用blob对象接受。然后创建ObjectUrl，模拟a标签点击事件进行下载
     */
    function download  (url,params,successCallBack,failCallBack,type,rspFileType){

    }
    /**
     * 设置跨域请求头
     */
    function getHeader  (){
        let myHeaders = new Headers();
        //Todo 设置跨域请求头
        myHeaders.append('Content-Type', 'application/json');
        myHeaders.get('Content-Type');
        return myHeaders;
    }

    /**
     * 默认成功回调
     */
    function defaultSuccessCall  (res){
        console.log(res)
    }

    /**
     * 默认失败回调
     */
    function defaultFailCall  (err){
        console.log('fail connect')
        console.log(err)
    }

export default  xhrConnect