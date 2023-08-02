import Navbar from "@/components/Navbar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/router";
import { useState, FormEvent } from "react";

const Event = () => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [address, setAddress] = useState("");

  const setNameHandler = (value: string) => {
    setName(value);
  };

  const setDescriptionHandler = (value: string) => {
    setDescription(value);
  };

  const setImageHandler = (value: string) => {
    setImage(value);
  };

  const setAddressHandler = (value: string) => {
    setAddress(value);
  };

  const createEventHandler = async (event: FormEvent) => {
    event.preventDefault();

    const newEvent = {
      name: name,
      description: description,
      image: image,
      address: address,
    };

    try {
      const success = await fetch(
        "http://localhost:4000/api/event/createEvent",
        {
          method: "POST",
          body: JSON.stringify(newEvent),
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        }
      ).then((res) => res.json());

      console.log(success);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Navbar />
      <h1 style={{ textAlign: "center", fontSize: "5rem" }}>Create Event</h1>
      <form
        style={{ width: "100%" }}
        onSubmit={(event) => createEventHandler(event)}
      >
        <div
          style={{
            display: "grid",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
            margin: "20px auto",
          }}
        >
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            type="text"
            onChange={(event) => setNameHandler(event.target.value)}
          />
        </div>
        <div
          style={{
            display: "grid",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
            margin: "20px auto",
          }}
        >
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            onChange={(event) => setDescriptionHandler(event.target.value)}
          />
        </div>
        <div
          style={{
            display: "grid",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
            margin: "20px auto",
          }}
        >
          <Label htmlFor="imageURL">Image Url</Label>
          <Input
            id="imageURL"
            type="text"
            onChange={(event) => setImageHandler(event.target.value)}
            value={image}
          />
        </div>
        <div
          style={{
            display: "grid",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
            margin: "20px auto",
          }}
        >
          <Label htmlFor="imageURL">Address</Label>
          <Input
            id="imageURL"
            type="text"
            onChange={(event) => setAddressHandler(event.target.value)}
            value={address}
          />
        </div>
        <button
          style={{
            cursor: "pointer",
            padding: "10px",
            borderRadius: "10px",
            backgroundColor: "orange",
            fontSize: "2rem",
            margin: "50px auto",
            display: "block",
          }}
          type="submit"
        >
          Create
        </button>
      </form>
    </>
  );
};

export default Event;
