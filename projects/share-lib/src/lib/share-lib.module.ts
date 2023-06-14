import { ModuleWithProviders, NgModule } from '@angular/core';
import { ShareLibComponent } from './share-lib.component';
import { ShareLibService } from './share-lib.service';

@NgModule({
  declarations: [ShareLibComponent],
  imports: [],
  exports: [ShareLibComponent],
})
export class ShareLibModule {
  static forRoot(): ModuleWithProviders<ShareLibModule> {
    return {
      ngModule: ShareLibModule,
      providers: [ShareLibService],
    };
  }
}