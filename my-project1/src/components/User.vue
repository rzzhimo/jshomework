<template>
    <div>
        <h1>User</h1>
        <p>name:{{ name }}, {{ nationality }}</p>
        <p>$route.params.name={{ $route.params.name }}</p>
        <p>$route.params.nationality={{ $route.params.nationality }}</p>
    </div>
</template>

<script>
    export default {
        name: "User",
        props: ['name', 'nationality']
    };
</script>