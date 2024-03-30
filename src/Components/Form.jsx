import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    nombreCompleto: "",
    email: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let errors = {};

    if (!formData.nombreCompleto.trim()) {
      errors.nombreCompleto = "El nombre completo es requerido";
    }

    if (!formData.email.trim()) {
      errors.email = "El correo electrónico es requerido";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "El correo electrónico es inválido";
    }

    if (Object.keys(errors).length === 0) {
      setSubmitted(true);
    } else {
      setErrors(errors);
    }
  };

  return (
    <div>
      {submitted ? (
        <div>
          <p>
            Gracias {formData.nombreCompleto}, nos contactaremos a su email{" "}
            {formData.email} a la brevedad.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="nombreCompleto">Nombre Completo:</label>
            <input
              type="text"
              id="nombreCompleto"
              name="nombreCompleto"
              value={formData.nombreCompleto}
              onChange={handleChange}
            />
            {errors.nombreCompleto && <p>{errors.nombreCompleto}</p>}
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
          </div>
          <button type="submit">Send</button>
        </form>
      )}
    </div>
  );
};

export default Form;
