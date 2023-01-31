// math.service.js
module.exports = {
  name: 'math',
  actions: {
    add(ctx) {
      return Number(ctx.params.a) + Number(ctx.params.b);
    },
    sub(ctx) {
      return Number(ctx.params.a) - Number(ctx.params.b);
    },
    multiply(ctx) {
      return Number(ctx.params.a * ctx.params.b);
    },
  }
}
