function PasswordRevealer(el) {
  this.el = el;
  $(this.el).wrap('<div class="passwordRevealer"></div>');
  this.container = $(this.el).parent();
  this.createButton();
};

PasswordRevealer.prototype.createButton = function() {
  this.button = $('<button type="button">表示する</button>');
  this.container.append(this.button);
  this.button.on('click', $.proxy(this, 'onButtonClick'));
};

PasswordRevealer.prototype.onButtonClick = function() {
  if(this.el.type === 'password') {
    this.el.type = 'text';
    this.button.text('隠す');
  } else {
    this.el.type = 'password';
    this.button.text('表示する');
  }
};