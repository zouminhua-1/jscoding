function objectFactory() {
  const obj = new Object();
  const Constructor = [].shift.call(arguments);
  obj__proto__ = Constructor.prototype;
  const ret = Constructor.call(obj, arguments);
  return typeof ret === "object" ? ret : obj;
}

Function.prototype.cloneBind = function (context) {
  const self = this;
  return function () {
    return self.apply(context, arguments);
  };
};
