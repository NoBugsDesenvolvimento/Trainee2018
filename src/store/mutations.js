export default {
  addItem(state, data) {
    if (data.item.index === '' || data.item.title === '') return;
    state.items.push(data.item);
    data.callback();
  },
  removeItem(state, item) {
    // Descobre o índice do item no vetor
    const index = this.state.items.indexOf(item);
    // Remove o item
    if (index !== -1) state.items.splice(index, 1);
    else return {};
  }
};
