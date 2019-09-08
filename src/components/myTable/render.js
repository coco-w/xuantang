export default {
  functional: true,
  props: {
    row: Object,
    column: Object,
    index: Number,
    render: Function,
    item: Object
  },
  render: (h, ctx) => {
    const params = {
      row: ctx.props.row,
      column: ctx.props.column,
      index: ctx.props.index,
      item: ctx.props.item,
    };
    
    return ctx.props.render(h, params);
  }
};