import './form-input.styles.scss';

function FormInput(input) {
  const { label, ...otherProps } = input;
  const labelClass = `${otherProps.value.length ? 'shrink' : ''} form-input-label`;

  return (
    <div className="group">
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <input className="form-input" {...otherProps} />
      {label && (
        <label htmlFor={otherProps.id} className={labelClass}>
          {label}
        </label>
      )}
    </div>
  );
}

export default FormInput;
