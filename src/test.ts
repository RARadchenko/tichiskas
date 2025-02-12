import 'zone.js/testing';  
import { getTestBed } from '@angular/core/testing';  
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';  

// Инициализация тестового окружения
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

const testModules = Object.keys((window as any).__karma__.files)
                        .filter(path => /\.spec\.ts$/.test(path));
                        
testModules.forEach(module => {
  require(module);
});