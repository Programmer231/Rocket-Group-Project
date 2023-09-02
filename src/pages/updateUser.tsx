import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";

const UpdateUser = () => {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [address, setAddress] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const setUsernameHandler = (value: string) => {
    setUsername(value);
  };

  const setAddressHandler = (value: string) => {
    setAddress(value);
  };

  const setImageUrlHandler = (value: string) => {
    setImageUrl(value);
  };

  const UpdateUserHandler = async (event: FormEvent) => {
    event.preventDefault();

    const userCredentials = {
      username: username,
      address: address,
      imageUrl: imageUrl,
    };

    try {
      const res = await fetch(
        "https://event.planetearthlawncare.org/api/user/updateUser",
        {
          method: "POST",
          body: JSON.stringify(userCredentials),
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        }
      );

      const success = await res.json();

      if (success["success"]) {
        router.replace("/");
      }
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
      <h1 style={{ textAlign: "center", fontSize: "5rem" }}>Update User</h1>
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
          onSubmit={(event) => UpdateUserHandler(event)}
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
              marginTop: "50px",
            }}
          >
            <Label
              htmlFor="address"
              style={{ fontWeight: "bold", fontSize: "2rem" }}
            >
              Address
            </Label>
            <Input
              id="address"
              type="text"
              onChange={(event) => setAddressHandler(event.target.value)}
              value={address}
            />
          </div>
          <div
            style={{
              display: "grid",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              gap: ".5rem",
              marginTop: "50px",
            }}
          >
            <Label
              htmlFor="image Url"
              style={{ fontWeight: "bold", fontSize: "2rem" }}
            >
              Image Url
            </Label>
            <Input
              id="image Url"
              type="text"
              onChange={(event) => setImageUrlHandler(event.target.value)}
              value={imageUrl}
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
            Update User
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
