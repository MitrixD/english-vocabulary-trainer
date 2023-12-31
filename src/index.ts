import { words } from './data/words';
import { TrainerView } from './trainerView';
import { TrainerModel } from './trainerModel';
import './styles.css';

const model = new TrainerModel(words, 6);
const view = new TrainerView(model);
view.startTraining();
