import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faDownload, faImages } from '@fortawesome/free-solid-svg-icons';
import { AngularEditorConfig } from 'angular-editor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'app';

  form: FormGroup;

  floatingHtmlContent = '';
  htmlContent1 = '';
  htmlContent2 = '';

  config1: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    minHeight: '5rem',
    maxHeight: '15rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    sanitize: false,
    // toolbarPosition: 'top',
    outline: true,
    defaultFontName: 'Comic Sans MS',
    defaultFontSize: '5',
    // showToolbar: false,
    defaultParagraphSeparator: 'p',
    customButtons: [
      {
        customButtonId: 'insertImageGallery',
        faIcon: ['fas', 'images'],
        onClick: () => {
          console.log('click on insertImageGallery');
        },
      },
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText',
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    toolbarHiddenButtons: [['bold', 'italic'], ['fontSize']],
    toolbarBgClass: 'bg-dark',
    toolbarBtnClass: 'btn btn-light btn-sm',
  };

  config2: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    minHeight: '5rem',
    maxHeight: '15rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    sanitize: true,
    toolbarPosition: 'bottom',
    defaultFontName: 'Comic Sans MS',
    defaultFontSize: '5',
    defaultParagraphSeparator: 'p',
    customButtons: [
      {
        customButtonId: 'insertImageGallery',
        faIcon: ['fas', 'images'],
        onClick: () => {
          console.log('click on insertImageGallery');
        },
      },
      {
        customButtonId: 'downloadImageGallery',
        faIcon: ['fas', 'download'],
        onClick: () => {
          console.log('click on downloadImageGallery');
        },
      },
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText',
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
  };

  floatingConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    minHeight: '5rem',
    maxHeight: '15rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    sanitize: false,
    // toolbarPosition: 'top',
    outline: true,
    defaultFontName: 'Comic Sans MS',
    defaultFontSize: '5',
    // showToolbar: false,
    defaultParagraphSeparator: 'p',
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText',
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    toolbarPosition: 'floating',
    toolbarHiddenButtons: [['bold', 'italic'], ['fontSize']],
    toolbarBgClass: 'bg-dark',
    toolbarBtnClass: 'btn btn-light btn-sm',
  };

  constructor(private formBuilder: FormBuilder, library: FaIconLibrary) {
    library.addIcons(faImages, faDownload);
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      signature: ['', Validators.required],
    });
    console.log(this.htmlContent1);
  }

  onChange(_event) {
    console.log('changed');
  }

  onBlur(event) {
    console.log('blur ' + event);
  }

  onChange2(_event) {
    console.warn(this.form.value);
  }
}
