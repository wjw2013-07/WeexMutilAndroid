import itempack from './itempack.vue';
Vue.component('itempack', itempack);

// 测试script标签
<template>
  <div class="container">
    <text class="title">{{"1 script 语法初探"}}</text>
    <text>The time is {{datetime}}</text>
    <text>{{title}}</text>
    <text>{{getTitle()}}</text>

    <text class="title">{{"2 研究In-template 表达式"}}</text>
    <text>{{firstName + lastName}}</text>

    <text class="title">{{"3 研究Computed Properties和if以及click"}}</text>
    <div style="flex-direction: row; align-items: center">
        <text>{{fullName}}</text>
        <text class="box" @click="changeName">{{change}}</text> 
    </div>

    <text class="title">{{"4 研究渲染逻辑控制机器-append属性"}}</text>
    <div>
       <div id="world" append="tree">
            <text>Hello World!</text>
       </div>
        <div id="weex" append="node"> 
            <text>Hello Weex!</text>
       </div>
    </div>

    <text class="title">{{"5 组件封装"}}</text>

    <text class="title">{{"6 研究Android扩展"}}</text>
    <text @click="moduleClick">Module 扩展</text>
    <weex.RichText tel="12305">Component 扩展</weex.RichText>
    <text @click="callWeex">native回调weex方法.</text>

     <text class="title">{{"7 加载本地图片"}}</text>
     <image class="img" src="https://img.alicdn.com/tps/TB1z.55OFXXXXcLXXXXXXXXXXXX-560-560.jpg"></image>
     <div style="height: 150; background-color: #ffffff;"></div>

  </div>
</template> 
 
<style>
    .container{
        margin-left: 15px;
        margin-right: 15px
    }
    .title{ 
        font-size: 40px; 
        font-weight: bold;
        margin-top: 15px
    }

    .box {
        border-width: 2px;
        border-style: solid;
        border-color: #BBB;
        width: 130px;
        height: 50px;
        background-color: #EEE;
        margin-left: 15px;
        text-align: center;
  }

  .img{
    width: 200px;
    height: 200px;
  }
</style> 
<script>
  const modal = weex.requireModule('modal');
  export default {
    data: {
      title: 'Alibaba',
      datetime: null,
      firstName: 'John ',
      lastName: 'Smith',
      isChange: true,
      change: 'change',
      imgUrl: 'http://t.cn/RGE3uo9',

      list: [
          {gender: 'male', nickname: 'Li Lei', avatar: 'http://t.cn/RGE3AJt'},
          {gender: 'femal', nickname: 'Han Meimei', avatar: 'http://t.cn/RGE3uo9'}
      ]
    },
    computed: {
      fullName: {
          get: function(){
              return this.firstName + ' ' + this.lastName 
          },

          set: function(v){
              var s = v.split(' ')
              this.firstName = s[0]
              this.lastName = s[1]
          },
      }  
    },
    methods: {
      getTitle: function () {
        return 'Weex Team'
      },

      changeName: function() {
        this.isChange = !this.isChange;
        if(this.isChange){     
            this.change='change'
            this.fullName = 'John Smith'       
        }else{
            this.change = 'recover'
            this.fullName = 'Terry King'    
        }
      },

      back2Top: function() {
         var top = this.$('top')
         this.$scrollTo(top)   // both work
         //this.$scrollTo('top') // both work
      },

      moduleClick: function(){
         weex.requireModule('ShowMsgModule').printLog('原生封装module扩展');
      },

      callWeex: function(){
         weex.requireModule('ShowMsgModule').callTheCallback(function(event){
            weex.requireModule('ShowMsgModule').printLog('msg from the callback:' + event);
         })
      }
    },
    created: function() {
      this.datetime = new Date().toLocaleString()
    }
  }
</script>