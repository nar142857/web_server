module.exports = async ( ctx ) => {
  const title = 'home';

  ctx.body = {
    title,
  };

  // await ctx.render('index', {
  //   title
  // })
};
