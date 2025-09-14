import React, { useState } from "react";

export default function Checkout() {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "El nombre es obligatorio.";
    if (!form.email.trim()) e.email = "El email es obligatorio.";
    else {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!re.test(form.email)) e.email = "Formato de email inválido.";
    }
    if (form.phone) {
      const rePhone = /^\d+$/;
      if (!rePhone.test(form.phone)) e.phone = "El teléfono solo puede contener números.";
    }
    return e;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const validation = validate();
    setErrors(validation);
    if (Object.keys(validation).length === 0) {
      setSubmitted(true);
    } else {
      setSubmitted(false);
    }
  };

  if (submitted)
    return (
      <div>
        <h2>Orden creada (mock)</h2>
        <p>Gracias {form.name}. Revisa tu email: {form.email}</p>
      </div>
    );

  return (
    <div style={{ maxWidth: 620 }}>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div style={{ marginBottom: 12 }}>
          <label>
            Nombre completo:
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
              style={{ display: "block", width: "100%", padding: 8 }}
            />
          </label>
          {errors.name && <div style={{ color: "red" }}>{errors.name}</div>}
        </div>

        <div style={{ marginBottom: 12 }}>
          <label>
            Email:
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
              style={{ display: "block", width: "100%", padding: 8 }}
            />
          </label>
          {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
        </div>

        <div style={{ marginBottom: 12 }}>
          <label>
            Teléfono (opcional):
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => setForm((s) => ({ ...s, phone: e.target.value }))}
              style={{ display: "block", width: "100%", padding: 8 }}
            />
          </label>
          {errors.phone && <div style={{ color: "red" }}>{errors.phone}</div>}
        </div>

        <button type="submit" style={{ padding: "8px 14px" }}>
          Finalizar compra
        </button>
      </form>
    </div>
  );
}
