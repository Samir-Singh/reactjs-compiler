const Profile = ({ formData, setFormData, err, setErr }) => {
  return (
    <div className="flex flex-col gap-2">
      <div>
        Name:{" "}
        <input
          type="text"
          value={formData.name}
          onChange={(e) => {
            setFormData((prev) => ({ ...prev, name: e.target.value }));
            setErr((prev) => ({
              ...prev,
              name: "",
            }));
          }}
          className="border rounded-sm"
        />
        {err.name && <p className="text-red-500 text-sm">{err.name}</p>}
      </div>

      <div>
        Age:{" "}
        <input
          type="number"
          value={formData.age}
          onChange={(e) => {
            setFormData((prev) => ({ ...prev, age: e.target.value }));
            setErr((prev) => ({
              ...prev,
              age: "",
            }));
          }}
          className="border rounded-sm"
        />
        {err.age && <p className="text-red-500 text-sm">{err.age}</p>}
      </div>

      <div>
        Email:{" "}
        <input
          type="text"
          value={formData.email}
          onChange={(e) => {
            setFormData((prev) => ({ ...prev, email: e.target.value }));
            setErr((prev) => ({
              ...prev,
              email: "",
            }));
          }}
          className="border rounded-sm"
        />
        {err.email && <p className="text-red-500 text-sm">{err.email}</p>}
      </div>
    </div>
  );
};

export default Profile;
