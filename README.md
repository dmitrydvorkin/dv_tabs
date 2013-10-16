Dv Tabs
===========

Draws tabs using small mootools dcript and CSS only.
No images, just styled UL, LI and DIVs.
Simple markup.

[Demo](http://dv.tibbo.com/dv_tabs/)

![Screenshot](http://dv.tibbo.com/dv_tabs/dv_tabs.png)

How to use
----------
In head:

	<script type="text/javascript" language="javascript" src="dv_tabs/dv_tabs.js"></script>
	<script type="text/javascript">
	window.addEvent('domready',function() {
	 tab_setup();
	});
	</script>

In body:

        <div class="new_tabs_head">
        <ul class="new_tabs">
        <li>Tabcap1</li>
        <li>Tab caption2</li>
        </ul>
        </div>
        <div class="new_tabs_frame">
        <div class="tabdata">
        Tab1 contents
        </div>
        <div class="tabdata">
        Tab2 contents
        </div>
        </div>
