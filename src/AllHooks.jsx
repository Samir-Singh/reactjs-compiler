import "./index.css";
import { useMemo, useState } from "react";
import useFetch from "./hooks/useFetch";
import useWindowSize from "./hooks/useWindowSize";
import useDebounceValue from "./hooks/useDebounceValue";
import useDebounceFunction from "./hooks/useDebounceFunction";
import { forwardRef, useImperativeHandle, useRef } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import useIntersectionObserver from "./hooks/useIntersectionObserver";
import toast from "react-hot-toast";

function AllHooks() {
  const interSectionRef = useRef(null);
  const childRef = useRef(null);
  const [inputText, setInputText] = useState();
  const [inputText2, setInputText2] = useState("");
  const [formDataValue, setFormDataValue, removeFormData] = useLocalStorage(
    "formData",
    null
  );
  const [designation, setDesignation, removeDesignation] = useLocalStorage(
    "designation",
    ""
  );

  const { debounceValue, loading: debounceLoading } = useDebounceValue(
    inputText,
    500
  );
  const { width, height } = useWindowSize();
  const { data, loading, error } = useFetch(
    "https://dummyjson.com/posts",
    (response) => {
      console.log(response);
      toast.success("Api Fetched Successfully");
    },
    (error) => {
      console.log(error);
      toast.error("Something went wrong");
    },
    {
      method: "GET",
    }
  );

  const handleChangeInput = (e) => {
    setInputText(e.target.value);
  };

  const fetchData = (text) => {
    console.log(`Fetching Data with text ${text}`);
  };

  const debouncedFunction = useDebounceFunction(fetchData);

  const handleChangeInput2 = (e) => {
    setInputText2(e.target.value);
    debouncedFunction(e.target.value);
  };

  const options = useMemo(
    () => ({ root: null, rootMargin: "0px", threshold: "0.5" }),
    []
  );

  const intersectionEntries = useIntersectionObserver(interSectionRef, options);

  console.log("sdffsd", intersectionEntries?.isIntersecting);

  return (
    <>
      <h1>AllHooks</h1>
      <button onClick={() => childRef.current.focusInput()}>Click Me</button>
      <ChildComponent defaultValue="some data" ref={childRef} />
      <hr />
      <p>Width:{width}</p>
      <p>Height:{height}</p>
      <hr />
      <p>Your Text : {debounceLoading ? "Loading..." : debounceValue}</p>
      <input
        type="text"
        value={inputText}
        placeholder="Type Something..."
        onChange={handleChangeInput}
      />
      <input
        type="text"
        value={inputText2}
        placeholder="Type Something..."
        onChange={handleChangeInput2}
      />
      <hr />
      <p>First Name :{formDataValue?.firstName || ""}</p>
      <p>Last Name : {formDataValue?.lastName || ""}</p>
      <p>Designation : {designation || ""}</p>
      <input
        type="text"
        value={formDataValue?.firstName || ""}
        placeholder="Enter first name"
        onChange={() =>
          setFormDataValue({
            ...formDataValue,
            firstName: event.target.value,
          })
        }
      />
      <input
        type="text"
        value={formDataValue?.lastName || ""}
        placeholder="Enter last name"
        onChange={() =>
          setFormDataValue({
            ...formDataValue,
            lastName: event.target.value,
          })
        }
      />
      <input
        type="text"
        value={designation}
        placeholder="Enter last name"
        onChange={(e) => setDesignation(e.target.value)}
      />
      <button onClick={() => removeFormData()}>Remove FormData</button>
      <button onClick={() => removeDesignation()}>Remove Designation</button>

      <hr />

      <hr />
      <h1>useIntersectionObserver</h1>
      <div
        style={{
          height: "100vh",
          border: "1px solid red",
          background: intersectionEntries?.isIntersecting ? "white" : "grey",
        }}
      >
        <div
          ref={interSectionRef}
          style={{ height: "50vh", background: "blue" }}
        ></div>
      </div>

      <hr />
      <div>
        <h1>Dummy List</h1>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {data && data.map((item) => <p key={item.id}>{item.title}</p>)}
      </div>
    </>
  );
}

const ChildComponent = forwardRef(({ defaultValue }, ref) => {
  const inputRef = useRef(null);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  useImperativeHandle(ref, () => ({
    focusInput,
  }));

  return <input ref={inputRef} defaultValue={defaultValue} />;
});

export default AllHooks;
