// Define the  types for the LoginForm props
export interface LoginFormProps {
  email: string;
  setEmail: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

// Define the  types for the RegisterForm props
export interface RegisterFormProps {
  firstName: string;
  setFirstName: (value: string) => void;
  lastName: string;
  setLastName: (value: string) => void;
  email: string;
  setEmail: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
  confirmPassword: string;
  setConfirmPassword: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

// export interface RegisterContainerProps {
//   onRegister: (
//     props: RegisterFormProps
//   ) => void;
// }

// Define the  types for the Slide
export interface Slide {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

// export type SlideList = Slide[];

// export interface SliderProps {
//   slides: SlideList;
// }
