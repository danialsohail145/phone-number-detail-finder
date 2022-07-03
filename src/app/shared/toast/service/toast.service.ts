import { Injectable, TemplateRef } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  toasts: any[] = [];

  show(textOrTpl: string | TemplateRef<any>, options: any = {}) {
    this.toasts.push({ textOrTpl, ...options });
  }

  showErrorMessage(message: string, delay?: number) {
    console.log('Error');
    this.show(message, {
      classname: 'bg-danger text-light',
      delay: delay,
    });
  }
  showSuccessMessage(message: string, delay?: number) {
    this.show(message, {
      classname: 'bg-success text-light ',
      delay: delay,
    });
  }
  showloadingMessage(message: string, delay?: number) {
    this.show(message, {
      classname: 'bg-info text-light',
      delay: delay,
    });
  }

  remove(toast: any) {
    this.toasts = this.toasts.filter((t) => t !== toast);
  }

  clear() {
    this.toasts.splice(0, this.toasts.length);
  }
}
