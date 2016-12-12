import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

// haciendo bootstrap del modulo que se le pasa
platformBrowserDynamic().bootstrapModule(AppModule);
