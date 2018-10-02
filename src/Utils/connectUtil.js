

class connect{
    /**
     * $1:地址，$2:参数，$3:成功回调，$4:失败回调，$5:请求方式（默认post），方式$6:超时时间
     */
    jsonConnect = (url,params,successCallBack,failCallBack,type,timeOut)=>{
        const header = getHeader()
        const success = successCallBack?successCallBack:defaultSuccessCall
        const fail = failCallBack?failCallBack:defaultFailCall
        const options = params?params:{}
        const reqType = type?type:'POST'
        const outTime = timeOut?timeOut:3000

        var myInit = { method: reqType,
                headers: header,
                body: JSON.stringify(options),
                mode: 'cors',
                cache: 'default' };
        fetch(url, myInit).then(success(response), fail(error) )
    }

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