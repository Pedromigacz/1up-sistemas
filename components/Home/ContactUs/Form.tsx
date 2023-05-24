import { FormEventHandler, useState } from 'react';
import ContactInput from './Input';
import styled from 'styled-components';
import { MainButton } from '@/components/shared/sharedComponents';

const FormComponent = (): JSX.Element => {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    mensagem: '',
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (loading) {
      return;
    }

    setLoading(true);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <ContactInput
        value={form.nome}
        setValue={(val) => {
          setForm((prev) => ({ ...prev, nome: val }));
        }}
        label={'Nome Completo'}
      />
      <ContactInput
        value={form.email}
        setValue={(val) => {
          setForm((prev) => ({ ...prev, email: val }));
        }}
        label={'Endereço de Email'}
      />
      <ContactInput
        value={form.mensagem}
        setValue={(val) => {
          setForm((prev) => ({ ...prev, mensagem: val }));
        }}
        type='text-area'
        label={'Escreva sua Mensagem'}
      />
      <CustomMainButton type='submit'>
        {loading ? 'Carregando...' : 'Enviar'}
      </CustomMainButton>
    </Form>
  );
};

const Form = styled.form`
  margin-top: 38px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const CustomMainButton = styled(MainButton)`
  align-self: flex-start;
  font-size: 2rem;
  margin-top: 32px;
`;

export default FormComponent;
