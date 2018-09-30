

/**
 * $1:地址，$2:参数，$3:成功回调，$4:失败回调，$5:请求方式（默认post），方式$6:超时时间
 */
connect = (url,params,successCallBack,failCallBack,type,timeOut)=>{
    const header = getHeader()
    const success = successCallBack?successCallBack:defaultSuccessCall
    const fail = failCallBack?failCallBack:defaultFailCall
    const param = params?params:{}
    const reqType = type?type:'POST'
    const outTime = timeOut?timeOut:3000

    var a = fetch()
}

/**
 * 设置跨域请求头
 */
getHeader = ()=>{
    let header = {};

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

export default new connect