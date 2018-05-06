var videos = [
'dKp4P1oPqAY',
'G_Xsl5ZSwqQ',
'bFPGoI_6qJo',
'5TaeLqQaPyM',
'AgV8782kQ3I',
'2ENQEuUOmuA',
'Jk9rh7LBEc8',
'9dC9TComymQ',];

var index=Math.floor(Math.random() * videos.length);
var html='<iframe style="padding: 16px 0;height:250px;" src="https://www.youtube.com/embed/' + videos[index] + '" allowfullscreen></iframe>';
document.write(html);

