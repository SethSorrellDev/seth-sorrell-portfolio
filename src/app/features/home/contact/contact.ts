import { Component, signal, computed } from '@angular/core';
import emailjs from '@emailjs/browser';

const SERVICE_ID = 'REPLACE_ME_SERVICE_ID';
const TEMPLATE_ID = 'REPLACE_ME_TEMPLATE_ID';
const PUBLIC_KEY = 'REPLACE_ME_PUBLIC_KEY';

type SubmitStatus = 'idle' | 'sending' | 'sent' | 'error';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  readonly isConfigured = SERVICE_ID !== 'REPLACE_ME_SERVICE_ID';

  name = signal('');
  email = signal('');
  message = signal('');
  status = signal<SubmitStatus>('idle');

  isValid = computed(() => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return this.name().trim().length > 0 && emailPattern.test(this.email()) && this.message().trim().length > 0;
  });

  inputValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

  textareaValue(event: Event): string {
    return (event.target as HTMLTextAreaElement).value;
  }

  async onSubmit(event: Event): Promise<void> {
    event.preventDefault();
    if (!this.isValid() || this.status() === 'sending') return;

    this.status.set('sending');

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        { from_name: this.name(), from_email: this.email(), message: this.message() },
        { publicKey: PUBLIC_KEY }
      );
      this.status.set('sent');
      this.name.set('');
      this.email.set('');
      this.message.set('');
    } catch {
      this.status.set('error');
    }
  }
}
