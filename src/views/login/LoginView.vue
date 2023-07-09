<script setup lang="ts">
import { ElMessage } from 'element-plus';
import { reactive } from 'vue';
// 表单响应式数据
const form = reactive({ // 可以使用 ref
    phone: "18201288771",
    password: "123",
})
// 登录事件处理
const onSubmit = () => {
    ElMessage.success("提交表单数据")
}
</script>

<template>
    <div class="login">
        <el-form :model="form" label-width="120px" label-position="top" size="large">
            <h2>登录</h2>
            <el-form-item label="手机号">
                <el-input v-model="form.phone" />
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="form.password" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">登录</el-button>
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
