<template>
    <div class="body">
        <router-link to="/"><img src="@/assets/img/back.png"></router-link>
        <div class="body-body">
            <div class="body-header">Klason</div>
            <div class="nickname">
                <router-link to=""><img class="body-user" src="@/assets/img/userc.png">
                <img class="body-photo" src="@/assets/img/Photo.png"></router-link>
                <div class="header-name">Sharen Alicia Ayugi</div>
                <div class="header-class">XI - RPL 2</div>
            </div>
            <div class="body-name">
                <div class="name-header">Nama</div>
                <div class="name-body"><input type="text" placeholder="Sharen Alicia Ayugi"></div>
                <div class="name-header">Kelas</div>
                <div class="name-body"><input type="text" placeholder="XI Rekayasa Perangkat Lunak 2"></div>
                <div class="name-header">Nis</div>
                <div class="name-body"><input type="text" placeholder="66231"></div>
                <div class="name-header">Nomor Hp</div>
                <div class="name-body"><input type="text" placeholder="08570282928"></div>
                <div class="name-header">Email</div>
                <div class="name-body"><input type="text" placeholder="Sharenalicia0602@gmail.com"></div>
                <div class="name-header">Pengurus</div>
                <div class="name-body"><input type="text" placeholder="Osis"></div>
                <button class="body-button">Update</button>
            </div>
        </div>
        <img class="body-img" src="@/assets/img/profile.png">
    </div>
</template>

<style scoped lang="scss">
    .body{
        width: 100%;
        max-width: 80%;
        margin-left: 4%;
        font-family: sans-serif;
    }
    .body-body{
        background-color: white;
        width: 100%;
        max-width: 50%;
        height: auto;
        margin: 30px;
    }
    .body-user{
        width: 100%;
        max-width: 20%;
    }
    .body-photo{
        width: 100%;
        max-width: 10%;
        margin-left: -40px;
        margin-top: 40px;
    }
    .body-header{
        font-size: 17px;
        font-weight: bold;
        color: #A12F8A;
        margin-left: 10px;
    }
    .header-name{
        font-weight: bold;
        font-size: 15px;
        margin-top: -60px;
        margin-left: 90px;
        color: #535E6D;
    }
    .header-class{
        font-size: 14px;
        margin-left: 92px;
        color: #535E6D;
    }
    .name-header{
        font-weight: bold;
        color: rgba(0, 0, 0, 0.219);
        margin-top: 12px;
        margin-left: 10px;
    }
    .name-body{
        margin-left: 10px;
    }
    .body-button{
        margin-top: 30px;
        width: 100%;
        max-width: 90px;
        height: 100%;
        max-height: 100px;
        margin-left: 270px;
        border-radius: 12px;
        border: 0px;
        font-size: 18px;
        padding-bottom: 2px;
        font-weight: bold;
        color: white;
        box-shadow: 0px 1px 4px 0px grey;
        background-image: linear-gradient(rgb(176, 0, 230), rgb(153, 1, 199));
    }
    .body-img{
        position: fixed;
        width: 100%;
        max-width: 52%;
        height: 700px;
        margin-left: 450px;
        margin-top: -660px;
    }

    a {
      color: rgba(255, 255, 255, 0.568);
    }
    a:hover {
      color: rgb(255, 255, 255);
      text-decoration: none;
    }
        input {
        width: 350px;
        outline: 0;
        border-width: 0 0 1.5px;
        border-color: #707070;
    }
    input:focus {
        border-color: rgb(117, 117, 117)
    }
    input::placeholder {
        color: rgba(0, 0, 0, 0.623);
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