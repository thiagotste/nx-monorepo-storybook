import type { Meta, StoryObj } from '@storybook/angular';
import { InputComponent } from '@thiago-alfabit/input'

const meta: Meta<InputComponent> = {
  component: InputComponent
};
export default meta;
type Story = StoryObj<InputComponent>;

export const Primary: Story = {
  args: {
    multiline: false,
    label: '',
    id: '',
    disabled: false
  },
};

export const PrimaryDisabled: Story = {
  args: {
    ...Primary.args,
    disabled: true
  },
};

export const PrimaryWithLabel: Story = {
  args: {
    multiline: false,
    label: 'Lable',
    id: '1',
    disabled: false,
  },
};

export const PrimaryWithLabelDisabled: Story = {
  args: {
    ...PrimaryWithLabel.args,
    id: '2',
    disabled: true,
  },
};

export const Multiline: Story = {
  args: {
    ...Primary.args,
    multiline: true,
  },
};

export const MultilineDisabled: Story = {
  args: {
    ...Multiline.args,
    disabled: true,
  },
};

export const MultilineWithLabel: Story = {
  args: {
    ...Multiline.args,
    label: 'Label',
    id: '3'
  },
};

export const MultilineWithLabelDisabled: Story = {
  args: {
    ...MultilineWithLabel.args,
    id: '4',
    disabled: true
  },
};
