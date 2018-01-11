export const types = {
  ROOT_CHANGED: 'ROOT_CHANGED'
}

export function appInitialized() {
  return async function(dispatch, getState) {

    dispatch(changeAppRoot('init'));
  };
}

export function changeAppRoot(root) {
  return {
    type: types.ROOT_CHANGED,
    root
  };
}