<template>
  Index

  <div>
    <RouterLink :to="{ name: $routes.EXAMPLE }">
     To Example
    </RouterLink>
  </div>

    <div>
    <RouterLink :to="{ name: $routes.PROM }">
     To PROM
    </RouterLink>
  </div>


  <div class = "grid">
    <div class = "grid__item">
     123
    </div>
    <div class = "grid__item">
     123
    </div>
    <Btn :pr="1" @click = "() => myClick()" @more="(v) => more(v)"> Нажать </Btn> 
    <Btn :pr="2">Нажать_2 </Btn>
    <Btn :pr="5" />

    {{ getCount }}
  </div>
  
</template>


<script lang="ts">
import { moduleRunnerTransform } from 'vite';
import Btn from './../ui/Btn.vue'
import { mapGetters, mapActions } from 'vuex';

export default{
  name: 'Indexpage',
  components:{
    Btn
  },
  data ()
  {
    return{
      p:1
    }
  },
  computed: {
    ...mapGetters([
      'getCount'
    ])

  },
  methods:{
    ...mapActions([
      'runIncrement'
    ]),
    myClick(){
      
    },
    more(v)
    {
      this.runIncrement(1)

    }
  }
}
</script>

<style scoped lang="scss">
.grid{
  display:grid;
  grid-template-columns: 1fr 1 fr;
  grid-gap: 20px;

&__item{
  border: 1px solid red;
  color: green;
}

}

</style>
