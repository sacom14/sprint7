// import { Injectable } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { TotalBudgetPriceService } from './totalBudgetPrice.service';

// @Injectable({providedIn: 'root'})
// export class SubmitInputService {

//   public myForm: FormGroup = this.fb.group({
//     page: ['', [Validators.required, Validators.min(1), Validators.max(10)]],
//     lenguage: ['', [Validators.required, Validators.min(1)]]
//   })

//   constructor(private fb: FormBuilder, private totalBudgetPriceService: TotalBudgetPriceService) { }

//   onSubmit() {
//     this.myForm.markAllAsTouched();

//     if (this.myForm.valid) {
//       const pages:number = this.myForm.get('page')!.value;
//       const lenguages:number = this.myForm.get('lenguage')!.value;

//       this.totalBudgetPriceService.addtTotalWebPrice(pages, lenguages);

//     } else{
//       this.totalBudgetPriceService.addtTotalWebPrice(0, 0);
//     }
//   }
// }