import ItemList from '../components/ItemList.vue'
import store from '../store'
// This is a factory function for dynamically creating root-level list views,
// since they share most of the logic except for the type of items to display.
// They are essentially higher order components wrapping ItemList.vue.
export function createListView (type) {
  return {
    name: `${type}-stories-view`,
    // this will be called during SSR to pre-fetch data into the store!
    preFetch (store) {
      console.log('首屏渲染，获取状态');
      store.dispatch('FETCH_LIST_DATA', { type })
      return ;
    },
    render (h) {
      console.log('render');
      return h(ItemList, { props: { type }})
    }
  }
}
