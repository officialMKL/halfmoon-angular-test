import {moduleMetadata} from '@storybook/angular';
import {Story} from '@storybook/angular/types-6-0';
import {ButtonDirective} from './button.directive';
import {CommonModule} from '@angular/common';
import {text} from '@storybook/addon-knobs';

export default {
  title: 'Stories/Basics/Button',
  decorators: [
    moduleMetadata({
      declarations: [ButtonDirective],
      imports: [CommonModule]
    })
  ]
};

const appearance = {
  options: ['', 'primary', 'secondary', 'danger', 'success', 'link', undefined],
  control: {
    type: 'select'
  }
};

const size = {
  options: ['sm', 'lg', undefined],
  control: {
    type: 'select'
  }
};

const shape = {
  options: ['square', 'rounded', undefined],
  control: {
    type: 'select'
  }
};

const disabled = {
  control: {
    type: 'boolean'
  }
};

const TEMPLATE: Story = (args) => ({
  props: {
    ...args,
    buttonText: text('Button-Text', 'Showcase')
  },
  template: `<button hmButton [appearance]="appearance" [shape]="shape" [size]="size" [disabled]="disabled">{{buttonText}}</button>`
});


export const BASE = TEMPLATE.bind({});
BASE.parameters = {controls: {exclude: ['size', 'shape', 'disabled']}};
BASE.args = {
  appearance: 'primary'
};
BASE.argTypes = {
  appearance
};

export const SHAPE = TEMPLATE.bind({});
SHAPE.parameters = {controls: {exclude: ['size', 'disabled']}};
SHAPE.args = {
  ...BASE.args,
  shape: 'square'
};
SHAPE.argTypes = {
  appearance,
  shape,
};

export const SIZING = TEMPLATE.bind({});
SIZING.parameters = {controls: {exclude: ['shape', 'disabled']}};
SIZING.args = {
  ...BASE.args,
  size: 'sm'
};
SIZING.argTypes = {
  appearance,
  size,
};

export const DISABLED = TEMPLATE.bind({});
DISABLED.parameters = {controls: {exclude: ['shape', 'size']}};
DISABLED.args = {
  ...BASE.args,
  disabled: true
};
DISABLED.argTypes = {
  appearance,
  disabled,
};
