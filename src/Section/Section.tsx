import { PropsWithChildren, useContext } from 'react';
import { LevelContext } from '../LevelContext/LevelContext';

export interface PropsSection extends PropsWithChildren{}

export default function Section({ children }:PropsSection) {
  const level = useContext(LevelContext);
  return (
    <section className="section">
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </section>
  );
}
