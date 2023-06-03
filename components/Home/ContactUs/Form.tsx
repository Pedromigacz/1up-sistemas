import { FormEventHandler, useState } from 'react';
import ContactInput from './Input';
import styled from 'styled-components';
import { MainButton, Paragraph } from '@/components/shared/sharedComponents';
import axios from 'axios';

const FormComponent = (): JSX.Element => {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    mensagem: '',
  });

  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState({
    success: '',
    error: '',
  });

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    setFeedback({
      error: ``,
      success: '',
    });

    if (loading) {
      return;
    }

    if (form.email.length >= 1) {
      setFeedback({
        error: `Email é obrigatório para envio da mensagem`,
        success: '',
      });
      return;
    }

    if (form.mensagem.length >= 1) {
      setFeedback({
        error: `Erro - mensagem vazia`,
        success: '',
      });
      return;
    }

    setLoading(true);

    const formData = new FormData();

    formData.append('form-name', 'contato');
    formData.append('Nome', form.nome);
    formData.append('Email', form.email);
    formData.append('Mensagem', form.mensagem);

    axios({
      method: 'post',
      url: '/',
      data: formData,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    })
      .then(() =>
        setFeedback({
          error: '',
          success:
            'Mensagem enviada com sucesso! Obrigado por entrar em contato.',
        })
      )
      .catch((error) => {
        setFeedback({
          error: `Algo de errado ocorreu, por favor entre em contato por email`,
          success: '',
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <Form onSubmit={handleSubmit} name='contato' data-netlify='true'>
        <input type='hidden' name='form-name' value='contato' />
        <ContactInput
          value={form.nome}
          setValue={(val) => {
            setForm((prev) => ({ ...prev, nome: val }));
          }}
          label={'Nome Completo'}
          name='Nome'
        />
        <ContactInput
          value={form.email}
          setValue={(val) => {
            setForm((prev) => ({ ...prev, email: val }));
          }}
          label={'Endereço de Email'}
          name='Email'
        />
        <ContactInput
          value={form.mensagem}
          setValue={(val) => {
            setForm((prev) => ({ ...prev, mensagem: val }));
          }}
          type='text-area'
          label={'Escreva sua Mensagem'}
          name='Mensagem'
        />
        <FeebackMessage $success={feedback.success.length >= 1}>
          {feedback.success || feedback.error}
        </FeebackMessage>
        <CustomMainButton type='submit'>
          {loading ? 'Carregando...' : 'Enviar'}
        </CustomMainButton>
      </Form>
    </>
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

interface FeebackMessageProps {
  $success: boolean;
}

const FeebackMessage = styled(Paragraph)<FeebackMessageProps>`
  color: ${(props) => (props.$success ? 'var(--accent-cyan)' : 'red')};
`;

export default FormComponent;
