import { CamperAllergiesUpdatedHandler } from './allergies-updated.handler';
import { CamperCreatedHandler } from './camper-created.handler';

export const CamperEventHandlers = [
	CamperCreatedHandler,
	CamperAllergiesUpdatedHandler
];
