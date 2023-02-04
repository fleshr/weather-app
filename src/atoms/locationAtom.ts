import { ILocation } from '@/interfaces/Location';
import { atom } from 'recoil';

const defaultState: ILocation | null = null;

export const locationAtom = atom<ILocation | null>({
  key: 'Location',
  default: defaultState,
});
