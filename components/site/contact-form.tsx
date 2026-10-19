"use client";

import Link from "next/link";
import { useId, useRef, useState, type ChangeEvent, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { whatsappUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./whatsapp-icon";

type Fields = {
  name: string;
  email: string;
  phone: string;
  area: string;
  message: string;
};

type Errors = Partial<Record<keyof Fields, string>>;

const empty: Fields = { name: "", email: "", phone: "", area: "", message: "" };

/** Formata o telefone enquanto a pessoa digita: (14) 99999-9999 */
function formatPhone(value: string) {
  const d = value.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d.length ? `(${d}` : "";
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

function validate(f: Fields): Errors {
  const errors: Errors = {};
  if (f.name.trim().length < 2) errors.name = "Informe seu nome.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.email.trim())) errors.email = "Informe um e-mail válido.";
  const digits = f.phone.replace(/\D/g, "");
  if (digits.length < 10 || digits.length > 11) errors.phone = "Informe um telefone com DDD.";
  if (!f.area) errors.area = "Escolha a área do assunto.";
  if (f.message.trim().length < 10) errors.message = "Conte um pouco sobre o assunto (pelo menos 10 caracteres).";
  return errors;
}

function buildMessage(f: Fields) {
  const area = siteConfig.practiceAreas.find((a) => a.id === f.area);
  return [
    "Olá! Vim pelo site da Advocacia João Silvestre Sobrinho.",
    "",
    `*Nome:* ${f.name.trim()}`,
    `*Área do assunto:* ${area?.fullName ?? f.area}`,
    `*E-mail:* ${f.email.trim()}`,
    `*Telefone:* ${f.phone.trim()}`,
    "",
    `*Mensagem:* ${f.message.trim()}`,
  ].join("\n");
}

/**
 * Formulário de contato SEM backend: valida os campos e abre o WhatsApp
 * do escritório com a mensagem já montada. Nada é gravado pelo site.
 */
export function ContactForm() {
  const uid = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const [fields, setFields] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const id = (name: keyof Fields) => `${uid}-${name}`;

  function update(name: keyof Fields) {
    return (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const value = name === "phone" ? formatPhone(e.target.value) : e.target.value;
      setFields((prev) => ({ ...prev, [name]: value }));
      // Remove o erro do campo assim que a pessoa corrige
      if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
    };
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const found = validate(fields);
    setErrors(found);

    const firstInvalid = (Object.keys(found) as (keyof Fields)[])[0];
    if (firstInvalid) {
      setStatus("idle");
      formRef.current?.querySelector<HTMLElement>(`#${CSS.escape(id(firstInvalid))}`)?.focus();
      return;
    }

    window.open(whatsappUrl(buildMessage(fields)), "_blank", "noopener,noreferrer");
    setStatus("sent");
  }

  const fieldError = (name: keyof Fields) =>
    errors[name] ? (
      <p id={`${id(name)}-error`} className="text-sm font-semibold text-destructive">
        {errors[name]}
      </p>
    ) : null;

  const describedBy = (name: keyof Fields) => (errors[name] ? `${id(name)}-error` : undefined);

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
      <div className="grid gap-2 sm:col-span-2">
        <Label htmlFor={id("name")}>Nome</Label>
        <Input
          id={id("name")}
          name="name"
          autoComplete="name"
          value={fields.name}
          onChange={update("name")}
          aria-invalid={!!errors.name}
          aria-describedby={describedBy("name")}
          required
        />
        {fieldError("name")}
      </div>

      <div className="grid gap-2">
        <Label htmlFor={id("email")}>E-mail</Label>
        <Input
          id={id("email")}
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          value={fields.email}
          onChange={update("email")}
          aria-invalid={!!errors.email}
          aria-describedby={describedBy("email")}
          required
        />
        {fieldError("email")}
      </div>

      <div className="grid gap-2">
        <Label htmlFor={id("phone")}>Telefone (com DDD)</Label>
        <Input
          id={id("phone")}
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel-national"
          placeholder="(14) 99999-9999"
          value={fields.phone}
          onChange={update("phone")}
          aria-invalid={!!errors.phone}
          aria-describedby={describedBy("phone")}
          required
        />
        {fieldError("phone")}
      </div>

      <div className="grid gap-2 sm:col-span-2">
        <Label htmlFor={id("area")}>Área do assunto</Label>
        {/* Select nativo: abre o seletor do próprio celular, mais fácil de usar no toque */}
        <div className="relative">
          <select
            id={id("area")}
            name="area"
            value={fields.area}
            onChange={update("area")}
            aria-invalid={!!errors.area}
            aria-describedby={describedBy("area")}
            required
            className={cn(
              "min-h-12 w-full appearance-none rounded-sm border border-input bg-white py-2.5 pr-10 pl-3.5 text-base shadow-xs transition-[border-color,box-shadow] outline-none focus-visible:border-bronze-ink focus-visible:ring-2 focus-visible:ring-ring/40 aria-invalid:border-destructive",
              fields.area ? "text-ink" : "text-muted-ink",
            )}
          >
            <option value="" disabled>
              Selecione uma área
            </option>
            {siteConfig.practiceAreas.map((area) => (
              <option key={area.id} value={area.id} className="text-ink">
                {area.name}
              </option>
            ))}
          </select>
          <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            className="pointer-events-none absolute top-1/2 right-3.5 size-4 -translate-y-1/2 text-muted-ink"
          >
            <path d="M5 7.5 10 12.5 15 7.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
          </svg>
        </div>
        {fieldError("area")}
      </div>

      <div className="grid gap-2 sm:col-span-2">
        <Label htmlFor={id("message")}>Mensagem</Label>
        <Textarea
          id={id("message")}
          name="message"
          rows={5}
          value={fields.message}
          onChange={update("message")}
          aria-invalid={!!errors.message}
          aria-describedby={describedBy("message")}
          required
        />
        {fieldError("message")}
      </div>

      <div className="flex flex-col gap-4 sm:col-span-2">
        <Button type="submit" size="lg" className="w-full sm:w-auto sm:self-start">
          <WhatsAppIcon className="size-5" />
          Enviar pelo WhatsApp
        </Button>
        <p className="text-sm leading-relaxed text-muted-ink">
          Ao enviar, o WhatsApp abre com a sua mensagem pronta; é só confirmar o envio. Seus dados são usados apenas
          para retornarmos o contato. Veja a{" "}
          <Link href="/politica-de-privacidade" className="font-semibold text-bronze-ink underline underline-offset-4">
            Política de Privacidade
          </Link>
          .
        </p>
        <p role="status" aria-live="polite" className="text-sm font-semibold text-ink">
          {status === "sent" &&
            "Abrimos o WhatsApp em uma nova aba. Se ele não abriu, verifique se o navegador bloqueou a janela."}
        </p>
      </div>
    </form>
  );
}
