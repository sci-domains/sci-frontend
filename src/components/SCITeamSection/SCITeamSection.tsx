// src/components/SCITeam/SCITeam.tsx
import React from 'react';
import styles from './SCITeamSection.module.scss';

interface TeamMember {
  name: string;
  jobDescription: string;
  photoUrl: string;
  linkedInUrl: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Agustin Lavarello',
    jobDescription: 'Fullstack & Solidity Engineer',
    photoUrl: '/images/team_identities/al.png',
    linkedInUrl: 'https://www.linkedin.com/in/agustin-lavarello-62ab1114b/',
  },
  {
    name: 'Nicolas De Leon',
    jobDescription: 'Fullstack Engineer',
    photoUrl: '/images/team_identities/nde.png',
    linkedInUrl: 'https://www.linkedin.com/in/nicolasmatiasdeleon/',
  },
  {
    name: 'Agustin Vazquez',
    jobDescription: 'Fullstack Engineer',
    photoUrl: '/images/team_identities/av.png',
    linkedInUrl: 'https://www.linkedin.com/in/agustinignaciovazquez/',
  },
  {
    name: 'Santiago Echeverria',
    jobDescription: 'Product Owner',
    photoUrl: '/images/team_identities/se.png',
    linkedInUrl: 'https://www.linkedin.com/in/santiago-echeverria-697844116/',
  },
];

const SCITeamSection: React.FC = () => {
  return (
    <section className={styles.teamSection}>
      <h1 className={styles.title}>Our Team</h1>
      <div className={styles.grid}>
        {teamMembers.map((member, index) => (
          <div key={index} className={styles.card}>
            <img src={member.photoUrl} alt={member.name} />
            <div className={styles.info}>
              <div className={styles.description}>
                <h2>{member.name}</h2>
                <p>{member.jobDescription}</p>
              </div>
              <a className={styles.socialMedia} href={member.linkedInUrl}>
                <img
                  src={'/images/logo/linkedIn.svg'}
                  alt={'LinkedIn Profile'}
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SCITeamSection;
