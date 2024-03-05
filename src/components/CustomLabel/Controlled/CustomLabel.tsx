import React from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { FormDataSchema } from '../../../common/schema';
import styles from '../CustomLabel.module.scss';

type LabelProps = {
  name: keyof FormDataSchema;
  labelText: string;
  children?: React.ReactNode;
  type?: string;
  register: UseFormRegister<FormDataSchema>;
  errors: FieldErrors<FormDataSchema>;
};

export default function CustomLabel(props: LabelProps) {
  const { name, labelText, errors, children, type, register } = props;

  return (
    <label htmlFor={name}>
      {labelText}
      {children ? (
        children
      ) : (
        <input
          {...register(name)}
          aria-invalid={errors[name] ? 'true' : 'false'}
          type={type}
          accept={type === 'file' ? '.jpeg, .png' : undefined}
        />
      )}
      {errors[name] && (
        <span className={styles.validation}>
          <span className={styles.message}>{errors[name]?.message}</span>
        </span>
      )}
    </label>
  );
}
