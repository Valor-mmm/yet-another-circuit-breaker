import {
  mergeConfigWithDefaults,
  PartialCircuitConfig,
} from './circuitCreation/circuitConfig';
import { createCircuit } from './circuitCreation/circuit';
import { composeCircuitResult } from './circuitLogic';

export const applyCircuit = <T>(
  operation: Promise<T>,
  config?: PartialCircuitConfig
): Promise<T> => {
  const circuitConfig = mergeConfigWithDefaults(config);
  const circuit = createCircuit(operation, circuitConfig);

  return composeCircuitResult(circuit);
};
