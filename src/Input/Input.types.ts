export interface InputProps {
  disabled?: boolean;
  label: string;
  required?: boolean;
  placeholder?: string;
  name: string;
  width?: "1/3" | "1/2" | "2/3" | "full";
  type: "text" | "number" | "email" | "password";
  classes?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
 }

