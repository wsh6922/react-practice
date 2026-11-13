import { useRouteError } from "react-router";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div>
      <h2>Oops! Something went wrong.</h2>
      <pre>{error.statusText || error.message}</pre>
    </div>
  );
};

export default ErrorPage;
