import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TwoService } from '../../services/get-two.service';
import { IProduct } from '../../interface/product';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
  providers: [TwoService]
})
export class ProductComponent {
  private readonly twoService: TwoService = inject(TwoService);
  private readonly activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private readonly router: Router = inject(Router);
  item!: IProduct;


  
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      const id = +params['id'];
      console.log('Id recibido:', id);
      this.twoService.getTwo(id).subscribe({
        next: (response) => {
          console.log('Respuesta GET TWO A:', response);
          this.item = response[0];
        },
        error: (error) => {
          console.error('Error:', error);
        },
        complete: () => {
          // Este bloque es opcional y se ejecuta cuando la observación se completa (si es necesario)
        },
      });

    });
  }


  gotoHome(){
    this.router.navigate(['']);
  }

}
