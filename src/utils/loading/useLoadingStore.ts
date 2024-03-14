import { create as createStore } from 'zustand'

interface LoadingState {
  totalAssets: number
  loadedAssets: number
  progress: number
  registerAsset: () => void
  assetLoaded: () => void
}

const useLoadingStore = createStore<LoadingState>((set) => ({
  totalAssets: 0,
  loadedAssets: 0,
  progress: 0,
  registerAsset: () => set((state) => ({ totalAssets: state.totalAssets + 1 })),
  assetLoaded: () =>
    set((state) => {
      const loadedAssets = state.loadedAssets + 1
      const progress = Math.floor((loadedAssets / state.totalAssets) * 100)
      return { loadedAssets, progress }
    }),
}))

export default useLoadingStore
