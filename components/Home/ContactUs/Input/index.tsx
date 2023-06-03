import styled from 'styled-components';
import { motion } from 'framer-motion';
import Input from './Input';
import TextAreaInput from './TextArea';

interface ContactInputProps {
  label: string;
  type?: 'text' | 'text-area' | 'select';
  value: string;
  setValue: (value: string) => void;
  name: string;
  options?: {
    value: string;
    name: string;
  }[];
}

const ContactInput = ({
  label,
  type = 'text',
  value,
  setValue,
  name,
}: ContactInputProps): JSX.Element => {
  switch (type) {
    case 'text-area': {
      return (
        <TextAreaInput
          label={label}
          value={value}
          setValue={setValue}
          name={name}
        />
      );
    }

    default: {
      return (
        <Input
          label={label}
          type={type}
          value={value}
          setValue={setValue}
          name={name}
        />
      );
    }
  }
};

// styled components

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* margin-bottom: 24px; */
`;

export const Label = styled(motion.label)`
  display: inline-block;
  font-size: 2rem;
  height: 0px;
  z-index: 2;
  /* margin-left: 12px; */
  pointer-events: none;

  font-family: var(--font-body);
  color: var(--text-2);
`;

export default ContactInput;
