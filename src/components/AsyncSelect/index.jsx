var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {};
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (
          e.indexOf(p[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(s, p[i])
        )
          t[p[i]] = s[p[i]];
      }
    return t;
  };
import React, { useMemo, useRef, useState } from "react";
import { Select, Spin, Avatar } from "antd";
import debounce from "lodash/debounce";
function DebounceSelect(_a) {
  var { fetchOptions, debounceTimeout = 300 } = _a,
    props = __rest(_a, ["fetchOptions", "debounceTimeout"]);
  const [fetching, setFetching] = useState(false);
  const [options, setOptions] = useState([]);
  const fetchRef = useRef(0);
  const debounceFetcher = useMemo(() => {
    const loadOptions = (value) => {
      fetchRef.current += 1;
      const fetchId = fetchRef.current;
      setOptions([]);
      setFetching(true);
      fetchOptions(value).then((newOptions) => {
        if (fetchId !== fetchRef.current) {
          // for fetch callback order
          return;
        }
        setOptions(newOptions);
        setFetching(false);
      });
    };
    return debounce(loadOptions, debounceTimeout);
  }, [fetchOptions, debounceTimeout]);
  return (
    <Select
      showSearch
      labelInValue
      filterOption={false}
      onSearch={debounceFetcher}
      notFoundContent={fetching ? <Spin size="small" /> : "No results found"}
      {...props}
      options={options}
      optionRender={(option) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          {option.data.avatar && (
            <Avatar src={option.data.avatar} style={{ marginRight: 8 }} />
          )}
          {option.label}
        </div>
      )}
    />
  );
}

const AsyncSelect = ({ value, setValue, url }) => {
  function fetchUserList(username) {
    return __awaiter(this, void 0, void 0, function* () {
      console.log("fetching user", username);
      return fetch(url)
        .then((res) => res.json())
        .then((res) => {
          const results = Array.isArray(res) ? res : [];
          return results.map((user) => ({
            label: user.name,
            value: user.id,
            avatar: user.avatar,
          }));
        });
    });
  }

  return (
    <DebounceSelect
      value={value}
      placeholder="Select users"
      fetchOptions={fetchUserList}
      style={{ width: "100%" }}
      onChange={(newValue) => {
        console.log("sdfdfsd", newValue);
        setValue(newValue);
      }}
    />
  );
};
export default AsyncSelect;
