import styled from 'styled-components';
import { motion } from 'framer-motion';

import { InputWrapper, Label } from '.';
import { useState } from 'react';

interface TextAreaProps {
  label: string;
  value: string;
  setValue: (value: string) => void;
}

const TextAreaInput = ({
  label,
  value,
  setValue,
}: TextAreaProps): JSX.Element => {
  const [focused, setFocused] = useState(false);

  const textAreaTriggered = value.length > 0 || focused;

  return (
    <InputWrapper>
      <Label
        initial={{
          x: 0,
          y: 10,
          fontSize: '1.6rem',
          color: 'var(--text-2)',
        }}
        animate={{
          y: textAreaTriggered ? 1 : 10,
          fontSize: textAreaTriggered ? '1.6rem' : '2rem',
          color: textAreaTriggered ? 'var(--accent-cyan)' : 'var(--text-2)',
        }}
        htmlFor={label.replace(' ', '')}
      >
        {label}
      </Label>
      <CustomTextArea
        rows={2}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        onFocus={() => {
          setFocused(true);
        }}
        onBlur={() => {
          setFocused(false);
        }}
        id={label.replace(' ', '')}
      />
    </InputWrapper>
  );
};

export const CustomTextArea = styled.textarea`
  width: 100%;

  border: none;
  border-bottom: 1px solid var(--text-2);
  width: 100%;
  padding: 22px 12px 0 2px;
  background-color: transparent;
  border-radius: none;
  color: var(--text-main);
  font-size: 2rem;
  font-family: var(--font-title);
`;

export default TextAreaInput;
