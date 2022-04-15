import React, { useState, useEffect } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as yup from 'yup';

import { Input, Button, Text, Link } from 'src/components';
import { useSignInMutation } from 'src/redux/Auth/Auth.api';
import { AuthStackParams } from 'src/shared/routes/Auth.route';

import * as S from './Login.styles';

type NavigationProps = NativeStackScreenProps<AuthStackParams, 'Login'>;

const Login = ({ navigation }: NavigationProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [triggerSignIn, { isLoading, data }] = useSignInMutation();
  const [error, setError] = useState('');

  useEffect(() => {
    if (error) {
      setError('');
    }
  }, [email, password]);

  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required()
  });

  const loginHandle = async () => {
    const isValidated = await schema.isValid({ email, password });

    if (isValidated) {
      const { data } = await triggerSignIn({
        email,
        password
      });

      if (!data?.token) {
        return setError(data?.message);
      }
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
          value={email}
          onChangeText={setEmail}
          label="Login"
          autoCapitalize="none"
          placeholder="Digite seu email"
        />
        <S.Space />
        <Input
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          label="Senha"
          placeholder="Digite sua senha"
        />
        <S.Space />
        <Button isLoading={isLoading} onPress={loginHandle}>
          Login
        </Button>
        <Link marginTop={16} onPress={() => navigation.navigate('Register')}>
          Criar uma conta
        </Link>
      </S.Wrapper>
    </S.Container>
  );
};

export default Login;
