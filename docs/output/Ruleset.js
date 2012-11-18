Ext.data.JsonP.Ruleset({"tagname":"class","name":"Ruleset","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-Ruleset","members":{"cfg":[],"property":[],"method":[{"name":"applyRules","tagname":"method","owner":"Ruleset","meta":{},"id":"method-applyRules"},{"name":"checkTargets","tagname":"method","owner":"Ruleset","meta":{},"id":"method-checkTargets"},{"name":"createRule","tagname":"method","owner":"Ruleset","meta":{},"id":"method-createRule"},{"name":"install","tagname":"method","owner":"Ruleset","meta":{},"id":"method-install"},{"name":"walk","tagname":"method","owner":"Ruleset","meta":{},"id":"method-walk"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":315,"files":[{"filename":"deps.js","href":"deps.html#Ruleset"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/deps.html#Ruleset' target='_blank'>deps.js</a></div></pre><div class='doc-contents'><p>A class which manages interdependenice rules.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-applyRules' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ruleset'>Ruleset</span><br/><a href='source/deps.html#Ruleset-method-applyRules' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ruleset-method-applyRules' class='name expandable'>applyRules</a>( <span class='pre'>context, cfg</span> )</div><div class='description'><div class='short'>Apply these rules on an element. ...</div><div class='long'><p>Apply these rules on an element.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>context</span> : jQuery<div class='sub-desc'><p>Selection we are dealing with</p>\n</div></li><li><span class='pre'>cfg</span> : Object<div class='sub-desc'><p><a href=\"#!/api/Configuration\" rel=\"Configuration\" class=\"docClass\">Configuration</a> object or undefined.</p>\n</div></li></ul></div></div></div><div id='method-checkTargets' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ruleset'>Ruleset</span><br/><a href='source/deps.html#Ruleset-method-checkTargets' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ruleset-method-checkTargets' class='name expandable'>checkTargets</a>( <span class='pre'>cfg</span> )</div><div class='description'><div class='short'>Check that all controllers and controls referred in ruleset exist. ...</div><div class='long'><p>Check that all controllers and controls referred in ruleset exist.</p>\n\n<p>Throws an Error if any of them are missing.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cfg</span> : <a href=\"#!/api/Configuration\" rel=\"Configuration\" class=\"docClass\">Configuration</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-createRule' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ruleset'>Ruleset</span><br/><a href='source/deps.html#Ruleset-method-createRule' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ruleset-method-createRule' class='name expandable'>createRule</a>( <span class='pre'>controller, condition, value</span> ) : <a href=\"#!/api/Rule\" rel=\"Rule\" class=\"docClass\">Rule</a></div><div class='description'><div class='short'>Add a new rule into this ruletset. ...</div><div class='long'><p>Add a new rule into this ruletset.</p>\n\n<p>See  <a href=\"#!/api/Rule\" rel=\"Rule\" class=\"docClass\">Rule</a> about the contstruction parameters.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>controller</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>condition</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>value</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Rule\" rel=\"Rule\" class=\"docClass\">Rule</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-install' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ruleset'>Ruleset</span><br/><a href='source/deps.html#Ruleset-method-install' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ruleset-method-install' class='name expandable'>install</a>( <span class='pre'>cfg</span> )</div><div class='description'><div class='short'>Make this ruleset effective on the whole page. ...</div><div class='long'><p>Make this ruleset effective on the whole page.</p>\n\n<p>Set event handler on <strong>window.document</strong> to catch all input events\nand apply those events to defined rules.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cfg</span> : <a href=\"#!/api/Configuration\" rel=\"Configuration\" class=\"docClass\">Configuration</a><div class='sub-desc'><p><a href=\"#!/api/Configuration\" rel=\"Configuration\" class=\"docClass\">Configuration</a> object or undefined</p>\n</div></li></ul></div></div></div><div id='method-walk' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ruleset'>Ruleset</span><br/><a href='source/deps.html#Ruleset-method-walk' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ruleset-method-walk' class='name expandable'>walk</a>( <span class='pre'>callback</span> ) : Array</div><div class='description'><div class='short'>Walk all rules and sub-rules in this ruleset ...</div><div class='long'><p>Walk all rules and sub-rules in this ruleset</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>callback</span> : Function<div class='sub-desc'><p>(rule)</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Array</span><div class='sub-desc'><p>Rules as depth-first searched</p>\n</div></li></ul></div></div></div></div></div></div></div>"});