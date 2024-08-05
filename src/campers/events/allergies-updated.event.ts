import { Camper } from "../camper";

export class CamperAllergiesUpdatedEvent {
	constructor(
		public readonly camper: Camper
	){}
}