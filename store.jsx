import { create } from 'zustand'

const useStore = create((set) => ({
  color: '#000',
  setColor: (newColor) => set((state) => ({color: newColor}))
}))

export default useStore