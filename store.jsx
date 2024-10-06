import { create } from 'zustand'
const useStore = create((set) => ({
  colors: [
    {
      key: 'name',
      value: '#fff'
    }
  ],
  setColor: (key, newColor) => set( state => {
    const colorIndex = state.colors.findIndex(c => c.key === key);
    if(colorIndex != -1){
      state.colors[colorIndex].value = newColor
      return{...state}
    }
  })
}));

export default useStore
/* 
[
  {
    key: aaa
    value: aaaa
  }
]

set: (key, value){search key, set prevvalue to value}
*/