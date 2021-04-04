import React, { useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FiGithub } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import * as Yup from 'yup';

import Input from 'components/Input';
import Button from 'components/Button';

import { ApplicationState } from 'store';
import { Request } from 'store/modules/gitHub/types';
import { getUserRequest, getUserClear } from 'store/modules/gitHub/actions';

import { Container, Content } from './styles';

export function Dashboard() {
  const dispatch = useDispatch();
  const formRef = useRef<FormHandles>(null);

  const { gitHub } = useSelector((state: ApplicationState) => state);

  const handleSubmit = useCallback(
    (data: Request) => {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        username: Yup.string().required('Nome de Usuário Obrigatório'),
      });

      schema.validate(data, {
        abortEarly: false,
      });

      dispatch(getUserRequest(data));
    },
    [dispatch],
  );

  useEffect(() => {
    dispatch(getUserClear());
  }, [dispatch]);

  return (
    <Container>
      <Content>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Consulta Usuário</h1>

          <Input
            name="username"
            icon={FiGithub}
            placeholder="Nome de Usuário"
          />

          <Button type="submit">Pesquisar</Button>
        </Form>
        {gitHub.data !== null && (
          <>
            <img src={gitHub.data.avatar_url} alt={gitHub.data.name} />
            <h2>{gitHub.data.name}</h2>

            <p>
              Followers:&nbsp;
              <a href={gitHub.data.followers_url}>{gitHub.data.followers}</a>
            </p>
          </>
        )}
      </Content>
    </Container>
  );
}
