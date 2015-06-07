function Jalali() {
	this.format = 'y/m/d';

	if(!(this instanceof Jalali))
		return new Jalali();
}

Jalali.prototype.convert = function(type, date) {
	date = date.split(this.format[1]).map((item) => parseInt(item) );
	var format = this.format.split(this.format[1]), r = {}, month = 1,
			months = {
				AD : [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
				jalali : [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29]
			};
	date = (() => {
		var d = {};
		date.forEach((item, index) => d[format[index]] = item );
		return d;
	})();
	if(type == 'AD') {
		var difference = -226899, to = 'jalali';
		r.y = date.m < 2 || (date.m == 2 && date.d < 22) ? date.y - 622 : date.y - 621;
	}
	else if(type == 'jalali') {
		var difference = 226899, to = 'AD';
		r.y = date.m < 9 || (date.m == 9 && date.d < 12) ? date.y + 621 : date.y + 622;
	}
	if(Math.floor(date.y / 4) != Math.floor((date.y - 1) / 4)) months.jalali[11] = 30;
	if(Math.floor(r.y / 4) != Math.floor((r.y - 1) / 4)) months.AD[1] = 29;
	r.d = (() => {
		var additionalDays = ((date.y-1)*365 + months[type].slice(0, date.m - 1).reduce((a, b) => a + b, 0) + date.d + Math.floor((date.y - 1)/4) + difference - Math.floor((r.y - 1) / 4)) % 365;
		while(additionalDays > months[to][month] - 1) {
			additionalDays -= months[to][month - 1];
			month += 1;
		}
		r.m = month;
		return additionalDays;
	})();
	return [r[format[0]], r[format[1]], r[format[2]]].join(this.format[1]);
};
typeof module !== 'undefined' ? module.exports = Jalali : this.Jalali = Jalali;