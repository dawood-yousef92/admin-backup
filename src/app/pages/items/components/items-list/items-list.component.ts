import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { LoaderService } from 'src/app/_metronic/core/services/loader.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {
  permissions = localStorage.getItem('permissions');
  customActions:any[] = [];
  selectedUserId:string;
  dataSettings:any = {
    selectedRolesIds: [],
    searchText: "",
    sortBy: "",
    pageNumber: 0,
    rowsPerPage: 10,
    selectedPageSize: 0
  }

  displayedColumns: string[] = ['image', 'name', 'category', 'price', 'offerPrice', 'originalCountry',];
  actions:any = [];
  gridData:any[] = [];
  @ViewChild('deleteModal', { static: false }) deleteModal: ElementRef;
  
  constructor(private toaster: ToastrService, private router: Router,
    private loderService: LoaderService, private modalService: NgbModal) { }

  checkPermissions() {
    if(this.permissions.includes('Users.UpdateUser') || true) {
      this.customActions.push({name: 'edit', icon:'flaticon2-edit text-warning'})
    }
    if(this.permissions.includes('Users.DeleteUser') || true) {
      this.customActions.push({name: 'delete', icon:'flaticon2-trash text-danger'})
    }
    if(this.customActions.length > 0) {
      this.displayedColumns.push('actions');
    }
  }

  actionsEvent(event) {
    this.selectedUserId = event.rowId;
    if(event.type === 'view') {
      alert('view');
    }
    else if(event.type === 'edit') {
      alert('edit');
      // this.router.navigate([`/users/edit-user/${this.selectedUserId}`]);
    }
    else if(event.type === 'delete') {
      this.openCentred(this.deleteModal);
    }
  }

  openCentred(content) {
    this.modalService.open(content, { centered: true } );
  }

  confirmDelete() {
    this.modalService.dismissAll();
    // this.usersService.deleteUser(this.selectedUserId).subscribe((data) => {
    //   this.toaster.success(data.result);
    //   this.getUsers();
    //   this.modalService.dismissAll();
    // });
  }

  ngOnInit(): void {
    this.checkPermissions();
    setTimeout(() => {
      this.gridData = [
        {
          image:'<img src="./assets/images/Capture2.PNG" class="img-table-col"/>',
          name:'dfgdger',
          category:'Meat',
          price:'30 JD',
          offerPrice:'22 JD',
          originalCountry:'Jordan',
        },
        {
          image:'<img src="./assets/images/Capture3.PNG" class="img-table-col"/>',
          name:'egegt',
          category:'Meat',
          price:'30 JD',
          offerPrice:'22 JD',
          originalCountry:'Jordan',
        },
        {
          image:'<img src="./assets/images/Capture4.PNG" class="img-table-col"/>',
          name:'Buffalo Meat',
          category:'Meat',
          price:'30 JD',
          offerPrice:'22 JD',
          originalCountry:'Jordan',
        },
        {
          image:'<img src="./assets/images/Capture5.PNG" class="img-table-col"/>',
          name:'dfdfgt',
          category:'Meat',
          price:'30 JD',
          offerPrice:'22 JD',
          originalCountry:'Jordan',
        },
        {
          image:'<img src="./assets/images/Capture6.PNG" class="img-table-col"/>',
          name:'dgfdfgd',
          category:'Meat',
          price:'30 JD',
          offerPrice:'22 JD',
          originalCountry:'Jordan',
        },
        {
          image:'<img src="./assets/images/Capture7.PNG" class="img-table-col"/>',
          name:'zsdfef',
          category:'Meat',
          price:'30 JD',
          offerPrice:'22 JD',
          originalCountry:'Jordan',
        },
      ];  
    },0);
  }

}
