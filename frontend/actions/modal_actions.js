export const SHOW_MODAL = "SHOW_MODAL";
export const HIDE_MODAL = "HIDE_MODAL";

export const showModal = (contents) => ({
  type: SHOW_MODAL,
  contents
})

export const hideModal = () => ({
  type: HIDE_MODAL
})
