import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  itemForm: FormGroup;
  constructor(private fb: FormBuilder,) { }

  initForm() {
    this.itemForm = this.fb.group(
    {
      name: [
        ''
      ],
      description: [
        ''
      ],
    });
  }

  submit() {
    alert('saved');
  }

  ngOnInit(): void {
    this.initForm();
  }

}
