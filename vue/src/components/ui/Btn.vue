<template>
  <button class="btn" @click="() => add() ">
    <slot>
      Текст
    </slot>

    <span> {{ count }},{{ r3 }}</span>
    </button>
</template>

<script>
export default {
    name: 'Btn',
    props:{
      pr:{
        type:Number,
        default:0
      }

    },
    emits: ['more'],
    data () {
      return {
        count: 0
      }
    },
    computed:
    {
      r2()
      {
        return this.count*this.count
      },
      r3()
      {
        return this.r2*this.count*this.pr
      }

    },
    methods: {
      add (){
        this.count+=1

        if (this.count > 10 )
        {
        this.$emit('more', this.count)
        }
      }
    }
}
</script>

<style scoped lang="scss">
.btn
{
  border: none;
  background: beige;
  color:black;
  font-size: 10px;
  padding: 10px 20px;
}

</style>