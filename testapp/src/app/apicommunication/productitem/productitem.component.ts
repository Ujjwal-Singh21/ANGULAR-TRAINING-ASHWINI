import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiproductcommunicationService } from 'src/shared/apiproductcommunication.service';
import { Product } from 'src/shared/product.model';

@Component({
  selector: 'app-productitem',
  templateUrl: './productitem.component.html',
  styleUrls: ['./productitem.component.css']
})
export class ProductitemComponent implements OnInit {

  @Input() product: Product;

  constructor(private router: Router, private route: ActivatedRoute,
    private apiProductCommunicationService: ApiproductcommunicationService) { }

  ngOnInit(): void {
  }

  onEdit() {
    this.router.navigate(['edit', this.product.id], { relativeTo: this.route})
  }

  onDelete() {
    this.apiProductCommunicationService.deleteProduct(this.product.id)
    .subscribe((resp) => {
      console.log('Delete resp', resp)
      this.apiProductCommunicationService.productListUpdated.next(true);
      this.router.navigate(['']);
    })
  }

}
