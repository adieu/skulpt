Sk.terminal = {}

Sk.terminal.context = {}

Sk.terminal.run = function(stmt)
{
	var co = Sk.compile_stmt(stmt, '__main__.py', "exec");
	var finalcode = co.code;
	var namestr = "new Sk.builtin.str('__main__')";
    finalcode += "\n" + co.funcname + "(" + namestr + ", Sk.terminal.context);";
    var modlocs = goog.global.eval(finalcode);
	return modlocs;
}

goog.exportSymbol("Sk.terminal", Sk.terminal);
goog.exportSymbol("Sk.terminal.run", Sk.terminal.run);