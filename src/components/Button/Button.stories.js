import { Button } from ".";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    property1: {
      options: ["button-with-icon", "tertiary-button", "without-icon", "secondary-button"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "button-with-icon",
    className: {},
    text: "New Version",
    icRoundKeyboard: "/img/ic-round-keyboard-arrow-right-2.svg",
  },
};
