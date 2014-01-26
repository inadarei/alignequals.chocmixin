/*!
 * Align Equal Signs. A mixin for Chocolat
 * Copyright(c) 2014 Irakli Nadareishvili
 * MIT Licensed
 *
 * @see: http://chocolatapp.com/blog/?chocolat-node
 * @see: http://mixins.chocolatapp.com/docs/
 */

Hooks.addMenuItem('Go/Align Equals', 'control-=', function() {
	Recipe.run(function(recipe) {
		
		var sel = (!recipe.selection.length)? new Range(0, recipe.length) : recipe.selection
			, output = ''
			, text = recipe.textInRange(sel);
			
		recipe.replaceTextInRange(sel, alignEquals(text));
	});
});


function alignEquals (text) {
	
	// remove repetitive spaces
	text = text.replace(/(.+?)\s+?=\s+(.*)/gm, "$1 = $2");
	
	var lines = text.split("\n");
	var positions = [];
	var maxPos = 0;
	for (var i=0; i<lines.length; i++) {
	  positions[i] = lines[i].indexOf("=");
	  if (positions[i] > maxPos) {
	    maxPos = positions[i];
	  }
	}

	for (var i=0; i<lines.length; i++) {
	  if (positions[i] > 0) {
	    var diff = maxPos - positions[i];
	    var newline = lines[i].substr(0, positions[i] - 1);
	    var spaces = "";
	    for (var j=0; j<=diff; j++) {
	      spaces += " ";
	    }
	    newline += spaces;
	    newline += lines[i].substr(positions[i]);
	    lines[i] = newline;
	  }
	}

	return lines.join("\n");
}
