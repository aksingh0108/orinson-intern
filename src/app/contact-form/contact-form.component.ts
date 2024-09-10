import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Contact } from './contact.model';
import { ContactService, } from '../services/contact.service'; 

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {

   name:string='';
   email:string='';
   message:string='';

   
  constructor(private contactService: ContactService) {}

   // Add this method to validate and mark the form field as touched
   validateField(field: any): void {
    field.control.markAsTouched();
    field.control.updateValueAndValidity();
  }


  onSubmit() {
    const contact: Contact = {
      name: this.name,
      email: this.email,
      message: this.message
    };

    this.contactService.submitContactForm(contact).subscribe(response => {
      console.log('Form submitted successfully', response);
      // You can reset the form or display a success message here
    }, error => {
      console.error('Error submitting form', error);
    });
  }

}
