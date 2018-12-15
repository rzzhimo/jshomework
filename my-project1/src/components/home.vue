<template>
    <div class="container">
        <h1>{{msg}}</h1>
        <div class="row">
        <hr>
        <div class="col-md-4 ">活动名</div><input v-model="actname" type="text" class="col-md-8"/>
        </div>
        <div class="row">
        <hr>
        <div class="col-md-4 ">活动发起人</div><input v-model="name" type="text" class="col-md-8"/>
        </div>
        <div class="row">
        <hr>
        <div class="col-md-4">活动地点</div><input v-model="actplace" type="text" class="col-md-8"/>
        </div>
        <div class="row">
        <div class="col-md-4">活动描述</div><input v-model="descri" type="text" class="col-md-8"/>
        </div>
       
        <div class="col-md-4">
        <button @click="create" class="btn btn-primary">发起活动</button>
        <router-link :to="{ path: '/HelloWorld' }"></router-link> 

        
        <!-- 通过路由会跳转到活动界面 -->
        </div>
    </div>

</template>
<script>
    export default{
        name: 'home',
        data(){
            return{
               
                msg: '我是发起活动组件',
                actname:'',
                name:'',
                actplace:'',
                descri:''
            }
        },
        methods:{
            create() {
                if(this.name!=''){
                    this.$router.push({ path: `/` });
                }
                else{
                    alert("发起人不能为空")
                }
            },

        }
    }
</script>

<style scoped>
h1{
    color: gray;
    border-bottom: 1px solid gray;
}
input{
    
width: 150;
height: 30px;

}
</style>