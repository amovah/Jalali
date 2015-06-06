#Jalali

A Jalali converter to AD and vise versa.

##Usage

``Jalali().convert(type, date);``

###type

type: `String`

Date's type.

Possible values: `AD`, `jalali`

###date

type: `String`

Only important point is following format that you specified it before.

####format

type: `String`

The format can be anything but must includes y, m and d. You can split between them with anycharecter and anything that even I can't know.

Character 	| Definition	|
:-----------|------------:|
y						|Year					|
m						|Month				|
d						|Day					|

Default: `y/m/d`

You can change and view format, like below:

	let x = Jalali();
	x.format; // default format: y/m/d
	x.format = 'y*m*d'; // format chanages to y*m*d
	x.format = 'y m d'; // another example for format

The converted date is formatted by this string.

Example: `y/d/m` yields 2015/20/10.

##Example of usage

	var j = Jalali();
	j.convert('jalali', '1300/6/6'); // 1921/8/27

	j.format = 'y*d*m'; // You just remember that split the date with *
	j.convert('AD', '1999*9*9'); // 1378*18*6

	j.format = 'd m y';
	j.convert('AD', '2 2 2000'); // 13 11 1378

##License

[MIT](http://mit-license.org/)