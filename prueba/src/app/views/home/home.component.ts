import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationExtras, Router } from '@angular/router';
import { TwoService } from '../../services/get-two.service';
import { OneService } from '../../services/get-one.service';
import { HttpClientModule } from '@angular/common/http';
import { IProduct } from '../../interface/product';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [OneService, TwoService]
})
export class HomeComponent implements OnInit {
  private readonly router: Router = inject(Router);
  private readonly oneService: OneService = inject(OneService);
  listItem: IProduct[] = [];

  ngOnInit(): void {
    this.oneService.getOne().subscribe({
      next: (response) => {
        console.log('Respuesta GET ONE A:', response);
        this.listItem = response;
      },
      error: (error) => {
        console.error('Error:', error);
      },
      complete: () => {
        // Este bloque es opcional y se ejecuta cuando la observación se completa (si es necesario)
      },
    });
  }


  gotoProduct(id: number){
    const navigationExtras: NavigationExtras = {
      queryParams: { 'id': id }
    };
    this.router.navigate(['producto'], navigationExtras);
  }

}
