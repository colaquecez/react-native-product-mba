export interface SignInDTO {
  email: string;
  password: string;
}

export interface SignInResponse {
  token: string;
  userId: number | string;
  name: string;
  phone: string;
  message?: string;
}

export interface SignUpDTO {
  name: string;
  phone: string;
  email: string;
  password: string;
}

export interface SignUpResponse {
  message: string;
  userId: number;
}
