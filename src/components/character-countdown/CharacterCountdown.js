function CharacterCountdown(field, options) {
	this.field = $(field);
	this.status = $('<div class="indicator" role="status" aria-live="polite" />');
	this.setOptions(options);
	this.updateStatus(this.options.maxLength);
	this.field.parent().append(this.status);
	this.field.on("input", $.proxy(this, 'onChange'));
};

CharacterCountdown.prototype.setOptions = function(options) {
	var defaults = {
		maxLength: 100,
		message: '残り%count%文字'
	};
	this.options = $.extend(defaults, options);
};

CharacterCountdown.prototype.onChange = function(e) {
	this.updateStatus(this.options.maxLength - this.field.val().length);
};

CharacterCountdown.prototype.updateStatus = function(remaining) {
	var message = this.options.message.replace(/%count%/, remaining);
	this.status.html(message);
};
