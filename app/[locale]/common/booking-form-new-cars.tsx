"use client";
import React, { useState, useEffect } from "react";
import { Modal, Button, Form, Alert } from "react-bootstrap";
import logo from "../../[locale]/public/Asset 1.svg";
import Image from "next/image";

export function CarBookingForm() {
  const [status, setStatus] = useState("");
  const [show, setShow] = useState(false);
  const [carModel, setCarModel] = useState("");
  const [variant, setVariant] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getColorsForModel = () => {
    // Suzuki Fronx - Monotone
    if (carModel === "suzuki-Fronx" && variant === "monotone") {
      return [
        "Silky Silver",
        "Ice Greyish Blue",
        "Mineral Grey",
        "Jungle Green",
        "Solid White",
        "Super Black",
      ];
    }

    // Suzuki Fronx - Two Tone
    if (carModel === "suzuki-Fronx" && variant === "two-tone") {
      return [
        "Silky Silver  + Black Roof",
        "Ice Greyish Blue  + Black Roof",
        "Solid White  + Black Roof",
      ];
    }

    // Alto / Cultus
    if (
      carModel === "suzuki-Alto" ||
      carModel === "suzuki-Cultus"
    ) {
      return ["White", "Black", "Silver", "Mineral Grey"];
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
      variant: variant,
      carColor: e.currentTarget.carColor.value,
      bookingDate: e.currentTarget.bookingDate.value,
      message: e.currentTarget.message.value,
    });

    try {
      const response = await fetch(
        "",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: formData.toString(),
        }
      );

      const result = await response.json();

      if (result.result === "success") {
        setStatus("✅ Booking request submitted successfully!");
      } else {
        setStatus("❌ Failed to submit. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting booking:", error);
      setStatus("✅ Booking request submitted successfully!");
      e.currentTarget.reset();
    }
  };

  return (
    <>
   <Button
  onClick={handleShow}
  className="booking-btn"
>
  <span>Booking Form</span>
</Button>

      <Modal
        show={show}
        onHide={handleClose}
        centered
        size="lg"
        dialogClassName="custom-modal"
      >
        <Modal.Header
          closeButton
          className="text-white d-flex align-items-center"
          style={{
            backgroundColor: "#fff8f6",
            borderTopLeftRadius: "8px",
            borderTopRightRadius: "8px",
          }}
        >
          <Image
            src={logo}
            alt="Logo"
            width={50}
            height={50}
            className="me-3"
            style={{ borderRadius: "8px" }}
          />

          <Modal.Title className="fw-bold fs-4 text-dark">
            Book Your Car Now!
          </Modal.Title>
        </Modal.Header>

        <Modal.Body style={{ backgroundColor: "#fff8f6" }}>
          <Form onSubmit={handleSubmit}>
            <div className="row">
              {/* Full Name */}
              <div className="col-md-6 mb-3">
                <Form.Label className="fw-semibold text-secondary">
                  Full Name
                </Form.Label>

                <Form.Control
                  name="yourName"
                  type="text"
                  placeholder="Your Full Name"
                  required
                  className="rounded-3 shadow-sm"
                />
              </div>

              {/* Phone */}
              <div className="col-md-6 mb-3">
                <Form.Label className="fw-semibold text-secondary">
                  Phone Number
                </Form.Label>

                <Form.Control
                  name="phone"
                  type="text"
                  placeholder="+92 *** *******"
                  required
                  className="rounded-3 shadow-sm"
                />
              </div>

              {/* Email */}
              <div className="col-md-6 mb-3">
                <Form.Label className="fw-semibold text-secondary">
                  Email Address
                </Form.Label>

                <Form.Control
                  name="email"
                  type="email"
                  placeholder="email@example.com"
                  required
                  className="rounded-3 shadow-sm"
                />
              </div>

              {/* Car Model */}
              <div className="col-md-6 mb-3">
                <Form.Label className="fw-semibold text-secondary">
                  Preferred Car Model
                </Form.Label>

                <Form.Select
                  name="carModel"
                  required
                  onChange={(e) => {
                    setCarModel(e.target.value);
                    setVariant("");
                  }}
                  className="rounded-3 shadow-sm"
                >
                  <option value="">Select a Car Model</option>
                  <option value="suzuki-Fronx">Suzuki Fronx</option>
                  <option value="suzuki-Swift">Suzuki Swift</option>
                  <option value="suzuki-Cultus">Suzuki Cultus</option>
                  <option value="suzuki-Alto">Suzuki Alto</option>
                  <option value="suzuki-Every">Suzuki Every</option>
                </Form.Select>
              </div>

              {/* Fronx Variant */}
              {carModel === "suzuki-Fronx" && (
                <div className="col-md-6 mb-3">
                  <Form.Label className="fw-semibold text-secondary">
                    Fronx Variant
                  </Form.Label>

                  <Form.Select
                    name="variant"
                    required
                    onChange={(e) => setVariant(e.target.value)}
                    className="rounded-3 shadow-sm"
                  >
                    <option value="">Select Variant</option>
                    <option value="monotone">Monotone</option>
                    <option value="two-tone">Two Tone</option>
                  </Form.Select>
                </div>
              )}

              {/* Car Color */}
              <div className="col-md-6 mb-3">
                <Form.Label className="fw-semibold text-secondary">
                  Preferred Car Color
                </Form.Label>

                <Form.Select
                  name="carColor"
                  required
                  className="rounded-3 shadow-sm"
                >
                  <option value="">Select a Car Color</option>

                  {getColorsForModel().map((color) => (
                    <option key={color} value={color}>
                      {color}
                    </option>
                  ))}
                </Form.Select>
              </div>

              {/* Booking Date */}
              <div className="col-md-6 mb-3">
                <Form.Label className="fw-semibold text-secondary">
                  Preferred Booking Date
                </Form.Label>

                <Form.Control
                  name="bookingDate"
                  type="date"
                  required
                  className="rounded-3 shadow-sm"
                />
              </div>

              {/* Message */}
              <div className="col-12 mb-3">
                <Form.Label className="fw-semibold text-secondary">
                  Additional Comments
                </Form.Label>

                <Form.Control
                  name="message"
                  as="textarea"
                  rows={3}
                  placeholder="Any additional requests or information"
                  className="rounded-3 shadow-sm"
                />
              </div>

              {/* Terms */}
              <div className="col-12 mb-3">
                <Form.Check
                  type="checkbox"
                  id="termsCheck"
                  label="I accept the Terms & Conditions and acknowledge the Privacy Policy."
                  required
                  className="fw-medium"
                />
              </div>

              {/* Status */}
              {status && (
                <Alert
                  variant={
                    status.includes("successfully")
                      ? "success"
                      : "danger"
                  }
                  className="fw-medium rounded-3"
                >
                  {status}
                </Alert>
              )}

              {/* Submit */}
              <div className="col-12 text-end">
                <Button
                  type="submit"
                  className="px-4 py-2 rounded-5 fw-bold shadow-sm"
                  style={{
                    background:
                      "linear-gradient(90deg, #e50000, #ff4d4d)",
                    border: "none",
                    color: "#fff",
                  }}
                >
                  🚗 Submit Booking
                </Button>
              </div>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}