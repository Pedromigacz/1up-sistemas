import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { Label } from '.';

interface InputProps {
  label: string;
  type: string;
  value: string;
  setValue: (value: string) => void;
}

const Input = ({ label, type, value, setValue }: InputProps): JSX.Element => {
  const [focused, setFocused] = useState(false);

  const inputTriggered = value.length > 0 || focused;

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
          y: inputTriggered ? 1 : 10,
          fontSize: inputTriggered ? '1.6rem' : '2rem',
          color: inputTriggered ? 'var(--accent-cyan)' : 'var(--text-2)',
        }}
      >
        {label}
      </Label>
      <CustomInput
        type={type}
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
      />
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 24px;
`;

export const CustomInput = styled.input`
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

export default Input;
