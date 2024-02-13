import { FC, FormEvent, useRef } from 'react';
import { FormGroup } from '../../components/FormGroup';
import { TErrors } from '../../types/types';
import { Input } from '../../components/Input';

const NAME_ID = 'name';
const TEXT_ID = 'text';

export const PostForm: FC<{ onSubmit: (nameValue: string, textValue: string) => void; errors: TErrors }> = ({
  onSubmit,
  errors,
}) => {
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

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <FormGroup label="Your name" name={NAME_ID} error={errors.name.message}>
          <Input id={NAME_ID} name={NAME_ID} ref={inputNameRef} placeholder="Your name" />
        </FormGroup>
        <FormGroup label="Your post" name={TEXT_ID} error={errors.text.message}>
          <textarea
            id={TEXT_ID}
            name={TEXT_ID}
            ref={textareaTextRef}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Some post"
            rows={4}
          />
        </FormGroup>
      </div>
      <div className="mt-2">
        <button type="submit" className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
          Submit
        </button>
      </div>
    </form>
  );
};
