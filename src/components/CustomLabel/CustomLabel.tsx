import React from 'react';

type LabelProps = {
  name: string;
  labelText: string;
  validMessage: string;
  isValid: boolean;
  isSubmit: boolean;
  children?: React.ReactNode;
  type?: string;
};

export default function CustomLabel(props: LabelProps) {
  const { name, labelText, validMessage, isValid, isSubmit, children, type } =
    props;
  return (
    <label htmlFor={name} key={name}>
      {labelText}
      {children ? (
        children
      ) : (
        <input id={name} name={name} required type={type} />
      )}
      {isSubmit && !isValid && validMessage && <span>{validMessage}</span>}
    </label>
  );
}
