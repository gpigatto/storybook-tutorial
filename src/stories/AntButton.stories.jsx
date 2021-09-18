import React from 'react';

import { AntButton } from '../components/AntButton';

export default {
  title: 'Buttons/AntButton',
  component: AntButton,
  argTypes: {
    label: {
      type: { name: 'string', required: true },
    },
    type: {
      control: { type: 'select', options: ["primary", "default", "link"]}
    }
  },
};

const Template = (args) => <AntButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Ant Button'
};