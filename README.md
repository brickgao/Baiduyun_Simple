Baiduyun Simple [![Build Status](https://travis-ci.org/brickgao/Baiduyun_Simple.png?branch=master)](https://travis-ci.org/brickgao/Baiduyun_Simple)
===============

A web service written by node.js to decode the share link from baidu yun.

Build
-----

Get Baiduyun Simple

*	Download the lastest release or clone the repo: ``

Get Node.js

*	Get Node.js from the [http://nodejs.org](http://nodejs.org)

Get modules

*	use command `npm install` to get all the dependencies.

Then you can use command `node app.js` and enjoy it ~!


Get Started
-----------

There is two simple way to use it. :)

###Make a Get method to get json

You can make a get method to `/req` include uk and shareid in the share link. Just like request though baidu API.

**TIP: the expire time of the link is not vrey long, you should request again when you use.**

Request Header:

	{
   	  "shareid": // the shareid in the share link.
  	  "uk": // the uk in the share link.
	}

For Example,

If there is a link:

	http://yun.baidu.com/share/linkshareid=198923&uk=4281611514

There is a json you get:

	{
  	  "shareid": "198923",
  	  "uk": "4281611514",
	  "error": false,
  	  "url": "http://d.pcs.baidu.com/file/47c00304b872a8ec6b07bda4867f005c?fid=4281611514-250528-2444335697&time=1380002913&sign=FDTAR-DCb740ccc5511e5e8fedcff06b081203-qQKjWvLyzmmKneKyFxhaCvOU4nM%3D&rt=sh&expires=8h&r=976394124&sh=1"
	}

###Use web app

There is a form in web app.

You can enter the url in the from and pos, and then you will get the link that is decoded.

License
-------

[MIT](http://opensource.org/licenses/MIT)
