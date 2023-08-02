import { Controller } from '@nestjs/common';
import { TrainsService } from './trains.service';

@Controller('trains')
export class TrainsController {
  constructor(private readonly trainsService: TrainsService) {}
}
