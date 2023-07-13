<script setup lang="ts">
import { ElMessage, FormInstance, FormRules } from 'element-plus';
import { reactive, ref } from 'vue';
import { login } from "../../api/users"

// 表单响应式数据
const form = reactive({ // 可以使用 ref
    phone: "18201288771",
    password: "111111",
})
// 登录事件处理
const onSubmit = async () => {
    isLoading.value = true
    // 表单校验
    await formRef.value?.validate().catch((err: Error) => {
        ElMessage.error("表单校验失败...")
        isLoading.value = false
        throw err
        // return new Promise(() => { });
    })

    // 正式发送登录请求
    const data = await login(form).then((res) => {
        if (!res.data.success) {
            ElMessage.error('登录信息有误!')
            isLoading.value = false
            throw new Error("登录信息有误!")
        }
        return res.data
    })

    console.log(data)

    isLoading.value = false
}

// 定义表单校验规则
const rules = reactive<FormRules>({
    phone: [
        { required: true, message: "电话号码不能为空", trigger: "blur" },
        { pattern: /^1\d{10}$/, message: "手机号必须是11位数字", trigger: "blur" },
    ],
    password: [
        { required: true, message: "密码不能为空", trigger: "blur" },
        { min: 6, max: 18, message: "密码长度需要6~18位", trigger: "blur" },
    ]
})

// 定义是否登录加载中
const isLoading = ref(false)

const formRef = ref<FormInstance>()
</script>

<template>
    <div class="login">
        <el-form :model="form" :rules="rules" ref="formRef" label-width="120px" label-position="top" size="large">
            <h2>登录</h2>
            <el-form-item label="手机号" prop="phone">
                <el-input v-model="form.phone" />
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="form.password" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit" :loading="isLoading">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<style lang="scss" scoped>
.login {
    background-color: beige;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .el-form {
        width: 300px;
        background-color: #fff;
        padding: 30px;
        border-radius: 10px;

        .el-form-item {
            margin-top: 20px;
        }

        .el-button {
            width: 100%;
            margin-top: 30px;
        }
    }
}
</style>
