
import React, { useState } from "react";

const Signup = () => {
	const [form, setForm] = useState({
		name: "",
		email: "",
		password: ""
	});

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// You can add signup logic here
		alert("Signup successful!\n" + JSON.stringify(form, null, 2));
	};

	return (
		<div style={{ maxWidth: "400px", margin: "40px auto", padding: "24px", border: "1px solid #ddd", borderRadius: "8px", background: "#fff" }}>
			<h2 style={{ textAlign: "center", marginBottom: "24px" }}>Sign Up</h2>
			<form onSubmit={handleSubmit}>
				<div style={{ marginBottom: "16px" }}>
					<label>Name</label>
					<input
						type="text"
						name="name"
						value={form.name}
						onChange={handleChange}
						required
						style={{ width: "100%", padding: "8px", marginTop: "4px" }}
					/>
				</div>
				<div style={{ marginBottom: "16px" }}>
					<label>Email</label>
					<input
						type="email"
						name="email"
						value={form.email}
						onChange={handleChange}
						required
						style={{ width: "100%", padding: "8px", marginTop: "4px" }}
					/>
				</div>
				<div style={{ marginBottom: "16px" }}>
					<label>Password</label>
					<input
						type="password"
						name="password"
						value={form.password}
						onChange={handleChange}
						required
						style={{ width: "100%", padding: "8px", marginTop: "4px" }}
					/>
				</div>
				<button type="submit" style={{ width: "100%", padding: "10px", background: "#007bff", color: "#fff", border: "none", borderRadius: "4px" }}>
					Sign Up
				</button>
			</form>
		</div>
	);
};

export default Signup;
