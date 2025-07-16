import styles from "./InputGroup.module.css";

function InputGroupLabel({
  htmlFor,
  label,
  icon,
  required = false,
  ...props
}: React.ComponentProps<"label"> & {
  htmlFor: string;
  label: string;
  icon?: React.ReactNode;
  required?: boolean;
}) {
  return (
    <label {...props} htmlFor={htmlFor} className={styles.inputGroup__label}>
      {icon}
      {label} {required ? "*" : ""}
    </label>
  );
}

export { InputGroupLabel };
