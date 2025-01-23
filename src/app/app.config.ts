import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEntityData, withEffects } from '@ngrx/data';
import { entityConfig } from './entity-metadata';
import { provideEffects } from '@ngrx/effects';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideStore(), provideEntityData(entityConfig, withEffects()), provideEffects()]
};
