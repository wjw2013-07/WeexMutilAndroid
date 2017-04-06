<template>
  <container style="flex-direction: column;">
    <text  class="box"  @click="toggle"></text>
    <image class="img" src=imgUrl></image> 
    <text>{{this.imgUrl}}</text>
  </container>
</template>

<style>
    .box {
        border-width: 2px;
        border-style: solid;
        border-color: #BBB;
        width: 100px;
        height: 50px;
        background-color: #EEE;
        margin-left: 15px
   }
    .img {
        width: 100px;
        height: 100px;     
    }
</style>

 <script>
       const modal = weex.requireModule('modal')  
       module.exports = {
       data: { 
           shown: true,
           imgUrl: "https://img.alicdn.com/tps/TB1z.55OFXXXXcLXXXXXXXXXXXX-560-560.jpg",
       },
       methods: {  
           toggle: function () {
                 this.shown = !this.shown  
                 if(this.shown){
                     this.imgUrl="https://img.alicdn.com/tps/TB1z.55OFXXXXcLXXXXXXXXXXXX-560-560.jpg"
                 }else{
                     this.imgUrl = ""
                 }
                 modal.toast({
                    message: this.shown,
                    duration: 0.8
                })   
            }  
        }  
    } 
</script>

