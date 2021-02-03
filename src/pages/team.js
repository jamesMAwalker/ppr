import React, { useEffect, useState } from 'react'
import gsap from "gsap"

import TeamMember from '../components/team-member'

import { MEMBER_BIOS } from '../assets/member-bios'

const members = [
  { id: 'david', gqlId: 'davidLS', name: "David Baar", role: 'Captain', type: 'Rouleur', veganYears: 11, bioText: MEMBER_BIOS.david.bio },
  { id: 'taylor', gqlId: 'taylorLS', name: "Taylor Dawson", role: 'FASTMAN', type: 'Puncheur', veganYears: 3, bioText: MEMBER_BIOS.taylor.bio },
  // { id: 'nick', gqlId: 'nickLS', name: "Nick Smith", role: '', type: 'Time Trialist', veganYears: 2, bioText: MEMBER_BIOS.nick.bio },
  { id: 'oscar', gqlId: 'oscarLS', name: "Oscar Ochoa", role: '', type: 'Time Trialist', veganYears: 5, bioText: MEMBER_BIOS.oscar.bio },
  { id: 'mattia', gqlId: 'mattiaLS', name: "Mattia Day", role: 'GC', type: 'Climber', veganYears: 3, bioText: '' },
  { id: 'james', gqlId: 'jamesLS', name: "James Walker", role: 'GC', type: 'Climber', veganYears: 3, bioText: MEMBER_BIOS.james.bio },
  { id: 'josh', gqlId: 'joshLS', name: "Josh Mayhew", role: 'SUPER DOMESTIQUE', type: 'Climber', veganYears: 6, bioText: '' },
]

const TeamMembers = () => {
  const [activeMember, setActiveMember] = useState(null)

  useEffect(() => {
     gsap.from(".animation-wrapper", 1, {
       opacity: 0,
     })
  }, [activeMember])

  const handleMemberClick = (idx) => {
    idx === activeMember 
      ? setActiveMember(-1)
      : setActiveMember(idx)
  }

  return (
    <section className='team-container'>
      <div className="absolute-wrapper">
        <div className="flex-wrapper">
          {
            members.map((member, idx) => {
              const active = idx === activeMember 
                ? 'active'
                : ''

              return (
                <TeamMember
                  key={member.name} 
                  idx={idx}
                  member={member}
                  active={active}
                  expandMember={handleMemberClick}
                />
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default TeamMembers
