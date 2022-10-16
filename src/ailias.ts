type skill = [number, string, number];
const html: skill = [1, 'html', 10];
const css: skill = [2, 'css', 20];
const js: skill = [3, 'javascript', 30];

const allSkills: skill[] = [
  [1, 'html', 10],
  [2, 'css', 20],
  [3, 'javascript', 30],
];

type module = {
  index: number;
  title: string;
  hours: number;
};

type FinalProject = {
  descriptionFinalProject: string;
  hoursFinalProject: number;
};

type moduleWithFinalProject = module | FinalProject;

const m1: moduleWithFinalProject = {
  index: 1,
  title: 'Основы HTML',
  hours: 5,
  descriptionFinalProject: 'Структурная вёрстка',
  hoursFinalProject: 2,
};

const m2: module = {
  index: 2,
  title: 'Основы CSS',
  hours: 8,
};

const m3: moduleWithFinalProject = {
  index: 3,
  title: 'Основы JS',
  hours: 12,
  descriptionFinalProject: 'CRM',
  hoursFinalProject: 12,
};

const m4: moduleWithFinalProject = {
  descriptionFinalProject: 'Создание игры',
  hoursFinalProject: 8,
};

const course1: readonly module[] = [
  {
    index: 1,
    title: 'Основы HTML',
    hours: 5,
  },
  {
    index: 2,
    title: 'Основы CSS',
    hours: 8,
  },
  {
    index: 3,
    title: 'Основы JS',
    hours: 12,
  },
];

const course2: ReadonlyArray<module> = [
  {
    index: 1,
    title: 'Основы HTML',
    hours: 5,
  },
  {
    index: 2,
    title: 'Основы CSS',
    hours: 8,
  },
  {
    index: 3,
    title: 'Основы JS',
    hours: 12,
  },
];
