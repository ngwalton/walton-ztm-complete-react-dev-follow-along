/* eslint-disable react/prop-types */
import { Group, FormInputLabel, Input } from './form-input.styles';

function FormInput({ label, ...otherProps }) {
  return (
    <Group>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Input {...otherProps} />
      <FormInputLabel shrink={otherProps.value.length} htmlFor={otherProps.id}>
        {label}
      </FormInputLabel>
    </Group>
  );
}

export default FormInput;
