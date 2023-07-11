import request from "../utils/request";

// 用户登录-参数类型
type LoginInfo = {
    phone: string
    code?: string
    password: string
}

// 用户登录-返回数据类型
type LoginResult = {
    success: boolean
    state: number
    message: string
    content: string
}

// 用户请求登录 {phone: '1111', password: '2222'}  
export const login = (loginInfo: LoginInfo) => {
    return request<LoginResult>({
        method: "POST",
        url: "/front/user/login",
        data: `phone=${loginInfo.phone}&password=${loginInfo.password}`
    })
}

/*
    要求请求类型 application/x-www-form-urlencoded
        需要数据拼接为 data: 属性1=值1&属性2=值2
    要求请求类型 application/json
        只需要直接传对象 data: loginInfo
*/
