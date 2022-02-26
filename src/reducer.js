const reducer = (state, { type, payload }) => {
  if (type === 'SET_LOADING') {
    return { ...state, loading: true }
  }
  if (type === 'SET_STORIES') {
    return {
      ...state,
      loading: false,
      hits: payload.hits,
      nbPages: payload.nbPages,
    }
  }
  if (type === 'SET_QUERY') {
    return { ...state, query: payload }
  }
  if (type === 'SET_LOADING_OFF') {
    return { ...state, loading: false }
  }
  if (type === 'REMOVE_ITEM') {
    return {
      ...state,
      hits: state.hits.filter((item) => item.objectID !== payload),
    }
  }
  if (type === 'PREV_PAGE') {
    let newPage = state.page - 1
    if (state.page < 1) {
      newPage = state.nbPages - 1
    }
    return { ...state, page: newPage }
  }

  if (type === 'NEXT_PAGE') {
    let newPage = state.page + 1
    if (state.page > state.nbPages - 2) {
      newPage = 0
    }
    return { ...state, page: newPage }
  }
  return state
}
export default reducer

// const initialState = {
//   news: {},
//   loading: true,
//   query: '',
//   page: 0,
//   nbPages: 0,
// }
