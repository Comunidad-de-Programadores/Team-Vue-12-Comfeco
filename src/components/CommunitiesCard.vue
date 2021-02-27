<template>
    <div class="card-container">
        <div class="card__header-container">
            <div class="card__title">
                Comunidades
            </div>
            <div>
                <router-link class="card-link" :to="{ name: `Comunidades` }">Ver más</router-link>
            </div>
        </div>
        <div class="card__comunity-list">
            <community-item
            v-for="item in comunidades"
            :key="item.id"
            :title="item.name"
            :avatarlink="item.avatarlink"
            :joinlink="item.joinlink"
            ></community-item>
        </div>
    </div>
</template>
<script>
import CommunityItem from './ComunityItem'
export default {
    name:'CommunitiesCard',
    components:{
        CommunityItem
    },
    data:()=>({
        comunidades:[
            {
                name:'Comunidad de Programadores',
                avatarlink:'https://cdn.discordapp.com/icons/775907616986890261/fab5c5c76da7db070db4195366a2b6e5.png?size=512',
                joinlink:'https://discord.com/invite/5Bb5yvzNPr'
            },
            {
                name:'Comunidad de Programadores',
                avatarlink:'https://cdn.discordapp.com/icons/775907616986890261/fab5c5c76da7db070db4195366a2b6e5.png?size=512',
                joinlink:'https://discord.com/invite/5Bb5yvzNPr'
            },
            {
                name:'Comunidad de Programadores',
                avatarlink:'https://cdn.discordapp.com/icons/775907616986890261/fab5c5c76da7db070db4195366a2b6e5.png?size=512',
                joinlink:'https://discord.com/invite/5Bb5yvzNPr'
            },
        ]
    })
}
</script>
<style>
.card-container{
    background-color: #DBC0DB;
    padding: 1em;
}
.card__header-container{
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
}
.card__title{
    color:#3C043D;
    font-weight: bold;
    font-size: 1.5em;
}
.card-link{
    color: #4992CD;
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
    font-size: 1.2em;
}
</style>