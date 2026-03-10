const MUTATIONS = {
  SET_COORDS: 'SET_COORDS',
  SET_POINTS: 'SET_POINTS',
}
export default {
  namespaced: true,
  state () {
    return {
      coords: {
        x:0,
        y:0,
        v:true
      },
      points:0
    }
  },
  getters: {
    getCoords: (state) => state.coords,
    getPoints: (state) => state.points
  },
  mutations: {
    [MUTATIONS.SET_COORDS]: (state, payload) => {
      if (state.coords.v)
      {
        state.coords.x += payload
      } else {
        state.coords.x -= payload
      }
      if (state.coords.x > 300 || state.coords.x < 0) {
        state.coords.v = !state.coords.v
      }
    },
    [MUTATIONS.SET_POINTS]: (state, payload) => {
      state.points = payload
    },
  },
  actions: {
    runBall: ({state, commit, dispatch},payload) => new Promise((resolve) => {
      setTimeout(() =>{
        commit(MUTATIONS.SET_COORDS,10)
        resolve()
      }, 100)
      
      

      }),
      addPoints: ({commit, state}, payload) => {
        commit( MUTATIONS.SET_POINTS, state.points + payload)

      }
     
    }
    }
  

