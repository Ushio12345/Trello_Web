import { PointerSensor, PointerActivationConstraints } from "@dnd-kit/dom";

export const sensors = [
  PointerSensor.configure({
    activationConstraints: [
      new PointerActivationConstraints.Delay({ value: 200, tolerance: 10 }),
      new PointerActivationConstraints.Distance({ value: 10 }),
    ],
  }),
];
