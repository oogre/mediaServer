/*----------------------------------------*\
  LaMontagneLiquide - tools.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2023-09-03 22:09:06
  @Last Modified time: 2023-09-03 22:09:47
\*----------------------------------------*/

module.exports.isFloat = (n) => n === +n && n !== (n|0);
module.exports.isInteger = (n) => n === +n && n === (n|0);
module.exports.isNumber = (n) => module.exports.isFloat(n) || module.exports.isInteger(n);
module.exports.constrain = (min, max, value) => Math.min( Math.max(max, min), Math.max(Math.min(max, min), value));
module.exports.lerp = (a, b, amount) => a + (b - a) * module.exports.constrain(0, 1, amount);
module.exports.wait = async (time) => module.exports.isNumber(time) ? new Promise(s => setTimeout(()=>s(), time)) : null ;
