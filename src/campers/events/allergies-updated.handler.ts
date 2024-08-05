import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { CamperAllergiesUpdatedEvent } from "./allergies-updated.event";

@EventsHandler(CamperAllergiesUpdatedEvent)
export class CamperAllergiesUpdatedHandler implements IEventHandler<CamperAllergiesUpdatedEvent> {
  async handle(camper: CamperAllergiesUpdatedEvent): Promise<void> {
    console.log('Camper Created:', camper);
  }
}