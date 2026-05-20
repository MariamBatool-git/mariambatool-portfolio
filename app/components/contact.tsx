"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Card, CardContent } from "@mui/material";
import {ContactFormData} from '../types';

export default function ContactPage() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactFormData>();
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const onSubmit = async (data: ContactFormData) => {
    setStatus("idle");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error();
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <Card sx={{ minWidth: 275 }} >
      <CardContent className="bg-stone-100">
        <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div>
            <input
              {...register("name", { required: "Name is required" })}
              placeholder="Your name"
              className="border border-stone-400 w-full p-2"
            />
            {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
          </div>
          <div>
             <input
              type="email"
              {...register("email", { required: "Email is required" })}
              placeholder="you@example.com"
                            className="border border-stone-400 w-full p-2"
            />
            {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
          </div>
          <div>
          <textarea
              {...register("message", { required: "Message is required" })}
              rows={5}
              placeholder="Write your message..."
              className="border border-stone-400 w-full p-2"
            />
            {errors.message && <p style={{ color: "red" }}>{errors.message.message}</p>}
          </div>
          <div className="flex items-center justify-center">
            <button type="submit" disabled={isSubmitting} className="bg-red-800 text-white py-2 px-4 w-[70%]">
                {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </div>
          {status === "success" && <p style={{ color: "green" }}>Message sent! I'll get back to you soon.</p>}
          {status === "error" && <p style={{ color: "red" }}>Something went wrong. Please try again.</p>}
        </form>
      </CardContent>
    </Card>
  );
}