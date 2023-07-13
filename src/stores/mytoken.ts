import { defineStore } from "pinia"

// https://pinia.vuejs.org/zh/core-concepts/
// 在 Setup Store 中：
// ref() 就是 state 属性
// computed() 就是 getters
// function() 就是 actions

// type 必须是什么 Interface 有什么包含什么
interface Token {
    access_token: string;
    token_type: string
    refresh_token: string
    expires_in: number
    user_id: string
}

export const useTokenStore = defineStore('mytoken', () => {
    // ref 相当于 state
    const tokenJson = ref("")
    // computed 相当于 getters
    const token = computed<Token>(() => {
        try {
            // return JSON.parse(tokenJson.value || window.localStorage.getItem("TokenInfo") || "{}")
            return JSON.parse((tokenJson.value || window.localStorage.getItem("TokenInfo")) ?? "{}")
        } catch (err) {
            ElMessage.error("json字符串格式不对,转化对象时失败..")
            window.localStorage.setItem("TokenInfo", "")
            throw err
        }
    })
    // function 相当于 actions
    function saveToken(data: string) {
        tokenJson.value = data
        window.localStorage.setItem("TokenInfo", data)
    }

    // 向外暴露
    return { token, saveToken }
})
