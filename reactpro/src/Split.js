
import React, { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';

function Split() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000); 
  }, []);

  return (
    <div>
      {loading ? (
        <Spinner animation="border"  >
        </Spinner>
      ) : (
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam magnam molestiae aperiam nemo aut expedita quaerat accusamus nam mollitia magni tenetur eos dicta tempora blanditiis eum, placeat dignissimos repellat illum.</p>
        </div>
      )}
    </div>
  );
}

export default Split;
