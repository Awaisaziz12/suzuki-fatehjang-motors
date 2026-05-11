"use client";

import React, { useState, useEffect } from "react";
import { Modal, Button, Form, Alert } from "react-bootstrap";
import logo from "../../[locale]/public/Asset 1.svg";
import Image from "next/image";

export function CarBookingForm({ open, setOpen }: any) {
  const [status, setStatus] = useState("");
  const [carModel, setCarModel] = useState("");
  const [variant, setVariant] = useState("");

  const handleClose = () => setOpen(false);

  const getColorsForModel = () => {
    if (carModel === "suzuki-Fronx" && variant === "monotone") {
      return ["Silky Silver", "Ice Grey", "Black"];
    }

    if (carModel === "suzuki-Fronx" && variant === "two-tone") {
      return ["Silver + Black Roof", "White + Black Roof"];
    }

    return ["White", "Black", "Silver"];
  };

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => setStatus(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Submitting...");

    const formData = new URLSearchParams({
      name: e.currentTarget.yourName.value,
      phone: e.currentTarget.phone.value,
      email: e.currentTarget.email.value,
      carModel: e.currentTarget.carModel.value,
      variant,
      carColor: e.currentTarget.carColor.value,
      bookingDate: e.currentTarget.bookingDate.value,
      message: e.currentTarget.message.value,
    });

    try {
      const response = await fetch("YOUR_API_URL", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
      });

      const result = await response.json();

      if (result.result === "success") {
        setStatus("✅ Booking submitted!");
      } else {
        setStatus("❌ Failed!");
      }
    } catch {
      setStatus("❌ Error occurred");
    }
  };

  return (
    <Modal show={open} onHide={handleClose} centered size="lg">

      <Modal.Header closeButton>
        <Image src={logo} alt="logo" width={50} height={50} />
        <Modal.Title className="ms-2">Book Your Car</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={handleSubmit}>

          <Form.Control name="yourName" placeholder="Name" className="mb-2" />
          <Form.Control name="phone" placeholder="Phone" className="mb-2" />
          <Form.Control name="email" placeholder="Email" className="mb-2" />

          <Form.Select
            name="carModel"
            className="mb-2"
            onChange={(e) => setCarModel(e.target.value)}
          >
            <option>Select Car</option>
            <option value="suzuki-Fronx">Fronx</option>
            <option value="suzuki-Alto">Alto</option>
          </Form.Select>

          {carModel === "suzuki-Fronx" && (
            <Form.Select
              className="mb-2"
              onChange={(e) => setVariant(e.target.value)}
            >
              <option>Select Variant</option>
              <option value="monotone">Monotone</option>
              <option value="two-tone">Two Tone</option>
            </Form.Select>
          )}

          <Form.Select name="carColor" className="mb-2">
            {getColorsForModel().map((c) => (
              <option key={c}>{c}</option>
            ))}
          </Form.Select>

          <Form.Control type="date" name="bookingDate" className="mb-2" />
          <Form.Control as="textarea" name="message" className="mb-2" />

          {status && <Alert>{status}</Alert>}

          <Button type="submit" className="w-100">
            Submit Booking
          </Button>

        </Form>
      </Modal.Body>

    </Modal>
  );
}