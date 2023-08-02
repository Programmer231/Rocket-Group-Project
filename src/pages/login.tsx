import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";

const Login = () => {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const setUsernameHandler = (value: string) => {
    setUsername(value);
  };

  const setPasswordHandler = (value: string) => {
    setPassword(value);
  };

  const loginHandler = async (event: FormEvent) => {
    event.preventDefault();

    const userCredentials = { username: username, password: password };
    try {
      const success = await fetch("http://localhost:4000/api/user/login", {
        method: "POST",
        body: JSON.stringify(userCredentials),
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      }).then((res) => res.json());
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ width: "100%" }}>
      <button
        style={{
          marginTop: "50px",
          marginLeft: "50px",
          cursor: "pointer",
          padding: "10px",
          borderRadius: "10px",
          backgroundColor: "orange",
          fontWeight: "bold",
          fontSize: "2rem",
        }}
        onClick={() => router.push("/")}
      >
        Back
      </button>
      <h1 style={{ textAlign: "center", fontSize: "5rem" }}>Login</h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          flexDirection: "column",
          minWidth: "800px",
        }}
      >
        <form
          style={{ width: "100%" }}
          onSubmit={(event) => loginHandler(event)}
        >
          <div
            style={{
              display: "grid",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              gap: ".5rem",
              margin: "10px auto",
            }}
          >
            <Label
              htmlFor="username"
              style={{ fontWeight: "bold", fontSize: "2rem" }}
            >
              Username
            </Label>
            <Input
              id="username"
              type="text"
              onChange={(event) => setUsernameHandler(event.target.value)}
              value={username}
            />
          </div>
          <div
            style={{
              display: "grid",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              gap: ".5rem",
              margin: "auto",
            }}
          >
            <Label
              htmlFor="password"
              style={{
                fontWeight: "bold",
                fontSize: "2rem",
                marginTop: "70px",
              }}
            >
              Password
            </Label>
            <Input
              id="password"
              type="password"
              onChange={(event) => setPasswordHandler(event.target.value)}
              value={password}
            />
          </div>
          <button
            style={{
              cursor: "pointer",
              padding: "10px",
              borderRadius: "10px",
              backgroundColor: "orange",
              fontSize: "1.5rem",
              margin: "50px auto",
              display: "block",
            }}
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
