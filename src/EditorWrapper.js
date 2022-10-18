import { lazy, Suspense, useEffect, useRef, useState } from "react";
const Editor = lazy(() => import("./Editor"));

const EditorWrapper = ({ value, setValChange }) => {
  const docRef = useRef(null);
  const [editable, setEditable] = useState(false);

  useEffect(() => {
    docRef.current.innerHTML = value;
  }, [value]);

  return (
    <div role="button" style={{ textAlign: "left" }}>
      <div
        onClick={() => setEditable(true)}
        style={{ ...(editable && { display: "none" }), cursor: "text" }}
        ref={docRef}
      ></div>
      <Suspense fallback={<h1>Loading</h1>}>
        {editable && (
          <Editor
            value={value}
            setEditable={setEditable}
            setValChange={setValChange}
          />
        )}
      </Suspense>
    </div>
  );
};

export default EditorWrapper;
