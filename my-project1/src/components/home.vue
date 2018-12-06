<template>
    <div>
        <h1></h1>
        <p>{{msg}}</p>
        <input v-model="actname" type="text"/> 活动名
        <input v-model="name" type="text"/>活动发起人
        <input v-model="actplace" type="text"/>活动地点
        <hr> 
        <input v-model="descri" type="text"/>活动描述 
        <button @click="create" class="btn btn-primary" v-if="!ok">发起活动
        </button>
        <router-link to="/about" class="btn btn-primary" v-if="ok" >可以发起活动</router-link>
        <!-- 通过路由会跳转到活动界面 -->
    </div>

</template>
<script>
    export default{
        name: 'home',
        data(){
            return{
                ok:false,
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
                    this.ok=true  
                }
                else{
                    alert("发起人不能为空")
                }
            },

        }
    }
</script>