'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { submitContact, type ContactState } from '@/app/actions';

const initialState: ContactState = { status: 'idle' };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex w-full items-center justify-center rounded-full bg-gold px-8 py-3.5 text-sm font-medium uppercase tracking-eyebrow text-noir transition-colors hover:bg-gold-soft disabled:opacity-60 sm:w-fit"
    >
      {pending ? 'Wird gesendet…' : 'Anfrage absenden'}
    </button>
  );
}

const fieldClass =
  'mt-2 w-full rounded-sm border border-line bg-noir px-4 py-3 text-paper placeholder:text-paper-dim/60 focus:border-gold';
const labelClass = 'text-sm tracking-wide text-paper-dim';

export function ContactForm() {
  const [state, formAction] = useFormState(submitContact, initialState);

  if (state.status === 'success') {
    return (
      <div
        role="status"
        className="rounded-sm border border-gold/40 bg-anthracite p-8 text-center"
      >
        <p className="font-display text-2xl text-gold">Danke!</p>
        <p className="mt-3 text-paper-dim">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-5" noValidate>
      {/* Honeypot — für Menschen unsichtbar */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label>
          Firma
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="name">
            Name <span className="text-gold">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={fieldClass}
            placeholder="Vor- und Nachname"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="vehicle">
            Fahrzeug
          </label>
          <input
            id="vehicle"
            name="vehicle"
            type="text"
            className={fieldClass}
            placeholder="z. B. BMW M3"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="finish">
            Finish-Wunsch
          </label>
          <select id="finish" name="finish" className={fieldClass} defaultValue="">
            <option value="" disabled>
              Bitte wählen
            </option>
            <option>Matt</option>
            <option>Satin</option>
            <option>Gebürstetes Metall / Satin-Chrome</option>
            <option>Color-Shift</option>
            <option>Carbon-Optik</option>
            <option>Custom-Design</option>
            <option>Noch unklar — beraten lassen</option>
          </select>
        </div>
        <div>
          <label className={labelClass} htmlFor="scope">
            Umfang
          </label>
          <select id="scope" name="scope" className={fieldClass} defaultValue="">
            <option value="" disabled>
              Bitte wählen
            </option>
            <option>Vollfolierung</option>
            <option>Teilfolierung</option>
            <option>Lackschutzfolie (PPF)</option>
            <option>Chrome-Delete</option>
            <option>Scheibentönung</option>
            <option>Werbebeschriftung / Flotte</option>
          </select>
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="message">
          Nachricht <span className="text-gold">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={fieldClass}
          placeholder="Beschreib kurz dein Vorhaben."
        />
      </div>

      {state.status === 'error' ? (
        <p role="alert" className="text-sm text-gold-soft">
          {state.message}
        </p>
      ) : null}

      <p className="text-xs leading-relaxed text-paper-dim">
        Mit dem Absenden stimmst du der Verarbeitung deiner Angaben zur
        Bearbeitung der Anfrage zu. Details in der{' '}
        <a href="/datenschutz" className="text-gold underline">
          Datenschutzerklärung
        </a>
        .
      </p>

      <SubmitButton />
    </form>
  );
}
