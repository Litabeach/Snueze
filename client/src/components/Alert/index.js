[
    'success',
    'danger',
  ].map((variant, idx) => (
    <Alert key={idx} variant={variant}>
      This is a {variant} alert—check it out!
    </Alert>
  ));