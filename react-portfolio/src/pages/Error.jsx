import React from 'react';
import { useRouteError, Link } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="container text-center mt-5">
      <h1 className="display-4 text-danger">Oops!</h1>
      <p className="lead">Sorry, an unexpected error has occurred.</p>
      {error && (
        <p className="text-muted">
          <i>{error.statusText || error.message}</i>
        </p>
      )}
      <Link to="/" className="btn btn-primary mt-3">
        Go Back Home
      </Link>
    </div>
  );
}