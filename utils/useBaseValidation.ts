export const useBaseValidation = () => {
  const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const USERNAME_REGEX = /^[a-zA-Z0-9_а-яА-ЯёЁ]+$/;
  const PASSWORD_REGEX = /^.{8,}$/;

  const email = (field: string) => EMAIL_REGEX.test(field);

  const name = (field: string) => USERNAME_REGEX.test(field);

  const password = (field: string) => PASSWORD_REGEX.test(field);

  return { email, name, password };
};
