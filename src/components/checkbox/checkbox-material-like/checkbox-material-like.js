import FormComponent from '../../form-component';

export class Checkbox extends FormComponent {
  constructor(context, options) {
    super(
      context,
      context.querySelector('.checkbox__input'),
      options
    );
    super.init();
    this.minAnimationDuration = 500;
    this.animationPassed = false;
    this.initEvents();
    console.debug('Checkbox initialized');
  }

  initEvents() {
    this.context.addEventListener('mousedown', () => {
      if (this.field.checked) {
        return;
      }
      this.animationPassed = false;
      setTimeout(() => {
        this.animationPassed = true;
      }, this.minAnimationDuration);
      this.context.classList.add('is-pressed');
    });
    this.context.addEventListener('mouseup', () => {
      if (this.field.checked) {
        return;
      }
      if (!this.animationPassed) {
        const itvl = setInterval(() => {
          if (this.animationPassed) {
            clearInterval(itvl);
            this.context.classList.remove('is-pressed');
          }
        }, 50);
      } else {
        this.context.classList.remove('is-pressed');
      }
    });
  }
}

export const selector = '[class^="checkbox--"]';
