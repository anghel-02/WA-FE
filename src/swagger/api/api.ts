export * from './appController.service';
import { AppControllerService } from './appController.service';
export * from './descController.service';
import { DescControllerService } from './descController.service';
export * from './imageController.service';
import { ImageControllerService } from './imageController.service';
export const APIS = [AppControllerService, DescControllerService, ImageControllerService];
