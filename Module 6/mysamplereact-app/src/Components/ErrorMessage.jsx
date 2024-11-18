function ErrorMessage(props) {
  return (
    <>
      <div>
        <p>An error ocurred:</p>
        <pre>{props.error.message}</pre>
      </div>
      <button onClick={() => props.resetErrorBoundary()}>Try again?</button>
    </>
  );
}

export default ErrorMessage;
