"use client";
import React, { useState } from "react";
import { Modal, Button, Form, Alert } from "react-bootstrap";
import Image from "next/image";
import logo from "../../[locale]/public/Asset 1.svg";

export function FinanceBookingForm() {
  const [show, setShow] = useState(false);
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState("");

  const [variant, setVariant] = useState("");

  // ✅ SAFE FORM STATE (NO ERRORS)
  const [form, setForm] = useState({
    yourName: "",
    phone: "",
    email: "",
    carModel: "",
    carColor: "",
    bookingDate: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleClose = () => {
    setShow(false);
    setStep(1);
  };

  const next = () => setStep((s) => Math.min(s + 1, 3));
  const back = () => setStep((s) => Math.max(s - 1, 1));

  const getColorsForModel = () => {
    if (form.carModel === "suzuki-Fronx-finance" && variant === "monotone") {
      return [
        "Silky Silver",
        "Ice Greyish Blue",
        "Mineral Grey",
        "Jungle Green",
        "Solid White",
        "Super Black",
      ];
    }

    if (form.carModel === "suzuki-Fronx-finance" && variant === "two-tone") {
      return [
        "Silky Silver + Black Roof",
        "Ice Greyish Blue + Black Roof",
        "Solid White + Black Roof",
      ];
    }

    if (form.carModel === "suzuki-Alto" || form.carModel === "suzuki-Cultus") {
      return ["White", "Black", "Silver", "Mineral Grey"];
    }

    return ["White", "Black", "Silver"];
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Submitting...");

    const formData = new URLSearchParams({
      name: form.yourName,
      phone: form.phone,
      email: form.email,
      carModel: form.carModel,
      variant: variant,
      carColor: form.carColor,
      bookingDate: form.bookingDate,
      message: form.message,
    });

    try {
      const response = await fetch(          "https://script.google.com/macros/s/AKfycbwyl_BTdm7BH1cFf8b4FdP910UQPNXdAw-bQKdb_FFWeY3nHp4lmVcs5Fn6Rh9hDNuETg/exec", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
      });

      const result = await response.json();

      if (result.result === "success") {
        setStatus("✅ Booking submitted successfully!");

        setTimeout(() => {
          handleClose();
          setForm({
            yourName: "",
            phone: "",
            email: "",
            carModel: "",
            carColor: "",
            bookingDate: "",
            message: "",
          });
          setVariant("");
          setStatus("");
        }, 1000);
      } else {
        setStatus("❌ Failed to submit");
      }
    } catch {
      setStatus("❌ Network error");
    }
  };

  return (
    <>
      {/* OPEN BUTTON */}
      <Button
  onClick={() => setShow(true)}
  className="booking-btn"
>
   Booking Form 
</Button>

      {/* MODAL */}
      <Modal
        show={show}
        onHide={handleClose}
        centered
        backdrop="static"
        dialogClassName="finance-modal"
      >
        <Modal.Body className="p-3 position-relative">

          {/* CLOSE BUTTON */}
          <button
            onClick={handleClose}
            style={{
              position: "absolute",
              right: 12,
              top: 10,
              border: "none",
              background: "transparent",
              fontSize: 22,
            }}
          >
            ✖
          </button>

          {/* HEADER */}
          <div className="d-flex align-items-center gap-2 mb-2">
            <Image src={logo} alt="logo" width={40} height={40} />
            <div>
              <h6 className="mb-0 fw-bold">Booking Form</h6>
              <small className="text-muted">Step {step} of 3</small>
            </div>
          </div>

          {/* PROGRESS */}
          <div className="progress mb-3" style={{ height: 5 }}>
            <div
              className="progress-bar bg-danger"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>

          <Form onSubmit={handleSubmit}>

            {/* STEP 1 */}
            {step === 1 && (
              <div className="d-grid gap-2">
                <Form.Control
                  name="yourName"
                  placeholder="Full Name"
                  value={form.yourName}
                  onChange={handleChange}
                  required
                />

                <Form.Control
                  name="phone"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />

                <Form.Control
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />

                <Button onClick={next}>Next</Button>
              </div>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <div className="d-grid gap-2">
                <Form.Select
                  name="carModel"
                  value={form.carModel}
                  onChange={(e) => {
                    handleChange(e);
                    setVariant("");
                  }}
                  required
                >
                  <option value="">Select Car Model</option>
                  <option value="suzuki-Fronx-finance">Fronx</option>
                  <option value="suzuki-Swift">Swift</option>
                  <option value="suzuki-Cultus">Cultus</option>
                  <option value="suzuki-Alto">Alto</option>
                  <option value="suzuki-Every">Every</option>
                </Form.Select>

                {form.carModel === "suzuki-Fronx-finance" && (
                  <Form.Select
                    onChange={(e) => setVariant(e.target.value)}
                    required
                  >
                    <option value="">Select Variant</option>
                    <option value="monotone">Monotone</option>
                    <option value="two-tone">Two Tone</option>
                  </Form.Select>
                )}

                <Form.Select
                  name="carColor"
                  value={form.carColor}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Color</option>
                  {getColorsForModel().map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </Form.Select>

                <div className="d-flex gap-2">
                  <Button variant="secondary" onClick={back}>
                    Back
                  </Button>
                  <Button onClick={next}>Next</Button>
                </div>
              </div>
            )}

            {/* STEP 3 */}
            {step === 3 && (
              <div className="d-grid gap-2">
                <Form.Control
                  type="date"
                  name="bookingDate"
                  value={form.bookingDate}
                  onChange={handleChange}
                  required
                />

                <Form.Control
                  as="textarea"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={2}
                  placeholder="Message (optional)"
                />

                <Form.Check label="I agree to terms" required />

                {status && <Alert>{status}</Alert>}

                <div className="d-flex gap-2">
                  <Button variant="secondary" onClick={back}>
                    Back
                  </Button>
                  <Button type="submit">Submit</Button>
                </div>
              </div>
            )}

          </Form>
        </Modal.Body>
      </Modal>

      {/* SMALL FIX */}
      <style jsx>{`
        .finance-modal .modal-dialog {
          max-width: 420px;
        }
          .modern-book-btn {
  background: linear-gradient(135deg, #ff2d2d, #ff6b6b);
  border: none;
  padding: 12px 22px;
  border-radius: 50px;
  font-weight: 600;
  color: #fff;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 8px 20px rgba(255, 45, 45, 0.3);
  transition: all 0.25s ease;
  position: relative;
  overflow: hidden;
}

/* hover effect */
.modern-book-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 25px rgba(255, 45, 45, 0.45);
}

/* click effect */
.modern-book-btn:active {
  transform: scale(0.96);
}

/* shine animation */
.modern-book-btn::after {
  content: "";
  position: absolute;
  top: 0;
  left: -80%;
  width: 60%;
  height: 100%;
  background: rgba(255, 255, 255, 0.3);
  transform: skewX(-25deg);
}

.modern-book-btn:hover::after {
  animation: shine 0.7s ease;
}

@keyframes shine {
  100% {
    left: 130%;
  }
}
      `}</style>
    </>
  );
}