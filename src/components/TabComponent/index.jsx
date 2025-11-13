import { useState } from "react";
import Interest from "./components/Interest";
import Profile from "./components/Profile";
import Settings from "./components/Settings";

const TabComponent = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
  });
  const [err, setErr] = useState({});

  const tabs = [
    {
      id: 1,
      name: "Profile",
      component: Profile,
      validate: () => {
        let isError = false;

        if (!formData?.name || formData?.name?.length < 2) {
          setErr((prev) => ({ ...prev, name: "Please enter valid name" }));
          isError = true;
        }

        if (!formData?.age || formData?.age < 18) {
          setErr((prev) => ({ ...prev, age: "Please valid age" }));
          isError = true;
        }

        if (!formData?.email || formData?.email?.length < 2) {
          setErr((prev) => ({ ...prev, email: "Please enter valid email" }));
          isError = true;
        }

        return !isError;
      },
    },
    {
      id: 2,
      name: "Interest",
      component: Interest,
      validate: () => {
        return true;
      },
    },
    {
      id: 3,
      name: "Settings",
      component: Settings,
      validate: () => {
        return true;
      },
    },
  ];

  const ActiveTab = tabs[tabIndex].component;

  const handleNext = () => {
    if (tabs[tabIndex].validate()) {
      setTabIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    setTabIndex((prev) => prev - 1);
  };

  return (
    <div>
      <h1 className="text-4xl font-medium">Tab Component</h1>
      {/* Tab Buttons */}
      <div className="flex items-center my-3 mb-0">
        {tabs?.map((item, idx) => (
          <button
            key={item.id}
            onClick={() =>
              tabs[tabIndex].validate() ? setTabIndex(idx) : null
            }
            className={`border border-black px-2 cursor-pointer ${
              tabIndex === idx ? "bg-black text-white" : ""
            }`}
          >
            {item?.name}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="border p-3">
        <ActiveTab
          formData={formData}
          setFormData={setFormData}
          err={err}
          setErr={setErr}
        />
      </div>

      {/* Navigate Buttons */}
      <div className="flex items-center justify-center my-3 gap-2">
        <button
          onClick={() => (tabIndex !== 0 ? handlePrev() : null)}
          className="border px-3 cursor-pointer"
        >
          Prev
        </button>
        <button
          onClick={() => (tabIndex < tabs.length - 1 ? handleNext() : null)}
          className="border px-3 cursor-pointer"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TabComponent;
