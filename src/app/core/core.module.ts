import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { ApproutingModule } from '../app-routing.module';
import { AuthGuard } from '../auth/auth-guard.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../shared/auth.interceptor';
import { LogginInterceptor } from '../shared/loggin-inerceptor';
import { AuthService } from '../auth/auth.service';
import { MenShirtsService } from '../men-shirts/men-shirts.service';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@NgModule({
  declarations: [HeaderComponent, HomeComponent],
  imports: [SharedModule, ApproutingModule],
  exports: [ApproutingModule, HeaderComponent],
  providers: [
    AuthGuard,
    AuthService,
    MenShirtsService,
    ShoppingListService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LogginInterceptor, multi: true }
  ]
})
export class CoreModule {}
