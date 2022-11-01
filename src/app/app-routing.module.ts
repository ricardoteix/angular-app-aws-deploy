import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
@NgModule({
    imports: [
        RouterModule.forRoot([
          { path: '', component: HomeComponent }
        ], 
        { 
          scrollPositionRestoration: 'enabled', 
          anchorScrolling: 'enabled', 
          onSameUrlNavigation: 'reload' 
        }
      )
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
