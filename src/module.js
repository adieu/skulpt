/**
 * @constructor
 */
Sk.builtin.module = function()
{
};

Sk.builtin.module.prototype.ob$type = Sk.builtin.type.makeTypeObj('module', new Sk.builtin.module());
Sk.builtin.module.prototype.tp$getattr = Sk.builtin.object.prototype.GenericGetAttr;
Sk.builtin.module.prototype.tp$setattr = Sk.builtin.object.prototype.GenericSetAttr;
