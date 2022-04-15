import React, { useState } from 'react';
import * as yup from 'yup';

import { Input, Button, Text, Link } from 'src/components';
import { useSignUpMutation } from 'src/redux/Auth/Auth.api';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParams } from 'src/shared/routes/Auth.route';

import * as S from './Register.styles';

type NavigationProps = NativeStackScreenProps<AuthStackParams, 'Register'>;

const Register = ({ navigation }: NavigationProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [triggerSignUp, { isError, isLoading }] = useSignUpMutation();

  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
    name: yup.string().required(),
    phone: yup.string().required()
  });

  const loginHandle = async () => {
    const isValidated = await schema.isValid({ email, password, name, phone });

    if (isValidated) {
      const data = await triggerSignUp({
        name,
        phone,
        email,
        password
      }).catch(() => {
        return null;
      });

      if (!data.error) {
        navigation.goBack();
      }

      return setError(data?.message);
    }
    setError('Preencha todos os campos');
  };

  return (
    <S.Container>
      <S.Wrapper>
        {!!error && (
          <Text
            textAlign="center"
            marginLeft={10}
            marginBottom={10}
            fontSize={14}
            color="red"
          >
            {error}
          </Text>
        )}
        <Input
          onChangeText={setEmail}
          autoCapitalize="none"
          placeholder="Informe seu melhor e-mail"
          value={email}
          label="Email"
        />
        <S.Space />
        <Input
          onChangeText={setName}
          value={name}
          placeholder="Informe seu nome"
          label="Nome"
        />
        <S.Space />

        <Input
          onChangeText={setPassword}
          value={password}
          secureTextEntry
          placeholder="Informe uma senha"
          label="Senha"
        />
        <S.Space />
        <Input
          placeholder="Informe seu telefone"
          onChangeText={setPhone}
          value={phone}
          label="Telefone"
        />
        <S.Space />
        <Button isLoading={isLoading} onPress={loginHandle}>
          Cadastrar
        </Button>
        <Link marginTop={16} onPress={() => navigation.goBack()}>
          Já possui uma conta?
        </Link>
      </S.Wrapper>
    </S.Container>
  );
};

export default Register;
