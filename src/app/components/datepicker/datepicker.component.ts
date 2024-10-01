import { Component, OnInit } from '@angular/core';
import { FormControl, UntypedFormArray, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

export type DigiCalendarDatepickerValue = Date[];

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrl: './datepicker.component.scss'
})
export class DatepickerComponent implements OnInit {
  public myForm!: UntypedFormGroup;
  public skillForm!: UntypedFormGroup;
  // public selectedDate = new Date('1978-04-09');

  constructor(
    private fb: UntypedFormBuilder,
  ) {
  }

  ngOnInit(): void {

    this.myForm = this.fb.group({
      myDate: this.fb.array([[]]),
    });

    // this.myForm.controls['myDate'].valueChanges.subscribe((e) =>
    //   console.log(`myDate changed to: ${e}`)
    // );
  }

  get myDate() {
    return this.myForm.controls['myDate'] as UntypedFormArray;
  }

  onDateChange(e: any){
    const isDate = !!e.detail[0]
    
    if(isDate) {
      this.myDate.setValue(e.detail);
      return;
    }

    this.myDate.setValue([[]]);
  }

  setSelectedDate(date: FormControl<DigiCalendarDatepickerValue | null>) {
    const formatedDate = date?.value as Date[];

    if (formatedDate) {
      return [new Date(formatedDate[0])];
    }
    return [];
  }

  submitButtonHandler() {
    // this.myForm.markAllAsTouched();
  }
}
