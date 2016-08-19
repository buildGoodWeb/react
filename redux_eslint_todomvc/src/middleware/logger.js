export default store => next => action => {
  console.log('logger action',action);
  return next(action);
};
