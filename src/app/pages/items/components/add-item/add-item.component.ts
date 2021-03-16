import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GeneralService } from 'src/app/pages/general.service';
import { LoaderService } from 'src/app/_metronic/core/services/loader.service';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ItemsService } from '../../items.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
  @ViewChild("catModal") catModal: TemplateRef<any>;
  @ViewChild('cropModal', { static: false }) cropModal: ElementRef;
  countries:any = [];
  countriesFilter:string = '';
  imageChangedEvent: any = '';
  croppedImage: any = '';
  itemImages:any = [];
  errorImg:boolean = false;

  categories:any;
  selectedCat:any[] = [];
  closeResult = '';

  itemForm: FormGroup;
  constructor(private generalService:GeneralService,
              private itemsService:ItemsService,
              private fb: FormBuilder,private toaster: ToastrService,
              private router: Router,
              private loderService: LoaderService,
              private modalService: NgbModal) { }

  initForm() {
    this.itemForm = this.fb.group(
    {
      name: [
        ''
      ],
      nameAr: [
        ''
      ],
      description: [
        ''
      ],
      descriptionAr: [
        ''
      ],
      price: [
        null
      ],
      offerPrice: [
        null
      ],
      originalCountry: [
        null
      ],
      primaryImage: [
        0
      ],
      isActive: [
        true
      ],
    });
  }

  getCountries() {
    this.generalService.getCountries().subscribe((data) => {
      this.countries = data.result.countries;
    });
  }

  search(e,type) {
    if(type === 'countries') {
      this.countriesFilter = e;
    }
  }

  submit() {
    alert('saved');
  }

  ngOnInit(): void {
    this.getCountries();
    this.initForm();
    this.getCategoriesByBusinessType();
  }

  test() {
    console.log(this.itemImages);
  }

  selectFile() {
    let inputFile = document.getElementById('select-file');
    inputFile.click();
  }

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
    this.modalService.open(this.cropModal, { centered: true } );

  }

  deleteImg(img) {
    this.itemForm.get('primaryImage').setValue(0);
    this.itemImages.splice(this.itemImages.indexOf(img),1);
  }

  imageCropped(event: ImageCroppedEvent) {
    let inputFile = document.getElementById('select-file');
    this.croppedImage = {base64: event?.base64 , file: this.dataURLtoFile(event.base64, (inputFile as HTMLInputElement)?.files[0]?.name)};
  }

  imageLoaded(image: HTMLImageElement) {
      // show cropper
  }

  cropperReady() {
      // cropper ready
  }

  loadImageFailed() {
      // show message
  }

  addCroppedImage(img) {
    console.log(img);
    if(img.file.size > 2097152) {
      this.errorImg = true;
    }
    else {
      this.errorImg = false;
      this.itemImages.push(img);
      this.modalService.dismissAll();
    }
  }

  dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), 
        n = bstr.length, 
        u8arr = new Uint8Array(n);
    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, {type:mime});
  }

  openModal(content) {
    this.modalService.open(content, { centered: true } ).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  getCategoriesByBusinessType() {
    this.selectedCat = [];
    this.loderService.setIsLoading = true;
    this.itemsService.getCategoriesByBusinessType(3).subscribe((data) => {
      this.categories = data.result.productsCategoryItem.concat(data.result.servicesCategoryItem);
      this.loderService.setIsLoading = false;
    },(error) => {
      this.loderService.setIsLoading = false;
    });
  }

}
