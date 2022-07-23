<template>
  <div>
    {{ form }}
    <el-from :model="form" lable-width="100px" :rules="rules" ref="formRef">
      <el-from-item label="用户名" prop="name">
        <el-input v-model="form.name" />
      </el-from-item>
      <el-from-item label="密码" prop="password">
        <el-input v-model="form.password" />
      </el-from-item>
      <el-form-item>
        <el-button type="primary" @click="login">登录</el-button>
      </el-form-item>
    </el-from>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: "",
        password: "",
      },
    };
  },
  //输入校验
  rules: {
    name: [{ required: true, message: "用户名不能为空", trigger: "blur" }],
    password: [{ required: true, message: "密码不能为空", trigger: "blur" }],
  },
  methods: {},
};
</script>
<style scoped>
.login {
  position: absolute;
  width: 500px;
  height: 500px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
