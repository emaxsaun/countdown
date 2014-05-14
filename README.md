Countdown
==========

About this Plugin:
==========

This is a small JW Player Plugin to use if you want a video on your site to display a countdown timer while the video is playing.

### [Demo](http://www.pluginsbyethan.com/github/countdown.html)

Implementing this Plugin:
==========

There is one file that you need to use, countdown.js. Upload this file to your server, it can go anywhere on the server. Now, inside of your JW Player embed code, make sure that your plugins call points to the full path to the .js file on your server (http://www.yoursite.com/countdown.js).

Example:
==========
<pre>
&lt;script type=&quot;text/javascript&quot; src=&quot;jwplayer.js&quot;&gt;&lt;/script&gt;
&lt;div id=&quot;player&quot;&gt;&lt;/div&gt;
&lt;script type=&quot;text/javascript&quot;&gt;
jwplayer('player').setup({
&nbsp;&nbsp;'width': '575',
&nbsp;&nbsp;'height': '400',
&nbsp;&nbsp;'file': 'video.mp4'
&nbsp;&nbsp;'image': &quot;video.jpg&quot;,
&nbsp;&nbsp;plugins: {
	&nbsp;&nbsp;&nbsp;&nbsp;&quot;countdown.js&quot;: {
	&nbsp;&nbsp;}
&nbsp;&nbsp;}
});
&lt;/script&gt;
</pre>

The source code is available for this plugin. There is just a .js file for JavaScript. Publishing the JavaScipt can be simply done with any text editor. Enjoy~! :) 