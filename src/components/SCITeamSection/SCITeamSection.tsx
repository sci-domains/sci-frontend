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
    name: 'John Doe',
    jobDescription: 'CEO',
    photoUrl: '/images/team_identities/al.png',
    linkedInUrl: 'https://www.linkedin.com/in/johndoe',
  },
  {
    name: 'Jane Doe',
    jobDescription: 'CTO',
    photoUrl: '/images/team_identities/av.png',
    linkedInUrl: 'https://www.linkedin.com/in/janedoe',
  },
  {
    name: 'John Doe',
    jobDescription: 'CEO',
    photoUrl: '/images/team_identities/al.png',
    linkedInUrl: 'https://www.linkedin.com/in/johndoe',
  },
  {
    name: 'Jane Doe',
    jobDescription: 'CTO',
    photoUrl: '/images/team_identities/av.png',
    linkedInUrl: 'https://www.linkedin.com/in/janedoe',
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
            <h2>{member.name}</h2>
            <p>{member.jobDescription}</p>
            <a href={member.linkedInUrl}>LinkedIn</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SCITeamSection;
