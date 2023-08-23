import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'angular-editor-prompt-modal',
  templateUrl: './prompt-modal.component.html',
})
export class PromptModalComponent {
  prompt: string;

  constructor(private activeModal: NgbActiveModal) {}

  init(value: string) {
    this.prompt = value;
  }

  close() {
    this.activeModal.close(this.prompt);
  }

  cancel() {
    this.activeModal.dismiss();
  }
}
