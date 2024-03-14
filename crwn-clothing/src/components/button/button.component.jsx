import './button.styles.scss';

const BUTTON_TYPES_CLASSES = {
  google: 'google-sign-in',
  inverted: 'inverted',
};

// eslint-disable-next-line react/prop-types
function Button({ children, buttonType, ...otherProps }) {
  let className = 'button-container';

  if (buttonType) {
    className = `${className} ${BUTTON_TYPES_CLASSES[buttonType]}`;
  }

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <button type="button" className={className} {...otherProps}>
      {children}
    </button>
  );
}

export default Button;
