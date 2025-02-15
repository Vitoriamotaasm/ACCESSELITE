import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';

library.add(faGoogle, faFacebook);

export const appConfig: ApplicationConfig = {
  providers: [provideRouter([]), provideAnimations(), FontAwesomeModule]
};