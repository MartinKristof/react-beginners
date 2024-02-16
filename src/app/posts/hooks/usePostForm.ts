import { FormEvent, useRef } from 'react';
import { TOnSubmit } from '../types/types';

export const usePostForm = (onSubmit: TOnSubmit) => {
  const inputNameRef = useRef<HTMLInputElement>(null);
  const textareaTextRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const name = inputNameRef.current?.value || '';
    const text = textareaTextRef.current?.value || '';

    onSubmit(name, text);

    if (inputNameRef.current) {
      inputNameRef.current.value = '';
    }

    if (textareaTextRef.current) {
      textareaTextRef.current.value = '';
    }
  };

  return { inputNameRef, textareaTextRef, handleSubmit };
};
