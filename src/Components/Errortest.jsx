import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const Errortest = () => {
  const [error, setError] = useState(null);
  function handleError(e) {
    if (e.target.value === "error") {
      setError("error");
    }
  }
  if (error === "error") {
    throw new Error();
  }
  return (
    <div className="test-error">
      <Helmet>
        <title>Error page</title>
        <meta name="description" content="Error page"/>
        <link rel="canonical" href="/errortest"/>
      </Helmet>
      <h2>Type in error to test Error boundary</h2>
      <input
        onChange={handleError}
        type="text"
        placeholder="error"
        className="error-input"
      />
    </div>
  );
}

export default Errortest