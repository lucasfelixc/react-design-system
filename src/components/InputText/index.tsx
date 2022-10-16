import { InputHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';

export interface InputTextRootProps {
  children: ReactNode;
}

function InputTextRoot(props: InputTextRootProps) {
  return (
    <div
      className="flex items-center py-4 px-3 gap-3 h-12 rounded bg-gray-800 focus-within:ring-2 ring-cyan-300"
    >
      {props.children}
    </div>
  )
}

export interface InputTextIconProps {
  children: ReactNode;
}

function InputTextIcon(props: InputTextIconProps) {
  return (
    <Slot className="w-6 h-6 text-gray-400">
      {props.children}
    </Slot>
  )
}

export interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {}

function InputTextContent(props: InputTextProps) {
  return (
      <input
        className="bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none"
        {...props}
      />
  )
}

InputTextRoot.displayName = 'InputText.Root';
InputTextIcon.displayName = 'InputText.Icon';
InputTextContent.displayName = 'InputText.Content';

export const InputText = {
  Root: InputTextRoot,
  Content: InputTextContent,
  Icon: InputTextIcon,
};
