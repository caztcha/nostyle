function SelectAll(container, checkboxes) {
	this.button = $('<button type="button" class="selectAll-button">すべてを選択</button>');
	this.button.on('click', $.proxy(this, 'onButtonClick'))
	container.append(this.button);
	this.checkboxes = checkboxes;
	this.checked = false;
}

SelectAll.prototype.onButtonClick = function(e) {
	if(this.checked) {
		this.uncheckAll();
		this.button.text('すべてを選択');
	} else {
		this.checkAll();
		this.button.text('すべての選択を解除');
	}
};

SelectAll.prototype.checkAll = function() {
	this.checkboxes.each($.proxy(function(index, el) {
		el.checked = true;
	}, this));
	this.checked = true;
};

SelectAll.prototype.uncheckAll	 = function() {
	this.checkboxes.each($.proxy(function(index, el) {
		el.checked = false;
	}, this));
	this.checked = false;
};
