import { ChangeEvent, HTMLInputTypeAttribute, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  background: var(--color-gray);
  display: flex;
  flex-direction: column;
  height: 60px;
  justify-content: space-between;
  min-width: 400px;
  padding: 5px 10px;
  width: 100%;
`;

const Label = styled.label`
  font-size: 0.9375rem;
  font-weight: 600;
  transition: 100ms;
`;

const Input = styled.input`
  background: transparent;
  font-size: 0.9375rem;
  font-weight: 600;

  &::placeholder {
    color: var(--font-secondary);
  }

  &:-webkit-autofill {
    box-shadow: 0 0 0 1000px var(--color-gray) inset;
    transition: background-color 5000s ease-in-out 0s;
  }
`;

type Props = {
  autoComplete?: string;
  id: string;
  label: string;
  name: string;
  placeholder?: string;
  type: HTMLInputTypeAttribute;
};

const labelStyleSecondary = {
  color: "var(--font-secondary)",
  fontSize: "0.75rem",
};

export default function FormInput({
  autoComplete,
  id,
  label,
  name,
  placeholder,
  type,
}: Props) {
  const [value, setValue] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <Container>
      <Label
        htmlFor={id}
        style={value.length > 0 ? labelStyleSecondary : undefined}
      >
        {label}
      </Label>
      <Input
        autoComplete={autoComplete}
        onChange={handleChange}
        id={id}
        name={name}
        placeholder={placeholder}
        type={type}
        value={value}
      />
    </Container>
  );
}
