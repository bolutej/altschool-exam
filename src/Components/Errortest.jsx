import React, { useState } from "react";

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