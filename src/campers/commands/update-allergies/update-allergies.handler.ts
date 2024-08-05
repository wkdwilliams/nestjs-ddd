import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { CamperEntityRepository } from '../../db/camper-entity.repository';
import { UpdateAllergiesCommand } from './update-allergies.command';
import { CamperAllergiesUpdatedEvent } from '../../events/allergies-updated.event';

@CommandHandler(UpdateAllergiesCommand)
export class UpdateAllergiesHandler
  implements ICommandHandler<UpdateAllergiesCommand> {
  constructor(
    private readonly camperEntityRepository: CamperEntityRepository,
    private readonly eventPublisher: EventPublisher,
  ) {}

  async execute({
    camperId,
    allergies,
  }: UpdateAllergiesCommand): Promise<void> {
    const camper = this.eventPublisher.mergeObjectContext(
      await this.camperEntityRepository.findOneById(camperId),
    );

    camper.updateAllergies(allergies);
    this.camperEntityRepository.findOneAndReplaceById(camper.getId(), camper);
    camper.apply(new CamperAllergiesUpdatedEvent(camper))
    camper.commit();
  }
}
