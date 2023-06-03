import { FormEventHandler, useState } from 'react';
import ContactInput from './Input';
import styled from 'styled-components';
import { MainButton } from '@/components/shared/sharedComponents';
import axios from 'axios';

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

    const formData = new FormData();

    formData.append('form-name', 'contato');
    formData.append('Nome Completo', form.nome);
    formData.append('Endereço de Email', form.email);
    formData.append('Escreva sua Mensagem', form.mensagem);

    axios({
      method: 'post',
      url: '/',
      data: formData,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    })
      .then(() => alert('Thank you for your submission'))
      .catch((error) => alert(error))
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Form onSubmit={handleSubmit} name='contato' data-netlify='true'>
      <input type='hidden' name='form-name' value='contato' />
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
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const CustomMainButton = styled(MainButton)`
  align-self: flex-start;
  font-size: 2rem;
  margin-top: 24px;
`;

export default FormComponent;
