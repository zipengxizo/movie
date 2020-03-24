<template>
  <div class="wrapper" ref="wrapper">
      <slot></slot>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll'
export default {
    name:'Scroller',
    props:{
        handleToScroller:{
            type:Function,
            default:function(){}
        },
        handleTouchEnd:{
            type:Function,
            default:function(){}
        }
    },
    mounted(){
        var scroller = new BetterScroll( this.$refs.wrapper,{
            tap:true,
            probeType:1
        });
        

        scroller.on('scroll',(pos)=>{
            this.handleToScroller(pos);
        });
        scroller.on('touchEnd',(pos)=>{
            this.handleTouchEnd(pos);
        });
    },
    methods:{
        
    }

}
</script>

<style scoped>
.wrapper{height: 100%;}
</style>