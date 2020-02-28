<template>
    <div id="login">
        <div class="header"><h4 style="font-weight: bold;">Welcome to</h4> <h3 style="margin-top: -8px; color: rgb(153, 1, 199); font-weight: bold;"> Klason</h3></div> <br>
        <div class="body">
            <div>
                Email <br>
                <input style="margin-top:5px;" type="text" name="username" v-model="input.username"/> <br>
            </div>
            <div style="padding-top: 10px;">
                Password <br>
                <input style="margin-top:5px;" type="password" id="myInput" name="password" v-model="input.password"/> <p/>
                <!-- <input type="checkbox" onclick="myFunction()">Show Password -->
            </div>
            <button class="body-button" v-on:click="login()">Login</button>
            <img class="body-img" src="@/assets/img/login.png" alt="">
        </div>
    </div>
</template>

<script>
function myFunction() {
  var x = document.getElementById("myInput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
    export default {
        name: 'Login',
        data() {
            return {
                input: {
                    username: "",
                    password: ""
                }
            }
        },
        methods: {
            login() {
                if(this.input.username != "" && this.input.password != "") {
                    if(this.input.username == this.$parent.mockAccount.username && this.input.password == this.$parent.mockAccount.password) {
                        this.$emit("authenticated", true);
                        this.$router.replace({ name: "secure" });
                    } else {
                        console.log("The username and / or password is incorrect");
                    }
                } else {
                    console.log("A username and password must be present");
                }
            }
        }
    }
</script>

<style scoped>
    #login {
        width: 100%;
        max-width: 1360px;
        font-family: sans-serif;
    }
    .header {
        width: 100%;
        max-width: 300px;
        margin-top: 160px;
        background-color: #FFFFFF;
        color: rgba(129, 129, 129, 0.747);
    }
    .body
    {
        width: 100%;
        max-width: 1360px;
        color: rgba(129, 129, 129, 0.747);
        font-weight: bold;
    }
        .body-img{
            width: 100%;
            max-width: 1000px;
            height: 645px;
            margin-left: 195px;
            margin-top: -490px;
        }
        .body-button{
            margin-top: 30px;
            width: 100%;
            max-width: 150px;
            height: 100%;
            max-height: 100px;
            border-radius: 12px;
            font-size: 25px;
            padding-bottom: 5px;
            font-weight: bold;
            color: white;
            background-image: linear-gradient(rgb(176, 0, 230), rgb(153, 1, 199));
        }

    input {
        width: 350px;
        outline: 0;
        border-width: 0 0 2px;
        border-color: rgba(117, 117, 117, 0.685)
    }
    input:focus {
        border-color: rgb(117, 117, 117)
    }
    input::placeholder {
        color: red;
    }
    input[type="text"] {
        color: rgb(90, 90, 90);
        font-family: sans-serif;
        font-weight: bold;
    }
    input[type="password"] {
        color: rgb(90, 90, 90);
        font-family: sans-serif;
        font-weight: bold;
    }
</style>