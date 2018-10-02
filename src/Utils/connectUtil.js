

class connect{
    /**
     * $1:地址，$2:参数，$3:成功回调，$4:失败回调，$5:请求方式（默认post），方式$6:超时时间
     * 报文封装,请求参数
     */
    jsonConnect = (url,params,successCallBack,failCallBack,type,timeOut)=>{
        const header = getHeader()
        const success = successCallBack?successCallBack:this.defaultSuccessCall
        const fail = failCallBack?failCallBack:this.defaultFailCall
        const options = params?params:{}
        const reqType = type?type:'POST'
        const outTime = timeOut?timeOut:3000

        var myInit = { method: reqType,
                headers: header,
                body: {REQ_HEADER:{},REQ_BODY:options},
                mode: 'cors',
                cache: 'default' };
        fetch(url, myInit)
            .then(//增加网络正常返回，但业务逻辑错误的判断
                function(response){
                    if(response.RSP_HEADER === '1'){
                        success(response.RSP_BODY)
                    }
                    else{
                        fail(response.RSP_BODY)
                    }
                }
            )
            .then(
                fail(error)
            )
    }

    /**
     * 下载方式：后台用fileOutputStream放到返回里面,前台用blob对象接受。然后创建ObjectUrl，模拟a标签点击事件进行下载
     */
    download = (url,params,successCallBack,failCallBack,type,rspFileType)=>{

    }
    /**
     * 设置跨域请求头
     */
    getHeader = ()=>{
        let myHeaders = new Headers();
        //Todo 设置跨域请求头
        myHeaders.append('Content-Type', 'text/xml');
        myHeaders.get('Content-Type');
        return header;
    }

    /**
     * 默认成功回调
     */
    defaultSuccessCall = (res)=>{
        console.log(res)
    }

    /**
     * 默认失败回调
     */
    defaultFailCall = (err)=>{
        console.log(err)
    }
}

export default new connect