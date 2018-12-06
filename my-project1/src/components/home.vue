<template>
    <div>
        <h1>活动</h1>
        <p>{{msg}}</p>
        <input/> 活动名
        <input/>活动发起人
        <input/>活动地点
        <hr> 
        <input/>活动描述
        <button class="btn btn-primary" @click="create">{{clicki}}</button>
        
    </div>

</template>
<script>
    export default{
        name: 'home',
        data(){
            return{
                msg: '我是发起活动组件',
                clicki:'发起活动'
            }
        },
        methods:{
            create(){
                    this.clicki='发起活动成功'
            }

        }
    }
</script>