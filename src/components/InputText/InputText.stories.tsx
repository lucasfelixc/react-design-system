import { Meta, StoryObj } from '@storybook/react';
import { Envelope } from 'phosphor-react';
import { InputText, InputTextRootProps } from './index';

export default {
  title: 'Components/InputText',
  component: InputText.Root,
  args: {
    children: [
        <InputText.Icon>
          <Envelope />
        </InputText.Icon>,
        <InputText.Content placeholder="Type your e-mail address"/>
    ],
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  }
} as Meta<InputTextRootProps>

export const Default: StoryObj<InputTextRootProps> = {};

export const WithoutIcon: StoryObj<InputTextRootProps> = {
  args: {
    children: (<InputText.Content placeholder="Type your e-mail address"/>),
  }
};
