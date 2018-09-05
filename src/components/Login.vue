<template>
  <div class="note" :style = 'note'>
    <div class="loginFrame">
      <el-form ref='AccountForm' :model = 'account' rules = 'rules' label-position = 'left' label-width = '30px' class='demo ruleForm login-container'>

        <div class = "tabsUser">
    <el-tabs v-model = "activeName" @tab-click = "handleClick" class = "users" style = "height: 30px;font-size: 25px">
        <el-tab-pane label = "admin" name = "admin" class = "tab1"></el-tab-pane>
        <el-tab-pane label = "是唯一的" name = "unique" class = "tab2"></el-tab-pane>
        <el-tab-pane label = "用户账号" name = "usernumber" class = "tab3"></el-tab-pane>
        <el-tab-pane label = "密码000" name = "usernumber" class = "tab3"></el-tab-pane>

    </el-tabs>
    </div>

<div class = "formGroup">
  <el-form-item  label = "账号" prop = "user" >
      <el-input type = "text"  auto-complete = "off" placeholder = "请输入您的账号" class = "form-control" ></el-input></el-form-item>
  <el-form-item label = "密码" prop = "password" class = "form-inline">
      <el-input type = "password" auto-complete = "off" placeholder = "请输入密码" class = "form-control" ></el-input></el-form-item>
  </div>
  <div class = "remFor">
  <el-checkbox v-model = "checked" checked class = "remember">记住密码</el-checkbox>
  <a href ="'http://172.16.253.31/srun_portal_pc_success?ac_id=1&username=201505001390@ctc&ip=172.25.38.70&access_token=97e2c9cb9826021a8b493de7f9251b4c37c6f15f7b3f9ea1e4302847e6f2cf5f&'" class = "forget">忘记密码？</a>
  </div>

    <div class = "formButton">
  <el-form-item style = "width:90%;">
      <button type = "primary" style = "width:100%;height: 35px;cursor:pointer; background: #5bc0de; font-size:14px; font-family:PingFang SC; color:#fff; border-radius:10px;" @click = 'login' >登录</button>
  </el-form-item>
  </div>
      </el-form>
      </div>
      </div>

  </template>

  <script>
  export default {
      name: 'Login',
      data() {
          return {
              logining : false,
              note: {
                  position:"absolute",
                  overflow:'hidden',
                  top:"0px",
                  left:"0px",
                  width: '100%',
                  height: '100%',
                  backgroundImage: "url(" + require("../assets/bg_login.jpg") + ")",
                  backgroundSize: '100% 100%',
                  backgroundRepeat: "no-repeat",


              },
              AccountForm : {
                  username:'admin',
                  password:'000',
              },
              rules: {
                  username :[
                      {required: true, message: '请输入账号',trigger: 'blur'},
                      //{ validator: validaePass }
                  ],
                  password: [
                      {required: true,message: '请输入密码', trigger: 'blur'},
                      //{ validator: validaePass2 }
                  ]
              },
              checked: false

          };

      },
      methods: {
        login () {
          this.$router.replace('/qsList');
        }
      }
  }</script>

  <style>

  .login-container {

      -webkit-border-radius: 5px;
      border-radius: 15px;
      -moz-border-radius: 5px;
      background-clip: padding-box;
      margin: 180px auto;
      width: 360px;
      padding: 35px 35px 15px 35px;
      background: rgba(255,255,255,0.7);
      border: 1px solid #eaeaea;
      box-shadow: 0 0 25px #cac6c6;

  }

  .formGroup label {
    padding: 0;
    margin: 0;
  }

  .form-control{
      width:270px;
      flex: 1;
      -webkit-flex: 1;
      -ms-flex: 1;
  }
  .remember{
      width:250px;
      text-align:left;


  }
  .forget{
      width:500px;
      text-align:right;
      font-size:14px;
      font-family:PingFang SC;

  }
  .remFor{
      margin-bottom: 10px;
      padding-bottom: 10px;
  }

.tabsUser{
    display: inline-block;
    margin-left: 0px;
    margin-right:0px;
    text-align:center;
    font-size:25px;
  }

   </style>
